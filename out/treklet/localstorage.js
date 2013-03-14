goog.provide('treklet.localstorage');
goog.require('cljs.core');
goog.require('goog.json');
goog.require('goog.style');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.net.xpc');
goog.require('treklet.constants');
goog.require('treklet.util');
treklet.localstorage._STAR_namespace_STAR_ = "treklet";
treklet.localstorage._parent_channel_ = null;
treklet.localstorage._waiting_callbacks_ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
treklet.localstorage.init = (function init(callback){
treklet.localstorage._parent_channel_ = (new goog.net.xpc.CrossPageChannel(treklet.util.clj__GT_js.call(null,cljs.core.PersistentArrayMap.fromArrays([goog.net.xpc.CfgFields.PEER_URI],[[cljs.core.str(treklet.constants._file_addr_),cljs.core.str("localstorage.html")].join('')]))));
treklet.localstorage._parent_channel_.createPeerIframe(document.body,(function (iframe){
return goog.style.setStyle(iframe,"display","none");
}));
return treklet.localstorage._parent_channel_.connect((function (){
return treklet.localstorage._parent_channel_.registerService("ack",(function (){
return callback.call(null);
}));
}));
});
treklet.localstorage.write = (function() {
var write = null;
var write__2 = (function (k,v){
return write.call(null,k,v,null);
});
var write__3 = (function (k,v,callback){
treklet.localstorage._parent_channel_.send("write",goog.json.serialize(treklet.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'k","\uFDD0'v"],{"\uFDD0'k":k,"\uFDD0'v":v}))));
return treklet.localstorage._parent_channel_.registerService("on-write-complete",(function (){
if(cljs.core.truth_(callback))
{return callback.call(null);
} else
{return null;
}
}));
});
write = function(k,v,callback){
switch(arguments.length){
case 2:
return write__2.call(this,k,v);
case 3:
return write__3.call(this,k,v,callback);
}
throw('Invalid arity: ' + arguments.length);
};
write.cljs$lang$arity$2 = write__2;
write.cljs$lang$arity$3 = write__3;
return write;
})()
;
treklet.localstorage.read = (function read(k,callback){
treklet.localstorage._parent_channel_.registerService("on-read-complete",(function (data){
var result__7068 = cljs.core.js__GT_clj.call(null,goog.json.parse(data),"\uFDD0'keywordize-keys",true);
return callback.call(null,result__7068);
}));
return treklet.localstorage._parent_channel_.send("read",goog.json.serialize(treklet.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'k"],{"\uFDD0'k":k}))));
});
treklet.localstorage.clear = (function clear(callback){
treklet.localstorage._parent_channel_.send("clear");
return treklet.localstorage._parent_channel_.registerService("on-clear-complete",(function (){
return callback.call(null);
}));
});
treklet.localstorage.modify_plugin = (function modify_plugin(plugin_name,plugin_map){
return treklet.localstorage.read.call(null,"plugins",(function (plugins){
var plugins__7072 = (cljs.core.truth_(plugins)?plugins:cljs.core.ObjMap.EMPTY);
var plugin_name__7073 = cljs.core.keyword.call(null,[cljs.core.str(cljs.core.hash.call(null,plugin_name))].join(''));
var modified_plugins__7074 = cljs.core.assoc.call(null,plugins__7072,plugin_name__7073,cljs.core.merge.call(null,plugins__7072.call(null,plugin_name__7073),plugin_map));
return treklet.localstorage.write.call(null,"plugins",modified_plugins__7074);
}));
});
treklet.localstorage.remove_plugin = (function remove_plugin(plugin_name){
return treklet.localstorage.read.call(null,"plugins",(function (plugins){
var plugins__7077 = (cljs.core.truth_(plugins)?plugins:cljs.core.ObjMap.EMPTY);
var plugin_name__7078 = [cljs.core.str(cljs.core.hash.call(null,plugin_name))].join('');
return treklet.localstorage.write.call(null,"plugins",cljs.core.dissoc.call(null,plugins__7077,cljs.core.keyword.call(null,plugin_name__7078)));
}));
});
treklet.localstorage.add_plugin = (function add_plugin(plugin_name,href){
return treklet.localstorage.modify_plugin.call(null,href,cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'name"],{"\uFDD0'href":href,"\uFDD0'name":plugin_name}));
});
