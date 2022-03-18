module.exports = {
    title: 'LeafCCC\'s Blog (๑╹◡╹)ﾉ" ',
    description: 'LeafCCC的个人网站',
    head: [
      ['link', { rel: 'icon', href: './images/logo.png' }] //设置标签处的图标 自己绘制了一个
    ],
    host: 'localhost', // ip
    port: '8101', //端口号 默认为8080
    themeConfig: {
      logo: '/images/logo.png',// 注意图片放在 public 文件夹下
      nav:[ // 导航栏配置
        {text: '待定', link: '/accumulate/' },
        {text: '待定', link: '/algorithm/'},
        {text: 'My github', link: 'https://github.com/LeafCCC'}      
      ],
      sidebar: 'auto', // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    },
  }