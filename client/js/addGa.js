class TrackEvents{
	/*
	*
	* @param trackedEls: Type String, an id of one HTMLELement,which you want to track the event
	* @param config: Type object,like
		{
			hitType:'event',(必须)
			eventCategory:'Chart',(通常是用户与之互动的对象)（必须）
			eventAction:'Click',(互动类型)（必须）
			eventLabel:'linechart1',(用于对事件进行进一步分类说明)（非必须）
			eventValue:1(与事件相关的数值)（非必须）
		}
	*/
	constructor(trackedEl,config){
		if(!trackedEl){
			return;
		}else if(!(trackedEl instanceof HTMLElement)){
			trackedEl = document.getElementById(trackedEl);
		}
		this.trackedEl = trackedEl;
		this.trackClickEvent(trackedEl,config);
	}

	trackClickEvent(trackedEl,config){
		trackedEl.addEventListener('click',function(){
			ga('send',config);
		});
	}
	static init(){
		const trackedEls = new Array();
		trackedEls.push(new TrackEvents(
			"line1",{
				hitType:'event',
				eventCategory:'Chart',
				eventAction:'Click',
				eventLabel:'linechart1'
			}
		));
		trackedEls.push(new TrackEvents(
			"line2",{
				hitType:'event',
				eventCategory:'Chart',
				eventAction:'Click',
				eventLabel:'linechart2'
			}
		));
		trackedEls.push(new TrackEvents(
			"bar2",{
				hitType:'event',
				eventCategory:'Chart',
				eventAction:'Click',
				eventLabel:'barchart2'
			}
		));
		trackedEls.push(new TrackEvents(
			"map1",{
				hitType:'event',
				eventCategory:'Chart',
				eventAction:'Click',
				eventLabel:'mapchart1'
			}
		));
		return trackedEls;
	}
}

export default TrackEvents;