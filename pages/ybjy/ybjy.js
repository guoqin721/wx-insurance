var WXGrid = require('../wxgrid/wxgrid.js')
//受保人资料
var proTab = new WXGrid;
proTab.init(7,2);
proTab.setRowsHeight(58);
var classifies = [
  {name:"姓名："},
  {name:"VIP小男孩"},
  {name:"性别 <吸烟情况>："},
  {name:"男 <非吸烟>"},
  {name:"年龄："},
  {name:"0岁"},
  {name:"货币："},
  {name:"美元"},
  {name:"原有基本保额："},
  {name:"$226,500"},
  {name:"每年保费："},
  {name:"$2,000"},
  {name:"需缴保费年限："},
  {name:"25年"}]
proTab.data.add("classifies",classifies);   //将一维数组转换为二维数组
    
//保单资料	
var guarTab = new WXGrid;
guarTab.init(6,4);
guarTab.setRowsHeight(58);
var classifies = [
  {name:"基本保单"},
  {name:"保额"},
  {name:"保障年期"},
  {name:"每年保费"},
  {name:"加裕倍安宝(加强版)(25年缴费)"},
  {name:"$226,500"},
  {name:"终身"},
  {name:"$2,000"},
  {name:"升级保障(首十年)"},
  {name:"	$113,250"},
  {name:"10年"},
  {name:"$0"},
  {name:"附加契约"},
  {name:" "},
  {name:" "},
  {name:" "},
  {name:"免付保费附加契约"},
  {name:"$226,500"},
  {name:"25年"},
  {name:"	$0"},
  {name:" "},
  {name:" "},
  {name:"保费总额: "},
  {name:"$2,000"}]
guarTab.data.add("classifies",classifies);   //将一维数组转换为二维数组


//非投资成分寿险利益说明	
var expTab = new WXGrid;
expTab.init(14,1);
var classifies = [
  {"year":"保单完结年度","damage":"身故赔偿总额","cash":"现金价值总值","premium":"总保费"},
  {"year":"1年","damage":"339,750","cash":"0","premium":"2,000"},
  {"year":"2年","damage":"339,750","cash":"0","premium":"4,000"},
  {"year":"3年","damage":"339,750","cash":"0","premium":"6,000"},
  {"year":"4年","damage":"339,750","cash":"0","premium":"8,000"},
  {"year":"5年","damage":"340,769","cash":"951","premium":"10,000"},
  {"year":"10年","damage":"343,646","cash":"7,542","premium":"20,000"},
  {"year":"15年","damage":"275,424","cash":"22,741","premium":"30,000"},
  {"year":"20年","damage":"295,492","cash":"42,718","premium":"40,000"},
  {"year":"25年","damage":"324,416","cash":"66,818","premium":"50,000"},
  {"year":"40年","damage":"455,809","cash":"197,825","premium":"50,000"},
  {"year":"60岁","damage":"830,032","cash":"726,068","premium":"50,000"},
  {"year":"80岁","damage":"2,361,761","cash":"2,309,892","premium":"50,000"},
  {"year":"100岁","damage":"6,568,500","cash":"6,568,500","premium":"50,000"}]
expTab.data.add("classifies",classifies);   //将一维数组转换为二维数组
var app = getApp()
Page({
  data: {
    proTab,
    guarTab,
    expTab
  },
  onLoad:function(){
    
  },
  sg_page1:function(){
    wx.navigateTo({
      url: '/pages/ybjy_details/sg_page1/sg_page1'
    })
  },
  sg_page2:function(){
    wx.navigateTo({
      url: '/pages/ybjy_details/sg_page2/sg_page2'
    })
  },
  sg_page3:function(){
    wx.navigateTo({
      url: '/pages/ybjy_details/sg_page3/sg_page3'
    })
  },
  sg_page4:function(){
    wx.navigateTo({
      url: '/pages/ybjy_details/sg_page4/sg_page4'
    })
  },
  sg_page5:function(){
    wx.navigateTo({
      url: '/pages/ybjy_details/sg_page5/sg_page5'
    })
  },
  sg_page6:function(){
    wx.navigateTo({
      url: '/pages/ybjy_details/sg_page6/sg_page6'
    })
  },
  sg_page7:function(){
    wx.navigateTo({
      url: '/pages/ybjy_details/sg_page7/sg_page7'
    })
  },
  unguar:function(){
    wx.navigateTo({
      url: '/pages/ybjy_details/unguar/unguar'
    })
  },
  explain:function(){
    wx.navigateTo({
      url: '/pages/ybjy_details/explain/explain'
    })
  },
  onShareAppMessage :function(){
		return {
			title: '加裕倍安保 (加强版)',
			path: '/pages/ybcy/ybcy'
		}
	}
})

	
	
	
	
	
	
	