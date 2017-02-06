var WXGrid = require('../wxgrid/wxgrid.js')
//受保人资料
var proTab = new WXGrid;
proTab.init(4,4);
proTab.setRowsHeight(58);
var classifies = [
  {name:"各项建议计划书之名称"},
  {name:"最高保障年龄"},
  {name:"保额保障(美元)"},
  {name:"首次定期保费(美元)/年缴"},
  {name:"安进储蓄计划-5(WABU05)"},
  {name:"100"},
  {name:"27,720"},
  {name:"4000,04"},
  {name:"(5年期)"},
  {name:" "},
  {name:" "},
  {name:" "},
  {name:"您的首期保费总额:"},
  {name:" "},
  {name:" "},
  {name:"4,000.04"}]
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
  {"year":"1年","damage":"4,000","cash":"0","premium":"4,000"},
  {"year":"2年","damage":"8,000","cash":"0","premium":"8,000"},
  {"year":"3年","damage":"17,630","cash":"4,826","premium":"12,000"},
  {"year":"4年","damage":"22,596","cash":"7,736","premium":"16,000"},
  {"year":"5年","damage":"27,582","cash":"10,887","premium":"20,000"},
  {"year":"10年","damage":"33,823","cash":"24,392","premium":"20,000"},
  {"year":"15年","damage":"41,017","cash":"34,358","premium":"20,000"},
  {"year":"20年","damage":"52,909","cash":"49,114","premium":"20,000"},
  {"year":"25年","damage":"70,441","cash":"70,441","premium":"20,000"},
  {"year":"30年","damage":"101,372","cash":"101,372","premium":"20,000"},
  {"year":"65岁","damage":"1,187,927","cash":"1,187,927","premium":"20,000"},
  {"year":"80岁","damage":"3,415,398","cash":"3,415,398","premium":"20,000"},
  {"year":"100岁","damage":"14,004,453","cash":"14,004,453","premium":"20,000"}]
expTab.data.add("classifies",classifies);   //将一维数组转换为二维数组

//其他保单价值说明
var othTab = new WXGrid;
othTab.init(14,1);
var classifies = [
  {"year":"保单年度完结","damage":"最高保单贷款","cash":"可套现之红利现金价值"},
  {"year":"1年","damage":"0","cash":"0"},
  {"year":"2年","damage":"0","cash":"0"},
  {"year":"3年","damage":"2,666","cash":"127"},
  {"year":"4年","damage":"4,539","cash":"334"},
  {"year":"5年","damage":"6,803","cash":"570"},
  {"year":"10年","damage":"13,826","cash":"2,786"},
  {"year":"15年","damage":"18,086","cash":"5,494"},
  {"year":"20年","damage":"22,264","cash":"9,830"},
  {"year":"25年","damage":"26,598","cash":"17,029"},
  {"year":"30年","damage":"30,723","cash":"27,679"},
  {"year":"65岁","damage":"57,614","cash":"587,307"},
  {"year":"80岁","damage":"72,366","cash":"1,951,808"},
  {"year":"90岁","damage":"83,430","cash":"4,261,808"}]
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
      url: '/pages/asaj_details/sg_page1/sg_page1'
    })
  },
  explain:function(){
    wx.navigateTo({
      url: '/pages/asaj_details/explain/explain'
    })
  },
  onShareAppMessage :function(){
		return {
			title: '安进储蓄计划-5',
			path: '/pages/asaj/asaj'
		}
	}
})
 
	
	
	
	
	
	
	