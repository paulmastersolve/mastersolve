/*
     YUI 3.15.0 (build 834026e)
     Copyright 2014 Yahoo! Inc. All rights reserved.
     Licensed under the BSD License.
     http://yuilibrary.com/license/
     */
YUI.add('escape',function(Y,NAME){var HTML_CHARS={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;','/':'&#x2F;','`':'&#x60;'},Escape={html:function(string){return(string+'').replace(/[&<>"'\/`]/g,Escape._htmlReplacer);},regex:function(string){return(string+'').replace(/[\-$\^*()+\[\]{}|\\,.?\s]/g,'\\$&');},_htmlReplacer:function(match){return HTML_CHARS[match];}};Escape.regexp=Escape.regex;Y.Escape=Escape;},'3.15.0',{"requires":["yui-base"]});