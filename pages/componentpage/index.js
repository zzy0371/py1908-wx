// pages/componentpage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    likeStatus:true,
    rateNum:3
  },
  likeChange(e){
    // console.log(e.detail.state);
    this.setData({
      likeStatus:e.detail.state
    });
  },
  rateChange(e){
    this.setData({
      rateNum: e.detail.num
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://biger.applinzi.com/page.php',
      success(res){
        console.log(res.data.data.data)
      }
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

  }
})