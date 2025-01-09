<template>
    <div class="projectsListContainer">
        <div class="projectItemContainer hvr-float-shadow" v-for="(item, index) in projects" :key="index">
            <BorderBox1>
                <div class="projectItem">
                    <div class="img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="text">
                        <h1>{{ item.name }}</h1>
                        <div class="desc">{{ item.desc }}</div>
                    </div>
                </div>
            </BorderBox1>
            <Decoration3 style="width:250px; height:30px;" />
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            projects: [
                {
                    name: '商品数据分析大屏可视化系统',
                    img: 'https://s2.loli.net/2025/01/05/iMptB6TRlOoa3nY.png',
                    desc: `使用爬虫抓取淘宝健身类商品24年3-5月数据进行可视化分析，利用机器学习技术学习抓取到的数据并对商品销量进行预测。
                        全栈项目，前端技术栈：vue、Echarts、Datav、WordCloud，后端技术栈：flask、selenium、sklearn`
                },
                {
                    name: '动物图像识别数据分析可视化系统',
                    img: 'https://s2.loli.net/2025/01/07/2iPO9CpEoFKGrAw.png',
                    desc: `使用某动物园的动物图片数据训练ResNet残差网络，使其具备下游动物分类的能力。并对该动物园动物数据进行可视化分析与管理。
                        全栈项目，前端技术栈：vue、Echarts，后端技术栈：flask、pytorch`
                },
                {
                    name: '花店购物小程序',
                    img: 'https://s2.loli.net/2025/01/07/fMW3GytH4ZXKeSV.jpg',
                    desc: `花店线上选购鲜花小程序。
                        全栈项目，前端原生js、vant组件库，后端采用微信云开发`
                },
                {
                    name: '另外一个个人博客',
                    img: 'https://s2.loli.net/2025/01/07/lUG9oJ3ZYA76sEM.png',
                    desc: `前台+后台实现个人博客。
                        全栈项目，前端技术栈：vue、element-ui，后端技术栈：node、express、sequelize、其他各种中间件`
                },
                {
                    name: '豆瓣数据分析可视化系统',
                    img: 'https://s2.loli.net/2025/01/07/Hyus4mhrVeWdqj1.png',
                    desc: `使用爬虫抓取豆瓣top250电影数据进行可视化分析。对top电影的评分制作动态柱状图分析、对电影主题关键词制作词云分析。
                        全栈项目，前后端不分离，使用的技术栈：request、flask、Echarts、WordCloud`
                },
                {
                    name: '更多项目',
                    img: 'https://s2.loli.net/2025/01/07/J47ZRszDLlOkKWG.gif',
                    desc: `其他项目一部分还在整理中，一部分保密......`
                }
            ]
        }
    }
}
</script>

<style scoped lang="less">
.projectsListContainer {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 60%;


    .projectItemContainer {
        width: 100%;
        height: 300px;
        margin-top: 100px;

        box-sizing: border-box;

        .projectItem {
            display: flex;
            justify-content: flex-start;
            width: 100%;
            height: 100%;
            padding: 30px;

            .img {
                width: 50%;
                height: 100%;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
            }

            .text {
                width: 50%;

                h1 {
                    color: #1D89EF;
                    font-weight: 900;
                    font-size: 1.5rem;
                    line-height: 2rem;
                    text-align: center;
                    font-family: var(--va-font-serif);
                }

                .desc {
                    padding-top: 10px;
                    padding-left: 10px;
                    line-height: 30px;
                    font-size: 17px;
                    font-weight: 500;
                    color: var(--va-c-text-lighter);
                }
            }
        }

    }
}

.projectItemContainer:last-child {
    margin-bottom: 100px;
}

// 使用第三方Hover特效库https://github.com/IanLunn/Hover
.hvr-float-shadow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
}

.hvr-float-shadow:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
    /* W3C */
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform, opacity;
    transition-property: transform, opacity;
}

.hvr-float-shadow:hover,
.hvr-float-shadow:focus,
.hvr-float-shadow:active {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    /* move the element up by 5px */
}

.hvr-float-shadow:hover:before,
.hvr-float-shadow:focus:before,
.hvr-float-shadow:active:before {
    opacity: 1;
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
}
</style>