/*
     * Your installation or use of this SugarCRM file is subject to the applicable
     * terms available at
     * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
     * If you do not agree to all of the applicable terms or do not have the
     * authority to bind the entity as an authorized representative, then do not
     * install or use this SugarCRM file.
     *
     * Copyright (C) SugarCRM Inc. All rights reserved.
     */
(function(app){app.events.on('app:init',function(){app.plugins.register('MergeDuplicates',['view'],{_minRecordsToMerge:2,_maxRecordsToMerge:5,mergeDuplicates:function(mergeCollection,primaryRecord){if(_.isEmpty(mergeCollection)){return;}
if(!_.isEmpty(primaryRecord)){mergeCollection.add(primaryRecord,{at:0,silent:true});}
var models=this._validateModelsForMerge(mergeCollection.models);if(!this.triggerBefore('mergeduplicates',models)){return;}
if(this._validateAcl(models,mergeCollection)===false){this._showAclAlert(models,mergeCollection,primaryRecord);return;}
if(this._validateIsAnyEditable(models)===false){this._showNoEditAlert();return;}
if(this._validateSize(models)===false){this._showSizeAlert();return;}
this._openMergeDrawer(models,mergeCollection,primaryRecord);},_validateAcl:function(models,collection){return models.length===collection.models.length;},_showAclAlert:function(models,collection,primary){var self=this;app.alert.show('invalid-record-access',{level:'confirmation',messages:app.lang.get('LBL_MERGE_NO_ACCESS_TO_A_FEW_RECORDS',this.module),onConfirm:function(){if(self._validateIsAnyEditable(models)===false){self._showNoEditAlert();return;}
if(self._validateSize(models)===false){self._showSizeAlert();return;}
self._openMergeDrawer(models,collection,primary);}});},_validateIsAnyEditable:function(models){return _.some(models,function(model){return app.acl.hasAccessToModel('edit',model);});},_showNoEditAlert:function(){var msg=app.lang.get('LBL_MERGE_NO_ACCESS',this.module);app.alert.show('no-record-to-edit',{level:'error',messages:msg});},_validateSize:function(models){var isValidSize=models.length&&models.length>=this._minRecordsToMerge&&models.length<=this._maxRecordsToMerge;return isValidSize;},_showSizeAlert:function(){var msg=app.lang.get('TPL_MERGE_INVALID_NUMBER_RECORDS',this.module,{minRecords:this._minRecordsToMerge,maxRecords:this._maxRecordsToMerge});app.alert.show('invalid-record-count',{level:'error',messages:msg});},_openMergeDrawer:function(models,collection,primary){var primaryId=(primary&&primary.id)||null;app.drawer.open({layout:'merge-duplicates',context:{primary:primary||null,selectedDuplicates:models}},_.bind(function(refresh,primary){if(refresh){this.trigger('mergeduplicates:complete',primary);collection.reset();}else{collection.remove(primaryId);}},this));},_validateModelsForMerge:function(models){return _.filter(models,function(model){return _.every(['view','delete'],function(acl){return app.acl.hasAccessToModel(acl,model);});},this);}});});})(SUGAR.App);