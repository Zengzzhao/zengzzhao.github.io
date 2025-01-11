import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonLive2d } from 'valaxy-addon-live2d'
import { addonWaline } from 'valaxy-addon-waline'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '某曌的记事本',
      cloud: {
        enable: true
      }
    },
    notice: {
      enable: true,
      content: '本站不定时更新...'
    },
    fireworks: {
      enable: true,
      colors: ['#F6A4B5', '#888E8E', '#BFCED0']
    },
    pages: [
      {
        name: '项目橱窗',
        url: '/projects/',
        icon: 'i-ri-code-s-slash-fill',
        color: '',
      },
    ],

    footer: {
      since: 2024,
      beian: {
        enable: true,
        icp: '京ICP备17038157号',
      },
      powered: false
    },
    bg_image: {
      enable: true,
      url: 'https://s2.loli.net/2025/01/07/UCvIpoudfNGDBmT.jpg',
      dark: 'https://s2.loli.net/2025/01/07/ckTfOXmRojZaStD.jpg'
    },
    say: {
      enable: true,
      api: '',
      hitokoto: {
        enable: true,
        api: "https://v1.hitokoto.cn"
      }
    }
  },
  addons: [
    addonWaline({
      serverURL: 'walinecomment-5292.vercel.app',
      copyright: false,
      
    }),
    addonLive2d({
      enableLive2D: ['heimao', 'baimao', 'girl1', 'girl2', 'girl3', 'girl4'],
      live2DCollection: {
        heimao: {
          message: '黑猫',
          models: ['https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/blackcat/model.json'],
        },
        baimao: {
          message: '白猫',
          models: ['https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/whitecat/model.json'],
        },
        girl1: {
          message: '',
          models: ['https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/kp31_3101/model.json'],
        },
        girl2: {
          message: '',
          models: ['https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/mlemk1_604/model.json'],
        },
        girl3: {
          message: '',
          models: ['https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/vector_1901/model.json'],
        },
        girl4: {
          message: '',
          models: ['https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/aa12_2403/model.json'],
        },
      },
      skipHello: true,
    })
  ],
  unocss: { safelist },
})
