// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pid:null,
    detail:null,
    form: {
      tem:"",
      sugar:"",
      cream:'',
      count:1
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("当前页面打开",options);
    let pid = options.pid;
    this.setData({
      pid:pid
    })
    // 请求数据
    this.getCoffeeDetail();
  },
  // 获取数据
  getCoffeeDetail() {
    wx.request({
      url: 'http://www.kangliuyong.com:10002/productDetail',
      data:{
        appkey:"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
        pid:this.data.pid
      },
      success: (res) => {
        console.log(res);
        const detail = res.data.result[0];
        detail.tem = detail.tem?detail.tem.split('/'):[];
        detail.sugar = detail.sugar?detail.sugar.split('/'):[];
        detail.cream = detail.cream?detail.cream.split('/'):[];
        this.setData({
          detail
        })

      }
    })
  },

  onTapTemSpec(e) {
    console.log(e);
    const value = e.currentTarget.dataset.value;
    this.setData({
      "form.tem":value
    })
  },

  onTapSugarSpec(e) {
    const value = e.currentTarget.dataset.value;
    this.setData({
      "form.sugar":value
    })
  },
  onTapCreamSpec(e) {
    const value = e.currentTarget.dataset.value;
    this.setData({
      "form.cream":value
    })
  },
  onNumChange(e) {
    console.log(e);
    this.setData({
      "form.count":e.deetail
    })
  },
  goLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
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