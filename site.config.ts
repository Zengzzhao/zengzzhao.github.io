import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://valaxy.site/',
  lang: 'zh-CN',
  title: '某曌的记事本',
  subtitle:'All at sea.',
  author: {
    name: '某曌在努力',
    avatar:'https://s2.loli.net/2025/01/05/BGIvtD6UbMqQAnN.jpg',
    status: {
      emoji: '💪🏻',
      message: '锻炼中...'
    }
  },
  vanillaLazyload:{
    enable:true
  },
  encrypt:{
    enable:true
  },
  comment:{
    enable:true
  },
  favicon: 'https://s2.loli.net/2025/01/05/BGIvtD6UbMqQAnN.jpg',
  lastUpdated: true,
  description: '世界很大，我们很小，但只要心中有光，就能照亮自己的路。',
  search: {
    enable: true,
  },
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ',
      link: 'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=787332942',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Zengzzhao',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '微博',
      link: 'https://weibo.com/u/6079358073',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '豆瓣',
      link: 'https://www.douban.com/people/230373346/?_i=6045193f5vQX6L',
      icon: 'i-ri-douban-line',
      color: '#007722',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=8919414798',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/mou-zhao-2',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/490548239?spm_id_from=333.1007.0.0',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: '微信',
      link: '',
      icon: 'i-ri-wechat-2-line',
      color: '#1AAD19',
    },
    {
      name: 'Twitter',
      link: 'https://x.com/W787332942',
      icon: 'i-ri-twitter-x-fill',
      color: 'black',
    },
    {
      name: '抖音',
      link: 'https://www.douyin.com/user/self',
      icon: 'i-ri-tiktok-fill',
      color: 'black',
    },
    {
      name: 'E-Mail',
      link: 'mailto:787332942@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    // {
    //   name: 'Travelling',
    //   link: 'https://www.travellings.cn/go.html',
    //   icon: 'i-ri-train-line',
    //   color: 'var(--va-c-text)',
    // },
  ],
  sponsor: {
    enable: true,
    description:'请我喝一杯咖啡！', 
    methods: [
      {
        name: '支付宝',
        url: 'https://s2.loli.net/2025/01/05/QfC6ZVwlxntoHmy.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://s2.loli.net/2025/01/05/joYl8OTqUd3J9LF.jpg',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://s2.loli.net/2025/01/05/GYioJDrme1puhTC.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
  statistics:{
    enable:true
  },
  codeHeightLimit:300
})
