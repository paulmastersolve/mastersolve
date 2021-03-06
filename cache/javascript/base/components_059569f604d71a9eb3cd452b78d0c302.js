(function(app) {
 SUGAR.jssource = {
	"modules":{
		"Home":{"fieldTemplates": {
"base": {
"dashboardtitle": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Dashboardtitle FieldTemplate (base) 
events:{'click .dropdown-toggle':'toggleClicked','click a[data-id]':'navigateClicked'},dashboards:null,toggleClicked:function(evt){var self=this;if(!_.isEmpty(this.dashboards)){return;}
this.collection.fetch({silent:true,success:function(collection){var pattern=/^(LBL|TPL|NTC|MSG)_(_|[a-zA-Z0-9])*$/;collection.remove(self.model,{silent:true});_.each(collection.models,function(model){if(pattern.test(model.get('name'))){model.set('name',app.lang.get(model.get('name'),collection.module||null));}});self.dashboards=collection;var optionTemplate=app.template.getField(self.type,"options",self.module);self.$(".dropdown-menu").html(optionTemplate(collection));}});},navigateClicked:function(evt){var id=$(evt.currentTarget).data('id'),type=$(evt.currentTarget).data('type');this.navigate(id,type);},navigate:function(id,type){this.view.layout.navigateLayout(id,type);},format:function(value){var module=this.context.parent?this.context.parent.get("module"):this.context.get("module"),pattern=/^(LBL|TPL|NTC|MSG)_(_|[a-zA-Z0-9])*$/;return pattern.test(value)?app.lang.get(value,module):value;},_loadTemplate:function(){app.view.Field.prototype._loadTemplate.call(this);if(this.context&&this.context.get('model')&&this.context.get('model').dashboardModule==='Home'){this.template=app.template.getField('base',this.tplName)||this.template;}},setMaxWidth:function(width){this.$el.css({'max-width':width});},getCellPadding:function(){var padding=0,$cell=this.$('.dropdown-toggle');if(!_.isEmpty($cell)){padding=parseInt($cell.css('padding-left'),10)+parseInt($cell.css('padding-right'),10);}
return padding;}}) },
"layoutbutton": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Layoutbutton FieldTemplate (base) 
events:{'click .btn.layout':'layoutClicked'},plugins:['Tooltip'],extendsFrom:'ButtonField',getFieldElement:function(){return this.$el;},_render:function(){if(this.context&&this.context.get('model')&&this.context.get('model').get('dashboard_type')==='help-dashboard'){return this;}
var buttonField=app.view._getController({type:'field',name:'button',platform:app.config.platform});buttonField.prototype._render.call(this);},_loadTemplate:function(){app.view.Field.prototype._loadTemplate.call(this);if(this.action!=='edit'||(this.model.maxColumns<=1)){this.template=app.template.empty;}},format:function(value){var metadata=this.model.get("metadata");if(metadata){return(metadata.components)?metadata.components.length:1;}
return value;},layoutClicked:function(evt){var value=$(evt.currentTarget).data('value');this.setLayout(value);},setLayout:function(value){var span=12 / value;if(this.value){if(value===this.value){return;}
var setComponent=function(){var metadata=this.model.get("metadata");_.each(metadata.components,function(component){component.width=span;},this);if(metadata.components.length>value){_.times(metadata.components.length-value,function(index){metadata.components[value-1].rows=metadata.components[value-1].rows.concat(metadata.components[value+index].rows);},this);metadata.components.splice(value);}else{_.times(value-metadata.components.length,function(index){metadata.components.push({rows:[],width:span});},this);}
this.model.set("metadata",app.utils.deepCopy(metadata),{silent:true});this.model.trigger("change:metadata");};if(value!==this.value){app.alert.show('resize_confirmation',{level:'confirmation',messages:app.lang.get('LBL_DASHBOARD_LAYOUT_CONFIRM',this.module),onConfirm:_.bind(setComponent,this),onCancel:_.bind(this.render,this)});}else{setComponent.call(this);}}else{var metadata={components:[]};_.times(value,function(index){metadata.components.push({rows:[],width:span});},this);this.model.set("metadata",app.utils.deepCopy(metadata),{silent:true});this.model.trigger("change:metadata");}},bindDomChange:function(){},bindDataChange:function(){if(this.model){this.model.on("change:metadata",this.render,this);if(this.model.isNew()){this.setLayout(1);this.model.changed={};}}}}) },
"layoutsizer": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Layoutsizer FieldTemplate (base) 
spanMin:2,spanTotal:12,spanStep:1,format:function(value){var metadata=this.model.get("metadata");return(metadata&&metadata.components)?metadata.components.length-1:0;},_loadTemplate:function(){app.view.Field.prototype._loadTemplate.call(this);if(this.action!=='edit'){this.template=app.template.empty;}},_render:function(){app.view.Field.prototype._render.call(this);if(this.action==='edit'&&this.value>0){var self=this,metadata=this.model.get("metadata");this.$('#layoutwidth').empty().noUiSlider('init',{knobs:this.value,scale:[0,this.spanTotal],step:this.spanStep,connect:false,end:function(type){if(type!=='move'){var values=$(this).noUiSlider('value');self.setValue(values);}}}).append(function(){var html="",segments=(self.spanTotal / self.spanStep)+1,segmentWidth=$(this).width()/(segments-1),acum=0;_.times(segments,function(i){acum=(segmentWidth*i)-2;html+="<div class='ticks' style='left:"+acum+"px'></div>";},this);return html;});this.setSliderPosition(metadata);}else{this.$('.noUiSliderEnds').hide();}},setSliderPosition:function(metadata){var divider=0;_.each(_.pluck(metadata.components,'width'),function(span,index){if(index>=this.value)return;divider=divider+parseInt(span,10);this.$('#layoutwidth').noUiSlider('move',{handle:index,to:divider});},this);},setValue:function(value){var metadata=this.model.get("metadata"),divider=0;_.each(metadata.components,function(component,index){if(index==metadata.components.length-1){component.width=this.spanTotal-divider;if(component.width<this.spanMin){var adjustment=this.spanMin-component.width;for(var i=index-1;i>=0;i--){metadata.components[i].width-=adjustment;if(metadata.components[i].width<this.spanMin){adjustment=this.spanMin-metadata.components[i].width;metadata.components[i].width=this.spanMin;}else{adjustment=0;}}
component.width=this.spanMin;}}else{component.width=value[index]-divider;if(component.width<this.spanMin){component.width=this.spanMin;}
divider+=component.width;}},this);this.setSliderPosition(metadata);this.model.set("metadata",metadata,{silent:true});this.model.trigger("change:layout");},bindDataChange:function(){if(this.model){this.model.on("change:metadata",this.render,this);}},bindDomChange:function(){}}) }
}}
,
"views": {
"base": {
"module-menu": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Module-menu View (base) 
extendsFrom:'ModuleMenuView',dashboards:null,recentlyViewed:null,_defaultSettings:{dashboards:20,favorites:3,recently_viewed:10,recently_viewed_toggle:3},TOGGLE_RECENTS_KEY:'more',_recentToggleKey:null,initialize:function(options){this._super('initialize',[options]);this.events=_.extend({},this.events,{'click [data-toggle="recently-viewed"]':'handleToggleRecentlyViewed'});this._initCollections();this._initLegacyDashboards();this.meta.last_state={id:'recent'};this._recentToggleKey=app.user.lastState.key(this.TOGGLE_RECENTS_KEY,this);},_initCollections:function(){this.dashboards=app.data.createBeanCollection('Dashboards');this.recentlyViewed=app.data.createMixedBeanCollection();return this;},_initLegacyDashboards:function(){if(app.config.enableLegacyDashboards&&app.config.enableLegacyDashboards===true){this.dashboardBwcLink=app.bwc.buildRoute(this.module,null,'bwc_dashboard');}
return this;},_renderHtml:function(){this._super('_renderHtml');this.$el.attr('title',app.lang.get('LBL_TABGROUP_HOME',this.module));this.$el.addClass('home btn-group');},populateMenu:function(){var pattern=/^(LBL|TPL|NTC|MSG)_(_|[a-zA-Z0-9])*$/;this.$('.active').removeClass('active');this.dashboards.fetch({'limit':this._settings['dashboards'],'showAlerts':false,'success':_.bind(function(data){_.each(data.models,function(model){if(pattern.test(model.get('name'))){model.set('name',app.lang.get(model.get('name'),model.module));}
model.module='Home';});this._renderPartial('dashboards',{collection:this.dashboards,active:this.context.get('module')==='Home'&&this.context.get('model')});},this),'endpoint':function(method,model,options,callbacks){app.api.records(method,'Dashboards',model.attributes,options.params,callbacks);}});this.populateRecentlyViewed(false);},populateRecentlyViewed:function(focusToggle){var visible=app.user.lastState.get(this._recentToggleKey),threshold=this._settings['recently_viewed_toggle'],limit=this._settings[visible?'recently_viewed':'recently_viewed_toggle'];if(limit<=0){return;}
var modules=this._getModulesForRecentlyViewed();if(_.isEmpty(modules)){return;}
this.recentlyViewed.fetch({'showAlerts':false,'fields':['id','name'],'date':'-7 DAY','limit':limit,'module_list':modules,'success':_.bind(function(data){this._renderPartial('recently-viewed',{collection:this.recentlyViewed,open:!visible,showRecentToggle:data.models.length>threshold||data.next_offset!==-1});if(focusToggle&&this.isOpen()){this.$('[data-toggle="recently-viewed"]').focus();}},this),'endpoint':function(method,model,options,callbacks){var url=app.api.buildURL('recent','read',options.attributes,options.params);app.api.call(method,url,null,callbacks,options.params);}});return;},_getModulesForRecentlyViewed:function(){var modules=app.metadata.getModuleNames({filter:'visible',access:'list'});modules=_.filter(modules,function(module){var view=app.metadata.getView(module,'module-menu');return!view||!view.settings||view.settings.recently_viewed>0;});return modules;},handleToggleRecentlyViewed:function(event){app.user.lastState.set(this._recentToggleKey,Number(!app.user.lastState.get(this._recentToggleKey)));this.populateRecentlyViewed(true);event.stopPropagation();}}) },
"twitter": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Twitter View (base) 
plugins:['Dashlet','RelativeTime','Connector','Tooltip'],limit:20,events:{'click .connect-twitter':'onConnectTwitterClick','click .create-case':'createCase'},initDashlet:function(){this.initDashletConfig();var serverInfo=app.metadata.getServerInfo();this.tweet2case=serverInfo.system_tweettocase_on?true:false;var limit=this.settings.get('limit')||this.limit;this.settings.set('limit',limit);this.cacheKey='twitter.dashlet.current_user_cache';var currentUserCache=app.cache.get(this.cacheKey);if(currentUserCache&&currentUserCache.current_twitter_user_name){self.current_twitter_user_name=currentUserCache.current_twitter_user_name;}
if(currentUserCache&&currentUserCache.current_twitter_user_pic){self.current_twitter_user_pic=currentUserCache.current_twitter_user_pic;}
this.caseCreateAcl=app.acl.hasAccess('edit','Cases');},initDashletConfig:function(){this.moduleType=app.controller.context.get('module');this.layoutType=app.controller.context.get('layout');if(this.meta.config&&this.layoutType==='record'){this.dashletConfig=app.metadata.getView(this.moduleType,this.name)||this.dashletConfig;if(this.moduleType!=='Home'&&this.dashletConfig.config&&this.dashletConfig.config.fields){this.dashletConfig.config.fields=_.filter(this.dashletConfig.config.fields,function(field){return field.name!=='twitter';});}}},onConnectTwitterClick:function(event){if(!_.isUndefined(event.currentTarget)){event.preventDefault();var href=this.$(event.currentTarget).attr('href');app.bwc.login(false,function(response){window.open(href);});}},createCase:function(event){var module='Cases';var layout='create';var self=this;app.drawer.reset();app.drawer.open({layout:layout,context:{create:true,module:module}},function(refresh,createModelPointer){if(refresh){var collection=app.controller.context.get('collection');if(collection&&collection.module===module){collection.fetch({showAlerts:false});}}});var createLayout=_.last(app.drawer._components),tweetId=this.$(event.target).data('url').split('/');tweetId=tweetId[tweetId.length-1];var createValues={'source':'Twitter','name':app.lang.get('LBL_CASE_FROM_TWITTER_TITLE','Cases')+' '+tweetId+' @'+this.$(event.target).data('screen_name'),'description':app.lang.get('LBL_TWITTER_SOURCE','Cases')+' '+this.$(event.target).data('url')};this.createModel=createLayout.model;if(this.model){if(this.model.module=='Accounts'){createValues.account_name=this.model.get('name');createValues.account_id=this.model.get('id');}else{createValues.account_name=this.model.get('account_name');createValues.account_id=this.model.get('account_id');}}
this.setCreateModelFields(this.createModel,createValues);this.createModel.on('sync',_.once(function(model){var activity=app.data.createBean('Activities',{activity_type:"post",comment_count:0,data:{value:app.lang.get('LBL_TWITTER_SOURCE')+' '+self.$(event.target).data('url'),tags:[]},tags:[],value:app.lang.get('LBL_TWITTER_SOURCE')+' '+self.$(event.target).data('url'),deleted:"0",parent_id:model.id,parent_type:"Cases"});activity.save();var contacts=app.data.createBeanCollection('Contacts');var options={filter:[{"twitter":{"$equals":self.$(event.target).data('screen_name')}}],success:function(data){if(data&&data.models&&data.models[0]){var url=app.api.buildURL('Cases','contacts',{id:self.createModel.id,relatedId:data.models[0].id,link:true});app.api.call('create',url);}}};contacts.fetch(options);}));},setCreateModelFields:function(model,fields){var action='edit',module='Cases',ownerId=app.user.get('id');_.each(fields,function(value,fieldName){if(app.acl.hasAccess(action,module,ownerId,fieldName)){model.set(fieldName,value);}});return model;},_render:function(){if(this.tweets||this.meta.config){app.view.View.prototype._render.call(this);}},bindDataChange:function(){if(this.model){this.model.on('change',this.loadData,this);}},getTwitterName:function(){var mapping=this.getConnectorModuleFieldMapping('ext_rest_twitter',this.moduleType);var twitter=this.model.get('twitter')||this.model.get(mapping.name)||this.model.get('name')||this.model.get('account_name')||this.model.get('full_name');if(this.layoutType==='records'||this.moduleType==='Home'){twitter=this.settings.get('twitter');}
if(!twitter){return false;}
twitter=twitter.replace(/ /g,'');this.twitter=twitter;return twitter;},loadData:function(options){if(this.disposed||this.meta.config){return;}
this.screen_name=this.settings.get('twitter')||false;this.tried=false;if(this.viewName==='config'){return false;}
this.loadDataCompleteCb=options?options.complete:null;this.connectorCriteria=['eapm_bean','test_passed'];this.checkConnector('ext_rest_twitter',_.bind(this.loadDataWithValidConnector,this),_.bind(this.handleLoadError,this),this.connectorCriteria);},loadDataWithValidConnector:function(connector){if(!this.getTwitterName()){if(_.isFunction(this.loadDataCompleteCb)){this.loadDataCompleteCb();}
return false;}
var limit=parseInt(this.settings.get('limit'),10)||this.limit,self=this;var currentUserUrl=app.api.buildURL('connector/twitter/currentUser','','',{connectorHash:connector.connectorHash});if(!this.current_twitter_user_name){app.api.call('READ',currentUserUrl,{},{success:function(data){app.cache.set(self.cacheKey,{'current_twitter_user_name':data.screen_name,'current_twitter_user_pic':data.profile_image_url});self.current_twitter_user_name=data.screen_name;self.current_twitter_user_pic=data.profile_image_url;if(!this.disposed){self.render();}},complete:self.loadDataCompleteCb});}
var url=app.api.buildURL('connector/twitter','',{id:this.twitter},{count:limit,connectorHash:connector.connectorHash});app.api.call('READ',url,{},{success:function(data){if(self.disposed){return;}
var tweets=[];if(data.success!==false){_.each(data,function(tweet){var time=new Date(tweet.created_at.replace(/^\w+ (\w+) (\d+) ([\d:]+) \+0000 (\d+)$/,'$1 $2 $4 $3 UTC')),date=app.date.format(time,'Y/m/d H:i:s'),text=tweet.retweeted_status?'RT @'+tweet.retweeted_status.user.screen_name+': '+tweet.retweeted_status.text:tweet.text,sourceUrl=tweet.source,id=tweet.id_str,name=tweet.user.name,tokenText=text.split(' '),screen_name=tweet.user.screen_name,profile_image_url=tweet.user.profile_image_url_https,j,rightNow=new Date(),diff=(rightNow.getTime()-time.getTime())/(1000*60*60*24),useAbsTime=diff>1;for(j=0;j<tokenText.length;j++){if(tokenText[j].charAt(0)=='h'&&tokenText[j].charAt(1)=='t'){tokenText[j]="<a class='googledoc-fancybox' href="+'"'+tokenText[j]+'"'+"target='_blank'>"+tokenText[j]+"</a>";}}
text=tokenText.join(' ');tweets.push({id:id,name:name,screen_name:screen_name,profile_image_url:profile_image_url,text:text,source:sourceUrl,date:date,useAbsTime:useAbsTime});},this);}
self.tweets=tweets;if(!this.disposed){self.template=app.template.get(self.name+'.Home');self.render();}},error:function(data){if(self.tried===false){self.tried=true;var name='ext_rest_twitter';var funcWrapper=function(){self.checkConnector(name,_.bind(self.loadDataWithValidConnector,self),_.bind(self.handleLoadError,self),self.connectorCriteria);};self.getConnectors(name,funcWrapper);}
else{self.handleLoadError(null);}},complete:self.loadDataCompleteCb});},handleLoadError:function(connector){if(this.disposed){return;}
this.showGeneric=true;this.errorLBL=app.lang.get('ERROR_UNABLE_TO_RETRIEVE_DATA');this.template=app.template.get(this.name+'.twitter-need-configure.Home');if(connector===null){this.errorLBL=app.lang.get('LBL_ERROR_CANNOT_FIND_TWITTER')+this.twitter;}
else if(!connector.test_passed&&connector.testing_enabled){this.needOAuth=true;this.needConnect=false;this.showGeneric=false;this.showAdmin=app.acl.hasAccess('admin','Administration');}
else if(!connector.eapm_bean){this.needOAuth=false;this.needConnect=true;this.showGeneric=false;this.showAdmin=app.acl.hasAccess('admin','Administration');}
app.view.View.prototype._render.call(this);if(_.isFunction(this.loadDataCompleteCb)){this.loadDataCompleteCb();}},_dispose:function(){if(this.model){this.model.off('change',this.loadData,this);}
app.view.View.prototype._dispose.call(this);}}) },
"about-source-code": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// About-source-code View (base) 
serverInfo:null,initialize:function(options){this._super('initialize',[options]);this.serverInfo=app.metadata.getServerInfo();}}) },
"about-language-packs": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// About-language-packs View (base) 
linkTemplate:null,initialize:function(opts){app.view.View.prototype.initialize.call(this,opts);this.linkTemplate=app.template.getView(this.name+'.link',this.module);},_renderHtml:function(){_.each(this.meta.providers,function(provider){provider.link=this.linkTemplate(provider);},this);app.view.View.prototype._renderHtml.call(this);}}) },
"about-resources": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// About-resources View (base) 
initialize:function(opts){this.serverInfo=app.metadata.getServerInfo();app.view.View.prototype.initialize.call(this,opts);}}) },
"top-activity-user": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Top-activity-user View (base) 
plugins:['Dashlet','GridBuilder'],events:{'change select[name=filter_duration]':'filterChanged'},initDashlet:function(viewName){this.collection=new app.BeanCollection();if(!this.meta.config){this.collection.on("reset",this.render,this);}},_mapping:{meetings:{icon:'fa-comments',label:'LBL_MOST_MEETING_HELD'},inbound_emails:{icon:'fa-envelope',label:'LBL_MOST_EMAILS_RECEIVED'},outbound_emails:{icon:'fa-envelope-o',label:'LBL_MOST_EMAILS_SENT'},calls:{icon:'fa-phone',label:'LBL_MOST_CALLS_MADE'}},loadData:function(params){if(this.meta.config){return;}
var url=app.api.buildURL('mostactiveusers',null,null,{days:this.settings.get("filter_duration")}),self=this;app.api.call("read",url,null,{success:function(data){if(self.disposed){return;}
var models=[];_.each(data,function(attributes,module){if(_.isEmpty(attributes)){return;}
var model=new app.Bean(_.extend({id:_.uniqueId('aui')},attributes));model.module=module;model.set("name",model.get("first_name")+' '+model.get("last_name"));model.set("icon",self._mapping[module]['icon']);var template=Handlebars.compile(app.lang.get(self._mapping[module]['label'],self.module));model.set("label",template({count:model.get("count")}));model.set("pictureUrl",app.api.buildFileURL({module:"Users",id:model.get("user_id"),field:"picture"}));models.push(model);},this);self.collection.reset(models);},complete:params?params.complete:null});},filterChanged:function(evt){this.loadData();},_dispose:function(){if(this.collection){this.collection.off("reset",null,this);}
app.view.View.prototype._dispose.call(this);}}) },
"about-headerpane": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// About-headerpane View (base) 
extendsFrom:'HeaderpaneView',_formatTitle:function(title){return app.lang.get(title,this.module,app.metadata.getServerInfo());}}) },
"webpage": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Webpage View (base) 
plugins:['Dashlet'],_defaultOptions:{limit:10,},bindDataChange:function(){if(!this.meta.config){this.model.on("change",this.render,this);}},_render:function(){if(!this.meta.config){this.dashletConfig.view_panel[0].height=this.settings.get('limit')*this.rowHeight;}
app.view.View.prototype._render.call(this);},initDashlet:function(view){this.viewName=view;var settings=_.extend({},this._defaultOptions,this.settings.attributes);this.settings.set(settings);},loadData:function(options){if(options&&options.complete){options.complete();}}}) }
}}
,
"layouts": {}
,
"datas": {}

},
		"Contacts":{"fieldTemplates": {}
,
"views": {
"base": {
"record": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Record View (base) 
extendsFrom:'RecordView',initialize:function(options){this.plugins=_.union(this.plugins||[],['HistoricalSummary']);this.plugins.push('ContactsPortalMetadataFilter');this._super('initialize',[options]);this.removePortalFieldsIfPortalNotActive(this.meta);}}) },
"preview": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Preview View (base) 
extendsFrom:'PreviewView',initialize:function(options){this.plugins=_.union(this.plugins||[],["ContactsPortalMetadataFilter"]);this._super("initialize",[options]);},_previewifyMetadata:function(meta){meta=this._super("_previewifyMetadata",[meta]);this.removePortalFieldsIfPortalNotActive(meta);return meta;}}) },
"create-actions": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Create-actions View (base) 
extendsFrom:'CreateActionsView',initialize:function(options){this.plugins=_.union(this.plugins||[],["ContactsPortalMetadataFilter"]);this._super("initialize",[options]);this.removePortalFieldsIfPortalNotActive(this.meta);}}) }
}}
,
"layouts": {}
,
"datas": {}

},
		"Accounts":{"fieldTemplates": {}
,
"views": {
"base": {
"record": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Record View (base) 
extendsFrom:'RecordView',initialize:function(options){this.plugins=_.union(this.plugins||[],['HistoricalSummary']);this._super('initialize',[options]);}}) },
"dnb-bal-results": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Dnb-bal-results View (base) 
extendsFrom:'DnbBalResultsView',events:{'click .importDNBData':'importDNBData','click a.dnb-company-name':'getCompanyDetails','click .backToList':'backToCompanyList','click [data-action="show-more"]':'invokePagination','click .bulkImport':'bulkImport','change .dnb-bi-chk':'importCheckBox','change [name="dnb-bi-slctall"]':'selectRecords'},selectors:{'load':'#dnb-bal-result-loading','rslt':'#dnb-bal-result','rsltList':'ul#dnb-results-list'},selectAll:true,balAcctDD:null,bulkImportLimit:20,initialize:function(options){this._super('initialize',[options]);this.initDD();this.initDashlet();this.paginationCallback=this.baseAccountsBAL;this.rowTmpl=app.template.getView(this.name+'.dnb-account-row',this.module);this.resultTemplate=app.template.getView(this.name+'.dnb-bal-acct-rslt',this.module);this.resultCountTmpl=app.lang.get('LBL_DNB_BAL_ACCT_HEADER');},initDD:function(){this.balAcctDD={'name':this.searchDD.companyname,'duns_num':this.searchDD.duns_num,'billing_address_street':this.searchDD.streetaddr,'billing_address_city':this.searchDD.town,'billing_address_state':this.searchDD.territory,'billing_address_country':this.searchDD.ctrycd,'recordNum':{'json_path':'DisplaySequence'}};this.balAcctDD.locationtype=this.searchDD.locationtype;this.balAcctDD.isDupe=this.searchDD.isDupe;},loadData:function(options){this.checkConnector('ext_rest_dnb',_.bind(this.loadDataWithValidConnector,this),_.bind(this.handleLoadError,this),['test_passed']);},_render:function(){app.view.View.prototype._renderHtml.call(this);},buildAList:function(balParams){if(this.disposed){return;}
this.template=this.resultTemplate;if(this.listData&&this.listData.count){delete this.listData['count'];}
this.render();this.$(this.selectors.load).removeClass('hide');this.$(this.selectors.rslt).addClass('hide');this.toggleButton(true,'.bulkImport');this.baseAccountsBAL(balParams,this.renderBAL);},renderBAL:function(dnbBalApiRsp){var dnbBalRslt={},appendRecords=false;if(this.resetPaginationFlag){this.initPaginationParams();}
if(dnbBalApiRsp.product){var apiCompanyList=this.getJsonNode(dnbBalApiRsp.product,this.commonJSONPaths.srchRslt);this.formattedRecordSet=this.formatSrchRslt(apiCompanyList,this.balAcctDD);this.recordCount=this.getJsonNode(dnbBalApiRsp.product,this.commonJSONPaths.srchCount);var nextPage=this.paginateRecords();if(_.isNull(this.currentPage)){this.currentPage=nextPage;dnbBalRslt.product=this.currentPage;}else{dnbBalRslt.product=nextPage;appendRecords=true;}
if(this.recordCount){dnbBalRslt.count=this.recordCount;}}else if(dnbBalApiRsp.errmsg){dnbBalRslt.errmsg=dnbBalApiRsp.errmsg;}
this.renderPage(dnbBalRslt,appendRecords);},renderPage:function(pageData,append){var slctRecCnt;if(this.selectAll){if(append){slctRecCnt=this.$('.dnb-bi-chk:checked').length;}else{slctRecCnt=0;}
_.each(pageData.product,function(balRsltObj){if(slctRecCnt>=this.bulkImportLimit){return;}
if(_.isUndefined(balRsltObj.isDupe)&&slctRecCnt<this.bulkImportLimit){balRsltObj.isSelected=true;slctRecCnt++;}else{balRsltObj.isSelected=false;}},this);}else{_.each(pageData.product,function(balRsltObj){balRsltObj.isSelected=false;},this);slctRecCnt=0;}
this._super('renderPage',[pageData,append]);var disableImportBtn=slctRecCnt===0;if(this.selectAll&&disableImportBtn){this.selectAll=false;this.$('[name="dnb-bi-slctall"]').prop('checked',false);}
this.toggleButton(disableImportBtn,'.bulkImport');},getCompanyDetails:function(evt){if(this.disposed){return;}
var duns_num=evt.target.id;if(duns_num){this.template=app.template.getView(this.name+'.dnb-company-details',this.module);this.render();this.$('div#dnb-company-details').hide();this.$('.importDNBData').hide();this.baseCompanyInformation(duns_num,this.compInfoProdCD.lite,app.lang.get('LBL_DNB_BAL_LIST'),this.renderCompanyDetails);}},renderCompanyDetails:function(companyDetails){if(this.disposed){return;}
var formattedFirmographics,dnbFirmo={};dnbFirmo.backToListLabel=companyDetails.backToListLabel;if(companyDetails.errmsg){dnbFirmo.errmsg=companyDetails.errmsg;}else if(companyDetails.product){formattedFirmographics=this.formatCompanyInfo(companyDetails.product,this.accountsDD);dnbFirmo.product=formattedFirmographics;this.currentCompany=companyDetails.product;}
this.dnbFirmo=dnbFirmo;this.render();this.$('.importDNBData').toggleClass('hide',!_.isUndefined(this.dnbFirmo.errmsg));this.$('div#dnb-company-detail-loading').hide();this.$('div#dnb-company-details').show();},backToCompanyList:function(){if(this.disposed){return;}
if(this.listData&&this.listData.count){delete this.listData['count'];}
this.template=app.template.getView(this.name+'.dnb-bal-acct-rslt',this.module);this.render();this.$(this.selectors.load).removeClass('hide');this.$(this.selectors.rslt).addClass('hide');this.toggleButton(true,'.bulkImport');var dupeCheckParams={'type':'duns','apiResponse':this.currentPage,'module':'dunsPage'};this.baseDuplicateCheck(dupeCheckParams,this.renderPage);},bulkImport:function(){var selectedDuns=this.$('.dnb_checkbox:checked').map(function(){return this.name;});if(!_.isUndefined(selectedDuns)&&selectedDuns.length>0){this.toggleButton(true,'.bulkImport');var recToImport=this.currentPage.filter(function(rsltObj){if(_.contains(selectedDuns,rsltObj.duns_num)){return rsltObj;}}).map(function(rsltObj){return{'name':rsltObj.name,'duns_num':rsltObj.duns_num}});if(!_.isUndefined(recToImport)&&recToImport.length>0){this.invokeBulkImport(recToImport,this.module,this.backToCompanyList);}}else{app.alert.show('dnb-import',{level:'warning',title:app.lang.get('LBL_WARNING')+':',messages:app.lang.get('LBL_DNB_BI_NO_SLCT'),autoClose:true});}},importCheckBox:function(evt){var dnbCheckBoxes=this.$('.dnb-bi-chk:checked');var isChecked=this.$(evt.currentTarget).prop('checked');if(isChecked&&dnbCheckBoxes.length>this.bulkImportLimit){this.$(evt.currentTarget).prop('checked',false);app.alert.show('dnb-import',{level:'warning',title:app.lang.get('LBL_WARNING')+':',messages:app.lang.get('LBL_DNB_BI_REC_LIMIT'),autoClose:true});}
this.toggleButton(dnbCheckBoxes.length===0,'.bulkImport');},selectRecords:function(evt){this.selectAll=this.$(evt.currentTarget).prop('checked');var slctCnt=0;if(this.selectAll){_.each(this.$('.dnb-bi-chk'),function(chkBox){if(!this.$(chkBox).prop('disabled')&&slctCnt<this.bulkImportLimit){this.$(chkBox).prop('checked',true);slctCnt++;}},this);this.toggleButton(slctCnt===0,'.bulkImport');}else{this.$('.dnb-bi-chk').prop('checked',false);this.toggleButton(true,'.bulkImport');}}}) },
"create-actions": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Create-actions View (base) 
extendsFrom:'CreateActionsView',initialize:function(options){this._super("initialize",[options]);this.context.on('update:account',this.handleKeyup);},handleKeyup:_.throttle(function(){var searchedValue=this.$('input.inherit-width').val();if(searchedValue&&searchedValue.length>=3){this.context.trigger('input:name:keyup',searchedValue);}},1000,{leading:false})}) }
}}
,
"layouts": {}
,
"datas": {}

},
		"Opportunities":{"fieldTemplates": {
"base": {
"quickcreate": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Quickcreate FieldTemplate (base) 
extendsFrom:'QuickcreateField',openCreateDrawer:function(module){this.actionLayout='create-actions';this._super('openCreateDrawer',[module]);}}) },
"rowaction": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Rowaction FieldTemplate (base) 
extendsFrom:"RowactionField",initialize:function(options){this.plugins=_.clone(this.plugins)||[];this.plugins.push('DisableDelete');this._super("initialize",[options]);}}) }
}}
,
"views": {
"base": {
"massupdate": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Massupdate View (base) 
extendsFrom:"MassupdateView",initialize:function(options){this.plugins=_.clone(this.plugins)||[];this.plugins.push('DisableMassDelete');this._super("initialize",[options]);}}) },
"record": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Record View (base) 
extendsFrom:'RecordView',alert:undefined,cancelClicked:function(){var changedAttributes=this.model.changedAttributes(this.model.getSyncedAttributes());this.model.set(changedAttributes);this._super('cancelClicked');},initialize:function(options){this.plugins=_.union(this.plugins,['LinkedModel','HistoricalSummary']);if(app.metadata.getModule('Opportunities','config').opps_view_by=='RevenueLineItems'){this.once('init',function(){var rlis=this.model.getRelatedCollection('revenuelineitems');rlis.once('reset',function(collection){if(collection.length===0&&$('#createRLI').length===0){this.showRLIWarningMessage(this.model.module);}},this);rlis.fetch({relate:true});},this);}
this._super('initialize',[options]);},getCalculatedFields:function(){return _.filter(this.model.fields,function(field){return field.calculated;});},setupDuplicateFields:function(prefill){if(app.metadata.getModule('Opportunities','config').opps_view_by==='RevenueLineItems'){var calcFields=this.getCalculatedFields();if(calcFields){_.each(calcFields,function(field){prefill.unset(field.name);},this);}}},showRLIWarningMessage:function(){app.routing.before('route',this.dismissAlert,undefined,this);var message=app.lang.get('TPL_RLI_CREATE','Opportunities')+'  <a href="javascript:void(0);" id="createRLI">'+
app.lang.get('TPL_RLI_CREATE_LINK_TEXT','Opportunities')+'</a>';this.alert=app.alert.show('opp-rli-create',{level:'warning',autoClose:false,title:app.lang.get('LBL_ALERT_TITLE_WARNING')+':',messages:message,onLinkClick:_.bind(function(){this.openRLICreate();},this),onClose:_.bind(function(){app.routing.offBefore('route',this.dismissAlert,this);},this)});},dismissAlert:function(){app.alert.dismiss('opp-rli-create');app.routing.offBefore('route',this.dismissAlert,this);},openRLICreate:function(){this.dismissAlert();var model=this.createLinkModel(this.createdModel||this.model,'revenuelineitems');app.drawer.open({layout:'create-actions',context:{create:true,module:model.module,model:model}},_.bind(this.rliCreateClose,this));},rliCreateClose:function(model){if(!model){return;}
var ctx=this.listContext||this.context;ctx.resetLoadFlag();ctx.set('skipFetch',false);ctx.loadData();var rli_ctx=_.find(ctx.children,function(child){return(child.get('module')=='RevenueLineItems');},this);if(!_.isUndefined(rli_ctx)&&_.isFunction(rli_ctx.loadData)){rli_ctx.loadData();}}}) },
"config-opps-view-by": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config-opps-view-by View (base) 
extendsFrom:'ConfigPanelView',currentOppsViewBySetting:undefined,waitingForFieldItems:false,initialize:function(options){this._super('initialize',[options]);this.currentOppsViewBySetting=this.model.get('opps_view_by');},bindDataChange:function(){this.model.on('change:opps_view_by',function(){this.showRollupOptions();},this);},showRollupOptions:function(){if(this.currentOppsViewBySetting==='RevenueLineItems'&&this.model.get('opps_view_by')==='Opportunities'){this.getField('opps_closedate_rollup').show();this.$('[for=opps_closedate_rollup]').show();this.$('#sales-stage-text').show();if(!this.model.has('opps_closedate_rollup')){this.$('input[value="latest"]').prop('checked',true);}}else{this.getField('opps_closedate_rollup').hide();this.$('[for=opps_closedate_rollup]').hide();this.$('#sales-stage-text').hide();}
this.updateTitle();},_render:function(options){this._super('_render',[options]);this.showRollupOptions();},_updateTitleValues:function(){var items=this._getFieldOptions();if(items){var title='';if(items&&_.isObject(items)){title=items[this.model.get('opps_view_by')];}
this.titleSelectedValues=title;}},_getFieldOptions:function(){var f=this.getField('opps_view_by');if(_.isUndefined(f.items)){if(this.waitingForFieldItems===false){this.waitingForFieldItems=true;f.once('render',function(){this.waitingForFieldItems=false;this.updateTitle();},this);}
return false;}else{return f.items;}}}) },
"config-header-buttons": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config-header-buttons View (base) 
extendsFrom:'ConfigHeaderButtonsView',currentOppsViewBySetting:undefined,isForecastsSetup:false,initialize:function(options){this._super('initialize',[options]);this.currentOppsViewBySetting=this.model.get('opps_view_by');this.isForecastsSetup=!!app.metadata.getModule('Forecasts','config').is_setup;},_beforeSaveConfig:function(){app.alert.show('opp.config.save',{level:'process',title:app.lang.getAppString('LBL_SAVING')});},showSavedConfirmation:function(onClose){app.alert.dismiss('opp.config.save');this._super('showSavedConfirmation',[onClose]);},displayWarningAlert:function(){app.alert.show('forecast-warning',{level:'confirmation',title:app.lang.get('LBL_WARNING'),messages:app.lang.get('LBL_OPPS_CONFIG_ALERT','Opportunities'),onConfirm:_.bind(function(){this._super('saveConfig');},this),onCancel:_.bind(function(){this.model.set('opps_view_by',this.currentOppsViewBySetting);},this)});},saveConfig:function(){if(this.isForecastsSetup&&this.currentOppsViewBySetting!==this.model.get('opps_view_by')){this.displayWarningAlert();}else{this._super('saveConfig');}}}) },
"panel-top": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Panel-top View (base) 
extendsFrom:"PanelTopView",loadData:function(){this._super('loadData');if(app.metadata.getModule('Opportunities','config').opps_view_by=='RevenueLineItems'){this.context.parent.trigger('subpanel:reload',{links:['revenuelineitems']});}}}) },
"create-actions": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Create-actions View (base) 
extendsFrom:'CreateActionsView',createdModel:undefined,listContext:undefined,originalSuccess:undefined,alert:undefined,initialize:function(options){this.plugins=_.union(this.plugins,['LinkedModel']);this._super('initialize',[options]);},getCustomSaveOptions:function(options){if(app.metadata.getModule('Opportunities','config').opps_view_by==='RevenueLineItems'){this.createdModel=this.model;this.listContext=this.context.parent||this.context;this.originalSuccess=options.success;var success=_.bind(function(model){this.originalSuccess(model);var addedRLIs=model.get('revenuelineitems')||false;addedRLIs=(addedRLIs&&addedRLIs.create&&addedRLIs.create.length);if(!addedRLIs&&options.lastSaveAction!='saveAndCreate'){this.showRLIWarningMessage(this.listContext.get('module'));}},this);return{success:success};}},showRLIWarningMessage:function(){app.routing.before('route',this.dismissAlert,undefined,this);var message=app.lang.get('TPL_RLI_CREATE','Opportunities')+'  <a href="javascript:void(0);" id="createRLI">'+
app.lang.get('TPL_RLI_CREATE_LINK_TEXT','Opportunities')+'</a>';this.alert=app.alert.show('opp-rli-create',{level:'warning',autoClose:false,title:app.lang.get('LBL_ALERT_TITLE_WARNING')+':',messages:message,onLinkClick:_.bind(function(){app.alert.dismiss('create-success');this.openRLICreate();},this),onClose:_.bind(function(){app.routing.offBefore('route',this.dismissAlert,this);},this)});},dismissAlert:function(data){if(data&&!(data.args&&data.args[0]==='Opportunities'&&data.route==='list')){app.alert.dismiss('opp-rli-create');app.routing.offBefore('route',this.dismissAlert,this);}},openRLICreate:function(){this.dismissAlert(true);var model=this.createLinkModel(this.createdModel||this.model,'revenuelineitems');app.drawer.open({layout:'create-actions',context:{create:true,module:model.module,model:model}},_.bind(function(model){if(!model){return;}
var ctx=this.listContext||this.context;ctx.reloadData({recursive:false});ctx.trigger('subpanel:reload',{links:['opportunities','revenuelineitems']});},this));},_dispose:function(){if(this.alert){this.alert.getCloseSelector().off('click');}
this._super('_dispose',[]);}}) }
}}
,
"layouts": {
"base": {
"config-drawer-content": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config-drawer-content Layout (base) 
extendsFrom:'ConfigDrawerContentLayout',viewOppsByTitle:undefined,viewOppsByOppsTpl:undefined,viewOppsByRLIsTpl:undefined,_initHowTo:function(){this.viewOppsByTitle=app.lang.get('LBL_OPPS_CONFIG_VIEW_BY_LABEL','Opportunities');var helpUrl={more_info_url:'<a href="'+app.help.getMoreInfoHelpURL('config','OpportunitiesConfig')
+'" target="_blank">',more_info_url_close:'</a>'},viewOppsByOppsObj=app.help.get('Opportunities','config_opps',helpUrl),viewOppsByRLIsObj=app.help.get('Opportunities','config_rlis',helpUrl);this.viewOppsByOppsTpl=app.template.getView('help-dashlet')(viewOppsByOppsObj);this.viewOppsByRLIsTpl=app.template.getView('help-dashlet')(viewOppsByRLIsObj);},bindDataChange:function(){this._super('bindDataChange');this.model.on('change:opps_view_by',function(model,oppsViewBy){this.changeHowToData(this.viewOppsByTitle,this._getText(oppsViewBy));},this);},_switchHowToData:function(helpId){switch(helpId){case'config-opps-view-by':this.currentHowToData.title=this.viewOppsByTitle;this.currentHowToData.text=this._getText(this.model.get('opps_view_by'));}
this._super('_switchHowToData');},_getText:function(oppsViewBy){return(oppsViewBy==='Opportunities')?this.viewOppsByOppsTpl:this.viewOppsByRLIsTpl;}}) },
"config-drawer": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config-drawer Layout (base) 
extendsFrom:'ConfigDrawerLayout',_checkModuleAccess:function(){var acls=app.user.getAcls().Opportunities,isSysAdmin=(app.user.get('type')=='admin'),isDev=(!_.has(acls,'developer'));return(isSysAdmin||isDev);}}) }
}}
,
"datas": {}

},
		"Cases":{"fieldTemplates": {
"base": {
"create-article-action": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Create-article-action FieldTemplate (base) 
extendsFrom:'RowactionField',initialize:function(options){this._super('initialize',[options]);this.def.route='bwc/index.php?module=KBDocuments&action=EditView&case_id='+this.model.id;},_loadTemplate:function(){this.type='rowaction';this._super('_loadTemplate');this.type=this.def.type;}}) }
}}
,
"views": {
"base": {
"record": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Record View (base) 
extendsFrom:'RecordView',initialize:function(options){this.plugins=_.union(this.plugins||[],['HistoricalSummary']);this._super('initialize',[options]);}}) }
}}
,
"layouts": {}
,
"datas": {}

},
		"Notes":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Calls":{"fieldTemplates": {}
,
"views": {
"base": {
"record": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Record View (base) 
extendsFrom:'RecordView',initialize:function(options){this.plugins=_.union(this.plugins||[],['EditAllRecurrences','AddAsInvitee']);this._super('initialize',[options]);}}) },
"create-actions": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Create-actions View (base) 
extendsFrom:'CreateActionsView',initialize:function(options){this.plugins=_.union(this.plugins||[],['AddAsInvitee']);this._super('initialize',[options]);}}) },
"resolve-conflicts-list": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Resolve-conflicts-list View (base) 
extendsFrom:'ResolveConflictsListView',_buildFieldDefinitions:function(modelToSave,modelInDb){modelToSave.unset('invitees');this._super('_buildFieldDefinitions',[modelToSave,modelInDb]);}}) },
"create": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Create View (base) 
extendsFrom:'CreateView',initialize:function(options){this.plugins=_.union(this.plugins||[],['AddAsInvitee']);this._super('initialize',[options]);}}) }
}}
,
"layouts": {}
,
"datas": {
"base": {
"model": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Model Data (base) 
plugins:['VirtualCollection']}) }
}}

},
		"Emails":{"fieldTemplates": {
"base": {
"quickcreate": {"controller": /*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
/**
 * @class View.Fields.Base.Emails.QuickcreateField
 * @alias SUGAR.App.view.fields.BaseEmailsQuickcreateField
 * @extends View.Fields.Base.QuickcreateField
 */
({
	// Quickcreate FieldTemplate (base) 

    extendsFrom: 'QuickcreateField',
    plugins: ['EmailClientLaunch'],

    /**
     * Used by EmailClientLaunch as a hook point to retrieve email options that are specific to a view/field
     * In this case we are using it to retrieve the parent model to make this email compose launching
     * context aware - prepopulating the to address with the given model and the parent relate field
     *
     * @returns {Object}
     * @private
     */
    _retrieveEmailOptionsFromLink: function() {
        var context = this.context.parent || this.context,
            parentModel = context.get('model'),
            emailOptions = {};

        if (parentModel && parentModel.id) {
            // set parent model as option to be passed to compose for To address & relate
            // if parentModel does not have email, it will be ignored as a To recipient
            // if parentModel's module is not an available module to relate, it will also be ignored
            emailOptions = {
                to_addresses: [{bean: parentModel}],
                related: parentModel
            };
        }

        return emailOptions;
    }
}) },
"compose-actionbar": {"controller": /*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
/**
 * Actionbar for the email compose view
 *
 * @class View.Fields.Base.Emails.ComposeActionbarField
 * @alias SUGAR.App.view.fields.BaseEmailsComposeActionbarField
 * @extends View.Fields.Base.FieldsetField
 */
({
	// Compose-actionbar FieldTemplate (base) 

    extendsFrom: 'FieldsetField',

    events: {
        'click a:not(.dropdown-toggle)': 'handleButtonClick'
    },

    /**
     * @inheritDoc
     */
    initialize: function(options) {
        this._super('initialize', [options]);
        this.type = 'fieldset';
    },

    /**
     * Fire an event when any of the buttons on the actionbar are clicked
     * Events could be set via the data-event attribute or an event is built using the button name
     *
     * @param evt
     */
    handleButtonClick: function(evt) {
        var triggerName, buttonName,
            $currentTarget = $(evt.currentTarget);
        if ($currentTarget.data('event')) {
            triggerName = $currentTarget.data('event');
        } else {
            buttonName = $currentTarget.attr('name') || 'button';
            triggerName = 'actionbar:' + buttonName + ':clicked';
        }
        this.view.context.trigger(triggerName);
    }
}) },
"attachment-button": {"controller": /*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
/**
 * Attachment button is a label that is styled like a button and will trigger a
 * given file input field.
 *
 * @class View.Fields.Base.Emails.AttachmentButtonField
 * @alias SUGAR.App.view.fields.BaseEmailsAttachmentButtonField
 * @extends View.Fields.Base.ButtonField
 */
({
	// Attachment-button FieldTemplate (base) 

    extendsFrom: 'ButtonField',
    initialize: function(options) {
        this._super('initialize',[options]);
        this.fileInputId = this.context.get('attachment_field_email_attachment');
    }
}) },
"sender": {"controller": /*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
/**
 * @class View.Fields.Base.Emails.SenderField
 * @alias SUGAR.App.view.fields.BaseEmailsSenderField
 * @extends View.Field
 */
({
	// Sender FieldTemplate (base) 

    fieldTag: 'input.select2',

    initialize: function(options) {
        _.bindAll(this);
        app.view.Field.prototype.initialize.call(this, options);
        this.endpoint = this.def.endpoint;
    },

    _render: function() {
        var result = app.view.Field.prototype._render.call(this);

        if (this.tplName === 'edit') {
            var action = (this.endpoint.action) ? this.endpoint.action : null,
                attributes = (this.endpoint.attributes) ? this.endpoint.attributes : null,
                params = (this.endpoint.params) ? this.endpoint.params : null,
                myURL = app.api.buildURL(this.endpoint.module, action, attributes, params);

            app.api.call('GET', myURL, null, {
                success: this.populateValues,
                error: function(error) {
                    // display error if not a metadata refresh
                    if (error.status !== 412) {
                        app.alert.show('server-error', {
                            level: 'error',
                            messages: 'ERR_GENERIC_SERVER_ERROR'
                        });
                    }
                    app.error.handleHttpError(error);
                }
            });
        }

        return result;
    },

    populateValues: function(results) {
        var self = this,
            defaultResult,
            defaultValue = {};

        if (this.disposed === true) {
            return; //if field is already disposed, bail out
        }

        if (!_.isEmpty(results)) {
            defaultResult = _.find(results, function(result) {
                return result.default;
            });

            defaultValue = (defaultResult) ? defaultResult : results[0];

            if (!this.model.has(this.name)) {
                this.model.set(this.name, defaultValue.id);
            }
        }

        var format = function(item) {
            return item.display;
        };

        this.$(this.fieldTag).select2({
            data:{ results: results, text: 'display' },
            formatSelection: format,
            formatResult: format,
            width: '100%',
            placeholder: app.lang.get('LBL_SELECT_FROM_SENDER', this.module),
            initSelection: function(el, callback) {
                if (!_.isEmpty(defaultValue)) {
                      callback(defaultValue);
                }
            }
        }).on("change", function(e) {
            if (self.model.get(self.name) !== e.val) {
                self.model.set(self.name, e.val, {silent: true});
            }
        });

        this.$(".select2-container").addClass("tleft");
    },

    /**
     * {@inheritdoc}
     *
     * We need this empty so it won't affect refresh the select2 plugin
     */
    bindDomChange: function() {
    }
}) },
"recipients": {"controller": /*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
/**
 * @class View.Fields.Base.Emails.RecipientsField
 * @alias SUGAR.App.view.fields.BaseEmailsRecipientsField
 * @extends View.Field
 */
({
	// Recipients FieldTemplate (base) 

    /**
     * {@inheritDoc}
     *
     * This field doesn't support `showNoData`.
     */
    showNoData: false,

    events: {
        "click .btn": "_showAddressBook"
    },

    fieldTag: 'input.select2',

    plugins: ['Tooltip'],

    /**
     * @override
     * @param {Object} options
     */
    initialize: function(options) {
        app.view.Field.prototype.initialize.call(this, options);
        // initialize the value to an empty collection
        this.model.set(this.name, new Backbone.Collection);
    },

    /**
     * Sets up event handlers for syncing between the model and the recipients field.
     *
     * See {@link #format} for the acceptable formats for recipients.
     */
    bindDataChange: function() {
        /**
         * Sets the value of the Select2 element and rebuilds the tooltips for all recipients.
         * @param {Array} recipients the return value for
         *   {@link #format}.
         */
        var updateTheDom = _.bind(function(recipients) {
            // put the formatted recipients in the DOM
            this.getFieldElement().select2('data', recipients);
            // rebuild the tooltips
            this.initializeAllPluginTooltips();
        }, this);
        /**
         * Sets up event handlers that allow external forces to manipulate the contents of the collection, while
         * maintaining the requirement for storing formatted recipients.
         */
        var bindCollectionChange = _.bind(function() {
            var value = this.model.get(this.name);
            if (value instanceof Backbone.Collection) {
                // on "add" we want to force the collection to be reset to guarantee that all models in the collection
                // have been properly formatted for use in this field
                value.on('add', function(models, collection) {
                    // Backbone destroys the models currently in the collection on reset, so we must clone the
                    // collection in order to add the same models again
                    collection.reset(collection.clone().models);
                }, this);
                // on "remove" the requisite models have already been removed, so we only need to bother updating the
                // value in the DOM
                value.on('remove', function(models, collection) {
                    // format the recipients and put them in the DOM
                    updateTheDom(this.format(this.model.get(this.name)));
                }, this);
                // on "reset" we want to replace all models in the collection with their formatted versions
                value.on('reset', function(collection) {
                    var recipients = this.format(collection.models);
                    // do this silently so we don't trigger another reset event and end up in an infinite loop
                    collection.reset(recipients, {silent: true});
                    // put the newly formatted recipients in the DOM
                    updateTheDom(recipients);
                }, this);
            }
        }, this);

        // set up collection event handlers for the initial collection (initialized during this.initialize)
        bindCollectionChange();

        // handle the value on the model being changed to something other than the initial collection
        this.model.on("change:" + this.name, function(model, recipients) {
            var value = this.model.get(this.name);
            if (!(value instanceof Backbone.Collection)) {
                // whoa! someone changed the value to be something other than a collection
                // stick that new value inside a collection and reset the value, so we're always dealing with a
                // collection... another change event will be triggered, so we'll end up in the else block right after
                // this
                this.model.set(this.name, new Backbone.Collection(value));
            } else {
                // phew! the value is a collection
                // but it's not the initial collection, so we'll have to set up collection event handlers for this
                // instance
                bindCollectionChange();
                // you never know what data someone sticks on the field, so we better reset the values in the collection
                // so that the recipients become formatted as we expect
                value.reset(recipients.clone().models);
            }
        }, this);
    },

    /**
     * Remove events from the field value if it is a collection
     */
    unbindData: function() {
        var value = this.model.get(this.name);
        if (value instanceof Backbone.Collection) {
            value.off(null, null, this);
        }

        app.view.Field.prototype.unbindData.call(this);
    },

    /**
     * Render field with select2 widget
     *
     * @private
     */
    _render: function() {
        app.view.Field.prototype._render.call(this);

        var $recipientsField = this.getFieldElement();

        if ($recipientsField.length > 0) {
            $recipientsField.select2({
                allowClear:          true,
                multiple:            true,
                width:               'off',
                containerCssClass:   'select2-choices-pills-close',
                containerCss:        {'width':'100%'},
                minimumInputLength:  1,
                query:               _.bind(function(query) {this.loadOptions(query);}, this),
                createSearchChoice:  _.bind(this.createOption, this),
                formatSelection:     _.bind(this.formatSelection, this),
                formatResult:        _.bind(this.formatResult, this),
                formatSearching:     _.bind(this.formatSearching, this),
                formatInputTooShort: _.bind(this.formatInputTooShort, this),
                selectOnBlur:        true
            }).on('select2-removed', _.bind(function() {
                    this.initializeAllPluginTooltips();
                }, this));

            if (!!this.def.disabled) {
                $recipientsField.select2('disable');
            }
        }
    },

    /**
     * Fetches additional recipients from the server.
     *
     * See [Select2 Documentation of `query` parameter](http://ivaynberg.github.io/select2/#doc-query).
     *
     * @param {Object} query Possible attributes can be found in select2's
     *   documentation.
     */
    loadOptions: _.debounce(function(query) {
        var self = this,
            data = {
                results: [],
                // only show one page of results
                // if more results are needed, then the address book should be used
                more: false
            },
            options = {},
            callbacks = {},
            url;

        // add the search term to the URL params
        options.q = query.term;
        // the first 10 results should be enough
        // if more results are needed, then the address book should be used
        options.max_num = 10;
        // build the URL for fetching recipients that match the search term
        url = app.api.buildURL('Mail', 'recipients/find', null, options);
        // create the callbacks
        callbacks.success = function(result) {
            // the api returns objects formatted such that sidecar can convert them to beans
            // we need the records to be in a standard object format (@see RecipientsField::format) and the records
            // need to be converted into beans before we can format them
            var records = app.data.createMixedBeanCollection(result.records);
            // format and add the recipients that were found via the select2 callback
            data.results = self.format(records);
        };
        callbacks.error = function() {
            // don't add any recipients via the select2 callback
            data.results = [];
        };
        callbacks.complete = function() {
            // execute the select2 callback to add any new recipients
            query.callback(data);
        };
        app.api.call('read', url, null, callbacks);
    }, 300),

    /**
     * Create additional select2 options when loadOptions returns no matches for the search term.
     *
     * See [Select2 Documentation](http://ivaynberg.github.io/select2/#documentation).
     *
     * @param {String} term
     * @param {Array} data The options in the select2 drop-down after the query callback has been executed.
     * @returns {Object}
     */
    createOption: function(term, data) {
        if (data.length === 0) {
            return {id: term, email: term};
        }
    },

    /**
     * Formats a recipient object for displaying selected recipients.
     *
     * See [Select2 Documentation](http://ivaynberg.github.io/select2/#documentation).
     *
     * @param {Object} recipient
     * @return {String}
     */
    formatSelection: function(recipient) {
        var value = recipient.name || recipient.email,
            template = app.template.getField(this.type, 'select2-selection', this.module);
        if (template) {
            return template({
                name: value,
                email: recipient.email
            });
        }
        return value;
    },

    /**
     * Formats a recipient object for displaying items in the recipient options list.
     *
     * See [Select2 Documentation](http://ivaynberg.github.io/select2/#documentation).
     *
     * @param {Object} recipient
     * @return {String}
     */
    formatResult: function(recipient) {
        var format;

        if (recipient.name) {
            format = '"' + recipient.name + '" &lt;' + recipient.email + '&gt;';
        } else {
            format = recipient.email;
        }

        return format;
    },

    /**
     * Returns the localized message indicating that a search is in progress
     *
     * See [Select2 Documentation](http://ivaynberg.github.io/select2/#documentation).
     *
     * @returns {String}
     */
    formatSearching: function() {
        return app.lang.get("LBL_LOADING", this.module);
    },

    /**
     * Suppresses the message indicating the number of characters remaining before a search will trigger
     *
     * See [Select2 Documentation](http://ivaynberg.github.io/select2/#documentation).
     *
     * @param term
     * @param min
     * @returns {String}
     */
    formatInputTooShort: function(term, min) {
        return "";
    },

    /**
     * Formats a set of recipients into an array of objects that select2 understands.
     *
     * See {@link #_formatRecipient} for the acceptable/expected attributes to
     * be found on each recipient.
     *
     * @param {*} data A Backbone collection, a single Backbone model or standard JavaScript object, or an array of
     *                 Backbone models or standard JavaScript objects.
     * @returns {Array}
     */
    format: function(data) {
        var formattedRecipients = [];
        // the lowest common denominator of potential inputs is an array of objects
        // force the parameter to be an array of either objects or Backbone models so that we're always dealing with
        // one data-structure type
        if (data instanceof Backbone.Collection) {
            // get the raw array of models
            data = data.models;
        } else if (data instanceof Backbone.Model || (_.isObject(data) && !_.isArray(data))) {
            // wrap the single model in an array so the code below behaves the same whether it's a model or a collection
            data = [data];
        }
        if (_.isArray(data)) {
            _.each(data, function(recipient) {
                var formattedRecipient;
                if (!(recipient instanceof Backbone.Model)) {
                    // force the object to be a Backbone.Model to allow for certain assumptions to be made
                    // there is no harm in this because the recipient will not be added to the return value if no email
                    // address is found on the model
                    recipient = new Backbone.Model(recipient);
                }
                formattedRecipient = this._formatRecipient(recipient);
                // only add the recipient if there is an email address
                if (!_.isEmpty(formattedRecipient.email)) {
                    formattedRecipients.push(formattedRecipient);
                }
            }, this);
        }
        return formattedRecipients;
    },

    /**
     * Determine whether or not the recipient pills should be locked.
     * @returns {boolean}
     */
    recipientsLocked: function() {
        return this.def.readonly || false;
    },

    /**
     * Synchronize the recipient field value with the model and setup tooltips for email pills.
     */
    bindDomChange: function() {
        var self = this;
        this.getFieldElement()
            .on("change", function(event) {
                var value = $(this).select2('data');
                if (event.removed) {
                    value = _.filter(value, function(d) {
                        return d.id !== event.removed.id;
                    });
                }
                self.model.get(self.name).reset(value);
            })
            .on("select2-selecting", _.bind(this._handleEventOnSelected, this));
    },

    /**
     * Event handler for the Select2 "select2-selecting" event.
     *
     * @param event
     * @returns {boolean}
     * @private
     */
    _handleEventOnSelected: function (event) {
        // only allow the user to select an option if it is determined to be a valid email address
        // returning true will select the option; false will prevent the option from being selected
        var isValidChoice = false;

        // since this event is fired twice, we only want to perform validation on the first event
        // event.object is not available on the second event
        if (event.object) {
            // the id and email address will not match when the email address came from the database and
            // we are assuming that email addresses stored in the database have already been validated
            if (event.object.id == event.object.email) {
                // this option must be a new email address that the application does not recognize
                // so validate it
                isValidChoice = this._validateEmailAddress(event.object.email);
            } else {
                // the application should recognize the email address, so no need to validate it again
                // just assume it's a valid choice and we'll deal with the consequences later (server-side)
                isValidChoice = true;
            }
        }

        return isValidChoice;
    },

    /**
     * Destroy all select2 and tooltip plugins
     */
    unbindDom: function() {
        this.getFieldElement().select2('destroy');
        app.view.Field.prototype.unbindDom.call(this);
    },

    /**
     * When in edit mode, the field includes an icon button for opening an address book. Clicking the button will
     * trigger an event to open the address book, which calls this method to do the dirty work. The selected recipients
     * are added to this field upon closing the address book.
     *
     * @private
     */
    _showAddressBook: function() {
        /**
         * Callback to add recipients, from a closing drawer, to the target Recipients field.
         * @param {undefined|Backbone.Collection} recipients
         */
        var addRecipients = _.bind(function(recipients) {
            if (recipients && recipients.length > 0) {
                this.model.get(this.name).add(recipients.models);
            }
        }, this);
        app.drawer.open(
            {
                layout:  "compose-addressbook",
                context: {
                    module: "Emails",
                    mixed:  true
                }
            },
            function(recipients) {
                addRecipients(recipients);
            }
        );
    },

    /**
     * update ul.select2-choices data attribute which prevents underrun of pills by
     * using a css definition for :before {content:''} set to float right
     *
     * @param content {String}
     */
    setContentBefore: function(content) {
        this.$('.select2-choices').attr('data-content-before', content);
    },

    /**
     * Gets the recipients DOM field
     *
     * @returns {Object} DOM Element
     */
    getFieldElement: function() {
        return this.$(this.fieldTag);
    },

    /**
     * Format a recipient from a Backbone.Model to a standard JavaScript object with id, module, email, and name
     * attributes. Only id and email are required for the recipient to be considered valid
     * {@link #format}.
     *
     * All attributes are optional. However, if the email attribute is not present, then a primary email address should
     * exist on the bean. Without an email address that can be resolved, the recipient is considered to be invalid. The
     * bean attribute must be a Backbone.Model and it is likely to be a Bean. Data found in the bean is considered to be
     * secondary to the attributes found on its parent model. The bean is a mechanism for collecting additional
     * information about the recipient that may not have been explicitly set when the recipient was passed in.
     * @param {Backbone.Model} recipient
     * @returns {Object}
     * @private
     */
    _formatRecipient: function(recipient) {
        var formattedRecipient = {};
        if (recipient instanceof Backbone.Model) {
            var bean = recipient.get('bean');
            // if there is a bean attribute, then more data can be extracted about the recipient to fill in any holes if
            // attributes are missing amongst the primary attributes
            // so follow the trail using recursion
            if (bean) {
                formattedRecipient = this._formatRecipient(bean);
            }
            // prioritize any values found on recipient over those already extracted from bean
            formattedRecipient = {
                id:     recipient.get('id') || formattedRecipient.id || recipient.get('email'),
                module: recipient.get('module') || recipient.module || recipient.get('_module') || formattedRecipient.module,
                email:  recipient.get('email') || formattedRecipient.email,
                locked: this.recipientsLocked(),
                name:   recipient.get('name') || recipient.get('full_name') || formattedRecipient.name
            };
            // don't bother with the recipient unless an id is present
            if (!_.isEmpty(formattedRecipient.id)) {
                // extract the primary email address for the recipient
                if (_.isArray(formattedRecipient.email)) {
                    var primaryEmailAddress = _.findWhere(formattedRecipient.email, {primary_address: true});

                    if (!_.isUndefined(primaryEmailAddress) && !_.isEmpty(primaryEmailAddress.email_address)) {
                        formattedRecipient.email = primaryEmailAddress.email_address;
                    }
                }
                // drop any values that are empty or non-compliant
                _.each(formattedRecipient, function(val, key) {
                    if ((_.isEmpty(formattedRecipient[key]) || !_.isString(formattedRecipient[key])) && !_.isBoolean(formattedRecipient[key])) {
                        delete formattedRecipient[key];
                    }
                });
            } else {
                // drop all values if an id isn't present
                formattedRecipient = {};
            }
        }
        return formattedRecipient;
    },

    /**
     * Validates an email address on the server.
     *
     * @param {String} emailAddress
     * @returns {boolean}
     * @private
     */
    _validateEmailAddress: function(emailAddress) {
        var isValid   = false,
            callbacks = {},
            options   = {
                // execute the api call synchronously so that the method doesn't return before the response is known
                async: false
            },
            url       = app.api.buildURL("Mail", "address/validate");

        callbacks.success = function(result) {
            isValid = result[emailAddress];
        };
        callbacks.error = function() {
            isValid = false;
        };
        app.api.call("create", url, [emailAddress], callbacks, options);

        return isValid;
    }
}) },
"emailaction-paneltop": {"controller": /*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
/**
 * @class View.Fields.Base.Emails.EmailactionPaneltopField
 * @alias SUGAR.App.view.fields.BaseEmailsEmailactionPaneltopField
 * @extends View.Fields.Base.EmailactionField
 */
({
	// Emailaction-paneltop FieldTemplate (base) 

    extendsFrom: 'EmailactionField',
    plugins: ['EmailClientLaunch'],

    /**
     * {@inheritDoc}
     * Set type to emailaction to get the template
     */
    initialize: function(options) {
        this._super("initialize", [options]);
        this.type = 'emailaction';
        this.on('emailclient:close', this.handleEmailClientClose, this);
    },

    /**
     * When email compose is done, refresh the data in the Emails subpanel
     */
    handleEmailClientClose: function() {
        var context = this.context.parent || this.context;
        context.trigger('panel-top:refresh', 'emails');
        context.trigger('panel-top:refresh', 'archived_emails');
    },

    /**
     * No additional options are needed from the element in order to launch the
     * email client.
     *
     * @param {jQuery} [$link] The element from which to get options.
     * @return {Object}
     * @private
     */
    _retrieveEmailOptionsFromLink: function($link) {
        return {};
    }
}) }
}}
,
"views": {
"base": {
"compose-addressbook-headerpane": {"controller": /*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
/**
 * @class View.Views.Base.Emails.ComposeAddressbookHeaderpaneView
 * @alias SUGAR.App.view.views.BaseEmailsComposeAddressbookHeaderpaneView
 * @extends View.Views.Base.HeaderpaneView
 */
({
	// Compose-addressbook-headerpane View (base) 

    extendsFrom: "HeaderpaneView",

    events: {
        "click [name=done_button]":   "_done",
        "click [name=cancel_button]": "_cancel"
    },

     /**
      * The user clicked the Done button so trigger an event to add selected recipients from the address book to the
      * target field and then close the drawer.
      *
      * @private
      */
     _done: function() {
         var recipients = this.model.get("compose_addressbook_selected_recipients");

         if (recipients) {
             app.drawer.close(recipients);
         } else {
             this._cancel();
         }
     },

    /**
     * Close the drawer.
     *
     * @private
     */
    _cancel: function() {
        app.drawer.close();
    }
}) },
"compose-addressbook-recipientscontainer": {"controller": /*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
/**
 * @class View.Views.Base.Emails.ComposeAddressbookRecipientscontainerView
 * @alias SUGAR.App.view.views.BaseEmailsComposeAddressbookRecipientscontainerView
 * @extends View.Views.Base.RecordView
 */
({
	// Compose-addressbook-recipientscontainer View (base) 

    extendsFrom:         "RecordView",
    enableHeaderButtons: false,
    enableHeaderPane:    false,
    events:              {},

    initialize: function(options) {
        this._super("initialize", [options]);
        this.model.isNotEmpty = true;
    },

    /**
     * Override to remove unwanted functionality.
     *
     * @param prefill
     */
    setupDuplicateFields: function(prefill) {},

    /**
     * Override to remove unwanted functionality.
     */
    delegateButtonEvents: function() {},

    /**
     * Override to remove unwanted functionality.
     */
    initButtons: function() {
        this.buttons = {};
    },

    /**
     * Override to remove unwanted functionality.
     */
    showPreviousNextBtnGroup: function() {},

    /**
     * Override to remove unwanted functionality.
     */
    bindDataChange: function() {},

    /**
     * Override to remove unwanted functionality.
     *
     * @param isEdit
     */
    toggleHeaderLabels: function(isEdit) {},

    /**
     * Override to remove unwanted functionality.
     *
     * @param field
     */
    toggleLabelByField: function (field) {},

    /**
     * Override to remove unwanted functionality.
     *
     * @param e
     * @param field
     */
    handleKeyDown: function(e, field) {},

    /**
     * Override to remove unwanted functionality.
     *
     * @param state
     */
    setButtonStates: function(state) {},

    /**
     * Override to remove unwanted functionality.
     *
     * @param title
     */
    setTitle: function(title) {}
}) },
"compose-addressbook-list-bottom": {"controller": /*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
/**
 * @class View.Views.Base.Emails.ComposeAddressbookListBottomView
 * @alias SUGAR.App.view.views.BaseEmailsComposeAddressbookListBottomView
 * @extends View.Views.Base.ListBottomView
 */
({
	// Compose-addressbook-list-bottom View (base) 

    extendsFrom: "ListBottomView",

    /**
     * Assign proper label for 'show more' link.
     * Label should be "More recipients...".
     */
    setShowMoreLabel: function() {
        this.showMoreLabel = app.lang.get('LBL_SHOW_MORE_RECIPIENTS', this.module);
    }
}) },
"archive-email": {"controller": /*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
/**
 * @class View.Views.Base.Emails.ArchiveEmailView
 * @alias SUGAR.App.view.views.BaseEmailsArchiveEmailView
 * @extends View.Views.Base.Emails.ComposeView
 */
({
	// Archive-email View (base) 

    extendsFrom: 'EmailsComposeView',

    /**
     * Add click event handler to archive an email.
     * @param options
     */
    initialize: function(options) {
        this.events = _.extend({}, this.events, {
            'click [name=archive_button]': 'archive'
        });
        this._super('initialize', [options]);

        if (!this.model.has('assigned_user_id')) {
            this.model.set('assigned_user_id', app.user.id);
            this.model.set('assigned_user_name', app.user.get('full_name'));
        }
    },

    /**
     * Set headerpane title.
     * @private
     */
    _render: function () {
        this._super('_render');
        this.setTitle(app.lang.get('LBL_ARCHIVE_EMAIL', this.module));
    },

    /**
     * Archive email if validation passes.
     */
    archive: function(event) {
        this.setMainButtonsDisabled(true);
        this.model.doValidate(this.getFieldsToValidate(), _.bind(function(isValid) {
            if (isValid) {
                this.archiveEmail();
            } else {
                this.setMainButtonsDisabled(false);
            }
        }, this));
    },

    /**
     * Get fields that needs to be validated.
     * @returns {object}
     */
    getFieldsToValidate: function() {
        var fields = {};
        _.each(this.fields, function(field) {
            fields[field.name] = field.def;
        });
        return fields;
    },

    /**
     * Call archive api.
     */
    archiveEmail: function() {
        var archiveUrl = app.api.buildURL('Mail/archive'),
            alertKey = 'mail_archive',
            archiveEmailModel = this.initializeSendEmailModel();

        app.alert.show(alertKey, {level: 'process', title: app.lang.get('LBL_EMAIL_ARCHIVING', this.module)});

        app.api.call('create', archiveUrl, archiveEmailModel, {
            success: _.bind(function() {
                app.alert.dismiss(alertKey);
                app.alert.show(alertKey, {
                    autoClose: true,
                    level: 'success',
                    messages: app.lang.get('LBL_EMAIL_ARCHIVED', this.module)
                });
                app.drawer.close(this.model);
            }, this),
            error: function(error) {
                var msg = {level: 'error'};
                if (error && _.isString(error.message)) {
                    msg.messages = error.message;
                }
                app.alert.dismiss(alertKey);
                app.alert.show(alertKey, msg);
            },
            complete:_.bind(function() {
                if (!this.disposed) {
                    this.setMainButtonsDisabled(false);
                }
            }, this)
        });
    },

    /**
     * Get model that will be used to archive the email.
     * @returns {Backbone.Model}
     */
    initializeSendEmailModel: function() {
        var model = this._super('initializeSendEmailModel');
        model.set({
            'date_sent': this.model.get('date_sent'),
            'from_address': this.model.get('from_address'),
            'status': 'archive'
        });
        return model;
    },

    /**
     * Disable/enable archive button.
     * @param disabled
     */
    setMainButtonsDisabled: function(disabled) {
        this.getField('archive_button').setDisabled(disabled);
    },

    /**
     * No need to warn of configuration status for archive email because no
     * email is being sent.
     */
    notifyConfigurationStatus: $.noop
}) },
"compose": {"controller": /*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
/**
 * @class View.Views.Base.Emails.ComposeView
 * @alias SUGAR.App.view.views.BaseEmailsComposeView
 * @extends View.Views.Base.RecordView
 */
({
	// Compose View (base) 

    extendsFrom: 'RecordView',

    _lastSelectedSignature: null,
    ATTACH_TYPE_SUGAR_DOCUMENT: 'document',
    ATTACH_TYPE_TEMPLATE: 'template',
    MIN_EDITOR_HEIGHT: 300,
    EDITOR_RESIZE_PADDING: 5,
    FIELD_PANEL_BODY_SELECTOR: '.row-fluid.panel_body',

    sendButtonName: 'send_button',
    cancelButtonName: 'cancel_button',
    saveAsDraftButtonName: 'draft_button',

    /**
     * @inheritdoc
     */
    initialize: function(options) {
        _.bindAll(this);
        this._super('initialize', [options]);
        this.events = _.extend({}, this.events, {
            'click [data-toggle-field]': '_handleSenderOptionClick'
        });
        this.context.on('actionbar:template_button:clicked', this.launchTemplateDrawer, this);
        this.context.on('actionbar:attach_sugardoc_button:clicked', this.launchDocumentDrawer, this);
        this.context.on('actionbar:signature_button:clicked', this.launchSignatureDrawer, this);
        this.context.on('attachments:updated', this.toggleAttachmentVisibility, this);
        this.context.on('tinymce:oninit', this.handleTinyMceInit, this);
        this.on('more-less:toggled', this.handleMoreLessToggled, this);
        app.drawer.on('drawer:resize', this.resizeEditor, this);

        this._lastSelectedSignature = app.user.getPreference('signature_default');
    },

    /**
     * @inheritdoc
     */
    delegateButtonEvents: function() {
        this.context.on('button:' + this.sendButtonName + ':click', this.send, this);
        this.context.on('button:' + this.saveAsDraftButtonName + ':click', this.saveAsDraft, this);
        this.context.on('button:' + this.cancelButtonName + ':click', this.cancel, this);
    },

    /**
     * @inheritdoc
     */
    _render: function() {
        this._super('_render');
        if (this.createMode) {
            this.setTitle(app.lang.get('LBL_COMPOSEEMAIL', this.module));
        }

        if (this.model.isNotEmpty) {
            var prepopulateValues = this.context.get('prepopulate');
            if (!_.isEmpty(prepopulateValues)) {
                this.prepopulate(prepopulateValues);
            }
            this.addSenderOptions();

            if (this.model.isNew()) {
                this._updateEditorWithSignature(this._lastSelectedSignature);
            }
        }

        this.notifyConfigurationStatus();
    },

    /**
     * Notifies the user of configuration issues and disables send button
     */
    notifyConfigurationStatus: function() {
        var sendButton,
            emailClientPrefence = app.user.getPreference('email_client_preference');

        if (_.isObject(emailClientPrefence) && _.isObject(emailClientPrefence.error)) {
            app.alert.show('email-client-status', {
                level: 'warning',
                messages: app.lang.get(emailClientPrefence.error.message, this.module),
                autoClose: false,
                onLinkClick: function() {
                    app.alert.dismiss('email-client-status');
                }
            });

            sendButton = this.getField('send_button');
            if (sendButton) {
                sendButton.setDisabled(true);
            }
        }
    },

    /**
     * Prepopulate fields on the email compose screen that are passed in on the context when opening this view
     * TODO: Refactor once we have custom module specific models
     * @param {Object} values
     */
    prepopulate: function(values) {
        var self = this;
        _.defer(function() {
            _.each(values, function(value, fieldName) {
                switch (fieldName) {
                    case 'related':
                        self._populateForModules(value);
                        self.populateRelated(value);
                        break;
                    default:
                        self.model.set(fieldName, value);
                }
            });
        });
    },

    /**
     * Populates email compose with module specific data.
     * TODO: Refactor once we have custom module specific models
     * @param {Data.Bean} relatedModel
     */
    _populateForModules: function(relatedModel) {
        if (relatedModel.module === 'Cases') {
            this._populateForCases(relatedModel);
        }
    },


    /**
     * Populates email compose with cases specific data.
     * TODO: Refactor once we have custom module specific models
     * @param {Data.Bean} relatedModel
     */
    _populateForCases: function(relatedModel) {
        var config = app.metadata.getConfig(),
            keyMacro = '%1',
            caseMacro = config.inboundEmailCaseSubjectMacro,
            subject = caseMacro + ' ' + relatedModel.get('name');

        subject = subject.replace(keyMacro, relatedModel.get('case_number'));
        this.model.set('subject', subject);
        if (!this.isFieldPopulated('to_addresses')) {
            // no addresses, attempt to populate from contacts relationship
            var contacts = relatedModel.getRelatedCollection('contacts');

            contacts.fetch({
                relate: true,
                success: _.bind(function(data) {
                    var toAddresses = _.map(data.models, function(model) {
                        return {bean: model};
                    }, this);

                    this.model.set('to_addresses', toAddresses);
                }, this),
                fields: ['id', 'full_name', 'email']
            });
        }
    },

    /**
     * Populate the parent_name (type: parent) with the related record passed in
     *
     * @param {Data.Bean} relatedModel
     */
    populateRelated: function(relatedModel) {
        var setParent = _.bind(function(model) {
            var parentNameField = this.getField('parent_name');
            if (model.module && parentNameField.isAvailableParentType(model.module)) {
                model.value = model.get('name');
                parentNameField.setValue(model);
            }
        }, this);

        if (!_.isEmpty(relatedModel.get('id')) && !_.isEmpty(relatedModel.get('name'))) {
            setParent(relatedModel);
        } else if (!_.isEmpty(relatedModel.get('id'))) {
            relatedModel.fetch({
                showAlerts: false,
                success: function(relatedModel) {
                    setParent(relatedModel);
                },
                fields: ['name']
            });
        }
    },

    /**
     * Enable/disable the page action dropdown menu based on whether email is sendable
     * @param {boolean} disabled
     */
    setMainButtonsDisabled: function(disabled) {
        this.getField('main_dropdown').setDisabled(disabled);
    },

    /**
     * Add Cc/Bcc toggle buttons
     * Initialize whether to show/hide fields and toggle show/hide buttons appropriately
     */
    addSenderOptions: function() {
        this._renderSenderOptions('to_addresses');
        this._initSenderOption('cc_addresses');
        this._initSenderOption('bcc_addresses');
    },

    /**
     * Render the sender option buttons and place them in the given container
     *
     * @param {string} container Name of field that will contain the sender option buttons
     * @private
     */
    _renderSenderOptions: function(container) {
        var field = this.getField(container),
            $panelBody,
            senderOptionTemplate;

        if (field) {
            $panelBody = field.$el.closest(this.FIELD_PANEL_BODY_SELECTOR);
            senderOptionTemplate = app.template.getView('compose-senderoptions', this.module);

            $(senderOptionTemplate({'module' : this.module}))
                .insertAfter($panelBody.find('div span.normal'));
        }
    },

    /**
     * Check if the given field has a value
     * Hide the field if there is no value prepopulated
     *
     * @param {string} fieldName Name of the field to initialize active state on
     * @private
     */
    _initSenderOption: function(fieldName) {
        var fieldValue = this.model.get(fieldName) || [];
        this.toggleSenderOption(fieldName, (fieldValue.length > 0));
    },

    /**
     * Toggle the state of the given field
     * Sets toggle button state and visibility of the field
     *
     * @param {string} fieldName Name of the field to toggle
     * @param {boolean} [active] Whether toggle button active and field shown
     */
    toggleSenderOption: function(fieldName, active) {
        var toggleButtonSelector = '[data-toggle-field="' + fieldName + '"]',
            $toggleButton = this.$(toggleButtonSelector);

        // if explicit active state not set, toggle to opposite
        if (_.isUndefined(active)) {
            active = !$toggleButton.hasClass('active');
        }

        $toggleButton.toggleClass('active', active);
        this._toggleFieldVisibility(fieldName, active);
    },

    /**
     * Event Handler for toggling the Cc/Bcc options on the page.
     *
     * @param {Event} event click event
     * @private
     */
    _handleSenderOptionClick: function(event) {
        var $toggleButton = $(event.currentTarget),
            fieldName = $toggleButton.data('toggle-field');

        this.toggleSenderOption(fieldName);
        this.resizeEditor();
    },

    /**
     * Show/hide a field section on the form
     *
     * @param {string} fieldName Name of the field to show/hide
     * @param {boolean} show Whether to show or hide the field
     * @private
     */
    _toggleFieldVisibility: function(fieldName, show) {
        var field = this.getField(fieldName);
        if (field) {
            field.$el.closest(this.FIELD_PANEL_BODY_SELECTOR).toggleClass('hide', !show);
        }
    },

    /**
     * Cancel and close the drawer
     */
    cancel: function() {
        app.drawer.close();
    },

    /**
     * Get the attachments from the model and format for the API
     *
     * @return {Array} array of attachments or empty array if none found
     */
    getAttachmentsForApi: function() {
        var attachments = this.model.get('attachments') || [];

        if (!_.isArray(attachments)) {
            attachments = [attachments];
        }

        return attachments;
    },

    /**
     * Get the individual related object fields from the model and format for the API
     *
     * @return {Object} API related argument as array with appropriate fields set
     */
    getRelatedForApi: function() {
        var related = {};
        var id = this.model.get('parent_id');
        var type;

        if (!_.isUndefined(id)) {
            id = id.toString();
            if (id.length > 0) {
                related['id'] = id;
                type = this.model.get('parent_type');
                if (!_.isUndefined(type)) {
                    type = type.toString();
                }
                related.type = type;
            }
        }

        return related;
    },

    /**
     * Get the team information from the model and format for the API
     *
     * @return {Object} API teams argument as array with appropriate fields set
     */
    getTeamsForApi: function() {
        var teamName = this.model.get('team_name') || [];
        var teams = {};
        teams.others = [];

        if (!_.isArray(teamName)) {
            teamName = [teamName];
        }

        _.each(teamName, function(team) {
            if (team.primary) {
                teams.primary = team.id.toString();
            } else if (!_.isUndefined(team.id)) {
                teams.others.push(team.id.toString());
            }
        }, this);

        if (teams.others.length == 0) {
            delete teams.others;
        }

        return teams;
    },

    /**
     * Build a backbone model that will be sent to the Mail API
     */
    initializeSendEmailModel: function() {
        var sendModel = new Backbone.Model(_.extend({}, this.model.attributes, {
            to_addresses: this.model.get('to_addresses'),
            cc_addresses: this.model.get('cc_addresses'),
            bcc_addresses: this.model.get('bcc_addresses'),
            attachments: this.getAttachmentsForApi(),
            related: this.getRelatedForApi(),
            teams: this.getTeamsForApi()
        }));
        return sendModel;
    },

    /**
     * Save the email as a draft for later sending
     */
    saveAsDraft: function() {
        this.saveModel(
            'draft',
            app.lang.get('LBL_DRAFT_SAVING', this.module),
            app.lang.get('LBL_DRAFT_SAVED', this.module),
            app.lang.get('LBL_ERROR_SAVING_DRAFT', this.module)
        );
    },

    /**
     * Send the email immediately or warn if user did not provide subject or body
     */
    send: function() {
        var sendEmail = _.bind(function() {
            this.saveModel(
                'ready',
                app.lang.get('LBL_EMAIL_SENDING', this.module),
                app.lang.get('LBL_EMAIL_SENT', this.module),
                app.lang.get('LBL_ERROR_SENDING_EMAIL', this.module)
            );
        }, this);

        if (!this.isFieldPopulated('to_addresses') &&
            !this.isFieldPopulated('cc_addresses') &&
            !this.isFieldPopulated('bcc_addresses')
        ) {
            this.model.trigger('error:validation:to_addresses');
            app.alert.show('send_error', {
                level: 'error',
                messages: 'LBL_EMAIL_COMPOSE_ERR_NO_RECIPIENTS'
            });
        } else if (!this.isFieldPopulated('subject') && !this.isFieldPopulated('html_body')) {
            app.alert.show('send_confirmation', {
                level: 'confirmation',
                messages: app.lang.get('LBL_NO_SUBJECT_NO_BODY_SEND_ANYWAYS', this.module),
                onConfirm: sendEmail
            });
        } else if (!this.isFieldPopulated('subject')) {
            app.alert.show('send_confirmation', {
                level: 'confirmation',
                messages: app.lang.get('LBL_SEND_ANYWAYS', this.module),
                onConfirm: sendEmail
            });
        } else if (!this.isFieldPopulated('html_body')) {
            app.alert.show('send_confirmation', {
                level: 'confirmation',
                messages: app.lang.get('LBL_NO_BODY_SEND_ANYWAYS', this.module),
                onConfirm: sendEmail
            });
        } else {
            sendEmail();
        }
    },

    /**
     * Build the backbone model to be sent to the Mail API with the appropriate status
     * Also display the appropriate alerts to give user indication of what is happening.
     *
     * @param {string} status (draft or ready)
     * @param {string} pendingMessage message to display while Mail API is being called
     * @param {string} successMessage message to display when a successful Mail API response has been received
     * @param {string} errorMessage message to display when Mail API call fails
     */
    saveModel: function(status, pendingMessage, successMessage, errorMessage) {
        var myURL,
            sendModel = this.initializeSendEmailModel();

        this.setMainButtonsDisabled(true);
        app.alert.show('mail_call_status', {level: 'process', title: pendingMessage});

        sendModel.set('status', status);
        myURL = app.api.buildURL('Mail');
        app.api.call('create', myURL, sendModel, {
            success: function() {
                app.alert.dismiss('mail_call_status');
                app.alert.show('mail_call_status', {autoClose: true, level: 'success', messages: successMessage});
                app.drawer.close(sendModel);
            },
            error: function(error) {
                var msg = {level: 'error'};
                if (error && _.isString(error.message)) {
                    msg.messages = error.message;
                }
                app.alert.dismiss('mail_call_status');
                app.alert.show('mail_call_status', msg);
            },
            complete: _.bind(function() {
                if (!this.disposed) {
                    this.setMainButtonsDisabled(false);
                }
            }, this)
        });
    },

    /**
     * Is this field populated?
     * @param {string} fieldName
     * @return {boolean}
     */
    isFieldPopulated: function(fieldName) {
        var value = this.model.get(fieldName);

        if (value instanceof Backbone.Collection) {
            return value.length !== 0;
        } else {
            return !_.isEmpty($.trim(value));
        }
    },

    /**
     * Open the drawer with the EmailTemplates selection list layout. The callback should take the data passed to it
     * and replace the existing editor contents with the selected template.
     */
    launchTemplateDrawer: function() {
        app.drawer.open({
                layout: 'selection-list',
                context: {
                    module: 'EmailTemplates'
                }
            },
            this.templateDrawerCallback
        );
    },

    /**
     * Receives the selected template to insert and begins the process of confirming the operation and inserting the
     * template into the editor.
     *
     * @param {Data.Bean} model
     */
    templateDrawerCallback: function(model) {
        if (model) {
            var emailTemplate = app.data.createBean('EmailTemplates', { id: model.id });
            emailTemplate.fetch({
                success: this.confirmTemplate,
                error: _.bind(function(error) {
                    this._showServerError(error);
                }, this)
            });
        }
    },

    /**
     * Presents the user with a confirmation prompt indicating that inserting the template will replace all content
     * in the editor. If the user confirms "yes" then the template will inserted.
     *
     * @param {Data.Bean} template
     */
    confirmTemplate: function(template) {
        if (this.disposed === true) return; //if view is already disposed, bail out
        app.alert.show('delete_confirmation', {
            level: 'confirmation',
            messages: app.lang.get('LBL_EMAILTEMPLATE_MESSAGE_SHOW_MSG', this.module),
            onConfirm: _.bind(function() {
                this.insertTemplate(template);
            }, this)
        });
    },

    /**
     * Inserts the template into the editor.
     *
     * @param {Data.Bean} template
     */
    insertTemplate: function(template) {
        var subject,
            notes;

        if (_.isObject(template)) {
            subject = template.get('subject');

            if (subject) {
                this.model.set('subject', subject);
            }

            //TODO: May need to move over replaces special characters.
            if (template.get('text_only') === 1) {
                this.model.set('html_body', template.get('body'));
            } else {
                this.model.set('html_body', template.get('body_html'));
            }

            notes = app.data.createBeanCollection('Notes');

            notes.fetch({
                'filter': {
                    'filter': [
                        {'parent_id': {'$equals': template.id}}
                    ]
                },
                success: _.bind(function(data) {
                    if (this.disposed === true) return; //if view is already disposed, bail out
                    if (!_.isEmpty(data.models)) {
                        this.insertTemplateAttachments(data.models);
                    }
                }, this),
                error: _.bind(function(error) {
                    this._showServerError(error);
                }, this)
            });

            // currently adds the html signature even when the template is text-only
            this._updateEditorWithSignature(this._lastSelectedSignature);
        }
    },

    /**
     * Inserts attachments associated with the template by triggering an "add" event for each attachment to add to the
     * attachments field.
     *
     * @param {Array} attachments
     */
    insertTemplateAttachments: function(attachments) {
        this.context.trigger('attachments:remove-by-tag', 'template');
        _.each(attachments, function(attachment) {
            var filename = attachment.get('filename');
            this.context.trigger('attachment:add', {
                id: attachment.id,
                name: filename,
                nameForDisplay: filename,
                tag: 'template',
                type: this.ATTACH_TYPE_TEMPLATE
            });
        }, this);
    },

    /**
     * Open the drawer with the SugarDocuments attachment selection list layout. The callback should take the data
     * passed to it and add the document as an attachment.
     */
    launchDocumentDrawer: function() {
        app.drawer.open({
                layout: 'selection-list',
                context: {module: 'Documents'}
            },
            this.documentDrawerCallback);
    },

    /**
     * Fetches the selected SugarDocument using its ID and triggers an "add" event to add the attachment to the
     * attachments field.
     *
     * @param {Data.Bean} model
     */
    documentDrawerCallback: function(model) {
        if (model) {
            var sugarDocument = app.data.createBean('Documents', { id: model.id });
            sugarDocument.fetch({
                success: _.bind(function(model) {
                    if (this.disposed === true) return; //if view is already disposed, bail out
                    this.context.trigger('attachment:add', {
                        id: model.id,
                        name: model.get('filename'),
                        nameForDisplay: model.get('filename'),
                        type: this.ATTACH_TYPE_SUGAR_DOCUMENT
                    });
                }, this),
                error: _.bind(function(error) {
                    this._showServerError(error);
                }, this)
            });
        }
    },

    /**
     * Hide attachment field row if no attachments, show when added
     *
     * @param {Array} attachments
     */
    toggleAttachmentVisibility: function(attachments) {
        var $row = this.$('.attachments').closest('.row-fluid');
        if (attachments.length > 0) {
            $row.removeClass('hidden');
            $row.addClass('single');
        } else {
            $row.addClass('hidden');
            $row.removeClass('single');
        }
        this.resizeEditor();
    },

    /**
     * Open the drawer with the signature selection layout. The callback should take the data passed to it and insert
     * the signature in the correct place.
     *
     * @private
     */
    launchSignatureDrawer: function() {
        app.drawer.open(
            {
                layout: 'selection-list',
                context: {
                    module: 'UserSignatures'
                }
            },
            this._updateEditorWithSignature
        );
    },

    /**
     * Fetches the signature content using its ID and updates the editor with the content.
     *
     * @param {Data.Bean} model
     */
    _updateEditorWithSignature: function(model) {
        if (model && model.id) {
            var signature = app.data.createBean('UserSignatures', { id: model.id });

            signature.fetch({
                success: _.bind(function(model) {
                    if (this.disposed === true) return; //if view is already disposed, bail out
                    if (this._insertSignature(model)) {
                        this._lastSelectedSignature = model;
                    }
                }, this),
                error: _.bind(function(error) {
                    this._showServerError(error);
                }, this)
            });
        }
    },

    /**
     * Inserts the signature into the editor.
     *
     * @param {Data.Bean} signature
     * @return {Boolean}
     * @private
     */
    _insertSignature: function(signature) {
        if (_.isObject(signature) && signature.get('signature_html')) {
            var signatureContent = this._formatSignature(signature.get('signature_html')),
                emailBody = this.model.get('html_body') || '',
                signatureOpenTag = '<br class="signature-begin" />',
                signatureCloseTag = '<br class="signature-end" />',
                signatureOpenTagForRegex = '(<br\ class=[\'"]signature\-begin[\'"].*?\/?>)',
                signatureCloseTagForRegex = '(<br\ class=[\'"]signature\-end[\'"].*?\/?>)',
                signatureOpenTagMatches = emailBody.match(new RegExp(signatureOpenTagForRegex, 'gi')),
                signatureCloseTagMatches = emailBody.match(new RegExp(signatureCloseTagForRegex, 'gi')),
                regex = new RegExp(signatureOpenTagForRegex + '[\\s\\S]*?' + signatureCloseTagForRegex, 'g');

            if (signatureOpenTagMatches && !signatureCloseTagMatches) {
                // there is a signature, but no close tag; so the signature runs from open tag until EOF
                emailBody = this._insertSignatureTag(emailBody, signatureCloseTag, false); // append the close tag
            } else if (!signatureOpenTagMatches && signatureCloseTagMatches) {
                // there is a signature, but no open tag; so the signature runs from BOF until close tag
                emailBody = this._insertSignatureTag(emailBody, signatureOpenTag, true); // prepend the open tag
            } else if (!signatureOpenTagMatches && !signatureCloseTagMatches) {
                // there is no signature, so add the tag to the correct location
                emailBody = this._insertSignatureTag(
                    emailBody,
                    signatureOpenTag + signatureCloseTag, // insert both tags as one
                    (app.user.getPreference('signature_prepend') == 'true'));
            }

            this.model.set('html_body', emailBody.replace(regex, '$1' + signatureContent + '$2'));

            return true;
        }

        return false;
    },

    /**
     * Inserts a tag into the editor to surround the signature so the signature can be identified again.
     *
     * @param {string} body
     * @param {string} tag
     * @param {string} prepend
     * @return {string}
     * @private
     */
    _insertSignatureTag: function(body, tag, prepend) {
        var preSignature = '',
            postSignature = '';

        prepend = prepend || false;

        if (prepend) {
            var bodyOpenTag = '<body>',
                bodyOpenTagLoc = body.indexOf(bodyOpenTag);

            if (bodyOpenTagLoc > -1) {
                preSignature = body.substr(0, bodyOpenTagLoc + bodyOpenTag.length);
                postSignature = body.substr(bodyOpenTagLoc + bodyOpenTag.length, body.length);
            } else {
                postSignature = body;
            }
        } else {
            var bodyCloseTag = '</body>',
                bodyCloseTagLoc = body.indexOf(bodyCloseTag);

            if (bodyCloseTagLoc > -1) {
                preSignature = body.substr(0, bodyCloseTagLoc);
                postSignature = body.substr(bodyCloseTagLoc, body.length);
            } else {
                preSignature = body;
            }
        }

        return preSignature + tag + postSignature;
    },

    /**
     * Formats HTML signatures to replace select HTML-entities with their true characters.
     *
     * @param {string} signature
     */
    _formatSignature: function(signature) {
        signature = signature.replace(/&lt;/gi, '<');
        signature = signature.replace(/&gt;/gi, '>');

        return signature;
    },

    /**
     * Show a generic alert for server errors resulting from custom API calls during Email Compose workflows. Logs
     * the error message for system administrators as well.
     *
     * @param {SUGAR.HttpError} error
     * @private
     */
    _showServerError: function(error) {
        app.alert.show('server-error', {
            level: 'error',
            messages: 'ERR_GENERIC_SERVER_ERROR'
        });
        app.error.handleHttpError(error);
    },

    /**
     * When toggling to show/hide hidden panel, resize editor accordingly
     */
    handleMoreLessToggled: function() {
        this.resizeEditor();
    },

    /**
     * When TinyMCE has been completely initialized, go ahead and resize the editor
     */
    handleTinyMceInit: function() {
        this.resizeEditor();
    },

    _dispose: function() {
        if (app.drawer) {
            app.drawer.off(null, null, this);
        }
        app.alert.dismiss('email-client-status');
        this._super('_dispose');
    },

    /**
     * Register keyboard shortcuts.
     */
    registerShortcuts: function() {
        app.shortcuts.register('Compose:Action:More', 'm', function() {
            var $primaryDropdown = this.$('.btn-primary[data-toggle=dropdown]');
            if ($primaryDropdown.is(':visible') && !$primaryDropdown.hasClass('disabled')) {
                $primaryDropdown.click();
            }
        }, this);
        this._super('registerShortcuts');
    },

    /**
     * Resize the html editor based on height of the drawer it is in
     *
     * @param {number} [drawerHeight] current height of the drawer or height the drawer will be after animations
     */
    resizeEditor: function(drawerHeight) {
        var $editor, headerHeight, recordHeight, showHideHeight, diffHeight, editorHeight, newEditorHeight;

        $editor = this.$('.mceLayout .mceIframeContainer iframe');
        //if editor not already rendered, cannot resize
        if ($editor.length === 0) {
            return;
        }

        drawerHeight = drawerHeight || app.drawer.getHeight();
        headerHeight = this.$('.headerpane').outerHeight(true);
        recordHeight = this.$('.record').outerHeight(true);
        showHideHeight = this.$('.show-hide-toggle').outerHeight(true);
        editorHeight = $editor.height();

        //calculate the space left to fill - subtracting padding to prevent scrollbar
        diffHeight = drawerHeight - headerHeight - recordHeight - showHideHeight - this.EDITOR_RESIZE_PADDING;

        //add the space left to fill to the current height of the editor to get a new height
        newEditorHeight = editorHeight + diffHeight;

        //maintain min height
        if (newEditorHeight < this.MIN_EDITOR_HEIGHT) {
            newEditorHeight = this.MIN_EDITOR_HEIGHT;
        }

        //set the new height for the editor
        $editor.height(newEditorHeight);
    },

    /**
     * Turn off logic from record view which handles clicking the cancel button
     * as it causes issues for email compose.
     *
     * TODO: Remove this when record view changes to use button events instead
     * of DOM based events
     */
    cancelClicked: $.noop
}) },
"compose-addressbook-filter": {"controller": /*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
/**
 * @class View.Views.Base.Emails.ComposeAddressbookFilterView
 * @alias SUGAR.App.view.views.BaseEmailsComposeAddressbookFilterView
 * @extends View.View
 */
({
	// Compose-addressbook-filter View (base) 

    _moduleFilterList: [],
    _allModulesId:     'All',
    _selectedModule:   null,
    _currentSearch:    '',
    events: {
        'keyup .search-name':        'throttledSearch',
        'paste .search-name':        'throttledSearch',
        'click .add-on.fa-times': 'clearInput'
    },
    /**
     * Converts the input field to a select2 field and adds the module filter for refining the search.
     *
     * @private
     */
    _render: function() {
        app.view.View.prototype._render.call(this);
        this.buildModuleFilterList();
        this.buildFilter();
    },
    /**
     * Builds the list of allowed modules to provide the data to the select2 field.
     */
    buildModuleFilterList: function() {
        var allowedModules = this.collection.allowed_modules;

        this._moduleFilterList = [
            {id: this._allModulesId, text: app.lang.get('LBL_MODULE_ALL')}
        ];

        _.each(allowedModules, function(module) {
            this._moduleFilterList.push({
                id: module,
                text: app.lang.getModuleName(module, {plural: true})
            });
        }, this);
    },
    /**
     * Converts the input field to a select2 field and initializes the selected module.
     */
    buildFilter: function() {
        var $filter = this.getFilterField();
        if ($filter.length > 0) {
            $filter.select2({
                data:                    this._moduleFilterList,
                allowClear:              false,
                multiple:                false,
                minimumResultsForSearch: -1,
                formatSelection:         _.bind(this.formatModuleSelection, this),
                formatResult:            _.bind(this.formatModuleChoice, this),
                dropdownCss:             {width: 'auto'},
                dropdownCssClass:        'search-filter-dropdown',
                initSelection:           _.bind(this.initSelection, this),
                escapeMarkup:            function(m) { return m; },
                width:                   'off'
            });
            $filter.off('change');
            $filter.on('change', _.bind(this.handleModuleSelection, this));
            this._selectedModule = this._selectedModule || this._allModulesId;
            $filter.select2('val', this._selectedModule);
        }
    },
    /**
     * Gets the filter DOM field.
     *
     * @returns {Object} DOM Element
     */
    getFilterField: function() {
        return this.$('input.select2');
    },
    /**
     * Gets the module filter DOM field.
     *
     * @returns {Object} DOM Element
     */
    getModuleFilter: function() {
        return this.$('div.choice-filter');
    },
    /**
     * Destroy the select2 plugin.
     */
    unbind: function() {
        $filter = this.getFilterField();
        if ($filter.length > 0) {
            $filter.off();
            $filter.select2('destroy');
        }
        this._super("unbind");
    },
    /**
     * Performs a search once the user has entered a term.
     */
    throttledSearch: _.debounce(function(evt) {
        var newSearch = this.$(evt.currentTarget).val();
        if (this._currentSearch !== newSearch) {
            this._currentSearch = newSearch;
            this.applyFilter();
        }
    }, 400),
    /**
     * Initialize the module selection with the value for all modules.
     *
     * @param el
     * @param callback
     */
    initSelection: function(el, callback) {
        if (el.is(this.getFilterField())) {
            var module = _.findWhere(this._moduleFilterList, {id: el.val()});
            callback({id: module.id, text: module.text});
        }
    },
    /**
     * Format the selected module to display its name.
     *
     * @param {Object} item
     * @return {String}
     */
    formatModuleSelection: function(item) {
        // update the text for the selected module
        this.getModuleFilter().html(item.text);
        return '<span class="select2-choice-type">'
            + app.lang.get('LBL_MODULE')
            + '<i class="fa fa-caret-down"></i></span>';
    },
    /**
     * Format the choices in the module select box.
     *
     * @param {Object} option
     * @return {String}
     */
    formatModuleChoice: function (option) {
        return '<div><span class="select2-match"></span>' + option.text + '</div>';
    },
    /**
     * Handler for when the module filter dropdown value changes, either via a click or manually calling jQuery's
     * .trigger("change") event.
     *
     * @param {Object} evt jQuery Change Event Object
     * @param {string} overrideVal (optional) ID passed in when manually changing the filter dropdown value
     */
    handleModuleSelection: function(evt, overrideVal) {
        var module = overrideVal || evt.val || this._selectedModule || this._allModulesId;
        // only perform a search if the module is in the approved list
        if (!_.isEmpty(_.findWhere(this._moduleFilterList, {id: module}))) {
            this._selectedModule = module;
            this.getFilterField().select2('val', this._selectedModule);
            this.getModuleFilter().css('cursor', 'pointer');
            this.applyFilter();
        }
    },
    /**
     * Triggers an event that makes a call to search the address book and filter the data set.
     */
    applyFilter: function() {
        var searchAllModules = (this._selectedModule === this._allModulesId),
            // pass an empty array when all modules are being searched
            module = searchAllModules ? [] : [this._selectedModule],
            // determine if the filter is dirty so the "clearQuickSearchIcon" can be added/removed appropriately
            isDirty = !_.isEmpty(this._currentSearch);
        this._toggleClearQuickSearchIcon(isDirty);
        this.context.trigger('compose:addressbook:search', module, this._currentSearch);
    },
    /**
     * Append or remove an icon to the quicksearch input so the user can clear the search easily.
     * @param {Boolean} addIt TRUE if you want to add it, FALSE to remove
     */
    _toggleClearQuickSearchIcon: function(addIt) {
        if (addIt && !this.$('.add-on.fa-times')[0]) {
            this.$('.filter-view.search').append('<i class="add-on fa fa-times"></i>');
        } else if (!addIt) {
            this.$('.add-on.fa-times').remove();
        }
    },
    /**
     * Clear input
     */
    clearInput: function() {
        var $filter          = this.getFilterField();
        this._currentSearch  = '';
        this._selectedModule = this._allModulesId;
        this.$('.search-name').val(this._currentSearch);
        if ($filter.length > 0) {
            $filter.select2('val', this._selectedModule);
        }
        this.applyFilter();
    }
}) },
"compose-addressbook-list": {"controller": /*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
/**
 * @class View.Views.Base.Emails.ComposeAddressbookListView
 * @alias SUGAR.App.view.views.BaseEmailsComposeAddressbookListView
 * @extends View.Views.Base.FlexListView
 */
({
	// Compose-addressbook-list View (base) 

    extendsFrom: 'FlexListView',
    plugins: ['ListColumnEllipsis', 'ListRemoveLinks', 'Pagination'],
    /**
     * Removes the event listeners that were added to the mass collection.
     */
    unbindData: function() {
        var massCollection = this.context.get('mass_collection');
        if (massCollection) {
            massCollection.off(null, null, this);
        }
        this._super("unbindData");
    },
    /**
     * Override to inject field names into the request when fetching data for the list.
     *
     * @param module
     * @returns {Array}
     */
    getFieldNames: function(module) {
        // id and module always get returned, so name and email just need to be added
        return ['name', 'email'];
    },
    /**
     * Override to hook in additional triggers as the mass collection is updated (rows are checked on/off in
     * the actionmenu field). Also attempts to pre-check any rows when the list is refreshed and selected recipients
     * are found within the new result set (this behavior occurs when the user searches the address book).
     *
     * @private
     */
    _render: function() {
        this._super("_render");
        var massCollection              = this.context.get('mass_collection'),
            selectedRecipientsFieldName = 'compose_addressbook_selected_recipients';
        if (massCollection) {
            // get rid of any old event listeners on the mass collection
            massCollection.off(null, null, this);
            // add a new recipient to the selected recipients field as recipients are added to the mass collection
            massCollection.on('add', function(model) {
                var existingRecipients = this.model.get(selectedRecipientsFieldName);
                if (model.id && existingRecipients instanceof Backbone.Collection) {
                    existingRecipients.add(model);
                }
            }, this);
            // remove a recipient from the selected recipients field as recipients are removed from the mass collection
            massCollection.on('remove', function(model) {
                var existingRecipients = this.model.get(selectedRecipientsFieldName);
                if (model.id && existingRecipients instanceof Backbone.Collection) {
                    existingRecipients.remove(model);
                }
            }, this);
            // remove from the selected recipients field all recipients found in the current collection
            massCollection.on('reset', function(newCollection, prevCollection) {
                var existingRecipients = this.model.get(selectedRecipientsFieldName);
                if (existingRecipients instanceof Backbone.Collection) {
                    if (newCollection.length > 0) {
                        //select all should be cumulative
                        newCollection.add(prevCollection.previousModels);
                    } else {
                        //remove all should only remove models that are visible in the list
                        newCollection.add(_.difference(prevCollection.previousModels, this.collection.models));
                    }
                    existingRecipients.reset(newCollection.models);
                }
            }, this);
            // find any currently selected recipients and add them to mass_collection so the checkboxes on the
            // corresponding rows are pre-selected
            var existingRecipients = this.model.get(selectedRecipientsFieldName);
            if (existingRecipients instanceof Backbone.Collection && existingRecipients.length > 0) {
                // only bother with adding, to mass_collection, recipients that are visible in the list view
                var recipientsToPreselect = existingRecipients.filter(_.bind(function(recipient) {
                    return (this.collection.where({id: recipient.get('id')}).length > 0);
                }, this));
                if (recipientsToPreselect.length > 0) {
                    massCollection.add(recipientsToPreselect);
                }
            }
        }
    },
    /**
     * Override to force translation of the module names as columns are added to the list.
     *
     * @param field
     * @private
     */
    _renderField: function(field) {
        if (field.name == '_module') {
            field.model.set(field.name, app.lang.getModuleName(field.model.get(field.name), {plural: true}));
        }
        this._super("_renderField", [field]);
    }
}) }
}}
,
"layouts": {
"base": {
"compose-addressbook": {"controller": /*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
/**
 * @class View.Layouts.Base.Emails.ComposeAddressbookLayout
 * @alias SUGAR.App.view.layouts.BaseEmailsComposeAddressbookLayout
 * @extends View.Layout
 */
({
	// Compose-addressbook Layout (base) 

    /**
     * @inheritDoc
     */
    initialize: function(options) {
        app.view.Layout.prototype.initialize.call(this, options);
        this.collection.sync = this.sync;
        this.collection.allowed_modules = ['Accounts', 'Contacts', 'Leads', 'Prospects', 'Users'];
        this.context.on('compose:addressbook:search', this.search, this);
    },
    /**
     * Calls the custom Mail API endpoint to search for email addresses.
     *
     * @param method
     * @param model
     * @param options
     */
    sync: function(method, model, options) {
        var callbacks,
            url;

        options = options || {};

        // only fetch from the approved modules
        if (_.isEmpty(options.module_list)) {
            options.module_list = ['all'];
        } else {
            options.module_list = _.intersection(this.allowed_modules, options.module_list);
        }

        // this is a hack to make pagination work while trying to minimize the affect on existing configurations
        // there is a bug that needs to be fixed before the correct approach (config.maxQueryResult vs. options.limit)
        // can be determined
        app.config.maxQueryResult = app.config.maxQueryResult || 20;
        options.limit = options.limit || app.config.maxQueryResult;

        options = app.data.parseOptionsForSync(method, model, options);

        callbacks = app.data.getSyncCallbacks(method, model, options);
        this.trigger('data:sync:start', method, model, options);

        url = app.api.buildURL('Mail', 'recipients/find', null, options.params);
        app.api.call('read', url, null, callbacks);
    },
    /**
     * Adds the set of modules and term that should be used to search for recipients.
     *
     * @param {Array} modules
     * @param {String} term
     */
    search: function(modules, term) {
        // reset offset to 0 on a search. make sure that it resets and does not update.
        this.collection.fetch({query: term, module_list: modules, offset: 0, update: false});
    }
}) },
"compose": {"controller": /*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
({
	// Compose Layout (base) 

    plugins: ['ShortcutSession'],

    shortcuts: [
        'Sidebar:Toggle',
        'Record:Cancel',
        'Compose:Action:More'
    ]
}) }
}}
,
"datas": {}

},
		"Meetings":{"fieldTemplates": {
"base": {
"launchbutton": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Launchbutton FieldTemplate (base) 
extendsFrom:'RowactionField',initialize:function(options){this._super('initialize',[options]);this.type='rowaction';this.isHost=(this.def.host===true);},_render:function(){if(this.model.get('status')!=='Planned'||this.model.get('type')==='Sugar'||(this.isHost&&!this._hasPermissionToStartMeeting())){this.hide();}else{this._setLabel();this._super('_render');this.show();}},_hasPermissionToStartMeeting:function(){return(this.model.get('assigned_user_id')===app.user.id||app.acl.hasAccess('admin','Meetings'));},_setLabel:function(){this.label=(this.isHost)?this._getLabel('LBL_START_MEETING'):this._getLabel('LBL_JOIN_MEETING');},_getLabel:function(labelName){var meetingTypeStrings=app.lang.getAppListStrings('eapm_list'),meetingType=meetingTypeStrings[this.model.get('type')]||app.lang.get('LBL_MODULE_NAME_SINGULAR',this.module);return app.lang.get(labelName,this.module,{'meetingType':meetingType});},rowActionSelect:function(){var url=app.api.buildURL('Meetings','external',{id:this.model.id});app.api.call('read',url,null,{success:_.bind(this._launchMeeting,this),error:function(){app.alert.show('launch_meeting_error',{level:'error',messages:app.lang.get('LBL_ERROR_LAUNCH_MEETING_GENERAL',this.module)});}});},_launchMeeting:function(externalInfo){var launchUrl='';if(this.disposed){return;}
if(this.isHost&&externalInfo.is_host_option_allowed){launchUrl=externalInfo.host_url;}else if(!this.isHost&&externalInfo.is_join_option_allowed){launchUrl=externalInfo.join_url;}
if(!_.isEmpty(launchUrl)){window.open(launchUrl);}else{app.alert.show('launch_meeting_error',{level:'error',messages:app.lang.get(this.isHost?'LBL_EXTNOSTART_MAIN':'LBL_EXTNOT_MAIN',this.module)});}},bindDataChange:function(){if(this.model){this.model.on('change',this.render,this);}}}) },
"enum": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Enum FieldTemplate (base) 
_render:function(){if(this.name==='type'){this._ensureSelectedValueInItems();}
this._super('_render');},_ensureSelectedValueInItems:function(){var value=this.model.get(this.name),meetingTypeLabels;if(!this.items||_.isEmpty(this.items)||_.isEmpty(value)){return;}
meetingTypeLabels=app.lang.getAppListStrings('eapm_list');if(_.isEmpty(this.items[value])&&!_.isEmpty(meetingTypeLabels[value])){this.items[value]=meetingTypeLabels[value];}},loadEnumOptions:function(fetch,callback){if(this.name==='type'){this.def.options='';}
this._super('loadEnumOptions',[fetch,callback]);}}) }
}}
,
"views": {
"base": {
"record": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Record View (base) 
extendsFrom:'RecordView',initialize:function(options){this.plugins=_.union(this.plugins||[],['EditAllRecurrences','AddAsInvitee']);this._super('initialize',[options]);}}) },
"create-actions": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Create-actions View (base) 
extendsFrom:'CreateActionsView',initialize:function(options){this.plugins=_.union(this.plugins||[],['AddAsInvitee']);this._super('initialize',[options]);}}) },
"resolve-conflicts-list": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Resolve-conflicts-list View (base) 
extendsFrom:'ResolveConflictsListView',_buildFieldDefinitions:function(modelToSave,modelInDb){modelToSave.unset('invitees');this._super('_buildFieldDefinitions',[modelToSave,modelInDb]);}}) },
"create": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Create View (base) 
extendsFrom:'CreateView',initialize:function(options){this.plugins=_.union(this.plugins||[],['AddAsInvitee']);this._super('initialize',[options]);}}) }
}}
,
"layouts": {}
,
"datas": {
"base": {
"model": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Model Data (base) 
plugins:['VirtualCollection']}) }
}}

},
		"Tasks":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Calendar":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Leads":{"fieldTemplates": {
"base": {
"badge": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Badge FieldTemplate (base) 
showNoData:false,initialize:function(options){options.def.readonly=true;app.view.Field.prototype.initialize.call(this,options);}}) },
"convertbutton": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Convertbutton FieldTemplate (base) 
extendsFrom:'RowactionField',initialize:function(options){this._super("initialize",[options]);this.type='rowaction';},_render:function(){var convertMeta=app.metadata.getLayout('Leads','convert-main');var missingRequiredAccess=_.some(convertMeta.modules,function(moduleMeta){return(moduleMeta.required===true&&!app.acl.hasAccess('create',moduleMeta.module));},this);if(this.model.get('converted')||missingRequiredAccess){this.hide();}else{this._super("_render");}},rowActionSelect:function(){var model=app.data.createBean(this.model.module);model.set(app.utils.deepCopy(this.model.attributes));app.drawer.open({layout:"convert",context:{forceNew:true,skipFetch:true,module:'Leads',leadsModel:model}});},bindDataChange:function(){if(this.model){this.model.on("change",this.render,this);}}}) }
}}
,
"views": {
"base": {
"convert-headerpane": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Convert-headerpane View (base) 
extendsFrom:'HeaderpaneView',events:{'click [name=save_button]:not(".disabled")':'initiateSave','click [name=cancel_button]':'initiateCancel'},initialize:function(options){this._super("initialize",[options]);this.context.on('lead:convert-save:toggle',this.toggleSaveButton,this);},_formatTitle:function(title){var leadsModel=this.context.get('leadsModel'),name=!_.isUndefined(leadsModel.get('name'))?leadsModel.get('name'):leadsModel.get('first_name')+' '+leadsModel.get('last_name');return app.lang.get(title,this.module)+': '+name;},initiateSave:function(){this.context.trigger('lead:convert:save');},initiateCancel:function(){app.drawer.close();},toggleSaveButton:function(enable){this.$('[name=save_button]').toggleClass('disabled',!enable);}}) },
"record": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Record View (base) 
extendsFrom:'RecordView',initialize:function(options){this.plugins=_.union(this.plugins||[],['HistoricalSummary']);this._super('initialize',[options]);},setupDuplicateFields:function(prefill){var duplicateBlackList=['id','status','converted','account_id','opportunity_id','contact_id'];_.each(duplicateBlackList,function(field){if(field&&prefill.has(field)){if(!_.isUndefined(prefill.fields[field])&&!_.isUndefined(prefill.fields[field].default)){prefill.set(field,prefill.fields[field].default);}else{prefill.unset(field);}}});}}) },
"create-actions": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Create-actions View (base) 
extendsFrom:'CreateActionsView',getCustomSaveOptions:function(){var options={};if(this.context.get('prospect_id')){options.params={};options.params.relate_to='Prospects';options.params.relate_id=this.context.get('prospect_id');this.context.unset('prospect_id');}
return options;}}) },
"convert-panel-header": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Convert-panel-header View (base) 
events:{'click .toggle-link':'handleToggleClick'},initialize:function(options){options.meta.buttons=this.getButtons(options);app.view.View.prototype.initialize.call(this,options);this.layout.on('toggle:change',this.handleToggleChange,this);this.layout.on('lead:convert-dupecheck:pending',this.setDupeCheckPending,this);this.layout.on('lead:convert-dupecheck:complete',this.setDupeCheckResults,this);this.layout.on('lead:convert-panel:complete',this.handlePanelComplete,this);this.layout.on('lead:convert-panel:reset',this.handlePanelReset,this);this.layout.on('lead:convert:duplicate-selection:change',this.setAssociateButtonState,this);this.context.on('lead:convert:'+this.meta.module+':shown',this.handlePanelShown,this);this.context.on('lead:convert:'+this.meta.module+':hidden',this.handlePanelHidden,this);this.initializeSubTemplates();},getButtons:function(options){return[{name:'associate_button',type:'button',label:this.getLabel('LBL_CONVERT_ASSOCIATE_MODULE',{'moduleName':options.meta.moduleSingular}),css_class:'btn-primary disabled'},{name:'reset_button',type:'button',label:'LBL_CONVERT_RESET_PANEL',css_class:'btn-invisible btn-link'}];},_render:function(){app.view.View.prototype._render.call(this);this.getField('reset_button').hide();},getCurrentState:function(){var currentState=_.extend({},this.layout.currentState,{create:(this.layout.currentToggle===this.layout.TOGGLE_CREATE),labelModule:this.module,moduleInfo:{'moduleName':this.meta.moduleSingular},required:this.meta.required});if(_.isNumber(currentState.dupeCount)){currentState.duplicateCheckResult={'duplicateCount':currentState.dupeCount};}
return currentState;},initializeSubTemplates:function(){this.tpls={};this.initial={};this.tpls.title=app.template.getView(this.name+'.title',this.module);this.initial.title=this.tpls.title(this.getCurrentState());this.tpls.dupecheckPending=app.template.getView(this.name+'.dupecheck-pending',this.module);this.tpls.dupecheckResults=app.template.getView(this.name+'.dupecheck-results',this.module);},handleToggleClick:function(event){var nextToggle=this.$(event.target).data('next-toggle');this.layout.trigger('toggle:showcomponent',nextToggle);event.stopPropagation();},handleToggleChange:function(toggle){this.renderTitle();this.toggleDupeCheckResults(toggle===this.layout.TOGGLE_DUPECHECK);this.setSubViewToggle(toggle);this.setAssociateButtonState();},handlePanelShown:function(){this.$('.accordion-heading').addClass('active');this.toggleSubViewToggle(true);this.setAssociateButtonState();this.toggleActiveIndicator(true);},handlePanelHidden:function(){this.$('.accordion-heading').removeClass('active');this.toggleSubViewToggle(false);this.setAssociateButtonState(false);this.toggleActiveIndicator(false);},handlePanelComplete:function(){this.setStepCircle(true);this.renderTitle();this.toggleDupeCheckResults(false);this.toggleSubViewToggle(false);this.toggleButtons(true);},handlePanelReset:function(){this.setStepCircle(false);this.renderTitle();this.toggleDupeCheckResults(true);this.toggleButtons(false);this.setAssociateButtonState();},setStepCircle:function(complete){var $stepCircle=this.$('.step-circle');if(complete){$stepCircle.addClass('complete');}else{$stepCircle.removeClass('complete');}},renderTitle:function(){this.$('.title').html(this.tpls.title(this.getCurrentState()));},setDupeCheckPending:function(){this.renderDupeCheckResults('pending');},setDupeCheckResults:function(duplicateCount){if(duplicateCount>0){this.renderDupeCheckResults('results');}else{this.renderDupeCheckResults('clear');}
this.setSubViewToggleLabels(duplicateCount);},renderDupeCheckResults:function(type){var results='';if(type==='results'){results=this.tpls.dupecheckResults(this.getCurrentState());}else if(type==='pending'){results=this.tpls.dupecheckPending(this.getCurrentState())}
this.$('.dupecheck-results').text(results);},toggleDupeCheckResults:function(show){this.$('.dupecheck-results').toggle(show);},toggleSubViewToggle:function(show){if(this.layout.currentState.complete){show=false}
this.$('.subview-toggle').toggleClass('hide',!show);},setSubViewToggle:function(nextToggle){_.each(['dupecheck','create'],function(currentToggle){this.toggleSubViewLink(currentToggle,(nextToggle===currentToggle));},this);},toggleSubViewLink:function(currentToggle,show){this.$('.subview-toggle .'+currentToggle).toggle(show);},setSubViewToggleLabels:function(duplicateCount){if(duplicateCount>0){this.setSubViewToggleLabel('dupecheck','LBL_CONVERT_IGNORE_DUPLICATES');this.setSubViewToggleLabel('create','LBL_CONVERT_BACK_TO_DUPLICATES');this.searchMode=false;}else{this.setSubViewToggleLabel('dupecheck','LBL_CONVERT_SWITCH_TO_CREATE');this.setSubViewToggleLabel('create','LBL_CONVERT_SWITCH_TO_SEARCH');this.searchMode=true;}},setSubViewToggleLabel:function(currentToggle,label){this.$('.subview-toggle .'+currentToggle).text(this.getLabel(label,{}));},toggleButtons:function(complete){var associateButton='associate_button',resetButton='reset_button';if(complete){this.getField(associateButton).hide();this.getField(resetButton).show();}else{this.getField(associateButton).show();this.getField(resetButton).hide();}},setAssociateButtonState:function(activate){var $associateButton=this.$('[name="associate_button"]'),panelActive=this.$('.accordion-heading').hasClass('active');if(_.isUndefined(activate)){if(this.layout.currentToggle===this.layout.TOGGLE_CREATE){activate=true;}else{activate=this.layout.currentState.dupeSelected;}}
if(activate&&panelActive){$associateButton.removeClass('disabled');}else{$associateButton.addClass('disabled');}},toggleActiveIndicator:function(active){var $activeIndicator=this.$('.active-indicator i');$activeIndicator.toggleClass('fa-chevron-up',active);$activeIndicator.toggleClass('fa-chevron-down',!active);},getLabel:function(key,context){return app.lang.get(key,'Leads',context);}}) },
"convert-results": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Convert-results View (base) 
extendsFrom:'ConvertResultsView',populateResults:function(){var model;if(!this.model.get('converted')){return;}
this.associatedModels.reset();model=this.buildAssociatedModel('Contacts','contact_id','contact_name');if(model){this.associatedModels.push(model);}
model=this.buildAssociatedModel('Accounts','account_id','account_name');if(model){this.associatedModels.push(model);}
model=this.buildAssociatedModel('Opportunities','opportunity_id','opportunity_name');if(model){this.associatedModels.push(model);}
app.view.View.prototype.render.call(this);},buildAssociatedModel:function(moduleName,idField,nameField){var moduleSingular=app.lang.getAppListStrings("moduleListSingular"),rowTitle,model;if(_.isEmpty(this.model.get(idField))){return false;}
rowTitle=app.lang.get('LBL_CONVERT_MODULE_ASSOCIATED',this.module,{'moduleName':moduleSingular[moduleName]});model=app.data.createBean(moduleName,{id:this.model.get(idField),name:this.model.get(nameField),row_title:rowTitle,_module:moduleName,target_module:moduleName});model.module=moduleName;return model;}}) }
}}
,
"layouts": {
"base": {
"convert-main": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Convert-main Layout (base) 
initialize:function(options){this.convertPanels={};this.associatedModels={};this.dependentModules={};this.noAccessRequiredModules=[];app.view.Layout.prototype.initialize.call(this,options);this.initializePanels(this.meta.modules);this.context.on('lead:convert-panel:complete',this.handlePanelComplete,this);this.context.on('lead:convert-panel:reset',this.handlePanelReset,this);this.context.on('lead:convert:save',this.handleSave,this);this.before('render',this.checkRequiredAccess);},initializePanels:function(modulesMetadata){var moduleNumber=1;_.each(modulesMetadata,function(moduleMeta,key,modulesList){if(!app.acl.hasAccess('create',moduleMeta.module)){if(moduleMeta.required===true){this.noAccessRequiredModules.push(moduleMeta.module);}
delete modulesList[key];return;}
moduleMeta.moduleNumber=moduleNumber++;var view=app.view.createLayout({context:this.context,name:'convert-panel',layout:this,meta:moduleMeta,type:'convert-panel',platform:this.options.platform});view.$el.addClass('accordion-group');view.$el.data('module',moduleMeta.module);this.addComponent(view);this.convertPanels[moduleMeta.module]=view;if(moduleMeta.dependentModules){this.dependentModules[moduleMeta.module]=moduleMeta.dependentModules;}},this);},checkRequiredAccess:function(){if(this.noAccessRequiredModules.length>0){this.denyUserAccess(this.noAccessRequiredModules);return false;}
return true;},denyUserAccess:function(noAccessRequiredModules){var translatedModuleNames=[];_.each(noAccessRequiredModules,function(module){translatedModuleNames.push(this.getModuleSingular(module));},this);app.alert.show('convert_access_denied',{level:'error',messages:app.lang.get('LBL_CONVERT_ACCESS_DENIED',this.module,{requiredModulesMissing:translatedModuleNames.join(', ')})});app.drawer.close();},getModuleSingular:function(module){var modulePlural=app.lang.getAppListStrings("moduleList")[module]||module;return(app.lang.getAppListStrings("moduleListSingular")[module]||modulePlural);},_render:function(){app.view.Layout.prototype._render.call(this);this.$el.addClass('accordion');this.$el.attr('id','convert-accordion');this.$(".collapse").collapse({toggle:false,parent:'#convert-accordion'});this.$(".collapse").on('shown hidden',_.bind(this.handlePanelCollapseEvent,this));this.context.get('leadsModel').fetch({success:_.bind(function(model){if(this.context){this.context.trigger("lead:convert:populate",model);}},this)});},handlePanelCollapseEvent:function(event){if(event.target!==event.currentTarget){return;}
var module=$(event.currentTarget).data('module');this.context.trigger('lead:convert:'+module+':'+event.type);},handlePanelComplete:function(module,model){this.associatedModels[module]=model;this.handlePanelUpdate();this.context.trigger('lead:convert:'+module+':complete',module,model);},handlePanelReset:function(module){delete this.associatedModels[module];this.handlePanelUpdate();this.context.trigger('lead:convert:'+module+':reset',module);},handlePanelUpdate:function(){this.checkDependentModules();this.checkRequired();},checkDependentModules:function(){_.each(this.dependentModules,function(dependencies,dependentModuleName){var isEnabled=_.all(dependencies,function(module,moduleName){return(this.associatedModels[moduleName]);},this);this.context.trigger("lead:convert:"+dependentModuleName+":enable",isEnabled);},this);},checkRequired:function(){var showSave=_.all(this.meta.modules,function(module){if(module.required){if(!this.associatedModels[module.module]){return false;}}
return true;},this);this.context.trigger('lead:convert-save:toggle',showSave);},handleSave:function(){var convertModel,myURL;this.context.trigger('lead:convert-save:toggle',false);app.alert.show('processing_convert',{level:'process',title:app.lang.get('LBL_SAVING')});convertModel=new Backbone.Model(_.extend({},{'modules':this.parseEditableFields(this.associatedModels)}));myURL=app.api.buildURL('Leads','convert',{id:this.context.get('leadsModel').id});_.each(this.convertPanels,function(view,module){if(view&&view.createView&&convertModel.get('modules')[module]){view.createView.model.trigger('duplicate:field:prepare:save',convertModel.get('modules')[module]);}},this);app.api.call('create',myURL,convertModel,{success:_.bind(this.uploadAssociatedRecordFiles,this),error:_.bind(this.convertError,this)});},parseEditableFields:function(models){var filteredModels={};_.each(models,function(associatedModel,associatedModule){filteredModels[associatedModule]=app.data.getEditableFields(associatedModel);},this);return filteredModels;},uploadAssociatedRecordFiles:function(convertResults){if(this.disposed)return;var modulesToProcess=_.keys(this.associatedModels).length,failureCount=0;var completeFn=_.bind(function(){modulesToProcess--;if(modulesToProcess===0){if(failureCount>0){this.convertWarning();}else{this.convertSuccess();}}},this);_.each(this.associatedModels,function(associatedModel,associatedModule){var moduleResult=_.find(convertResults.modules,function(result){return(associatedModule===result._module);},this);if(moduleResult&&_.isEmpty(associatedModel.get('id'))){associatedModel.set('id',moduleResult.id);app.file.checkFileFieldsAndProcessUpload(this.convertPanels[associatedModule].createView,{success:function(){completeFn();},error:function(){failureCount++;completeFn();}},{deleteIfFails:false},false);}else{completeFn();}},this);},convertSuccess:function(){this.convertComplete('success','LBL_CONVERTLEAD_SUCCESS',true);},convertWarning:function(){this.convertComplete('warning','LBL_CONVERTLEAD_FILE_WARN',true);},convertError:function(){this.convertComplete('error','LBL_CONVERTLEAD_ERROR',false);if(!this.disposed){this.context.trigger('lead:convert-save:toggle',true);}},convertComplete:function(level,message,doClose){var leadsModel=this.context.get('leadsModel');app.alert.dismiss('processing_convert');app.alert.show('convert_complete',{level:level,messages:app.lang.get(message,this.module,{leadName:leadsModel.get('first_name')+' '+leadsModel.get('last_name')}),autoClose:(level==='success')});if(!this.disposed&&doClose){this.context.trigger('lead:convert:exit');app.drawer.close();app.navigate(this.context,leadsModel,'record');}},_dispose:function(){this.$(".collapse").off();app.view.Layout.prototype._dispose.call(this);}}) },
"convert-panel": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Convert-panel Layout (base) 
extendsFrom:'ToggleLayout',TOGGLE_DUPECHECK:'dupecheck',TOGGLE_CREATE:'create',availableToggles:{'dupecheck':{},'create':{}},accordionHeading:'.accordion-heading',accordionBody:'.accordion-body',initialize:function(options){var convertPanelEvents;this.meta=options.meta;this._setModuleSpecificValues();convertPanelEvents={};convertPanelEvents['click .accordion-heading.enabled']='togglePanel';convertPanelEvents['click [name="associate_button"]']='handleAssociateClick';convertPanelEvents['click [name="reset_button"]']='handleResetClick';this.events=_.extend({},this.events,convertPanelEvents);this.plugins=_.union(this.plugins||[],['FindDuplicates']);this.currentState={complete:false,dupeSelected:false};this.toggledOffDupes=false;this._super("initialize",[options]);this.addSubComponents();this.context.on('lead:convert:populate',this.handlePopulateRecords,this);this.context.on('lead:convert:'+this.meta.module+':enable',this.handleEnablePanel,this);this.context.on('lead:convert:'+this.meta.moduleNumber+':open',this.handleOpenRequest,this);this.context.on('lead:convert:exit',this.turnOffUnsavedChanges,this);this.context.on('lead:convert:'+this.meta.module+':shown',this.handleShowComponent,this);this.addDependencyListeners();if(this.meta.moduleNumber===1){this.once('lead:convert-dupecheck:complete',this.openPanel,this);}},_setModuleSpecificValues:function(){var module=this.meta.module;this.meta.modulePlural=app.lang.getAppListStrings("moduleList")[module]||module;this.meta.moduleSingular=app.lang.getAppListStrings("moduleListSingular")[module]||this.meta.modulePlural;var moduleMetadata=app.metadata.getModule(module);this.meta.enableDuplicateCheck=(moduleMetadata&&moduleMetadata.dupCheckEnabled)||this.meta.enableDuplicateCheck||false;this.meta.duplicateCheckOnStart=this.meta.enableDuplicateCheck&&this.meta.duplicateCheckOnStart;},getContainer:function(component){if(component.name==='convert-panel-header'){return this.$('[data-container="header"]');}else{return this.$('[data-container="inner"]');}},addSubComponents:function(){this.addHeaderComponent();this.addDupeCheckComponent();this.addRecordCreateComponent();},addHeaderComponent:function(){var header=app.view.createView({context:this.context,name:'convert-panel-header',layout:this,meta:this.meta});this.addComponent(header);},addDupeCheckComponent:function(){var leadsModel=this.context.get('leadsModel'),context=this.context.getChildContext({'module':this.meta.module,'forceNew':true,'skipFetch':true,'dupelisttype':'dupecheck-list-select','collection':this.createDuplicateCollection(leadsModel,this.meta.module),'layoutName':'records','dataView':'selection-list'});context.prepare();this.duplicateView=app.view.createLayout({context:context,name:this.TOGGLE_DUPECHECK,layout:this,module:context.get('module')});this.duplicateView.context.on('change:selection_model',this.handleDupeSelectedChange,this);this.duplicateView.collection.once('reset',this.dupeCheckComplete,this);this.addComponent(this.duplicateView);},addRecordCreateComponent:function(){var context=this.context.getChildContext({'module':this.meta.module,forceNew:true,create:true});context.prepare();this.createView=app.view.createView({context:context,name:this.TOGGLE_CREATE,module:context.module,layout:this});this.createView.meta=this.removeFieldsFromMeta(this.createView.meta,this.meta);this.createView.enableHeaderButtons=false;this.addComponent(this.createView);},addDependencyListeners:function(){_.each(this.meta.dependentModules,function(details,module){this.context.on('lead:convert:'+module+':complete',this.updateFromDependentModuleChanges,this);this.context.on('lead:convert:'+module+':reset',this.resetFromDependentModuleChanges,this);},this);},dupeCheckComplete:function(){this.currentState.dupeCount=this.duplicateView.collection.length;if(this.currentState.dupeCount!==0){this.showComponent(this.TOGGLE_DUPECHECK);}else if(!this.toggledOffDupes){this.showComponent(this.TOGGLE_CREATE);this.toggledOffDupes=true;}
this.trigger('lead:convert-dupecheck:complete',this.currentState.dupeCount);},removeFieldsFromMeta:function(meta,moduleMeta){if(moduleMeta.hiddenFields){_.each(meta.panels,function(panel){_.each(panel.fields,function(field,index,list){if(_.isString(field)){field={name:field};}
if(moduleMeta.hiddenFields[field.name]){field.readonly=true;field.required=false;list[index]=field;}});},this);}
return meta;},togglePanel:function(){this.$(this.accordionBody).collapse('toggle');},handleOpenRequest:function(){if(this.currentState.complete||!this.isPanelEnabled()){this.requestNextPanelOpen();}else{this.openPanel();}},isPanelEnabled:function(){return this.$(this.accordionHeading).hasClass('enabled');},openPanel:function(){if(this.isPanelEnabled()){if(this.$(this.accordionBody).hasClass('in')){this.context.trigger('lead:convert:'+this.meta.module+':shown');}else{this.$(this.accordionBody).collapse('show');}}},showComponent:function(name){this._super('showComponent',[name]);if(this.currentToggle===this.TOGGLE_CREATE){this.createView.model.trigger('duplicate:field',this.convertLead);this.createViewRendered=true;}
this.handleShowComponent();},handleShowComponent:function(){if(this.currentToggle===this.TOGGLE_CREATE&&this.createView.meta.useTabsAndPanels&&!this.createViewRendered){this.createView.render();this.createViewRendered=true;}},closePanel:function(){this.$(this.accordionBody).collapse('hide');},handleAssociateClick:function(event){if(!$(event.currentTarget).hasClass('disabled')){if(this.currentToggle===this.TOGGLE_CREATE){this.runCreateValidation();}else{this.markPanelComplete(this.duplicateView.context.get('selection_model'));}}
event.stopPropagation();},runCreateValidation:function(){var view=this.createView,model=view.model;model.doValidate(view.getFields(view.module),_.bind(function(isValid){if(isValid){this.markPanelComplete(model);}},this));},markPanelComplete:function(model){var displayMessage=(this.currentToggle===this.TOGGLE_CREATE)?'LBL_CONVERT_MODULE_ASSOCIATED_NEW_SUCCESS':'LBL_CONVERT_MODULE_ASSOCIATED_SUCCESS';this.currentState.associatedName=this.getDisplayName(model);this.currentState.complete=true;this.context.trigger('lead:convert-panel:complete',this.meta.module,model);this.trigger('lead:convert-panel:complete',this.currentState.associatedName);app.alert.dismissAll('error');app.alert.show('panel_associate_complete',{level:'success',title:app.lang.get('LBL_CONVERT_MODULE_ASSOCIATED',this.module,{moduleName:this.meta.moduleSingular}),messages:app.lang.get(displayMessage,this.module,{moduleNameLower:this.meta.moduleSingular.toLowerCase(),recordName:this.currentState.associatedName}),autoClose:true});this.$(this.accordionBody).addClass('disabled');this.closePanel();this.requestNextPanelOpen();},requestNextPanelOpen:function(){this.context.trigger('lead:convert:'+(this.meta.moduleNumber+1)+':open');},getDisplayName:function(model){var moduleFields=app.metadata.getModule(this.meta.module).fields,displayName='';if(model.has('name')){displayName=model.get('name');}else if(moduleFields.name&&moduleFields.name['db_concat_fields']){_.each(moduleFields.name['db_concat_fields'],function(field){if(model.has(field)){displayName+=model.get(field)+' ';}});}
return displayName.trim();},handleResetClick:function(event){this.resetPanel();this.openPanel();event.stopPropagation();},resetPanel:function(){this.$(this.accordionBody).removeClass('disabled');this.currentState.complete=false;this.context.trigger('lead:convert-panel:reset',this.meta.module);this.trigger('lead:convert-panel:reset');},handleDupeSelectedChange:function(){this.currentState.dupeSelected=this.duplicateView.context.has('selection_model');this.trigger('lead:convert:duplicate-selection:change');},triggerDuplicateCheck:function(){if(this.shouldDupeCheckBePerformed(this.createView.model)){this.trigger('lead:convert-dupecheck:pending');this.duplicateView.context.trigger("dupecheck:fetch:fire",this.createView.model,{showAlerts:true});}else{this.dupeCheckComplete();}},shouldDupeCheckBePerformed:function(model){var performDuplicateCheck=this.meta.enableDuplicateCheck;if(this.meta.duplicateCheckRequiredFields){_.each(this.meta.duplicateCheckRequiredFields,function(field){if(_.isEmpty(model.get(field))){performDuplicateCheck=false;}});}
return performDuplicateCheck;},handlePopulateRecords:function(model){var fieldMapping={};if(!this.meta.copyData){this.dupeCheckComplete();return;}
if(!_.isEmpty(this.meta.fieldMapping)){fieldMapping=app.utils.deepCopy(this.meta.fieldMapping);}
var sourceFields=app.metadata.getModule(model.attributes._module,'fields');var targetFields=app.metadata.getModule(this.meta.module,'fields');_.each(model.attributes,function(fieldValue,fieldName){if(app.acl.hasAccessToModel("edit",this.createView.model,fieldName)&&!_.isUndefined(sourceFields[fieldName])&&!_.isUndefined(targetFields[fieldName])&&sourceFields[fieldName].type===targetFields[fieldName].type&&(_.isUndefined(sourceFields[fieldName]['duplicate_on_record_copy'])||sourceFields[fieldName]['duplicate_on_record_copy']!=='no')&&model.has(fieldName)&&model.get(fieldName)!==this.createView.model.get(fieldName)&&_.isUndefined(fieldMapping[fieldName])){fieldMapping[fieldName]=fieldName;}},this);this.populateRecords(model,fieldMapping);if(this.meta.duplicateCheckOnStart){this.triggerDuplicateCheck();}else if(!this.meta.dependentModules||this.meta.dependentModules.length==0){this.dupeCheckComplete();}
this.convertLead=model;},populateRecords:function(model,fieldMapping){var hasChanged=false;_.each(fieldMapping,function(sourceField,targetField){if(model.has(sourceField)&&model.get(sourceField)!==this.createView.model.get(targetField)){this.createView.model.setDefault(targetField,model.get(sourceField));this.createView.model.set(targetField,model.get(sourceField));hasChanged=true;}},this);if(hasChanged&&model.has('currency_id')){this.createView.model.isCopied=true;}
return hasChanged;},handleEnablePanel:function(isEnabled){var $header=this.$(this.accordionHeading);if(isEnabled){if(!this.currentState.complete){this.triggerDuplicateCheck();}
$header.addClass('enabled');}else{$header.removeClass('enabled');}},updateFromDependentModuleChanges:function(moduleName,model){var dependencies=this.meta.dependentModules,modelChanged=false;if(dependencies&&dependencies[moduleName]&&dependencies[moduleName].fieldMapping){modelChanged=this.populateRecords(model,dependencies[moduleName].fieldMapping);if(modelChanged){this.triggerDuplicateCheck();}}},resetFromDependentModuleChanges:function(moduleName){var dependencies=this.meta.dependentModules;if(dependencies&&dependencies[moduleName]){if(this.currentState.dupeCount){this.duplicateView.collection.reset();}
this.resetPanel();}},turnOffUnsavedChanges:function(){var defaults=_.extend({},this.createView.model._defaults,this.createView.model.getDefault());this.createView.model.clear({silent:true});this.createView.model.set(defaults,{silent:true});},_dispose:function(){this.duplicateView.context.off(null,null,this);this.duplicateView.collection.off(null,null,this);this._super("_dispose");}}) }
}}
,
"datas": {}

},
		"Currencies":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Project":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Contracts":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Quotes":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Products":{"fieldTemplates": {
"base": {
"discount": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Discount FieldTemplate (base) 
extendsFrom:'CurrencyField',bindDataChange:function(){this._super('bindDataChange');this.model.on('change:discount_select',this.render,this);},_loadTemplate:function(){if(this.model.get('discount_select')==true){this._super('_loadTemplate');}else{this.template=app.template.getField('currency',this.action||this.view.action,this.module)||app.template.empty;this.tplName=this.action||this.view.action;}},format:function(value){if(this.model.get('discount_select')==true){return app.utils.formatNumberLocale(value);}else{return this._super('format',[value]);}},unformat:function(value){if(this.model.get('discount_select')==true){var unformattedValue=app.utils.unformatNumberStringLocale(value,true);return _.isFinite(unformattedValue)?unformattedValue:value;}else{return this._super('unformat',[value]);}}}) }
}}
,
"views": {
"base": {
"record": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Record View (base) 
extendsFrom:'RecordView',delegateButtonEvents:function(){this.context.on('button:convert_to_quote:click',this.convertToQuote,this);this._super("delegateButtonEvents");}}) },
"create-actions": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Create-actions View (base) 
extendsFrom:'CreateActionsView'}) }
}}
,
"layouts": {}
,
"datas": {}

},
		"WebLogicHooks":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"ProductCategories":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"ProductTypes":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"ProductTemplates":{"fieldTemplates": {
"base": {
"pricing-formula": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Pricing-formula FieldTemplate (base) 
extendsFrom:'EnumField',showFactorField:false,validFactorFieldFormulas:['ProfitMargin','PercentageMarkup','PercentageDiscount'],factorFieldLabel:'',factorValue:0,initialize:function(options){this._super('initialize',[options]);this.before('render',function(){this.showFactorField=this.checkShouldShowFactorField();this.factorFieldLabel=this.getFactorFieldLabel();this.disableDiscountField();this.factorValue=this.model.get('pricing_factor');},null,this);this.listenTo(this,'render',function(){if(this.action=='edit'){if(this.showFactorField){this.$el.find('.pricing-factor').focus();}
this.setupPricingFormula();}});},bindDataChange:function(){this.listenTo(this.model,'change:'+this.name,function(){if(!this.disposed){this.render();}});},bindDomChange:function(){if(this.showFactorField){var $el=this.$('.pricing-factor');$el.on('change',_.bind(function(){this.model.set('pricing_factor',$el.val());},this));}
this._super('bindDomChange');},unbindDom:function(){if(this.showFactorField){this.$('.pricing-factor').off();}
this._super('unbindDom');},checkShouldShowFactorField:function(){return(this.model.has(this.name)&&_.contains(this.validFactorFieldFormulas,this.model.get(this.name)));},getFactorFieldLabel:function(){if(this.model.has(this.name)){switch(this.model.get(this.name)){case'ProfitMargin':return(this.action==='edit'&&this.view.action==='list')?'LBL_POINTS_ABBR':'LBL_POINTS';case'PercentageMarkup':case'PercentageDiscount':return(this.action==='edit'&&this.view.action==='list')?'%':'LBL_PERCENTAGE';}}
return'';},setupPricingFormula:function(){if(this.model.has(this.name)){switch(this.model.get(this.name)){case'ProfitMargin':this._setupProfitMarginFormula();break;case'PercentageMarkup':this._setupPercentageMarkupFormula();break;case'PercentageDiscount':this._setupPercentageDiscountFormula();break;case'IsList':this._setupIsListFormula();break;}}},_setupProfitMarginFormula:function(){var formula=function(cost_price,points){return app.math.div(app.math.mul(cost_price,100),app.math.sub(100,points));};this._costPriceFormula(formula);},_setupPercentageMarkupFormula:function(){var formula=function(cost_price,percentage){return app.math.mul(cost_price,app.math.add(1,app.math.div(percentage,100)));};this._costPriceFormula(formula);},_setupPercentageDiscountFormula:function(){var formula=function(list_price,percentage){return app.math.sub(list_price,app.math.mul(list_price,app.math.div(percentage,100)));};this._costPriceFormula(formula,'list_price');},_costPriceFormula:function(formula,field){field=field||'cost_price'
this.listenTo(this.model,'change:'+field,function(model,price){model.set('discount_price',formula(price,model.get('pricing_factor')));});this.listenTo(this.model,'change:pricing_factor',function(model,pricing_factor){model.set('discount_price',formula(model.get(field),pricing_factor));});this.model.set('discount_price',formula(this.model.get(field),this.model.get('pricing_factor')));},_setupIsListFormula:function(){this.listenTo(this.model,'change:list_price',function(model,value){model.set('discount_price',value);});this.model.set('discount_price',this.model.get('list_price'));},disableDiscountField:function(){if(this.model.has(this.name)){var field=this.view.getField('discount_price');if(field){switch(this.model.get(this.name)){case'ProfitMargin':case'PercentageMarkup':case'PercentageDiscount':case'IsList':field.setDisabled(true);break;default:field.setDisabled(false);break;}}}}}) }
}}
,
"views": {}
,
"layouts": {
"base": {
"filterpanel": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Filterpanel Layout (base) 
extendsFrom:'FilterpanelLayout',initialize:function(options){this._super('initialize',[options]);if(this.context.get('layout')==='record'){var hasSubpanels=false,layouts=app.metadata.getModule(options.module,'layouts');if(layouts&&layouts.subpanels&&layouts.subpanels.meta){hasSubpanels=(layouts.subpanels.meta.components.length>0);}
if(!hasSubpanels){this.before('render',function(){return false;},[],this);this.template=app.template.empty;this.$el.html(this.template());}}}}) }
}}
,
"datas": {}

},
		"Reports":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Forecasts":{"fieldTemplates": {
"base": {
"assignquota": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Assignquota FieldTemplate (base) 
extendsFrom:'RowactionField',disableButton:true,initialize:function(options){this._super('initialize',[options]);this.type='rowaction';},bindDataChange:function(){this.context.on('forecasts:worksheet:quota_changed',function(){this.disableButton=false;if(!this.disposed){this.render();}},this);this.context.on('forecasts:worksheet:committed',function(){this.disableButton=true;if(!this.disposed){this.render();}},this);this.context.on('forecasts:assign_quota',this.assignQuota,this);},_render:function(){this._super('_render');if(this.getFieldElement().length>0){this.setDisabled(this.disableButton);}},hasAccess:function(){var su=(this.context.get('selectedUser'))||app.user.toJSON(),isManager=su.is_manager||false,showOpps=su.showOpps||false;return(su.id===app.user.get('id')&&isManager&&showOpps===false);},assignQuota:function(worksheetType,selectedUser,selectedTimeperiod){app.api.call('create',app.api.buildURL('ForecastManagerWorksheets/assignQuota'),{'user_id':selectedUser.id,'timeperiod_id':selectedTimeperiod},{success:_.bind(function(o){app.alert.dismiss('saving_quota');app.alert.show('success',{level:'success',autoClose:true,autoCloseDelay:10000,title:app.lang.get("LBL_FORECASTS_WIZARD_SUCCESS_TITLE","Forecasts")+":",messages:[app.lang.get('LBL_QUOTA_ASSIGNED','Forecasts')]});this.disableButton=true;this.context.trigger('forecasts:quota_assigned');if(!this.disposed){this.render();}},this)});},_removeViewClass:function(action){this.getFieldElement().removeClass(action);},_addViewClass:function(action){this.getFieldElement().addClass(action);}}) },
"datapoint": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Datapoint FieldTemplate (base) 
previous_type:'',arrow:'',initial_total:'',total:0,hasAccess:true,hasDataAccess:true,noDataAccessTemplate:undefined,total_field:'',initialize:function(options){this._super('initialize',[options]);this.total_field=this.total_field||this.name;this.hasAccess=app.utils.getColumnVisFromKeyMap(this.name,'forecastsWorksheet');this.hasDataAccess=app.acl.hasAccess('read','ForecastWorksheets',app.user.get('id'),this.name);if(this.hasDataAccess===false){this.noDataAccessTemplate=app.template.getField('base','noaccess')(this);}
this.before('render',function(){if(!this.hasAccess){return false;}
this.arrow=this._getArrowIconColorClass(this.total,this.initial_total);this.checkIfNeedsCommit();return true;},this);$(window).on('resize.datapoints',_.bind(this.resize,this));this.on('render',function(){if(!this.hasAccess){return false;}
this.resize();return true;},this);},checkIfNeedsCommit:function(){if(!_.isEqual(this.initial_total,'')&&app.math.isDifferentWithPrecision(this.total,this.initial_total)){this.context.trigger('forecasts:worksheet:needs_commit',null);}},_dispose:function(){$(window).off('resize.datapoints');clearInterval(this.resizeDetectTimer);this._super('_dispose');},getPlaceholder:function(){if(this.hasAccess){return this._super('getPlaceholder');}
return'';},adjustDatapointLayout:function(){if(this.hasAccess){var parentMarginLeft=this.view.$('.topline .datapoints').css('margin-left'),parentMarginRight=this.view.$('.topline .datapoints').css('margin-right'),timePeriodWidth=this.view.$('.topline .span4').outerWidth(true),toplineWidth=this.view.$('.topline ').width(),collection=this.view.$('.topline div.pull-right').children('span'),collectionWidth=parseInt(parentMarginLeft)+parseInt(parentMarginRight);collection.each(function(index){collectionWidth+=$(this).children('div.datapoint').outerWidth(true);});if((collectionWidth+timePeriodWidth)>toplineWidth){this.view.$('.topline div.hr').show();this.view.$('.info .last-commit').find('div.hr').show();this.view.$('.topline .datapoints').removeClass('span8').addClass('span12');this.view.$('.info .last-commit .datapoints').removeClass('span8').addClass('span12');this.view.$('.info .last-commit .commit-date').removeClass('span4').addClass('span12');}else{this.view.$('.topline div.hr').hide();this.view.$('.info .last-commit').find('div.hr').hide();this.view.$('.topline .datapoints').removeClass('span12').addClass('span8');this.view.$('.info .last-commit .datapoints').removeClass('span12').addClass('span8');this.view.$('.info .last-commit .commit-date').removeClass('span12').addClass('span4');var lastCommitHeight=this.view.$('.info .last-commit .commit-date').height();this.view.$('.info .last-commit .datapoints div.datapoint').height(lastCommitHeight);}
var index=this.$el.index(),width=this.$('div.datapoint').outerWidth(),datapointLength=this.view.$('.info .last-commit .datapoints div.datapoint').length,sel=this.view.$('.last-commit .datapoints div.datapoint:nth-child('+index+')');if(datapointLength>2&&index<=2||datapointLength==2&&index==1){var widthMod=(app.lang.direction==='rtl')?7:8;$(sel).width(width-widthMod);}else{$(sel).width(width);}}},resize:function(){if(this.resizeDetectTimer){clearTimeout(this.resizeDetectTimer);}
this.resizeDetectTimer=setTimeout(_.bind(function(){this.adjustDatapointLayout();},this),250);},bindDataChange:function(){if(!this.hasAccess){return;}
this.context.on('change:selectedUser change:selectedTimePeriod',function(){this.initial_total='';this.total=0;this.arrow='';},this);this.collection.on('reset',this._onCommitCollectionReset,this);this.context.on('forecasts:worksheet:totals',this._onWorksheetTotals,this);this.context.on('forecasts:worksheet:committed',this._onWorksheetCommit,this);},_onCommitCollectionReset:function(collection){var model=_.first(collection.models);if(!_.isUndefined(model)){this.initial_total=model.get(this.total_field);if(!this.disposed){this.render();}}},_onWorksheetTotals:function(totals,type){var field=this.total_field;if(type=='manager'){field=field.split('_')[0]+'_adjusted';}
this.total=totals[field];this.previous_type=type;if(!this.disposed){this.render();}},_onWorksheetCommit:function(type,forecast){var field=this.total_field;if(type=='manager'){field=field.split('_')[0]+'_adjusted';}
this.total=forecast[field];this.initial_total=forecast[field];this.arrow='';if(!this.disposed){this.render();}},_getArrowIconColorClass:function(newValue,oldValue){var cls='';if(app.math.isDifferentWithPrecision(newValue,oldValue)){cls=(newValue>oldValue)?' fa-arrow-up font-green':' fa-arrow-down font-red';}
return cls;}}) },
"reportingUsers": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// ReportingUsers FieldTemplate (base) 
jsTree:{},reporteesEndpoint:'',currentTreeUrl:'',currentRootId:'',selectedUser:{},initHasSelected:false,previousUserName:undefined,initialize:function(options){app.view.Field.prototype.initialize.call(this,options);this.reporteesEndpoint=app.api.buildURL("Forecasts/reportees")+'/';this.selectedUser=this.context.get('selectedUser')||app.user.toJSON();this.currentTreeUrl=this.reporteesEndpoint+this.selectedUser.id;this.currentRootId=this.selectedUser.id;},_dispose:function(){if(app.user.get('is_manager')&&!_.isEmpty(this.jsTree)){this.jsTree.off();}
app.view.Field.prototype._dispose.call(this);},render:function(){if(app.user.get('is_manager')){app.view.Field.prototype.render.call(this);}},unbindData:function(){app.view.Field.prototype.unbindData.call(this);},bindDataChange:function(){this.context.on("forecasts:user:canceled",function(){this.initHasSelected=false;this.selectJSTreeNode(this.previousUserName);this.initHasSelected=true;},this);},checkRender:function(context,selectedUser){this.selectedUser=selectedUser;if(selectedUser.showOpps){var nodeId=(selectedUser.is_manager?'jstree_node_myopps_':'jstree_node_')+selectedUser.user_name;this.selectJSTreeNode(nodeId)}else if(this.currentRootId!=selectedUser.id){if(selectedUser.is_manager){this.currentRootId=selectedUser.id;this.currentTreeUrl=this.reporteesEndpoint+selectedUser.id;this.rendered=false;if(!this.disposed){this.render();}}else{var nodeId='jstree_node_'+selectedUser.user_name;if(this.jsTree.jstree('get_selected').attr('id')!=nodeId){this.selectJSTreeNode(nodeId)}}}},selectJSTreeNode:function(nodeId){this.jsTree.jstree('deselect_all');this.jsTree.jstree('select_node','#'+nodeId);},_recursiveReplaceHTMLChars:function(data,ctx){_.each(data,function(entry,index){if(entry.data){data[index].data=(function(value){return value.replace(/&amp;/gi,'&').replace(/&lt;/gi,'<').replace(/&gt;/gi,'>').replace(/&#039;/gi,'\'').replace(/&quot;/gi,'"');})(entry.data);if(entry.children){_.each(entry.children,function(childEntry,index2){entry.children[index2]=ctx._recursiveReplaceHTMLChars([childEntry]);if(childEntry.attr.rel=='my_opportunities'&&childEntry.metadata.id==app.user.get('id')){childEntry.data=app.utils.formatString(app.lang.get('LBL_MY_MANAGER_LINE','Forecasts'),[childEntry.data]);}},this);}}},this);return data;},_render:function(ctx,options){app.view.Field.prototype._render.call(this,ctx,options);var options={};options.success=_.bind(function(data){this.createTree(data);},this);app.api.call('read',this.currentTreeUrl,null,options);},createTree:function(data){if(!_.isArray(data)){data=[data];}
var treeData=this._recursiveReplaceHTMLChars(data,this),selectedUser=this.context.get('selectedUser'),nodeId=(selectedUser.is_manager&&selectedUser.showOpps?'jstree_node_myopps_':'jstree_node_')+selectedUser.user_name;treeData.ctx=this.context;this.jsTree=$(".jstree-sugar").jstree({"plugins":["json_data","ui","crrm","types","themes"],"json_data":{"data":treeData},"ui":{"initially_select":[nodeId]},"types":{"types":{"types":{"parent_link":{},"manager":{},"my_opportunities":{},"rep":{},"root":{}}}}}).on("reselect.jstree",_.bind(function(){this.initHasSelected=true;},this)).on("select_node.jstree",_.bind(function(event,data){if(this.initHasSelected){this.previousUserName=(this.selectedUser.is_manager&&this.selectedUser.showOpps?'jstree_node_myopps_':'jstree_node_')+this.selectedUser.user_name;var jsData=data.inst.get_json(),nodeType=jsData[0].attr.rel,userData=jsData[0].metadata,showOpps=false;if(nodeType=="my_opportunities"||nodeType=="rep"){showOpps=true}
var selectedUser={'id':userData.id,'user_name':userData.user_name,'full_name':userData.full_name,'first_name':userData.first_name,'last_name':userData.last_name,'reports_to_id':userData.reports_to_id,'reports_to_name':userData.reports_to_name,'is_manager':(nodeType!='rep'),'is_top_level_manager':(nodeType!='rep'&&_.isEmpty(userData.reports_to_id)),'showOpps':showOpps,'reportees':[]};this.context.trigger('forecasts:user:changed',selectedUser,this.context);}},this));if(treeData){var rootId=-1;if(treeData.length==1){rootId=treeData[0].metadata.id;}else if(treeData.length==2){rootId=treeData[1].metadata.id;}
this.currentRootId=rootId;}
this.$el.find('#people').addClass("jstree-sugar");}}) },
"commitlog": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Commitlog FieldTemplate (base) 
commitLog:[],previousDateEntered:'',initialize:function(options){app.view.Field.prototype.initialize.call(this,options);this.on('show',function(){if(!this.disposed){this.render();}},this);},bindDataChange:function(){this.collection.on('reset',function(){this.hide();this.buildCommitLog();},this);this.context.on('forecast:commit_log:trigger',function(){if(!this.isVisible()){this.show();}else{this.hide();}},this);},buildCommitLog:function(){this.commitLog=[];if(_.isEmpty(this.collection.models)){return;}
var previousModel=_.first(this.collection.models);var dateEntered=new Date(Date.parse(previousModel.get('date_modified')));if(dateEntered=='Invalid Date'){dateEntered=previousModel.get('date_modified');}
this.previousDateEntered=app.date.format(dateEntered,app.user.getPreference('datepref')+' '+app.user.getPreference('timepref'));var loopPreviousModel='';var models=_.clone(this.collection.models).reverse();_.each(models,function(model){this.commitLog.push(app.utils.createHistoryLog(loopPreviousModel,model));loopPreviousModel=model;},this);this.commitLog.reverse();}}) },
"button": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Button FieldTemplate (base) 
extendsFrom:'ButtonField',hasAccess:function(){if(this.def.acl_action=='current_user'){var su=(this.context.get('selectedUser'))||app.user.toJSON();return(su.id===app.user.get('id'))}else{return this._super("hasAccess");}}}) },
"quotapoint": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Quotapoint FieldTemplate (base) 
quotaAmount:undefined,selectedUser:undefined,selectedTimePeriod:undefined,userCurrencyID:undefined,resizeDetectTimer:undefined,initialize:function(options){app.view.Field.prototype.initialize.call(this,options);this.quotaAmount=0.00;this.selectedUser=this.context.get('selectedUser');this.selectedTimePeriod=this.context.get('selectedTimePeriod');this.userCurrencyID=app.user.getPreference('currency_id');$(window).on('resize.datapoints',_.bind(this.resize,this));this.on('render',function(){this.resize();return true;},this);},bindDataChange:function(){this.context.on('change:selectedUser',function(ctx,user){this.selectedUser=user;this.loadData({});},this);this.context.on('change:selectedTimePeriod',function(ctx,timePeriod){this.selectedTimePeriod=timePeriod;this.loadData({});},this);this.loadData();},toggleTotalsListeners:function(isTopLevelManager){if(isTopLevelManager){this.hasListenerAdded=true;this.context.on('forecasts:worksheet:totals',function(totals){var quota=0.00;if(_.has(totals,'quota')){quota=totals.quota;}else{quota=this.quotaAmount;}
this.quotaAmount=quota;if(!this.disposed){this.render();}},this);if(!this.selectedUser.showOpps){var collection=app.utils.getSubpanelCollection(this.context,'ForecastManagerWorksheets'),quota=0.00;_.each(collection.models,function(model){quota=app.math.add(quota,model.get('quota'));},this);this.quotaAmount=quota;this.render();}}else if(this.hasListenerAdded){this.hasListenerAdded=false;this.context.off('forecasts:worksheet:totals',null,this);}},getQuotasURL:function(){var method=(this.selectedUser.is_manager&&this.selectedUser.showOpps)?'direct':'rollup',url='Forecasts/'+this.selectedTimePeriod+'/quotas/'+method+'/'+this.selectedUser.id;return app.api.buildURL(url,'read');},loadData:function(options){var url=this.getQuotasURL(),cb={context:this,success:this.handleQuotaData,complete:options?options.complete:null};app.api.call('read',url,null,null,cb);},handleQuotaData:function(quotaData){this.quotaAmount=quotaData.amount;this.toggleTotalsListeners(quotaData.is_top_level_manager);if(!this.disposed){this.render();}},adjustDatapointLayout:function(){if(this.view.$el){var thisView$El=this.view.$el,parentMarginLeft=thisView$El.find(".topline .datapoints").css("margin-left"),parentMarginRight=thisView$El.find(".topline .datapoints").css("margin-right"),timePeriodWidth=thisView$El.find(".topline .span4").outerWidth(true),toplineWidth=thisView$El.find(".topline ").width(),collection=thisView$El.find(".topline div.pull-right").children("span"),collectionWidth=parseInt(parentMarginLeft)+parseInt(parentMarginRight);collection.each(function(index){collectionWidth+=$(this).children("div.datapoint").outerWidth(true);});if((collectionWidth+timePeriodWidth)>toplineWidth){thisView$El.find(".topline div.hr").show();thisView$El.find(".info .last-commit").find("div.hr").show();thisView$El.find(".topline .datapoints").removeClass("span8").addClass("span12");thisView$El.find(".info .last-commit .datapoints").removeClass("span8").addClass("span12");thisView$El.find(".info .last-commit .commit-date").removeClass("span4").addClass("span12");}else{thisView$El.find(".topline div.hr").hide();thisView$El.find(".info .last-commit").find("div.hr").hide();thisView$El.find(".topline .datapoints").removeClass("span12").addClass("span8");thisView$El.find(".info .last-commit .datapoints").removeClass("span12").addClass("span8");thisView$El.find(".info .last-commit .commit-date").removeClass("span12").addClass("span4");var lastCommitHeight=thisView$El.find(".info .last-commit .commit-date").height();thisView$El.find(".info .last-commit .datapoints div.datapoint").height(lastCommitHeight);}
var index=this.$el.index()+1,width=this.$el.find("div.datapoint").outerWidth(),datapointLength=thisView$El.find(".info .last-commit .datapoints div.datapoint").length,sel=thisView$El.find('.last-commit .datapoints div.datapoint:nth-child('+index+')');if(datapointLength>2&&index<=2||datapointLength==2&&index==1){$(sel).width(width-18);}else{$(sel).width(width);}}},resize:function(){if(this.resizeDetectTimer){clearTimeout(this.resizeDetectTimer);}
this.resizeDetectTimer=setTimeout(_.bind(function(){this.adjustDatapointLayout();},this),250);}}) },
"lastcommit": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Lastcommit FieldTemplate (base) 
commit_date:undefined,data_points:[],points:[],events:{'click':'triggerHistoryLog'},initialize:function(options){this._super('initialize',[options]);this.points=[];this.data_points=[];_.each(options.def.datapoints,function(point){if(app.utils.getColumnVisFromKeyMap(point,'forecastsWorksheet')){this.points.push(point);}},this);},triggerHistoryLog:function(){this.$('i').toggleClass('fa-caret-down fa-caret-up');this.context.trigger('forecast:commit_log:trigger');},bindDataChange:function(){this.collection.on('reset',function(){this.data_points=[];var model=_.first(this.collection.models)
if(!_.isUndefined(model)){this.commit_date=model.get('date_modified');this.data_points=this.processDataPoints(model);}else{this.commit_date=undefined;}
if(!this.disposed){this.render();}},this);},processDataPoints:function(model){var points=[],noAccessTemplate=app.template.getField('base','noaccess')(this);_.each(this.points,function(point){var point_data={};if(app.acl.hasAccess('read','ForecastWorksheets',app.user.get('id'),point)){point_data.value=model.get(point)}else{point_data.error=noAccessTemplate;}
points.push(point_data);},this);return points;}}) },
"date": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Date FieldTemplate (base) 
extendsFrom:'DateField',_initPlugins:function(){this._super('_initPlugins');if(this.options.def.click_to_edit){this.plugins=_.union(this.plugins,['ClickToEdit']);}
return this;}}) },
"fiscal-year": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Fiscal-year FieldTemplate (base) 
extendsFrom:'EnumField',loadEnumOptions:function(fetch,callback){this._super('loadEnumOptions',[fetch,callback]);var startYear=this.options.def.startYear;_.each(this.items,function(value,key,list){list[key]=list[key].replace("{{year}}",startYear++);},this);}}) }
}}
,
"views": {
"base": {
"info": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Info View (base) 
tpModel:undefined,initialize:function(options){if(app.lang.direction==='rtl'){options.template=app.template.getView('info.info-rtl','Forecasts');options.meta.datapoints.reverse();}
this.tpModel=new Backbone.Model();this._super("initialize",[options]);this.resetSelection(this.context.get("selectedTimePeriod"));},bindDataChange:function(){this.tpModel.on("change",function(model){this.context.trigger('forecasts:timeperiod:changed',model,this.getField('selectedTimePeriod').tpTooltipMap[model.get('selectedTimePeriod')]);},this);this.context.on("forecasts:timeperiod:canceled",function(){this.resetSelection(this.tpModel.previous("selectedTimePeriod"));},this);},resetSelection:function(timeperiod_id){this.tpModel.set({selectedTimePeriod:timeperiod_id},{silent:true});_.find(this.fields,function(field){if(_.isEqual(field.name,"selectedTimePeriod")){field.render();return true;}});}}) },
"config-header-buttons": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config-header-buttons View (base) 
extendsFrom:'ConfigHeaderButtonsView',_beforeSaveConfig:function(){var ctxModel=this.context.get('model');ctxModel.set({is_setup:true,show_forecasts_commit_warnings:true});if(ctxModel.get('forecast_ranges')=='show_custom_buckets'){var ranges=ctxModel.get('show_custom_buckets_ranges'),labels=ctxModel.get('show_custom_buckets_options'),commitStages=[],finalLabels=[];ctxModel.unset('commit_stages_included');_.each(ranges,function(range,key){if(range.in_included_total){commitStages.push(key)}
delete range.in_included_total;finalLabels.push([key,labels[key]]);},this);ctxModel.set({commit_stages_included:commitStages,show_custom_buckets_ranges:ranges,show_custom_buckets_options:finalLabels},{silent:true});}},_handleCancelRedirect:function(){if(this.context.get('model').get('is_setup')==0){app.router.goBack();}}}) },
"forecast-pipeline": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Forecast-pipeline View (base) 
results:{},chart:{},plugins:['Dashlet','Chart','Tooltip'],forecastSetup:0,forecastsNotSetUpMsg:undefined,isManager:false,initialize:function(options){this.isManager=app.user.get('is_manager');this._initPlugins();this._super('initialize',[options]);this.forecastSetup=app.metadata.getModule('Forecasts','config').is_setup;},initDashlet:function(view){if(!this.isManager&&this.meta.config){this.meta.panels=_.chain(this.meta.panels).filter(function(panel){panel.fields=_.without(panel.fields,_.findWhere(panel.fields,{name:'visibility'}));return panel;}).value();}
if(this.forecastSetup){app.api.call('GET',app.api.buildURL('TimePeriods/current'),null,{success:_.bind(function(currentTP){this.settings.set({'selectedTimePeriod':currentTP.id},{silent:true});this.layout.loadData();},this),error:_.bind(function(){},this),complete:view.options?view.options.complete:null});}else{this.settings.set({'selectedTimePeriod':'current'},{silent:true});}
this.chart=nv.models.funnelChart().showTitle(false).tooltips(true).margin({top:0}).direction(app.lang.direction).tooltipContent(function(key,x,y,e,graph){var val=app.currency.formatAmountLocale(y,app.currency.getBaseCurrencyId());var salesStageLabels=app.lang.getAppListStrings('sales_stage_dom');return'<p>'+SUGAR.App.lang.get('LBL_SALES_STAGE','Forecasts')+': <b>'+((salesStageLabels&&salesStageLabels[key])?salesStageLabels[key]:key)+'</b></p>'+'<p>'+SUGAR.App.lang.get('LBL_AMOUNT','Forecasts')+': <b>'+val+'</b></p>'+'<p>'+SUGAR.App.lang.get('LBL_PERCENT','Forecasts')+': <b>'+x+'%</b></p>';}).colorData('class',{step:2}).fmtValueLabel(function(d){var y=d.label||d;return app.currency.formatAmountLocale(y,app.currency.getBaseCurrencyId()).replace(/\,00$|\.00$/,'');}).strings({legend:{close:app.lang.get('LBL_CHART_LEGEND_CLOSE'),open:app.lang.get('LBL_CHART_LEGEND_OPEN')},noData:app.lang.get('LBL_CHART_NO_DATA')});},_initPlugins:function(){if(this.isManager){this.plugins=_.union(this.plugins,['ToggleVisibility']);}
return this;},bindDataChange:function(){this.settings.on('change',function(model){if(this.$el&&this.$el.is(':visible')){this.loadData({});}},this);},renderChart:function(){if(!this.isChartReady()){return;}
this.$('svg#'+this.cid).children().remove();d3.select('svg#'+this.cid).datum(this.results).transition().duration(500).call(this.chart);this.chart_loaded=_.isFunction(this.chart.update);this.displayNoData(!this.chart_loaded);},hasChartData:function(){return!_.isEmpty(this.results)&&this.results.data&&this.results.data.length>0;},loadData:function(options){var timeperiod=this.settings.get('selectedTimePeriod');if(timeperiod){var forecastBy=app.metadata.getModule('Forecasts','config').forecast_by||'Opportunities',url_base=forecastBy+'/chart/pipeline/'+timeperiod+'/';if(this.isManager){url_base+='/'+this.getVisibility();}
var url=app.api.buildURL(url_base);app.api.call('GET',url,null,{success:_.bind(function(o){if(o&&o.data){var salesStageLabels=app.lang.getAppListStrings('sales_stage_dom');_.each(o.data,function(dataBlock){if(dataBlock&&dataBlock.key&&salesStageLabels&&salesStageLabels[dataBlock.key]){dataBlock.key=salesStageLabels[dataBlock.key];}});}
this.results={};this.results=o;this.renderChart();},this),error:_.bind(function(o){this.results={};this.renderChart();},this),complete:options?options.complete:null});}},unbind:function(){this.settings.off('change');this._super('unbind');}}) },
"config-ranges": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config-ranges View (base) 
extendsFrom:'ConfigPanelView',events:{'click #btnAddCustomRange a':'addCustomRange','click #btnAddCustomRangeWithoutProbability a':'addCustomRange','click .addCustomRange':'addCustomRange','click .removeCustomRange':'removeCustomRange','keyup input[type=text]':'updateCustomRangeLabel','change :radio':'selectionHandler'},fieldsMeta:{},forecastRangesField:{},bucketsDomField:{},categoryRangesField:{},includedCommitStages:[],disableRanges:false,selectedRange:'',fieldRanges:{},initialize:function(options){this._super('initialize',[options]);_.each(_.first(this.meta.panels).fields,function(field){this.fieldsMeta[field.name]=field;if(field.name==='category_ranges'){delete this.fieldsMeta.category_ranges.name;}},this);this.forecastRangesField=this.fieldsMeta.forecast_ranges;this.bucketsDomField=this.fieldsMeta.buckets_dom;this.categoryRangesField=this.fieldsMeta.category_ranges;this.includedCommitStages=this.model.get('commit_stages_included');this.forecastRangesField.value=this.model.get('forecast_ranges');this.bucketsDomField.value=this.model.get('buckets_dom');this.disableRanges=this.model.get('has_commits');this.selectedRange=this.model.get('forecast_ranges');},_updateTitleValues:function(){var forecastRanges=this.model.get('forecast_ranges'),rangeObjs=this.model.get(forecastRanges+'_ranges'),tmpArr=[],str='',aSort=function(a,b){if(a.min<b.min){return-1;}else if(a.min>b.min){return 1;}}
_.each(rangeObjs,function(value,key){if(key.indexOf('without_probability')===-1){tmpArr.push({min:value.min,max:value.max});}});tmpArr.sort(aSort);_.each(tmpArr,function(val){str+=val.min+'% - '+val.max+'%, ';});this.titleSelectedValues=str.slice(0,str.length-2);this.titleSelectedRange=app.lang.getAppListStrings('forecasts_config_ranges_options_dom')[forecastRanges];},_updateTitleTemplateVars:function(){this.titleTemplateVars={title:this.titleViewNameTitle,message:this.titleSelectedRange,selectedValues:this.titleSelectedValues,viewName:this.name};},bindDataChange:function(){this.model.on('change:show_binary_ranges change:show_buckets_ranges change:show_custom_buckets_ranges',function(){this.updateTitle();},this);this.model.on('change:forecast_ranges',function(model){this.updateTitle();if(model.get('forecast_ranges')==='show_custom_buckets'){this.updateCustomRangesCheckboxes();}},this);},_render:function(){this._super('_render');this.$(':radio:checked').trigger('change');if(this.model.get('forecast_ranges')==='show_custom_buckets'){this.updateCustomRangesCheckboxes();}},selectionHandler:function(event){var newValue=$(event.target).val(),oldValue=this.selectedRange,bucket_dom=this.bucketsDomField.options[newValue],elToHide=this.$('#'+oldValue+'_ranges'),elToShow=this.$('#'+newValue+'_ranges');this.selectedRange=newValue;if(elToShow.children().length===0){if(newValue==='show_custom_buckets'){this._customSelectionHandler(newValue,elToShow);}else{this._selectionHandler(newValue,elToShow);}
this.connectSliders.call(this,newValue,this.fieldRanges);}
if(elToHide){elToHide.toggleClass('hide',true);}
if(elToShow){elToShow.toggleClass('hide',false);}
this.model.set({forecast_ranges:newValue,buckets_dom:bucket_dom});},_selectionHandler:function(elementVal,showElement){var bucketDomStrings=app.lang.getAppListStrings(this.bucketsDomField.options[elementVal]);this.fieldRanges[elementVal]={};showElement.append('<p>'+app.lang.get('LBL_FORECASTS_CONFIG_'+elementVal.toUpperCase()+'_RANGES_DESCRIPTION','Forecasts',this)+'</p>');_.each(bucketDomStrings,function(label,key){if(key!='exclude'){var rangeField,model=new Backbone.Model(),fieldSettings;model.set(key,this.model.get(elementVal+'_ranges')[key]);fieldSettings={view:this,def:this.fieldsMeta.category_ranges[key],viewName:'edit',context:this.context,module:this.module,model:model,meta:app.metadata.getField('range')};rangeField=app.view.createField(fieldSettings);showElement.append('<b>'+label+':</b>').append(rangeField.el);rangeField.render();this.fieldRanges[elementVal][key]=rangeField;rangeField.sliderDoneDelegate=function(category,key,view){return function(value){this.view.updateRangeSettings(category,key,value);};}(elementVal,key,this);}},this);showElement.append($('<p>'+app.lang.get('LBL_FORECASTS_CONFIG_RANGES_EXCLUDE_INFO','Forecasts')+'</p>'));},_customSelectionHandler:function(elementVal,showElement){var bucketDomOptions={},elValRanges=elementVal+'_ranges',bucketDomStrings=app.lang.getAppListStrings(this.bucketsDomField.options[elementVal]),rangeField,_ranges=_.clone(this.model.get(elValRanges));this.fieldRanges[elementVal]={};showElement.append('<p>'+app.lang.get('LBL_FORECASTS_CONFIG_'+elementVal.toUpperCase()+'_RANGES_DESCRIPTION','Forecasts',this)+'</p>');if(!this.model.has(elValRanges)){this.model.set(elValRanges,{});}
_.each(bucketDomStrings,function(label,key){if(_.isUndefined(_ranges[key])){_ranges[key]={min:0,max:100,in_included_total:false};}else{_ranges[key].in_included_total=(_.contains(this.includedCommitStages,key));}
bucketDomOptions[key]=label;},this);this.model.set(elValRanges,_ranges);this.model.set(elementVal+'_options',bucketDomOptions);this.model.on('change:'+elementVal+'_options',function(event){this.validateCustomRangeLabels(elementVal);},this);this._renderCustomRangesLayout(showElement,elementVal);_.each(bucketDomStrings,function(label,key){rangeField=this._renderCustomRange(key,label,showElement,elementVal);this.fieldRanges[elementVal][key]=rangeField;},this);if(this._getLastCustomRangeIndex(elementVal,'custom')){this.$('#btnAddCustomRange').hide();}
if(this._getLastCustomRangeIndex(elementVal,'custom_without_probability')){this.$('#btnAddCustomRangeWithoutProbability').hide();}},_renderCustomRangesLayout:function(showElement,category){var template=app.template.getView('config-ranges.customRangesDefault','Forecasts'),mdl={category:category};showElement.append(template(mdl));},_renderCustomRange:function(key,label,showElement,category){var customType=key,customIndex=0,isExclude=false,currentPlaceholder=showElement,rangeField,model=new Backbone.Model(),fieldSettings,lastCustomRange;if(key.substring(0,26)=='custom_without_probability'){customType='custom_without_probability';customIndex=key.substring(27);currentPlaceholder=this.$('#plhCustomWithoutProbability');}else if(key.substring(0,6)=='custom'){customType='custom';customIndex=key.substring(7);currentPlaceholder=this.$('#plhCustom');}else if(key.substring(0,7)=='exclude'){customType='custom_default';currentPlaceholder=this.$('#plhExclude');isExclude=true;}else{customType='custom_default';currentPlaceholder=this.$('#plhCustomDefault');}
model.set(key,this.model.get(category+'_ranges')[key]);var fieldDef=this.fieldsMeta.category_ranges[key]||this.fieldsMeta.category_ranges[customType];fieldSettings={view:this,def:_.clone(fieldDef),viewName:'forecastsCustomRange',context:this.context,module:this.module,model:model,meta:app.metadata.getField('range')};fieldSettings.def.name=key;fieldSettings.def.view='forecastsCustomRange';fieldSettings.def.enabled=true;rangeField=app.view.createField(fieldSettings);currentPlaceholder.append(rangeField.el);rangeField.label=label;rangeField.customType=customType;rangeField.customIndex=+customIndex;rangeField.isExclude=isExclude;rangeField.in_included_total=(_.contains(this.includedCommitStages,key));rangeField.category=category;if(key=='include'){rangeField.isReadonly=true;}
rangeField.render();rangeField.$(rangeField.fieldTag).noUiSlider('enable');lastCustomRange=this._getLastCustomRange(category,rangeField.customType);if(lastCustomRange){lastCustomRange.$('.addCustomRange').parent().hide();}
if(_.isEmpty(rangeField.label)){rangeField.$('.control-group').addClass('error');}else{rangeField.$('.control-group').removeClass('error');}
rangeField.sliderDoneDelegate=function(category,key,view){return function(value){this.view.updateRangeSettings(category,key,value);};}(category,key,this);return rangeField;},_getLastCustomRangeIndex:function(category,customType){var lastCustomRangeIndex=0;if(this.fieldRanges[category]){_.each(this.fieldRanges[category],function(range){if(range.customType==customType&&range.customIndex>lastCustomRangeIndex){lastCustomRangeIndex=range.customIndex;}},this);}
return lastCustomRangeIndex;},_getLastCustomRange:function(category,customType){if(!_.isEmpty(this.fieldRanges[category])){var lastCustomRange=undefined;_.each(this.fieldRanges[category],function(range){if(range.customType==customType&&(_.isUndefined(lastCustomRange)||range.customIndex>lastCustomRange.customIndex)){lastCustomRange=range;}},this);if(_.isUndefined(lastCustomRange)){if(customType=='custom'){lastCustomRange=this.fieldRanges[category].upside||this.fieldRanges[category].include;}else{lastCustomRange=this.fieldRanges[category].exclude;}}}
return lastCustomRange;},addCustomRange:function(event){var self=this,category=$(event.currentTarget).data('category'),customType=$(event.currentTarget).data('type'),categoryRange=category+'_ranges',categoryOptions=category+'_options',ranges=_.clone(this.model.get(categoryRange)),bucketDomOptions=_.clone(this.model.get(categoryOptions));if(_.isUndefined(category)||_.isUndefined(customType)||_.isUndefined(ranges)||_.isUndefined(bucketDomOptions)){return false;}
var showElement=(customType=='custom')?this.$('#plhCustom'):this.$('#plhCustomWithoutProbability'),label=app.lang.get('LBL_FORECASTS_CUSTOM_RANGES_DEFAULT_NAME','Forecasts'),rangeField,lastCustomRange=this._getLastCustomRange(category,customType),lastCustomRangeIndex=this._getLastCustomRangeIndex(category,customType);lastCustomRangeIndex++;var key=customType+'_'+lastCustomRangeIndex;if(customType!='custom'){ranges[key]={min:0,max:0,in_included_total:false};}else if(ranges.exclude.max-ranges.exclude.min>3){ranges[key]={min:parseInt(ranges.exclude.max,10)-1,max:parseInt(ranges.exclude.max,10),in_included_total:false};ranges.exclude.max=parseInt(ranges.exclude.max,10)-2;if(this.fieldRanges[category].exclude.$el){this.fieldRanges[category].exclude.$(this.fieldRanges[category].exclude.fieldTag).noUiSlider('move',{handle:'upper',to:ranges.exclude.max});}}else if(ranges[lastCustomRange.name].max-ranges[lastCustomRange.name].min>3){ranges[key]={min:parseInt(ranges[lastCustomRange.name].min,10),max:parseInt(ranges[lastCustomRange.name].min,10)+1,in_included_total:false};ranges[lastCustomRange.name].min=parseInt(ranges[lastCustomRange.name].min,10)+2;if(lastCustomRange.$el){lastCustomRange.$(lastCustomRange.fieldTag).noUiSlider('move',{handle:'lower',to:ranges[lastCustomRange.name].min});}}else{ranges[key]={min:parseInt(ranges[lastCustomRange.name].min,10)-2,max:parseInt(ranges[lastCustomRange.name].min,10)-1,in_included_total:false};}
this.model.set(categoryRange,ranges);rangeField=this._renderCustomRange(key,label,showElement,category);if(rangeField){this.fieldRanges[category][key]=rangeField;}
bucketDomOptions[key]=label;this.model.set(categoryOptions,bucketDomOptions);rangeField.$(':checkbox').each(function(){var $el=$(this);$el.on('click',_.bind(self.updateCustomRangeIncludeInTotal,self));app.accessibility.run($el,'click');});if(customType=='custom'){this.$('#btnAddCustomRange').hide();this.connectSliders.call(this,category,this.fieldRanges);}else{this.$('#btnAddCustomRangeWithoutProbability').hide();_.each(this.fieldRanges[category],function(item){if(item.customType==customType&&item.customIndex<lastCustomRangeIndex&&item.$el){item.$('.addCustomRange').parent().hide();}},this);}
this.updateCustomRangesCheckboxes();},removeCustomRange:function(event){var category=$(event.currentTarget).data('category'),fieldKey=$(event.currentTarget).data('key'),categoryRanges=category+'_ranges',categoryOptions=category+'_options',ranges=_.clone(this.model.get(categoryRanges)),bucketDomOptions=_.clone(this.model.get(categoryOptions));if(_.isUndefined(category)||_.isUndefined(fieldKey)||_.isUndefined(this.fieldRanges[category])||_.isUndefined(this.fieldRanges[category][fieldKey])||_.isUndefined(ranges)||_.isUndefined(bucketDomOptions))
{return false;}
var range,previousCustomRange,lastCustomRangeIndex,lastCustomRange;range=this.fieldRanges[category][fieldKey];if(_.indexOf(['include','upside','exclude'],range.name)!=-1){return false;}
if(range.customType=='custom'){_.each(this.fieldRanges[category],function(item){if(item.customType=='custom'&&item.customIndex<range.customIndex){previousCustomRange=item;}},this);if(_.isUndefined(previousCustomRange)){previousCustomRange=(this.fieldRanges[category].upside)?this.fieldRanges[category].upside:this.fieldRanges[category].include;}
ranges[previousCustomRange.name].min=+ranges[range.name].min;if(previousCustomRange.$el){previousCustomRange.$(previousCustomRange.fieldTag).noUiSlider('move',{handle:'lower',to:ranges[previousCustomRange.name].min});}}
this.includedCommitStages=_.without(this.includedCommitStages,range.name)
range.$(':checkbox').off('click');this.fieldRanges[category][range.name].remove();delete ranges[range.name];delete this.fieldRanges[category][range.name];delete bucketDomOptions[range.name];this.model.set(categoryOptions,bucketDomOptions);this.model.set(categoryRanges,ranges);lastCustomRangeIndex=this._getLastCustomRangeIndex(category,range.customType);if(range.customType=='custom'){if(lastCustomRangeIndex==0){this.$('#btnAddCustomRange').show();}
this.connectSliders.call(this,category,this.fieldRanges);}else{if(lastCustomRangeIndex==0){this.$('#btnAddCustomRangeWithoutProbability').show();}}
lastCustomRange=this._getLastCustomRange(category,range.customType);if(lastCustomRange.$el){lastCustomRange.$('.addCustomRange').parent().show();}
this.updateCustomRangesCheckboxes();},updateCustomRangeLabel:function(event){var category=$(event.target).data('category'),fieldKey=$(event.target).data('key'),categoryOptions=category+'_options',bucketDomOptions=_.clone(this.model.get(categoryOptions));if(category&&fieldKey&&bucketDomOptions){bucketDomOptions[fieldKey]=$(event.target).val();this.model.set(categoryOptions,bucketDomOptions);}},validateCustomRangeLabels:function(category){var opts=this.model.get(category+'_options'),hasErrors=false,range;_.each(opts,function(label,key){range=this.fieldRanges[category][key];if(_.isEmpty(label.trim())){range.$('.control-group').addClass('error');hasErrors=true;}else{range.$('.control-group').removeClass('error');}},this);var saveBtn=this.layout.layout.$('[name=save_button]');if(saveBtn){if(hasErrors){saveBtn.addClass('disabled');}else if(!hasErrors&&saveBtn.hasClass('disabled')){saveBtn.removeClass('disabled');}}},updateCustomRangeIncludeInTotal:function(event){var category=$(event.target).data('category'),fieldKey=$(event.target).data('key'),categoryRanges=category+'_ranges',ranges;if(category&&fieldKey){ranges=_.clone(this.model.get(categoryRanges));if(ranges&&ranges[fieldKey]){if(fieldKey!=='exclude'&&fieldKey.indexOf('custom_without_probability')==-1){var isChecked=$(event.target).is(':checked');ranges[fieldKey].in_included_total=isChecked;if(isChecked){this.includedCommitStages.push(fieldKey);}else{this.includedCommitStages=_.without(this.includedCommitStages,fieldKey)}
this.model.set('commit_stages_included',this.includedCommitStages);}else{ranges[fieldKey].in_included_total=false;}
this.model.set(categoryRanges,ranges);this.updateCustomRangesCheckboxes();}}},updateCustomRangesCheckboxes:function(){var els=this.$('#plhCustomDefault :checkbox, #plhCustom :checkbox'),len=els.length,$el,fieldKey,i;for(i=0;i<len;i++){$el=$(els[i]);fieldKey=$el.data('key');$el.attr('disabled',true);$el.off('click');if(fieldKey!=='include'&&(i==this.includedCommitStages.length-1||i==this.includedCommitStages.length)){$el.attr('disabled',false);$el.on('click',_.bind(this.updateCustomRangeIncludeInTotal,this));app.accessibility.run($el,'click');}}},updateRangeSettings:function(category,range,value){var catRange=category+'_ranges',setting=_.clone(this.model.get(catRange));if(category=='show_custom_buckets'){value.in_included_total=setting[range].in_included_total||false;}
setting[range]=value;this.model.set(catRange,setting);},connectSliders:function(ranges,sliders){var rangeSliders=sliders[ranges];if(ranges=='show_binary'){rangeSliders.include.sliderChangeDelegate=function(value){rangeSliders.include.$(rangeSliders.include.fieldTag).noUiSlider('move',{handle:'upper',to:rangeSliders.include.def.maxRange});this.view.setExcludeValueForLastSlider(value,ranges,rangeSliders.include);};}else if(ranges=='show_buckets'){rangeSliders.include.sliderChangeDelegate=function(value){rangeSliders.include.$(rangeSliders.include.fieldTag).noUiSlider('move',{handle:'upper',to:rangeSliders.include.def.maxRange});rangeSliders.upside.$(rangeSliders.upside.fieldTag).noUiSlider('move',{handle:'upper',to:value.min-1});if(value.min<=rangeSliders.upside.$(rangeSliders.upside.fieldTag).noUiSlider('value')[0]+1){rangeSliders.upside.$(rangeSliders.upside.fieldTag).noUiSlider('move',{handle:'lower',to:value.min-2});}};rangeSliders.upside.sliderChangeDelegate=function(value){rangeSliders.include.$(rangeSliders.include.fieldTag).noUiSlider('move',{handle:'lower',to:value.max+1});this.view.setExcludeValueForLastSlider(value,ranges,rangeSliders.upside);};}else if(ranges=='show_custom_buckets'){var i,max,customSliders=_.sortBy(_.filter(rangeSliders,function(item){return item.customType=='custom';}),function(item){return parseInt(item.customIndex,10);}),probabilitySliders=_.union(rangeSliders.include,rangeSliders.upside,customSliders,rangeSliders.exclude);if(probabilitySliders.length){for(i=0,max=probabilitySliders.length;i<max;i++){probabilitySliders[i].connectedSlider=(probabilitySliders[i+1])?probabilitySliders[i+1]:null;probabilitySliders[i].connectedToSlider=(probabilitySliders[i-1])?probabilitySliders[i-1]:null;probabilitySliders[i].sliderChangeDelegate=function(value,populateEvent){if(this.name=='include'){this.$(this.fieldTag).noUiSlider('move',{handle:'upper',to:this.def.maxRange});}else if(this.name=='exclude'){this.$(this.fieldTag).noUiSlider('move',{handle:'lower',to:this.def.minRange});}
if(this.connectedSlider){this.connectedSlider.$(this.connectedSlider.fieldTag).noUiSlider('move',{handle:'upper',to:value.min-1});if(value.min<=this.connectedSlider.$(this.connectedSlider.fieldTag).noUiSlider('value')[0]+1){this.connectedSlider.$(this.connectedSlider.fieldTag).noUiSlider('move',{handle:'lower',to:value.min-2});}
if(_.isUndefined(populateEvent)||populateEvent=='down'){this.connectedSlider.sliderChangeDelegate.call(this.connectedSlider,{min:this.connectedSlider.$(this.connectedSlider.fieldTag).noUiSlider('value')[0],max:this.connectedSlider.$(this.connectedSlider.fieldTag).noUiSlider('value')[1]},'down');}}
if(this.connectedToSlider){this.connectedToSlider.$(this.connectedToSlider.fieldTag).noUiSlider('move',{handle:'lower',to:value.max+1});if(value.max>=this.connectedToSlider.$(this.connectedToSlider.fieldTag).noUiSlider('value')[1]-1){this.connectedToSlider.$(this.connectedToSlider.fieldTag).noUiSlider('move',{handle:'upper',to:value.max+2});}
if(_.isUndefined(populateEvent)||populateEvent=='up'){this.connectedToSlider.sliderChangeDelegate.call(this.connectedToSlider,{min:this.connectedToSlider.$(this.connectedToSlider.fieldTag).noUiSlider('value')[0],max:this.connectedToSlider.$(this.connectedToSlider.fieldTag).noUiSlider('value')[1]},'up');}}};}}}},setExcludeValueForLastSlider:function(value,ranges,slider){var excludeRange={min:0,max:100},settingName=ranges+'_ranges',setting=_.clone(this.model.get(settingName));excludeRange.max=value.min-1;excludeRange.min=slider.def.minRange;setting.exclude=excludeRange;this.model.set(settingName,setting);}}) },
"config-worksheet-columns": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config-worksheet-columns View (base) 
extendsFrom:'ConfigPanelView',wkstColumnsSelect2:undefined,selectedOptions:[],allOptions:[],likelyFieldObj:{},bestFieldObj:{},worstFieldObj:{},initialize:function(options){if(app.metadata.getModule('Opportunities','config').opps_view_by==='Opportunities'){_.each(_.first(options.meta.panels).fields,function(field){if(field.label_module&&field.label_module==='RevenueLineItems'){field.label_module='Opportunities';}});}
this._super('initialize',[options]);this.allOptions=[];this.selectedOptions=[];var cfgFields=this.model.get('worksheet_columns'),index=0;_.each(this.meta.panels[0].fields,function(field){var obj={id:field.name,text:app.lang.get(field.label,this._getLabelModule(field.name,field.label_module)),index:index,locked:field.locked||false},cField=_.find(cfgFields,function(cfgField){return cfgField==field.name;},this),addFieldToFullList=true;if(field.name=='best_case'){this.bestFieldObj=obj;addFieldToFullList=(this.model.get('show_worksheet_best')===1);}else if(field.name=='likely_case'){this.likelyFieldObj=obj;addFieldToFullList=(this.model.get('show_worksheet_likely')===1);}else if(field.name=='worst_case'){this.worstFieldObj=obj;addFieldToFullList=(this.model.get('show_worksheet_worst')===1);}
if(addFieldToFullList){this.allOptions.push(obj);}
if(!_.isUndefined(cField)){this.selectedOptions.push(obj);}
index++;},this);},_updateTitleValues:function(){},bindDataChange:function(){this.model.on('change:worksheet_columns',function(){var arr=[],cfgFields=this.model.get('worksheet_columns'),metaFields=this.meta.panels[0].fields;_.each(metaFields,function(metaField){_.each(cfgFields,function(field){if(metaField.name==field){arr.push(app.lang.get(metaField.label,this._getLabelModule(metaField.name,metaField.label_module)));}},this);},this);this.titleSelectedValues=arr.join(', ');this.titleSelectedValues=this.titleSelectedValues.slice(0,50)+'...';this.updateTitle();},this);this.model.trigger('change:worksheet_columns');this.model.on('change:scenarios',function(){if(this.model.get('show_worksheet_best')){this.addOption(this.bestFieldObj);}else{this.removeOption(this.bestFieldObj);}
if(this.model.get('show_worksheet_likely')){this.addOption(this.likelyFieldObj);}else{this.removeOption(this.likelyFieldObj);}
if(this.model.get('show_worksheet_worst')){this.addOption(this.worstFieldObj);}else{this.removeOption(this.worstFieldObj);}
this._render();var arr=[];_.each(this.selectedOptions,function(field){arr.push(field.id);},this);this.model.set('worksheet_columns',arr);},this);},addOption:function(fieldObj){if(!_.contains(this.allOptions,fieldObj)){this.allOptions.splice(fieldObj.index,0,fieldObj);this.selectedOptions.splice(fieldObj.index,0,fieldObj);}},removeOption:function(fieldObj){this.allOptions=_.without(this.allOptions,fieldObj);this.selectedOptions=_.without(this.selectedOptions,fieldObj);},_render:function(){this._super('_render');this.wkstColumnsSelect2=this.$('#wkstColumnsSelect').select2({data:this.allOptions,multiple:true,containerCssClass:'select2-choices-pills-close',initSelection:_.bind(function(element,callback){callback(this.selectedOptions);},this)});this.wkstColumnsSelect2.select2('val',this.selectedOptions);this.wkstColumnsSelect2.on('change',_.bind(this.handleColumnModelChange,this));},handleColumnModelChange:function(evt){if(!_.isUndefined(evt.added)){this.selectedOptions.push(evt.added);}
if(!_.isUndefined(evt.removed)){this.selectedOptions=_.without(this.selectedOptions,evt.removed);}
this.model.set('worksheet_columns',evt.val);},_dispose:function(){if(this.wkstColumnsSelect2){this.wkstColumnsSelect2.off();this.wkstColumnsSelect2.select2('destroy');this.wkstColumnsSelect2=null;}
this._super('_dispose');},_getLabelModule:function(fieldName,setModule){var labelModule=setModule||'Forecasts';if(fieldName==='parent_name'){labelModule=this.model.get('forecast_by');}
return labelModule;}}) },
"help-dashlet": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Help-dashlet View (base) 
extendsFrom:'HelpDashletView',getHelpObject:function(){var config=app.metadata.getModule('Forecasts','config'),helpUrl={forecastby_singular_module:app.lang.getModuleName(config.forecast_by),forecastby_module:app.lang.getModuleName(config.forecast_by,{plural:true}),more_info_url:this.createMoreHelpLink(),more_info_url_close:'</a>'},ctx=this.context&&this.context.parent||this.context,layout=(this.meta.preview)?'preview':ctx.get('layout');this.helpObject=app.help.get(ctx.get('module'),layout,helpUrl);if(_.isEmpty(this.helpObject.title)){this.helpObject.title=app.lang.get(this.meta.label);}}}) },
"config-timeperiods": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config-timeperiods View (base) 
extendsFrom:'ConfigPanelView',tpStartDate:undefined,fiscalYearField:undefined,fiscalYearMeta:undefined,initialize:function(options){var fieldsMeta=_.filter(_.first(options.meta.panels).fields,function(field){if(field.name==='timeperiod_fiscal_year'){this.fiscalYearMeta=_.clone(field);}
return field.name!=='timeperiod_fiscal_year';},this);_.first(options.meta.panels).fields=fieldsMeta;this._super('initialize',[options]);if(!this.model.get('is_setup')){_.each(fieldsMeta,function(field){if(field.name=='timeperiod_start_date'){field.click_to_edit=true;}},this);}
this.tpStartDate=this.model.get('timeperiod_start_date');if(this.tpStartDate){this.tpStartDate=app.date(this.tpStartDate);}},_updateTitleValues:function(){this.titleSelectedValues=(this.tpStartDate)?this.tpStartDate.formatUser(true):'';},checkFiscalYearField:function(){if(this.tpStartDate.month()!==0||(this.tpStartDate.month()===0&&this.tpStartDate.date()!==1)){this.addFiscalYearField();}else if(this.fiscalYearField){this.model.set({timeperiod_fiscal_year:null});this.removeFiscalYearField();}},bindDataChange:function(){if(this.model){this.model.once('change',function(model){if(_.isUndefined(model)){model=this.model;}},this);this.model.on('change:timeperiod_start_date',function(model){this.tpStartDate=app.date(model.get('timeperiod_start_date'));this.checkFiscalYearField();this.titleSelectedValues=this.tpStartDate.formatUser(true);this.updateTitle();},this);}},addFiscalYearField:function(){if(!this.fiscalYearField){this.model.set({timeperiod_fiscal_year:'current_year'});var $el=this.$('#timeperiod_start_date_subfield');if($el){var fiscalYearFieldMeta=this.updateFieldMetadata(this.fiscalYearMeta),fieldSettings={view:this,def:fiscalYearFieldMeta,viewName:'edit',context:this.context,module:this.module,model:this.model,meta:app.metadata.getField('enum')};this.fiscalYearField=app.view.createField(fieldSettings);$el.html(this.fiscalYearField.el);this.fiscalYearField.render();}}},updateFieldMetadata:function(fieldMeta){fieldMeta.startYear=this.tpStartDate.year();return fieldMeta;},removeFiscalYearField:function(){this.model.set({timeperiod_fiscal_year:null});this.fiscalYearField.dispose();this.fiscalYearField=null;this.$('#timeperiod_start_date_subfield').html('')},_renderField:function(field){field=this._setUpTimeperiodConfigField(field);if(this.model.get('is_setup')){field.options.def.view='detail';}else if(field.name=='timeperiod_start_date'){field.options.def.click_to_edit=true;}
this._super('_renderField',[field]);if(field.name=='timeperiod_start_date'){if(this.model.get('is_setup')){var year=this.model.get('timeperiod_start_date').substring(0,4),str,$el;if(this.model.get('timeperiod_fiscal_year')==='next_year'){year++;}
str=app.lang.get('LBL_FISCAL_YEAR','Forecasts')+': '+year;$el=this.$('#timeperiod_start_date_sublabel');if($el){$el.html(str);}}else{this.tpStartDate=app.date(this.model.get('timeperiod_start_date'));this.checkFiscalYearField();}}},_setUpTimeperiodConfigField:function(field){switch(field.name){case"timeperiod_shown_forward":case"timeperiod_shown_backward":return this._setUpTimeperiodShowField(field);case"timeperiod_interval":return this._setUpTimeperiodIntervalBind(field);default:return field;}},_setUpTimeperiodShowField:function(field){field.events=_.extend({"change input":"_updateSelection"},field.events);field.bindDomChange=function(){};field._updateSelection=function(event){var value=$(event.currentTarget).val();this.def.value=value;this.model.set(this.name,value);};this.model.set(field.name,this.model.get(field.name).toString(),{silent:true});field.def.value=this.model.get(field.name)||1;return field;},_setUpTimeperiodIntervalBind:function(field){field.def.value=this.model.get(field.name);field.events=_.extend({"change input":"_updateIntervals"},field.events);field.bindDomChange=function(){};if(typeof(field.def.options)=='string'){field.def.options=app.lang.getAppListStrings(field.def.options);}
field._updateIntervals=function(event){var selected_interval=$(event.currentTarget).val();this.def.value=selected_interval;this.model.set(this.name,selected_interval);this.model.set('timeperiod_leaf_interval',selected_interval=='Annual'?'Quarter':'Month');}
return field;}}) },
"list-headerpane": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// List-headerpane View (base) 
extendsFrom:'HeaderpaneView',plugins:['FieldErrorCollection'],saveBtnDisabled:true,commitBtnDisabled:true,fieldHasErrorState:false,initialize:function(options){this._super("initialize",[options]);this.on('render',function(){this.getField('save_draft_button').setDisabled();this.getField('save_draft_button').$el.addClass('btn-group');this.getField('commit_button').setDisabled();},this);},bindDataChange:function(){this.context.on('change:selectedUser',function(model,changed){this._title=changed.full_name;if(!this.disposed){this.render();}},this);this.context.on('plugin:fieldErrorCollection:hasFieldErrors',function(collection,hasErrors){if(this.fieldHasErrorState!==hasErrors){this.fieldHasErrorState=hasErrors;this.setButtonStates();}},this)
this.context.on('button:print_button:click',function(){window.print();},this);this.context.on('forecasts:worksheet:is_dirty',function(worksheet_type,is_dirty){is_dirty=!is_dirty;if(this.saveBtnDisabled!==is_dirty||this.commitBtnDisabled!==is_dirty){this.saveBtnDisabled=is_dirty;this.commitBtnDisabled=is_dirty;this.setButtonStates();}},this);this.context.on('button:commit_button:click button:save_draft_button:click',function(){if(!this.saveBtnDisabled||!this.commitBtnDisabled){this.saveBtnDisabled=true;this.commitBtnDisabled=true;this.setButtonStates();}},this);this.context.on('forecasts:worksheet:saved',function(totalSaved,worksheet_type,wasDraft){if(wasDraft===true&&this.commitBtnDisabled){this.commitBtnDisabled=false;this.setButtonStates();}},this);this.context.on('forecasts:worksheet:needs_commit',function(worksheet_type){if(this.commitBtnDisabled){this.commitBtnDisabled=false;this.setButtonStates();}},this);this._super("bindDataChange");},setButtonStates:function(){if(this.fieldHasErrorState){this.getField('save_draft_button').setDisabled(true);this.getField('commit_button').setDisabled(true);}else{this.getField('save_draft_button').setDisabled(this.saveBtnDisabled);this.getField('commit_button').setDisabled(this.commitBtnDisabled);}},_renderHtml:function(){var user=this.context.get('selectedUser')||app.user.toJSON();this._title=this._title||user.full_name;this._super("_renderHtml");}}) },
"preview": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Preview View (base) 
extendsFrom:'PreviewView',originalModel:undefined,closePreview:function(){this.originalModel=undefined;this._super("closePreview");},_renderPreview:function(model,collection,fetch,previewId,dontClose){var self=this;dontClose=dontClose||false;if(app.drawer&&!app.drawer.isActive(this.$el)){return;}
if(!dontClose&&this.originalModel&&model&&(this.originalModel.get("id")==model.get("id")&&previewId==this.previewId)){app.events.trigger("list:preview:decorate",false);app.events.trigger('preview:close');return;}
if(model){this.meta=app.metadata.getView(model.get('parent_type')||model.get('_module'),'record')||{};this.meta=this._previewifyMetadata(this.meta);}
if(fetch){var mdl=app.data.createBean(model.get('parent_type'),{'id':model.get('parent_id')});this.originalModel=model;mdl.fetch({showAlerts:true,success:function(model){self.renderPreview(model,collection);}});}else{this.renderPreview(model,collection);}
this.previewId=previewId;},showPreviousNextBtnGroup:function(){if(!this.model||!this.layout||!this.collection){return;}
var collection=this.collection;if(!collection.size()){this.layout.hideNextPrevious=true;}
var model=this.originalModel||this.model;var recordIndex=collection.indexOf(collection.get(model.id));this.layout.previous=collection.models[recordIndex-1]?collection.models[recordIndex-1]:undefined;this.layout.next=collection.models[recordIndex+1]?collection.models[recordIndex+1]:undefined;this.layout.hideNextPrevious=_.isUndefined(this.layout.previous)&&_.isUndefined(this.layout.next);this.layout.trigger("preview:pagination:update");},renderPreview:function(model,newCollection){if(newCollection){this.collection.reset(newCollection.models);}
if(model){this.model=app.data.createBean(model.module,model.toJSON());this.render();if(this.previewModule&&this.previewModule==="Activities"){this.layout.hideNextPrevious=true;this.layout.trigger("preview:pagination:update");}
app.events.trigger("preview:open",this);app.events.trigger("list:preview:decorate",this.originalModel,this);}},switchPreview:function(data,index,id,module){var self=this,currModule=module||this.model.module,currID=id||this.model.get("postId")||this.model.get("id"),currIndex=index||_.indexOf(this.collection.models,this.collection.get(this.originalModel.get('id')));if(this.switching||this.collection.models.length<2){return;}
this.switching=true;if(data.direction==="left"&&(currID===_.first(this.collection.models).get("parent_id"))||data.direction==="right"&&(currID===_.last(this.collection.models).get("parent_id"))){this.switching=false;return;}
else{data.direction==="left"?currIndex-=1:currIndex+=1;if(_.isUndefined(this.collection.models[currIndex].get("target_id"))&&this.collection.models[currIndex].get("activity_data")){currID=this.collection.models[currIndex].id;this.switching=false;this.switchPreview(data,currIndex,currID,currModule);}else{var targetModule=this.collection.models[currIndex].get("target_module")||currModule;this.model=app.data.createBean(targetModule);if(_.isUndefined(this.collection.models[currIndex].get("target_id"))){this.model.set("id",this.collection.models[currIndex].get("parent_id"));}else{this.model.set("postId",this.collection.models[currIndex].get("id"));this.model.set("id",this.collection.models[currIndex].get("target_id"));}
this.originalModel=this.collection.models[currIndex];this.model.fetch({showAlerts:true,success:function(model){model.set("_module",targetModule);self.model=null;app.events.trigger("preview:render",model,null,false);self.switching=false;}});}}}}) },
"config-scenarios": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config-scenarios View (base) 
extendsFrom:'ConfigPanelView',scenarioOptions:[],selectedOptions:[],defaultOption:{},defaultSelect2:undefined,optionsSelect2:undefined,defaultForecastedAmountKey:'show_worksheet_likely',initialize:function(options){this._super('initialize',[options]);this.selectedOptions=[];this.defaultOption={};this.scenarioOptions=[];_.each(this.meta.panels[0].fields,function(field){var obj={id:field.name,text:app.lang.get(field.label,'Forecasts')}
if(field.name==this.defaultForecastedAmountKey){obj['locked']=true;this.defaultOption=obj;}else{this.scenarioOptions.push(obj);}
if(this.model.get(field.name)==1&&!obj.locked){this.selectedOptions.push(obj);}},this);},_updateTitleValues:function(){},bindDataChange:function(){this.model.on('change:scenarios',function(model){var arr=[];if(model.get('show_worksheet_likely')){arr.push(app.lang.get('LBL_FORECASTS_CONFIG_WORKSHEET_SCENARIOS_LIKELY','Forecasts'));}
if(model.get('show_worksheet_best')){arr.push(app.lang.get('LBL_FORECASTS_CONFIG_WORKSHEET_SCENARIOS_BEST','Forecasts'));}
if(model.get('show_worksheet_worst')){arr.push(app.lang.get('LBL_FORECASTS_CONFIG_WORKSHEET_SCENARIOS_WORST','Forecasts'));}
this.titleSelectedValues=arr.join(', ');this.updateTitle();},this);this.model.trigger('change:scenarios',this.model);},_render:function(){this._super('_render');this.defaultSelect2=this.$('#scenariosLocked').select2({data:this.defaultOption,multiple:true,dropdownCss:{width:'auto'},dropdownCssClass:'search-related-dropdown',containerCss:"border: none",containerCssClass:'select2-choices-pills-close select2-container-disabled',escapeMarkup:function(m){return m;},initSelection:_.bind(function(element,callback){callback(this.defaultOption);},this)});this.$('.select2-container-disabled').width('auto');this.$('.select2-search-field').css('display','none');this.defaultSelect2.select2('val',this.defaultOption);this.defaultSelect2.select2('disable');var isRTL=app.lang.direction==='rtl';this.optionsSelect2=this.$('#scenariosSelect').select2({data:this.scenarioOptions,multiple:true,dropdownCss:{width:'auto',left:isRTL?'':'71px',right:isRTL?'71px':''},width:"90%",containerCss:"border: none",containerCssClass:"select2-choices-pills-close",escapeMarkup:function(m){return m;},initSelection:_.bind(function(element,callback){callback(this.selectedOptions);},this)});this.optionsSelect2.select2('val',this.selectedOptions);this.optionsSelect2.on('change',_.bind(this.handleScenarioModelChange,this));},handleScenarioModelChange:function(evt){var changedEnabled=[],changedDisabled=[],allOptions=[];_.each($(evt.target).val().split(','),function(option){changedEnabled.push(option);this.model.set(option,true,{silent:true});},this);_.each(this.scenarioOptions,function(option){allOptions.push(option.id);},this);changedDisabled=_.difference(allOptions,changedEnabled);_.each(changedDisabled,function(option){this.model.set(option,false,{silent:true});},this);this.model.trigger('change:scenarios',this.model);},formatCustomSelection:function(item){return'<a class="select2-choice-filter" rel="'+item.id+'" href="javascript:void(0)">'+item.text+'</a>';},_dispose:function(){if(this.defaultSelect2){this.defaultSelect2.off();this.defaultSelect2.select2('destroy');this.defaultSelect2=null;}
if(this.optionsSelect2){this.optionsSelect2.off();this.optionsSelect2.select2('destroy');this.optionsSelect2=null;}
this._super('_dispose');}}) },
"config-forecast-by": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config-forecast-by View (base) 
extendsFrom:'ConfigPanelView',_updateTitleValues:function(){this.titleSelectedValues=this.model.get('forecast_by');}}) },
"forecasts-chart": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Forecasts-chart View (base) 
plugins:['Dashlet'],values:new Backbone.Model(),className:'forecasts-chart-wrapper',initOptions:null,forecastManagerWorksheetContext:undefined,forecastWorksheetContext:undefined,initialize:function(options){this.values.clear({silent:true});this.once('init',this.findWorksheetContexts,this);this.once('render',function(){this.parseCollectionForData();},this);this._super('initialize',[options]);if(!this.meta.config){var ctx=this.context.parent,user=ctx.get('selectedUser')||app.user.toJSON(),showMgr=ctx.get('model').get('forecastType')=='Rollup';this.values.set({user_id:user.id,display_manager:showMgr,show_target_quota:(user.is_manager&&!user.is_top_level_manager),ranges:ctx.get('selectedRanges')||['include'],timeperiod_id:ctx.get('selectedTimePeriod'),dataset:'likely',group_by:'forecast',no_data:true});}},initDashlet:function(){var fieldOptions,cfg=app.metadata.getModule('Forecasts','config');fieldOptions=app.lang.getAppListStrings(this.dashletConfig.dataset.options);this.dashletConfig.dataset.options={};if(cfg.show_worksheet_worst&&app.acl.hasAccess('view','ForecastWorksheets',app.user.get('id'),'worst_case')){this.dashletConfig.dataset.options['worst']=fieldOptions['worst'];}
if(cfg.show_worksheet_likely){this.dashletConfig.dataset.options['likely']=fieldOptions['likely'];}
if(cfg.show_worksheet_best&&app.acl.hasAccess('view','ForecastWorksheets',app.user.get('id'),'best_case')){this.dashletConfig.dataset.options['best']=fieldOptions['best'];}
this.dashletConfig.show_dataset=true;if(_.size(this.dashletConfig.dataset.options)<=1){this.dashletConfig.show_dataset=false;}},findWorksheetContexts:function(){_.filter(this.context.parent.children,function(item){if(item.get('module')=='ForecastWorksheets'){this.forecastWorksheetContext=item;return true;}else if(item.get('module')=='ForecastManagerWorksheets'){this.forecastManagerWorksheetContext=item;return true;}
return false;},this);var collection;if(this.forecastWorksheetContext){collection=this.forecastWorksheetContext.get('collection');if(collection){collection.on('change',this.repWorksheetChanged,this);collection.on('reset',function(collection){this.parseCollectionForData(collection);},this);}}
if(this.forecastManagerWorksheetContext){collection=this.forecastManagerWorksheetContext.get('collection');if(collection){collection.on('change',this.mgrWorksheetChanged,this);collection.on('reset',function(collection){this.parseCollectionForData(collection);},this);}}},parseCollectionForData:function(collection){if(this.meta.config){return;}
var field=this.getField('paretoChart');if(field&&!field.hasServerData()){field.once('chart:pareto:rendered',this.parseCollectionForData,this);return;}
if(this.values.get('display_manager')){this.parseManagerWorksheet(collection||this.forecastManagerWorksheetContext.get('collection'));}else{this.parseRepWorksheet(collection||this.forecastWorksheetContext.get('collection'));}},parseRepWorksheet:function(collection){var field=this.getField('paretoChart');if(field){var serverData=field.getServerData();serverData.data=collection.map(function(item){var i={id:item.get('id'),forecast:item.get('commit_stage'),probability:item.get('probability'),sales_stage:item.get('sales_stage'),likely:app.currency.convertWithRate(item.get('likely_case'),item.get('base_rate')),date_closed_timestamp:parseInt(item.get('date_closed_timestamp'))};if(!_.isUndefined(this.dashletConfig.dataset.options['best'])){i.best=app.currency.convertWithRate(item.get('best_case'),item.get('base_rate'));}
if(!_.isUndefined(this.dashletConfig.dataset.options['worst'])){i.worst=app.currency.convertWithRate(item.get('worst_case'),item.get('base_rate'));}
return i;},this);field.setServerData(serverData,true);}},parseManagerWorksheet:function(collection){var field=this.getField('paretoChart');if(field){var serverData=field.getServerData();serverData.data=collection.map(function(item){var i={id:item.get('id'),user_id:item.get('user_id'),name:item.get('name'),likely:app.currency.convertWithRate(item.get('likely_case'),item.get('base_rate')),likely_adjusted:app.currency.convertWithRate(item.get('likely_case_adjusted'),item.get('base_rate')),quota:app.currency.convertWithRate(item.get('quota'),item.get('base_rate'))};if(!_.isUndefined(this.dashletConfig.dataset.options['best'])){i.best=app.currency.convertWithRate(item.get('best_case'),item.get('base_rate'));i.best_adjusted=app.currency.convertWithRate(item.get('best_case_adjusted'),item.get('base_rate'));}
if(!_.isUndefined(this.dashletConfig.dataset.options['worst'])){i.worst=app.currency.convertWithRate(item.get('worst_case'),item.get('base_rate'));i.worst_adjusted=app.currency.convertWithRate(item.get('worst_case_adjusted'),item.get('base_rate'));}
return i;},this);serverData.quota=_.reduce(serverData.data,function(memo,item){return app.math.add(memo,item.quota,undefined,true);},0);field.setServerData(serverData);}},repWorksheetChanged:function(model){var changed=model.changed,changedField=_.keys(changed),field=this.getField('paretoChart'),serverData=field.getServerData();if(changedField.length==1&&changedField[0]=='date_closed'){changedField.push('date_closed_timestamp');changed.date_closed_timestamp=Math.round(+app.date.parse(changed.date_closed).getTime()/ 1000);model.set('date_closed_timestamp',changed.date_closed_timestamp,{silent:true});}
if(_.contains(changedField,'likely_case')){changed.likely=app.currency.convertWithRate(changed.likely_case,model.get('base_rate'));delete changed.likely_case;}
if(_.contains(changedField,'best_case')){changed.best=app.currency.convertWithRate(changed.best_case,model.get('base_rate'));delete changed.best_case;}
if(_.contains(changedField,'worst_case')){changed.worst=app.currency.convertWithRate(changed.worst_case,model.get('base_rate'));delete changed.worst_case;}
if(_.contains(changedField,'commit_stage')){changed.forecast=changed.commit_stage;delete changed.commit_stage;}
_.find(serverData.data,function(record,i,list){if(model.get('id')==record.id){list[i]=_.extend({},record,changed);return true;}
return false;});field.setServerData(serverData,_.contains(changedField,'probability'));},mgrWorksheetChanged:function(model){var fieldsChanged=_.keys(model.changed),changed=model.changed,field=this.getField('paretoChart');if(field&&field.hasServerData()){var serverData=field.getServerData();if(_.contains(fieldsChanged,'quota')){var q=parseInt(serverData.quota,10);q=app.math.add(app.math.sub(q,model.previous('quota')),model.get('quota'));serverData.quota=q;}else{var f=_.first(fieldsChanged),fieldChartName=f.replace('_case','');_.find(serverData.data,function(record,i,list){if(model.get('user_id')==record.user_id){list[i][fieldChartName]=changed[f];return true;}
return false;});}
field.setServerData(serverData);}},loadData:function(options){var field=this.getField('paretoChart');if(!_.isUndefined(field)){field.once('chart:pareto:rendered',this.parseCollectionForData,this);field.renderChart(options);}
if(options&&_.isFunction(options.complete)){options.complete();}},toggleRepOptionsVisibility:function(){this.$('div.groupByOptions').toggleClass('hide',this.values.get('display_manager')===true);},bindDataChange:function(){var meta=this.meta||this.initOptions.meta;if(meta.config){return;}
this.values.on('change:title',function(model,title){this.layout.setTitle(app.lang.get(this.meta.label)+title);},this);this.on('render',function(){var field=this.getField('paretoChart'),dashToolbar=this.layout.getComponent('dashlet-toolbar');if(dashToolbar){field.before('chart:pareto:render',function(){this.$("[data-action=loading]").removeClass(this.cssIconDefault).addClass(this.cssIconRefresh);},{},dashToolbar);field.on('chart:pareto:rendered',function(){this.$("[data-action=loading]").removeClass(this.cssIconRefresh).addClass(this.cssIconDefault);},dashToolbar);}
this.toggleRepOptionsVisibility();this.parseCollectionForData();},this);var ctx=this.context.parent;ctx.on('change:selectedUser',function(context,user){var displayMgr=ctx.get('model').get('forecastType')=='Rollup',showTargetQuota=(displayMgr&&!user.is_top_level_manager);this.values.set({user_id:user.id,display_manager:displayMgr,show_target_quota:showTargetQuota});this.toggleRepOptionsVisibility();},this);ctx.on('change:selectedTimePeriod',function(context,timePeriod){this.values.set({timeperiod_id:timePeriod});},this);ctx.on('change:selectedRanges',function(context,value){this.values.set({ranges:value});},this);},unbindData:function(){var ctx=this.context.parent;if(ctx){ctx.off(null,null,this);}
if(this.forecastManagerWorksheetContext&&this.forecastManagerWorksheetContext.get('collection')){this.forecastManagerWorksheetContext.get('collection').off(null,null,this);}
if(this.forecastWorksheetContext&&this.forecastWorksheetContext.get('collection')){this.forecastWorksheetContext.get('collection').off(null,null,this);}
if(this.context){this.context.off(null,null,this);}
if(this.values){this.values.off(null,null,this);}
this._super('unbindData');}}) }
}}
,
"layouts": {
"base": {
"config-drawer-content": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config-drawer-content Layout (base) 
extendsFrom:'ConfigDrawerContentLayout',timeperiodsTitle:undefined,timeperiodsText:undefined,scenariosTitle:undefined,scenariosText:undefined,rangesTitle:undefined,rangesText:undefined,forecastByTitle:undefined,forecastByText:undefined,wkstColumnsTitle:undefined,wkstColumnsText:undefined,_initHowTo:function(){var appLang=app.lang,forecastBy=app.metadata.getModule('Forecasts','config').forecast_by,forecastByLabels={forecastByModule:appLang.getAppListStrings('moduleList')[forecastBy],forecastByModuleSingular:appLang.getAppListStrings('moduleListSingular')[forecastBy]};this.timeperiodsTitle=appLang.get('LBL_FORECASTS_CONFIG_TITLE_TIMEPERIODS','Forecasts');this.timeperiodsText=appLang.get('LBL_FORECASTS_CONFIG_HELP_TIMEPERIODS','Forecasts');this.scenariosTitle=appLang.get('LBL_FORECASTS_CONFIG_TITLE_SCENARIOS','Forecasts');this.scenariosText=appLang.get('LBL_FORECASTS_CONFIG_HELP_SCENARIOS','Forecasts',forecastByLabels);this.rangesTitle=appLang.get('LBL_FORECASTS_CONFIG_TITLE_RANGES','Forecasts');this.rangesText=appLang.get('LBL_FORECASTS_CONFIG_HELP_RANGES','Forecasts',forecastByLabels);this.forecastByTitle=appLang.get('LBL_FORECASTS_CONFIG_HOWTO_TITLE_FORECAST_BY','Forecasts');this.forecastByText=appLang.get('LBL_FORECASTS_CONFIG_HELP_FORECAST_BY','Forecasts');this.wkstColumnsTitle=appLang.get('LBL_FORECASTS_CONFIG_TITLE_WORKSHEET_COLUMNS','Forecasts');this.wkstColumnsText=appLang.get('LBL_FORECASTS_CONFIG_HELP_WORKSHEET_COLUMNS','Forecasts');},_switchHowToData:function(helpId){switch(helpId){case'config-timeperiods':this.currentHowToData.title=this.timeperiodsTitle;this.currentHowToData.text=this.timeperiodsText;break;case'config-ranges':this.currentHowToData.title=this.rangesTitle;this.currentHowToData.text=this.rangesText;break;case'config-scenarios':this.currentHowToData.title=this.scenariosTitle;this.currentHowToData.text=this.scenariosText;break;case'config-forecast-by':this.currentHowToData.title=this.forecastByTitle;this.currentHowToData.text=this.forecastByText;break;case'config-worksheet-columns':this.currentHowToData.title=this.wkstColumnsTitle;this.currentHowToData.text=this.wkstColumnsText;break;}}}) },
"config-drawer": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config-drawer Layout (base) 
extendsFrom:'ConfigDrawerLayout',_checkModuleAccess:function(){var acls=app.user.getAcls().Forecasts,isSysAdmin=(app.user.get('type')=='admin'),isDev=(!_.has(acls,'developer'));return(isSysAdmin||isDev);},_checkModuleConfig:function(){return app.utils.checkForecastConfig();}}) },
"records": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Records Layout (base) 
isDirty:false,worksheetType:'',navigationMessage:"",initOptions:undefined,initialize:function(options){this.initOptions=options;var acls=app.user.getAcls().Forecasts,hasAccess=(!_.has(acls,'access')||acls.access=='yes');if(hasAccess){if(app.utils.checkForecastConfig()){this.syncInitData();}else{this.codeBlockForecasts('LBL_FORECASTS_MISSING_STAGE_TITLE','LBL_FORECASTS_MISSING_SALES_STAGE_VALUES');}}else{this.codeBlockForecasts('LBL_FORECASTS_ACLS_NO_ACCESS_TITLE','LBL_FORECASTS_ACLS_NO_ACCESS_MSG');}},codeBlockForecasts:function(title,msg){var alert=app.alert.show('no_access_to_forecasts',{level:'error',title:app.lang.get(title,'Forecasts')+':',messages:[app.lang.get(msg,'Forecasts')]});var $close=alert.getCloseSelector();$close.on('click',function(){$close.off();app.router.navigate('#Home',{trigger:true});});app.accessibility.run($close,'click');},loadData:function(){},bindDataChange:function(){if(!_.isUndefined(this.model)){this.collection.on('reset',function(){var lastCommit=_.first(this.collection.models);var commitDate=undefined;if(lastCommit instanceof Backbone.Model&&lastCommit.has('date_modified')){commitDate=lastCommit.get('date_modified');}
this.context.set({'currentForecastCommitDate':commitDate});},this);this.context.on('change:selectedUser',function(model,changed){var update={'selectedUserId':changed.id,'forecastType':app.utils.getForecastType(changed.is_manager,changed.showOpps)}
this.model.set(update);},this);this.model.on('change',function(){this.context.set({'currentForecastCommitDate':null},{silent:true});this.collection.fetch();},this);this.context.on('change:selectedTimePeriod',function(){this.context.set({'currentForecastCommitDate':null},{silent:true});this.collection.fetch();},this);this.context.on('forecasts:worksheet:commit',function(user,worksheet_type,forecast_totals){this.commitForecast(user,worksheet_type,forecast_totals);},this);this.context.on("forecasts:worksheet:dirty",function(type,isDirty){this.isDirty=isDirty;this.worksheetType=type;},this);this.context.on("forecasts:worksheet:navigationMessage",function(message){this.navigationMessage=message;},this);this.context.on("forecasts:user:changed",function(selectedUser,context){if(this.isDirty){app.alert.show('leave_confirmation',{level:'confirmation',messages:app.lang.get(this.navigationMessage,'Forecasts').split('<br>'),onConfirm:_.bind(function(){app.utils.getSelectedUsersReportees(selectedUser,context);},this),onCancel:_.bind(function(){this.context.trigger('forecasts:user:canceled');},this)});}else{app.utils.getSelectedUsersReportees(selectedUser,context);}},this);this.context.on('forecasts:timeperiod:changed',function(model,startEndDates){var onSuccess=_.bind(function(){this.context.set('selectedTimePeriod',model.get('selectedTimePeriod'));this._saveTimePeriodStatEndDates(startEndDates['start'],startEndDates['end']);},this);if(this.isDirty){app.alert.show('leave_confirmation',{level:'confirmation',messages:app.lang.get(this.navigationMessage,'Forecasts').split('<br>'),onConfirm:onSuccess,onCancel:_.bind(function(){this.context.trigger('forecasts:timeperiod:canceled');},this)});}else{onSuccess();}},this);}},_saveTimePeriodStatEndDates:function(startDate,endDate,doSilent)
{if(_.isUndefined(doSilent)||!_.isBoolean(doSilent)){doSilent=false;}
var userPref=app.date.convertFormat(app.user.getPreference('datepref')),systemPref='YYYY-MM-DD',dateObj={start:app.date(startDate,[userPref,systemPref]).format(systemPref),end:app.date(endDate,[userPref,systemPref]).format(systemPref)};if(!_.isUndefined(this.context)){this.context.set('selectedTimePeriodStartEnd',dateObj,{silent:doSilent});}
return dateObj;},openConfigDrawer:function(){if(app.drawer._components.length==0){app.router.navigate('Forecasts/config',{replace:true,trigger:true});}},syncInitData:function(options){var callbacks,url;options=options||{};options.success=_.bind(function(model,data,options){app.user.set(data.initData.userData);if(data.initData.forecasts_setup===0){this.openConfigDrawer();}else{this.initForecastsModule(data,options);}},this);var model=this.initOptions.context.get('model');callbacks=app.data.getSyncCallbacks('read',model,options);this.trigger("data:sync:start",'read',model,options);url=app.api.buildURL("Forecasts/init",null,null,options.params);app.api.call("read",url,null,callbacks);},initForecastsModule:function(data,options){var ctx=this.initOptions.context;ctx.once('change:selectedUser',this._onceInitSelectedUser,this);var ranges_key=app.user.lastState.buildKey('worksheet-filter','filter','ForecastWorksheets'),default_selection=app.user.lastState.get(ranges_key)||data.defaultSelections.ranges;ctx.set({currentForecastCommitDate:null,selectedTimePeriod:data.defaultSelections.timeperiod_id.id,selectedRanges:default_selection,selectedTimePeriodStartEnd:this._saveTimePeriodStatEndDates(data.defaultSelections.timeperiod_id.start,data.defaultSelections.timeperiod_id.end,true)},{silent:true});ctx.get('model').set({'selectedTimePeriod':data.defaultSelections.timeperiod_id.id},{silent:true});app.utils.getSelectedUsersReportees(app.user.toJSON(),ctx);},_onceInitSelectedUser:function(model,change){app.view.Layout.prototype.initialize.call(this,this.initOptions);this.model.set('selectedUserId',change.id,{silent:true});this.model.set('forecastType',app.utils.getForecastType(change.is_manager,change.showOpps));this.collection.sync=_.bind(this.sync,this);app.view.Layout.prototype.loadData.call(this);this.bindDataChange();if(!this.disposed)this.render();},sync:function(method,model,options){var callbacks,url;options=options||{};options.params=options.params||{};var args_filter=[],filter=null;if(this.context.has('selectedTimePeriod')){args_filter.push({"timeperiod_id":this.context.get('selectedTimePeriod')});}
if(this.model.has('selectedUserId')){args_filter.push({"user_id":this.model.get('selectedUserId')});args_filter.push({"forecast_type":this.model.get('forecastType')});}
if(!_.isEmpty(args_filter)){filter={"filter":args_filter};}
options.params.order_by='date_entered:DESC'
options=app.data.parseOptionsForSync(method,model,options);options.success=_.bind(function(model,data,options){if(!this.disposed){this.collection.reset(data);}},this);callbacks=app.data.getSyncCallbacks(method,model,options);this.collection.trigger("data:sync:start",method,model,options);url=app.api.buildURL("Forecasts/filter",null,null,options.params);app.api.call("create",url,filter,callbacks);},commitForecast:function(user,worksheet_type,forecast_totals){var forecast=new this.collection.model(),forecastType=app.utils.getForecastType(user.is_manager,user.showOpps),forecastData={};forecastData.commit_type=worksheet_type;forecastData.timeperiod_id=forecast_totals.timeperiod_id||this.context.get('selectedTimePeriod');forecastData.forecast_type=forecastType;forecast.save(forecastData,{success:_.bind(function(model,response){if(!this.disposed){this.collection.fetch();this.context.trigger("forecasts:worksheet:committed",worksheet_type,response);var msg,managerName;if(worksheet_type==='sales_rep'){if(user.is_manager){managerName=user.full_name;}else{managerName=user.reports_to_name;}}else{if(user.reports_to_id){managerName=user.reports_to_name;}}
if(managerName){msg=Handlebars.compile(app.lang.get('LBL_FORECASTS_WORKSHEET_COMMIT_SUCCESS_TO','Forecasts'))({manager:managerName});}else{msg=Handlebars.compile(app.lang.get('LBL_FORECASTS_WORKSHEET_COMMIT_SUCCESS','Forecasts'))();}
app.alert.show('success',{level:'success',autoClose:true,autoCloseDelay:10000,title:app.lang.get('LBL_FORECASTS_WIZARD_SUCCESS_TITLE','Forecasts')+':',messages:[msg]});}},this),error:_.bind(function(error){if(error.status===412){this.context.trigger('forecasts:worksheet:is_dirty',worksheet_type,false);}},this),silent:true,alerts:{'success':false}});}}) }
}}
,
"datas": {}

},
		"ForecastWorksheets":{"fieldTemplates": {
"base": {
"enum": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Enum FieldTemplate (base) 
extendsFrom:'EnumField',initialize:function(options){this.plugins=_.clone(this.plugins)||[];this.plugins.push('ClickToEdit');this._super("initialize",[options]);},_render:function(){this._super('_render');if(this.name==='commit_stage'&&this.$el.hasClass('disabled')){this.$el.addClass('list');}}}) },
"int": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Int FieldTemplate (base) 
extendsFrom:'IntField',initialize:function(options){this.plugins=_.clone(this.plugins)||[];this.plugins.push('ClickToEdit');this._super("initialize",[options]);}}) },
"parent": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Parent FieldTemplate (base) 
extendsFrom:'ParentField',_render:function(){if(this.model.get('parent_deleted')==1){this.deleted_value=this.model.get('name');this.options.viewName='deleted';}
this._super("_render");}}) },
"date": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Date FieldTemplate (base) 
extendsFrom:'DateField',_initPlugins:function(){this._super('_initPlugins');this.plugins=_.union(this.plugins,['ClickToEdit']);return this;}}) },
"currency": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Currency FieldTemplate (base) 
extendsFrom:'CurrencyField',initialize:function(options){this.plugins=_.clone(this.plugins)||[];this.plugins.push('ClickToEdit');this._super("initialize",[options]);}}) }
}}
,
"views": {
"base": {
"recordlist": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Recordlist View (base) 
extendsFrom:'RecordlistView',worksheetType:'sales_rep',totals:{},before_colspan:0,after_colspan:0,selectedUser:{},canEdit:true,filters:[],filteredCollection:new Backbone.Collection(),selectedTimeperiod:'',navigationMessage:'',routeNavigationMessage:'',displayNavigationMessage:false,hasCheckedForDraftRecords:false,previewModel:undefined,previewVisible:false,isCollectionSyncing:false,isLoadingCommits:false,noAccessDataErrorTemplate:undefined,targetURL:'',currentURL:'',totalsTemplateObj:undefined,initialize:function(options){this.plugins=_.without(this.plugins,'ReorderableColumns');this.plugins.push('CteTabbing','DirtyCollection');this._super('initialize',[options]);this.template=app.template.getView('flex-list',this.module);this.selectedUser=this.context.get('selectedUser')||this.context.parent.get('selectedUser')||app.user.toJSON();this.selectedTimeperiod=this.context.get('selectedTimePeriod')||this.context.parent.get('selectedTimePeriod')||'';this.context.set('skipFetch',!(this.selectedUser.showOpps||!this.selectedUser.is_manager));this.filters=this.context.get('selectedRanges')||this.context.parent.get('selectedRanges');this.collection.sync=_.bind(this.sync,this);this.noAccessDataErrorTemplate=app.template.getField('base','noaccess')(this);this.currentURL=Backbone.history.getFragment();},_dispose:function(){if(!_.isUndefined(this.context.parent)&&!_.isNull(this.context.parent)){this.context.parent.off(null,null,this);if(this.context.parent.has('collection')){this.context.parent.get('collection').off(null,null,this);}}
app.alert.dismiss('workshet_loading');app.routing.offBefore('route',this.beforeRouteHandler,this);$(window).off('beforeunload.'+this.worksheetType);this._super('_dispose');},bindDataChange:function(){if(!_.isUndefined(this.context.parent)&&!_.isUndefined(this.context.parent.get('model'))){if(this.context.parent.get('model').module=='Forecasts'){this.context.parent.on('button:export_button:click',function(){if(this.layout.isVisible()){this.exportCallback();}},this);this.before('render',function(){return this.beforeRenderCallback()},this);this.on('render',function(){this.renderCallback();if(this.previewVisible){this.decorateRow(this.previewModel);}},this);this.on('list:toggle:column',function(column,isVisible,columnMeta){this.calculateTotals();},this);this.context.parent.on('forecasts:worksheet:totals',function(totals,type){if(type==this.worksheetType&&this.layout.isVisible()){this.totalsTemplateObj={orderedFields:[]};var tpl=app.template.getView('recordlist.totals',this.module),filteredKey,totalValues;_.each(this._fields.visible,function(field){if(_.contains(['likely_case','best_case','worst_case'],field.name)){totalValues={};totalValues.fieldName=field.name;switch(field.name){case'worst_case':case'best_case':filteredKey=field.name.split('_')[0];break;case'likely_case':filteredKey='amount';break;}
totalValues.display=this.totals[field.name+'_display'];totalValues.access=this.totals[field.name+'_access'];totalValues.filtered=this.totals['filtered_'+filteredKey];totalValues.overall=this.totals['overall_'+filteredKey];this.totalsTemplateObj.orderedFields.push(totalValues);}},this);this.$('tfoot').remove();this.$('tbody').after(tpl(this));}},this);this.dirtyModels.on('add change reset',function(){if(this.layout.isVisible()){this.context.parent.trigger('forecasts:worksheet:dirty',this.worksheetType,this.dirtyModels.length>0);}},this);this.context.parent.on('change:selectedTimePeriod',function(model,changed){this.updateSelectedTimeperiod(changed);},this);this.context.parent.on('change:selectedUser',function(model,changed){this.updateSelectedUser(changed)},this);this.context.parent.on('button:save_draft_button:click',function(){if(this.layout.isVisible()){this.context.parent.once('forecasts:worksheet:saved',function(){this.setNavigationMessage(false,'','');this.cleanUpDirtyModels();this.refreshData();this.collection.once('reset',function(){this.context.parent.trigger('forecasts:worksheet:needs_commit',this.worksheetType);},this);},this);this.saveWorksheet(true);}},this);this.context.parent.on('button:commit_button:click',function(){if(this.layout.isVisible()){this.context.parent.once('forecasts:worksheet:saved',function(){this.context.parent.trigger('forecasts:worksheet:commit',this.selectedUser,this.worksheetType,this.getCommitTotals())},this);this.saveWorksheet(false);}},this);this.context.parent.on('change:currentForecastCommitDate',function(context,changed){if(this.layout.isVisible()){this.checkForDraftRows(changed);}},this);if(this.context.parent.has('collection')){var parentCollection=this.context.parent.get('collection');parentCollection.on('data:sync:start',function(){this.isLoadingCommits=true;},this);parentCollection.on('data:sync:complete',function(){this.isLoadingCommits=false;},this);}
this.collection.on('data:sync:start',function(){this.isCollectionSyncing=true;},this);this.collection.on('data:sync:complete',function(){this.isCollectionSyncing=false;},this);this.collection.on('reset',function(){this.setNavigationMessage(false,'','');this.cleanUpDirtyModels();var ctx=this.context.parent||this.context;ctx.trigger('forecasts:worksheet:is_dirty',this.worksheetType,false);if(this.isLoadingCommits===false){this.checkForDraftRows(ctx.get('currentForecastCommitDate'));}
this.filterCollection();},this);this.collection.on('change:commit_stage',function(model){if(!_.isEmpty(this.filters)&&_.indexOf(this.filters,model.get('commit_stage'))===-1){this.filterCollection();if(!this.disposed){this.render();}}else{var commitStage=model.get('commit_stage'),includedCommitStages=app.metadata.getModule('Forecasts','config').commit_stages_included,el=this.$('tr[name='+model.module+'_'+model.id+']'),isIncluded=_.include(includedCommitStages,commitStage);if(el){el.attr('data-forecast',commitStage);if(isIncluded&&!el.hasClass('included')){el.addClass('included');model.set({includedInForecast:true},{silent:true});}else if(!isIncluded&&el.hasClass('included')){el.removeClass('included');model.unset('includedInForecast');}}}},this);this.context.parent.on('change:selectedRanges',function(model,changed){this.filters=changed;this.once('render',function(){app.alert.dismiss('worksheet_filtering');});this.filterCollection();this.calculateTotals();if(!this.disposed)this.render();},this);this.context.parent.on('forecasts:worksheet:committed',function(){if(this.layout.isVisible()){this.setNavigationMessage(false,'','');this.cleanUpDirtyModels();var ctx=this.context.parent||this.context;ctx.trigger('forecasts:worksheet:is_dirty',this.worksheetType,false);this.refreshData();}},this);this.context.parent.on('forecasts:worksheet:is_dirty',function(worksheetType,is_dirty){if(this.worksheetType==worksheetType){if(is_dirty){this.setNavigationMessage(true,'LBL_WARN_UNSAVED_CHANGES','LBL_WARN_UNSAVED_CHANGES');}else{this.setNavigationMessage(false,'','');}}},this);app.routing.before('route',this.beforeRouteHandler,{},this);$(window).bind('beforeunload.'+this.worksheetType,_.bind(function(){var ret=this.showNavigationMessage('window');if(_.isString(ret)){return ret;}},this));}}
this.before('list:orderby',function(options){if(this.isDirty()){app.alert.show('leave_confirmation',{level:'confirmation',messages:app.lang.get('LBL_WARN_UNSAVED_CHANGES_CONFIRM_SORT','Forecasts'),onConfirm:_.bind(function(){this._setOrderBy(options);},this)});return false;}
return true;},undefined,this);this.collection.on('reset change',function(){this.calculateTotals();},this);if(!_.isUndefined(this.dirtyModels)){this.dirtyModels.on('add',function(){if(this.canEdit){var ctx=this.context.parent||this.context;ctx.trigger('forecasts:worksheet:is_dirty',this.worksheetType,true);}},this);}
this.layout.on('hide',function(){this.totals={};},this);this._super('bindDataChange');},beforeRouteHandler:function(){return this.showNavigationMessage('router');},defaultNavCallback:function(){this.displayNavigationMessage=false;app.router.navigate(this.targetURL,{trigger:true});},unbindData:function(){app.events.off(null,null,this);this._super('unbindData');},showNavigationMessage:function(type,callback){if(!_.isFunction(callback)){callback=this.defaultNavCallback;}
if(this.layout.isVisible()){var canEdit=this.dirtyCanEdit||this.canEdit;if(canEdit&&this.displayNavigationMessage){if(type=='window'){if(!_.isEmpty(this.routeNavigationMessage)){return app.lang.get(this.routeNavigationMessage,'Forecasts');}
return false;}
this.targetURL=Backbone.history.getFragment();app.router.navigate(this._currentUrl,{trigger:false,replace:true});app.alert.show('leave_confirmation',{level:'confirmation',messages:app.lang.get(this.navigationMessage,'Forecasts').split('<br>'),onConfirm:_.bind(function(){callback.call(this);},this)});return false;}}
return true;},setNavigationMessage:function(display,reload_label,route_label){this.displayNavigationMessage=display;this.navigationMessage=reload_label;this.routeNavigationMessage=route_label;this.context.parent.trigger('forecasts:worksheet:navigationMessage',this.navigationMessage);},exportCallback:function(){if(this.canEdit&&this.isDirty()){app.alert.show('leave_confirmation',{level:'confirmation',messages:app.lang.get('LBL_WORKSHEET_EXPORT_CONFIRM','Forecasts'),onConfirm:_.bind(function(){this.doExport();},this)});}else{this.doExport();}},doExport:function(){app.alert.show('massexport_loading',{level:'process',title:app.lang.get('LBL_LOADING')});var params={timeperiod_id:this.selectedTimeperiod,user_id:this.selectedUser.id,filters:this.filters,platform:app.config.platform};var url=app.api.buildURL(this.module,'export',null,params);app.api.fileDownload(url,{complete:function(data){app.alert.dismiss('massexport_loading');}},{iframe:this.$el});},beforeRenderCallback:function(){var showOpps=(_.isUndefined(this.selectedUser.showOpps))?false:this.selectedUser.showOpps,isManager=(_.isUndefined(this.selectedUser.is_manager))?true:this.selectedUser.is_manager;if(!(showOpps||!isManager)&&this.layout.isVisible()){this.layout.hide();}else if((showOpps||!isManager)&&!this.layout.isVisible()){this.layout.once('show',this.calculateTotals,this);this.layout.show();}
this.leftColumns=[];return(showOpps||!isManager);},renderCallback:function(){var user=this.selectedUser||this.context.parent.get('selectedUser')||app.user.toJSON()
if(user.showOpps||!user.is_manager){if(!this.layout.isVisible()){this.layout.show();}
if(this.filteredCollection.length==0){var tpl=app.template.getView('recordlist.noresults',this.module);this.$('tbody').html(tpl(this));}
if(!_.isEmpty(this.totals)&&this.layout.isVisible()){var tpl=app.template.getView('recordlist.totals',this.module);this.$('tbody').after(tpl(this));}
var sales_stage_width=this.$('td[data-field-name="sales_stage"] span.isEditable').width();var sales_stage_outerwidth=this.$('td[data-field-name="sales_stage"] span.isEditable').outerWidth();this.$('td[data-field-name="sales_stage"] span.isEditable').width(sales_stage_width+20);this.$('td[data-field-name="sales_stage"] span.isEditable').parent('td').css('min-width',sales_stage_outerwidth+26+'px');this.setRowActionButtonStates();}else{if(this.layout.isVisible()){this.layout.hide();}}},updateSelectedUser:function(changed){var doFetch=false;if(this.selectedUser.id!=changed.id){doFetch=(changed.showOpps||!changed.is_manager);}
if(!doFetch&&(changed.showOpps||!changed.is_manager)){doFetch=true;}
if(this.displayNavigationMessage){this.dirtyUser=this.selectedUser;this.dirtyCanEdit=this.canEdit;}
this.cleanUpDirtyModels();this.selectedUser=changed;this.canEdit=(this.selectedUser.id==app.user.get('id'));this.hasCheckedForDraftRecords=false;if(doFetch){this.refreshData();}else{if((!this.selectedUser.showOpps&&this.selectedUser.is_manager)&&this.layout.isVisible()){this.layout.hide();}}},updateSelectedTimeperiod:function(changed){if(this.displayNavigationMessage){this.dirtyTimeperiod=this.selectedTimeperiod;}
this.selectedTimeperiod=changed;this.hasCheckedForDraftRecords=false;if(this.layout.isVisible()){this.refreshData();}},checkForDraftRows:function(lastCommitDate){if(this.layout.isVisible()&&this.canEdit&&this.hasCheckedForDraftRecords===false&&!_.isEmpty(this.collection.models)&&this.isCollectionSyncing===false){this.hasCheckedForDraftRecords=true;if(_.isUndefined(lastCommitDate)){this.context.parent.trigger('forecasts:worksheet:needs_commit',this.worksheetType);}else{this.collection.find(function(item){if(item.get('date_modified')>lastCommitDate){this.context.parent.trigger('forecasts:worksheet:needs_commit',this.worksheetType);return true;}
return false;},this);}}else if(this.layout.isVisible()===false&&this.canEdit&&this.hasCheckedForDraftRecords===false){this.layout.once('show',function(){this.checkForDraftRows(lastCommitDate);},this);}else if(this.isCollectionSyncing===true){this.collection.once('data:sync:complete',function(){this.checkForDraftRows(lastCommitDate);},this);}},setRowActionButtonStates:function(){_.each(this.fields,function(field){if(field.def.event==='list:preview:fire'){field.setDisabled((field.model.get('parent_deleted')=='1'));field.render();}});},filterCollection:function(){this.filteredCollection.reset();if(_.isEmpty(this.filters)){this.filteredCollection.add(this.collection.models);}else{this.collection.each(function(model){if(_.indexOf(this.filters,model.get('commit_stage'))!==-1){this.filteredCollection.add(model);}},this);}},saveWorksheet:function(isDraft){var totalToSave=0;if(this.layout.isVisible()){var saveCount=0,ctx=this.context.parent||this.context;if(this.isDirty()){totalToSave=this.dirtyModels.length;this.dirtyModels.each(function(model){model.set({draft:(isDraft&&isDraft==true)?1:0,timeperiod_id:this.dirtyTimeperiod||this.selectedTimeperiod,current_user:this.dirtyUser.id||this.selectedUser.id},{silent:true});model.save({},{success:_.bind(function(){saveCount++;if(this.previewVisible){var previewId=this.previewModel.get('parent_id')||this.previewModel.get('id');if(model.get('parent_id')==previewId){var previewCollection=new Backbone.Collection();this.filteredCollection.each(function(model){if(model.get('parent_deleted')!=='1'){previewCollection.add(model);}},this);app.events.trigger('preview:render',model,previewCollection,true,model.get('id'),true);}}
if(totalToSave===saveCount){if(isDraft){app.alert.show('success',{level:'success',autoClose:true,autoCloseDelay:10000,title:app.lang.get('LBL_FORECASTS_WIZARD_SUCCESS_TITLE','Forecasts')+':',messages:[app.lang.get('LBL_FORECASTS_WORKSHEET_SAVE_DRAFT_SUCCESS','Forecasts')]});}
ctx.trigger('forecasts:worksheet:saved',totalToSave,this.worksheetType,isDraft);}},this),silent:true,alerts:{'success':false}});},this);this.cleanUpDirtyModels();}else{if(isDraft){app.alert.show('success',{level:'success',autoClose:true,autoCloseDelay:10000,title:app.lang.get('LBL_FORECASTS_WIZARD_SUCCESS_TITLE','Forecasts')+':',messages:[app.lang.get('LBL_FORECASTS_WORKSHEET_SAVE_DRAFT_SUCCESS','Forecasts')]});}
ctx.trigger('forecasts:worksheet:saved',totalToSave,this.worksheetType,isDraft);}}
return totalToSave},calculateTotals:function(){if(this.layout.isVisible()){this.totals=this.getCommitTotals();var calcFields=['worst_case','best_case','likely_case'],fields=_.filter(this._fields.visible,function(field){if(_.contains(calcFields,field.name)){this.totals[field.name+'_access']=app.acl.hasAccess('read',this.module,app.user.get('id'),field.name);this.totals[field.name+'_display']=true;return true;}
return false;},this);for(var x=0;x<this._fields.visible.length;x++){var f=this._fields.visible[x];if(_.contains(calcFields,f.name)){break;}}
this.before_colspan=x;this.after_colspan=(this._fields.visible.length-(x+fields.length));var ctx=this.context.parent||this.context;ctx.trigger('forecasts:worksheet:totals',this.totals,this.worksheetType);}},displayLoadingMessage:function(){app.alert.show('workshet_loading',{level:'process',title:app.lang.get('LBL_LOADING')});this.collection.once('reset',function(){app.alert.dismiss('workshet_loading');},this);},refreshData:function(){this.displayLoadingMessage();this.collection.fetch();},sync:function(method,model,options){var callbacks,url;options=options||{};options.params=options.params||{};if(!_.isUndefined(this.selectedUser.id)){options.params.user_id=this.selectedUser.id;}
if(!_.isEmpty(this.selectedTimeperiod)){options.params.timeperiod_id=this.selectedTimeperiod;}
options.limit=1000;options=app.data.parseOptionsForSync(method,model,options);if(!_.isUndefined(options.params.order_by)&&options.params.order_by.indexOf('parent_name')===0){options.params.order_by=options.params.order_by.replace('parent_','');}
options.success=_.bind(function(model,data,options){if(!this.disposed){this.collection.reset(data);}},this);callbacks=app.data.getSyncCallbacks(method,model,options);this.collection.trigger('data:sync:start',method,model,options);url=app.api.buildURL('ForecastWorksheets',null,null,options.params);app.api.call('read',url,null,callbacks);},getCommitTotals:function(){var includedAmount=0,includedBest=0,includedWorst=0,filteredAmount=0,filteredBest=0,filteredWorst=0,filteredCount=0,overallAmount=0,overallBest=0,overallWorst=0,includedCount=0,lostCount=0,lostAmount=0,lostBest=0,lostWorst=0,wonCount=0,wonAmount=0,wonBest=0,wonWorst=0,includedClosedCount=0,includedClosedAmount=0,cfg=app.metadata.getModule('Forecasts','config'),startEndDates=this.context.get('selectedTimePeriodStartEnd')||this.context.parent.get('selectedTimePeriodStartEnd'),activeFilters=this.context.get('selectedRanges')||this.context.parent.get('selectedRanges')||[];var sales_stage_won_setting=cfg.sales_stage_won||[],sales_stage_lost_setting=cfg.sales_stage_lost||[];var commit_stages_in_included_total=['include'];if(cfg.forecast_ranges=='show_custom_buckets'){commit_stages_in_included_total=cfg.commit_stages_included;}
this.collection.each(function(model){if(app.date(model.get('date_closed')).isBetween(startEndDates['start'],startEndDates['end'])){var won=_.include(sales_stage_won_setting,model.get('sales_stage')),lost=_.include(sales_stage_lost_setting,model.get('sales_stage')),commit_stage=model.get('commit_stage'),base_rate=model.get('base_rate'),worst_base=app.currency.convertWithRate(model.get('worst_case'),base_rate)||0,amount_base=app.currency.convertWithRate(model.get('likely_case'),base_rate)||0,best_base=app.currency.convertWithRate(model.get('best_case'),base_rate)||0,includedInForecast=_.include(commit_stages_in_included_total,commit_stage),includedInFilter=_.include(activeFilters,commit_stage);if(won&&includedInForecast){wonAmount=app.math.add(wonAmount,amount_base);wonBest=app.math.add(wonBest,best_base);wonWorst=app.math.add(wonWorst,worst_base);wonCount++;includedClosedCount++;includedClosedAmount=app.math.add(amount_base,includedClosedAmount);}else if(lost){lostAmount=app.math.add(lostAmount,amount_base);lostBest=app.math.add(lostBest,best_base);lostWorst=app.math.add(lostWorst,worst_base);lostCount++;}
if(includedInFilter||_.isEmpty(activeFilters)){filteredAmount=app.math.add(filteredAmount,amount_base);filteredBest=app.math.add(filteredBest,best_base);filteredWorst=app.math.add(filteredWorst,worst_base);filteredCount++;}
if(includedInForecast){includedAmount=app.math.add(includedAmount,amount_base);includedBest=app.math.add(includedBest,best_base);includedWorst=app.math.add(includedWorst,worst_base);includedCount++;model.set({includedInForecast:true},{silent:true});}else if(model.has('includedInForecast')){model.unset('includedInForecast');}
overallAmount=app.math.add(overallAmount,amount_base);overallBest=app.math.add(overallBest,best_base);overallWorst=app.math.add(overallWorst,worst_base);}},this);return{'likely_case':includedAmount,'best_case':includedBest,'worst_case':includedWorst,'overall_amount':overallAmount,'overall_best':overallBest,'overall_worst':overallWorst,'filtered_amount':filteredAmount,'filtered_best':filteredBest,'filtered_worst':filteredWorst,'timeperiod_id':this.dirtyTimeperiod||this.selectedTimeperiod,'lost_count':lostCount,'lost_amount':lostAmount,'won_count':wonCount,'won_amount':wonAmount,'included_opp_count':includedCount,'total_opp_count':this.collection.length,'closed_count':includedClosedCount,'closed_amount':includedClosedAmount};},addPreviewEvents:function(){this.context.on('list:preview:fire',function(model){var previewCollection=new Backbone.Collection();this.filteredCollection.each(function(model){if(model.get('parent_deleted')!=='1'){previewCollection.add(model);}},this);if(_.isUndefined(this.previewModel)||model.get('id')!=this.previewModel.get('id')){this.previewModel=model;app.events.trigger('preview:render',model,previewCollection,true);}else{this.decorateRow();app.events.trigger('preview:close');}},this);app.events.on('list:preview:decorate',this.decorateRow,this);if(this.layout){this.layout.on('list:sort:fire',function(){app.events.trigger('preview:close');},this);}
app.events.on('preview:render',function(model){this.previewModel=model;this.previewVisible=true;},this);app.events.on('preview:close',function(){this.previewVisible=false;this.previewModel=undefined;},this);}}) },
"filter": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Filter View (base) 
events:{'keydown .select2-input':'disableSelect2KeyPress'},disableSelect2KeyPress:function(event){event.preventDefault();},userLastWorksheetFilterKey:undefined,initialize:function(options){this._super('initialize',[options]);this.userLastWorksheetFilterKey=app.user.lastState.key('worksheet-filter',this);this.selectedUser={id:app.user.get('id'),is_manager:app.user.get('is_manager'),showOpps:false};},bindDomChange:function(){},_render:function(){app.view.View.prototype._render.call(this);this.node=this.$el.find("#"+this.cid);this._setUpFilters();return this;},_setUpFilters:function(){var ctx=this.context.parent||this.context,user_ranges=app.user.lastState.get(this.userLastWorksheetFilterKey),selectedRanges=user_ranges||ctx.get('selectedRanges')||app.defaultSelections.ranges;this.node.select2({data:this._getRangeFilters(),initSelection:function(element,callback){callback(_.filter(this.data,function(obj){return _.contains(this,obj.id);},$(element.val().split(","))));},multiple:true,placeholder:app.lang.get("LBL_MODULE_FILTER"),dropdownCss:{width:"auto"},containerCssClass:"select2-choices-pills-close",containerCss:"border: none",formatSelection:this.formatCustomSelection,dropdownCssClass:"search-filter-dropdown",escapeMarkup:function(m){return m;},width:'100%'});this.node.select2("val",selectedRanges);this.node.change({context:ctx},_.bind(function(event){app.alert.show('worksheet_filtering',{level:'process',title:app.lang.get('LBL_LOADING')});app.user.lastState.set(this.userLastWorksheetFilterKey,event.val);_.delay(function(){event.data.context.set('selectedRanges',event.val);},25);},this));},formatCustomSelection:function(item){return'<span class="select2-choice-type" disabled="disabled">'+app.lang.get("LBL_FILTER")+'</span><a class="select2-choice-filter" rel="'+item.id+'" href="javascript:void(0)">'+item.text+'</a>';},_getRangeFilters:function(){var options=app.metadata.getModule('Forecasts','config').buckets_dom||'commit_stage_binary_dom';return _.map(app.lang.getAppListStrings(options),function(value,key){return{id:key,text:value};});}}) }
}}
,
"layouts": {}
,
"datas": {}

},
		"ForecastManagerWorksheets":{"fieldTemplates": {
"base": {
"userLink": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// UserLink FieldTemplate (base) 
events:{'click a.worksheetManagerLink':'linkClicked'},plugins:['EllipsisInline'],uid:'',initialize:function(options){this.uid=this.model.get('user_id');app.view.Field.prototype.initialize.call(this,options);return this;},format:function(value){var su=this.context.get('selectedUser')||this.context.parent.get('selectedUser')||app.user.toJSON();if(value==su.full_name&&su.id==app.user.get('id')){var hb=Handlebars.compile("{{str key module context}}");value=hb({'key':'LBL_MY_MANAGER_LINE','module':this.module,'context':su});}
return value;},linkClicked:function(event){var uid=$(event.target).data('uid');var selectedUser={id:'',user_name:'',full_name:'',first_name:'',last_name:'',is_manager:false,showOpps:false,reportees:[]};var options={dataType:'json',success:_.bind(function(data){selectedUser.id=data.id;selectedUser.user_name=data.user_name;selectedUser.full_name=data.full_name;selectedUser.first_name=data.first_name;selectedUser.last_name=data.last_name;selectedUser.is_manager=data.is_manager;selectedUser.reports_to_id=data.reports_to_id;selectedUser.reports_to_name=data.reports_to_name;selectedUser.is_top_level_manager=data.is_top_level_manager||(data.is_manager&&_.isEmpty(data.reports_to_id));var su=this.context.get('selectedUser')||this.context.parent.get('selectedUser')||app.user.toJSON();selectedUser.showOpps=(su.id==data.id);this.context.parent.trigger("forecasts:user:changed",selectedUser,this.context.parent);},this)};myURL=app.api.buildURL('Forecasts','user/'+uid);app.api.call('read',myURL,null,options);}}) },
"commithistory": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Commithistory FieldTemplate (base) 
initialize:function(options){this._super('initialize',[options]);this.on('render',function(){this.loadData();},this);},loadData:function(){var ctx=this.context.parent||this.context,su=ctx.get('selectedUser')||app.user.toJSON(),isManager=this.model.get('is_manager'),showOpps=(su.id==this.model.get('user_id'))?1:0,forecastType=app.utils.getForecastType(isManager,showOpps),args_filter=[],options={},url;args_filter.push({"user_id":this.model.get('user_id')},{"forecast_type":forecastType},{"timeperiod_id":this.view.selectedTimeperiod});url={"url":app.api.buildURL('Forecasts','filter'),"filters":{"filter":args_filter}};options.success=_.bind(function(data){this.buildLog(data);},this);app.api.call('create',url.url,url.filters,options,{context:this});},buildLog:function(data){data=data.records;var ctx=this.context.parent||this.context,forecastCommitDate=ctx.get('currentForecastCommitDate'),commitDate=app.date(forecastCommitDate),newestModel=new Backbone.Model(_.first(data)),otherModels=_.last(data,data.length-1),oldestModel={},displayCommitDate=newestModel.get('date_modified');for(var i=0;i<otherModels.length;i++){if(app.date(otherModels[i].date_modified)<=commitDate){oldestModel=new Backbone.Model(otherModels[i]);break;}}
var tpl=app.template.getField(this.type,'log',this.module);this.$el.html(tpl({commit:app.utils.createHistoryLog(oldestModel,newestModel).text,commit_date:displayCommitDate}));},_render:function(){this.$el=this.view.$('span[sfuuid="'+this.sfId+'"]');this._super('_render');}}) },
"currency": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Currency FieldTemplate (base) 
extendsFrom:'CurrencyField',initialize:function(options){this.plugins=_.clone(this.plugins)||[];this.plugins.push('ClickToEdit');this._super("initialize",[options]);}}) }
}}
,
"views": {
"base": {
"recordlist": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Recordlist View (base) 
extendsFrom:'RecordlistView',worksheetType:'manager',selectedUser:{},canEdit:true,selectedTimeperiod:{},totals:{},defaultValues:{id:'',quota:'0',best_case:'0',best_case_adjusted:'0',likely_case:'0',likely_case_adjusted:'0',worst_case:'0',worst_case_adjusted:'0',show_history_log:0},navigationMessage:'',routeNavigationMessage:'',displayNavigationMessage:false,hasCheckedForDraftRecords:false,draftSaveType:undefined,isCollectionSyncing:false,isLoadingCommits:false,targetURL:'',currentURL:'',initialize:function(options){this.plugins=_.without(this.plugins,'ReorderableColumns');this.plugins.push('CteTabbing');this.plugins.push('DirtyCollection');this._super("initialize",[options]);this.template=app.template.getView('flex-list',this.module);this.selectedUser=this.context.get('selectedUser')||this.context.parent.get('selectedUser')||app.user.toJSON();this.selectedTimeperiod=this.context.get('selectedTimePeriod')||this.context.parent.get('selectedTimePeriod')||'';this.context.set('skipFetch',(this.selectedUser.is_manager&&this.selectedUser.showOpps));this.collection.sync=_.bind(this.sync,this);this.currentURL=Backbone.history.getFragment();},_dispose:function(){if(!_.isUndefined(this.context.parent)&&!_.isNull(this.context.parent)){this.context.parent.off(null,null,this);if(this.context.parent.has('collection')){this.context.parent.get('collection').off(null,null,this);}}
app.routing.offBefore('route',this.beforeRouteHandler,this);$(window).off("beforeunload."+this.worksheetType);this._super("_dispose");},bindDataChange:function(){if(!_.isUndefined(this.context.parent)&&!_.isUndefined(this.context.parent.get('model'))){if(this.context.parent.get('model').module=='Forecasts'){this.context.parent.on('button:export_button:click',function(){if(this.layout.isVisible()){this.exportCallback();}},this);this.before('render',function(){return this.beforeRenderCallback();},true);this.on('render',function(){this.renderCallback();},this);this.on('list:toggle:column',function(column,isVisible,columnMeta){this.calculateTotals();},this);this.context.parent.on('button:save_draft_button:click',function(){if(this.layout.isVisible()){this.context.parent.once('forecasts:worksheet:saved',function(){this.setNavigationMessage(false,'','');this.context.parent.trigger('forecasts:worksheet:needs_commit',this.worksheetType);},this);this.draftSaveType='draft';this.saveWorksheet(true);}},this);this.context.parent.on('button:commit_button:click',function(){if(this.layout.isVisible()){this.context.parent.once('forecasts:worksheet:saved',function(){this.context.parent.trigger('forecasts:worksheet:commit',this.selectedUser,this.worksheetType,this.getCommitTotals())},this);this.draftSaveType='commit';this.saveWorksheet(false);}},this);this.dirtyModels.on("add change reset",function(){if(this.layout.isVisible()){this.context.parent.trigger("forecasts:worksheet:dirty",this.worksheetType,this.dirtyModels.length>0);}},this);this.context.parent.on('change:selectedTimePeriod',function(model,changed){this.updateSelectedTimeperiod(changed);},this);this.context.parent.on('forecasts:worksheet:totals',function(totals,type){if(type==this.worksheetType){var tpl=app.template.getView('recordlist.totals',this.module);this.$el.find('tfoot').remove();this.$el.find('tbody').after(tpl(this));}},this);this.context.parent.on('change:selectedUser',function(model,changed){this.updateSelectedUser(changed);},this);this.context.parent.on('change:currentForecastCommitDate',function(context,changed){if(this.layout.isVisible()){this.checkForDraftRows(changed);}},this);if(this.context.parent.has('collection')){var parentCollection=this.context.parent.get('collection');parentCollection.on('data:sync:start',function(){this.isLoadingCommits=true;},this);parentCollection.on('data:sync:complete',function(){this.isLoadingCommits=false;},this);}
this.collection.on('data:sync:start',function(){this.isCollectionSyncing=true;},this);this.collection.on('data:sync:complete',function(){this.isCollectionSyncing=false;},this);this.collection.on('reset',function(){var ctx=this.context.parent||this.context;ctx.trigger('forecasts:worksheet:is_dirty',this.worksheetType,false);if(this.isLoadingCommits===false){this.checkForDraftRows(ctx.get('currentForecastCommitDate'));}},this);this.collection.on('change:quota',function(model,changed){var ctx=this.context.parent||this.context;ctx.trigger('forecasts:worksheet:quota_changed',this.worksheetType);},this);this.context.parent.on('forecasts:worksheet:committed',function(){if(this.layout.isVisible()){var ctx=this.context.parent||this.context;ctx.trigger('forecasts:worksheet:is_dirty',this.worksheetType,false);this.refreshData();this.hasCheckedForDraftRecords=true;}},this);this.context.parent.on('forecasts:worksheet:is_dirty',function(worksheetType,is_dirty){if(this.worksheetType==worksheetType){if(is_dirty){this.setNavigationMessage(true,'LBL_WARN_UNSAVED_CHANGES','LBL_WARN_UNSAVED_CHANGES');}else{this.cleanUpDirtyModels();this.setNavigationMessage(false,'','');}}},this);this.context.parent.on('button:assign_quota:click',function(){this.context.parent.once('forecasts:worksheet:saved',function(){this.setNavigationMessage(false,'','');this.context.parent.trigger('forecasts:assign_quota',this.worksheetType,this.selectedUser,this.selectedTimeperiod);},this);app.alert.show('saving_quota',{level:'process',title:app.lang.get('LBL_ASSIGNING_QUOTA','Forecasts')});this.draftSaveType='assign_quota';this.saveWorksheet(true,true);},this);this.context.parent.on('forecasts:quota_assigned',function(){this.refreshData();},this);app.routing.before('route',this.beforeRouteHandler,{},this);$(window).bind("beforeunload."+this.worksheetType,_.bind(function(){if(!this.disposed){var ret=this.showNavigationMessage('window');if(_.isString(ret)){return ret;}}},this));}}
if(!_.isUndefined(this.dirtyModels)){this.dirtyModels.on('add',function(){var ctx=this.context.parent||this.context;ctx.trigger('forecasts:worksheet:is_dirty',this.worksheetType,true);},this);}
this.context.on('list:history_log:fire',function(model,e){var row_name=model.module+'_'+model.id;var log_row=this.$el.find('tr[name="'+row_name+'_commit_history"]');var field;if(log_row.length==1){log_row.remove();field=_.find(this.fields,function(field,idx){return(field.name==row_name+'_commit_history');},this);field.dispose();}else{var rowTpl=app.template.getView('recordlist.commithistory',this.module);field=app.view.createField({def:{'type':'commithistory','name':row_name+'_commit_history'},view:this,model:model});this.$el.find('tr[name="'+row_name+'"]').after(rowTpl({module:this.module,id:model.id,placeholder:field.getPlaceholder(),colspan:this._fields.visible.length+this.leftColumns.length+this.rightColumns.length}));field.render();}},this);this.before('list:orderby',function(options){if(this.isDirty()){app.alert.show('leave_confirmation',{level:'confirmation',messages:app.lang.get('LBL_WARN_UNSAVED_CHANGES_CONFIRM_SORT','Forecasts'),onConfirm:_.bind(function(){this._setOrderBy(options);},this)});return false;}
return true;},undefined,this);this.collection.on('reset change',function(){this.calculateTotals();},this);this.layout.on('hide',function(){this.totals={};},this);this._super("bindDataChange");},beforeRouteHandler:function(){return this.showNavigationMessage('router');},defaultNavCallback:function(){this.displayNavigationMessage=false;app.router.navigate(this.targetURL,{trigger:true});},showNavigationMessage:function(type,callback){if(!_.isFunction(callback)){callback=this.defaultNavCallback;}
if(this.layout.isVisible()){var canEdit=this.dirtyCanEdit||this.canEdit;if(canEdit&&this.displayNavigationMessage){if(type=='window'){if(!_.isEmpty(this.routeNavigationMessage)){return app.lang.get(this.routeNavigationMessage,'Forecasts');}
return false;}
this.targetURL=Backbone.history.getFragment();app.router.navigate(this._currentUrl,{trigger:false,replace:true});app.alert.show('leave_confirmation',{level:'confirmation',messages:app.lang.get(this.navigationMessage,'Forecasts').split('<br>'),onConfirm:_.bind(function(){callback.call(this);},this)});return false;}}
return true;},setNavigationMessage:function(display,reload_label,route_label){this.displayNavigationMessage=display;this.navigationMessage=reload_label;this.routeNavigationMessage=route_label;this.context.parent.trigger("forecasts:worksheet:navigationMessage",this.navigationMessage);},refreshData:function(){this.displayLoadingMessage();this.collection.fetch();},displayLoadingMessage:function(){app.alert.show('workshet_loading',{level:'process',title:app.lang.get('LBL_LOADING')});this.collection.once('reset',function(){app.alert.dismiss('workshet_loading');},this);},exportCallback:function(){if(this.canEdit&&this.isDirty()){app.alert.show('leave_confirmation',{level:'confirmation',messages:app.lang.get('LBL_WORKSHEET_EXPORT_CONFIRM','Forecasts'),onConfirm:_.bind(function(){this.doExport();},this)});}else{this.doExport();}},doExport:function(){app.alert.show('massexport_loading',{level:'process',title:app.lang.get('LBL_LOADING')});var params={timeperiod_id:this.selectedTimeperiod,user_id:this.selectedUser.id,platform:app.config.platform};var url=app.api.buildURL(this.module,'export/',null,params);app.api.fileDownload(url,{complete:function(data){app.alert.dismiss('massexport_loading');}},{iframe:this.$el});},beforeRenderCallback:function(){var ret=true;if(_.isUndefined(this.selectedUser.is_manager)||this.selectedUser.is_manager==false){ret=false;}
if(ret){ret=!(this.selectedUser.showOpps);}
if(ret===false&&this.layout.isVisible()){this.layout.hide();}
var quotaLabel=_.isEmpty(this.selectedUser.reports_to_id)?'LBL_QUOTA':'LBL_QUOTA_ADJUSTED';_.each(this._fields,function(fields){_.each(fields,function(field){if(field.name=='quota'){field.label=quotaLabel;}});});this.leftColumns=[];return ret;},renderCallback:function(){var user=this.selectedUser||this.context.parent.get('selectedUser')||app.user.toJSON();if(user.is_manager&&user.showOpps==false){if(!this.layout.isVisible()){this.layout.once('show',this.calculateTotals,this);this.layout.show();}
if(!_.isEmpty(this.totals)&&this.layout.isVisible()){var tpl=app.template.getView('recordlist.totals',this.module);this.$el.find('tfoot').remove();this.$el.find('tbody').after(tpl(this));}
this.setCommitLogButtonStates();}else{if(this.layout.isVisible()){this.layout.hide();}}},updateSelectedTimeperiod:function(changed){if(this.displayNavigationMessage){this.dirtyTimeperiod=this.selectedTimeperiod;}
this.selectedTimeperiod=changed;if(this.layout.isVisible()){this.refreshData();}},updateSelectedUser:function(changed){var doFetch=false;if(this.selectedUser.id!=changed.id){doFetch=true;}
if(!doFetch&&this.selectedUser.is_manager!=changed.is_manager){doFetch=true;}
if(!doFetch&&this.selectedUser.showOpps!=changed.showOpps){doFetch=!(changed.showOpps);}
if(this.displayNavigationMessage){this.dirtyUser=this.selectedUser;this.dirtyCanEdit=this.canEdit;}
this.selectedUser=changed;this.canEdit=(this.selectedUser.id==app.user.get('id'));this.cleanUpDirtyModels();if(doFetch){this.refreshData();}else{if(this.selectedUser.is_manager&&this.selectedUser.showOpps&&this.layout.isVisible()){this.layout.hide();}}},checkForDraftRows:function(lastCommitDate){var isVisible=this.layout.isVisible();if(isVisible&&this.canEdit&&!_.isUndefined(lastCommitDate)&&this.collection.length!==0&&this.hasCheckedForDraftRecords===false&&this.isCollectionSyncing===false){this.hasCheckedForDraftRecords=true;this.collection.find(function(item){if(item.get('date_modified')>lastCommitDate){this.context.parent.trigger('forecasts:worksheet:needs_commit',this.worksheetType);return true;}
return false;},this);}else if(isVisible&&this.canEdit&&_.isUndefined(lastCommitDate)&&!this.collection.isEmpty){this.context.parent.trigger('forecasts:worksheet:needs_commit',this.worksheetType);}else if(isVisible===false&&this.canEdit&&this.hasCheckedForDraftRecords===false){this.layout.once('show',function(){this.checkForDraftRows(lastCommitDate);},this);}else if(this.isCollectionSyncing===true){this.collection.once('data:sync:complete',function(){this.checkForDraftRows(lastCommitDate);},this);}},setCommitLogButtonStates:function(){_.each(this.fields,function(field){if(field.def.event==='list:history_log:fire'){field.setDisabled((field.model.get('show_history_log')=="0"));if((field.model.get('show_history_log')=="0")){field.$el.find("a.rowaction").attr("data-original-title",app.lang.get("LBL_NO_COMMIT","ForecastManagerWorksheets"));}}});},sync:function(method,model,options){if(!_.isUndefined(this.context.parent)&&!_.isUndefined(this.context.parent.get('selectedUser'))){var sl=this.context.parent.get('selectedUser');if(sl.is_manager==false){if(this.layout.isVisible()){this.layout.hide();}
return;}}
var callbacks,url;options=options||{};options.params=options.params||{};if(!_.isUndefined(this.selectedUser.id)){options.params.user_id=this.selectedUser.id;}
if(!_.isEmpty(this.selectedTimeperiod)){options.params.timeperiod_id=this.selectedTimeperiod;}
options.limit=1000;options=app.data.parseOptionsForSync(method,model,options);options.success=_.bind(function(model,data,options){this.collectionSuccess(data);},this);callbacks=app.data.getSyncCallbacks(method,model,options);this.collection.trigger("data:sync:start",method,model,options);url=app.api.buildURL("ForecastManagerWorksheets",null,null,options.params);app.api.call("read",url,null,callbacks);},collectionSuccess:function(data){var records=[],users=$.map(this.selectedUser.reportees,function(obj){return $.extend(true,{},obj);});users.unshift({id:this.selectedUser.id,name:this.selectedUser.full_name});var currency_id=app.currency.getBaseCurrencyId(),currency_base_rate=app.metadata.getCurrency(app.currency.getBaseCurrencyId()).conversion_rate;_.each(users,function(user){var row=_.find(data,function(rec){return(rec.user_id==this.id)},user);if(!_.isUndefined(row)){row.name=user.name;}else{row=_.clone(this.defaultValues);row.currency_id=currency_id;row.base_rate=currency_base_rate;row.user_id=user.id;row.assigned_user_id=this.selectedUser.id;row.draft=(this.selectedUser.id==app.user.id)?1:0;row.name=user.name;}
records.push(row);},this);if(!_.isUndefined(this.orderBy)){if(this.orderBy.field!=='name'){records=_.sortBy(records,function(item){var val=+item[this.orderBy.field];if(this.orderBy.direction=="desc"){return-val;}else{return val;}},this);}else{records.sort(_.bind(function(a,b){if(this.orderBy.direction=='asc'){if(a.name.toString()<b.name.toString())return 1;if(a.name.toString()>b.name.toString())return-1;}else{if(a.name.toString()<b.name.toString())return-1;if(a.name.toString()>b.name.toString())return 1;}
return 0;},this));}}
this.collection.isEmpty=(_.isEmpty(data));this.collection.reset(records);},calculateTotals:function(){if(this.layout.isVisible()){this.totals=this.getCommitTotals();this.totals['display_total_label_in']=_.first(this._fields.visible).name;_.each(this._fields.visible,function(field){this.totals[field.name+'_display']=true;},this);var ctx=this.context.parent||this.context;ctx.trigger('forecasts:worksheet:totals',this.totals,this.worksheetType);}},getCommitTotals:function(){var quota=0,best_case=0,best_case_adjusted=0,likely_case=0,likely_case_adjusted=0,worst_case_adjusted=0,worst_case=0,included_opp_count=0,pipeline_opp_count=0,pipeline_amount=0,closed_amount=0;this.collection.forEach(function(model){var base_rate=parseFloat(model.get('base_rate')),mPipeline_opp_count=model.get("pipeline_opp_count"),mPipeline_amount=model.get("pipeline_amount"),mClosed_amount=model.get("closed_amount"),mOpp_count=model.get("opp_count");quota=app.math.add(app.currency.convertWithRate(model.get('quota'),base_rate),quota);best_case=app.math.add(app.currency.convertWithRate(model.get('best_case'),base_rate),best_case);best_case_adjusted=app.math.add(app.currency.convertWithRate(model.get('best_case_adjusted'),base_rate),best_case_adjusted);likely_case=app.math.add(app.currency.convertWithRate(model.get('likely_case'),base_rate),likely_case);likely_case_adjusted=app.math.add(app.currency.convertWithRate(model.get('likely_case_adjusted'),base_rate),likely_case_adjusted);worst_case=app.math.add(app.currency.convertWithRate(model.get('worst_case'),base_rate),worst_case);worst_case_adjusted=app.math.add(app.currency.convertWithRate(model.get('worst_case_adjusted'),base_rate),worst_case_adjusted);included_opp_count+=(_.isUndefined(mOpp_count))?0:parseInt(mOpp_count);pipeline_opp_count+=(_.isUndefined(mPipeline_opp_count))?0:parseInt(mPipeline_opp_count);if(!_.isUndefined(mPipeline_amount)){pipeline_amount=app.math.add(pipeline_amount,mPipeline_amount);}
if(!_.isUndefined(mClosed_amount)){closed_amount=app.math.add(closed_amount,mClosed_amount);}});return{'quota':quota,'best_case':best_case,'best_adjusted':best_case_adjusted,'likely_case':likely_case,'likely_adjusted':likely_case_adjusted,'worst_case':worst_case,'worst_adjusted':worst_case_adjusted,'included_opp_count':included_opp_count,'pipeline_opp_count':pipeline_opp_count,'pipeline_amount':pipeline_amount,'closed_amount':closed_amount,'closed_count':(included_opp_count-pipeline_opp_count)};},parseFields:function(){var catalog=this._super("parseFields");_.each(catalog,function(group,i){if(_.isArray(group)){catalog[i]=_.filter(group,function(fieldMeta){return app.utils.getColumnVisFromKeyMap(fieldMeta.name,'forecastsWorksheetManager');});}else{_.each(group,function(fieldMeta){if(!app.utils.getColumnVisFromKeyMap(fieldMeta.name,'forecastsWorksheetManager')){delete group[fieldMeta.name];}});}});return catalog;},saveWorksheet:function(isDraft,suppressMessage){var saveObj={totalToSave:0,saveCount:0,model:undefined,isDraft:isDraft,suppressMessage:suppressMessage||false,timeperiod:this.dirtyTimeperiod,userId:this.dirtyUser},ctx=this.context.parent||this.context;if(this.layout.isVisible()){if(_.isUndefined(saveObj.userId)){saveObj.userId=this.selectedUser;}
saveObj.userId=saveObj.userId.id;if(this.isDirty()){saveObj.totalToSave=this.dirtyModels.length;this.dirtyModels.each(function(model){saveObj.model=model;this._worksheetSaveHelper(saveObj,ctx);},this);this.cleanUpDirtyModels();}else{if(isDraft&&saveObj.suppressMessage===false){app.alert.show('success',{level:'success',autoClose:true,autoCloseDelay:10000,title:app.lang.get("LBL_FORECASTS_WIZARD_SUCCESS_TITLE","Forecasts")+":",messages:[app.lang.get("LBL_FORECASTS_WORKSHEET_SAVE_DRAFT_SUCCESS","Forecasts")]});}
ctx.trigger('forecasts:worksheet:saved',saveObj.totalToSave,this.worksheetType,isDraft);}}
this.draftSaveType=undefined;return saveObj.totalToSave},_worksheetSaveHelper:function(saveObj,ctx){saveObj.model.set({id:saveObj.model.get('id')||null,current_user:saveObj.userId||this.selectedUser.id,timeperiod_id:saveObj.timeperiod||this.selectedTimeperiod,draft_save_type:this.draftSaveType},{silent:true});saveObj.model.save({},{success:_.bind(function(){saveObj.saveCount++;if(saveObj.totalToSave===saveObj.saveCount){if(saveObj.isDraft&&saveObj.suppressMessage===false){app.alert.show('success',{level:'success',autoClose:true,autoCloseDelay:10000,title:app.lang.get("LBL_FORECASTS_WIZARD_SUCCESS_TITLE","Forecasts")+":",messages:[app.lang.get("LBL_FORECASTS_WORKSHEET_SAVE_DRAFT_SUCCESS","Forecasts")]});}
ctx.trigger('forecasts:worksheet:saved',saveObj.totalToSave,this.worksheetType,saveObj.isDraft);}},this),silent:true,alerts:{'success':false}});}}) }
}}
,
"layouts": {}
,
"datas": {}

},
		"MergeRecords":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Quotas":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Teams":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"TeamNotices":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Manufacturers":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Activities":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Comments":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Subscriptions":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Bugs":{"fieldTemplates": {}
,
"views": {
"base": {
"record": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Record View (base) 
extendsFrom:'RecordView',initialize:function(options){this.plugins=_.union(this.plugins||[],['HistoricalSummary']);this._super('initialize',[options]);}}) }
}}
,
"layouts": {}
,
"datas": {}

},
		"Feeds":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"iFrames":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"TimePeriods":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"TaxRates":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"ContractTypes":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Schedulers":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"ProjectTask":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Campaigns":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"CampaignLog":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"CampaignTrackers":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Documents":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"DocumentRevisions":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Connectors":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Roles":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Notifications":{"fieldTemplates": {
"base": {
"severity": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Severity FieldTemplate (base) 
extendsFrom:'EnumField',_styleMapping:{'default':'label-unknown',alert:'label-important',information:'label-info',other:'label-inverse',success:'label-success',warning:'label-warning'},bindDataChange:function(){this._super('bindDataChange');if(this.model&&this.view.name==='notifications'){this.model.on('change:is_read',this.render,this);}},_loadTemplate:function(){this._super('_loadTemplate');var template=app.template.getField(this.type,this.view.name+'-'+this.tplName,this.model.module);if(!template&&this.view.meta&&this.view.meta.template){template=app.template.getField(this.type,this.view.meta.template+'-'+this.tplName,this.model.module);}
this.template=template||this.template;},_render:function(){var severity=this.model.get(this.name),options=app.lang.getAppListStrings(this.def.options);this.severityCss=this._styleMapping[severity]||this._styleMapping['default'];this.severityLabel=options[severity]||severity;this._super('_render');}}) },
"read": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Read FieldTemplate (base) 
events:{'click [data-action=toggle]':'toggleIsRead','mouseover [data-action=toggle]':'toggleMouse','mouseout [data-action=toggle]':'toggleMouse'},plugins:['Tooltip'],initialize:function(options){options.def.readonly=true;this._super('initialize',[options]);if(options.def&&options.def.mark_as_read){this.markAs(true);}},toggleMouse:function(event){var $target=this.$(event.currentTarget),isRead=this.model.get('is_read');if(!isRead){return;}
var label=event.type==='mouseover'?'LBL_UNREAD':'LBL_READ';$target.html(app.lang.get(label,this.module));$target.toggleClass('label-inverse',event.type==='mouseover');},toggleIsRead:function(){this.markAs(!this.model.get('is_read'));},markAs:function(read){if(read===this.model.get('is_read')){return;}
this.model.save({is_read:!!read},{success:_.bind(function(){if(!this.disposed){this.render();}},this)});}}) }
}}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Sync":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"ReportMaker":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"DataSets":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"CustomQueries":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"pmse_Inbox":{"fieldTemplates": {
"base": {
"cancelcasebutton": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Cancelcasebutton FieldTemplate (base) 
extendsFrom:'RowactionField',initialize:function(options){this._super("initialize",[options]);this.type='rowaction';},_render:function(){var value=this.model.get('cas_status');if(/IN PROGRESS/.test(value)||/ERROR/.test(value)){this._super("_render");}else{this.hide();}},bindDataChange:function(){if(this.model){this.model.on("change",this.render,this);}}}) },
"executebutton": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Executebutton FieldTemplate (base) 
extendsFrom:'RowactionField',initialize:function(options){this._super("initialize",[options]);this.type='rowaction';},_render:function(){var value=this.model.get('cas_status');if(/ERROR/.test(value)){this._super("_render");}else{this.hide();}},bindDataChange:function(){if(this.model){this.model.on("change",this.render,this);}}}) },
"relate": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Relate FieldTemplate (base) 
extendsFrom:'RelateField',getSizeOBJ:function(obj){var size=0,key;for(key in obj){if(obj.hasOwnProperty(key))size++;}
return size;},bindDataChange:function(){if(this.model){this.model.on('change:'+this.name,function(){if(!_.isEmpty(this.$(this.fieldTag).data('select2'))){this.$(this.fieldTag).select2('val',this.model.get(this.name));}
if(!this.disposed){if(this.model.get(this.name).length>0){var cbObject=new Object();var cbData,count=0;if(this.getSizeOBJ(window.globalObjectUser)>0){cbData=window.globalObjectUser;}
else
{cbData={};}
cbObject.cas_id=this.model.get('cas_id');cbObject.cas_index=this.model.get('cas_index');cbObject.user_id=this.model.changed['id'];for(var cnKey in cbData){var newData=cbData[cnKey];for(var aux in newData){if(newData.cas_id===cbObject.cas_id&&newData.cas_index===cbObject.cas_index){newData.user_id=cbObject.user_id;count++;}}}
if(count===0){cbData[this.getSizeOBJ(cbData)]=cbObject;}
window.globalObjectUser=cbData;}
this.render();}},this);}}}) },
"enum": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Enum FieldTemplate (base) 
extendsFrom:'EnumField',_render:function(){this.items=this.model.get('cas_reassign_user_combo_box');this._super('_render');},getSizeOBJ:function(obj){var size=0,key;for(key in obj){if(obj.hasOwnProperty(key))size++;}
return size;},bindDataChange:function(){if(this.model){this.model.on('change:'+this.name,function(){if(_.isEmpty(this.$(this.fieldTag).data('select2'))){this.render();}else{var cbObject=new Object();var cbData,count=0;if(this.getSizeOBJ(window.globalObjectUser)>0){cbData=window.globalObjectUser;}
else
{cbData={};}
cbObject.cas_id=this.model.get('cas_id');cbObject.cas_index=this.model.get('cas_index');cbObject.user_id=this.model.get(this.name);for(var cnKey in cbData){var newData=cbData[cnKey];for(var aux in newData){if(newData.cas_id===cbObject.cas_id&&newData.cas_index===cbObject.cas_index){newData.user_id=cbObject.user_id;count++;}}}
if(count===0){cbData[this.getSizeOBJ(cbData)]=cbObject;}
window.globalObjectUser=cbData;this.$(this.fieldTag).select2('val',this.model.get(this.name));}},this);}}}) },
"reassignbutton": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Reassignbutton FieldTemplate (base) 
extendsFrom:'RowactionField',initialize:function(options){this._super("initialize",[options]);this.type='rowaction';},_render:function(){var value=this.model.get('cas_status');if(/IN PROGRESS/.test(value)){this._super("_render");}else{this.hide();}},bindDataChange:function(){if(this.model){this.model.on("change",this.render,this);}}}) }
}}
,
"views": {
"base": {
"config-log": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config-log View (base) 
_renderField:function(field){app.view.View.prototype._renderField.call(this,field);app.alert.show('txtConfigLog',{level:'process',title:'Loading',autoclose:false});url=app.api.buildURL(this.module+'/logGetConfig');app.api.call('READ',url,{},{success:function(data)
{field.model.set('comboLogConfig',data['records'][0]['cfg_value']);app.alert.dismiss('txtConfigLog');}});}}) },
"casesList-list": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// CasesList-list View (base) 
extendsFrom:'RecordlistView',plugins:['ListColumnEllipsis','ListRemoveLinks','Pagination'],unbindData:function(){var massCollection=this.context.get('mass_collection');if(massCollection){massCollection.off(null,null,this);}
this._super("unbindData");},getFieldNames:function(module){return['name','email'];},_render:function(){if(app.acl.hasAccessToAny('developer')){this._super('_render');}
else{app.controller.loadView({layout:'access-denied'});}},_renderField:function(field){this._super("_renderField",[field]);},_dispose:function(){jQuery('.adam-modal').remove();this._super("_dispose",arguments);}}) },
"reassignCases-headerpane": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// ReassignCases-headerpane View (base) 
extendsFrom:"HeaderpaneView",events:{"click [name=done_button]":"_done","click [name=cancel_button]":"_cancel"},_done:function(){var userReassign=new Object();userReassign.flow_data=window.globalObjectUser;var attributes=userReassign;window.globalObjectUser=new Object();app.alert.show('saving',{level:'process',title:'LBL_SAVING',autoclose:false});url=app.api.buildURL('pmse_Inbox','reassignFlows',null,null);app.api.call('update',url,attributes,{success:function(data){app.alert.dismiss('saving');app.drawer.close('saving');},error:function(err){}});},_cancel:function(){window.globalObjectUser=new Object();app.drawer.close();}}) },
"dashlet-inbox": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Dashlet-inbox View (base) 
extendsFrom:'HistoryView',_defaultSettings:{date:'true',limit:10,visibility:'user'},initialize:function(options){options.meta=options.meta||{};options.meta.template='tabbed-dashlet';this.plugins=_.union(this.plugins,['LinkedModel']);this._super('initialize',[options]);},_initEvents:function(){this.events=_.extend(this.events,{'click [data-action=date-switcher]':'dateSwitcher','click [data-action=participate-switcher]':'participateSwitcher'});this._super('_initEvents');return this;},participateSwitcher:function(){alert('participate');},dateSwitcher:function(event){var date=this.$(event.currentTarget).val();if(date===this.getDate()){return;}
this.settings.set('date',date);this.loadData();},getDate:function(){var date=app.user.lastState.get(app.user.lastState.key('date',this),this);return date||this.settings.get('date')||this._defaultSettings.date;},loadData:function(options){if(this.disposed||this.meta.config){return;}
var tab=this.tabs[this.settings.get('activeTab')];if(tab.invitations){tab.invitations.dataFetched=false;}
this._super('loadData',[options]);},_initTabs:function(){app.view.invokeParent(this,{type:'view',name:'tabbed-dashlet',method:'_initTabs',platform:'base'});},_getFilters:function(index){var tab=this.tabs[index],filter={},filters=[],defaultFilters={'true':{$equal:'true'},'false':{$equal:'false'}};filter[tab.filter_applied_to]=defaultFilters[this.getDate()];filters.push(filter);return filters;},_getRemoveRecord:function(){return _.bind(function(model){if(this.disposed){return;}
this.collection.remove(model);this.render();this.context.trigger("tabbed-dashlet:refresh",model.module);},this);},_refresh:function(model,status){app.alert.show(model.id+':refresh',{level:"process",title:status,autoclose:false});return _.bind(function(model){var options={};this.layout.reloadDashlet(options);app.alert.dismiss(model.id+':refresh');},this);},_renderHtml:function(){var self=this;if(this.meta.config){this._super('_renderHtml');return;}
var tab=this.tabs[this.settings.get('activeTab')];if(tab.overdue_badge){this.overdueBadge=tab.overdue_badge;}
_.each(this.collection.models,function(model){var pictureUrl=App.api.buildFileURL({module:'Users',id:model.get('assigned_user_id'),field:'picture'});var ShowCaseUrl='pmse_Inbox/'+model.get('id2')+'/layout/show-case/'+model.get('flow_id');var ShowCaseUrlBwc=App.bwc.buildRoute('pmse_Inbox','','showCase',{id:model.get('flow_id')});var SugarModule=model.get('cas_sugar_module');if(app.metadata.getModule(SugarModule).isBwcEnabled){model.set('show_case_url',ShowCaseUrlBwc);}else{model.set('show_case_url',ShowCaseUrl);}
model.set('picture_url',pictureUrl);model.set('is_assigned',this.isAssigned(model));},this);this._super('_renderHtml');},isAssigned:function(model){if(model.get('cas_status')=='static'||model.get('cas_status')=='balanced'||model.get('cas_user_id')==app.user.id){return true;}else{return(model.get('cas_started')>0);}}}) },
"pmse-case": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Pmse-case View (base) 
extendsFrom:'RecordView',events:{'click .record-edit-link-wrapper':'handleEdit','click a[name=cancel_button]':'cancelClicked'},initialize:function(options){this.case=this.options.context.get('case');_.bindAll(this);options.meta=_.extend({},app.metadata.getView(this.options.module,'record'),options.meta);options.meta.hashSync=_.isUndefined(options.meta.hashSync)?true:options.meta.hashSync;options.meta.buttons=this.case.buttons;this._super('initialize',[options]);this.buttons={};this.createMode=this.context.get('create')?true:false;this.action='detail';this.context.on('change:record_label',this.setLabel,this);this.context.set('viewed',true);this.context.set('dataView','record');this.model.on('duplicate:before',this.setupDuplicateFields,this);this.on('editable:keydown',this.handleKeyDown,this);this.on('editable:mousedown',this.handleMouseDown,this);this.on('field:error',this.handleFieldError,this);app.routing.before('route',this.beforeRouteDelete,this,true);$(window).on('beforeunload.delete'+this.cid,_.bind(this.warnDeleteOnRefresh,this));if(this.createMode){this.model.isNotEmpty=true;}
this.noEditFields=[];this.MORE_LESS_KEY=app.user.lastState.key(this.MORE_LESS_KEY,this);this.adjustHeaderpane=_.bind(_.debounce(this.adjustHeaderpane,50),this);$(window).on('resize.'+this.cid,this.adjustHeaderpane);$(window).on('resize.'+this.cid,this.overflowTabs);this.on('append',function(){this.overflowTabs();this.handleActiveTab();});},validationComplete:function(isValid){if(isValid){this.setButtonStates(this.STATE.VIEW);this.handleSave();}},delegateButtonEvents:function(){this.context.on('button:edit_button:click',this.editClicked,this);this.context.on('case:cancel',this.cancelCase,this);this.context.on('case:claim',this.caseClaim,this);this.context.on('case:approve',this.caseApprove,this);this.context.on('case:reject',this.caseReject,this);this.context.on('case:route',this.caseRoute,this);this.context.on('case:history',this.caseHistory,this);this.context.on('case:status',this.caseStatus,this);this.context.on('case:add:notes',this.caseAddNotes,this);this.context.on('case:change:owner',this.caseChangeOwner,this);this.context.on('case:reassign',this.caseReassign,this);},cancelCase:function(){this.redirectCase();},caseClaim:function(){app.alert.show('upload',{level:'process',title:'LBL_LOADING',autoclose:false});var frm_action='Claim';var value=this.model.attributes;value.moduleName=this.case.flow.cas_sugar_module;value.beanId=this.case.flow.cas_sugar_object_id;value.cas_id=this.case.flow.cas_id;value.cas_index=this.case.flow.cas_index;value.taskName=this.case.title.activity;var self=this;var pmseInboxUrl=app.api.buildURL('pmse_Inbox/engine_claim','',{},{});app.api.call('update',pmseInboxUrl,value,{success:function(){app.alert.dismiss('upload');self.redirectCase(frm_action);}});},caseApprove:function(){this.model.doValidate(this.getFields(this.module),_.bind(this.validationCompleteApprove,this));},validationCompleteApprove:function(isValid){if(isValid){app.alert.show('upload',{level:'process',title:'LBL_LOADING',autoclose:false});var value=this.model.attributes;value.frm_action='Approve';value.idFlow=this.case.flowId;value.idInbox=this.case.inboxId;value.cas_id=this.case.flow.cas_id;value.cas_index=this.case.flow.cas_index;value.moduleName=this.case.flow.cas_sugar_module;value.beanId=this.case.flow.cas_sugar_object_id;value.taskName=this.case.title.activity;var self=this;var pmseInboxUrl=app.api.buildURL('pmse_Inbox/engine_route','',{},{});app.api.call('update',pmseInboxUrl,value,{success:function(){self.redirectCase();}});}},caseReject:function(){app.alert.show('upload',{level:'process',title:'LBL_LOADING',autoclose:false});this.model.doValidate(this.getFields(this.module),_.bind(this.validationCompleteReject,this));},validationCompleteReject:function(isValid){if(isValid){var value=this.model.attributes;value.frm_action='Reject';value.idFlow=this.case.flowId;value.idInbox=this.case.inboxId;value.cas_id=this.case.flow.cas_id;value.cas_index=this.case.flow.cas_index;value.moduleName=this.case.flow.cas_sugar_module;value.beanId=this.case.flow.cas_sugar_object_id;value.taskName=this.case.title.activity;var self=this;var pmseInboxUrl=app.api.buildURL('pmse_Inbox/engine_route','',{},{});app.api.call('update',pmseInboxUrl,value,{success:function(){self.redirectCase();}});}},caseRoute:function(){this.model.doValidate(this.getFields(this.module),_.bind(this.validationCompleteRoute,this));},validationCompleteRoute:function(isValid){if(isValid){var value=this.model.attributes;value.frm_action='Route';value.idFlow=this.case.flowId;value.idInbox=this.case.inboxId;value.cas_id=this.case.flow.cas_id;value.cas_index=this.case.flow.cas_index;value.moduleName=this.case.flow.cas_sugar_module;value.beanId=this.case.flow.cas_sugar_object_id;value.taskName=this.case.title.activity;var self=this;var pmseInboxUrl=app.api.buildURL('pmse_Inbox/engine_route','',{},{});app.api.call('update',pmseInboxUrl,value,{success:function(){self.redirectCase();}});}},redirectCase:function(isRoute){app.alert.dismiss('upload');switch(isRoute){case'Claim':window.location.reload();break;default:app.router.list("Home");break;};},caseHistory:function(){showHistory(this.case.flow.cas_id,this.case.flow.cas_index);},caseStatus:function(){showImage(this.case.flow.cas_id);},caseAddNotes:function(){showNotes(this.case.flow.cas_id,this.case.flow.cas_index);},caseChangeOwner:function(){var value=this.model.attributes;value.moduleName=this.case.flow.cas_sugar_module;value.beanId=this.case.flow.cas_sugar_object_id;adhocForm(this.case.flow.cas_id,this.case.flow.cas_index,this.case.flowId,this.case.inboxId,this.case.title.activity,value);},caseReassign:function(){var value=this.model.attributes;value.moduleName=this.case.flow.cas_sugar_module;value.beanId=this.case.flow.cas_sugar_object_id;reassignForm(this.case.flow.cas_id,this.case.flow.cas_index,this.case.flowId,this.case.inboxId,this.case.title.activity,value);},setEditableFields:function(){delete this.editableFields;this.editableFields=[];var previousField,firstField;_.each(this.fields,function(field){if(this.checkReadonly(field)){field.def.readonly=true;}
var readonlyField=field.def.readonly||_.indexOf(this.noEditFields,field.def.name)>=0||field.parent||(field.name&&this.buttons[field.name]);if(readonlyField){return;}
if(this.checkRequired(field)){field.def.required=true;}
if(previousField){previousField.nextField=field;field.prevField=previousField;}else{firstField=field;}
previousField=field;this.editableFields.push(field);},this);if(previousField){previousField.nextField=firstField;firstField.prevField=previousField;}},handleSave:function(){var self=this;self.inlineEditMode=false;app.file.checkFileFieldsAndProcessUpload(self,{success:function(response){if(response.record&&response.record.date_modified){self.model.set('date_modified',response.record.date_modified);}
self._saveModel();}},{deleteIfFails:false});self.$('.record-save-prompt').hide();if(!self.disposed){self.render();}},toggleViewButtons:function(isEdit){this.$('.headerpane span[data-type="badge"]').toggleClass('hide',isEdit);this.$('.headerpane span[data-type="favorite"]').toggleClass('hide',isEdit);this.$('.headerpane span[data-type="follow"]').toggleClass('hide',isEdit);this.$('.headerpane .btn-group-previous-next').toggleClass('hide',isEdit);},_saveModel:function(){var options,successCallback=_.bind(function(){_.each(this.context.children,function(child){if(!_.isUndefined(child.attributes)&&!_.isUndefined(child.attributes.isSubpanel)){if(child.attributes.isSubpanel&&!child.attributes.hidden){child.attributes.collection.fetch();}}});if(this.createMode){app.navigate(this.context,this.model);}else if(!this.disposed){this.render();}},this);this.turnOffEvents(this.fields);options={showAlerts:true,success:successCallback,error:_.bind(function(error){if(error.status===412&&!error.request.metadataRetry){this.handleMetadataSyncError(error);}else if(error.status===409){app.utils.resolve409Conflict(error,this.model,_.bind(function(model,isDatabaseData){if(model){if(isDatabaseData){successCallback();}else{this._saveModel();}}},this));}else{this.editClicked();}},this),lastModified:this.model.get('date_modified'),viewed:true};options=_.extend({},options,this.getCustomSaveOptions(options));this.model.save({},options);},_buildGridsFromPanelsMetadata:function(panels){var lastTabIndex=0;this.noEditFields=[];_.each(panels,function(panel){_.each(panel.fields,function(field,index){if(this.checkReadonly(field)){field.readonly=true;}
if(_.isString(field)){panel.fields[index]=field={name:field};}
var keys=_.keys(field);if(keys.length===1&&keys[0]==='span'){field.readonly=true;}
if(field.type==='fieldset'){if(field.readonly||_.every(field.fields,function(field){return!app.acl.hasAccessToModel('edit',this.model,field.name);},this)){this.noEditFields.push(field.name);}}else if(field.readonly||!app.acl.hasAccessToModel('edit',this.model,field.name)){this.noEditFields.push(field.name);}},this);if(panel.hide){this.hiddenPanelExists=true;}
if(_.isUndefined(panel.labels)){panel.labels=true;}
if(_.isFunction(this.getGridBuilder)){var options={fields:panel.fields,columns:panel.columns,labels:panel.labels,labelsOnTop:panel.labelsOnTop,tabIndex:lastTabIndex},gridResults=this.getGridBuilder(options).build();panel.grid=gridResults.grid;lastTabIndex=gridResults.lastTabIndex;}},this);},getFieldNames:function(module){var fields=app.view.View.prototype.getFieldNames.call(this,module);var favorite=_.find(this.meta.panels,function(panel){return _.find(panel.fields,function(field){return field.type==='favorite';});});var follow=_.find(this.meta.panels,function(panel){return _.find(panel.fields,function(field){return field.type==='follow';});});if(favorite){fields=_.union(fields,['my_favorite']);}
if(follow){fields=_.union(fields,['following']);}
return fields;},checkReadonly:function(field){var isReadonly=false;_.each(this.case.readonly,function(caseField){if(field.name===caseField){isReadonly=true;}},this);return isReadonly;},checkRequired:function(field){var isRequired=false;_.each(this.case.required,function(caseField){if(field.name===caseField){isRequired=true;}},this);return isRequired;}}) },
"unattendedCases-list-headerpane": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// UnattendedCases-list-headerpane View (base) 
extendsFrom:"HeaderpaneView"}) },
"show-case": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Show-case View (base) 
initialize:function(options){this.inboxId=options.context.attributes.modelId;this.flowId=options.context.attributes.action;app.routing.before('route',this.beforeRouteChange,this);},loadData:function(){var self=this,sep='/',pmseInboxUrl=app.api.buildURL(this.options.module+'/case/'+this.inboxId+sep+this.flowId,'',{},{});app.api.call('READ',pmseInboxUrl,{},{success:function(data){self.initCaseView(data)},error:function(error){app.error.handleNotFoundError();}});},initCaseView:function(data){if(data.case.flow.cas_flow_status==='FORM'){this.params={action:'detail',layout:'pmse-case',module:data.case.flow.cas_sugar_module,modelId:data.case.flow.cas_sugar_object_id,case:data.case};app.controller.loadView(this.params);}else{app.alert.show('message-id',{level:'warning',messages:app.lang.get('LBL_NSC_MESSAGE','pmse_Inbox')+data.case.flow.cas_flow_status,autoClose:false});app.router.goBack();}},beforeRouteChange:function(){app.routing.offBefore('route',this.beforeRouteChange);$('.adam-modal').remove();}}) },
"recordlist": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Recordlist View (base) 
extendsFrom:'RecordlistView',contextEvents:{"list:process:fire":"showCase"},showCase:function(model){var ShowCaseUrl=app.router.buildRoute(model.module,model.get('id2'),'layout/show-case/'+model.get('flow_id'));var ShowCaseUrlBwc=app.bwc.buildRoute(model.module,'','showCase',{id:model.get('flow_id')});var SugarModule=model.get('cas_sugar_module');if(app.metadata.getModule(SugarModule).isBwcEnabled){app.router.navigate(ShowCaseUrlBwc,{trigger:true,replace:true});}else{app.router.navigate(ShowCaseUrl,{trigger:true,replace:true});}}}) },
"record": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Record View (base) 
extendsFrom:'RecordView',events:{'click .record-edit-link-wrapper':'handleEdit','click a[name=cancel_button]':'cancelClicked','click [data-action=scroll]':'paginateRecord','click .record-panel-header':'togglePanel','click .tab a':'setActiveTab'},initialize:function(options){_.bindAll(this);options.meta=_.extend({},app.metadata.getView(null,'record'),options.meta);options.meta.hashSync=_.isUndefined(options.meta.hashSync)?true:options.meta.hashSync;this._super('initialize',[options]);this.context.on('approve:case',this.approveCase,this);this.context.on('reject:case',this.rejectCase,this);this.context.on('cancel:case',this.cancelCase,this);},approveCase:function(options){var self=this;var statusApprove='approve';url=App.api.buildURL('pmse_approve',null,{id:statusApprove});App.api.call('update',url,options.attributes,{success:function(){},error:function(err){}});var redirect=options.module;app.router.navigate(redirect,{trigger:true,replace:true});},rejectCase:function(options){var self=this;var statusApprove='reject';url=App.api.buildURL('pmse_approve',null,{id:statusApprove});App.api.call('update',url,options.attributes,{success:function(){},error:function(err){}});var redirect=options.module;app.router.navigate(redirect,{trigger:true,replace:true});},cancelCase:function(options){var redirect=options.module;app.router.navigate(redirect,{trigger:true,replace:true});},validationComplete:function(isValid){if(isValid){this.setButtonStates(this.STATE.VIEW);this.handleSave();}},initButtons:function(){if(this.options.meta&&this.options.meta.buttons){_.each(this.options.meta.buttons,function(button){this.registerFieldAsButton(button.name);if(button.buttons){var dropdownButton=this.getField(button.name);if(!dropdownButton){return;}
_.each(dropdownButton.fields,function(ddButton){this.buttons[ddButton.name]=ddButton;},this);}},this);}},toggleViewButtons:function(isEdit){this.$('.headerpane span[data-type="badge"]').toggleClass('hide',isEdit);this.$('.headerpane span[data-type="favorite"]').toggleClass('hide',isEdit);this.$('.headerpane span[data-type="follow"]').toggleClass('hide',isEdit);this.$('.headerpane .btn-group-previous-next').toggleClass('hide',isEdit);}}) },
"logView-headerpane": {"controller": /*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */

({
	// LogView-headerpane View (base) 

    extendsFrom: 'HeaderpaneView',
    events:{
        'click [name=log_pmse_button]': 'getLogPmse',
        'click [name=log_clear_button]': 'logClearClick',
        'click [name=log_cron_button]': 'getLogCron'
    },
    initialize: function(options) {
        this._super('initialize', [options]);
        this.getLogPmse();
        this.context.on('list:cancelCase:fire', this.cancelCases, this);
        //this.context.on('configLog:fire', this.getLogConfig, this);
    },

    logClearClick: function () {
        var self = this;
        app.alert.show('clear_confirmation', {
            level: 'confirmation',
            messages: app.lang.get('LBL_PMSE_WARNING_CLEAR', this.module),
            onConfirm: function () {
                app.alert.show('getLog', {
                    level: 'process',
                    title: app.lang.get('LBL_LOADING'),
                    autoClose: false
                });
                self.clearLog();
            },
            onCancel: $.noop

        });
    },

    clearLog: function () {
        var self = this;
        var pmseInboxUrl = app.api.buildURL(this.module + '/clearLog/pmse');
        app.api.call('update', pmseInboxUrl, {}, {
            success: function () {
                self.getLog();
            }
        });

    },

    getLogPmse: function() {
        app.alert.show('getLog', {
            level: 'process',
            title: app.lang.get('LBL_LOADING'),
            autoClose: false});
        var self = this;
        var pmseInboxUrl = app.api.buildURL(this.module + '/getLog');
        app.api.call('READ', pmseInboxUrl, {},{
            success: function(data)
            {
                self.getLog(data)
            }
        });
    },

    getLogCron : function() {
        app.alert.show('getLog', {level: 'process', title: 'Loading', autoclose: false});
        var self = this;
        var pmseInboxUrl = app.api.buildURL(this.module + '/getLog/cron');
        app.api.call('READ', pmseInboxUrl, {},{
            success: function(data)
            {
                $('#logPmseId').html('Cron Log');
                self.getLog(data)
            }
        });
    },
    /*getLogConfig : function() {
        *//**
         * Callback to add recipients, from a closing drawer, to the target Recipients field.
         * @param {undefined|Backbone.Collection} recipients
         *//*
        app.drawer.open(
            {
                layout:  "config-log",
                context: {
                    module: "pmse_Inbox",
                    mixed:  true
                }
            }
        );
    },*/
    getLog: function(data) {
        $("textarea").val(data);
        app.alert.dismiss('getLog');
    }
}) },
"config-headerpane": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config-headerpane View (base) 
extendsFrom:"HeaderpaneView",events:{"click [name=save_button]":"_save","click [name=cancel_button]":"_cancel"},_save:function(){var fieldPmse=new Object();fieldPmse.logger_level={name:"logger_level",required:true};fieldPmse.error_number_of_cycles={name:"error_number_of_cycles",required:true,type:'int'};fieldPmse.error_timeout={name:"error_timeout",required:true,type:'int'};this.model.doValidate(fieldPmse,_.bind(this.validationCompleteSettings,this));},validationCompleteSettings:function(isValid){var self=this;if(isValid){app.alert.show('upload',{level:'process',title:'LBL_LOADING',autoclose:false});var value={},data={};data.logger_level=self.model.get('logger_level');data.error_number_of_cycles=self.model.get('error_number_of_cycles');data.error_timeout=self.model.get('error_timeout');value.data=data;var pmseInboxUrl=app.api.buildURL('pmse_Inbox/settings','',{},{});app.api.call('update',pmseInboxUrl,value,{success:function(data){if(data.success){app.alert.dismiss('upload');app.router.navigate("bwc/index.php?module=Administration&action=index",{trigger:true});}}});}},_cancel:function(){app.router.goBack();}}) },
"process-status-chart": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Process-status-chart View (base) 
plugins:['Dashlet','Chart'],processCollection:null,currentValue:'all',chartCollection:null,hasData:false,total:0,initialize:function(options){this._super('initialize',[options]);this.chart=nv.models.multiBarChart().showTitle(false).showControls(true).showValues(false).stacked(true).tooltipContent(function(key,x,y,e,graph){return'<p><b>'+parseInt(y,10)+'</b></p>';}).tooltips(true);},hasChartData:function(){return this.hasData;},renderChart:function(){if(!this.isChartReady()){return;}
d3.select(this.el).select('svg#'+this.cid).datum(this.chartCollection).transition().duration(500).call(this.chart);this.chart_loaded=_.isFunction(this.chart.update);this.displayNoData(!this.chart_loaded);},loadData:function(options){var self=this,url;if(this.meta.config){return;}
if(!this.currentValue){return;}
url=app.api.buildURL('pmse_Inbox/processStatusChart/'+this.currentValue);this.hasData=false;app.api.call('GET',url,null,{success:function(data){self.evaluateResponse(data);self.renderChart();},complete:options?options.complete:null});},evaluateResponse:function(response){var total=d3.sum(response.data,function(d){return d3.sum(d.values,function(h){return h.y;});});this.hasData=!!total;this.chartCollection=response;}}) },
"config-log-headerpane": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config-log-headerpane View (base) 
extendsFrom:"HeaderpaneView",events:{"click [name=save_button]":"_save","click [name=cancel_button]":"_cancel"},_save:function(){app.alert.show('txtConfigLog',{level:'process',title:'Saving',autoclose:false})
var value=this.model.attributes;value.frm_action='Approve';value.cfg_value=this.model.get('comboLogConfig');var url=app.api.buildURL('pmse_Inbox/logSetConfig','',{},{});app.api.call('update',url,value,{success:function(){app.alert.dismiss('txtConfigLog');app.drawer.close();}});},_cancel:function(){app.drawer.close();}}) },
"casesList-filter": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// CasesList-filter View (base) 
_moduleFilterList:[],_allModulesId:'All',_selectedModule:null,_currentSearch:'',events:{'keyup .search-name':'throttledSearch','paste .search-name':'throttledSearch','click .add-on.fa-times':'clearInput'},processStatus:[app.lang.get('LBL_STATUS_COMPLETED',this.module),app.lang.get('LBL_STATUS_TERMINATED',this.module),app.lang.get('LBL_STATUS_IN_PROGRESS',this.module),app.lang.get('LBL_STATUS_CANCELLED',this.module),app.lang.get('LBL_STATUS_ERROR',this.module)],_render:function(){app.view.View.prototype._render.call(this);this.buildModuleFilterList();this.buildFilter();},buildModuleFilterList:function(){var allowedModules=this.collection.allowed_modules;this._moduleFilterList=[{id:this._allModulesId,text:app.lang.get('LBL_MODULE_ALL')}];_.each(allowedModules,function(module){this._moduleFilterList.push({id:module,text:module});},this);},buildFilter:function(){var $filter=this.getFilterField();if($filter.length>0){$filter.select2({data:this._moduleFilterList,allowClear:false,multiple:false,minimumResultsForSearch:-1,formatSelection:_.bind(this.formatModuleSelection,this),formatResult:_.bind(this.formatModuleChoice,this),dropdownCss:{width:'auto'},dropdownCssClass:'search-filter-dropdown',initSelection:_.bind(this.initSelection,this),escapeMarkup:function(m){return m;},width:'off'});$filter.off('change');$filter.on('change',_.bind(this.handleModuleSelection,this));this._selectedModule=this._selectedModule||this._allModulesId;$filter.select2('val',this._selectedModule);}},getFilterField:function(){return this.$('input.select2');},getModuleFilter:function(){return this.$('div.choice-filter');},unbind:function(){$filter=this.getFilterField();if($filter.length>0){$filter.off();$filter.select2('destroy');}
this._super("unbind");},throttledSearch:_.debounce(function(evt){var newSearch=this.$(evt.currentTarget).val();if(this._currentSearch!==newSearch&&_.indexOf(this.processStatus,this._selectedModule)==-1){this._currentSearch=newSearch;this.applyFilter();}},400),initSelection:function(el,callback){if(el.is(this.getFilterField())){var module=_.findWhere(this._moduleFilterList,{id:el.val()});callback({id:module.id,text:module.text});}},formatModuleSelection:function(item){this.getModuleFilter().html(item.text);return'<span class="select2-choice-type">'
+app.lang.get('LBL_PMSE_FILTER',this.module)
+'<i class="fa fa-caret-down"></i></span>';},formatModuleChoice:function(option){return'<div><span class="select2-match"></span>'+option.text+'</div>';},handleModuleSelection:function(evt,overrideVal){var module=overrideVal||evt.val||this._selectedModule||this._allModulesId;if(!_.isEmpty(_.findWhere(this._moduleFilterList,{id:module}))){this._selectedModule=module;this.getFilterField().select2('val',this._selectedModule);this.getModuleFilter().css('cursor','pointer');this.applyFilter();}},applyFilter:function(){var searchAllModules=(this._selectedModule===this._allModulesId),module=searchAllModules?[]:[this._selectedModule],isDirty=!_.isEmpty(this._currentSearch);this._toggleClearQuickSearchIcon(isDirty);this.context.trigger('compose:addressbook:search',module,this._currentSearch);},_toggleClearQuickSearchIcon:function(addIt){if(addIt&&!this.$('.add-on.fa-times')[0]){this.$('.filter-view.search').append('<i class="add-on fa fa-times"></i>');}else if(!addIt){this.$('.add-on.fa-times').remove();}},clearInput:function(){var $filter=this.getFilterField();this._currentSearch='';this._selectedModule=this._allModulesId;this.$('.search-name').val(this._currentSearch);if($filter.length>0){$filter.select2('val',this._selectedModule);}
this.applyFilter();}}) },
"preview": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Preview View (base) 
extendsFrom:'PreviewView',events:{"click .minify":"toggleMinify"},toggleMinify:function(evt){var $el=this.$('.dashlet-toggle > i'),collapsed=$el.is('.icon-chevron-up');if(collapsed){$('.dashlet-toggle > i').removeClass('icon-chevron-up');$('.dashlet-toggle > i').addClass('icon-chevron-down');}else{$('.dashlet-toggle > i').removeClass('icon-chevron-down');$('.dashlet-toggle > i').addClass('icon-chevron-up');}
$('.dashlet').toggleClass('collapsed');$('.dashlet-content').toggleClass('hide');},_renderPreview:function(model,collection,fetch,previewId){var self=this;if(app.drawer&&!app.drawer.isActive(this.$el)){return;}
if(this.model&&model&&(this.model.get("id")==model.get("id")&&previewId==this.previewId)){app.events.trigger("list:preview:decorate",false);app.events.trigger('preview:close');return;}
if(app.metadata.getModule(model.module).isBwcEnabled){return;}
if(model){var viewName='preview',previewMeta=app.metadata.getView(model.module,'preview'),recordMeta=app.metadata.getView(model.module,'record');if(_.isEmpty(previewMeta)||_.isEmpty(previewMeta.panels)){viewName='record';}
this.meta=this._previewifyMetadata(_.extend({},recordMeta,previewMeta));if(fetch){model.fetch({showAlerts:true,success:function(model){self.renderPreview(model,collection);},view:viewName});}else{this.renderPreview(model,collection);}
var pmseInboxUrl=app.api.buildFileURL({module:'pmse_Inbox',id:model.get('cas_id')||(self.collection.get(model)).get('cas_id'),field:'id'},{cleanCache:true});this.image_preview_url=pmseInboxUrl;}
this.previewId=previewId;}}) },
"reassignCases-list": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// ReassignCases-list View (base) 
extendsFrom:'RecordlistView',initialize:function(options){this._super("initialize",[options]);}}) },
"unattendedCases-list": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// UnattendedCases-list View (base) 
extendsFrom:'RecordlistView',contextEvents:{"list:reassign:fire":"reassignCase"},_render:function(){if(app.acl.hasAccessToAny('developer')){this._super('_render');}else{app.controller.loadView({layout:'access-denied'});}},reassignCase:function(model){var self=this;app.drawer.open({layout:'reassignCases',context:{module:'pmse_Inbox',parent:this.context,cas_id:model.get('cas_id'),unattended:true}},function(variables){if(variables==='saving'){self.reloadList();}});},reloadList:function(){var self=this;self.context.reloadData({recursive:false,error:function(error){console.log(error);}});}}) },
"config": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config View (base) 
events:{},initialize:function(options){app.alert.show('upload',{level:'process',title:'LBL_LOADING',autoclose:false});var self=this;var url=app.api.buildURL('pmse_Inbox','settings',null,options.params);app.api.call('READ',url,options.attributes,{success:function(data){self.model.set(data);app.alert.dismiss('upload');}});this._super('initialize',[options]);}}) },
"process-users-chart": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Process-users-chart View (base) 
plugins:['Dashlet','Chart'],processCollection:null,currentValue:null,chartCollection:null,hasData:false,total:0,showProcesses:null,initialize:function(options){this._super('initialize',[options]);this.chart=nv.models.pieChart().x(function(d){return d.key;}).y(function(d){return d.value;}).margin({top:5,right:20,bottom:20,left:20}).donut(true).donutLabelsOutside(true).donutRatio(0.447).hole(this.total).showTitle(false).tooltips(true).showLegend(true).colorData('class').tooltipContent(function(key,x,y,e,graph){return'<p><b>'+key+'</b></p><p><b>'+parseInt(y,10)+'</b></p>';}).strings({noData:app.lang.get('LBL_CHART_NO_DATA')});},initDashlet:function(view){var self=this;this.showProcesses=!(this.settings.get('isRecord')==='1');if(this.showProcesses){app.api.call('GET',app.api.buildURL('pmse_Project/filter?fields=id,name'),null,{success:_.bind(function(data){var options={};this.processCollection=data.records;this.processCollection.unshift({id:'all',name:app.lang.get('LBL_PMSE_ALL_PROCESSES_LABEL','pmse_Inbox')});_.each(this.processCollection,function(row){options[row.id]=row.name;});this.dashletConfig.processes_selector[0].options=options;this.currentValue='all';this.layout.render();this.layout.loadData();},this),complete:view.options?view.options.complete:null});this.settings.on('change:processes_selector',function(context,value){self.currentValue=value;self.loadData();});}else{this.currentValue=this.model.get('id');}},hasChartData:function(){return this.hasData;},renderChart:function(){if(!this.isChartReady()){return;}
if(this.total&&this.total>0){this.chart.hole(this.total);}
d3.select(this.el).select('svg#'+this.cid).datum(this.chartCollection).transition().duration(500).call(this.chart);this.chart_loaded=_.isFunction(this.chart.update);this.displayNoData(!this.chart_loaded);},loadData:function(options){var self=this,url;if(this.meta.config){return;}
if(!this.currentValue){return;}
url=app.api.buildURL('pmse_Inbox/processUsersChart/'+this.currentValue);this.hasData=false;app.api.call('GET',url,null,{success:function(data){self.evaluateResponse(data);self.renderChart();},complete:options?options.complete:null});},evaluateResponse:function(response){this.total=response.properties.total;this.hasData=!!this.total;response.data.map(function(d){d.value=parseInt(d.value,10);});this.chartCollection=response;}}) },
"logView-pane": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// LogView-pane View (base) 
_renderField:function(field){app.view.View.prototype._renderField.call(this,field);field.$el.children().css('width','100%');field.$el.children().attr('readonly','readonly');}}) },
"casesList-headerpane": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// CasesList-headerpane View (base) 
extendsFrom:'HeaderpaneView'}) }
}}
,
"layouts": {
"base": {
"unattendedCases": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// UnattendedCases Layout (base) 
initialize:function(options){app.view.Layout.prototype.initialize.call(this,options);this.collection.sync=this.sync;this.collection.allowed_modules=[app.lang.get('LBL_CAS_ID',options.module),app.lang.get('LBL_PROCESS_DEFINITION_NAME',options.module),app.lang.get('LBL_RECORD_NAME',options.module),app.lang.get('LBL_OWNER',options.module)];this.context.on('compose:addressbook:search',this.search,this);},sync:function(method,model,options){var callbacks,url;options=options||{};if(_.isEmpty(options.module_list)){options.module_list=['all'];}else{options.module_list=_.intersection(this.allowed_modules,options.module_list);}
app.config.maxQueryResult=app.config.maxQueryResult||20;options.limit=options.limit||app.config.maxQueryResult;options=app.data.parseOptionsForSync(method,model,options);callbacks=app.data.getSyncCallbacks(method,model,options);this.trigger('data:sync:start',method,model,options);url=app.api.buildURL('pmse_Inbox','unattendedCases',null,options.params);app.api.call('read',url,null,callbacks);},search:function(modules,term){this.collection.fetch({query:term,module_list:modules,offset:0,update:false});}}) },
"reassignCases": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// ReassignCases Layout (base) 
initialize:function(options){app.view.Layout.prototype.initialize.call(this,options);this.collection.sync=this.sync;this.context.on('compose:addressbook:search',this.search,this);},sync:function(method,model,options){var callbacks,url;options=options||{};if(_.isEmpty(options.module_list)){options.module_list=['User Assigned'];}else{options.module_list=_.intersection(this.allowed_modules,options.module_list);}
app.config.maxQueryResult=app.config.maxQueryResult||20;options.limit=options.limit||app.config.maxQueryResult;options=app.data.parseOptionsForSync(method,model,options);callbacks=app.data.getSyncCallbacks(method,model,options);this.trigger('data:sync:start',method,model,options);if(options.context.get('unattended')){options.params.unattended=true;}
url=app.api.buildURL('pmse_Inbox','reassignFlows/'+options.context.get('cas_id'),null,options.params);app.api.call('read',url,null,callbacks);},search:function(modules,term){this.collection.fetch({query:term,module_list:modules,offset:0,update:false});}}) },
"casesList": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// CasesList Layout (base) 
initialize:function(options){app.view.Layout.prototype.initialize.call(this,options);this.collection.sync=this.sync;this.collection.allowed_modules=[app.lang.get('LBL_STATUS_COMPLETED',options.module),app.lang.get('LBL_STATUS_TERMINATED',options.module),app.lang.get('LBL_STATUS_IN_PROGRESS',options.module),app.lang.get('LBL_STATUS_CANCELLED',options.module),app.lang.get('LBL_STATUS_ERROR',options.module)];this.context.on('compose:addressbook:search',this.search,this);this.context.on('case:status',this.viewStatus,this);this.context.on('case:history',this.viewHistory,this);this.context.on('case:notes',this.viewNotes,this);this.context.on('case:execute',this.executeCase,this);this.context.on('case:reassign',this.executeReassign,this);this.context.on('list:cancelCase:fire',this.cancelCases,this);},viewStatus:function(model){showImage(model.get('cas_id'));},viewHistory:function(model){showHistory(model.get('cas_id'));},viewNotes:function(model){showNotes(model.get('cas_id'),1,1);},executeCase:function(model){app.alert.show('upload',{level:'process',title:'LBL_LOADING',autoclose:false});this.executeCasesList([model.get('cas_id')]);},cancelCases:function(model){var self=this;var msg=app.lang.get('LBL_PMSE_CANCEL_MESSAGE',this.module);msg=msg.replace('[]',model.get('cas_title'));msg=msg.replace('{}',model.get('cas_id'));app.alert.show('cancelCase-id',{level:'confirmation',messages:msg,autoClose:false,onConfirm:function(){app.alert.show('upload',{level:'process',title:'LBL_LOADING',autoclose:false});var massCollection=self.context.get('mass_collection');var value=self.model.attributes;value.cas_id=[model.get('cas_id')];var pmseInboxUrl=app.api.buildURL(self.module+'/cancelCases','',{},{});app.api.call('update',pmseInboxUrl,value,{success:function(data)
{self.reloadList();app.alert.dismiss('upload');}});},onCancel:function(){app.alert.dismiss('cancelCase-id');}});},executeCasesList:function(idCases){var self=this;var value=this.model.attributes;value.cas_id=idCases;var pmseInboxUrl=app.api.buildURL(this.module+'/reactivateFlows','',{},{});app.api.call('update',pmseInboxUrl,value,{success:function(data)
{self.reloadList();app.alert.dismiss('upload');}});},executeReassign:function(model){app.drawer.open({layout:'reassignCases',context:{module:'pmse_Inbox',parent:this.context,cas_id:model.get('cas_id')}});},buildVariablesString:function(recipients){var listIdCases=[],count=0;_.each(recipients.models,function(model){listIdCases[count++]=model.attributes.cas_id});return currentValue=listIdCases;},sync:function(method,model,options){var callbacks,url;options=options||{};if(_.isEmpty(options.module_list)){options.module_list=['all'];}else{options.module_list=_.intersection(this.allowed_modules,options.module_list);}
app.config.maxQueryResult=app.config.maxQueryResult||20;options.limit=options.limit||app.config.maxQueryResult;options=app.data.parseOptionsForSync(method,model,options);callbacks=app.data.getSyncCallbacks(method,model,options);this.trigger('data:sync:start',method,model,options);url=app.api.buildURL('pmse_Inbox','casesList',null,options.params);app.api.call('read',url,null,callbacks);},search:function(modules,term){this.collection.fetch({query:term,module_list:modules,offset:0,update:false});},reloadList:function(){var self=this;self.context.reloadData({recursive:false,error:function(error){console.log(error);}});}}) },
"config": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Config Layout (base) 
initialize:function(options){var acls=app.user.getAcls().Forecasts,hasAccess=(!_.has(acls,'access')||acls.access=='yes'),isSysAdmin=(app.user.get('type')=='admin'),isDev=(!_.has(acls,'developer')||acls.developer=='yes');if(hasAccess&&(isSysAdmin||isDev)){app.view.Layout.prototype.initialize.call(this,options);app.view.Layout.prototype.loadData.call(this);}else{this.codeBlockForecasts('LBL_FORECASTS_NO_ACCESS_TO_CFG_TITLE','LBL_FORECASTS_NO_ACCESS_TO_CFG_MSG');}},codeBlockForecasts:function(title,msg){var alert=app.alert.show('no_access_to_forecasts',{level:'error',title:app.lang.get(title,'pmse_Inbox')+':',messages:[app.lang.get(msg,'pmse_Inbox')]});var $close=alert.getCloseSelector();$close.on('click',function(){$close.off();app.router.navigate('#Home',{trigger:true});});app.accessibility.run($close,'click');},loadData:function(){}}) }
}}
,
"datas": {}

},
		"pmse_Project":{"fieldTemplates": {
"base": {
"disabled": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Disabled FieldTemplate (base) 
extendsFrom:'RowactionField',initialize:function(options){this._super("initialize",[options]);this.type='rowaction';},_render:function(){var value=this.model.get('prj_status');if(value==='ACTIVE'){this._super("_render");}else{this.hide();}},bindDataChange:function(){if(this.model){this.model.on("change",this.render,this);}}}) },
"enabled": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Enabled FieldTemplate (base) 
extendsFrom:'RowactionField',initialize:function(options){this._super("initialize",[options]);this.type='rowaction';},_render:function(){var value=this.model.get('prj_status');if(value==='INACTIVE'){this._super("_render");}else{this.hide();}},bindDataChange:function(){if(this.model){this.model.on("change",this.render,this);}}}) },
"process-status": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Process-status FieldTemplate (base) 
extendsFrom:'BadgeSelectField',initialize:function(options){this._super('initialize',[options]);this.type='badge-select';},_render:function(){this._super('_render');this.styleLabel(this.model.get(this.name));},styleLabel:function(status){var $label;if(this.action!=='edit'){$label=this.$('.label');switch(status){case'ACTIVE':$label.addClass('label-success');break;case'INACTIVE':$label.addClass('label-important');break;default:break;}}}}) }
}}
,
"views": {
"base": {
"record": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Record View (base) 
extendsFrom:'RecordView',initialize:function(options){app.view.invokeParent(this,{type:'view',name:'record',method:'initialize',args:[options]});this.context.on('button:open_designer:click',this.openDesigner,this);this.context.on('button:export_process:click',this.showExportingWarning,this);},openDesigner:function(model){app.navigate(this.context,model,'layout/designer');},showExportingWarning:function(model){var that=this;if(app.cache.get("show_project_export_warning")){app.alert.show('project-export-confirmation',{level:'confirmation',messages:App.lang.get('LBL_PMSE_IMPORT_EXPORT_WARNING')+"<br/><br/>"
+app.lang.get('LBL_PMSE_EXPORT_CONFIRMATION'),onConfirm:function(){app.cache.set("show_project_export_warning",false);that.exportProcess(model);},onCancel:$.noop});}else{that.exportProcess(model);}},exportProcess:function(model){var url=app.api.buildURL(model.module,'dproject',{id:model.id},{platform:app.config.platform});if(_.isEmpty(url)){app.logger.error('Unable to get the Project download uri.');return;}
app.api.fileDownload(url,{error:function(data){app.error.handleHttpError(data,{});}},{iframe:this.$el});},warnDelete:function(){var verifyURL=app.api.buildURL(this.module,'verify',{id:this.model.get('id')}),self=this;app.api.call('read',verifyURL,null,{success:function(data){if(!data){self._super('warnDelete',[]);}else{app.alert.show('message-id',{level:'warning',title:app.lang.get('LBL_WARNING'),messages:app.lang.get('LBL_PA_PRODEF_HAS_PENDING_PROCESSES'),autoClose:false});}}});}}) },
"project-import": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Project-import View (base) 
initialize:function(options){app.view.View.prototype.initialize.call(this,options);this.context.off("project:import:finish",null,this);this.context.on("project:import:finish",this.importProject,this);},_renderField:function(field){app.view.View.prototype._renderField.call(this,field);if(field.name==='project_import'){field.setMode('edit');}},importProject:function(){var self=this,projectFile=$('[name=project_import]');if(_.isEmpty(projectFile.val())){app.alert.show('error_validation_process',{level:'error',messages:app.lang.get('LBL_PMSE_PROCESS_DEFINITION_EMPTY_WARNING',self.module),autoClose:false});}else{app.file.checkFileFieldsAndProcessUpload(self,{success:function(data){var route=app.router.buildRoute(self.module,data.project_import);route=route+'/layout/designer';app.router.navigate(route,{trigger:true});app.alert.show('process-import-saved',{level:'success',messages:app.lang.get('LBL_PMSE_PROCESS_DEFINITION_IMPORT_SUCCESS',self.module),autoClose:true});},error:function(error){app.alert.show('process-import-saved',{level:'error',messages:error.error_message,autoClose:false});}},{deleteIfFails:true,htmlJsonFormat:true});}},checkFileFieldsAndProcessUpload:function(model,callbacks){callbacks=callbacks||{};var $files=_.filter($(":file"),function(file){var $file=$(file);return($file.val()&&$file.attr("name")&&$file.attr("name")!=="")?$file.val()!=="":false;});var filesToUpload=$files.length;if(filesToUpload>0){app.alert.show('upload',{level:'process',title:'LBL_UPLOADING',autoclose:false});for(var file in $files){var $file=$($files[file]),fileField=$file.attr("name");if(callbacks.success)callbacks.success();}}
else{if(callbacks.success)callbacks.success();}}}) },
"recordlist": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Recordlist View (base) 
extendsFrom:'RecordlistView',initialize:function(options){this.contextEvents=_.extend({},this.contextEvents,{"list:opendesigner:fire":"openDesigner","list:exportprocess:fire":"showExportingWarning","list:enabledRow:fire":"enabledProcess","list:disabledRow:fire":"disabledProcess"});app.view.invokeParent(this,{type:'view',name:'recordlist',method:'initialize',args:[options]});},openDesigner:function(model){app.navigate(this.context,model,'layout/designer');},showExportingWarning:function(model){var that=this;if(app.cache.get("show_project_export_warning")){app.alert.show('project-export-confirmation',{level:'confirmation',messages:App.lang.get('LBL_PMSE_IMPORT_EXPORT_WARNING')+"<br/><br/>"
+app.lang.get('LBL_PMSE_EXPORT_CONFIRMATION'),onConfirm:function(){app.cache.set("show_project_export_warning",false);that.exportProcess(model);},onCancel:$.noop});}else{that.exportProcess(model);}},exportProcess:function(model){var url=app.api.buildURL(model.module,'dproject',{id:model.id},{platform:app.config.platform});if(_.isEmpty(url)){app.logger.error('Unable to get the Project download uri.');return;}
app.api.fileDownload(url,{error:function(data){app.error.handleHttpError(data,{});}},{iframe:this.$el});},enabledProcess:function(model){var self=this;var name=model.get('name')||'';app.alert.show(model.get('id')+':deleted',{level:'confirmation',messages:app.utils.formatString(app.lang.get('LBL_PRO_ENABLE_CONFIRMATION',model.module),[name.trim()]),onConfirm:function(){self._updateProStatusEnabled(model);}});},_updateProStatusEnabled:function(model){var self=this;url=App.api.buildURL(model.module,null,{id:model.id});attributes={prj_status:'ACTIVE'};app.api.call('update',url,attributes,{success:function(){self.reloadList();}});app.alert.show(model.id+':refresh',{level:"process",title:app.lang.get('LBL_PRO_ENABLE',model.module),autoClose:true});},disabledProcess:function(model){var self=this;var name=model.get('name')||'';app.alert.show(model.get('id')+':deleted',{level:'confirmation',messages:app.utils.formatString(app.lang.get('LBL_PRO_DISABLE_CONFIRMATION',model.module),[name.trim()]),onConfirm:function(){self._updateProStatusDisabled(model);}});},_updateProStatusDisabled:function(model){var self=this;url=App.api.buildURL(model.module,null,{id:model.id});attributes={prj_status:'INACTIVE'};app.api.call('update',url,attributes,{success:function(){self.reloadList();}});app.alert.show(model.id+':refresh',{level:"process",title:app.lang.get('LBL_PRO_DISABLE',model.module),autoClose:true});},reloadList:function(){var self=this;self.context.reloadData({recursive:false,error:function(error){console.log(error);}});},warnDelete:function(model){var verifyURL=app.api.buildURL(this.module,'verify',{id:model.get('id')}),self=this;app.api.call('read',verifyURL,null,{success:function(data){if(!data){self._super('warnDelete',[model]);}else{app.alert.show('message-id',{level:'warning',title:app.lang.get('LBL_WARNING'),messages:app.lang.get('LBL_PA_PRODEF_HAS_PENDING_PROCESSES'),autoClose:false});}}});}}) },
"designer": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Designer View (base) 
className:'designer',events:{'click .btn-close-designer':'closeDesigner'},closeDesigner:function(){var route=app.router.buildRoute(this.module,this.prj_uid);app.router.navigate(route,{trigger:true});},loadData:function(options){this.prj_uid=this.options.context.attributes.modelId;},initialize:function(options){_.bindAll(this);app.view.View.prototype.initialize.call(this,options);app.routing.before('route',this.beforeRouteChange,this,true);},render:function(){app.view.View.prototype.render.call(this);renderProject(this.prj_uid);},beforeRouteChange:function(params){var self=this,resp=false;if(project.isDirty){project.showWarning=true;var targetUrl=Backbone.history.getFragment();app.router.navigate(targetUrl,{trigger:false,replace:true});app.alert.show('leave_confirmation',{level:'confirmation',messages:app.lang.get('LBL_WARN_UNSAVED_CHANGES',this.module),onConfirm:function(){var targetUrl=Backbone.history.getFragment();project.dispose();app.router.navigate(targetUrl,{trigger:true,replace:true});window.location.reload()},onCancel:$.noop});return false;}
project.dispose();return true;},_dispose:function(){app.routing.offBefore('route',this.beforeRouteChange);this.removeSelect2Events();this._super("_dispose",arguments);},removeSelect2Events:function(){$(document).off('select2-loaded.select2event');$(document).off('select2-close.select2event');}}) },
"create-actions": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Create-actions View (base) 
extendsFrom:'CreateView',saveOpenDesignName:'save_open_design',SAVEACTIONS:{SAVE_OPEN_DESIGN:'saveOpenDesign'},initialize:function(options){options.meta=_.extend({},app.metadata.getView(null,'create-actions'),options.meta);this._super('initialize',[options]);this.context.on('button:'+this.saveOpenDesignName+':click',this.saveOpenDesign,this);},save:function(){switch(this.context.lastSaveAction){case this.SAVEACTIONS.SAVE_OPEN_DESIGN:this.saveOpenDesign();break;default:this.saveAndClose();}},saveOpenDesign:function(){this.context.lastSaveAction=this.SAVEACTIONS.SAVE_OPEN_DESIGN;this.initiateSave(_.bind(function(){app.navigate(this.context,this.model,'layout/designer');},this));}}) },
"project-import-headerpane": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Project-import-headerpane View (base) 
extendsFrom:'HeaderpaneView',events:{'click [name=project_finish_button]':'initiateFinish','click [name=project_cancel_button]':'initiateCancel'},initiateFinish:function(){var that=this;if(app.cache.get("show_project_import_warning")){app.alert.show('project-import-confirmation',{level:'confirmation',messages:app.lang.get('LBL_PMSE_IMPORT_EXPORT_WARNING')+"<br/><br/>"
+app.lang.get('LBL_PMSE_IMPORT_CONFIRMATION'),onConfirm:function(){app.cache.set("show_project_import_warning",false);that.context.trigger('project:import:finish');},onCancel:function(){app.router.goBack();}});}else{that.context.trigger('project:import:finish');}},initiateCancel:function(){app.router.goBack();}}) },
"dashlet-processes": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Dashlet-processes View (base) 
extendsFrom:'TabbedDashletView',_defaultSettings:{limit:10,visibility:'user'},initialize:function(options){options.meta=options.meta||{};options.meta.template='tabbed-dashlet';this.plugins=_.union(this.plugins,['LinkedModel']);this.tbodyTag='ul[data-action="pagination-body"]';this._super('initialize',[options]);},_initEvents:function(){this._super('_initEvents');this.on('dashlet-processes:designer:fire',this.designer,this);this.on('dashlet-processes:delete-record:fire',this.deleteRecord,this);this.on('dashlet-processes:enable-record:fire',this.enableRecord,this);this.on('dashlet-processes:disable-record:fire',this.disableRecord,this);this.on('dashlet-processes:download:fire',this.showExportingWarning,this);this.on('dashlet-processes:description-record:fire',this.descriptionRecord,this);return this;},designer:function(model){var redirect=model.module+"/"+model.id+"/layout/designer";app.router.navigate(redirect,{trigger:true,replace:true});},showExportingWarning:function(model){var that=this;if(app.cache.get("show_project_export_warning")){app.alert.show('project-export-confirmation',{level:'confirmation',messages:App.lang.get('LBL_PMSE_IMPORT_EXPORT_WARNING')+"<br/><br/>"
+app.lang.get('LBL_PMSE_EXPORT_CONFIRMATION'),onConfirm:function(){app.cache.set("show_project_export_warning",false);that.exportProcess(model);},onCancel:$.noop});}else{that.exportProcess(model);}},exportProcess:function(model){var url=app.api.buildURL(model.module,'dproject',{id:model.id},{platform:app.config.platform});if(_.isEmpty(url)){app.logger.error('Unable to get the Project download uri.');return;}
app.api.fileDownload(url,{error:function(data){app.error.handleHttpError(data,{});}},{iframe:this.$el});},_initTabs:function(){app.view.invokeParent(this,{type:'view',name:'tabbed-dashlet',method:'_initTabs',platform:'base'});var today=new Date();today.setHours(23,59,59);today.toISOString();_.each(_.pluck(_.pluck(this.tabs,'filters'),'date_due'),function(filter){_.each(filter,function(value,operator){if(value==='today'){filter[operator]=today;}});});},createRecord:function(event,params){if(this.module!=='pmse_Project'){this.createRelatedRecord(params.module,params.link);}else{var self=this;app.drawer.open({layout:'create-actions',context:{create:true,module:params.module}},function(context,model){if(!model){return;}
self.context.resetLoadFlag();self.context.set('skipFetch',false);if(_.isFunction(self.loadData)){self.loadData();}else{self.context.loadData();}});}},importRecord:function(event,params){App.router.navigate(params.link,{trigger:true,replace:true});},deleteRecord:function(model){var self=this,verifyURL=app.api.buildURL(this.module,'verify',{id:model.get('id')});var messages={};var name=app.utils.getRecordName(model).trim();var context=app.lang.getModuleName(model.module).toLowerCase()+' '+name;messages.confirmation=app.utils.formatString(app.lang.get('NTC_DELETE_CONFIRMATION_FORMATTED'),[context]);this._modelToDelete=true;app.api.call('read',verifyURL,null,{success:function(data){if(!data){app.alert.show(model.get('id')+':deleted',{level:'confirmation',messages:messages.confirmation,onConfirm:function(){model.destroy({showAlerts:true,success:self._getRemoveRecord()});}});}else{app.alert.show('message-id',{level:'warning',title:app.lang.get('LBL_WARNING'),messages:app.lang.get('LBL_PA_PRODEF_HAS_PENDING_PROCESSES'),autoClose:false});}}});},_getRemoveRecord:function(){return _.bind(function(model){if(this.disposed){return;}
this.collection.remove(model);this.render();this.context.trigger("tabbed-dashlet:refresh",model.module);},this);},_refresh:function(model,status){app.alert.show(model.id+':refresh',{level:"process",title:status,autoClose:false});return _.bind(function(model){var options={};this.layout.reloadDashlet(options);app.alert.dismiss(model.id+':refresh');},this);},disableRecord:function(model){var self=this;this._modelToDelete=true;var name=model.get('name')||'';app.alert.show(model.get('id')+':deleted',{level:'confirmation',messages:app.utils.formatString(app.lang.get('LBL_PRO_DISABLE_CONFIRMATION',model.module),[name.trim()]),onConfirm:function(){self._updateProStatusDisabled(model);}});},_updateProStatusDisabled:function(model){var self=this;url=App.api.buildURL(model.module,null,{id:model.id});attributes={prj_status:'INACTIVE'};app.api.call('update',url,attributes);app.alert.show(model.id+':refresh',{level:"process",title:app.lang.get('LBL_PRO_DISABLE',model.module),autoClose:true});self.refresh_Dashlet();},enableRecord:function(model){var self=this;this._modelToDelete=true;var name=model.get('name')||'';app.alert.show(model.get('id')+':deleted',{level:'confirmation',messages:app.utils.formatString(app.lang.get('LBL_PRO_ENABLE_CONFIRMATION',model.module),[name.trim()]),onConfirm:function(){self._updateProStatusEnabled(model);}});},_updateProStatusEnabled:function(model){var self=this;url=App.api.buildURL(model.module,null,{id:model.id});attributes={prj_status:'ACTIVE'};app.api.call('update',url,attributes);app.alert.show(model.id+':refresh',{level:"process",title:app.lang.get('LBL_PRO_ENABLE',model.module),autoClose:true});self.refresh_Dashlet();},refresh_Dashlet:function(){var $el=this.$("[data-action=loading]"),self=this,options={};if($el.length>0){$el.removeClass(this.cssIconDefault).addClass(this.cssIconRefresh);options.complete=function(){if(self.disposed){return;}
$el.removeClass(self.cssIconRefresh).addClass(self.cssIconDefault);};}
this.layout.reloadDashlet(options);},descriptionRecord:function(model){app.alert.dismiss('message-id');app.alert.show('message-id',{level:'info',title:app.lang.get('LBL_DESCRIPTION'),messages:'<br/>'+model.get('description'),autoClose:false});},tabSwitcher:function(event){var index=this.$(event.currentTarget).data('index');if(index===this.settings.get('activeTab')){return;}
this.settings.set('activeTab',index);this.render();this.refresh_Dashlet();},_renderHtml:function(){if(this.meta.config){this._super('_renderHtml');return;}
var tab=this.tabs[this.settings.get('activeTab')];if(tab.overdue_badge){this.overdueBadge=tab.overdue_badge;}
_.each(this.collection.models,function(model){var pictureUrl=app.api.buildFileURL({module:'Users',id:model.get('assigned_user_id'),field:'picture'});model.set('picture_url',pictureUrl);},this);this._super('_renderHtml');}}) }
}}
,
"layouts": {}
,
"datas": {}

},
		"pmse_Business_Rules":{"fieldTemplates": {}
,
"views": {
"base": {
"businessrules-import": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Businessrules-import View (base) 
initialize:function(options){app.view.View.prototype.initialize.call(this,options);this.context.off("businessrules:import:finish",null,this);this.context.on("businessrules:import:finish",this.warnImportBusinessRules,this);},_renderField:function(field){app.view.View.prototype._renderField.call(this,field);if(field.name==='businessrules_import'){field.setMode('edit');}},warnImportBusinessRules:function(){var that=this;if(app.cache.get('show_br_import_warning')){app.alert.show('br-import-confirmation',{level:'confirmation',messages:app.lang.get('LBL_PMSE_IMPORT_EXPORT_WARNING')+"<br/><br/>"
+app.lang.get('LBL_PMSE_IMPORT_CONFIRMATION'),onConfirm:function(){app.cache.set('show_br_import_warning',false);that.importBusinessRules();},onCancel:function(){app.router.goBack();}});}else{this.importBusinessRules();}},importBusinessRules:function(){var self=this,projectFile=$('[name=businessrules_import]');if(_.isEmpty(projectFile.val())){app.alert.show('error_validation_businessrules',{level:'error',messages:app.lang.get('LBL_PMSE_BUSINESS_RULES_EMPTY_WARNING',self.module),autoClose:false});}else{app.file.checkFileFieldsAndProcessUpload(self,{success:function(data){app.router.goBack();app.alert.show('process-import-saved',{level:'success',messages:app.lang.get('LBL_PMSE_BUSINESS_RULES_IMPORT_SUCCESS',self.module),autoClose:true});},error:function(error){app.alert.show('process-import-saved',{level:'error',messages:error.error_message,autoClose:false});}},{deleteIfFails:true,htmlJsonFormat:true});}},checkFileFieldsAndProcessUpload:function(model,callbacks){callbacks=callbacks||{};var $files=_.filter($(":file"),function(file){var $file=$(file);return($file.val()&&$file.attr("name")&&$file.attr("name")!=="")?$file.val()!=="":false;});var filesToUpload=$files.length;if(filesToUpload>0){app.alert.show('upload',{level:'process',title:'LBL_UPLOADING',autoclose:false});for(var file in $files){var $file=$($files[file]),fileField=$file.attr("name");if(callbacks.success)callbacks.success();}}
else{if(callbacks.success)callbacks.success();}}}) },
"businessrules-import-headerpane": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Businessrules-import-headerpane View (base) 
extendsFrom:'HeaderpaneView',events:{'click [name=businessrules_finish_button]':'initiateFinish','click [name=businessrules_cancel_button]':'initiateCancel'},initiateFinish:function(){this.context.trigger('businessrules:import:finish');},initiateCancel:function(){app.router.goBack();}}) },
"record": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Record View (base) 
extendsFrom:'RecordView',initialize:function(options){app.view.invokeParent(this,{type:'view',name:'record',method:'initialize',args:[options]});this.context.on('button:design_businessrules:click',this.designBusinessRules,this);this.context.on('button:export_businessrules:click',this.warnExportBusinessRules,this);},designBusinessRules:function(model){app.navigate(this.context,model,'layout/businessrules');},warnExportBusinessRules:function(model){var that=this;if(app.cache.get("show_br_export_warning")){app.alert.show('show-br-export-confirmation',{level:'confirmation',messages:app.lang.get('LBL_PMSE_IMPORT_EXPORT_WARNING')+"<br/><br/>"
+app.lang.get('LBL_PMSE_EXPORT_CONFIRMATION'),onConfirm:function(){app.cache.set("show_br_export_warning",false);that.exportBusinessRules(model);},onCancel:$.noop});}else{that.exportBusinessRules(model);}},exportBusinessRules:function(model){var url=app.api.buildURL(model.module,'brules',{id:model.id},{platform:app.config.platform});if(_.isEmpty(url)){app.logger.error('Unable to get the Project download uri.');return;}
app.api.fileDownload(url,{error:function(data){app.error.handleHttpError(data,{});}},{iframe:this.$el});}}) },
"recordlist": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Recordlist View (base) 
extendsFrom:'RecordlistView',initialize:function(options){this.contextEvents=_.extend({},this.contextEvents,{"list:editbusinessrules:fire":"openBusinessRules","list:exportbusinessrules:fire":"warnExportBusinessRules"});app.view.invokeParent(this,{type:'view',name:'recordlist',method:'initialize',args:[options]});},openBusinessRules:function(model){app.navigate(this.context,model,'layout/businessrules');},warnExportBusinessRules:function(model){var that=this;if(app.cache.get("show_br_export_warning")){app.alert.show('show-br-export-confirmation',{level:'confirmation',messages:app.lang.get('LBL_PMSE_IMPORT_EXPORT_WARNING')+"<br/><br/>"
+app.lang.get('LBL_PMSE_EXPORT_CONFIRMATION'),onConfirm:function(){app.cache.set("show_br_export_warning",false);that.exportBusinessRules(model);},onCancel:$.noop});}else{that.exportBusinessRules(model);}},exportBusinessRules:function(model){var url=app.api.buildURL(model.module,'brules',{id:model.id},{platform:app.config.platform});if(_.isEmpty(url)){app.logger.error('Unable to get the Project download uri.');return;}
app.api.fileDownload(url,{error:function(data){app.error.handleHttpError(data,{});}},{iframe:this.$el});}}) },
"businessrules-headerpane": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Businessrules-headerpane View (base) 
extendsFrom:'HeaderpaneView',events:{'click [name=project_finish_button]':'initiateFinish','click [name=project_save_button]':'initiateSave','click [name=project_cancel_button]':'initiateCancel'},initiateFinish:function(){this.context.trigger('businessRules:save:finish');},initiateSave:function(){this.context.trigger('businessRules:save:save');},initiateCancel:function(){this.context.trigger('businessRules:cancel:button');}}) },
"dashlet-businessrules": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Dashlet-businessrules View (base) 
extendsFrom:'TabbedDashletView',_defaultSettings:{limit:10,visibility:'user'},initialize:function(options){options.meta=options.meta||{};options.meta.template='tabbed-dashlet';this.plugins=_.union(this.plugins,['LinkedModel']);this._super('initialize',[options]);},_initEvents:function(){this._super('_initEvents');this.on('dashlet-businessrules:businessRulesLayout:fire',this.businessRulesLayout,this);this.on('dashlet-businessrules:delete-record:fire',this.deleteRecord,this);this.on('dashlet-businessrules:download:fire',this.warnExportBusinessRules,this);this.on('dashlet-businessrules:description-record:fire',this.descriptionRecord,this);return this;},businessRulesLayout:function(model){var redirect=model.module+"/"+model.id+"/layout/businessrules";app.router.navigate(redirect,{trigger:true,replace:true});},_initTabs:function(){app.view.invokeParent(this,{type:'view',name:'tabbed-dashlet',method:'_initTabs',platform:'base'});var today=new Date();today.setHours(23,59,59);today.toISOString();_.each(_.pluck(_.pluck(this.tabs,'filters'),'date_due'),function(filter){_.each(filter,function(value,operator){if(value==='today'){filter[operator]=today;}});});},createRecord:function(event,params){if(this.module!=='pmse_Business_Rules'){this.createRelatedRecord(params.module,params.link);}else{var self=this;app.drawer.open({layout:'create-actions',context:{create:true,module:params.module}},function(context,model){if(!model){return;}
self.context.resetLoadFlag();self.context.set('skipFetch',false);if(_.isFunction(self.loadData)){self.loadData();}else{self.context.loadData();}});}},importRecord:function(event,params){App.router.navigate(params.link,{trigger:true,replace:true});},deleteRecord:function(model){var self=this;this._modelToDelete=true;var name=model.get('name')||'',context=app.lang.get('LBL_MODULE_NAME_SINGULAR',model.module).toLowerCase()+' - '+name.trim();app.alert.show(model.get('id')+':deleted',{level:'confirmation',messages:app.utils.formatString(app.lang.get('LBL_PRO_DELETE_CONFIRMATION',model.module)),onConfirm:function(){model.destroy({showAlerts:true,success:self._getRemoveRecord()});}});},_getRemoveRecord:function(){return _.bind(function(model){if(this.disposed){return;}
this.collection.remove(model);this.render();this.context.trigger("tabbed-dashlet:refresh",model.module);},this);},_refresh:function(model,status){app.alert.show(model.id+':refresh',{level:"process",title:status,autoclose:false});return _.bind(function(model){var options={};this.layout.reloadDashlet(options);app.alert.dismiss(model.id+':refresh');},this);},disableRecord:function(model){var self=this;this._modelToDelete=true;var name=model.get('name')||'';app.alert.show(model.get('id')+':deleted',{level:'confirmation',messages:app.utils.formatString(app.lang.get('LBL_PRO_DISABLE_CONFIRMATION',model.module),[name.trim()]),onConfirm:function(){self._updateProStatusDisabled(model);}});},_updateProStatusDisabled:function(model){var self=this;url=App.api.buildURL(model.module,null,{id:model.id});attributes={prj_status:'INACTIVE'};App.api.call('update',url,attributes,{success:self._refresh(model,app.lang.get('LBL_PRO_DISABLE',model.module)),error:function(err){}});},enableRecord:function(model){var self=this;this._modelToDelete=true;var name=model.get('name')||'';app.alert.show(model.get('id')+':deleted',{level:'confirmation',messages:app.utils.formatString(app.lang.get('LBL_PRO_ENABLE_CONFIRMATION',model.module),[name.trim()]),onConfirm:function(){self._updateProStatusEnabled(model);}});},_updateProStatusEnabled:function(model){var self=this;url=App.api.buildURL(model.module,null,{id:model.id});attributes={prj_status:'ACTIVE'};App.api.call('update',url,attributes,{success:self._refresh(model,app.lang.get('LBL_PRO_ENABLE',model.module)),error:function(err){}});},warnExportBusinessRules:function(model){var that=this;if(app.cache.get("show_br_export_warning")){app.alert.show('show-br-export-confirmation',{level:'confirmation',messages:app.lang.get('LBL_PMSE_IMPORT_EXPORT_WARNING')+"<br/><br/>"
+app.lang.get('LBL_PMSE_EXPORT_CONFIRMATION'),onConfirm:function(){app.cache.set("show_br_export_warning",false);that.exportBusinessRules(model);},onCancel:$.noop});}else{that.exportBusinessRules(model);}},exportBusinessRules:function(model){var url=app.api.buildURL(model.module,'brules',{id:model.id},{platform:app.config.platform});if(_.isEmpty(url)){app.logger.error('Unable to get the Business Rule download uri.');return;}
app.api.fileDownload(url,{error:function(data){app.error.handleHttpError(data,{});}},{iframe:this.$el});},descriptionRecord:function(model){app.alert.dismiss('message-id');app.alert.show('message-id',{level:'info',title:app.lang.get('LBL_DESCRIPTION'),messages:'<br/>'+model.get('description'),autoClose:false});},_renderHtml:function(){if(this.meta.config){this._super('_renderHtml');return;}
var tab=this.tabs[this.settings.get('activeTab')];if(tab.overdue_badge){this.overdueBadge=tab.overdue_badge;}
_.each(this.collection.models,function(model){var pictureUrl=app.api.buildFileURL({module:'Users',id:model.get('assigned_user_id'),field:'picture'});model.set('picture_url',pictureUrl);},this);this._super('_renderHtml');}}) },
"create-actions": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Create-actions View (base) 
extendsFrom:'CreateView',saveOpenBusinessRulesName:'save_open_businessrules',SAVEACTIONS:{SAVE_OPEN_BUSINESRULES:'saveOpenBusinessRules'},initialize:function(options){options.meta=_.extend({},app.metadata.getView(null,'create-actions'),options.meta);this._super('initialize',[options]);this.context.on('button:'+this.saveOpenBusinessRulesName+':click',this.saveOpenBusinessRules,this);},save:function(){switch(this.context.lastSaveAction){case this.SAVEACTIONS.SAVE_OPEN_BUSINESRULES:this.saveOpenBusinessRules();break;default:this.saveAndClose();}},saveOpenBusinessRules:function(){this.context.lastSaveAction=this.SAVEACTIONS.SAVE_OPEN_BUSINESRULES;this.initiateSave(_.bind(function(){app.navigate(this.context,this.model,'layout/businessrules');},this));}}) },
"businessrules": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Businessrules View (base) 
className:'businessrules',loadData:function(options){this.br_uid=this.options.context.attributes.modelId;},initialize:function(options){app.view.View.prototype.initialize.call(this,options);this.context.off("businessRules:save:finish",null,this);this.context.on("businessRules:save:finish",this.saveBusinessRules,this);this.context.off("businessRules:save:save",null,this);this.context.on("businessRules:save:save",this.saveOnlyBusinessRules,this);this.context.off("businessRules:cancel:button",null,this);this.context.on("businessRules:cancel:button",this.cancelBusinessRules,this);this.myDefaultLayout=this.closestComponent('sidebar');app.routing.before('route',this.beforeRouteChange,this,true);this._currentUrl=Backbone.history.getFragment();},render:function(){app.view.View.prototype.render.call(this);renderBusinessRule(this.br_uid,this.myDefaultLayout);},saveBusinessRules:function(){saveBR(App.router.buildRoute("pmse_Business_Rules"));},saveOnlyBusinessRules:function(){saveBR();},cancelBusinessRules:function(){app.router.navigate('pmse_Business_Rules',{trigger:true});},beforeRouteChange:function(){var targetUrl=Backbone.history.getFragment();if(decision_table.getIsDirty()){app.router.navigate(this._currentUrl,{trigger:false,replace:true});app.alert.show('leave_confirmation',{level:'confirmation',messages:app.lang.get('LBL_WARN_UNSAVED_CHANGES',this.module),onConfirm:function(){decision_table.setIsDirty(false,true);app.router.navigate(targetUrl,{trigger:true,replace:true});},onCancel:$.noop});return false;}
return true;}}) }
}}
,
"layouts": {}
,
"datas": {}

},
		"pmse_Emails_Templates":{"fieldTemplates": {
"base": {
"pmse_htmleditable_tinymce": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Pmse_htmleditable_tinymce FieldTemplate (base) 
fieldSelector:'.htmleditable',_htmleditor:null,_isDirty:false,_saveOnSetContent:true,_render:function(){this.destroyTinyMCEEditor();app.view.Field.prototype._render.call(this);this._getHtmlEditableField().attr('name',this.name);if(this._isEditView()){this._renderEdit(this.options.def.tinyConfig||null);}else{this._renderView();}},bindDataChange:function(){this.model.on('change:'+this.name,function(model,value){if(this._isEditView()){this._saveOnSetContent=false;this.setEditorContent(value);}else{this.setViewContent(value)}},this);},setViewContent:function(value){var editable=this._getHtmlEditableField();if(editable&&!_.isEmpty(editable.get(0).contentDocument)){if(editable.contents().find('body').length>0){editable.contents().find('body').html(value);}}},_renderEdit:function(options){var self=this;this.initTinyMCEEditor(options);this._getHtmlEditableField().on('change',function(){self.model.set(self.name,self._getHtmlEditableField().val());});},_renderView:function(){this.setViewContent(this.value);},_isEditView:function(){return(this._getHtmlEditableField().prop('tagName')==='TEXTAREA');},getTinyMCEConfig:function(){return{script_url:'include/javascript/tiny_mce/tiny_mce.js',theme:"advanced",skin:"sugar7",plugins:"style,table,advhr,advimage,advlink,iespell,inlinepopups,media,searchreplace,print,contextmenu,paste,noneditable,visualchars,nonbreaking,xhtmlxtras",entity_encoding:"raw",theme_advanced_buttons1:"code,|,bold,italic,underline,|,justifyleft,justifycenter,justifyright,justifyfull,fontsizeselect,|,insertlayer,moveforward,movebackward,absolute,|,styleprops,|,cite,abbr,acronym,del,ins,attribs,|,iespell,media,advhr,|,print,|",theme_advanced_buttons2:"cut,copy,paste,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,|,forecolor,backcolor,tablecontrols,|,",theme_advanced_toolbar_location:"top",theme_advanced_toolbar_align:"left",theme_advanced_statusbar_location:"none",theme_advanced_resizing:true,schema:"html5",template_external_list_url:"lists/template_list.js",external_link_list_url:"lists/link_list.js",external_image_list_url:"lists/image_list.js",media_external_list_url:"lists/media_list.js",theme_advanced_path:false,theme_advanced_source_editor_width:500,theme_advanced_source_editor_height:400,inlinepopups_skin:"sugar7modal",relative_urls:false,remove_script_host:false};},initTinyMCEEditor:function(optConfig){var self=this;if(_.isEmpty(this._htmleditor)){var config=optConfig||this.getTinyMCEConfig();var __superSetup__=config.setup;config.setup=function(editor){if(_.isFunction(__superSetup__)){__superSetup__.call(this,editor);}
self._htmleditor=editor;self._htmleditor.onInit.add(function(ed){self.setEditorContent(self.getFormattedValue());$(ed.getWin()).blur(function(e){self._saveEditor();});});self._htmleditor.onDeactivate.add(function(ed){self._saveEditor();});self._htmleditor.onSetContent.add(function(ed){if(self._saveOnSetContent){self._saveEditor(true);}
self._saveOnSetContent=true;});self._htmleditor.onChange.add(function(ed,l){self._isDirty=true;});editor.addButton('mybutton',{title:'Fields Selector',image:'modules/pmse_Project/img/icon_processmaker_32.gif',onclick:function(){self._showVariablesBook();}});};config.oninit=function(inst){self.context.trigger('tinymce:oninit',inst);};$('.htmleditable').tinymce(config);}},destroyTinyMCEEditor:function(){if(!_.isNull(this._htmleditor)){this._saveEditor(true);this._htmleditor.remove();this._htmleditor.destroy();this._htmleditor=null;}},_saveEditor:function(force){var save=force|this._isDirty;if(save){this.model.set(this.name,this.getEditorContent(),{silent:true});this._isDirty=false;}},_getHtmlEditableField:function(){return this.$el.find(this.fieldSelector);},setEditorContent:function(value){if(_.isEmpty(value)){value="";}
if(this._isEditView()&&this._htmleditor&&this._htmleditor.dom){this._htmleditor.setContent(value);}},getEditorContent:function(){return this._htmleditor.getContent();},_dispose:function(){this.destroyTinyMCEEditor();app.view.Field.prototype._dispose.call(this);},_showVariablesBook:function(){var addVariables=_.bind(function(variables){if(variables&&variables.length>0){this.model.set(this.name,this.buildVariablesString(variables));}},this);app.drawer.open({layout:"compose-varbook",context:{module:"pmse_Emails_Templates",mixed:true}},function(variables){addVariables(variables);});},buildVariablesString:function(recipients){var result='',newExpression='',currentValue,i,aux,aux2;_.each(recipients.models,function(model){newExpression+='{::'+model.attributes.rhs_module+'::'+model.attributes.id+'::}'});var bm=this._htmleditor.selection.getBookmark();this._htmleditor.selection.moveToBookmark(bm);this._htmleditor.selection.setContent(newExpression);return currentValue=this._htmleditor.getContent();}}) },
"readonly": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Readonly FieldTemplate (base) 
plugins:['EllipsisInline'],'events':{'keyup input[name=name]':'handleKeyup',},fieldTag:'input.inherit-width',_render:function(){if(this.view.name==='record'){this.def.link=false;}else if(this.view.name==='preview'){this.def.link=true;}
this._super('_render');},getFieldElement:function(){return this.$(this.fieldTag);},handleKeyup:_.throttle(function(){var searchedValue=this.$('input.inherit-width').val();if(searchedValue&&searchedValue.length>=3){this.context.trigger('input:name:keyup',searchedValue);}},1000,{leading:false})}) },
"from_address": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// From_address FieldTemplate (base) 
plugins:['Tooltip'],'events':{'keyup input[name=name]':'handleKeyup',"click .btn":"_showVarBook"},fieldTag:'input.inherit-width',_render:function(){if(this.view.name==='record'){this.def.link=false;}else if(this.view.name==='preview'){this.def.link=true;}
this._super('_render');},getFieldElement:function(){return this.$(this.fieldTag);},_showVarBook:function(){var addEmails=_.bind(function(emails){if(emails&&emails.length>0){this.model.set(this.name,this.buildVariablesString(emails));}},this);app.drawer.open({layout:"compose-addressbook",context:{module:"Emails",mixed:true}},function(emails){addEmails(emails);});},buildVariablesString:function(recipients){var result='',newExpression='',i=0;_.each(recipients.models,function(model){newExpression+=(i>0)?', ':'';newExpression+=model.attributes.email;i+=1;});result=newExpression;return result;},handleKeyup:_.throttle(function(){var searchedValue=this.$('input.inherit-width').val();if(searchedValue&&searchedValue.length>=3){this.context.trigger('input:name:keyup',searchedValue);}},1000,{leading:false})}) },
"subject": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Subject FieldTemplate (base) 
plugins:['EllipsisInline'],'events':{'keyup input[name=name]':'handleKeyup',"click .btn":"_showVarBook"},fieldTag:'input.inherit-width',_render:function(){if(this.view.name==='record'){this.def.link=false;}else if(this.view.name==='preview'){this.def.link=true;}
this._super('_render');},getFieldElement:function(){return this.$(this.fieldTag);},_showVarBook:function(){var addVariables=_.bind(function(variables){if(variables&&variables.length>0){this.model.set(this.name,this.buildVariablesString(variables));}},this);app.drawer.open({layout:"compose-varbook",context:{module:"pmse_Emails_Templates",mixed:true}},function(variables){addVariables(variables);});},buildVariablesString:function(recipients){var result='',newExpression='',currentValue,i,aux,aux2;_.each(recipients.models,function(model){newExpression+='{::'+model.attributes.rhs_module+'::'+model.attributes.id+'::}'});var input=this.getFieldElement().get(0);;currentValue=input.value;i=input.selectionStart;result=currentValue.substr(0,i)+newExpression+currentValue.substr(i);return result;},handleKeyup:_.throttle(function(){var searchedValue=this.$('input.inherit-width').val();if(searchedValue&&searchedValue.length>=3){this.context.trigger('input:name:keyup',searchedValue);}},1000,{leading:false})}) }
}}
,
"views": {
"base": {
"emailtemplates": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Emailtemplates View (base) 
className:'emailtemplates',loadData:function(){this.et_uid=this.options.context.attributes.modelId;var self=this;App.api.call("read",App.api.buildURL("pmse_Emails_Templates/getFields",null,{id:this.et_uid}),{},{success:function(a){self.et_uid=self.options.context.attributes.modelId;self.body=a.body;self.bodyHtml=a.body_html;self.templateName=a.name;self.templateDescription=a.description;self.fromName=a.from_name;self.fromAddres=a.from_address;self.subject=a.subject;self.targetFields=a.fields;self.relatedModules=a.related_modules;self.targetModule=a.base_module;self.render();$(init(self));}});}}) },
"compose-varbook-filter": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Compose-varbook-filter View (base) 
_moduleFilterList:[],_allModulesId:'All',_selectedModule:null,_currentSearch:'',events:{'keyup .search-name':'throttledSearch','paste .search-name':'throttledSearch','click .add-on.fa-times':'clearInput'},_render:function(){app.view.View.prototype._render.call(this);this.buildModuleFilterList();this.buildFilter();},buildModuleFilterList:function(){var allowedModules=this.collection.allowed_modules;var self=this;this._moduleFilterList=[{id:this._allModulesId,text:app.lang.get('Target Module')}];url=app.api.buildURL('pmse_Emails_Templates',this.collection.baseModule+'/find_modules',null,{module_list:this.collection.baseModule});app.api.call('read',url,null,{success:function(result){if(result.success){_.each(result.result,function(module){if(module.value!=self.collection.baseModule){self._moduleFilterList.push({id:module.value,text:module.text});}},self);}}});},buildFilter:function(){var $filter=this.getFilterField();if($filter.length>0){$filter.select2({data:this._moduleFilterList,allowClear:false,multiple:false,minimumResultsForSearch:-1,formatSelection:_.bind(this.formatModuleSelection,this),formatResult:_.bind(this.formatModuleChoice,this),dropdownCss:{width:'auto'},dropdownCssClass:'search-filter-dropdown',initSelection:_.bind(this.initSelection,this),escapeMarkup:function(m){return m;},width:'off'});$filter.off('change');$filter.on('change',_.bind(this.handleModuleSelection,this));this._selectedModule=this._selectedModule||this._allModulesId;$filter.select2('val',this._selectedModule);}},getFilterField:function(){return this.$('input.select2');},getModuleFilter:function(){return this.$('div.choice-filter');},unbind:function(){$filter=this.getFilterField();if($filter.length>0){$filter.off();$filter.select2('destroy');}
this._super("unbind");},throttledSearch:_.debounce(function(evt){var newSearch=this.$(evt.currentTarget).val();if(this._currentSearch!==newSearch){this._currentSearch=newSearch;this.applyFilter();}},400),initSelection:function(el,callback){if(el.is(this.getFilterField())){var module=_.findWhere(this._moduleFilterList,{id:el.val()});callback({id:module.id,text:module.text});}},formatModuleSelection:function(item){this.getModuleFilter().html(item.text);return'<span class="select2-choice-type">'
+app.lang.get('LBL_MODULE')
+'<i class="fa fa-caret-down"></i></span>';},formatModuleChoice:function(option){return'<div><span class="select2-match"></span>'+option.text+'</div>';},handleModuleSelection:function(evt,overrideVal){var module=overrideVal||evt.val||this._selectedModule||this._allModulesId;if(!_.isEmpty(_.findWhere(this._moduleFilterList,{id:module}))){this._selectedModule=module;this.getFilterField().select2('val',this._selectedModule);this.getModuleFilter().css('cursor','pointer');this.applyFilter();}},applyFilter:function(){var searchAllModules=(this._selectedModule===this._allModulesId),module=searchAllModules?[]:[this._selectedModule],isDirty=!_.isEmpty(this._currentSearch);this._toggleClearQuickSearchIcon(isDirty);this.context.trigger('compose:addressbook:search',module,this._currentSearch);},_toggleClearQuickSearchIcon:function(addIt){if(addIt&&!this.$('.add-on.fa-times')[0]){this.$('.filter-view.search').append('<i class="add-on fa fa-times"></i>');}else if(!addIt){this.$('.add-on.fa-times').remove();}},clearInput:function(){var $filter=this.getFilterField();this._currentSearch='';this._selectedModule=this._allModulesId;this.$('.search-name').val(this._currentSearch);if($filter.length>0){$filter.select2('val',this._selectedModule);}
this.applyFilter();}}) },
"create-actions": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Create-actions View (base) 
extendsFrom:'CreateView',saveOpenEmailsTemplatesName:'save_open_emailstemplates',SAVEACTIONS:{SAVE_OPEN_EMAILS_TEMPLATES:'saveOpenEmailsTemplates'},initialize:function(options){options.meta=_.extend({},app.metadata.getView(null,'create-actions'),options.meta);this._super('initialize',[options]);this.context.on('button:'+this.saveOpenEmailsTemplatesName+':click',this.saveOpenEmailsTemplates,this);},save:function(){switch(this.context.lastSaveAction){case this.SAVEACTIONS.SAVE_OPEN_EMAILS_TEMPLATES:this.saveOpenEmailsTemplates();break;default:this.saveAndClose();}},saveOpenEmailsTemplates:function(){this.context.lastSaveAction=this.SAVEACTIONS.SAVE_OPEN_EMAILS_TEMPLATES;this.initiateSave(_.bind(function(){app.navigate(this.context,this.model,'layout/emailtemplates');},this));}}) },
"record": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Record View (base) 
extendsFrom:'RecordView',initialize:function(options){app.view.invokeParent(this,{type:'view',name:'record',method:'initialize',args:[options]});this.context.on('button:design_emailtemplates:click',this.designEmailTemplates,this);this.context.on('button:export_emailtemplates:click',this.warnExportEmailTemplates,this);},_render:function(){this._super('_render');this.$('.record-cell[data-name=subject]').remove();this.$('.record-cell[data-name=body_html]').remove();},designEmailTemplates:function(model){app.navigate(this.context,model,'layout/emailtemplates');},warnExportEmailTemplates:function(model){var that=this;if(app.cache.get("show_emailtpl_export_warning")){app.alert.show('emailtpl-export-confirmation',{level:'confirmation',messages:app.lang.get('LBL_PMSE_IMPORT_EXPORT_WARNING')+"<br/><br/>"
+app.lang.get("LBL_PMSE_EXPORT_CONFIRMATION"),onConfirm:function(){app.cache.set('show_emailtpl_export_warning',false);that.exportEmailTemplates(model);},onCancel:$.noop});}else{that.exportEmailTemplates(model);}},exportEmailTemplates:function(model){var url=app.api.buildURL(model.module,'etemplate',{id:model.id},{platform:app.config.platform});if(_.isEmpty(url)){app.logger.error('Unable to get the Project download uri.');return;}
app.api.fileDownload(url,{error:function(data){app.error.handleHttpError(data,{});}},{iframe:this.$el});}}) },
"compose-varbook-list-bottom": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Compose-varbook-list-bottom View (base) 
extendsFrom:"ListBottomView",setShowMoreLabel:function(){this.showMoreLabel=app.lang.get('LBL_PMSE_SHOW_MORE_VARIABLES',this.module);}}) },
"recordlist": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Recordlist View (base) 
extendsFrom:'RecordlistView',initialize:function(options){this.contextEvents=_.extend({},this.contextEvents,{"list:editemailstemplates:fire":"openEmailsTemplates","list:exportemailstemplates:fire":"warnExportEmailsTemplates"});app.view.invokeParent(this,{type:'view',name:'recordlist',method:'initialize',args:[options]});},openEmailsTemplates:function(model){app.navigate(this.context,model,'layout/emailtemplates');},warnExportEmailsTemplates:function(model){var that=this;if(app.cache.get("show_emailtpl_export_warning")){app.alert.show('emailtpl-export-confirmation',{level:'confirmation',messages:app.lang.get('LBL_PMSE_IMPORT_EXPORT_WARNING')+"<br/><br/>"
+app.lang.get("LBL_PMSE_EXPORT_CONFIRMATION"),onConfirm:function(){app.cache.set('show_emailtpl_export_warning',false);that.exportEmailsTemplates(model);},onCancel:$.noop});}else{that.exportEmailsTemplates(model);}},exportEmailsTemplates:function(model){var url=app.api.buildURL(model.module,'etemplate',{id:model.id},{platform:app.config.platform});if(_.isEmpty(url)){app.logger.error('Unable to get the Project download uri.');return;}
app.api.fileDownload(url,{error:function(data){app.error.handleHttpError(data,{});}},{iframe:this.$el});}}) },
"emailtemplates-import-headerpane": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Emailtemplates-import-headerpane View (base) 
extendsFrom:'HeaderpaneView',events:{'click [name=emailtemplates_finish_button]':'initiateFinish','click [name=emailtemplates_cancel_button]':'initiateCancel'},initiateFinish:function(){this.context.trigger('emailtemplates:import:finish');},initiateCancel:function(){app.router.goBack();}}) },
"compose": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Compose View (base) 
extendsFrom:'RecordView',MIN_EDITOR_HEIGHT:300,EDITOR_RESIZE_PADDING:5,buttons:null,initialize:function(options){_.bindAll(this);var self=this;app.view.invokeParent(this,{type:'view',name:'record',method:'initialize',args:[options]});this.events=_.extend({},this.events,{'click [name=save_button]':'save','click [name=save_buttonExit]':'saveExit','click [name=cancel_button]':'cancel'});this.context.on('tinymce:oninit',this.handleTinyMceInit,this);this.action='edit';this.createMode=true;this._lastSelectedSignature=app.user.getPreference("signature_default");},_render:function(){var self=this;var url,$editor;this._super("_render");if(this.createMode){if(this.getField('name')){this.setTitle(app.lang.get('LBL_PMSE_EMAIL_TEMPLATES_DASHLET',this.module)+' | '+Handlebars.Utils.escapeExpression(this.getField('name').value));}}},cancel:function(){this.toggleEdit(false);this.inlineEditMode=false;App.router.navigate("pmse_Emails_Templates",{trigger:true});},save:function(){this.model.doValidate(this.getFields(this.module),_.bind(function(isValid){if(isValid){this.validationCompleteApprove(this.model,false);}},this));},validationCompleteApprove:function(model,exit){var url,attributes,bodyHtml,subject,route=this.context.get("module");url=App.api.buildURL('pmse_Emails_Templates',null,{id:this.context.attributes.modelId});bodyHtml=model.get('body_html');subject=model.get('subject');attributes={body_html:bodyHtml,subject:subject,description:model.get('description'),name:model.get('name')};App.alert.show('upload',{level:'process',title:'LBL_SAVING',autoclose:false});App.api.call('update',url,attributes,{success:function(data){App.alert.dismiss('upload');if(exit)
{model.revertAttributes();App.router.redirect(route);}},error:function(err){App.alert.dismiss('upload');}});},saveExit:function(){this.model.doValidate(this.getFields(this.module),_.bind(function(isValid){if(isValid){this.validationCompleteApprove(this.model,true);}},this));},_dispose:function(){if(App.drawer){App.drawer.off(null,null,this);}
this._super("_dispose");},handleTinyMceInit:function(){this.resizeEditor();},resizeEditor:function(drawerHeight){var $editor,headerHeight,recordHeight,showHideHeight,diffHeight,editorHeight,newEditorHeight;$editor=this.$('.mceLayout .mceIframeContainer iframe');if($editor.length===0){return;}
drawerHeight=drawerHeight||app.drawer.getHeight();headerHeight=this.$('.headerpane').outerHeight(true);recordHeight=this.$('.record').outerHeight(true);showHideHeight=this.$('.show-hide-toggle').outerHeight(true);editorHeight=$editor.height();diffHeight=drawerHeight-headerHeight-recordHeight-showHideHeight-this.EDITOR_RESIZE_PADDING;newEditorHeight=editorHeight+diffHeight;if(newEditorHeight<this.MIN_EDITOR_HEIGHT){newEditorHeight=this.MIN_EDITOR_HEIGHT;}
$editor.height(newEditorHeight);}}) },
"compose-varbook-list": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Compose-varbook-list View (base) 
extendsFrom:'FlexListView',plugins:['ListColumnEllipsis','ListRemoveLinks','Pagination'],unbindData:function(){var massCollection=this.context.get('mass_collection');if(massCollection){massCollection.off(null,null,this);}
this._super("unbindData");},getFieldNames:function(module){return['name','email'];},_render:function(){this._super("_render");var massCollection=this.context.get('mass_collection'),selectedRecipientsFieldName='compose_varbook_selected_variables';if(massCollection){massCollection.off(null,null,this);massCollection.on('add',function(model){var existingRecipients=this.model.get(selectedRecipientsFieldName);if(model.id&&existingRecipients instanceof Backbone.Collection){existingRecipients.add(model);}},this);massCollection.on('remove',function(model){var existingRecipients=this.model.get(selectedRecipientsFieldName);if(model.id&&existingRecipients instanceof Backbone.Collection){existingRecipients.remove(model);}},this);massCollection.on('reset',function(newCollection,prevCollection){var existingRecipients=this.model.get(selectedRecipientsFieldName);if(existingRecipients instanceof Backbone.Collection){if(newCollection.length>0){newCollection.add(prevCollection.previousModels);}else{newCollection.add(_.difference(prevCollection.previousModels,this.collection.models));}
existingRecipients.reset(newCollection.models);}},this);var existingRecipients=this.model.get(selectedRecipientsFieldName);if(existingRecipients instanceof Backbone.Collection&&existingRecipients.length>0){var recipientsToPreselect=existingRecipients.filter(_.bind(function(recipient){return(this.collection.where({id:recipient.get('id')}).length>0);},this));if(recipientsToPreselect.length>0){massCollection.add(recipientsToPreselect);}}}},_renderField:function(field){if(field.name=='_module'){field.model.set(field.name,app.lang.get('LBL_MODULE_NAME',field.model.get(field.name)));}
this._super("_renderField",[field]);}}) },
"emailtemplates-import": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Emailtemplates-import View (base) 
initialize:function(options){app.view.View.prototype.initialize.call(this,options);this.context.off("emailtemplates:import:finish",null,this);this.context.on("emailtemplates:import:finish",this.warnImportEmailTemplates,this);},_renderField:function(field){app.view.View.prototype._renderField.call(this,field);if(field.name==='emailtemplates_import'){field.setMode('edit');}},warnImportEmailTemplates:function(){var that=this;if(app.cache.get("show_emailtpl_import_warning")){app.alert.show('emailtpl-import-confirmation',{level:'confirmation',messages:app.lang.get('LBL_PMSE_IMPORT_EXPORT_WARNING')+"<br/><br/>"
+app.lang.get('LBL_PMSE_IMPORT_CONFIRMATION'),onConfirm:function(){app.cache.set("show_emailtpl_import_warning",false);that.importEmailTemplates();},onCancel:function(){app.router.goBack();}});}else{that.importEmailTemplates();}},importEmailTemplates:function(){var self=this,projectFile=$('[name=emailtemplates_import]');if(_.isEmpty(projectFile.val())){app.alert.show('error_validation_emailtemplates',{level:'error',messages:app.lang.get('LBL_PMSE_EMAIL_TEMPLATES_EMPTY_WARNING',self.module),autoClose:false});}else{app.file.checkFileFieldsAndProcessUpload(self,{success:function(data){app.router.goBack();app.alert.show('process-import-saved',{level:'success',messages:app.lang.get('LBL_PMSE_EMAIL_TEMPLATES_IMPORT_SUCCESS',self.module),autoClose:true});},error:function(error){app.alert.show('process-import-saved',{level:'error',messages:error.error_message,autoClose:false});}},{deleteIfFails:true,htmlJsonFormat:true});}},checkFileFieldsAndProcessUpload:function(model,callbacks){callbacks=callbacks||{};var $files=_.filter($(":file"),function(file){var $file=$(file);return($file.val()&&$file.attr("name")&&$file.attr("name")!=="")?$file.val()!=="":false;});var filesToUpload=$files.length;if(filesToUpload>0){app.alert.show('upload',{level:'process',title:'LBL_UPLOADING',autoclose:false});for(var file in $files){var $file=$($files[file]),fileField=$file.attr("name");if(callbacks.success)callbacks.success();}}
else{if(callbacks.success)callbacks.success();}}}) },
"compose-varbook-headerpane": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Compose-varbook-headerpane View (base) 
extendsFrom:"HeaderpaneView",events:{"click [name=done_button]":"_done","click [name=cancel_button]":"_cancel"},_done:function(){var massCollection=this.context.get('mass_collection');if(massCollection){app.drawer.close(massCollection);}else{this._cancel();}},_cancel:function(){app.drawer.close();}}) },
"dashlet-email": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Dashlet-email View (base) 
extendsFrom:'TabbedDashletView',_defaultSettings:{limit:10,visibility:'user'},initialize:function(options){options.meta=options.meta||{};options.meta.template='tabbed-dashlet';this.plugins=_.union(this.plugins,['LinkedModel']);this._super('initialize',[options]);},_initEvents:function(){this._super('_initEvents');this.on('dashlet-email:edit:fire',this.editRecord,this);this.on('dashlet-email:delete-record:fire',this.deleteRecord,this);this.on('dashlet-email:enable-record:fire',this.enableRecord,this);this.on('dashlet-email:download:fire',this.warnExportEmailsTemplates,this);this.on('dashlet-email:description-record:fire',this.descriptionRecord,this);return this;},editRecord:function(model){var redirect=model.module+"/"+model.id+"/layout/emailtemplates";app.router.navigate(redirect,{trigger:true,replace:true});},warnExportEmailsTemplates:function(model){var that=this;if(app.cache.get("show_emailtpl_export_warning")){app.alert.show('emailtpl-export-confirmation',{level:'confirmation',messages:app.lang.get('LBL_PMSE_IMPORT_EXPORT_WARNING')+"<br/><br/>"
+app.lang.get("LBL_PMSE_EXPORT_CONFIRMATION"),onConfirm:function(){app.cache.set('show_emailtpl_export_warning',false);that.exportEmailsTemplates(model);},onCancel:$.noop});}else{that.exportEmailsTemplates(model);}},exportEmailsTemplates:function(model){var url=app.api.buildURL(model.module,'etemplate',{id:model.id},{platform:app.config.platform});if(_.isEmpty(url)){app.logger.error('Unable to get the Email Template download uri.');return;}
app.api.fileDownload(url,{error:function(data){app.error.handleHttpError(data,{});}},{iframe:this.$el});},_initTabs:function(){app.view.invokeParent(this,{type:'view',name:'tabbed-dashlet',method:'_initTabs',platform:'base'});var today=new Date();today.setHours(23,59,59);today.toISOString();},createRecord:function(event,params){if(this.module!=='pmse_Emails_Templates'){this.createRelatedRecord(params.module,params.link);}else{var self=this;app.drawer.open({layout:'create-actions',context:{create:true,module:params.module}},function(context,model){if(!model){return;}
self.context.resetLoadFlag();self.context.set('skipFetch',false);if(_.isFunction(self.loadData)){self.loadData();}else{self.context.loadData();}});}},importRecord:function(event,params){App.router.navigate(params.link,{trigger:true,replace:true});},deleteRecord:function(model){var self=this;this._modelToDelete=true;var name=model.get('name')||'',context=app.lang.get('LBL_MODULE_NAME_SINGULAR',model.module).toLowerCase()+' - '+name.trim();app.alert.show(model.get('id')+':deleted',{level:'confirmation',messages:app.utils.formatString(app.lang.get('LBL_PRO_DELETE_CONFIRMATION',model.module)),onConfirm:function(){model.destroy({showAlerts:true,success:self._getRemoveRecord()});}});},_getRemoveRecord:function(){return _.bind(function(model){if(this.disposed){return;}
this.collection.remove(model);this.render();this.context.trigger("tabbed-dashlet:refresh",model.module);},this);},_refresh:function(model,status){app.alert.show(model.id+':refresh',{level:"process",title:status,autoclose:false});return _.bind(function(model){var options={};this.layout.reloadDashlet(options);app.alert.dismiss(model.id+':refresh');},this);},descriptionRecord:function(model){app.alert.dismiss('message-id');app.alert.show('message-id',{level:'info',title:app.lang.get('LBL_DESCRIPTION'),messages:'<br/>'+Handlebars.Utils.escapeExpression(model.get('description')),autoClose:false});},_renderHtml:function(){if(this.meta.config){this._super('_renderHtml');return;}
var tab=this.tabs[this.settings.get('activeTab')];if(tab.overdue_badge){this.overdueBadge=tab.overdue_badge;}
_.each(this.collection.models,function(model){var pictureUrl=app.api.buildFileURL({module:'Users',id:model.get('assigned_user_id'),field:'picture'});model.set('picture_url',pictureUrl);},this);this._super('_renderHtml');}}) }
}}
,
"layouts": {
"base": {
"compose-varbook": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Compose-varbook Layout (base) 
initialize:function(options){app.view.Layout.prototype.initialize.call(this,options);this.collection.sync=this.sync;this.collection.baseModule=this.layout.context.attributes.model.attributes.base_module;this.collection.allowed_modules=['Accounts','Contacts','Leads','Prospects','Users'];this.context.on('compose:addressbook:search',this.search,this);},sync:function(method,model,options){var callbacks,baseModule,url;options=options||{};if(_.isEmpty(options.module_list)||this.module_list.length>1){options.module_list=[this.baseModule];}else{options.module_list=[this.module_list[0]];}
app.config.maxQueryResult=app.config.maxQueryResult||20;options.limit=options.limit||app.config.maxQueryResult;options=app.data.parseOptionsForSync(method,model,options);callbacks=app.data.getSyncCallbacks(method,model,options);this.trigger('data:sync:start',method,model,options);_.extend(options.params,{base_module:model.baseModule});url=app.api.buildURL('pmse_Emails_Templates','variables/find',null,options.params);app.api.call('read',url,null,callbacks);},search:function(modules,term){this.collection.fetch({query:term,module_list:modules,offset:0,update:false});}}) }
}}
,
"datas": {}

},
		"WorkFlow":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"EAPM":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Worksheet":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Users":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Employees":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Administration":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"ACLRoles":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"InboundEmail":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Releases":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Prospects":{"fieldTemplates": {}
,
"views": {
"base": {
"record": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Record View (base) 
extendsFrom:'RecordView',initialize:function(options){this.plugins=_.union(this.plugins||[],['HistoricalSummary']);this._super('initialize',[options]);},delegateButtonEvents:function(){this.context.on('button:convert_button:click',this.convertProspectClicked,this);this._super("delegateButtonEvents");},convertProspectClicked:function(){var prefill=app.data.createBean('Leads');prefill.copy(this.model);app.drawer.open({layout:'create-actions',context:{create:true,model:prefill,module:'Leads',prospect_id:this.model.get('id')}},_.bind(function(context,model){if(model&&model.id&&!this.disposed){this.model.fetch();_.each(this.context.children,function(child){if(!_.isUndefined(child.attributes)&&!_.isUndefined(child.attributes.isSubpanel)){if(child.attributes.isSubpanel&&!child.attributes.hidden){child.attributes.collection.fetch();}}});}},this));}}) },
"convert-results": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Convert-results View (base) 
extendsFrom:'ConvertResultsView',populateResults:function(){if(!_.isEmpty(this.model.get('lead_id'))){var leads=app.data.createBean('Leads',{id:this.model.get('lead_id')});leads.fetch({success:_.bind(this.populateLeadCallback,this)});}},populateLeadCallback:function(leadModel){var rowTitle;this.associatedModels.reset();rowTitle=app.lang.get('LBL_CONVERTED_LEAD',this.module);leadModel.set('row_title',rowTitle);this.associatedModels.push(leadModel);app.view.View.prototype.render.call(this);}}) }
}}
,
"layouts": {}
,
"datas": {}

},
		"Queues":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"EmailMarketing":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"EmailTemplates":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"SNIP":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"ProspectLists":{"fieldTemplates": {}
,
"views": {
"base": {
"record": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Record View (base) 
extendsFrom:'RecordView',delegateButtonEvents:function(){this.context.on('button:export_button:click',this.exportListMembers,this);this._super("delegateButtonEvents");},exportListMembers:function(){app.alert.show('export_loading',{level:'process',title:app.lang.get('LBL_LOADING')});app.api.exportRecords({module:this.module,uid:[this.model.id],members:true},this.$el,{complete:function(){app.alert.dismiss('export_loading');}});}}) }
}}
,
"layouts": {}
,
"datas": {}

},
		"SavedSearch":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"UpgradeWizard":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Trackers":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"TrackerPerfs":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"TrackerSessions":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"TrackerQueries":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"FAQ":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Newsletters":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"KBDocuments":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"SugarFavorites":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"PdfManager":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"OAuthKeys":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"OAuthTokens":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Filters":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {
"base": {
"model": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Model Data (base) 
defaults:{editable:true},fieldTypeMap:{'datetime':'date','datetimecombo':'date'},buildSearchTermFilter:function(moduleName,searchTerm){if(moduleName==='all_modules'||!searchTerm){return[];}
searchTerm=searchTerm.trim();var splitTermFilter;var filterList=[];var searchMeta=app.data.getBeanClass('Filters').prototype.getModuleQuickSearchMeta(moduleName);var fieldNames=searchMeta.fieldNames;_.each(fieldNames,function(name){if(!_.isArray(name)){var filter=this._buildFilterDef(name,'$starts',searchTerm);if(filter){filterList.push(filter);}
return;}
if(splitTermFilter){app.logger.error('Cannot have more than 1 split term filter');return;}
splitTermFilter=this._buildSplitTermFilterDef(name,'$starts',searchTerm);},this);if(splitTermFilter){filterList.push(splitTermFilter);}
if(filterList.length>1){var filter=this._joinFilterDefs('$or',filterList);if(filter){filterList=[filter];}}
if(moduleName==='Users'||moduleName==='Employees'){filterList=this._simplifyFilterDef(filterList);filterList=[{'$and':[{'status':{'$not_equals':'Inactive'}},filterList]}];}
return filterList;},combineFilterDefinitions:function(baseFilter,searchTermFilter){var isBaseFilter=_.size(baseFilter)>0,isSearchTermFilter=_.size(searchTermFilter)>0;baseFilter=_.isArray(baseFilter)?baseFilter:[baseFilter];if(isBaseFilter&&isSearchTermFilter){baseFilter.push(searchTermFilter[0]);return[{'$and':baseFilter}];}else if(isBaseFilter){return baseFilter;}else if(isSearchTermFilter){return searchTermFilter;}
return[];},getFilterableFields:function(moduleName){var moduleMeta=app.metadata.getModule(moduleName),operatorMap=app.metadata.getFilterOperators(),fieldMeta=moduleMeta.fields,fields={};if(moduleMeta.filters){_.each(moduleMeta.filters,function(templateMeta){if(templateMeta.meta&&templateMeta.meta.fields){fields=_.extend(fields,templateMeta.meta.fields);}});}
_.each(fields,function(fieldFilterDef,fieldName){var fieldMetaData=app.utils.deepCopy(fieldMeta[fieldName]);if(_.isEmpty(fieldFilterDef)){fields[fieldName]=fieldMetaData||{};}else{fields[fieldName]=_.extend({name:fieldName},fieldMetaData,fieldFilterDef);}
delete fields[fieldName]['readonly'];});var validFields={};_.each(fields,function(value,key){var type=this.fieldTypeMap[value.type]||value.type;var hasAccess=app.acl.hasAccess('detail',moduleName,null,key);if(hasAccess&&(operatorMap[type]||value.predefined_filter===true)){validFields[key]=value;}},this);return validFields;},getModuleQuickSearchMeta:function(moduleName){moduleName=moduleName||this.get('module_name');var prototype=app.data.getBeanClass('Filters').prototype;prototype._moduleQuickSearchMeta=prototype._moduleQuickSearchMeta||{};prototype._moduleQuickSearchMeta[moduleName]=prototype._moduleQuickSearchMeta[moduleName]||this._getQuickSearchMetaByPriority(moduleName);return prototype._moduleQuickSearchMeta[moduleName];},populateFilterDefinition:function(filterDef,populateObj){if(!populateObj){return filterDef;}
filterDef=app.utils.deepCopy(filterDef);_.each(filterDef,function(row){_.each(row,function(filter,field){var hasNoOperator=(_.isString(filter)||_.isNumber(filter));if(hasNoOperator){filter={'$equals':filter};}
var operator=_.keys(filter)[0],value=filter[operator],isValueEmpty=!_.isNumber(value)&&_.isEmpty(value);if(isValueEmpty&&populateObj&&!_.isUndefined(populateObj[field])){value=populateObj[field];}
if(hasNoOperator){row[field]=value;}else{row[field][operator]=value;}});});return filterDef;},_getQuickSearchMetaByPriority:function(searchModule){var meta=app.metadata.getModule(searchModule),filters=meta?meta.filters:[],fieldNames=[],priority=0,splitTerms=false;_.each(filters,function(value){if(value&&value.meta&&value.meta.quicksearch_field&&priority<value.meta.quicksearch_priority){fieldNames=value.meta.quicksearch_field;priority=value.meta.quicksearch_priority;if(_.isBoolean(value.meta.quicksearch_split_terms)){splitTerms=value.meta.quicksearch_split_terms;}}});return{fieldNames:fieldNames,splitTerms:splitTerms};},_simplifyFilterDef:function(filterList){return filterList.length>1?filterList:filterList[0];},_buildFilterDef:function(fieldName,operator,searchTerm){var def={};var filter={};filter[operator]=searchTerm;def[fieldName]=filter;return def;},_joinFilterDefs:function(operator){var filterDefs=Array.prototype.slice.call(arguments,1);if(_.isEmpty(filterDefs)){return[];}
if(_.isArray(filterDefs[0])){filterDefs=filterDefs[0];}
if(filterDefs.length<2){return filterDefs[0];}
var filter={};filter[operator]=filterDefs;return filter;},_buildSplitTermFilterDef:function(fieldNames,operator,searchTerm){if(fieldNames.length>2){app.logger.error('Cannot have more than 2 fields in a complex filter');return;}
if(fieldNames.length===1){return this._buildFilterDef(fieldNames[0],operator,searchTerm);}
var filterList=[];var tokens=searchTerm.split(' ');for(var i=1;i<tokens.length;++i){var first=_.first(tokens,i).join(' ');var rest=_.rest(tokens,i).join(' ');var tokenFilter=[this._buildFilterDef(fieldNames[0],operator,first),this._buildFilterDef(fieldNames[1],operator,rest)];filterList.push(this._joinFilterDefs('$and',tokenFilter));}
_.each(fieldNames,function(name){filterList.push(this._buildFilterDef(name,operator,searchTerm));},this);return this._joinFilterDefs('$or',filterList);}}) },
"collection": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Collection Data (base) 
collection:null,_filterOptions:{},clearFilterOptions:function(){this._filterOptions={};return this;},comparator:function(model1,model2){if(model1.get('editable')===false&&model2.get('editable')!==false){return 1;}
if(model1.get('editable')!==false&&model2.get('editable')===false){return-1;}
if(this._getTranslatedFilterName(model1).toLowerCase()<this._getTranslatedFilterName(model2).toLowerCase()){return-1;}
return 1;},load:function(options){options=options||{};var module=this.moduleName,prototype=this._getPrototype(),collection;if(!module){app.logger.error('This Filters collection has no module defined.');return;}
if(this.collection){this.collection.off();}
prototype._request=prototype._request||{};if(prototype._request[module]){prototype._request[module].xhr.done(_.bind(function(){this._onSuccessCallback(options.success);},this));return;}
prototype._cache=prototype._cache||{};if(prototype._cache[module]){this._onSuccessCallback(options.success);return;}
this._initFiltersModuleCache();this._loadPredefinedFilters();if(!app.acl.hasAccess('list',module)){app.logger.debug('No "list" access to '+module+' so skipping fetch.');this._onSuccessCallback(options.success);return;}
var requestObj={showAlerts:false,filter:[{'created_by':app.user.id},{'module_name':module}],success:_.bind(function(models){this._cacheFilters(models);this._onSuccessCallback(options.success);},this),complete:function(){delete prototype._request[module];},error:function(){if(_.isFunction(options.error)){options.error();}else{app.logger.error('Unable to get filters from the server.');}}};prototype._request[module]=prototype.fetch.call(this,requestObj);},setModuleName:function(module){this.moduleName=module;return this;},setFilterOptions:function(key,val){var options;if(_.isObject(key)){options=key;}else{(options={})[key]=val;}
this._filterOptions=_.extend({},this._filterOptions,options);return this;},_cacheFilters:function(models){if(!models){return;}
var filters=_.isFunction(models.toJSON)?models.toJSON():models;filters=_.isArray(filters)?filters:[filters];var prototype=this._getPrototype();_.each(filters,function(filter){if(filter.editable===false){prototype._cache[this.moduleName].predefined[filter.id]=filter;}else if(filter.is_template){prototype._cache[this.moduleName].template[filter.id]=filter;}else{prototype._cache[this.moduleName].user[filter.id]=filter;}},this);},_createCachedCollection:function(){var prototype=app.data.getCollectionClasses().Filters.prototype,module=this.moduleName,collection;prototype._cachedCollection=prototype._cachedCollection||Backbone.Collection.extend({model:app.data.getBeanClass('Filters'),_setInitialFilter:this._setInitialFilter,comparator:this.comparator,_getPrototype:this._getPrototype,_getTranslatedFilterName:this._getTranslatedFilterName,_cacheFilters:this._cacheFilters,_updateFilterCache:this._updateFilterCache,_removeFilterCache:this._removeFilterCache,initialize:function(models,options){this.on('add',this._cacheFilters,this);this.on('cache:update',this._updateFilterCache,this);this.on('remove',this._removeFilterCache,this);}});collection=new prototype._cachedCollection();collection.moduleName=module;collection._filterOptions=this._filterOptions;collection.defaultFilterFromMeta=prototype._cache[module].defaultFilterFromMeta;collection.add(_.toArray(prototype._cache[module].predefined),{silent:true});collection.add(_.toArray(prototype._cache[module].user),{silent:true});return collection;},_getTranslatedFilterName:function(model){var name=model.get('name')||'';if(model.get('editable')!==false&&!model.get('is_template')){return name;}
var module=model.get('module_name')||this.moduleName;var fallbackLangModules=model.langModules||[module,'Filters'];var moduleName=app.lang.getModuleName(module,{plural:true});var text=app.lang.get(name,fallbackLangModules)||'';return app.utils.formatString(text,[moduleName]);},_loadPredefinedFilters:function(){var cache=this._getPrototype()._cache[this.moduleName],moduleMeta=app.metadata.getModule(this.moduleName);if(!moduleMeta){app.logger.error('The module "'+this.moduleName+'" has no metadata.');return;}
var moduleFilterMeta=moduleMeta.filters;if(!moduleFilterMeta){app.logger.error('The module "'+this.moduleName+'" has no filter metadata.');return;}
_.each(moduleFilterMeta,function(template){if(!template||!template.meta){return;}
if(_.isArray(template.meta.filters)){this._cacheFilters(template.meta.filters);}
if(template.meta.default_filter){cache.defaultFilterFromMeta=template.meta.default_filter;}},this);},_onSuccessCallback:function(callback){this.collection=this._createCachedCollection();if(this._filterOptions.initial_filter){this.collection._setInitialFilter();}
if(_.isFunction(callback)){callback(this.collection);}},_setInitialFilter:function(){var filterId=this._filterOptions.initial_filter;if(!filterId){return;}
if(filterId==='$relate'){var filterDef={};_.each(this._filterOptions.filter_populate,function(value,key){filterDef[key]='';});this.add([{'id':'$relate','editable':true,'is_template':true,'filter_definition':[filterDef]}],{silent:true});}else{var prototype=this._getPrototype();var filter=prototype._cache[this.moduleName].template[filterId];if(!filter){return;}
this.add(filter,{silent:true});}
this.get(filterId).set('name',this._filterOptions.initial_filter_label);this.get(filterId).langModules=this._filterOptions.initial_filter_lang_modules;},_updateFilterCache:function(model){if(!model){return;}
var attributes=_.isFunction(model.toJSON)?model.toJSON():model;if(attributes.is_template||attributes.editable===false){return;}
this._cacheFilters(model);},_removeFilterCache:function(model){var prototype=this._getPrototype();delete prototype._cache[this.moduleName].predefined[model.id];delete prototype._cache[this.moduleName].template[model.id];delete prototype._cache[this.moduleName].user[model.id];},_initFiltersModuleCache:function(){var prototype=this._getPrototype();prototype._cache=prototype._cache||{};prototype._cache[this.moduleName]={defaultFilterFromMeta:null,predefined:{},template:{},user:{}};},resetFiltersCacheAndRequests:function(){var prototype=this._getPrototype();prototype._cache={};_.each(prototype._request,function(request,module){request.xhr.abort();});prototype._request={};},_getPrototype:function(){return app.data.getCollectionClasses().Filters.prototype;},dispose:function(){if(this.collection){this.collection.off();}
this.off();}}) }
}}

},
		"UserSignatures":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Shippers":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Styleguide":{"fieldTemplates": {}
,
"views": {
"base": {
"docs-charts-horizontal": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-charts-horizontal View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');this.chart1=nv.models.multiBarChart().vertical(false).margin({top:10,right:10,bottom:10,left:10}).showValues(true).showTitle(false).tooltips(true).stacked(true).showControls(false).direction(app.lang.direction).tooltipContent(function(key,x,y,e,graph){return'<p>Outcome: <b>'+key+'</b></p>'+'<p>Lead Source: <b>'+x+'</b></p>'+'<p>Amount: <b>$'+parseInt(y)+'K</b></p>';});this.chart1.yAxis.tickFormat(d3.format(',.2f'));nv.utils.windowResize(this.chart1.update);this.chart2=nv.models.multiBarChart().vertical(false).margin({top:10,right:10,bottom:10,left:10}).showValues(true).showTitle(false).tooltips(true).showControls(false).stacked(false).direction(app.lang.direction).tooltipContent(function(key,x,y,e,graph){return'<p>Outcome: <b>'+key+'</b></p>'+'<p>Lead Source: <b>'+x+'</b></p>'+'<p>Amount: <b>$'+parseInt(y)+'K</b></p>';});this.chart2.yAxis.tickFormat(d3.format(',.2f'));nv.utils.windowResize(this.chart2.update);this.loadData();},loadData:function(options){d3.json('styleguide/content/charts/data/multibar_data_opportunities.json',_.bind(function(data){d3.select('#horiz1 svg').datum(data).transition().duration(500).call(this.chart1);},this));d3.json('styleguide/content/charts/data/multibar_data_negative.json',_.bind(function(data){d3.select('#horiz2 svg').datum(data).transition().duration(500).call(this.chart2);},this));}}) },
"docs-forms-editable": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-forms-editable View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');this.$('.url-editable-trigger').on('click.styleguide',function(){var uefield=$(this).next();uefield.html(uefield.text()).editable(function(value,settings){var nvprep='<a href="'+value+'">',nvapp='</a>',value=nvprep.concat(value);return(value);},{onblur:'submit'}).trigger('click.styleguide');});this.$('.text-editable-trigger').on('click.styleguide',function(){var uefield=$(this).next();uefield.html(uefield.text()).editable().trigger('click.styleguide');});this.$('.urleditable-field > a').each(function(){if(isEllipsis($(this))===true){$(this).attr({'data-original-title':$(this).text(),'rel':'tooltip','class':'longUrl'});}});function isEllipsis(e){return(e[0].offsetWidth<e[0].scrollWidth);}
this.$('.longUrl[rel=tooltip]').tooltip({placement:'top'});}}) },
"docs-dashboards-home": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-dashboards-home View (base) 
className:'container-fluid',_renderHtml:function(){var self=this;this._super('_renderHtml');this.$('.dashlet-example').on('click.styleguide',function(){var dashlet=$(this).data('dashlet'),metadata=app.metadata.getView('Home',dashlet).dashlets[0];metadata.type=dashlet;metadata.component=dashlet;self.layout.previewDashlet(metadata);});this.$('[data-modal]').on('click.styleguide',function(){var modal=$(this).data('modal');$(modal).appendTo('body').modal('show');});},_dispose:function(){this.$('.dashlet-example').off('click.styleguide');this.$('[data-modal]').off('click.styleguide');this._super('_dispose');}}) },
"docs-components-alerts": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-components-alerts View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');this.$('[data-alert]').on('click',function(){var $button=$(this),level=$button.data('alert'),state=$button.text(),auto_close=['info','success'].indexOf(level)>-1;app.alert.dismiss('core_meltdown_'+level);if(state!=='Example'){$button.text('Example');}else{app.alert.show('core_meltdown_'+level,{level:level,messages:'The core is in meltdown!!',autoClose:auto_close,onClose:function(){$button.text('Example');}});$button.text('Dismiss');}});},_dispose:function(){this.$('[data-alert]').off('click');app.alert.dismissAll();this._super('_dispose');}}) },
"docs-layouts-navbar": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-layouts-navbar View (base) 
className:'container-fluid'}) },
"styleguide": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Styleguide View (base) 
className:'container-fluid',_render:function(){var self=this;this._super('_render');}}) },
"docs-dashboards-intel": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-dashboards-intel View (base) 
className:'container-fluid',_renderHtml:function(){var self=this;this._super('_renderHtml');this.$('.dashlet-example').on('click.styleguide',function(){var dashlet=$(this).data('dashlet'),metadata=app.metadata.getView('Home',dashlet).dashlets[0];metadata.type=dashlet;metadata.component=dashlet;self.layout.previewDashlet(metadata);});},_dispose:function(){this.$('.dashlet-example').off('click.styleguide');this._super('_dispose');}}) },
"docs-forms-range": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-forms-range View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');var fieldSettings={view:this,def:{name:'include',type:'range',view:'edit',sliderType:'connected',minRange:0,maxRange:100,'default':true,enabled:true},viewName:'edit',context:this.context,module:this.module,model:this.model,meta:app.metadata.getField('range')},rangeField=app.view.createField(fieldSettings);this.$('#test_slider').append(rangeField.el);rangeField.render();rangeField.sliderDoneDelegate=function(minField,maxField){return function(value){minField.val(value.min);maxField.val(value.max);};}(this.$('#test_slider_min'),this.$('#test_slider_max'));}}) },
"docs-charts-implementation": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-charts-implementation View (base) 
className:'container-fluid'}) },
"dashlet-tabbed": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Dashlet-tabbed View (base) 
extendsFrom:'TabbedDashletView',_defaultSettings:{limit:10,visibility:'user'},initialize:function(options){options.meta=options.meta||{};options.meta.template='tabbed-dashlet';this.plugins=_.union(this.plugins,['LinkedModel']);this._super('initialize',[options]);},_initTabs:function(){this._super("_initTabs");var today=new Date();today.setHours(23,59,59);today.toISOString();_.each(_.pluck(_.pluck(this.tabs,'filters'),'date_due'),function(filter){_.each(filter,function(value,operator){if(value==='today'){filter[operator]=today;}});});},_renderHtml:function(){if(this.meta.config){this._super('_renderHtml');return;}
var tab=this.tabs[this.settings.get('activeTab')];if(tab.overdue_badge){this.overdueBadge=tab.overdue_badge;}
var model1=app.data.createBean('Tasks');model1.set("assigned_user_id","seed_sally_id");model1.set("assigned_user_name","Sally Bronsen");model1.set("name","Programmatically added task");model1.set("date_due","2014-02-07T07:15:00-05:00");model1.set("date_due_flag",false);model1.set("date_start",null);model1.set("date_start_flag",false);model1.set("status","Not Started");this.collection.add(model1);_.each(this.collection.models,function(model){var pictureUrl=app.api.buildFileURL({module:'Users',id:model.get('assigned_user_id'),field:'picture'});model.set('picture_url',pictureUrl);},this);this._super('_renderHtml');}}) },
"docs-layouts-drawer": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-layouts-drawer View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');this.$('#sg_open_drawer').on('click.styleguide',function(){app.drawer.open({layout:'create',context:{create:true,model:app.data.createBean('Styleguide')}});});},_dispose:function(){this.$('#sg_open_drawer').off('click.styleguide');this._super('_dispose');}}) },
"docs-forms-layouts": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-forms-layouts View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');var self=this;this.$('select.select2').each(function(){var $this=$(this),ctor=self.getSelect2Constructor($this);$this.select2(ctor);});this.$('table td [rel=tooltip]').tooltip({container:'body',placement:'top',html:'true'});this.$('.error input, .error textarea').on('focus',function(){$(this).next().tooltip('show');});this.$('.error input, .error textarea').on('blur',function(){$(this).next().tooltip('hide');});this.$('.add-on').tooltip('destroy').tooltip({trigger:'click',container:'body'});},_dispose:function(){this.$('.error input, .error textarea').off('focus');this.$('.error input, .error textarea').off('blur');},getSelect2Constructor:function($select){var _ctor={};_ctor.minimumResultsForSearch=7;_ctor.dropdownCss={};_ctor.dropdownCssClass='';_ctor.containerCss={};_ctor.containerCssClass='';if($select.hasClass('narrow')){_ctor.dropdownCss.width='auto';_ctor.dropdownCssClass='select2-narrow ';_ctor.containerCss.width='75px';_ctor.containerCssClass='select2-narrow';_ctor.width='off';}
if($select.hasClass('inherit-width')){_ctor.dropdownCssClass='select2-inherit-width ';_ctor.containerCss.width='100%';_ctor.containerCssClass='select2-inherit-width';_ctor.width='off';}
return _ctor;}}) },
"docs-index": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-index View (base) 
className:'container-fluid',section_description:'',section_key:'',_renderHtml:function(){var self=this,i=0,html='',request=this.context.attributes.request;this._super('_renderHtml');this.section_key=request.keys[1];function fmtLink(s,p){return'#Styleguide/docs/'+
(p?'':'index-')+
s.replace(/[\s\,]+/g,'-').toLowerCase()+
(p?'-'+p:'');}
if(request.keys.length===1){$.each(request.page_data,function(kS,vS){if(!vS.index){return;}
html+=(i%3===0?'<div class="row-fluid">':'');html+='<div class="span4"><h3>'+'<a class="section-link" href="'+
(vS.url?vS.url:fmtLink(kS))+'">'+
vS.title+'</a></h3><p>'+vS.description+'</p><ul>';if(vS.pages){$.each(vS.pages,function(kP,vP){html+='<li ><a class="section-link" href="'+
(vP.url?vP.url:fmtLink(kS,kP))+'">'+
vP.label+'</a></li>';});}
html+='</ul></div>';html+=(i%3===2?'</div>':'');i+=1;});this.section_description=request.page_data[request.keys[0]].description;}else{$.each(request.page_data[this.section_key].pages,function(kP,vP){html+=(i%4===0?'<div class="row-fluid">':'');html+='<div class="span3"><h3>'+
(!vP.items?('<a class="section-link" href="'+(vP.url?vP.url:fmtLink(self.section_key,kP))+'">'+vP.label+'</a>'):vP.label)+'</h3><p>'+vP.description;html+='</p></div>';html+=(i%4===3?'</div>':'');i+=1;});this.section_description=request.page_data[request.keys[1]].description;}
this.$('#index_content').append('<section id="section-menu"></section>').html(html);}}) },
"docs-components-progress": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-components-progress View (base) 
className:'container-fluid'}) },
"docs-layouts-modals": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-layouts-modals View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');this.$('[rel=popover]').popover();this.$('.modal').tooltip({selector:'[rel=tooltip]'});this.$('#dp1').datepicker({format:'mm-dd-yyyy'});this.$('#dp3').datepicker();this.$('#tp1').timepicker();}}) },
"sg-headerpane": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Sg-headerpane View (base) 
className:'headerpane',pageData:{},section:{},page:{},section_page:false,parent_link:'',file:'',keys:[],$find:[],initialize:function(options){var self=this;this._super('initialize',[options]);this.pageData=app.metadata.getLayout(this.module,'docs').page_data;this.file=this.context.get('page_name');if(!_.isUndefined(this.file)&&!_.isEmpty(this.file)){this.keys=this.file.split('-');}
if(this.keys.length){if(this.keys[0]==='index'){if(this.keys.length>1){this.section=this.pageData[this.keys[1]];}else{this.section=this.pageData[this.keys[0]];}
this.section_page=true;this.file='index';}else if(this.keys.length>1){this.section=this.pageData[this.keys[0]];this.page=this.section.pages[this.keys[1]];this.parent_link='-'+this.keys[0];}else{this.section=this.pageData[this.keys[0]];}}},_render:function(){var self=this,$optgroup={};this._super('_render');this.$find=$('#find_patterns');if(this.$find.length){$.each(this.pageData,function(k,v){if(!v.index){return;}
$optgroup=$('<optgroup>').appendTo(self.$find).attr('label',v.title);$.each(v.pages,function(i,d){renderSearchOption(k,i,d,$optgroup);});});this.$find.on('change',function(e){window.location.href=$(this).val();});this.$find.select2();}
function renderSearchOption(section,page,d,optgroup){$('<option>').appendTo(optgroup).attr('value',(d.url?d.url:fmtLink(section,page))).text(d.label);}
function fmtLink(section,page){return'#Styleguide/docs/'+
(page?'':'index-')+section.replace(/[\s\,]+/g,'-').toLowerCase()+(page?'-'+page:'');}},_dispose:function(){this.$find.off('change');this._super('_dispose');}}) },
"docs-base-responsive": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-base-responsive View (base) 
className:'container-fluid'}) },
"docs-base-labels": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-base-labels View (base) 
className:'container-fluid',module_list:[],_renderHtml:function(){this.module_list=_.without(app.metadata.getModuleNames({filter:'display_tab',access:'read'}),'Home');this.module_list.sort();this._super('_renderHtml');}}) },
"docs-base-variables": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-base-variables View (base) 
className:'container-fluid'}) },
"docs-layouts-list": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-layouts-list View (base) 
className:'container-fluid'}) },
"docs-forms-jstree": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-forms-jstree View (base) 
className:'container-fluid',_renderHtml:function(){var self=this;this._super('_renderHtml');this.$('#people').jstree({"json_data":{"data":[{"data":"Sabra Khan","state":"open","metadata":{id:1},"children":[{"data":"Mark Gibson","metadata":{id:2}},{"data":"James Joplin","metadata":{id:3}},{"data":"Terrence Li","metadata":{id:4}},{"data":"Amy McCray","metadata":{id:5},"children":[{"data":"Troy McClure","metadata":{id:6}},{"data":"James Kirk","metadata":{id:7}}]}]}]},"plugins":["json_data","ui","types"]}).bind('loaded.jstree',function(){self.$('#people').addClass('jstree-sugar');self.$('#people > ul').addClass('list');self.$('#people > ul > li > a').addClass('jstree-clicked');}).bind('select_node.jstree',function(e,data){data.inst.toggle_node(data.rslt.obj);});}}) },
"docs-charts-circular": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-charts-circular View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');d3.json('styleguide/content/charts/data/pie_data.json',function(data){nv.addGraph(function(){var chart=nv.models.pieChart().x(function(d){return d.key}).y(function(d){return d.value}).showLabels(true).showTitle(false).direction(app.lang.direction).colorData('default').tooltipContent(function(key,x,y,e,graph){return'<p>Stage: <b>'+key+'</b></p>'+'<p>Amount: <b>$'+parseInt(y)+'K</b></p>'+'<p>Percent: <b>'+x+'%</b></p>';});d3.select('#pie svg').datum(data).transition().duration(500).call(chart);return chart;});});d3.json('styleguide/content/charts/data/pie_data.json',function(data){nv.addGraph(function(){var chart=nv.models.pieChart().x(function(d){return d.key}).y(function(d){return d.value}).showLabels(true).showTitle(false).donut(true).donutRatio(0.4).donutLabelsOutside(true).hole(10).direction(app.lang.direction).colorData('default').tooltipContent(function(key,x,y,e,graph){return'<p>Stage: <b>'+key+'</b></p>'+'<p>Amount: <b>$'+parseInt(y)+'K</b></p>'+'<p>Percent: <b>'+x+'%</b></p>';});d3.select('#donut svg').datum(data).transition().duration(1200).call(chart);return chart;});});}}) },
"docs-base-edit": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-base-edit View (base) 
className:'container-fluid'}) },
"docs-base-theme": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-base-theme View (base) 
className:'container-fluid'}) },
"docs-forms-file": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-forms-file View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');var uobj=[],onUploadChange=function(e){var status=$(this),opts='show';if(this.value){var this_container=$(this).parent('.file-upload').parent('.upload-field-custom'),value_explode=this.value.split('\\'),value=value_explode[value_explode.length-1];if($(this).closest('.upload-field-custom').hasClass('avatar')===true){opts="hide";}
if(this_container.next('.file-upload-status').length>0){this_container.next('.file-upload-status').remove();}
this.$('<span class="file-upload-status '+opts+' ">'+value+'</span>').insertAfter(this_container);}},onUploadFocus=function(){$(this).parent().addClass('focus');},onUploadBlur=function(){$(this).parent().addClass('focus');};this.$('.upload-field-custom input[type=file]').each(function(){$(this).bind('focus',onUploadFocus).bind('blur',onUploadBlur).bind('change',onUploadChange);var lbl_width=$(this).parent().find('span strong').width()+24;$(this).parent().find('span').css('width',lbl_width).closest('.upload-field-custom').css('width',lbl_width);onUploadChange.call(this);$(this).css('width','0');});this.$('#photoimg').on('change',function(){$("#preview1").html('');$("#preview1").html('<span class="loading">Loading...</span>');$("#imageform").ajaxForm({target:'#preview1'}).submit();});this.$('.preview.avatar').on('click.styleguide',function(e){$(this).closest('.span10').find('label.file-upload span strong').trigger('click');});},_dispose:function(view){this.$('#photoimg').off('change');this.$('.preview.avatar').off('click.styleguide');}}) },
"docs-forms-datetime": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-forms-datetime View (base) 
className:'container-fluid',_renderHtml:function(){var self=this;this._super('_renderHtml');this.model.start_date='2000-01-01T22:47:00+00:00';var fieldSettingsDate={view:this,def:{name:'start_date',type:'date',view:'edit',enabled:true},viewName:'edit',context:this.context,module:this.module,model:this.model,meta:app.metadata.getField('date')},dateField=app.view.createField(fieldSettingsDate);this.$('#sugar7_date').append(dateField.el);dateField.render();this.model.start_datetime='2000-01-01T22:47:00+00:00';var fieldSettingsCombo={view:this,def:{name:'start_datetime',type:'datetimecombo',view:'edit',enabled:true},viewName:'edit',context:this.context,module:this.module,model:this.model,meta:app.metadata.getField('datetimecombo')},datetimecomboField=app.view.createField(fieldSettingsCombo);this.$('#sugar7_datetimecombo').append(datetimecomboField.el);datetimecomboField.render();this.$('#dp1').datepicker();this.$('#tp1').timepicker();this.$('#dp2').datepicker({format:'mm-dd-yyyy'});this.$('#tp2').timepicker({timeformat:'H.i.s'});this.$('#dp3').datepicker();var startDate=new Date(2012,1,20);var endDate=new Date(2012,1,25);this.$('#dp4').datepicker().on('changeDate',function(ev){if(ev.date.valueOf()>endDate.valueOf()){self.$('#alert').show().find('strong').text('The start date can not be greater then the end date');}else{self.$('#alert').hide();startDate=new Date(ev.date);self.$('#startDate').text(self.$('#dp4').data('date'));}
self.$('#dp4').datepicker('hide');});this.$('#dp5').datepicker().on('changeDate',function(ev){if(ev.date.valueOf()<startDate.valueOf()){self.$('#alert').show().find('strong').text('The end date can not be less then the start date');}else{self.$('#alert').hide();endDate=new Date(ev.date);self.$('#endDate').text(self.$('#dp5').data('date'));}
self.$('#dp5').datepicker('hide');});this.$('#tp3').timepicker({'scrollDefaultNow':true});this.$('#tp4').timepicker();this.$('#tp4_button').on('click',function(){self.$('#tp4').timepicker('setTime',new Date());});this.$('#tp5').timepicker({'minTime':'2:00pm','maxTime':'6:00pm','showDuration':true});this.$('#tp6').timepicker();this.$('#tp6').on('changeTime',function(){self.$('#tp6_legend').text('You selected: '+$(this).val());});this.$('#tp7').timepicker({'step':5});},_dispose:function(){this.$('#dp4').off('changeDate');this.$('#dp5').off('changeDate');this.$('#tp4_button').off('click');this.$('#tp6').off('changeTime');this._super('_dispose');}}) },
"docs-base-icons": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-base-icons View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');this.$('.chart-icon').each(function(){var svg=svgChartIcon($(this).data('chart-type'));$(this).html(svg);});this.$('.filetype-thumbnail').each(function(){$(this).html('<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="28" height="33"><g><path class="ft-ribbon" d="M 0,15 0,29 3,29 3,13 z" /><path d="M 3,1 20.5,1 27,8 27,32 3,32 z" style="fill:#ececec;stroke:#b3b3b3;stroke-width:1;stroke-linecap:butt;" /><path d="m 20,1 0,7 7,0 z" style="fill:#b3b3b3;stroke-width:0" /></g></svg>');});this.$('.sugar-cube').each(function(){var svg=svgChartIcon('sugar-cube');$(this).html(svg);});}}) },
"docs-base-typography": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-base-typography View (base) 
className:'container-fluid'}) },
"dashlet-chart": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Dashlet-chart View (base) 
extendsFrom:'OpportunityMetricsView',loadData:function(options){if(this.meta.config){return;}
this.metricsCollection={"won":{"amount_usdollar":40000,"count":4,"formattedAmount":"$30,000","icon":"caret-up","cssClass":"won","dealLabel":"won","stageLabel":"Won"},"lost":{"amount_usdollar":10000,"count":1,"formattedAmount":"$10,000","icon":"caret-down","cssClass":"lost","dealLabel":"lost","stageLabel":"Lost"},"active":{"amount_usdollar":30000,"count":3,"formattedAmount":"$30,000","icon":"minus","cssClass":"active","dealLabel":"active","stageLabel":"Active"}};this.chartCollection={"data":[{"key":"Won","value":4,"classes":"won"},{"key":"Lost","value":1,"classes":"lost"},{"key":"Active","value":3,"classes":"active"}],"properties":{"title":"Opportunity Metrics","value":8,"label":8}};this.total=8;}}) },
"docs-layouts-tabs": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-layouts-tabs View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');this.$('#nav-tabs-pills').find('ul.nav-tabs > li > a, ul.nav-list > li > a, ul.nav-pills > li > a').on('click.styleguide',function(e){e.preventDefault();e.stopPropagation();$(this).tab('show');});},_dispose:function(){this.$('#nav-tabs-pills').find('ul.nav-tabs > li > a, ul.nav-list > li > a, ul.nav-pills > li > a').off('click.styleguide');this._super('_dispose');}}) },
"docs-components-dropdowns": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-components-dropdowns View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');this.$('#mm001demo *').on('click.styleguide',function(){return false;});this.$('*').on('click.styleguide',function(){setTimeout(function(){this.$('#mm001demo').find('li.open .btn-group').addClass('open');},0.1);});},_dispose:function(){this.$('#mm001demo *').off('click.styleguide');this._super('_dispose');}}) },
"docs-base-mixins": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-base-mixins View (base) 
className:'container-fluid'}) },
"docs-forms-buttons": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-forms-buttons View (base) 
className:'container-fluid',_render:function(){this._super('_render');this.$('#fat-btn').click(function(){var btn=$(this);btn.button('loading');setTimeout(function(){btn.button('reset');},3000);})}}) },
"docs-components-tooltips": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-components-tooltips View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');this.$('#tooltips').tooltip({selector:'[rel=tooltip]'});}}) },
"docs-charts-line": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-charts-line View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');d3.json('styleguide/content/charts/data/line_data.json',function(data){nv.addGraph(function(){var chart=nv.models.lineChart().x(function(d){return d[0];}).y(function(d){return d[1];}).showTitle(false).tooltips(true).useVoronoi(false).showControls(false).direction(app.lang.direction).tooltipContent(function(key,x,y,e,graph){return'<p>Category: <b>'+key+'</b></p>'+'<p>Amount: <b>$'+parseInt(y,10)+'M</b></p>'+'<p>Date: <b>'+x+'</b></p>';});chart.xAxis.tickFormat(function(d){return d3.time.format('%x')(new Date(d));});chart.yAxis.axisLabel('Voltage (v)').tickFormat(d3.format(',.2f'));d3.select('#line1 svg').datum(data).transition().duration(500).call(chart);return chart;});});d3.json('styleguide/content/charts/data/line_data.json',function(data){nv.addGraph(function(){var chart=nv.models.stackedAreaChart().x(function(d){return d[0];}).y(function(d){return d[1];}).tooltipContent(function(key,x,y,e,graph){return'<p>Category: <b>'+key+'</b></p>'+'<p>Amount: <b>$'+parseInt(y,10)+'M</b></p>'+'<p>Date: <b>'+x+'</b></p>';}).showTitle(false).tooltips(true).useVoronoi(false).showControls(false).direction(app.lang.direction).colorData('graduated',{c1:'#e8e2ca',c2:'#3e6c0a',l:data.data.length});chart.xAxis.tickFormat(function(d){return d3.time.format('%x')(new Date(d));});chart.yAxis.axisLabel('Expenditures ($)').tickFormat(d3.format(',.2f'));d3.select('#area svg').datum(data).transition().duration(500).call(chart);return chart;});});}}) },
"docs-forms-switch": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-forms-switch View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');this.$('#mySwitch').on('switch-change',function(e,data){var $el=$(data.el),value=data.value;});},_dispose:function(){this.$('#mySwitch').off('switch-change');this._super('_dispose');}}) },
"docs-dashboards-dashlets": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-dashboards-dashlets View (base) 
className:'container-fluid',_renderHtml:function(){var self=this;this._super('_renderHtml');app.events.on('preview:close',function(){self.hideDashletPreview();});app.events.on('app:dashletPreview:close',function(){self.hideDashletPreview();});app.events.on('app:dashletPreview:open',function(){self.showDashletPreview();});app.events.trigger('app:dashletPreview:close');this.$('.dashlet-example').on('click.styleguide',function(){self.$('.dashlet-example').removeClass('active');$(this).addClass('active');app.events.trigger('app:dashletPreview:open');var dashlet=$(this).data('dashlet'),module=$(this).data('module')||'Styleguide',metadata=app.metadata.getView(module,dashlet).dashlets[0];metadata.type=dashlet;metadata.component=dashlet;self.previewDashlet(metadata);});},_dispose:function(){this.$('.dashlet-example').off('click.styleguide');app.events.trigger('app:dashletPreview:close');this._super('_dispose');},showDashletPreview:function(event){$('.main-pane').addClass('span8').removeClass('span12');$('.preview-pane').addClass('active');$('.side').css({visibility:'visible'});},hideDashletPreview:function(event){$('.dashlet-example').removeClass('active');$('.main-pane').addClass('span12').removeClass('span8');$('.side').css({visibility:'hidden'});},previewDashlet:function(metadata){var layout=this.layout,previewLayout;while(layout){if(layout.getComponent('preview-pane')){previewLayout=layout.getComponent('preview-pane').getComponent('dashlet-preview');break;}
layout=layout.layout;}
if(previewLayout){if(!metadata.preview){metadata.preview=metadata.config;}
var previousComponent=_.last(previewLayout._components);if(previousComponent.name!=='dashlet-preview'&&previousComponent.name!=='preview-header'){var index=previewLayout._components.length-1;previewLayout._components[index].dispose();previewLayout.removeComponent(index);}
var contextDef,component={label:app.lang.get(metadata.label,metadata.preview.module),type:metadata.type,preview:true};if(metadata.preview.module||metadata.preview.link){contextDef={skipFetch:false,forceNew:true,module:metadata.preview.module,link:metadata.preview.link};}else if(metadata.module){contextDef={module:metadata.module};}
component.view=_.extend({module:metadata.module},metadata.preview,component);if(contextDef){component.context=contextDef;}
previewLayout._addComponentsFromDef([{layout:{type:'dashlet',label:app.lang.get(metadata.preview.label||metadata.label,metadata.preview.module),preview:true,components:[component]}}],this.context.parent);previewLayout.loadData();previewLayout.render();}}}) },
"field": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Field View (base) 
className:'container-fluid',section:{},useTable:true,parent_link:'',tempfields:[],_render:function(){var self=this,fieldTypeReq=this.context.get('field_type'),fieldTypes=(fieldTypeReq==='all'?['text','bool','date','datetimecombo','currency','email']:[fieldTypeReq]),fieldStates=['detail','edit','error','disabled'],fieldLayouts=['base','record','list'],fieldMeta={};this.section.title='Form Elements';this.section.description='Basic fields that support detail, record, and edit modes with error addons.';this.useTable=(fieldTypeReq==='all'?true:false);this.parent_link=(fieldTypeReq==='all'?'docs/index-forms':'field/all');this.tempfields=[];_.each(fieldTypes,function(fieldType){fieldMeta=_.find(self.model.fields,function(field){if(field.type==='datetime'&&fieldType.indexOf('date')===0){field.type=fieldType;}
return field.type===fieldType;},self);if(fieldMeta){var metaData=self.meta['template_values'][fieldType];if(_.isObject(metaData)&&!_.isArray(metaData)){_.each(metaData,function(value,name){self.model.set(name,value);},self);}else{self.model.set(fieldMeta.name,metaData);}
self.tempfields.push(fieldMeta);}});this._super('_render');_.each(fieldTypes,function(fieldType){var fieldMeta=_.find(self.tempfields,function(field){return field.type===fieldType;},self);_.each(fieldStates,function(fieldState){_.each(fieldLayouts,function(fieldLayout){var fieldTemplate=fieldState;if(fieldLayout==='list'){if(fieldState==='edit'){fieldTemplate='list-edit';}else{fieldTemplate='list';}}else if(fieldState==='error'){fieldTemplate='edit';}
var fieldSettings={view:self,def:{name:fieldMeta.name,type:fieldType,view:fieldTemplate,default:true,enabled:fieldState==='disabled'?false:true},viewName:fieldTemplate,context:self.context,module:self.module,model:self.model,meta:fieldMeta};var fieldObject=app.view.createField(fieldSettings),fieldDivId='#'+fieldType+'_'+fieldState+'_'+fieldLayout;if(fieldState!=='detail'){if(!fieldObject.plugins||!_.contains(fieldObject.plugins,"ListEditable")||fieldLayout!=='list'){fieldObject.setMode('edit');}else{fieldObject.setMode('list-edit');}}
if(fieldState==='disabled'){fieldObject.setDisabled(true);}
self.$(fieldDivId).append(fieldObject.el);fieldObject.render();if(fieldType==='currency'&&fieldState==='edit'){fieldObject.setMode('edit');}
if(fieldState==='error'){if(fieldType==='email'){var errors={email:['primary@example.info']};fieldObject.decorateError(errors);}else{fieldObject.setMode('edit');fieldObject.decorateError('You did a bad, bad thing.');}}});});if(fieldTypeReq!=='all'){self.title=fieldTypeReq+' field';var descTpl=app.template.getView('styleguide.'+fieldTypeReq,self.module);if(descTpl){self.description=descTpl();}}});}}) },
"docs-base-grid": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-base-grid View (base) 
className:'container-fluid'}) },
"create-actions": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Create-actions View (base) 
extendsFrom:'CreateActionsView',showHelpText:false,showErrorDecoration:false,events:{'click a[name=show_help_text]:not(.disabled)':'toggleHelpText','click a[name=display_error_state]:not(.disabled)':'toggleErrorDecoration'},_render:function(){this._super('_render');var error_string='You did a bad, bad thing.';if(this.showErrorDecoration){_.each(this.fields,function(field){if(!_.contains(['button','rowaction','actiondropdown'],field.type)){field.setMode('edit');field._errors=error_string;if(field.type==='email'){var errors={email:['primary@example.info']};field.handleValidationError([errors]);}else{if(_.contains(['image','picture','avatar'],field.type)){field.handleValidationError(error_string);}else{field.decorateError(error_string);}}}},this);}},_renderField:function(field){app.view.View.prototype._renderField.call(this,field);var error_string='You did a bad, bad thing.';if(!this.showHelpText){field.def.help=null;field.options.def.help=null;}},toggleHelpText:function(){this.showHelpText=!this.showHelpText;this.render();},toggleErrorDecoration:function(){this.showErrorDecoration=!this.showErrorDecoration;this.render();}}) },
"docs-components-collapse": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-components-collapse View (base) 
className:'container-fluid'}) },
"docs-forms-select2": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-forms-select2 View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');var $this,ctor;function select2ChartSelection(chart){if(!chart.id)return chart.text;return svgChartIcon(chart.id);}
function select2ChartResult(chart){if(!chart.id)return chart.text;return svgChartIcon(chart.id)+chart.text;}
$('select[name="priority"]').select2({minimumResultsForSearch:7});$('#priority').select2({minimumResultsForSearch:7,width:'200px'});$("#e6").select2({placeholder:"Search for a movie",minimumInputLength:1,ajax:{url:"styleguide/content/js/select2.json",dataType:'json',data:function(term,page){return{q:term};},results:function(data,page){return{results:data.movies};}},formatResult:function(m){return m.title;},formatSelection:function(m){return m.title;}});$this=$('#priority2');ctor=this.getSelect2Constructor($this);$this.select2(ctor);$this=$('#state');ctor=this.getSelect2Constructor($this);ctor.formatSelection=function(state){return state.id;};$this.select2(ctor);$('#states3').select2({width:'200px',minimumResultsForSearch:7,allowClear:true});$this=$('#s2_hidden');ctor=this.getSelect2Constructor($this);ctor.data=[{id:0,text:'enhancement'},{id:1,text:'bug'},{id:2,text:'duplicate'},{id:3,text:'invalid'},{id:4,text:'wontfix'}];ctor.placeholder="Select a issue type...";$this.select2(ctor);$('#states4').select2({width:'200px',minimumResultsForSearch:1000,dropdownCssClass:'select2-drop-bootstrap'});$this=$('select[name="chart_type"]');ctor=this.getSelect2Constructor($this);ctor.dropdownCssClass='chart-results select2-narrow';ctor.width='off';ctor.minimumResultsForSearch=9;ctor.formatResult=select2ChartResult;ctor.formatSelection=select2ChartSelection;ctor.escapeMarkup=function(m){return m;};$this.select2(ctor);$this=$('select[name="label_module"]');ctor=this.getSelect2Constructor($this);ctor.width='off';ctor.minimumResultsForSearch=9;ctor.formatSelection=function(item){return'<span class="label label-module label-module-mini label-'+item.text+'">'+item.id+'</span>';};ctor.escapeMarkup=function(m){return m;};ctor.width='55px';$this.select2(ctor);$('#priority3').select2({width:'200px',minimumResultsForSearch:7,dropdownCssClass:'select2-drop-error'});$('#multi1').select2({width:'100%'});$('#multi2').select2({width:'300px'});$('#states5').select2({width:'100%',minimumResultsForSearch:7,containerCssClass:'select2-choices-pills-close'});$('#states4').select2({width:'100%',minimumResultsForSearch:7,containerCssClass:'select2-choices-pills-close',formatSelection:function(item){return'<span class="select2-choice-type">Link:</span><a href="javascript:void(0)" rel="'+item.id+'">'+item.text+'</a>';},escapeMarkup:function(m){return m;}});$('.error .select .error-tooltip').tooltip({trigger:'click',container:'body'});},getSelect2Constructor:function($select){var _ctor={};_ctor.minimumResultsForSearch=7;_ctor.dropdownCss={};_ctor.dropdownCssClass='';_ctor.containerCss={};_ctor.containerCssClass='';if($select.hasClass('narrow')){_ctor.dropdownCss.width='auto';_ctor.dropdownCssClass='select2-narrow ';_ctor.containerCss.width='75px';_ctor.containerCssClass='select2-narrow';_ctor.width='off';}
if($select.hasClass('inherit-width')){_ctor.dropdownCssClass='select2-inherit-width ';_ctor.containerCss.width='100%';_ctor.containerCssClass='select2-inherit-width';_ctor.width='off';}
return _ctor;}}) },
"docs-forms-fields": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-forms-fields View (base) 
className:'container-fluid'}) },
"docs-charts-custom": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-charts-custom View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');d3.json('styleguide/content/charts/data/funnel_data.json',function(data){nv.addGraph(function(){var chart=nv.models.funnelChart().showTitle(false).direction(app.lang.direction).fmtValueLabel(function(d){return'$'+(d.label||d.value||d)+'K';}).tooltipContent(function(key,x,y,e,graph){return'<p>Stage: <b>'+key+'</b></p>'+'<p>Amount: <b>$'+parseInt(y,10)+'K</b></p>'+'<p>Percent: <b>'+x+'%</b></p>';});d3.select('#funnel1 svg').datum(data).transition().duration(500).call(chart);return chart;});});d3.json('styleguide/content/charts/data/gauge_data.json',function(data){nv.addGraph(function(){var gauge=nv.models.gaugeChart().x(function(d){return d.key;}).y(function(d){return d.y;}).showLabels(true).showTitle(false).colorData('default').ringWidth(50).maxValue(9).direction(app.lang.direction).transitionMs(4000);d3.select('#gauge svg').datum(data).transition().duration(500).call(gauge);return gauge;});});d3.json('styleguide/content/charts/data/flare.json',function(data){nv.addGraph(function(){var chart=nv.models.treemapChart().leafClick(function(d){alert('leaf clicked');}).showTitle(false).tooltips(true).getSize(function(d){return d.size;}).direction(app.lang.direction).colorData('default');d3.select('#treemap1 svg').datum(data).transition().duration(500).call(chart);return chart;});});d3.json('styleguide/content/charts/data/tree_data.json',function(data){nv.addGraph(function(){var nodeRenderer=function(d){return'<img src="styleguide/content/charts/img/'+d.image+'" class="rep-avatar" width="32" height="32"><div class="rep-name">'+d.name+'</div><div class="rep-title">'+d.title+'</div>';};var chart=nv.models.tree().duration(300).nodeSize({'width':124,'height':56}).nodeRenderer(nodeRenderer).zoomExtents({'min':0.25,'max':4});d3.select('#org svg').datum(data).transition().duration(700).call(chart);nv.utils.windowResize(function(){chart.resize();});return chart;});});nv.addGraph(function(){var format=d3.time.format('%Y-%m-%d'),now=new Date(),duration=12,startDate=new Date(now.getFullYear(),(duration===12?0:Math.ceil((now.getMonth())/ 3)-1+duration),1),endDate=new Date(now.getFullYear(),(duration===12?12:startDate.getMonth()+3),0),dateRange=[startDate,endDate];d3.json('styleguide/content/charts/data/bubble_data.json',function(data){var chart=nv.models.bubbleChart().x(function(d){return format.parse(d.x);}).y(function(d){return d.y;}).tooltipContent(function(key,x,y,e,graph){return'<p>Assigned: <b>'+key+'</b></p>'+'<p>Amount: <b>$'+d3.format(',.02d')(e.point.opportunity)+'</b></p>'+'<p>Cloase Date: <b>'+d3.time.format('%x')(format.parse(e.point.x))+'</b></p>';}).showTitle(false).tooltips(true).showLegend(true).direction(app.lang.direction).colorData('graduated',{c1:'#d9edf7',c2:'#134158',l:data.data.length});d3.select('#bubble svg').datum(data).transition().duration(500).call(chart);nv.utils.windowResize(chart.update);return chart;});});d3.json('styleguide/content/charts/data/treemap_data.json',function(data){nv.addGraph(function(){var chart=nv.models.treemapChart().leafClick(function(d){alert('leaf clicked');}).getSize(function(d){return d.value;}).showTitle(false).tooltips(false).direction(app.lang.direction).colorData('class');d3.select('#treemap2 svg').datum(parseData(data.records)).transition().duration(500).call(chart);return chart;});});function parseData(data){var root={name:'Opportunities',children:[],x:0,y:0,dx:parseInt(document.getElementById('treemap2').offsetWidth,10),dy:parseInt(document.getElementById('treemap2').offsetHeight,10),depth:0,colorIndex:'0root_Opportunities'},colorIndices=['0root_Opportunities'],colors=d3.scale.category20().range();var today=new Date();today.setUTCHours(0,0,0,0);var day_ms=1000*60*60*24,d1=new Date(today.getTime()+31*day_ms);var data=data.filter(function(model){var d2=new Date(model.date_closed||'1970-01-01');return(d2-d1)/ day_ms<=30;}).map(function(d){return{assigned_user_name:d.assigned_user_name,sales_stage:d.sales_stage,name:d.name,amount_usdollar:d.amount_usdollar,color:d.color};});data=_.groupBy(data,function(m){return m.assigned_user_name;});_.each(data,function(value,key,list){list[key]=_.groupBy(value,function(m){return m.sales_stage;});});_.each(data,function(value1,key1){var child=[];_.each(value1,function(value2,key2){if(colorIndices.indexOf('2oppgroup_'+key2)===-1){colorIndices.push('2oppgroup_'+key2);}
_.each(value2,function(record){record.className='stage_'+record.sales_stage.toLowerCase().replace(' ','');record.value=parseInt(record.amount_usdollar,10);record.colorIndex='2oppgroup_'+key2;});child.push({name:key2,className:'stage_'+key2.toLowerCase().replace(' ',''),children:value2,colorIndex:'2oppgroup_'+key2});});if(colorIndices.indexOf('1rep_'+key1)===-1){colorIndices.push('1rep_'+key1);}
root.children.push({name:key1,children:child,colorIndex:'1rep_'+key1});});function accumulate(d){if(d.children){return d.value=d.children.reduce(function(p,v){return p+accumulate(v);},0);}
return d.value;}
accumulate(root);colorIndices.sort(d3.ascending());function setColorIndex(d){var i,l;d.colorIndex=colorIndices.indexOf(d.colorIndex);if(d.children){l=d.children.length;for(i=0;i<l;i+=1){setColorIndex(d.children[i]);}}}
setColorIndex(root);return root;}}}) },
"docs-components-popovers": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-components-popovers View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');this.$('[rel=popover]').popover();this.$('[rel=popoverHover]').popover({trigger:'hover'});this.$('[rel=popoverTop]').popover({placement:'top'});this.$('[rel=popoverBottom]').popover({placement:'bottom'});}}) },
"docs-charts-colors": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-charts-colors View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');var gauge_data_1={"properties":{"title":"Closed Won Opportunities Gauge","values":[{"group":1,"t":4}]},"data":[{"key":"Range 1","y":3},{"key":"Range 2","y":5},{"key":"Range 3","y":7},{"key":"Range 4","y":9}]};var gauge_data_2={"properties":{"title":"Closed Won Opportunities Gauge","values":[{"group":1,"t":4}]},"data":[{"key":"Range 1","y":3,"color":"#d62728"},{"key":"Range 2","y":5,"color":"#ff7f0e"},{"key":"Range 3","y":7,"color":"#bcbd22"},{"key":"Range 4","y":9,"color":"#2ca02c"}]};var gauge_data_3={"properties":{"title":"Closed Won Opportunities Gauge","values":[{"group":1,"t":4}]},"data":[{"key":"Range 1","y":3,"class":"nv-fill07"},{"key":"Range 2","y":5,"class":"nv-fill03"},{"key":"Range 3","y":7,"class":"nv-fill17"},{"key":"Range 4","y":9,"class":"nv-fill05"}]};nv.addGraph(function(){var gauge=nv.models.gaugeChart().x(function(d){return d.key}).y(function(d){return d.y}).showLabels(true).showTitle(true).colorData('default').ringWidth(50).maxValue(9).direction(app.lang.direction).transitionMs(4000);d3.select('#gauge1 svg').datum(gauge_data_1).call(gauge);return gauge;});nv.addGraph(function(){var gauge=nv.models.gaugeChart().x(function(d){return d.key}).y(function(d){return d.y}).showLabels(true).showTitle(true).colorData('default',{gradient:true}).ringWidth(50).maxValue(9).direction(app.lang.direction).transitionMs(4000);d3.select('#gauge2 svg').datum(gauge_data_1).transition().duration(500).call(gauge);return gauge;});nv.addGraph(function(){var gauge=nv.models.gaugeChart().x(function(d){return d.key}).y(function(d){return d.y}).showLabels(true).showTitle(true).colorData('default').ringWidth(50).maxValue(9).direction(app.lang.direction).transitionMs(4000);d3.select('#gauge3 svg').datum(gauge_data_2).transition().duration(500).call(gauge);return gauge;});nv.addGraph(function(){var gauge=nv.models.gaugeChart().x(function(d){return d.key}).y(function(d){return d.y}).showLabels(true).showTitle(true).colorData('default',{gradient:true}).ringWidth(50).maxValue(9).direction(app.lang.direction).transitionMs(4000);d3.select('#gauge4 svg').datum(gauge_data_2).transition().duration(500).call(gauge);return gauge;});nv.addGraph(function(){var gauge=nv.models.gaugeChart().x(function(d){return d.key}).y(function(d){return d.y}).showLabels(true).showTitle(true).colorData('graduated',{c1:'#e8e2ca',c2:'#3e6c0a',l:gauge_data_1.data.length}).ringWidth(50).maxValue(9).direction(app.lang.direction).transitionMs(4000);d3.select('#gauge5 svg').datum(gauge_data_1).transition().duration(500).call(gauge);return gauge;});nv.addGraph(function(){var gauge=nv.models.gaugeChart().x(function(d){return d.key}).y(function(d){return d.y}).showLabels(true).showTitle(true).colorData('graduated',{c1:'#e8e2ca',c2:'#3e6c0a',l:gauge_data_1.data.length,gradient:true}).ringWidth(50).maxValue(9).direction(app.lang.direction).transitionMs(4000);d3.select('#gauge6 svg').datum(gauge_data_1).transition().duration(500).call(gauge);return gauge;});nv.addGraph(function(){var gauge=nv.models.gaugeChart().x(function(d){return d.key}).y(function(d){return d.y}).showLabels(true).showTitle(true).colorData('class').ringWidth(50).maxValue(9).direction(app.lang.default).transitionMs(4000);d3.select('#gauge7 svg').datum(gauge_data_1).transition().duration(500).call(gauge);return gauge;});nv.addGraph(function(){var gauge=nv.models.gaugeChart().x(function(d){return d.key}).y(function(d){return d.y}).showLabels(true).showTitle(true).colorData('class',{gradient:true}).ringWidth(50).maxValue(9).direction(app.lang.direction).transitionMs(4000);d3.select('#gauge8 svg').datum(gauge_data_3).transition().duration(500).call(gauge);return gauge;});}}) },
"docs-charts-vertical": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs-charts-vertical View (base) 
className:'container-fluid',_renderHtml:function(){this._super('_renderHtml');this.chart1=nv.models.multiBarChart().showTitle(false).tooltips(true).showControls(false).direction(app.lang.direction).colorData('default').tooltipContent(function(key,x,y,e,graph){return'<p>Stage: <b>'+key+'</b></p>'+'<p>Amount: <b>$'+parseInt(y,10)+'K</b></p>'+'<p>Percent: <b>'+x+'%</b></p>';});nv.utils.windowResize(this.chart1.update);this.chart2=nv.models.paretoChart().showTitle(false).showLegend(true).tooltips(true).showControls(false).direction(app.lang.direction).stacked(true).clipEdge(false).colorData('default').yAxisTickFormat(function(d){return'$'+d3.format(',.2s')(d);}).quotaTickFormat(function(d){return'$'+d3.format(',.3s')(d);});nv.utils.windowResize(this.chart2.update);this.loadData();},loadData:function(options){d3.json('styleguide/content/charts/data/multibar_data.json',_.bind(function(data){d3.select('#vert1 svg').datum(data).transition().duration(500).call(this.chart1);},this));d3.json('styleguide/content/charts/data/pareto_data_salesrep.json',_.bind(function(data){d3.select('#vert2 svg').datum(data).call(this.chart2);},this));}}) }
}}
,
"layouts": {
"base": {
"view": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// View Layout (base) 
plugins:['Prettify'],className:'row-fluid',data:[],page_name:'',page_doc:{},section:{},initialize:function(options){this._super('initialize',[options]);this.page_name=this.options.context.get('page_name').split('_')[1];this.section.title='Default Views';if($('head #styleguide_css').length===0){$('<link>').attr({rel:'stylesheet',href:'styleguide/assets/css/styleguide.css',id:'styleguide_css'}).appendTo('head');}},_render:function(){this._super('_render');var page_content=app.template.getView(this.page_name+'.'+this.page_name+'-doc','Styleguide');this.page_doc=app.view.createView({context:this.context,name:this.page_name,module:'Styleguide',layout:this,model:this.model,readonly:true});this.$('.styleguide .container-fluid').append(page_content(this));this.$('#exampleView').append(this.page_doc.el);this.page_doc.render();},_placeComponent:function(component){this.$('.styleguide').append(component.$el);}}) },
"styleguide": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Styleguide Layout (base) 
className:'row-fluid',initialize:function(options){this._super('initialize',[options]);if($('head #styleguide_css').length===0){$('<link>').attr({rel:'stylesheet',href:'styleguide/assets/css/styleguide.css',id:'styleguide_css'}).appendTo('head');}},_placeComponent:function(component){this.$('.styleguide').append(component.$el);}}) },
"docs": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Docs Layout (base) 
plugins:['Prettify'],className:'row-fluid',initialize:function(options){var self=this,request={file:'',keys:[],page:{},page_data:{},parent_link:'',section:{},section_page:false},main;this._super('initialize',[options]);app.events.trigger('app:dashletPreview:close');if($('head #styleguide_css').length===0){$('<link>').attr({rel:'stylesheet',href:'styleguide/assets/css/styleguide.css',id:'styleguide_css'}).appendTo('head');}
request.page_data=app.metadata.getLayout(this.module,'docs').page_data;request.file=this.context.get('page_name');if(!_.isUndefined(request.file)&&!_.isEmpty(request.file)){request.keys=request.file.split('-');}
if(request.keys.length){if(request.keys[0]==='index'){if(request.keys.length>1){request.section=request.page_data[request.keys[1]];}else{request.section=request.page_data[request.keys[0]];}
request.section_page=true;request.file='index';}else if(request.keys.length>1){request.section=request.page_data[request.keys[0]];request.page=request.section.pages[request.keys[1]];request.parent_link='-'+request.keys[0];window.prettyPrint&&prettyPrint();}else{request.section=request.page_data[request.keys[0]];}}
main=this.getComponent('main-pane');main._addComponentsFromDef([{view:'docs-'+request.file,context:{module:'Styleguide',skipFetch:true,request:request}}]);this.render();},_placeComponent:function(component){if(component.meta.name){this.$("."+component.meta.name).append(component.$el);}}}) },
"field": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Field Layout (base) 
plugins:['Prettify'],className:'row-fluid',initialize:function(options){this._super('initialize',[options]);if($('head #styleguide_css').length===0){$('<link>').attr({rel:'stylesheet',href:'styleguide/assets/css/styleguide.css',id:'styleguide_css'}).appendTo('head');}},_placeComponent:function(component){this.$('.styleguide').append(component.$el);}}) }
}}
,
"datas": {}

},
		"Feedbacks":{"fieldTemplates": {
"base": {
"rating": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Rating FieldTemplate (base) 
initialize:function(options){this._super('initialize',[options]);this.def.rate=this.def.rate||3;this.model.setDefault(this.name,this.def.default);},format:function(value){this.stars=_.map(_.range(1,this.def.rate+1),function(n){return n<=value;});return value;},unformat:function(value){return value+1;},bindDomChange:function(){if(!this.model){return;}
var $el=this.$('[data-value]');$el.on('click',_.bind(function(evt){var value=$(evt.currentTarget).data('value');this.model.set(this.name,this.unformat(value));},this));},bindDataChange:function() {if(this.model){this.model.on('change:'+this.name,this.render,this);}}}) }
}}
,
"views": {
"base": {
"feedback": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Feedback View (base) 
plugins:['ErrorDecoration'],events:{'click [data-action=submit]':'submit','click [data-action=close]':'close'},initialize:function(options){options.model=app.data.createBean('Feedbacks');var fieldsMeta=_.flatten(_.pluck(options.meta.panels,'fields'));options.model.fields={};_.each(fieldsMeta,function(field){options.model.fields[field.name]=field;});this._super('initialize',[options]);this.context.set('skipFetch',true);this.model.on('error:validation',function(){app.alert.show('send_feedback',{level:'error',messages:app.lang.get('LBL_FEEDBACK_SEND_ERROR',this.module)});},this);this.model.on('validation:success',this.send,this);this.button=$(options.button);this._isOpen=false;var learnMoreUrl='http://www.sugarcrm.com/crm/product_doc.php?'+$.param({edition:app.metadata.getServerInfo().flavor,version:app.metadata.getServerInfo().version,lang:app.lang.getLanguage(),module:this.module,route:'list'});this.aside=new Handlebars.SafeString(app.lang.get('TPL_FEEDBACK_ASIDE',this.module,{learnMoreLink:new Handlebars.SafeString('<a href="'+learnMoreUrl+'" target="_blank">'+Handlebars.Utils.escapeExpression(app.lang.get('LBL_FEEDBACK_ASIDE_CLICK_MORE',this.module))+'</a>'),contactSupportLink:new Handlebars.SafeString('<a href="http://support.sugarcrm.com" target="_blank">'+Handlebars.Utils.escapeExpression(app.lang.get('LBL_FEEDBACK_ASIDE_CONTACT_SUPPORT',this.module))+'</a>')}));},_initPopover:function(button){button.popover({title:app.lang.get('LBL_FEEDBACK',this.module),content:_.bind(function(){return this.$el;},this),html:true,placement:'top',trigger:'manual',template:'<div class="popover feedback"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});},close:function(){this.toggle(false);},toggle:function(show){if(_.isUndefined(show)){this._isOpen=!this._isOpen;}else{this._isOpen=show;}
this.button.popover('destroy');this.render();if(this._isOpen){this._initPopover(this.button);this.button.popover('show');}
this.trigger(this._isOpen?'show':'hide',this,this._isOpen);},_dispose:function(){if(this.button){this.button.popover('destroy');}
this._super('_dispose');},submit:function(){this.model.doValidate();},send:function(){this.model.set({timezone:app.user.getPreference('timezone'),account_type:app.user.get('type'),role:app.user.get('roles').join(', ')||'n/a',feedback_app_path:window.location.href,feedback_user_browser:navigator.userAgent+' ('+navigator.language+')',feedback_user_os:navigator.platform,feedback_sugar_version:_.toArray(_.pick(app.metadata.getServerInfo(),'product_name','version')).join(' '),company:app.config.systemName});var post_url='https://docs.google.com/forms/d/1iIdfeWma_OUUkaP-wSojZW2GelaxMOBgDq05A8PGHY8/formResponse';$.ajax({url:post_url,type:'POST',data:{'entry.98009013':this.model.get('account_type'),'entry.1589366838':this.model.get('timezone'),'entry.762467312':this.model.get('role'),'entry.968140953':this.model.get('feedback_text'),'entry.944905780':this.model.get('feedback_app_path'),'entry.1750203592':this.model.get('feedback_user_browser'),'entry.1115361778':this.model.get('feedback_user_os'),'entry.1700062722':this.model.get('feedback_csat'),'entry.1926759955':this.model.get('feedback_sugar_version'),'entry.398692075':this.model.get('company')},dataType:'script',crossDomain:true,cache:false,context:this,timeout:10000,success:function(){app.alert.show('send_feedback',{level:'success',messages:app.lang.get('LBL_FEEDBACK_SENT',this.module),autoClose:true});this.model.clear();this.toggle(false);},error:function(){app.alert.show('send_feedback',{level:'error',messages:app.lang.get('LBL_FEEDBACK_NOT_SENT',this.module)});}});}}) }
}}
,
"layouts": {}
,
"datas": {}

},
		"Library":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"EmailAddresses":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Words":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Sugar_Favorites":{"fieldTemplates": {}
,
"views": {}
,
"layouts": {}
,
"datas": {}

},
		"Audit":{"fieldTemplates": {
"base": {
"fieldtype": {"controller": /*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
({
	// Fieldtype FieldTemplate (base) 
format:function(value){if(this.context&&this.context.parent){var parentModel=this.context.parent.get('model'),field=parentModel.fields[value];if(field){value=app.lang.get(field.label||field.vname,parentModel.module);}}
return value;}}) }
}}
,
"views": {}
,
"layouts": {}
,
"datas": {}

}
	}}})(SUGAR.App);