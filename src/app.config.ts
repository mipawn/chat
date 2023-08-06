export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/user/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'chat AI',
    navigationBarTextStyle: 'black',
    homeButton: true,
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/images/home.png',
        selectedIconPath: 'assets/images/home-active.png',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: 'assets/images/user.png',
        selectedIconPath: 'assets/images/user-active.png',
      },
    ],
    color: '#808080',
    selectedColor: '#fa2c19',
  }
})
