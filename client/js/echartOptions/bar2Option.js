const bar2Option = {

	title:{/*标题组件*/
		show:true,//Bool|default:true|是否显示标题组件
		text:"ECharts入门示例",//String|default:""|主标题文本，支持\n换行
		subtext:'衣物销量/利润统计',
		left:100
	},
 
	legend: {/*图例组件*/
		data: ['销量','利润'],
		orient:'horizontal',//图例组件的布局朝向
		align:'auto',
		padding:5,
		itemGap:10,//图例每项之间的间隔
		itemWidth:30,//图例标记的图形宽度
		itemHeight:15,//图例标记的图形高度
		//formatter:'Legend 销量',//格式化图例文本
		selectedMode:true,//是否可以通过点击图例改变系列的显示状态
		inactiveColor:'gray',//图例关闭时的颜色
		
		selected:{//图例选中状态表
			'销量':true,
			'利润':true
		},
		
	
	},
	grid:{
		show:true,//是否显示直角坐标系网络
		containLabel:true,//grid区域是否包含坐标轴的刻度标签
		backgroundColor:'#ddd'
	},
	tooltip:{},

	xAxis:{
		position:'bottom',//x轴的位置
		type:'category',//可为'value'数值轴，'category'类目轴，'time'时间轴，'log'对数轴
		name:'品类',//坐标轴名称
		nameLocation:'end',//坐标轴名称显示位置,可为'start'|'middle'|'end'
		nameTextStyle:{
			color:'#888',
			fontSize:15,
			fontWeight:600
		},
		nameGap:10,//坐标轴名称与轴线间距
		nameRotate:0,//坐标轴名称旋转角度
		interverse:false,//是否反向坐标轴
		boundaryGap:true,//坐标轴两边留白策略，类目轴是Boolean,非类目轴是Array
		/*
		min:'dataMin',//对于类目轴无效坐标轴刻度的最大最小值，
		max:'dataMx',
		splitNumber:5,//分割段数，对类目轴无效
		minInterval:1,//自动计算的坐标轴最小间隔大小
		intervel:5,//强制设置坐标轴分割间隔，不建议使用，不能在类目轴使用
		logBase:10,//对数轴底数
		silent:false,//坐标轴是否静态无法交互
		triggerEvent:true,//坐标轴标签是否相应和触发鼠标事件
		*/
		axisLine:{ //坐标轴轴线相关设置
			show:true,//是否显示坐标轴轴线
			onZero:true,//是否显示在另一个轴的0刻度上
			lineStyle:{

			}
		},
		axisTick:{ //坐标轴刻度相关设置
			show:true,//是否显示刻度
			alignWithLabel:false,//刻度是否和标签对齐
			intervel:0,//刻度的间隔显示，为1表示隔一个标签显示一个
			inside:true,//刻度是否朝内
			length:5,//刻度线长度
			lineStyle:{//刻度线样式

			}
		},
		axisLabel:{//刻度标签相关设置
			show:true,
			inside:false,
			rotate:30,//刻度标签旋转角度
			margin:10,//刻度标签与轴线间距
		},
		splitLine:{//坐标轴在grid区域中的分隔线
			show:true,//是否显示分隔线，默认数值轴显示，类目轴不显示

		},
		data:[//类目数据，在类目轴中有效
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
			name:'销量',
			type:'bar',
			data:[5,20,36,10,10,20]
		},
		{
			name:'利润',
			type:'bar',
			data:[20,10,50,15,100,110]
		}
	]
};

export {bar2Option};