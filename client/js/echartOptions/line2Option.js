const line2Option = {
	title:{
		text:'其次，中国对外投资也同时放缓',
		left:'center',
		top:'top'
	},

	legend:{
		orient:'vertical',
		data:['中国非金融类对外直接投资同比增长率'],
		right:100,
		top:100
	},

	xAxis:{
		type:'category',
		name:'年份',
		position:'bottom',
		axisLabel:{
			rotate:0
		},
		axisLine:{
			onZero:true
		},
		axisTick:{
			alignWithLabel:true,
			interval:0
		},
		data:['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014']
	},
	yAxis:{
		type:'value',
		name:'同比增长率 %',
		min:0,
		max:140,
		interval:20
	},
	tooltip:{
		trigger:'item',
		triggerOn:'mousemove',
		position:'top',
		formatter:'{b} <br/>{a}:{c}%',
		backgroundColor:'rgba(50,50,50,0.5)',
	},
	series:[
		{
			type:'line',
			name:'中国非金融类对外直接投资同比增长率',
			symbol:'circle',
			symbolSize:8,
			showAllSymbol:true,
			itemStyle:{
				normal:{
					color:'#700'
				},
				emphasis:{
					color:'#700',
					borderColor:'rgba(85,50,50,0.5)',
					borderWidth:10,
					borderType:'solid'
				}
			},
			lineStyle:{
				normal:{
					color:'#700',
					width:2,
					type:'solid'
				}
			},
			data:[123,31.6,6.2,63.6,6.5,36.3,1.8,28.6,16.8,14.1]
		}
	]
};

export { line2Option };