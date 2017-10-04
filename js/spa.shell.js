/*
 * spa.shell.js
 * Shell module for SPA
*/

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/
/*global $, spa */

spa.shell = ( function ( $container ) {
  'use strict';
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var
    configMap = {
      main_html : String()
        + '<div class="spa-shell-head">'
          + '<div class="spa-shell-head-logo">'
            + '<h1>SPA DM</h1>'
            + '<p>javascript end to end</p>'
          + '</div>'
          + '<div class="spa-shell-head-acct"></div>'
        + '</div>'
        + '<div class="spa-shell-main">'
          + '<div class="spa-shell-main-nav"></div>'
          + '<div class="spa-shell-main-content"></div>'
        + '</div>'
        + '<div class="spa-shell-foot"></div>'
        + '<div class="spa-shell-modal"></div>'
    },
    stateMap = {
      $container : undefined
    },
    jqueryMap = {},

    setJqueryMap, initModule;
  //----------------- END MODULE SCOPE VARIABLES ---------------

  //--------------------- BEGIN DOM METHODS --------------------
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function () {
    var $container = stateMap.$container;

    jqueryMap = {
      $container : $container,
      $acct      : $container.find('.spa-shell-head-acct'),
      $nav       : $container.find('.spa-shell-main-nav'),
      $content   : $container.find('.spa-shell-main-content')
    };
  };
  // End DOM method /setJqueryMap/

  //--------------------- END DOM METHODS ----------------------
  //------------------- BEGIN PUBLIC METHODS -------------------
  initModule = function ( $container ) {
    // load HTML and map jQuery collections
    stateMap.$container = $container;
    $container.html( configMap.main_html );
    setJqueryMap();

    // configure and initialize feature modules
    spa.nav.initModule( jqueryMap.$nav );
    spa.home.initModule( jqueryMap.$content );
    spa.news.initModule( jqueryMap.$content );
  };

  return {
    initModule : initModule
  };
  //------------------- END PUBLIC METHODS ---------------------

} () );
