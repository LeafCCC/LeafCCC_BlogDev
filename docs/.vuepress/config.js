module.exports = {
    title: 'Hello, I\'m LeafCCC! (๑╹◡╹)ﾉ" ',
    description: 'LeafCCC的个人介绍网站',
    head: [
      ['link', { rel: 'icon', href: './images/logo.png' }] //设置标签处的图标 自己绘制了一个
    ],
    host: 'localhost', // ip
    port: '8101', //端口号 默认为8080
    themeConfig: {
      logo: '/images/logo.png',// 注意图片放在 public 文件夹下
      
      nav:[ // 导航栏配置
      { 
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items:[
          { text: 'English', link: '/language/English/' },
          { text: '中文', link: '/language/Chinese/' }
        ]    
       },
       {text: 'My github', link: 'https://github.com/LeafCCC'},   
      ],
      
      
    },
  }