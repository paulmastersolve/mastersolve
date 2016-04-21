/*
     YUI 3.15.0 (build 834026e)
     Copyright 2014 Yahoo! Inc. All rights reserved.
     Licensed under the BSD License.
     http://yuilibrary.com/license/
     */
YUI.add('selector-native',function(Y,NAME){(function(Y){Y.namespace('Selector');var COMPARE_DOCUMENT_POSITION='compareDocumentPosition',OWNER_DOCUMENT='ownerDocument';var Selector={_types:{esc:{token:'\uE000',re:/\\[:\[\]\(\)#\.\'\>+~"]/gi},attr:{token:'\uE001',re:/(\[[^\]]*\])/g},pseudo:{token:'\uE002',re:/(\([^\)]*\))/g}},useNative:true,_escapeId:function(id){if(id){id=id.replace(/([:\[\]\(\)#\.'<>+~"])/g,'\\$1');}
return id;},_compare:('sourceIndex'in Y.config.doc.documentElement)?function(nodeA,nodeB){var a=nodeA.sourceIndex,b=nodeB.sourceIndex;if(a===b){return 0;}else if(a>b){return 1;}
return-1;}:(Y.config.doc.documentElement[COMPARE_DOCUMENT_POSITION]?function(nodeA,nodeB){if(nodeA[COMPARE_DOCUMENT_POSITION](nodeB)&4){return-1;}else{return 1;}}:function(nodeA,nodeB){var rangeA,rangeB,compare;if(nodeA&&nodeB){rangeA=nodeA[OWNER_DOCUMENT].createRange();rangeA.setStart(nodeA,0);rangeB=nodeB[OWNER_DOCUMENT].createRange();rangeB.setStart(nodeB,0);compare=rangeA.compareBoundaryPoints(1,rangeB);}
return compare;}),_sort:function(nodes){if(nodes){nodes=Y.Array(nodes,0,true);if(nodes.sort){nodes.sort(Selector._compare);}}
return nodes;},_deDupe:function(nodes){var ret=[],i,node;for(i=0;(node=nodes[i++]);){if(!node._found){ret[ret.length]=node;node._found=true;}}
for(i=0;(node=ret[i++]);){node._found=null;node.removeAttribute('_found');}
return ret;},query:function(selector,root,firstOnly,skipNative){root=root||Y.config.doc;var ret=[],useNative=(Y.Selector.useNative&&Y.config.doc.querySelector&&!skipNative),queries=[[selector,root]],query,result,i,fn=(useNative)?Y.Selector._nativeQuery:Y.Selector._bruteQuery;if(selector&&fn){if(!skipNative&&(!useNative||root.tagName)){queries=Selector._splitQueries(selector,root);}
for(i=0;(query=queries[i++]);){result=fn(query[0],query[1],firstOnly);if(!firstOnly){result=Y.Array(result,0,true);}
if(result){ret=ret.concat(result);}}
if(queries.length>1){ret=Selector._sort(Selector._deDupe(ret));}}
return(firstOnly)?(ret[0]||null):ret;},_replaceSelector:function(selector){var esc=Y.Selector._parse('esc',selector),attrs,pseudos;selector=Y.Selector._replace('esc',selector);pseudos=Y.Selector._parse('pseudo',selector);selector=Selector._replace('pseudo',selector);attrs=Y.Selector._parse('attr',selector);selector=Y.Selector._replace('attr',selector);return{esc:esc,attrs:attrs,pseudos:pseudos,selector:selector};},_restoreSelector:function(replaced){var selector=replaced.selector;selector=Y.Selector._restore('attr',selector,replaced.attrs);selector=Y.Selector._restore('pseudo',selector,replaced.pseudos);selector=Y.Selector._restore('esc',selector,replaced.esc);return selector;},_replaceCommas:function(selector){var replaced=Y.Selector._replaceSelector(selector),selector=replaced.selector;if(selector){selector=selector.replace(/,/g,'\uE007');replaced.selector=selector;selector=Y.Selector._restoreSelector(replaced);}
return selector;},_splitQueries:function(selector,node){if(selector.indexOf(',')>-1){selector=Y.Selector._replaceCommas(selector);}
var groups=selector.split('\uE007'),queries=[],prefix='',id,i,len;if(node){if(node.nodeType===1){id=Y.Selector._escapeId(Y.DOM.getId(node));if(!id){id=Y.guid();Y.DOM.setId(node,id);}
prefix='[id="'+id+'"] ';}
for(i=0,len=groups.length;i<len;++i){selector=prefix+groups[i];queries.push([selector,node]);}}
return queries;},_nativeQuery:function(selector,root,one){if((Y.UA.webkit||Y.UA.opera)&&selector.indexOf(':checked')>-1&&(Y.Selector.pseudos&&Y.Selector.pseudos.checked)){return Y.Selector.query(selector,root,one,true);}
try{return root['querySelector'+(one?'':'All')](selector);}catch(e){return Y.Selector.query(selector,root,one,true);}},filter:function(nodes,selector){var ret=[],i,node;if(nodes&&selector){for(i=0;(node=nodes[i++]);){if(Y.Selector.test(node,selector)){ret[ret.length]=node;}}}else{}
return ret;},test:function(node,selector,root){var ret=false,useFrag=false,groups,parent,item,items,frag,id,i,j,group;if(node&&node.tagName){if(typeof selector=='function'){ret=selector.call(node,node);}else{groups=selector.split(',');if(!root&&!Y.DOM.inDoc(node)){parent=node.parentNode;if(parent){root=parent;}else{frag=node[OWNER_DOCUMENT].createDocumentFragment();frag.appendChild(node);root=frag;useFrag=true;}}
root=root||node[OWNER_DOCUMENT];id=Y.Selector._escapeId(Y.DOM.getId(node));if(!id){id=Y.guid();Y.DOM.setId(node,id);}
for(i=0;(group=groups[i++]);){group+='[id="'+id+'"]';items=Y.Selector.query(group,root);for(j=0;item=items[j++];){if(item===node){ret=true;break;}}
if(ret){break;}}
if(useFrag){frag.removeChild(node);}};}
return ret;},ancestor:function(node,selector,testSelf){return Y.DOM.ancestor(node,function(n){return Y.Selector.test(n,selector);},testSelf);},_parse:function(name,selector){return selector.match(Y.Selector._types[name].re);},_replace:function(name,selector){var o=Y.Selector._types[name];return selector.replace(o.re,o.token);},_restore:function(name,selector,items){if(items){var token=Y.Selector._types[name].token,i,len;for(i=0,len=items.length;i<len;++i){selector=selector.replace(token,items[i]);}}
return selector;}};Y.mix(Y.Selector,Selector,true);})(Y);},'3.15.0',{"requires":["dom-base"]});