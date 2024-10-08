// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[],
    hotList:[]
  },
  // 跳转详情页
  handleToDetail(e) {
    console.log("跳转详情页",e.currentTarget.dataset.pid)
    let pid = e.currentTarget.dataset.pid;
    wx.navigateTo({
      url: '../detail/detail?pid='+pid,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.request({
      // 轮播图数据
      url: 'http://www.kangliuyong.com:10002/banner',
      data: {
        appkey:"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA="
      },
      success: (res) => {
        console.log(res.data.result)
        this.setData({
          banner:res.data.result
        })
      }
    })
    wx.request({
      url: 'http://www.kangliuyong.com:10002/typeProducts',
      data: {
        appkey:"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
        key:'isHot',
        value:1
      },
      success: (res) => {
        console.log(res);
        this.setData ({
          hotList:res.data.result
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})