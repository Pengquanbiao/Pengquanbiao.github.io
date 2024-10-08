// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        show: false,
        reg_phone:"",
        reg_password:"",
        reg_nickName:"",
        phone:"",
        password:""
    },
    showPopup() {
        this.setData({
            show: true,
        });
    },

    onClose() {
        this.setData({
            show: false
        });
    },

    // 注册接口
    // 请求地址：http://www.kangliuyong.com:10002/register
    // 请求类型： POST
    // 请求参数： {
    //   appkey: 你的appkey,
    //   nickName: 昵称,
    //   password: 密码,
    //   phone: 手机号
    // }

    onRegisterTap(){
        wx.request({
          url: 'http://www.kangliuyong.com:10002/register',
          method:"POST",
          header: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          data:{
              appkey:"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
              nickName:this.data.reg_nickName,
              password:this.data.reg_password,
              phone:this.data.reg_phone
          },
          success:(res)=>{
            console.log(res);
            let {code,msg} = res.data
            if(code == 100){
                wx.showToast({
                    title: msg,
                    icon: 'success',
                    duration: 2000
                  })
            }else{
                wx.showToast({
                    title: msg,
                    icon: 'error',
                    duration: 2000
                  })
            }
            
            this.setData({
                show:false
            })
          }
        })
    },

    // 登录接口
    // 请求地址：http://www.kangliuyong.com:10002/login
    // 请求类型： POST
    // 请求参数： {
    //   appkey: 你的appkey,
    //   password: 密码,
    //   phone: 手机号
    // }
  
    onLoginTap(){
        wx.request({
            url: 'http://www.kangliuyong.com:10002/login',
            method:"POST",
            header: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            data:{
                appkey:"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
                password:this.data.password,
                phone:this.data.phone
            },
            success:(res)=>{
              console.log(res);
              let {code,msg,token} = res.data
              if(code == 200){
                  wx.showToast({
                      title: msg,
                      icon: 'success',
                      duration: 2000
                    })
                    //  保存token值
                    wx.setStorageSync('token', token)
                    wx.switchTab({
                        url: '/pages/home/home'
                      })
              }else{
                  wx.showToast({
                      title: msg,
                      icon: 'error',
                      duration: 2000
                    })
              }
              
            }
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