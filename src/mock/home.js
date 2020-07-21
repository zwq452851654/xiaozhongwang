import Mock from 'mockjs'


// 菜单类型标准项
export const mavType = [
    { name:"技术社区", value:"001" },
    { name:"框架", value:"002" },
    { name:"UI框架", value:"003" },
    { name:"类库", value:"004" },
    { name:"开发知识", value:"005" },
    { name:"设计/UI/icon", value:"006" },
    { name:"其他辅助工具", value:"007" },
]

export const searchList = [
    { name: '百度一下', value: 'baidu', url: 'https://www.baidu.com/s?wd=', query: 'wd' },
    { name: 'github', value: 'github', url: 'https://github.com/search?q=', query: 'q' },
    { name: 'google', value: 'google', url: 'https://www.google.com/search?q=', query: 'q' },
    { name: 'csdn', value: 'csdn', url: 'https://so.csdn.net/so/search/s.do?q=', query: 'q' },
    { name: '掘金', value: 'juejin', url: 'https://juejin.im/search?query=', query: 'query' },
    { name: 'oschina', value: 'oschina', url: 'https://www.oschina.net/search?search=', query: 'search' },
    { name: '思否', value: 'sifou', url: 'https://segmentfault.com/search?q=', query: 'q' },
    { name: '知乎', value: 'zhihu', url: 'https://www.zhihu.com/search?q=', query: 'q' },
    { name: '必应', value: 'biying', url: 'https://cn.bing.com/search?q=', query: 'q' },
    { name: '简书', value: 'jianshu', url: 'https://www.jianshu.com/search?q=', query: 'q' }
]

/**
 * 标准项层级关系
*/
// 技术社区 001
    // 前端技术 001001
    // 后端技术 001002
    // 服务端 001003
    // 博客/论坛 001004
    // 其他 001006
// 设计、视觉 002
    // 设计 002001
    // 视觉 002002
// 辅助工具 003
    //


/**
 * 所有导航数据
 * id 唯一值
 * name 网站名称
 * icon 图标类名/地址
 * url 网站路径(所属大类)
 * parentValue 所属大类值
 * parentName 所属大类名称
 * childName 具体小类名称
 * childvalue 具体小类值
 * */
export const allwebNav = [
    { id: Mock.mock('@id'), name: "StackOverflow", icon: "stackoverflow.png", url: "https://stackoverflow.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "GitHub", icon: "github.png", url: "https://github.com/", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "掘金", icon: "juejin.png", url: "https://juejin.im/", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "博客园", icon: "bokeyuan.png", url: "https://www.cnblogs.com/", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "CNode", icon: "CNode.png", url: "https://cnodejs.org/", parentName: "技术栏", parentValue: "001", childName:"后端技术", childvalue:"001002" },
    { id: Mock.mock('@id'), name: "V2EX", icon: "V2EX.png", url: "https://www.v2ex.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "W3school", icon: "W3school.png", url: "https://www.w3school.com.cn/", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "开源中国", icon: "kaiyuanchina.png", url: "https://www.oschina.net/", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "W3cschool", icon: "W3cschool.png", url: "https://www.w3cschool.cn/", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "W3cplus", icon: "W3cplus.png", url: "https://www.w3cplus.com/", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "codepen", icon: "codepen.png", url: "https://codepen.io/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "codewars", icon: "codewars.png", url: "https://www.codewars.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "HackerRank", icon: "HackerRank.png", url: "https://www.hackerrank.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "jQuery插件库", icon: "jQuery.png", url: "https://www.jq22.com/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "极客教程", icon: "jike.png", url: "https://www.geekjc.com/", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "阿里云栖社区", icon: "aliyun.png", url: "https://yq.aliyun.com/", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "腾讯云+社区", icon: "tengxunyun.png", url: "https://cloud.tencent.com/developer", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "Vue论坛", icon: "vue-luntan.png", url: "https://forum.vuejs.org/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Vue中文社区", icon: "vue.png", url: "https://www.vue-js.com/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "freeCodeCamp", icon: "freeCodeCamp.png", url: "https://www.freecodecamp.one/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "InfoQ", icon: "InfoQ.png", url: "https://www.infoq.cn/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "小度鱼", icon: "xiaoduyu.png", url: "https://www.xiaoduyu.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "脚本之家", icon: "jiaobenzhijia.png", url: "https://www.jb51.net/", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "素材火", icon: "sucaihuo.png", url: "https://www.sucaihuo.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "印记中文", icon: "yinjizhongwen.png", url: "https://www.docschina.org/", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "leetcode", icon: "leetcode.png", url: "https://leetcode-cn.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Bootstrap", icon: "Bootstrap.png", url: "https://www.bootcss.com/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Vue", icon: "vue.png", url: "https://cn.vuejs.org/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "React", icon: "react.png", url: "https://reactjs.org/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Preact", icon: "Preact.png", url: "https://preactjs.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Angular", icon: "Angular.png", url: "https://angular.cn/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Koa", icon: "Koa.png", url: "https://koa.bootcss.com/", parentName: "技术栏", parentValue: "001", childName:"后端技术", childvalue:"001002" },
    { id: Mock.mock('@id'), name: "Express", icon: "Express.png", url: "https://www.expressjs.com.cn/", parentName: "技术栏", parentValue: "001", childName:"后端技术", childvalue:"001002" },
    { id: Mock.mock('@id'), name: "Egg", icon: "Egg.png", url: "https://eggjs.org/zh-cn/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "NestJS", icon: "NestJS.png", url: "https://nestjs.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "ThinkJS", icon: "ThinkJS.png", url: "https://thinkjs.org/zh-cn/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Next.js", icon: "nextjs.png", url: "https://nextjs.org/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Redux", icon: "Redux.png", url: "https://www.redux.org.cn/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Flutter", icon: "Flutter.png", url: "https://flutterchina.club/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "ReactNative", icon: "react.png", url: "https://reactnative.cn/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Ionic", icon: "Ionic.png", url: "https://ionicframework.com/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Polymer", icon: "Polymer.png", url: "https://polymer-zh.cn/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Ember", icon: "Ember.png", url: "https://emberjs.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Knockout", icon: "Knockout.png", url: "https://knockoutjs.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "PhaserJS", icon: "PhaserJS.png", url: "https://phaser.io/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Cocos2d-x", icon: "Cocos2d-x.png", url: "https://www.cocos.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "白鹭引擎", icon: "bailu.png", url: "https://www.egret.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "PixiJS", icon: "PixiJS.png", url: "https://www.pixijs.com/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "ThingJS", icon: "ThingJS.png", url: "https://www.thingjs.com/guide/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "NuxtJS", icon: "NuxtJS.png", url: "https://zh.nuxtjs.org/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "UmiJS", icon: "umijs.png", url: "https://umijs.org/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Weex", icon: "", url: "https://weex.apache.org/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "DCloud", icon: "", url: "https://www.dcloud.io/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "uni-app", icon: "uni-app.png", url: "https://uniapp.dcloud.io/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "ElementUI", icon: "ElementUI.png", url: "https://element.eleme.cn/#/zh-CN", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "iView", icon: "iView.png", url: "https://www.iviewui.com/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "vant", icon: "vant.png", url: "https://youzan.github.io/vant/#/zh-CN/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Vuetify", icon: "Vuetify.png", url: "https://vuetifyjs.com/en/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "MuseUI", icon: "MuseUI.png", url: "https://muse-ui.org/#/zh-CN", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "AntDesign", icon: "", url: "https://ant.design/index-cn", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "AntDesignMobile", icon: "AntDesignMobile.png", url: "https://mobile.ant.design/index-cn", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "WeUI", icon: "", url: "https://weui.io/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "MintUI", icon: "MintUI.svg", url: "https://mint-ui.github.io/#!/zh-cn", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "FlatUI", icon: "FlatUI.png", url: "https://designmodo.github.io/Flat-UI/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "TailwindCSS", icon: "TailwindCSS.png", url: "https://www.tailwindcss.cn/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Foundation", icon: "Foundation.png", url: "https://get.foundation/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "SemanticUI", icon: "SemanticUI.png", url: "https://semantic-ui.com/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Materialize", icon: "Materialize.png", url: "https://materializecss.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "WeexUI", icon: "WeexUI.png", url: "Weex Ui.html", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "AntDesignVue", icon: "AntDesignVue.png", url: "https://www.antdv.com/docs/vue/introduce-cn/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Material Kit", icon: "Material-kit.png", url: "https://demos.creative-tim.com/material-kit/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "ATUI", icon: "ATUI.png", url: "https://at-ui.github.io/at-ui/#/zh", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "MUI", icon: "MUI.png", url: "https://www.muicss.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "jQuery", icon: "jQuery.png", url: "https://jquery.com/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Zepto.js", icon: "zeptojs.png", url: "https://zeptojs.com/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Underscore", icon: "", url: "https://underscorejs.bootcss.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Lodash", icon: "lodash.png", url: "https://www.lodashjs.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Rxjs", icon: "Rxjs.png", url: "https://cn.rx.js.org/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "D3", icon: "D3.png", url: "https://d3js.org/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Threejs", icon: "", url: "https://threejs.org/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Echarts", icon: "Echarts.png", url: "https://echarts.apache.org/zh/index.html", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Highcharts", icon: "Highcharts.png", url: "https://www.highcharts.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Chart.js", icon: "Chart.png", url: "https://www.chartjs.org/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Animate.css", icon: "", url: "https://animate.style/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Normalize.css", icon: "Normalize.svg", url: "https://necolas.github.io/normalize.css/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Rax", icon: "Rax.png", url: "https://rax.js.org/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "G3D", icon: "G3D.png", url: "https://alibaba.github.io/G3D/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Hilo", icon: "Hilo.png", url: "https://hiloteam.github.io/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Nodejs", icon: "Nodejs.png", url: "https://nodejs.org/en/", parentName: "技术栏", parentValue: "001", childName:"后端技术", childvalue:"001002" },
    { id: Mock.mock('@id'), name: "ES6", icon: "ES6.png", url: "https://es6.ruanyifeng.com/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "HTML", icon: "", url: "https://www.runoob.com/html/html-tutorial.html", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "CSS", icon: "", url: "https://www.runoob.com/css/css-tutorial.html", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "TypeScript", icon: "TypeScript.png", url: "https://www.tslang.cn/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Sass", icon: "sass.png", url: "https://sass.bootcss.com/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Less", icon: "less.png", url: "https://less.bootcss.com/", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Stylus", icon: "stylus-logo.svg", url: "https://stylus-lang.com/", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "百度一下", icon: "baidu.jpg", url: "https://www.baidu.com/", parentName: "", parentValue: "", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "google", icon: "google.png", url: "https://www.google.com/", parentName: "", parentValue: "", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "知乎", icon: "zhihu.png", url: "https://www.zhihu.com/signin", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004"},
    { id: Mock.mock('@id'), name: "简书", icon: "", url: "https://www.jianshu.com/", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "csdn", icon: "csdn-logo.png", url: "https://www.csdn.net/#www.iiter.cn", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "思否", icon: "sifou.png", url: "https://segmentfault.com/" , parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "必应", icon: "", url: "https://cn.bing.com/", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "UIGreat", icon: "UIGreat.png", url: "https://uigreat.com/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "花瓣", icon: "", url: "https://huaban.com/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "Dribbble", icon: "Dribbble.png", url: "https://dribbble.com/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "站酷", icon: "", url: "https://www.zcool.com.cn/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "FWA", icon: "FWA.png", url: "https://thefwa.com/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "Lapa", icon: "Lapa.png", url: "https://www.lapa.ninja/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "UIMovement", icon: "UIMovement.png", url: "https://uimovement.com/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "UI中国", icon: "ui-china.png", url: "https://www.ui.cn/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "LandBook", icon: "LandBook.png", url: "https://land-book.com/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "PSDRepo", icon: "PSDRepo.png", url: "https://psdrepo.com/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "BestWebsite", icon: "BestWebsite.png", url: "https://bestwebsite.gallery/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "FontAwesome", icon: "", url: "https://fontawesome.dashgame.com/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "Iconfont", icon: "", url: "https://www.iconfont.cn/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "IcoMoon", icon: "", url: "https://icomoon.io/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "EasyIcon", icon: "panda.svg", url: "https://www.easyicon.net/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "icons8", icon: "icons8.png", url: "https://icons8.cn/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "IconStore", icon: "IconStore.png", url: "https://iconstore.co/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "iconninja", icon: "iconninja.png", url: "https://www.iconninja.com/", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "sojson在线", icon: "", url: "https://www.sojson.com/", parentName: "辅助工具", parentValue: "003", childName:"", childvalue:"003001" },
    { id: Mock.mock('@id'), name: "json.cn", icon: "", url: "http://json.cn/", parentName: "辅助工具", parentValue: "003", childName:"", childvalue:"003001" },
    { id: Mock.mock('@id'), name: "文件/图片转换", icon: "xunjiepdf.png", url: "https://app.xunjiepdf.com/caj2word/", parentName: "辅助工具", parentValue: "003", childName:"", childvalue:"003001" },
]

// 常用网站
export const oftenNav = [
    { id: Mock.mock('@id'), name: "百度", icon: "baidu.jpg", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "google", icon: "google.png", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "知乎", icon: "zhihu.png", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "简书", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "github", icon: "github.png", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "csdn", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "掘金", icon: "gold.png", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "oschina", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "思否", icon: "sifou.png", url: "" , t_k: "00001", t_v: "名站导航"},
    { id: Mock.mock('@id'), name: "必应", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "UI中国", icon: "ui-china.png", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "千图网", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
]
