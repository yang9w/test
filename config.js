// 配置
window.Config = {

  // 站点名
  SiteName: '自用站点监测',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur887086-8c30f49268361796e3d1a822'
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '自用站点监测',
      url: 'https://监测.杨扬.中国/'
    },
    {
      text: '主页',
      url: 'https://杨扬.中国/'
    }
  ]
};
