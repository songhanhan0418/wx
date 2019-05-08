var { articles } = require('../../data/db.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*
    articles:[
      {
        avatar:'../../images/img01.jpg',
        date:'2019-05-05',
        title:'文章标题01',
        img:'../../images/wow1.jpg',
        desc:'描述01',
        starImg:'../../images/wow4.jpg',
        viewImg: '../../images/wow3.jpg',
        star:'20',
        view:'30'
      },
      {
        avatar: '../../images/img01.jpg',
        date: '2019-05-06',
        title: '文章标题02',
        img: '../../images/wow1.jpg',
        desc: '描述02',
        starImg: '../../images/wow4.jpg',
        viewImg: '../../images/wow3.jpg',
        star: '30',
        view: '40'
      }
    ]
    */
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    var articles = [
      {
        avatar:'../../images/img01.jpg',
        date:'2019-05-05',
        title:'文章标题01',
        img:'../../images/wow1.jpg',
        desc:'描述01',
        starImg:'../../images/wow4.jpg',
        viewImg: '../../images/wow3.jpg',
        star:'20',
        view:'30'
      },
      {
        avatar: '../../images/img01.jpg',
        date: '2019-05-06',
        title: '文章标题02',
        img: '../../images/wow1.jpg',
        desc: '描述02',
        starImg: '../../images/wow4.jpg',
        viewImg: '../../images/wow3.jpg',
        star: '30',
        view: '40'
      }
    ];
    */
    this.setData({
      articles:articles
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  articleDetail:function(ev){
    var articleId = ev.currentTarget.dataset.articleId
    wx.navigateTo({
      url: './article-detail/article-detail?articleId='+articleId,
    })
  }

})