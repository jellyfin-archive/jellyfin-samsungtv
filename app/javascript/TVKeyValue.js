Main.keyDown = function()
{
 var keyCode = event.keyCode;
 alert("Key pressed: " + keyCode);

 switch(keyCode)
 {
 case tvKey.KEY_RETURN:
 case tvKey.KEY_PANEL_RETURN:
 alert("RETURN");
 widgetAPI.sendReturnEvent();
 break;
 case tvKey.KEY_LEFT:
 alert("LEFT");
 break;
 case tvKey.KEY_RIGHT:
 alert("RIGHT");
 break;
 case tvKey.KEY_UP: 
//
//
//und so weiter und so fort 
  }
};
