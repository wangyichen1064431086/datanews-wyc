## demo素材
<http://www.ftchinese.com/interactive/5065?isad=1&d?isad=1>

## echarts官网
<http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts>

## map相关
### series组件
<http://echarts.baidu.com/option.html#series-map>

### visualMap组件
如要在地图上实现区域数据可视化，应使用visualMap组件
<http://echarts.baidu.com/option.html#visualMap>

### geo组件
如要实现地图上点数据或线数据可视化，在 ECharts 3 中不再建议在地图类型的图表使用series中的 markLine 和 markPoint。应使用在地理坐标系组件geo上的散点图和线图。
<http://echarts.baidu.com/option.html#geo>

### 图片资源url
图1："http://i.ftimg.net/picture/8/000053948_piclink.jpg"

图2："http://i.ftimg.net/picture/9/000053949_piclink.jpg"

### 色彩搭配
主色1： '#9e2f50'  'rgba(158,47,80,0.5)'

主色2： '#4781aa'  'rgba(71,129,170,0.5)'

### 数据原料
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
			{name: "Singapore",value: "37.3"},
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

const geoCoorMap = {
	
}


        [{
            "name": "阿富汗",
            "code": "AF",
            "value": "0"
        }, {
            "name": "阿塞拜疆",
            "code": "AZ",
            "value": "0"
        }, {
            "name": "孟加拉国",
            "code": "BD",
            "value": "37.7"
        }, {
            "name": "白俄罗斯",
            "code": "BY",
            "value": "0"
        }, {
            "name": "波斯尼亚和黑塞哥维那",
            "code": "BA",
            "value": "0"
        }, {
            "name": "文莱",
            "code": "BN",
            "value": "2"
        }, {
            "name": "保加利亚",
            "code": "BG",
            "value": "0"
        }, {
            "name": "柬埔寨",
            "code": "KH",
            "value": "19.1"
        }, {
            "name": "克罗地亚",
            "code": "HR",
            "value": "1.3"
        }, {
            "name": "捷克",
            "code": "CZ",
            "value": "0"
        }, {
            "name": "埃及",
            "code": "EG",
            "value": "36.9"
        }, {
            "name": "格鲁吉亚",
            "code": "GE",
            "value": "0"
        }, {
            "name": "匈牙利",
            "code": "HU",
            "value": "0"
        }, {
            "name": "印度",
            "code": "IN",
            "value": "36.1"
        }, {
            "name": "印度尼西亚",
            "code": "ID",
            "value": "73.3"
        }, {
            "name": "伊朗",
            "code": "IR",
            "value": "6.9"
        }, {
            "name": "伊拉克",
            "code": "IQ",
            "value": "28.6"
        }, {
            "name": "以色列",
            "code": "IL",
            "value": "54.7"
        }, {
            "name": "约旦",
            "code": "JO",
            "value": "6.2"
        }, {
            "name": "哈萨克斯坦",
            "code": "KZ",
            "value": "38"
        }, {
            "name": "科威特",
            "code": "KW",
            "value": "4.6"
        }, {
            "name": "吉尔吉斯斯坦",
            "code": "KG",
            "value": "38"
        }, {
            "name": "老挝",
            "code": "LA",
            "value": "0"
        }, {
            "name": "马其顿",
            "code": "MK",
            "value": "4"
        }, {
            "name": "马来西亚",
            "code": "MY",
            "value": "64.5"
        }, {
            "name": "蒙古",
            "code": "MN",
            "value": "0"
        }, {
            "name": "黑山",
            "code": "ME",
            "value": "11.2"
        }, {
            "name": "缅甸",
            "code": "MM",
            "value": "3"
        }, {
            "name": "尼泊尔",
            "code": "NP",
            "value": "17.4"
        }, {
            "name": "阿曼",
            "code": "OM",
            "value": "3"
        }, {
            "name": "巴基斯坦",
            "code": "PK",
            "value": "143.2"
        }, {
            "name": "菲律宾",
            "code": "PH",
            "value": "10"
        }, {
            "name": "波兰",
            "code": "PL",
            "value": "3.9"
        }, {
            "name": "卡塔尔",
            "code": "QA",
            "value": "1.7"
        }, {
            "name": "罗马尼亚",
            "code": "RO",
            "value": "5.4"
        }, {
            "name": "俄罗斯",
            "code": "RU",
            "value": "103"
        }, {
            "name": "沙特阿拉伯",
            "code": "SA",
            "value": "47.2"
        }, {
            "name": "塞尔维亚",
            "code": "RS",
            "value": "19.2"
        }, {
            "name": "新加坡",
            "code": "SG",
            "value": "37.3"
        }, {
            "name": "斯里兰卡",
            "code": "LK",
            "value": "37.1"
        }, {
            "name": "叙利亚",
            "code": "SY",
            "value": "0"
        }, {
            "name": "塔吉克斯坦",
            "code": "TJ",
            "value": "2.5"
        }, {
            "name": "泰国",
            "code": "TH",
            "value": "11.6"
        }, {
            "name": "土耳其",
            "code": "TR",
            "value": "4.8"
        }, {
            "name": "土库曼斯坦",
            "code": "TM",
            "value": "6"
        }, {
            "name": "阿拉伯联合酋长国",
            "code": "AE",
            "value": "13.8"
        }, {
            "name": "乌克兰",
            "code": "UA",
            "value": "0"
        }, {
            "name": "乌兹别克斯坦",
            "code": "UZ",
            "value": "4.4"
        }, {
            "name": "越南",
            "code": "VN",
            "value": "0"
        }, {
            "name": "也门",
            "code": "YE",
            "value": "5.1"
        }];


        "videobody":"<div id='cc_video_8D316418D92154209C33DC5901307461_4707190'><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' width='742' height='417' id='cc_8D316418D92154209C33DC5901307461'><param name='movie' value='http://p.bokecc.com/flash/player.swf?vid=8D316418D92154209C33DC5901307461&amp;siteid=922662811F1A49E9&amp;playerid=3571A3BF2AEC8829&amp;playertype=1&amp;autoStart=true'><param value='transparent' name='wmode'><param name='allowFullScreen' value='true'><param name='allowScriptAccess' value='always'><embed src='http://p.bokecc.com/flash/player.swf?vid=8D316418D92154209C33DC5901307461&amp;siteid=922662811F1A49E9&amp;playerid=3571A3BF2AEC8829&amp;playertype=1&amp;autoStart=true' width='742' height='417' name='cc_8D316418D92154209C33DC5901307461' wmode='transparent' allowfullscreen='true' allowscriptaccess='always' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'></object></div>"
		
视频相关script:

    <script src="http://p.bokecc.com/player?vid=8D316418D92154209C33DC5901307461&siteid=922662811F1A49E9&autoStart=false&width=600&height=490&playerid=3571A3BF2AEC8829&playertype=1" type="text/javascript"></script>
    
### 待修改事项
1. 手机端video并不能播放，待查bug
给video加上属性x-webkit-airplay="allow" webkit-playsinline playsinline="true"

src:http://cm14-ccm1.play.bokecc.com/flvs/ca/QxFza/uCWDR1P4bF-10.mp4?t=1485192813&key=43254AA7C24ABA2F627A5CD385012676

2. 手机端上下滑动问题，图表要适量变小，图表间间距要适度增大或插入其他非交互内容，否则会卡在其中无法滑动

3. 考察阅读效果需要统计各个板块分别被看到的次数，且需要停留1s

### 待做事项 --0218
1. 互动模式下，每个图表的副标题都要提示“可以点击数据点查看数据信息”
2. 研究一下互动模式下，怎样才能不让tooltip溢出到屏幕外面
3. 给文章增加提示“PC端体验更佳”
4. 等待echarts回复怎样解决移动端不能滚动的问题