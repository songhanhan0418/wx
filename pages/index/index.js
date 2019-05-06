//index.js
//获取应用实例
const app = getApp()

Page({
  tapMotto:function(){
    console.log('tapMotto')
    // wx.navigateTo({
    //   url: '../article/article'
    // })
    wx.redirectTo({
      url: '../article/article',
    })
  },
  // tapText:function(){
  //   console.log('taoText')
  // }

})
