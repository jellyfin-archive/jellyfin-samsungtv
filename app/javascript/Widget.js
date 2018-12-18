/**
 *@file           Widget.js
 *@brief         일반 Widget 에서 사용할 API 함수를 구현
 *@author     삼성 SDS, ESDM개발, 김성태선임
 *@date         2009.02.17
 */
if (this.Common == null) {
    this.Common = new Object();
}
if (this.Common.API == null) {
    this.Common.API = new Object();
}

// Define event enumeration
Common.API.EVENT_ENUM = {
	// Widget Event
	WIDGET_READY : "10",
	WIDGET_EXIT : "11",
	WIDGET_RETURN : "12",
	
	// Key Event
	KEY_REGIST : "20",
	KEY_UNREGIST : "21",
	KEY_IME_MODE : "22",
	KEY_REGIST_ALL : "23",
	KEY_UNREGIST_ALL : "24",
	KEY_REGIST_FULL_WIDGET : "25",
	KEY_REGIST_PART_WIDGET : "26",
	
	// SNS Event
	GET_SEARCH_WIDGET_LIST : "01",
	RUN_SEARCH_WIDGET : "02",
	GET_CHANNEL_WIDGET_LIST : "03"

	// Common.API.Plugin 의 이벤트값과 중복되면 안됨 (100~)
	// 100 미만의 값 사용할 것
}

Common.API.Widget = function(){
    
    var $THIS$ = this;
    
    /**
     * @brief             Widget이 show를 해도 될 경우 호출하는 함수
     * @remarks       Preference 값 중 ready 값을 true로 호출하여 Widget Manager에게 show를 해도 된다는 것을 알려준다.
     */    
    this.sendReadyEvent = function() {
        curWidget.setPreference("ready","true");
    }

    /**
     * @brief            Widget을 종료해야 하는 경우 Widget Manager에게 이벤트를 전달하는 함수
     * @remarks       Widget을 종료해야 하는 경우 Widget Manager에게 이벤트를 전달하는 함수
     */    
    this.sendExitEvent = function() {
        curWidget.setPreference("exit","true");
    }

    /**
     * @brief            Widget에서 복귀해야 하는 경우 Widget Manager에게 이벤트를 전달하는 함수
     * @remarks       Widget에서 복귀해야 하는 경우 Widget Manager에게 이벤트를 전달하는 함수
     */    
    this.sendReturnEvent = function() {
        curWidget.setPreference("return","true");
    }

    /**
     * @brief			키 이벤트를 위젯이 처리하고 상위로 전달하지 않는다 
     * @remarks		최상위 화면이 아닌 경우에는 복귀키를 위젯에서만 처리하고 N Navi로 전달하지 않기위해 이 함수를 호출한다.
    */
    this.blockNavigation = function(event) {
        event.preventDefault();
    }

    /**
     * @brief             정해진 div에 contents를 입력
     * @remarks       정해진 div에 contents를 입력
     */
    this.putInnerHTML = function(pDiv, pContents) {
        if (pDiv != null) {
            //pDiv 의 기존 html을 없엔다
        	while (pDiv.firstChild) {
        		if (pDiv.deleteChild)
        			pDiv.deleteChild(pDiv.firstChild);
        		else
        			pDiv.removeChild(pDiv.firstChild);
        	}
            //pDiv에 contents를 입력한다.
        	pDiv.innerHTML = pContents;
        }
    }

    this.getSearchWidgetListPath =  function() {
        var type = Common.API.EVENT_ENUM.GET_SEARCH_WIDGET_LIST;
		var data = curWidget.id;
		var widgetEvent = new WidgetEvent(type, data);
		sendWidgetEvent("", widgetEvent, true);		// sync call
		
        return "file://localhost/mtd_down/common/WidgetMgr/searchWidgetList.xml";
    }
    
    this.runSearchWidget = function(pWidgetID, pKeyWord) {
        var type = Common.API.EVENT_ENUM.RUN_SEARCH_WIDGET ;
        var data = curWidget.id + "?" + pWidgetID + "?" + pKeyWord;
		var widgetEvent = new WidgetEvent(type, data);	// async call
		sendWidgetEvent("", widgetEvent, false);
    }

    this.getChannelWidgetListPath =  function() {
        var type = Common.API.EVENT_ENUM.GET_CHANNEL_WIDGET_LIST;
		var data = curWidget.id;
		var widgetEvent = new WidgetEvent(type, data);
		sendWidgetEvent("", widgetEvent, true);		// sync call
		
        return "file://localhost/mtd_down/common/WidgetMgr/channelWidgetList.xml";
    }	
}

