/*
* module_template.js
* Template for browser feature modules
*/
/*jslint browser : true, continue : true,
devel : true, indent : 2, maxerr : 50,
newcap : true, nomen : true, plusplus : true,
regexp : true, sloppy : true, vars : false,
white : true
*/
/*global $, spa */
spa.message = (function () {
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var
    configMap = {
      main_html : String()
          + '<div class="spa-message">'
          + '<span class="spa-message-closebtn">&times;</span>'
          + '<p class="spa-message-text"></p>'
        + '</div>',
      settable_map : { color_name: true },
      color_name : 'blue'
    },
    stateMap = { $container : null, error_count : 0 },
    jqueryMap = {},
    setJqueryMap, configModule, initModule;
  //----------------- END MODULE SCOPE VARIABLES ---------------

  //------------------- BEGIN UTILITY METHODS ------------------
  // example : getTrimmedString
  //-------------------- END UTILITY METHODS -------------------

  //--------------------- BEGIN DOM METHODS --------------------
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = {
      $container : $container
     };
  };
  // End DOM method /setJqueryMap/
  //---------------------- END DOM METHODS ---------------------
  //------------------- BEGIN EVENT HANDLERS -------------------
  // example: onClickButton = ...
  //-------------------- END EVENT HANDLERS --------------------
  //------------------- BEGIN PUBLIC METHODS -------------------
  // Begin public method /configModule/
  // Purpose : Adjust configuration of allowed keys
  // Arguments : A map of settable keys and values
  // * color_name - color to use
  // Settings :
  // * configMap.settable_map declares allowed keys
  // Returns : true
  // Throws : none
  //
  configModule = function ( input_map ) {
    spa.butil.setConfigMap({
      input_map : input_map,
      settable_map : configMap.settable_map,
      config_map : configMap
    });
    return true;
  };
  // End public method /configModule/
  // Begin public method /initModule/
  // Purpose : Initializes module
  // Arguments :
  // * $container the jquery element used by this feature
  // Returns : true
  // Throws : nonaccidental
  //
  initModule = function ( $container ) {
    stateMap.$container = $container;

    setJqueryMap();
    return true;
  };
  // End public method /initModule/

  // Begin public method /show/
  // Purpose : Show message
  // Arguments :
  //  * messageType - the look of message: error,success,warning,info
  //  * messageText - the text of message
  show = function( messageType, messageText ) {
    if ( stateMap.error_count === 0 ) {
      jqueryMap.$container.html( configMap.main_html );
      stateMap.error_count++;
    }
    else {
      jqueryMap.$container.append( configMap.main_html );
      stateMap.error_count++;
    }
    jqueryMap.$container.find('.spa-message').show().addClass( messageType );
    jqueryMap.$container.find('.spa-message-text').html( messageText );
    var close = document.getElementsByClassName("spa-message-closebtn");
    var i;

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
            //div.style.opacity = "0";
            //setTimeout(function(){ div.style.display = "none"; }, 600);
            stateMap.error_count--;
        }
    }
  };
  // End public method /initModule/

  // return public methods
  return {
    show         : show,
    configModule : configModule,
    initModule   : initModule
  };
  //------------------- END PUBLIC METHODS ---------------------
}());
