/*
     YUI 3.15.0 (build 834026e)
     Copyright 2014 Yahoo! Inc. All rights reserved.
     Licensed under the BSD License.
     http://yuilibrary.com/license/
     */
YUI.add('yql-jsonp',function(Y,NAME){Y.YQLRequest.prototype._send=function(url,o){if(o.allowCache!==false){o.allowCache=true;}
if(!this._jsonp){this._jsonp=Y.jsonp(url,o);}else{this._jsonp.url=url;if(o.on&&o.on.success){this._jsonp._config.on.success=o.on.success;}
this._jsonp.send();}};},'3.15.0',{"requires":["jsonp","jsonp-url"]});