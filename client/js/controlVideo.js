import {control} from './control.js';

function controlVideo(){
	const videoAtStart = document.getElementById("videoAtStart");
	const videoAtEnd = document.getElementById("videoAtEnd");
	if(control.testMode == 2 && control.video == "atStart"){
		videoAtStart.style.display = "block";
		videoAtEnd.style.display = "none";
	} else if(control.testMode == 2 && control.video == "no"){
		videoAtStart.style.display = "none";
		videoAtEnd.style.display = "none";
	} else {
		videoAtStart.style.display = "none";
		videoAtEnd.style.display = "block";
	}
}

export default controlVideo;
