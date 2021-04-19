module.exports = {
  title: "技术博客",
  description: "查阅知识",
  lastUpdated: "Last Updated", // string | boolean
  base: '/',
  themeConfig: {
    search: true, //搜索
    searchMaxSuggestions: 10,
    sidebar: 'auto',
    nav: [
      { text: "首页", link: "/" },
      { text: "前端技术", link: "/page1/" },
      // {
      //   text: "个人文章",
      //   items: [
      //     {
      //       text: "掘金",
      //       link: "https://juejin.im/user/5c8f3303f265da612d633276",
      //     },
      //     {
      //       text: "segmentfault",
      //       link: "https://segmentfault.com/u/helloxiaoming",
      //     },
      //     { text: "CSDN", link: "https://blog.csdn.net/qq_40588413" },
      //   ],
      // },
    ],
    // 侧边栏
    sidebar: {
      '/page1/': [
        {
          title: 'HTML',
          collapsable: true, 
          children: [
            { title: 'dom元素的操作', path:'/page1/DOM'},
          ]
        }
      ],
    }
  },
};
