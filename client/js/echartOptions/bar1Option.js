const bar1Option = {
	title:{
		show:true,//Bool|default:true|是否显示标题组件
		text:"ECharts入门示例",//String|default:""|主标题文本，支持\n换行
		link:"",//String|default:""|主标题文本超链接,
		target:"blank",//default:"blank"|指定窗口打开超文本链接，可为"self"/"blank"
		textStyle:{
			color:"#000",//d:"#333"|主标题文字颜色
			fontStyle:'normal',//d:'normal'|主标题文字字体风格,可为'normal'/'italic'/'oblique'
			fontWeight:'normal',//d:'border'|主标题文字粗细，可为'normal'/'bold'/'bolder'/'lighter'/100/200/300/400..
			fontFamily:'黑体',// d:'sans-serif'|主标题文字字体系列
			fontSize:18//d:18
		},
		textAlign:'center',//d:根据标题位置决定|标题文本水平对齐，可为'left'/'center'/'right'
		textBaseline:'top',//d:根据标题位置决定|标题文本垂直对齐，支持'top'/'middle'/'bottom'
		subText:'衣物销量/利润统计',//d:""/副标题文本，支持用\n换行
		sublink:"",//副标题超链接
		subTarget:"blank",//副标题打开窗口，为"self"/"blank"
		subTextStyle:{//同textStyle
			color:'#111',//d:'#aaa'
			fontStyle:'normal',
			fontWeight:'lighter',//d:'normal'
			fontFamily:'黑体',
			fontSize:14//d:12
		},
		padding:1,//d:5|标题内边距，单位px，形式可为 5(上下左右为5)/[5,10](上下5，左右10)/[5,10,5,10](上右下左)
		itemGap:1,//d:10|主副标题间距
		zlevel:0,//d:0|所有图形的zlevel值，用于Canvas分层,zlevel大的会放在小的Canvas上面
		z:2,//d:2|组件所有图形的z值。和zlevel基本相似，但优先级比zlevel低
		left:'auto',//grid组件离容器左侧的距离，可为20|20%|'left'|'center'|'right'
		top:'auto',//grid组件离容器上侧的距离
		right:'auto',//grid组件离容器右侧的距离
		bottom:'auto',//grid组件离容器下侧的距离
		backgroundColor:'transparent',//标题背景色，
		borderColor:'#ccc',//标题边框颜色
		borderWidth:5,//标题边框线宽
	},

	tooltip:{},

	xAxis:{
		data:[
			"衬衫",
			"羊毛衫",
			"雪纺衫",
			"裤子",
			"高跟鞋",
			"袜子"
		]
	},

	yAxis:{},
	series:[
		{
			name:"销量",
			type:"bar",
			data:[5,20,36,10,10,20]
		},
		{
			name:"利润",
			type:"bar",
			data:[20,10,50,15,100]
		}
	]
};

//module.exports = bar1Option;
export {bar1Option};