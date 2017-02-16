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

		config.eventCategory = control.testMode==1?control.interactive:control.video;

		if(type == "click"){
			this.trackClickEvent(trackedEl,config);
		} else if(type == "scroll"){
			this.trackScrollEvent(trackedEl,config);
		} else if(type == "play") {
			this.trackPlayEvent(trackedEl,config);
		} else if(type == "pause"){
			this.trackPauseEvent(trackedEl,config);
		}
		
	}

	trackClickEvent(trackedEl,config){
		trackedEl.addEventListener('click',function(){
			ga('send',config);
		},false);
	}

	trackPlayEvent(trackedEl,config){
		trackedEl.addEventListener('play',function(){
			ga('send',config);
		});
	}

	trackPauseEvent(trackedEl,config){
		trackedEl.addEventListener('pause',function(){
			const playtime = trackedEl.currentTime;//这里要记录播放时长,trackedEl.currentTime,单位为s
			let playvalue = 0;
			if (playtime<5){
				playvalue = 0;
			} else if(playtime>=5&&playtime<10){
				playvalue = 1;
			} else if(playtime>=10){
				playvalue = 2;
			}
			config.eventValue = playvalue;
			ga('send',config);
		})
	}
	trackScrollEvent(trackedEl,config){
		let recorded = 0;
		window.addEventListener('scroll',function(){
			//进行条件判断，如果元素左上角出现在视口中

			const elem = elemWithMeasure(trackedEl);//调用函数得到对象
			const client = clientWithMeasure;//直接使用对象
		
			/*以元素左上角为基准
			const elemX = elem.leftInView;
			const elemY = elem.topInView;
			*/

			/*以元素中心为基准*/
			const elemX = elem.leftInView+elem.width/2;
			const elemY = elem.topInView+elem.height/2;

	
			if(recorded == 0 && elemX > 0 && elemX < client.width &&
			   elemY > 0 && elemY < client.height){
			
				window.setTimeout(function(){
					if(recorded == 0 && elemX > 0 && elemX < client.width && 
						elemY > 0 && elemY < client.height){
						console.log(trackedEl);
						console.log("left:"+elem.leftInView);
						console.log("top:"+elem.topInView);
						console.log("elemX:"+elemX);
						console.log("elemY:"+elemY);
						console.log("clientWidth:"+client.width);
						console.log("clientHeight:"+client.height);
						ga('send',config);
						recorded = 1;
					}
				
				},1000);//元素左上角要出现在视口中超过1s才算被看见
				

			}
		},false);
	}

	static init(){
		const trackedEls = new Array();
		if(control.testMode == 1){//实验1
			trackedEls.push(new TrackEvents(
				"line1","click",{
					hitType:'event',
					//eventCategory:control.interactive,
					eventAction:'Click',
					eventLabel:'line1chart'
				}
			));
			trackedEls.push(new TrackEvents(
				"line2","click",{
					hitType:'event',
					//eventCategory:control.interactive,
					eventAction:'Click',
					eventLabel:'line2chart'
				}
			));
			trackedEls.push(new TrackEvents(
				"bar2","click",{
					hitType:'event',
					//eventCategory:control.interactive,
					eventAction:'Click',
					eventLabel:'bar2chart'
				}
			));
			trackedEls.push(new TrackEvents(
				"map1","click",{
					hitType:'event',
					//eventCategory:control.interactive,
					eventAction:'Click',
					eventLabel:'map1chart'
				}
			));
		} else if(control.testMode == 2){
			if(control.video == "atStart"){
				trackedEls.push(new TrackEvents(
					"videoAtStart","play",{
						hitType:'event',
						//eventCategory:control.video,
						eventAction:'Play',
						eventLabel:'videoAtStart'
					}
				));
				trackedEls.push(new TrackEvents(
					"videoAtStart","pause",{
						hitType:'event',
						//eventCategory:control.video,
						eventAction:'Pause',
						eventLabel:'videoAtStart'
					}
				));
			} else if(control.video == "atEnd"){
				trackedEls.push(new TrackEvents(
					"videoAtEnd","play",{
						hitType:'event',
						//eventCategory:control.video,
						eventAction:'Play',
						eventLabel:'videoAtEnd'
					}
				));
				trackedEls.push(new TrackEvents(
					"videoAtEnd","pause",{
						hitType:'event',
						//eventCategory:control.video,
						eventAction:'Pause',
						eventLabel:'videoAtEnd'
					}
				));
			}
		}
	

		///统计各元素被看到的次数
		trackedEls.push(new TrackEvents(
			"titlePart","scroll",{
				hitType:'event',
				//eventCategory:testMode==1?control.interactive:control.video,
				eventAction:'Inview',
				eventLabel:'titlepart',
				eventValue:0
			}
		));
		trackedEls.push(new TrackEvents(
			"videoAtStart","scroll",{
				hitType:'event',
				//eventCategory:testMode==1?control.interactive:control.video,
				eventAction:'Inview',
				eventLabel:'videoAtStart',
				eventValue:1
			}
		));
		trackedEls.push(new TrackEvents(
			"pureText1","scroll",{
				hitType:'event',
				//eventCategory:testMode==1?control.interactive:control.video,
				eventAction:'Inview',
				eventLabel:'pureText1',
				eventValue:2
			}
		));
		trackedEls.push(new TrackEvents(
			"textAroundPic","scroll",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Inview',
				eventLabel:'textAroundPic',
				eventValue:3
			}
		));
		trackedEls.push(new TrackEvents(
			"lineGraph1","scroll",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Inview',
				eventLabel:'lineGraph1',
				eventValue:4
			}
		));
		trackedEls.push(new TrackEvents(
			"lineGraph2","scroll",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Inview',
				eventLabel:'lineGraph2',
				eventValue:5
			}
		));
		trackedEls.push(new TrackEvents(
			"pureText2","scroll",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Inview',
				eventLabel:'pureText2',
				eventValue:6
			}
		));
		trackedEls.push(new TrackEvents(
			"barGraph2","scroll",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Inview',
				eventLabel:'barGraph2',
				eventValue:7
			}
		));
		trackedEls.push(new TrackEvents(
			"mapGraph1","scroll",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Inview',
				eventLabel:'mapGraph1',
				eventValue:8
			}
		));
		trackedEls.push(new TrackEvents(
			"pureText3","scroll",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Inview',
				eventLabel:'pureText3',
				eventValue:9
			}
		));
		trackedEls.push(new TrackEvents(
			"tableArea1","scroll",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Inview',
				eventLabel:'tableArea1',
				eventValue:10
			}
		));
		trackedEls.push(new TrackEvents(
			"pureText4","scroll",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Inview',
				eventLabel:'pureText4',
				eventValue:11
			}
		));
		trackedEls.push(new TrackEvents(
			"videoAtEnd","scroll",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Inview',
				eventLabel:'videoAtEnd',
				eventValue:12
			}
		));
		trackedEls.push(new TrackEvents(
			"footerPart","scroll",{
				hitType:'event',
				eventCategory:control.interactive,
				eventAction:'Inview',
				eventLabel:'footerPart',
				eventValue:13
			}
		));
		console.log(control.interactive);
		return trackedEls;
	}
}

export default TrackEvents;