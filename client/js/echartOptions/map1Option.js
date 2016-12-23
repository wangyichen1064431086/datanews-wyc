const data=[
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
			{name: "serbia", value: "19.2"}, 
			{name: "Sri Lanka",value: "37.1"}, 
			{name: "Syria",value: "0"}, 
			{name: "Tajikistan", value: "2.5"}, 
			{name: "Turkey ",value: "4.8"}, 
			{name: "Turkmenistan",value: "6"}, 
			{name: "The United Arab Emirates",value: "13.8"},
			{name: "Ukraine",value: "0"},
			{name: "Uzbekistan",value: "4.4"}, 
			{name: "Vietnam",value: "0"}, 
			{name: "Yemen",value: "5.1"}

		];

const geoCoordMap = {
	        'Russia':[119.9,63.3],
			'Kazakhstan':[69.8,48.3],
			'Pakistan':[70.2,30.5],
			'Bangladesh':[90.017658,23.819976],
			'Nepal':[90.017658,23.819976],
			'India':[90.017658,23.819976],
			'Thailand':[90.017658,23.819976],
			'Cambodia':[104.275563,12.877402],
			'Singapore':[102.748588,19.347374],
			'Malaysia':[102.748588,19.347374],
			'Philippines':[102.748588,19.347374],
			'Indonesia':[102.748588,19.347374],
			'Brunei':[114.449268,4.491369],
			'Croatia':[15.839757,45.587474],
			'Egypt':[15.839757,45.587474],
			'Iran':[55.338754,32.279197],
			'Iraq':[42.828592,33.150186],
			'Israel':[34.954549,31.777653],
			'Jordan':[36.16877,30.956764],
			'Kuwait':[47.648684,29.422477],
			'Kyrghyzstan':[74.69271,41.82567],
			'Laos':[104.790688,18.155548],
			'Macedonia':[21.46933,41.5913],
			'Mongolia':[103.245315,47.391657],
			'Republic of Montenegro':[],
			"Myanmar":[95.812807,21.222123],
			"Oman":[56.516181,20.807509],
			"Poland":[19.868765,52.333245],
			"Katar":[51.088978,25.3843],
			"Rumania":[24.136938,46.178526],
			"Saudi Arabia":[44.116403,24.394168], 
			"serbia":[21.009398,44.227838],
			"Sri Lanka":[21.009398,44.227838],
			"Syria":[39.185927,35.334854],
			"Tajikistan":[72.153883,38.292747],
			"Turkey ":[35.469673,39.014079],
			"Turkmenistan":[35.469673,39.014079],
			"The United Arab Emirates":[35.469673,39.014079],
			"Ukraine":[31.275089,49.448635],
			"Uzbekistan":[62.734467,41.577487],
			"Vietnam":[105.305812,19.347374],
			"Yemen":[48.862905,16.316889]
};

const convertData = function (data) {
    const res = [];
    for (let i = 0; i < data.length; i++) {
        const geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

const map1Option ={
	title:{
		text:'2013年至今，中国对一带一路国家的投资概况',
		subtext:'(请缩放屏幕，看地图上详细资讯)',
		left:'center',
		top:'top'
	},
	tooltip:{
		trigger:'item'
	},
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
	
	geo:{
		map:'world',
		roam:'scale',
		label:{
			emphasis:{
				show:false
			}
		},
		itemStyle:{
			normal:{
				areaColor:'#323c48',
				borderColor:'#111'
			},
			emphasis:{
				areaColor:'2a333d'
			}
		}
	},
	

	series:[
		{
			name:'2013年至今中国对一带一路国家的投资概况',
			type:'map',
			map:'world',
			roam:'scale',
			data:data
		},

		{
			name:'2013年至今中国对一带一路国家的投资概况',
			type:'scatter',//散点图
			coordinateSystem:'geo',//地图坐标系
			data:convertData(data),
			symbolSize: function(val){
				return val[2]/2;
			},

			itemStyle:{
				normal:{
					color:'#9e2f50',
					borderColor:'#f00'
				},
				emphasis:{
					color:'#9e2f50',
					borderColor:'#00f'
				}
			}
		}	
	],
	tooltip:{
		trigger:'item',
		confine:true,
		formatter:'{b}:<br/>{c}亿'
	},
}

export { map1Option };