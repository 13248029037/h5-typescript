import {
  CodepenCircleOutlined,
  WindowsOutlined,
  MediumOutlined,
  SlackSquareOutlined,
  BookOutlined,
  CommentOutlined,
  ApartmentOutlined,
  SlackOutlined,
  DribbbleSquareOutlined,
  YuqueOutlined,
  RedditOutlined,
  SketchOutlined,
  DesktopOutlined,
  DollarOutlined,
  FireOutlined,
  HddOutlined,
  GithubOutlined,
  AimOutlined,
  GoogleOutlined,
  CustomerServiceOutlined,
  DingtalkOutlined,
  InstagramOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
//导航栏配置
const config = [
  {
    id: 1,
    icon: SketchOutlined,
    name: "持续集成",
    isHide: false,
    options: [
      {
        id: "1-1",
        name: "项目",
        path: "/project/list",
        show: true,
      },
    ],
  },
  {
    id: 2,
    icon: UserSwitchOutlined,
    name: "管理员设置",
    isHide: true,
    options: [
      {
        id: "2-1",
        name: "用户管理",
        path: "/manager/list",
        show: true,
      },
    ],
  },
];
export const teamEnum = ["CM", "VJR", "VBD", "GTR", "FD", "MD", "STO"];
export const runStatus = [
  "未启动",
  "运行中",
  "运行成功",
  "运行失败",
  "未知错误",
  "未运行",
  "已解锁",
];
export const systemEnum = [
  {
    id: 1,
    name: "CPIMS(事件管理)",
    info: "日常事件管理",
    component: UserOutlined,
    url: "http://cpims.tutorabc.com.cn/",
  },
  {
    id: 2,
    name: "考勤",
    info: "Check in/out",
    component: CodepenCircleOutlined,
    url: "http://tpehrweb.tutorabc.com/TIMG_inout/form/index.html",
  },
  {
    id: 3,
    name: "JIRA",
    info: "项目管理",
    component: WindowsOutlined,
    url: "http://jira.tutorabc.com",
  },
  {
    id: 4,
    name: "KM",
    info: "应引导大家使用技术中心space",
    component: MediumOutlined,
    url: "http://km.tutorabc.com/pages/viewpage.action?pageId=16502144",
  },
  {
    id: 5,
    name: "PeopleSoft",
    info: "员工自助（含考勤）",
    component: SlackSquareOutlined,
    url: "http://psweb.tutorabc.com/psp/ps/?cmd=login",
  },
  {
    id: 6,
    name: "BPM",
    info: "电子签核",
    component: BookOutlined,
    url: "http://flow.tutor-group.com/",
  },
  {
    id: 7,
    name: "PeopleSoft",
    info: "技术培训系统",
    component: CommentOutlined,
    url: "http://training.weitutor.com",
  },
  {
    id: 8,
    name: "Scheduler",
    info: "调度平台",
    component: ApartmentOutlined,
    url: "http://scheduler.vipjr.com/",
  },
  {
    id: 9,
    name: "TSP微服务平台",
    info: "多语言跨平台的微服务治理平台",
    component: SlackOutlined,
    url: "http://tsp.weitutor.com/#/tsp/dashboard",
  },
  {
    id: 10,
    name: "TSP微服务平台",
    info: "多语言跨平台的微服务治理平台",
    component: DribbbleSquareOutlined,
    url: "http://tsp.weitutor.com/#/tsp/dashboard",
  },
  {
    id: 11,
    name: "消息集约平台",
    info: "消息集约平台",
    component: YuqueOutlined,
    url: "http://mip.weitutor.com/",
  },
  {
    id: 12,
    name: "disconf配置中心",
    info: "disconf配置中心",
    component: RedditOutlined,
    url: "http://disconf.vipjr.com/login.html",
  },

  {
    id: 13,
    name: "Vipcoder-新人必看",
    info: "用于Java项目的快速搭建",
    component: SketchOutlined,
    url: "http://vipcoder.vipjr.com/",
  },
  {
    id: 14,
    name: "TutorDBOps",
    info: "数据库平台",
    component: HddOutlined,
    url: "http://dbops.tutorabc.com/",
  },
  {
    id: 15,
    name: "BDIMS",
    info: "BDIMS",
    component: DesktopOutlined,
    url: "http://bdportal.tutorabc.com.cn/",
  },
  {
    id: 16,
    name: "代销商Portal",
    info: "代销商Portal",
    component: DollarOutlined,
    url: "https://reseller.tutorabc.com.cn/",
  },
  {
    id: 17,
    name: "Jenkins",
    info: "站点发布平台",
    component: FireOutlined,
    url: "http://cmbuild04.tutorabc.com.cn/",
  },
  {
    id: 18,
    name: "GitLab",
    info: "gitlab",
    component: GithubOutlined,
    url: "http://git.tutorabc.com/",
  },
  {
    id: 19,
    name: "Grafana",
    info: "Grafana",
    component: InstagramOutlined,
    url: "http://mm.tutorabc.com.cn/login",
  },
  {
    id: 20,
    name: "V成人",
    component: DingtalkOutlined,
    info:
      "TutorABC(原vipabc)是365*24真人在线英语培训机构,汇集全球20,000多位外籍顾问凭借独立研发的DCGS动态课程生成系统,提供针对性英语口语指导和场景化学习,可免费体验课程,TEL:4006-30-30-30",
    url: "https://www.tutorabc.com.cn/",
  },
  {
    id: 21,
    name: "平安好学",
    component: AimOutlined,
    info:
      "vipJr青少儿在线教育专注于青少儿英语口语、数学、语文等在线教育，一对一外教培训，让孩子爱上学习!",
    url: "https://www.vipjr.com/",
  },
  {
    id: 22,
    name: "T小孩",
    component: CustomerServiceOutlined,
    info:
      "tutorJr是全球No.1青少兒線上教育平台專為5-18歲的青少兒提供高品質的英語及小學數學培訓，依照孩子程度、興趣，訂製專屬課程！",
    url: "https://www.tutorjr.com/",
  },
  {
    id: 23,
    name: "J牌",
    info:
      "tutorJr是全球No.1青少兒線上教育平台專為5-18歲的青少兒提供高品質的英語及小學數學培訓，依照孩子程度、興趣，訂製專屬課程！",
    url: "https://www.vipabc.co.jp/",
    component: GoogleOutlined,
  },
];
export const pubKey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTF64S7UEOdtmjFRHfXr3Tcq0T
SlGOwkFLzabA5LQEgJ5C/65/PN5Jf7QBKk+IgotfJ+vYG2lPCQXlSqloePvddpvQ
fKJ33TDhlxf8a4Qte7lcGvlwGjpGawAOz3rVVKTI9kKGfJAt9LvWqwIOrjJ3D0fn
8WewKHP/n2DjgeoKmQIDAQAB`;
export default config;
