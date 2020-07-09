import Mock from 'mockjs'


// 菜单类型标准项
export const mavType = [
    { name:"技术社区", value:"001" },
    { name:"框架", value:"002" },
    { name:"UI框架", value:"003" },
    { name:"类库", value:"004" },
    { name:"开发知识", value:"005" },
    { name:"设计/UI/icon", value:"006" },
    { name:"其他工具类", value:"007" },
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
    { id: Mock.mock('@id'), name: "StackOverflow", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "GitHub", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "SegmentFault", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "掘金", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "博客园", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "CNode", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"后端技术", childvalue:"001002" },
    { id: Mock.mock('@id'), name: "V2EX", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "伯乐在线", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "W3school", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "码迷", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "开源中国", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "W3cschool", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "W3cplus", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "前端乱炖", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "codepen", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "codewars", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "HackerRank", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "jQuery插件库", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "极客教程", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "阿里云栖社区", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "腾讯云+社区", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "ReactChina", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "ReactNative中文社区", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Vue论坛", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Vue中文社区", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "freeCodeCamp", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "InfoQ", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "css88", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "小度鱼", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "脚本之家", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "ITPub", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "素材火", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "dalbll", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "前端里", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "印记中文", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"博客/论坛", childvalue:"001004" },
    { id: Mock.mock('@id'), name: "leetcode", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Bootstrap", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Vue", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "React", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Preact", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Angular", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "AngularJS", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Koa", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"后端技术", childvalue:"001002" },
    { id: Mock.mock('@id'), name: "Express", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"后端技术", childvalue:"001002" },
    { id: Mock.mock('@id'), name: "Egg", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "NestJS", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "ThinkJS", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Next.js", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Redux", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Flutter", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "ReactNative", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Ionic", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Electron", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Polymer", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Ember", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Backbone", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Knockout", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "PhaserJS", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Cocos2d-x", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "白鹭引擎", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "PixiJS", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "ThingJS", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "NuxtJS", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "mpvue", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "WePY", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "min", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "UmiJS", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Weex", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "uni-app", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "ElementUI", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "iView", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "vant", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Vuetify", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "MuseUI", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "AntDesign", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "AntDesignMobile", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "WeUI", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "MintUI", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "FlatUI", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "TailwindCSS", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Foundation", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "AmazeUI", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "SemanticUI", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Materialize", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "WeexUI", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "AntDesignVue", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Buefy", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Material Kit", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "ATUI", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "MUI", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "jQuery", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Zepto.js", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Underscore", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Lodash", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Rxjs", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "D3", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Threejs", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Echarts", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Highcharts", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Chart.js", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Animate.css", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Normalize.css", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Rax", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "G3D", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Hilo", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "Nodejs", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"后端技术", childvalue:"001002" },
    { id: Mock.mock('@id'), name: "ES6", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "HTML", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "CSS", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "TypeScript", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Sass", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Less", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"前端技术", childvalue:"001001" },
    { id: Mock.mock('@id'), name: "Stylus", icon: "", url: "", parentName: "技术栏", parentValue: "001", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "百度一下", icon: "", url: "", parentName: "", parentValue: "", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "google", icon: "", url: "", parentName: "", parentValue: "", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "知乎", icon: "", url: "", parentName: "", parentValue: "", childName:"", childvalue:""},
    { id: Mock.mock('@id'), name: "简书", icon: "", url: "", parentName: "", parentValue: "", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "csdn", icon: "", url: "", parentName: "", parentValue: "", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "oschina", icon: "", url: "", parentName: "", parentValue: "", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "思否", icon: "", url: "" , parentName: "", parentValue: "", childName:"", childvalue:"" },
    { id: Mock.mock('@id'), name: "必应", icon: "", url: "", parentName: "", parentValue: "", childName:"", childvalue:"" }
]

// 常用网站
export const oftenNav = [
    { id: Mock.mock('@id'), name: "百度", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "google", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "知乎", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "简书", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "github", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "csdn", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "掘金", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "oschina", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "思否", icon: "", url: "" , t_k: "00001", t_v: "名站导航"},
    { id: Mock.mock('@id'), name: "必应", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "UI中国", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "千图网", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
    { id: Mock.mock('@id'), name: "小众网", icon: "", url: "", t_k: "00001", t_v: "名站导航" },
]
