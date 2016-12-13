const map1Option ={

	// 如要实现地图上区域数据可视化：应使用visualMap组件
	visualMap:{
		type:'continuous',
		min:0,
		max:150,
		text:['High','Low'],
		realtime:false,
		calculable:true,
		color:['orangered','yellow','lightskyblue']
	},
	// 如要实现地图上点数据或线数据可视化：在 ECharts 3 中不再建议在地图类型的图表使用series中的 markLine 和 markPoint。应使用在地理坐标系组件geo上的散点图和线图。
	/*
	geo:{
	},
	*/

	series:[{
		name:'2013年至今中国对一带一路国家的投资概况',
		type:'map',
		map:'world',
		roam:'scale',
		//center:[115.97,29.71],
		zoom:1,
		itemStyle:{
			emphasis:{

			}
		},
		data:[
			{name:'Russia',value:'103'},
			{name:'Kazakhstan',value:'38'},
			{name:'Pakistan',value:'143.2'}

		],
		
			
	}]
}

export { map1Option };