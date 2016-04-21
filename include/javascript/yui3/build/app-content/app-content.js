/*
     YUI 3.15.0 (build 834026e)
     Copyright 2014 Yahoo! Inc. All rights reserved.
     Licensed under the BSD License.
     http://yuilibrary.com/license/
     */
YUI.add('app-content',function(Y,NAME){var PjaxContent=Y.PjaxContent;function AppContent(){PjaxContent.apply(this,arguments);}
AppContent.route=['loadContent','_contentRoute'];AppContent.prototype={showContent:function(content,options,callback){content=Y.one(content);if(typeof options==='function'){options={callback:options};callback=null;}
options=Y.merge({render:false},options);var view=options.view||'',viewName=typeof view==='string'?view:view.name,viewConfig=typeof view!=='string'?view.config:{},viewInfo=this.getViewInfo(viewName),container,template,type,ViewConstructor;delete options.view;if(content&&content.isFragment()&&content.get('childNodes').size()===1){content=content.get('firstChild');}
if(content&&content.get('nodeType')===1){container=content;}else{type=(viewInfo&&viewInfo.type)||Y.View;ViewConstructor=typeof type==='string'?Y.Object.getValue(Y,type.split('.')):type;template=ViewConstructor.prototype.containerTemplate;container=Y.Node.create(template);container.append(content);}
viewConfig=Y.merge(viewConfig,{container:container});return this.showView(viewName,viewConfig,options,callback);},_contentRoute:function(req,res,next){var content=res.content,doc=Y.config.doc,activeViewHandle;if(!(content&&content.node)){return next();}
if(content.title&&doc){activeViewHandle=this.onceAfter('activeViewChange',function(){doc.title=content.title;});}
this.showContent(content.node);if(activeViewHandle){activeViewHandle.detach();}
next();}};AppContent.ATTRS=Y.Attribute.protectAttrs(PjaxContent.ATTRS);Y.mix(AppContent,PjaxContent,false,null,1);Y.App.Content=AppContent;Y.Base.mix(Y.App,[AppContent]);},'3.15.0',{"requires":["app-base","pjax-content"]});