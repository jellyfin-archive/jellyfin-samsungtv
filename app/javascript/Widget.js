var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();
var Main = {};
Main.onLoad = function()
{
 widgetAPI.sendReadyEvent();
};
