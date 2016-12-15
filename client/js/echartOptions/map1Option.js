const map1Option ={

	// 如要实现地图上区域数据可视化：应使用visualMap组件
	visualMap:{
		type:'continuous',
		min:0,
		max:150,
		text:['High','Low'],
		realtime:false,
		calculable:true,
		inRange:{
			color:['#fff1e0','#9E2F50'],
			//symbolSize:[30,100]
		}
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
				areaColor:'rgba(158,47,80,0.5)'
			}
		},
		data:[
			{name:'Russia',value:'103'},
			{name:'Kazakhstan',value:'38'},
			{name:'Pakistan',value:'143.2'},
			{name:'Bangladesh',value:'37.7'},
			{name:'Nepal',value:'17.4'},
			{name:'India',value:'36.1'},
			{name:'Thailand',value:'11.6'},
			{name:'Cambodia',value:'19.1'},
			{name:'Singapore',value:'37.3'},
			{name:'Malaysia',value:'64.5'},
			{name:'Philippines',value:'10'},
			{name:'Indonesia',value:'73.7'},
			{name:'Brunei',value:'2'},
			{name:'Croatia',value:'1.3'},
			{name:'Egypt',value:'36.9'},
			{name:'Iran',value:'6.9'},
			{name:'Iraq',value:'28.6'},
			{name:'Israel',value:'54.7'},
			{name:'Jordan',value:'6.2'},
			{name:'Kuwait',value:'4.6'},
			{name:'Kyrghyzstan',value:'38'},
			{name:'Laos',value:'0'},
			{name:'Macedonia',value:'4'},
			{name:'Mongolia',value:'0'},
			{name:'Republic of Montenegro',value:'11.2'},
			{name: "Myanmar",value: "3"}, 
			{name: "Oman",value: "3"}, 
			{name: "Poland",value: "3.9"},
			{name: "Katar",value: "1.7"}, 
			{name: "Rumania",value: "5.4"}, 
			{name: "Saudi Arabia",value: "47.2"}, 
			{
            "name": "serbia",
            "value": "19.2"
        }, {
            "name": "Singapore",
            "value": "37.3"
        }, {
            "name": "Sri Lanka",
            "value": "37.1"
        }, {
            "name": "Syria",
            "value": "0"
        }, {
            "name": "Tajikistan",
            "value": "2.5"
        }, {
            "name": "Turkey ",
            "value": "4.8"
        }, {
            "name": "Turkmenistan",
            "value": "6"
        }, {
            "name": "The United Arab Emirates",
            "value": "13.8"
        }, {
            "name": "Ukraine",
            "value": "0"
        }, {
            "name": "Uzbekistan",
            "value": "4.4"
        }, {
            "name": "Vietnam",
            "value": "0"
        }, {
            "name": "Yemen",
            "value": "5.1",
            itemStyle:{
            	emphasis:{
            		
            	}
            }
        }

		]
		
			
	}],
	tooltip:{
		trigger:'item',
		confine:true,
		formatter:'{b}:<br/>{c}亿'
	},
}

export { map1Option };