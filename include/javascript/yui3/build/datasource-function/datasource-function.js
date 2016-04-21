/*
     YUI 3.15.0 (build 834026e)
     Copyright 2014 Yahoo! Inc. All rights reserved.
     Licensed under the BSD License.
     http://yuilibrary.com/license/
     */
YUI.add('datasource-function',function(Y,NAME){var LANG=Y.Lang,DSFn=function(){DSFn.superclass.constructor.apply(this,arguments);};Y.mix(DSFn,{NAME:"dataSourceFunction",ATTRS:{source:{validator:LANG.isFunction}}});Y.extend(DSFn,Y.DataSource.Local,{_defRequestFn:function(e){var fn=this.get("source"),payload=e.details[0];if(fn){try{payload.data=fn(e.request,this,e);}catch(ex){payload.error=ex;}}else{payload.error=new Error("Function data failure");}
this.fire("data",payload);return e.tId;}});Y.DataSource.Function=DSFn;},'3.15.0',{"requires":["datasource-local"]});