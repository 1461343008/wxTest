// Topmenu/Topmenu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    TopMenuList: [{
      pagePath: "/pages/lists/lists",
      text: "文章推荐"
    }, {
      pagePath: "/pages/lists/lists",
        text: "经典代码"
      }, {
        pagePath: "/pages/lists/lists",
        text: "应用案例"
      }, {
        pagePath: "/pages/lists/lists",
        text: "服务购买"
      }, {
        pagePath: "/pages/lists/lists",
        text: "环境配置"
      }
    ]
  },
  attached() {
  },
  methods: {

  }
})
