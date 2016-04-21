/*
     YUI 3.15.0 (build 834026e)
     Copyright 2014 Yahoo! Inc. All rights reserved.
     Licensed under the BSD License.
     http://yuilibrary.com/license/
     */
YUI.add('panel',function(Y,NAME){var getClassName=Y.ClassNameManager.getClassName;Y.Panel=Y.Base.create('panel',Y.Widget,[Y.WidgetPosition,Y.WidgetStdMod,Y.WidgetAutohide,Y.WidgetButtons,Y.WidgetModality,Y.WidgetPositionAlign,Y.WidgetPositionConstrain,Y.WidgetStack],{BUTTONS:{close:{label:'Close',action:'hide',section:'header',template:'<button type="button" />',classNames:getClassName('button','close')}}},{ATTRS:{buttons:{value:['close']}}});},'3.15.0',{"requires":["widget","widget-autohide","widget-buttons","widget-modality","widget-position","widget-position-align","widget-position-constrain","widget-stack","widget-stdmod"],"skinnable":true});