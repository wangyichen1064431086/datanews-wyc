import {elemWithMeasure,clientWithMeasure} from './someMeasure.js';
import {control} from './control.js';

class TrackEvents{

	constructor(trackedEl,type,config){
		/*
		*
		* @param trackedEls: Type String, an id of one HTMLELement,which you want to track the event
		* @param type:Type String ,"click" or "scroll"
		* @param config: Type object,like
			{
				hitType:'event',(必须)
				eventCategory:'Chart',(通常是用户与之互动的对象)（必须）
				eventAction:'Click',(互动类型)（必须）
				eventLabel:'linechart1',(用于对事件进行进一步分类说明)（非必须）
				eventValue:1(与事件相关的数值)（非必须）
			}
		*/
		if(!trackedEl){
			return;
		}else if(!(trackedEl instanceof HTMLElement)){
			trackedEl = document.getElementById(trackedEl);
		}
		this.trackedEl = trackedEl;
		if(type == "click"){
			this.trackClickEvent(trackedEl,config);
		} else if(type == "scroll"){
			this.trackScrollEvent(trackedEl,config);
		}
		
	}

	trackClickEvent(trackedEl,config){
		trackedEl.addEventListener('click',function(){
			ga('send',config);
		},false);
	}

	trackScrollEvent(trackedEl,config){
		let recorded = 0;
		window.addEventListener('scroll',function(){
			//进行条件判断，如果元素中心点出现在视口中

			const elem = elemWithMeasure(trackedEl);//调用函数得到对象
			const client = clientWithMeasure;//直接使用对象
			/*
			const elemCenterX = elem.leftInView+ elem.width/2 ;
			const elemCenterY = elem.topInView + elem.height/2 ;
			*/
			const elemX = elem.leftInView;
			const elemY = elem.topInView;
			

			if(recorded == 0 && elemX > 0 && elemX < client.width &&
			   elemY > 0 && elemY < client.height){
				console.log("sendScrollGa");
				console.log(trackedEl);
				console.log("elemX:"+elemX);
				console.log("elemY:"+elemY);
				console.log("clientWidth:"+client.width);
				console.log("clientHeight:"+client.height);
				ga('send',config);
				recorded = 1;
			}
		},false);
	}

	static init(){
		const trackedEls = new Array();
		trackedEls.push(new TrackEvents(
			"line1","click",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Click',
				eventLabel:'line1chart'
			}
		));
		trackedEls.push(new TrackEvents(
			"line2","click",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Click',
				eventLabel:'line2chart'
			}
		));
		trackedEls.push(new TrackEvents(
			"bar2","click",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Click',
				eventLabel:'bar2chart'
			}
		));
		trackedEls.push(new TrackEvents(
			"map1","click",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Click',
				eventLabel:'map1chart'
			}
		));
		trackedEls.push(new TrackEvents(
			"titlePart","scroll",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Inview',
				eventLabel:'titlepart'
			}
		));
		trackedEls.push(new TrackEvents(
			"bar2","scroll",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Inview',
				eventLabel:'bar2Inview'
			}
		));
		trackedEls.push(new TrackEvents(
			"map1","scroll",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Inview',
				eventLabel:'map1Inview'
			}
		));
		console.log(control.interactive);
		return trackedEls;
	}
}

export default TrackEvents;