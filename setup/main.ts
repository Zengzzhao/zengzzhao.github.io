import dataV from '@newpanjing/datav-vue3';
import { defineAppSetup } from 'valaxy'

export default defineAppSetup(({ app }) => {
    app.use(dataV)
})

/* 恶搞标题 start */
//动态标题
let OriginTitile = '某曌的记事本';
let titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '👀跑哪里去了~';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '欢迎回来～';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});
/* 恶搞标题 end */