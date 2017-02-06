var WXGrid = require('../wxgrid/wxgrid.js')
//受保人资料
var proTab = new WXGrid;
proTab.init(6,2);
proTab.setRowsHeight(58);
var classifies = [
  {name:"姓名："},
  {name:"VIP小男孩"},
  {name:"性别 <吸烟情况>："},
  {name:"男 <非吸烟>"},
  {name:"翌年岁："},
  {name:"1岁"},
  {name:"货币："},
  {name:"美元"},
  {name:"每年保费："},
  {name:"$4,044.88"},
  {name:"供款年期："},
  {name:"5年"}]
proTab.data.add("classifies",classifies);   //将一维数组转换为二维数组
    
//保单资料	
var guarTab = new WXGrid;
guarTab.init(2,4);
guarTab.setRowsHeight(58);
var classifies = [
  {name:"基本计划"},
  {name:"基本投保额"},
  {name:"保障年期"},
  {name:"每年保费"},
  {name:"「雋陞」儲蓄保障計劃(EGS)-累積財富"},
  {name:"不适用"},
  {name:"终身"},
  {name:"4,044.88"}]
guarTab.data.add("classifies",classifies);   //将一维数组转换为二维数组


//非投资成分寿险利益说明	
var expTab = new WXGrid;
expTab.init(14,1);
var classifies = [
  {"year":"保单年度终结","damage":"身故赔偿总额","cash":"现金价值总值","premium":"总保费"},
  {"year":"1年","damage":"6,545","cash":"0","premium":"4,045"},
  {"year":"2年","damage":"10,590","cash":"0","premium":"8,090"},
  {"year":"3年","damage":"14,635","cash":"6,859","premium":"12,135"},
  {"year":"4年","damage":"18,680","cash":"10,350","premium":"16,180"},
  {"year":"5年","damage":"22,724","cash":"14,441","premium":"20,224"},
  {"year":"10年","damage":"24,819","cash":"22,941","premium":"20,224"},
  {"year":"15年","damage":"34,835","cash":"32,358","premium":"20,224"},
  {"year":"20年","damage":"47,725","cash":"45,164","premium":"20,224"},
  {"year":"25年","damage":"62,023","cash":"62,023","premium":"20,224"},
  {"year":"30年","damage":"86,309","cash":"86,309","premium":"20,224"},
  {"year":"61岁","damage":"625,140","cash":"625,140","premium":"20,224"},
  {"year":"81岁","damage":"2,370,099","cash":"2,370,099","premium":"20,224"},
  {"year":"100岁","damage":"8,342,842","cash":"8,342,842","premium":"20,224"}]
expTab.data.add("classifies",classifies);   //将一维数组转换为二维数组

//其他保单价值说明
var othTab = new WXGrid;
othTab.init(14,1);
var classifies = [
  {"year":"保单年度完结","damage":"贷款金额","cash":"可套现之红利现金价值"},
  {"year":"1年","damage":"0","cash":"0"},
  {"year":"2年","damage":"0","cash":"0"},
  {"year":"3年","damage":"4,913","cash":"155"},
  {"year":"4年","damage":"7,545","cash":"326"},
  {"year":"5年","damage":"10,431","cash":"517"},
  {"year":"10年","damage":"12,887","cash":"1,707"},
  {"year":"15年","damage":"15,511","cash":"3,320"},
  {"year":"20年","damage":"19,103","cash":"5,525"},
  {"year":"25年","damage":"21,893","cash":"9,031"},
  {"year":"30年","damage":"24,265","cash":"13,801"},
  {"year":"61岁","damage":"40,326","cash":"158,929"},
  {"year":"81岁","damage":"51,509","cash":"763,735"},
  {"year":"100岁","damage":"63,892","cash":"3,196,336"}]
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
      url: '/pages/bcys_details/sg_page1/sg_page1'
    })
  },
  explain:function(){
    wx.navigateTo({
      url: '/pages/bcys_details/explain/explain'
    })
  },
  onShareAppMessage :function(){
		return {
			title: '隽升储蓄保障计划',
			path: '/pages/bcys/bcys'
		}
	}
})
 
	
	
	
	
	
	
	