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
  {name:"$ 25,000"},
  {name:"每年保费："},
  {name:"$2,500"},
  {name:"需缴保费年限："},
  {name:"5年"}]
proTab.data.add("classifies",classifies);   //将一维数组转换为二维数组
    
//保单资料	
var guarTab = new WXGrid;
guarTab.init(4,4);
guarTab.setRowsHeight(58);
var classifies = [
  {name:"基本保单"},
  {name:"保额"},
  {name:"保障年期"},
  {name:"每年保费"},
  {name:"「充裕未来」计划 (5年缴费)"},
  {name:"25,000"},
  {name:"终身"},
  {name:"$25,00"},
  {name:"免费附送首12个月意外身故赔偿"},
  {name:"-"},
  {name:"1年"},
  {name:"$0"},
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
  {"year":"1年","damage":"2,625","cash":"0","premium":"2,500"},
  {"year":"2年","damage":"5,250","cash":"1,250","premium":"5,000"},
  {"year":"3年","damage":"7,875","cash":"4,322","premium":"7,500"},
  {"year":"4年","damage":"10,500","cash":"6,870","premium":"10,000"},
  {"year":"5年","damage":"13,125","cash":"9,918","premium":"12,500"},
  {"year":"10年","damage":"16,983","cash":"16,223","premium":"12,500"},
  {"year":"15年","damage":"24,651","cash":"23,565","premium":"12,500"},
  {"year":"20年","damage":"35,840","cash":"34,386","premium":"12,500"},
  {"year":"25年","damage":"52,156","cash":"50,355","premium":"12,500"},
  {"year":"40年","damage":"151,215","cash":"151,215","premium":"12,500"},
  {"year":"60岁","damage":"612,129","cash":"612,129","premium":"12,500"},
  {"year":"80岁","damage":"2,555,110","cash":"2,555,110","premium":"12,500"},
  {"year":"100岁","damage":"10,831,986","cash":"10,831,986","premium":"12,500"}]
expTab.data.add("classifies",classifies);   //将一维数组转换为二维数组

//其他保单价值说明
var othTab = new WXGrid;
othTab.init(14,1);
var classifies = [
  {"year":"保单年度完结","damage":"最高保单贷款","cash":"可套现之红利现金价值"},
  {"year":"1年","damage":"0","cash":"0"},
  {"year":"2年","damage":"1,125","cash":"0"},
  {"year":"3年","damage":"2,704","cash":"217"},
  {"year":"4年","damage":"4,583","cash":"452"},
  {"year":"5年","damage":"6,853","cash":"707"},
  {"year":"10年","damage":"9,391","cash":"2,328"},
  {"year":"15年","damage":"11,766","cash":"4,471"},
  {"year":"20年","damage":"14,233","cash":"7,660"},
  {"year":"25年","damage":"17,734","cash":"12,399"},
  {"year":"30年","damage":"20,392","cash":"20,442"},
  {"year":"60岁","damage":"37,415","cash":"269,704"},
  {"year":"80岁","damage":"50,613","cash":"1,378,260"},
  {"year":"100岁","damage":"66,702","cash":"6,741,911"}]
othTab.data.add("classifies",classifies);   //将一维数组转换为二维数组
var app = getApp()
Page({
  data: {
    proTab,
    guarTab,
    expTab,
    othTab
  },
  onLoad:function(){
    
  },
  sg_page1:function(){
    wx.navigateTo({
      url: '/pages/ybcy_details/sg_page1/sg_page1'
    })
  },
  sg_page2:function(){
    wx.navigateTo({
      url: '/pages/ybcy_details/sg_page2/sg_page2'
    })
  },
  explain:function(){
    wx.navigateTo({
      url: '/pages/ybcy_details/explain/explain'
    })
  },
   onShareAppMessage :function(){
		return {
			title: '「充裕未来」计划',
			path: '/pages/ybcy/ybcy'
		}
	}
})
 
	
	
	
