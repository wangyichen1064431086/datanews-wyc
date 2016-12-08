const bar2Option = {

	title:{/*标题组件*/
		show:true,//Bool|default:true|是否显示标题组件
		text:"一带一路国家占整体中国海外投资金额占比 仍有增长空间",
		left:'center',
		top:'top'
	},
 
	legend: {
		data: ['一带一路国家投资金额占比','其他国家投资金额占比'],
		top:55,
		right:'30%',
		orient:'vertical',
		padding:5,
		itemGap:10,//图例每项之间的间隔
		itemWidth:30,//图例标记的图形宽度
		itemHeight:15,//图例标记的图形高度
		selectedMode:true,//是否可以通过点击图例改变系列的显示状态
		inactiveColor:'gray',//图例关闭时的颜色
		selected:{//图例选中状态表
			'一带一路国家投资金额占比':true,
			'其他国家投资金额占比':true
		}
	},
	grid:{
		show:true,//是否显示直角坐标系网络
		containLabel:true,//grid区域是否包含坐标轴的刻度标签
		backgroundColor:'#ddd'
	},
	tooltip:{
		trigger:'item',
		confine:true,
		formatter:'{b}<br/>{a}{c}%'
	},

	xAxis:{
		position:'bottom',
		type:'category',
		name:'年份',//坐标轴名称
		nameLocation:'end',
		nameTextStyle:{
			color:'#888',
			fontSize:15,
			fontWeight:600
		},
		nameGap:10,
		nameRotate:0,
		boundaryGap:true,
		axisLine:{ //坐标轴轴线相关设置
			show:true,//是否显示坐标轴轴线
			onZero:true,//是否显示在另一个轴的0刻度上
			lineStyle:{

			}
		},
		axisTick:{ //坐标轴刻度相关设置
			show:true,//是否显示刻度
			alignWithLabel:true,//刻度是否和标签对齐
			intervel:0,//刻度的间隔显示，为1表示隔一个标签显示一个
			inside:false,//刻度是否朝内
			length:5,//刻度线长度
			lineStyle:{//刻度线样式

			}
		},
		axisLabel:{//刻度标签相关设置
			show:true,
			inside:false,
			rotate:0,//刻度标签旋转角度
			margin:10,//刻度标签与轴线间距
		},
		splitLine:{//坐标轴在grid区域中的分隔线
			show:false,//是否显示分隔线，默认数值轴显示，类目轴不显示
		},
		data:[//类目数据，在类目轴中有效
			"2005",
			"2006",
			"2007",
			"2008",
			"2009",
			"2010",
			"2011",
			"2012",
			"2013",
			"2014",
			"2015"
		]
	},

	yAxis:{
		name:'百分比%',
		nameTextStyle:{
			color:'#888',
			fontSize:15,
			fontWeight:600
		},
		nameGap:10,
		min:0,
		max:100,
		intervel:20,
		axisLine:{
			show:false
		},
		axisTick:{
			show:true,
			intervel:0,
			inside:false,
			length:10,
			lineStyle:{

			}
		}



	},
	series:[
		{
			name:'一带一路国家投资金额占比',
			type:'bar',
			data:[52,49,53,33,39,35,39,30,40,31,27]
		},
		{
			name:'其他国家投资金额占比',
			type:'bar',
			data:[48,51,47,67,61,65,61,70,60,69,73]
		}
	]
};

export {bar2Option};