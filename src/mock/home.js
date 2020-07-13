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
    { id: Mock.mock('@id'), name: "StackOverflow", icon: "stackoverflow.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "GitHub", icon: "github.png", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "掘金", icon: "juejin.png", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "博客园", icon: "bokeyuan.png", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "CNode", icon: "CNode.png", url: "", parentName: "技术栏", parentValue: "001", childName:"后端技术", childvalue:"001002" },
    { id: Mock.mock('@id'), name: "V2EX", icon: "V2EX.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "伯乐在线", icon: "bolezaixian.png", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "W3school", icon: "W3school.png", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "码迷", icon: "mami.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "开源中国", icon: "kaiyuanchina.png", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "W3cschool", icon: "W3cschool.png", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "W3cplus", icon: "W3cplus.png", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "前端乱炖", icon: "qdld.png", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "codepen", icon: "codepen.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "codewars", icon: "codewars.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "HackerRank", icon: "HackerRank.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "jQuery插件库", icon: "jQuery.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "极客教程", icon: "jike.png", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "阿里云栖社区", icon: "aliyun.png", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "腾讯云+社区", icon: "tengxunyun.png", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "ReactChina", icon: "react.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "ReactNative中文社区", icon: "react.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Vue论坛", icon: "vue-luntan.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Vue中文社区", icon: "vue.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "freeCodeCamp", icon: "freeCodeCamp.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "InfoQ", icon: "InfoQ.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "css88", icon: "css88.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "小度鱼", icon: "xiaoduyu.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "脚本之家", icon: "jiaobenzhijia.png", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "素材火", icon: "sucaihuo.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "dalbll", icon: "dalbll.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "前端里", icon: "qianduanli.png", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "印记中文", icon: "yinjizhongwen.png", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "leetcode", icon: "leetcode.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Bootstrap", icon: "Bootstrap.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Vue", icon: "vue.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "React", icon: "react.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Preact", icon: "Preact.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Angular", icon: "Angular.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "AngularJS", icon: "Angular.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Koa", icon: "Koa.png", url: "", parentName: "技术栏", parentValue: "001", childName:"后端技术", childvalue:"001002" },
    { id: Mock.mock('@id'), name: "Express", icon: "Express.png", url: "", parentName: "技术栏", parentValue: "001", childName:"后端技术", childvalue:"001002" },
    { id: Mock.mock('@id'), name: "Egg", icon: "Egg.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "NestJS", icon: "NestJS.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "ThinkJS", icon: "ThinkJS.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Next.js", icon: "nextjs.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Redux", icon: "Redux.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Flutter", icon: "Flutter.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "ReactNative", icon: "react.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Ionic", icon: "Ionic.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Electron", icon: "Electron.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Polymer", icon: "Polymer.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Ember", icon: "Ember.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Backbone", icon: "Backbone.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Knockout", icon: "Knockout.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "PhaserJS", icon: "PhaserJS.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Cocos2d-x", icon: "Cocos2d-x.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "白鹭引擎", icon: "bailu.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "PixiJS", icon: "PixiJS.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "ThingJS", icon: "ThingJS.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "NuxtJS", icon: "NuxtJS.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "mpvue", icon: "mpvue.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "WePY", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "min", icon: "min.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "UmiJS", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Weex", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "uni-app", icon: "uni-app.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "ElementUI", icon: "ElementUI.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "iView", icon: "iView.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "vant", icon: "vant.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Vuetify", icon: "Vuetify.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "MuseUI", icon: "MuseUI.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "AntDesign", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "AntDesignMobile", icon: "AntDesignMobile.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "WeUI", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "MintUI", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "FlatUI", icon: "FlatUI.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "TailwindCSS", icon: "TailwindCSS.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Foundation", icon: "Foundation.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "AmazeUI", icon: "AmazeUI.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "SemanticUI", icon: "SemanticUI.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Materialize", icon: "Materialize.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "WeexUI", icon: "WeexUI.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "AntDesignVue", icon: "AntDesignVue.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Buefy", icon: "Buefy.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Material Kit", icon: "Material-kit.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "ATUI", icon: "ATUI.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "MUI", icon: "MUI.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "jQuery", icon: "jQuery.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Zepto.js", icon: "zeptojs.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Underscore", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Lodash", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Rxjs", icon: "Rxjs.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "D3", icon: "D3.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Threejs", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Echarts", icon: "Echarts.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Highcharts", icon: "Highcharts.png", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Chart.js", icon: "Chart.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Animate.css", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Normalize.css", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Rax", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "G3D", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Hilo", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Nodejs", icon: "Nodejs.png", url: "", parentName: "技术栏", parentValue: "001", childName:"后端技术", childvalue:"001002" },
    { id: Mock.mock('@id'), name: "ES6", icon: "ES6.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "HTML", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "CSS", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "TypeScript", icon: "TypeScript.png", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Sass", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Less", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Stylus", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "百度一下", icon: "baidu.jpg", url: "", parentName: "", parentValue: "", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "google", icon: "google.png", url: "", parentName: "", parentValue: "", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "知乎", icon: "zhihu.png", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004"},
    { id: Mock.mock('@id'), name: "简书", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "csdn", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "oschina", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "思否", icon: "sifou.png", url: "" , parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "必应", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "UIGreat", icon: "UIGreat.png", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "花瓣", icon: "", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "Dribbble", icon: "Dribbble.png", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "Behance", icon: "Behance.png", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "Pinterest", icon: "", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "站酷", icon: "", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "FWA", icon: "FWA.png", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "Lapa", icon: "Lapa.png", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "UIMovement", icon: "UIMovement.png", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "UI中国", icon: "ui-china.png", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "LandBook", icon: "LandBook.png", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "PSDRepo", icon: "PSDRepo.png", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "BestWebsite", icon: "BestWebsite.png", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "FontAwesome", icon: "", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "Iconfont", icon: "", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "IcoMoon", icon: "", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "EasyIcon", icon: "", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "icons8", icon: "icons8.png", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "IconStore", icon: "IconStore.png", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "iconninja", icon: "iconninja.png", url: "", parentName: "设计/视觉", parentValue: "002", childName:"设计", childvalue:"002001" },
    { id: Mock.mock('@id'), name: "sojson在线", icon: "", url: "", parentName: "辅助工具", parentValue: "003", childName:"", childvalue:"003001" },
    { id: Mock.mock('@id'), name: "json.cn", icon: "", url: "", parentName: "辅助工具", parentValue: "003", childName:"", childvalue:"003001" },
    { id: Mock.mock('@id'), name: "百度翻译", icon: "", url: "", parentName: "辅助工具", parentValue: "003", childName:"", childvalue:"003001" },
    { id: Mock.mock('@id'), name: "谷歌翻译", icon: "", url: "", parentName: "辅助工具", parentValue: "003", childName:"", childvalue:"003001" },
    { id: Mock.mock('@id'), name: "图片多格式转换", icon: "", url: "", parentName: "辅助工具", parentValue: "003", childName:"", childvalue:"003001" },
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
