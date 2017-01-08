import {control} from './control.js';
const opts = {
	tooltipShow: true,
	legendSelect: true,

	///for line:
	itemstyle1N: { 
		color:'#9e2f50',
		borderColor:'rgba(158,47,80,0)',
		borderWidth:10
	},
	itemstyle1E:{
		color:'#9e2f50',
		borderColor:'rgba(158,47,80,0.5)',
		borderWidth:10
	},

	itemstyle2N:{ 
		color:'#4781aa',
		borderColor:'rgba(71,129,170,0)',
		borderWidth:10
	},
	itemstyle2E:{
		color:'#4781aa',
		borderColor:'rgba(71,129,170,0.5)',
		borderWidth:10,
		borderType:'solid'		
	},

	// for bar:
	itemstyle3N:{ 
		color:'rgba(158,47,80,0.8)'
	},
	itemstyle3E:{
		color:'#9e2f50'
	},

	itemstyle4N:{
		color:'rgba(71,129,170,0.8)'
	},
	itemstyle4E:{
		color:'#4781aa'
	},

	//for map:
	itemstyle5N:{
		color:'rgba(158,47,80,0.5)',
		borderColor:'#9e2f50',
		borderWidth:2,
		borderType:'solid'
	},
	itemstyle5E:{
		color:'rgba(158,47,80,0.8)',
		borderColor:'#9e2f50',
		borderWidth:4,
		borderType:'solid'
	},

	//for line_inline:
	itemstyle6N:{
		color:'#9e2f50',
		borderColor:'rgba(158,30,80,0.0)',
		borderWidth:20,
		borderType:'solid'
	},
	itemstyle6E:{
		color:'#9e2f50',
		borderColor:'rgba(158,30,80,0.5)',
		borderWidth:10,
		borderType:'solid'
	},

	geoRoam:'scale',//for map

	serieslabel:{
		normal:{
			show:false
		},
		emphasis:{
			show:false
		}
	},
	hoverAni:true
	
}
if (control.interactive == "close") {
	opts.tooltipShow = false;
	opts.legendSelect = false;
	opts.itemstyle1E = opts.itemstyle1N;
	opts.itemstyle2E = opts.itemstyle2N;
	opts.itemstyle3E = opts.itemstyle3N;
	opts.itemstyle4E = opts.itemstyle4N;
	opts.itemstyle5E = opts.itemstyle5N;
	opts.itemstyle6E = opts.itemstyle6N;
	opts.geoRoam = false;
	opts.hoverAni = false;

	/* //这个label待处理
	opts.serieslabel = {
		normal:{
			show:true,
			formatter:'{c}',
			textStyle:{
				fontSize:8
			}
		},
		emphasis:{
			show:true,
			formatter:'{c}',
			textStyle:{
				fontSize:8
			}
		}
	};
	*/
} 

export {opts};