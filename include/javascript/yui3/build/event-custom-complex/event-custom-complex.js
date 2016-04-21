/*
     YUI 3.15.0 (build 834026e)
     Copyright 2014 Yahoo! Inc. All rights reserved.
     Licensed under the BSD License.
     http://yuilibrary.com/license/
     */
YUI.add('event-custom-complex',function(Y,NAME){var FACADE,FACADE_KEYS,YObject=Y.Object,key,EMPTY={},CEProto=Y.CustomEvent.prototype,ETProto=Y.EventTarget.prototype,mixFacadeProps=function(facade,payload){var p;for(p in payload){if(!(FACADE_KEYS.hasOwnProperty(p))){facade[p]=payload[p];}}};Y.EventFacade=function(e,currentTarget){if(!e){e=EMPTY;}
this._event=e;this.details=e.details;this.type=e.type;this._type=e.type;this.target=e.target;this.currentTarget=currentTarget;this.relatedTarget=e.relatedTarget;};Y.mix(Y.EventFacade.prototype,{stopPropagation:function(){this._event.stopPropagation();this.stopped=1;},stopImmediatePropagation:function(){this._event.stopImmediatePropagation();this.stopped=2;},preventDefault:function(){this._event.preventDefault();this.prevented=1;},halt:function(immediate){this._event.halt(immediate);this.prevented=1;this.stopped=(immediate)?2:1;}});CEProto.fireComplex=function(args){var es,ef,q,queue,ce,ret=true,events,subs,ons,afters,afterQueue,postponed,prevented,preventedFn,defaultFn,self=this,host=self.host||self,next,oldbubble,stack=self.stack,yuievt=host._yuievt,hasPotentialSubscribers;if(stack){if(self.queuable&&self.type!==stack.next.type){if(!stack.queue){stack.queue=[];}
stack.queue.push([self,args]);return true;}}
hasPotentialSubscribers=self.hasSubs()||yuievt.hasTargets||self.broadcast;self.target=self.target||host;self.currentTarget=host;self.details=args.concat();if(hasPotentialSubscribers){es=stack||{id:self.id,next:self,silent:self.silent,stopped:0,prevented:0,bubbling:null,type:self.type,defaultTargetOnly:self.defaultTargetOnly};subs=self.getSubs();ons=subs[0];afters=subs[1];self.stopped=(self.type!==es.type)?0:es.stopped;self.prevented=(self.type!==es.type)?0:es.prevented;if(self.stoppedFn){events=new Y.EventTarget({fireOnce:true,context:host});self.events=events;events.on('stopped',self.stoppedFn);}
self._facade=null;ef=self._createFacade(args);if(ons){self._procSubs(ons,args,ef);}
if(self.bubbles&&host.bubble&&!self.stopped){oldbubble=es.bubbling;es.bubbling=self.type;if(es.type!==self.type){es.stopped=0;es.prevented=0;}
ret=host.bubble(self,args,null,es);self.stopped=Math.max(self.stopped,es.stopped);self.prevented=Math.max(self.prevented,es.prevented);es.bubbling=oldbubble;}
prevented=self.prevented;if(prevented){preventedFn=self.preventedFn;if(preventedFn){preventedFn.apply(host,args);}}else{defaultFn=self.defaultFn;if(defaultFn&&((!self.defaultTargetOnly&&!es.defaultTargetOnly)||host===ef.target)){defaultFn.apply(host,args);}}
if(self.broadcast){self._broadcast(args);}
if(afters&&!self.prevented&&self.stopped<2){afterQueue=es.afterQueue;if(es.id===self.id||self.type!==yuievt.bubbling){self._procSubs(afters,args,ef);if(afterQueue){while((next=afterQueue.last())){next();}}}else{postponed=afters;if(es.execDefaultCnt){postponed=Y.merge(postponed);Y.each(postponed,function(s){s.postponed=true;});}
if(!afterQueue){es.afterQueue=new Y.Queue();}
es.afterQueue.add(function(){self._procSubs(postponed,args,ef);});}}
self.target=null;if(es.id===self.id){queue=es.queue;if(queue){while(queue.length){q=queue.pop();ce=q[0];es.next=ce;ce._fire(q[1]);}}
self.stack=null;}
ret=!(self.stopped);if(self.type!==yuievt.bubbling){es.stopped=0;es.prevented=0;self.stopped=0;self.prevented=0;}}else{defaultFn=self.defaultFn;if(defaultFn){ef=self._createFacade(args);if((!self.defaultTargetOnly)||(host===ef.target)){defaultFn.apply(host,args);}}}
self._facade=null;return ret;};CEProto._hasPotentialSubscribers=function(){return this.hasSubs()||this.host._yuievt.hasTargets||this.broadcast;};CEProto._createFacade=CEProto._getFacade=function(fireArgs){var userArgs=this.details,firstArg=userArgs&&userArgs[0],firstArgIsObj=(firstArg&&(typeof firstArg==="object")),ef=this._facade;if(!ef){ef=new Y.EventFacade(this,this.currentTarget);}
if(firstArgIsObj){mixFacadeProps(ef,firstArg);if(firstArg.type){ef.type=firstArg.type;}
if(fireArgs){fireArgs[0]=ef;}}else{if(fireArgs){fireArgs.unshift(ef);}}
ef.details=this.details;ef.target=this.originalTarget||this.target;ef.currentTarget=this.currentTarget;ef.stopped=0;ef.prevented=0;this._facade=ef;return this._facade;};CEProto._addFacadeToArgs=function(args){var e=args[0];if(!(e&&e.halt&&e.stopImmediatePropagation&&e.stopPropagation&&e._event)){this._createFacade(args);}};CEProto.stopPropagation=function(){this.stopped=1;if(this.stack){this.stack.stopped=1;}
if(this.events){this.events.fire('stopped',this);}};CEProto.stopImmediatePropagation=function(){this.stopped=2;if(this.stack){this.stack.stopped=2;}
if(this.events){this.events.fire('stopped',this);}};CEProto.preventDefault=function(){if(this.preventable){this.prevented=1;if(this.stack){this.stack.prevented=1;}}};CEProto.halt=function(immediate){if(immediate){this.stopImmediatePropagation();}else{this.stopPropagation();}
this.preventDefault();};ETProto.addTarget=function(o){var etState=this._yuievt;if(!etState.targets){etState.targets={};}
etState.targets[Y.stamp(o)]=o;etState.hasTargets=true;return this;};ETProto.getTargets=function(){var targets=this._yuievt.targets;return targets?YObject.values(targets):[];};ETProto.removeTarget=function(o){var targets=this._yuievt.targets;if(targets){delete targets[Y.stamp(o,true)];if(YObject.size(targets)===0){this._yuievt.hasTargets=false;}}
return this;};ETProto.bubble=function(evt,args,target,es){var targs=this._yuievt.targets,ret=true,t,ce,i,bc,ce2,type=evt&&evt.type,originalTarget=target||(evt&&evt.target)||this,oldbubble;if(!evt||((!evt.stopped)&&targs)){for(i in targs){if(targs.hasOwnProperty(i)){t=targs[i];ce=t._yuievt.events[type];if(t._hasSiblings){ce2=t.getSibling(type,ce);}
if(ce2&&!ce){ce=t.publish(type);}
oldbubble=t._yuievt.bubbling;t._yuievt.bubbling=type;if(!ce){if(t._yuievt.hasTargets){t.bubble(evt,args,originalTarget,es);}}else{if(ce2){ce.sibling=ce2;}
ce.target=originalTarget;ce.originalTarget=originalTarget;ce.currentTarget=t;bc=ce.broadcast;ce.broadcast=false;ce.emitFacade=true;ce.stack=es;ret=ret&&ce.fire.apply(ce,args||evt.details||[]);ce.broadcast=bc;ce.originalTarget=null;if(ce.stopped){break;}}
t._yuievt.bubbling=oldbubble;}}}
return ret;};ETProto._hasPotentialSubscribers=function(fullType){var etState=this._yuievt,e=etState.events[fullType];if(e){return e.hasSubs()||etState.hasTargets||e.broadcast;}else{return false;}};FACADE=new Y.EventFacade();FACADE_KEYS={};for(key in FACADE){FACADE_KEYS[key]=true;}},'3.15.0',{"requires":["event-custom-base"]});