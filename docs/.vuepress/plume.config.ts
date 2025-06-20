import { defineThemeConfig } from "vuepress-theme-plume";
import { enNavbar, zhNavbar } from "./navbar";
import { enNotes, zhNotes } from "./notes";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
        logo: "logo.png",

        appearance: true, // 配置 深色模式



        social: [{ icon: "github", link: "https://github.com/ttswap" }, {
                icon: "twitter", link: "https://github.com/ttswap"
        }, {
                icon: "youtube", link: "https://youtube.com"
        },],

        navbarSocialInclude: ["github", "twitter"], // 允许显示在导航栏的 social 社交链接
        aside: true, // 页内侧边栏， 默认显示在右侧
        outline: [2, 4], // 页内大纲， 默认显示 h2, h4

        /**
         * 文章版权信息
         * @see https://theme-plume.vuejs.press/guide/features/copyright/
         */
        copyright: {
                license: {
                        name: "BUSL",
                        url: "https://ttswap.io",
                },
                creation: "original", // 创作方式
        },

        // prevPage: true,   // 是否启用上一页链接
        // nextPage: true,   // 是否启用下一页链接
        // createTime: true, // 是否显示文章创建时间

        /* 站点页脚 */
        footer: {
                message: "Power by TTSWAP",
                copyright: "",
        },
        /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
        // transition: {
        //   page: true,        // 启用 页面间跳转过渡动画
        //   postList: true,    // 启用 博客文章列表过渡动画
        //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
        // },

        locales: {
                "/": {
                        /**
                         * @see https://theme-plume.vuejs.press/config/basic/#profile
                         */
                        profile: {
                                avatar: "logo.png",
                                name: "TTSWAP",
                                description: "Trade &amp; Invest crypto freely",
                                circle: true,
                                location: 'everywhere',
                                organization: 'ttswap community',
                        },




                        navbar: enNavbar,
                        notes: enNotes,

                        /**
                         * 公告板
                         * @see https://theme-plume.vuejs.press/guide/features/bulletin/
                         */
                        // bulletin: {
                        //   layout: 'top-right',
                        //   contentType: 'markdown',
                        //   title: '',
                        //   content: '',
                        // },
                },
                "/zh/": {
                        /**
                         * @see https://theme-plume.vuejs.press/config/basic/#profile
                         */
                        profile: {
                                avatar: "logo.png",
                                name: "TTSWAP",
                                description: "Trade &amp; Invest crypto freely",
                                circle: true,
                                location: 'everywhere',
                                organization: 'ttswap community',
                        },

                        navbar: zhNavbar,
                        notes: zhNotes,

                        /**
                         * 公告板
                         * @see https://theme-plume.vuejs.press/guide/features/bulletin/
                         */
                        // bulletin: {
                        //   layout: 'top-right',
                        //   contentType: 'markdown',
                        //   title: '',
                        //   content: '',
                        // },
                },
        },
});
