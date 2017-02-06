//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  ybjy:function(){
    wx.navigateTo({
      url: '/pages/ybjy/ybjy'
    })
  },
  ybcy:function(){
    wx.navigateTo({
      url: '/pages/ybcy/ybcy'
    })
  },
  bcys:function(){
    wx.navigateTo({
      url: '/pages/bcys/bcys'
    })
  },
  asaj:function(){
    wx.navigateTo({
      url: '/pages/asaj/asaj'
    })
  },
  onShareAppMessage :function(){
		return {
			title: '港险计划书',
			desc: '主流港险产品详细介绍',
			path: '/pages/index/index'
		}
	}
})