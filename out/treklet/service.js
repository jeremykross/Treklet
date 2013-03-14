goog.provide('treklet.service');
goog.require('cljs.core');
goog.require('treklet.events');
goog.require('goog.dom');
goog.require('treklet.gui.kinds.alerts');
goog.require('treklet.localstorage');
goog.require('hiccups.runtime');
goog.require('goog.dom.dataset');
goog.require('goog.array');
goog.require('goog.events');
goog.require('treklet.constants');
goog.require('goog.style');
goog.require('treklet.comms');
goog.require('treklet.avatar');
goog.require('goog.json');
goog.require('treklet.util');
goog.require('goog.ui.Dialog');
goog.require('goog.ui.TabBar');
treklet.service._uuid_ = cljs.core.atom.cljs$lang$arity$1(null);
treklet.service._running_plugins_ = cljs.core.atom.cljs$lang$arity$1(cljs.core.PersistentVector.EMPTY);
treklet.service._mapping_ = cljs.core.ObjMap.EMPTY;
treklet.events.slot_avatar_changed((function (avatar){
return treklet.util.atom_set_BANG_(treklet.service._uuid_,(avatar.cljs$lang$arity$1 ? avatar.cljs$lang$arity$1("\uFDD0'uuid") : avatar.call(null,"\uFDD0'uuid")));
}));
treklet.events.slot_plugin_run((function (plugin_name,href){
return treklet.localstorage.add_plugin(plugin_name,href);
}));
treklet.service.load_plugin = (function load_plugin(plugin_name,url,mime_type,div_elem){
return caja.load(div_elem,treklet.util.clj__GT_js(cljs.core.ObjMap.fromObject(["\uFDD0'rewrite"],{"\uFDD0'rewrite":cljs.core.identity})),(function (frame){
(frame["code"]).call(frame,url,mime_type);
(frame["api"]).call(frame,treklet.util.clj__GT_js(treklet.service._mapping_));
return (frame["run"]).call(frame,(function (){
return treklet.events.signal_plugin_run.cljs$lang$arity$variadic(cljs.core.array_seq([plugin_name,url], 0));
}));
}));
});
treklet.service.start_plugin = (function start_plugin(plugin_name,plugin_href){
if(true)
{var plugin_id__27073 = [cljs.core.str("treklet-plugin-"),cljs.core.str(cljs.core.count(cljs.core.deref(treklet.service._running_plugins_)))].join('');
var plugin_div__27074 = goog.dom.htmlToDocumentFragment([cljs.core.str("<div id='"),cljs.core.str(plugin_id__27073),cljs.core.str("' class='treklet-plugin-div'></div>")].join(''));
cljs.core.swap_BANG_.cljs$lang$arity$3(treklet.service._running_plugins_,cljs.core.conj,plugin_href);
goog.dom.append(document.body,plugin_div__27074);
return treklet.service.load_plugin(plugin_name,plugin_href,"text/html",plugin_div__27074);
} else
{return null;
}
});
treklet.service.catalogueLinks = (function catalogueLinks(){
var G__27086__27087 = cljs.core.seq(goog.array.toArray(goog.dom.getElementsByTagNameAndClass("a","treklet-plugin-link")));
if(G__27086__27087)
{var link__27088 = cljs.core.first(G__27086__27087);
var G__27086__27089 = G__27086__27087;
while(true){
goog.events.listen(link__27088,"click",((function (link__27088,G__27086__27089){
return (function (e){
var current_target__27090 = e.currentTarget;
var plugin_name__27091 = goog.dom.dataset.get(link__27088,"pluginName");
var affirmative_cb__27093 = ((function (link__27088,G__27086__27089){
return (function (){
var plugin_href__27092 = current_target__27090.getAttribute("href");
return treklet.service.start_plugin(plugin_name__27091,plugin_href__27092);
});})(link__27088,G__27086__27089))
;
treklet.gui.kinds.alerts.yes_no_dialog("Run Plugin?",plugin_name__27091,affirmative_cb__27093);
e.preventDefault();
return false;
});})(link__27088,G__27086__27089))
);
var temp__3974__auto____27094 = cljs.core.next(G__27086__27089);
if(temp__3974__auto____27094)
{var G__27086__27095 = temp__3974__auto____27094;
{
var G__27096 = cljs.core.first(G__27086__27095);
var G__27097 = G__27086__27095;
link__27088 = G__27096;
G__27086__27089 = G__27097;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
goog.exportSymbol('treklet.service.catalogueLinks', treklet.service.catalogueLinks);
treklet.service.init = (function init(){
treklet.localstorage.read("plugins",(function (plugins){
var G__27123__27124 = cljs.core.seq(plugins);
if(G__27123__27124)
{var G__27126__27128 = cljs.core.first(G__27123__27124);
var vec__27127__27129 = G__27126__27128;
var k__27130 = cljs.core.nth.cljs$lang$arity$3(vec__27127__27129,0,null);
var v__27131 = cljs.core.nth.cljs$lang$arity$3(vec__27127__27129,1,null);
var G__27123__27132 = G__27123__27124;
var G__27126__27133 = G__27126__27128;
var G__27123__27134 = G__27123__27132;
while(true){
var vec__27135__27136 = G__27126__27133;
var k__27137 = cljs.core.nth.cljs$lang$arity$3(vec__27135__27136,0,null);
var v__27138 = cljs.core.nth.cljs$lang$arity$3(vec__27135__27136,1,null);
var G__27123__27139 = G__27123__27134;
if(cljs.core.truth_((v__27138.cljs$lang$arity$1 ? v__27138.cljs$lang$arity$1("\uFDD0'autostart") : v__27138.call(null,"\uFDD0'autostart"))))
{treklet.service.start_plugin((v__27138.cljs$lang$arity$1 ? v__27138.cljs$lang$arity$1("\uFDD0'name") : v__27138.call(null,"\uFDD0'name")),(v__27138.cljs$lang$arity$1 ? v__27138.cljs$lang$arity$1("\uFDD0'href") : v__27138.call(null,"\uFDD0'href")));
} else
{}
var temp__3974__auto____27140 = cljs.core.next(G__27123__27139);
if(temp__3974__auto____27140)
{var G__27123__27141 = temp__3974__auto____27140;
{
var G__27148 = cljs.core.first(G__27123__27141);
var G__27149 = G__27123__27141;
G__27126__27133 = G__27148;
G__27123__27134 = G__27149;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}));
treklet.service.catalogueLinks();
caja.initialize(treklet.util.clj__GT_js(cljs.core.ObjMap.fromObject(["\uFDD0'cajaServer","\uFDD0'debug"],{"\uFDD0'cajaServer":[cljs.core.str(treklet.constants._server_addr_),cljs.core.str(":8080/")].join(''),"\uFDD0'debug":true})));
return caja.whenReady((function (){
treklet.service.get_host_user = (function get_host_user(){
return cljs.core.deref(treklet.service._uuid_);
});
caja.markFunction(treklet.service.get_host_user);
treklet.service.tame_get_host_user = caja.tame(treklet.service.get_host_user);
treklet.service.get_users = (function get_users(){
return treklet.util.clj__GT_js(cljs.core.map.cljs$lang$arity$2((function (p1__27075_SHARP_){
return p1__27075_SHARP_.id.replace("treklet-avatar-","");
}),goog.array.toArray(goog.dom.getElementsByClass("avatar"))));
});
caja.markFunction(treklet.service.get_users);
treklet.service.tame_get_users = caja.tame(treklet.service.get_users);
treklet.service.send_to_user = (function send_to_user(uuid,mesg){
treklet.comms.notify_server.cljs$lang$arity$2("mesg-for-user",cljs.core.ObjMap.fromObject(["target-uuid","user-mesg"],{"target-uuid":uuid,"user-mesg":mesg}));
return null;
});
caja.markFunction(treklet.service.send_to_user);
treklet.service.tame_send_to_user = caja.tame(treklet.service.send_to_user);
treklet.service.send_to_locale = (function send_to_locale(locale,mesg){
treklet.comms.notify_server.cljs$lang$arity$2("mesg-for-locale",cljs.core.ObjMap.fromObject(["user-mesg"],{"user-mesg":mesg}));
return null;
});
caja.markFunction(treklet.service.send_to_locale);
treklet.service.tame_send_to_locale = caja.tame(treklet.service.send_to_locale);
treklet.service.current_locale = (function current_locale(){
return document.URL;
});
caja.markFunction(treklet.service.current_locale);
treklet.service.tame_current_locale = caja.tame(treklet.service.current_locale);
treklet.service.add_user_arrival_callback = (function add_user_arrival_callback(cb){
treklet.events.slot_user_arrival(cb);
return null;
});
caja.markFunction(treklet.service.add_user_arrival_callback);
treklet.service.tame_add_user_arrival_callback = caja.tame(treklet.service.add_user_arrival_callback);
treklet.service.add_user_departure_callback = (function add_user_departure_callback(cb){
treklet.events.slot_user_departure(cb);
return null;
});
caja.markFunction(treklet.service.add_user_departure_callback);
treklet.service.tame_add_user_departure_callback = caja.tame(treklet.service.add_user_departure_callback);
treklet.service.add_user_repositioned_callback = (function add_user_repositioned_callback(cb){
treklet.events.slot_user_repositioned(cb);
return null;
});
caja.markFunction(treklet.service.add_user_repositioned_callback);
treklet.service.tame_add_user_repositioned_callback = caja.tame(treklet.service.add_user_repositioned_callback);
treklet.service.add_mesg_for_user_callback = (function add_mesg_for_user_callback(cb){
treklet.events.slot_mesg_for_user((function (from,data){
return (cb.cljs$lang$arity$2 ? cb.cljs$lang$arity$2(from,treklet.util.clj__GT_js(data)) : cb.call(null,from,treklet.util.clj__GT_js(data)));
}));
return null;
});
caja.markFunction(treklet.service.add_mesg_for_user_callback);
treklet.service.tame_add_mesg_for_user_callback = caja.tame(treklet.service.add_mesg_for_user_callback);
treklet.service.add_user_spoke_callback = (function add_user_spoke_callback(cb){
treklet.events.slot_avatar_spoke(cb);
return null;
});
caja.markFunction(treklet.service.add_user_spoke_callback);
treklet.service.tame_add_user_spoke_callback = caja.tame(treklet.service.add_user_spoke_callback);
treklet.service.get_user_position = (function get_user_position(uuid){
return treklet.util.clj__GT_js(treklet.avatar.get_position(uuid));
});
caja.markFunction(treklet.service.get_user_position);
treklet.service.tame_get_user_position = caja.tame(treklet.service.get_user_position);
treklet.service.uuid_for_username = (function uuid_for_username(username){
return treklet.avatar.uuid_for_username(username);
});
caja.markFunction(treklet.service.uuid_for_username);
treklet.service.tame_uuid_for_username = caja.tame(treklet.service.uuid_for_username);
treklet.service.get_user_info = (function get_user_info(uuid){
var username__27145 = treklet.avatar.username_for_uuid(uuid);
var username_elem__27146 = treklet.avatar.dom_name_elem(uuid);
var balloon_elem__27147 = treklet.avatar.dom_balloon_elem(uuid);
return treklet.util.clj__GT_js(cljs.core.ObjMap.fromObject(["\uFDD0'username","\uFDD0'imgPath","\uFDD0'usernameBgColor","\uFDD0'usernameFgColor","\uFDD0'balloonBgColor","\uFDD0'balloonFgColor"],{"\uFDD0'username":username__27145,"\uFDD0'imgPath":[cljs.core.str(treklet.constants._image_dir_),cljs.core.str(username__27145),cljs.core.str(".png")].join(''),"\uFDD0'usernameBgColor":goog.style.getStyle(username_elem__27146,"background-color"),"\uFDD0'usernameFgColor":goog.style.getStyle(username_elem__27146,"color"),"\uFDD0'balloonBgColor":goog.style.getStyle(balloon_elem__27147,"background-color"),"\uFDD0'balloonFgColor":goog.style.getStyle(balloon_elem__27147,"color")}));
});
caja.markFunction(treklet.service.get_user_info);
treklet.service.tame_get_user_info = caja.tame(treklet.service.get_user_info);
treklet.service.set_timeout = (function set_timeout(x,delayof){
return setTimeout(x,delayof);
});
caja.markFunction(treklet.service.set_timeout);
treklet.service.tame_set_timeout = caja.tame(treklet.service.set_timeout);
treklet.service.safe_alert = (function safe_alert(x){
return alert(x);
});
caja.markFunction(treklet.service.safe_alert);
treklet.service.tame_safe_alert = caja.tame(treklet.service.safe_alert);
treklet.service._mapping_ = cljs.core.ObjMap.fromObject(["\uFDD0'addMesgForUserCallback","\uFDD0'addUserDepartureCallback","\uFDD0'alert","\uFDD0'sendToLocale","\uFDD0'addUserSpokeCallback","\uFDD0'addUserRepositionedCallback","\uFDD0'getUserPosition","\uFDD0'sendToUser","\uFDD0'getHostUser","\uFDD0'getUserInfo","\uFDD0'currentLocale","\uFDD0'addUserArrivalCallback","\uFDD0'uuidForUsername","\uFDD0'getUsers","\uFDD0'setTimeout"],{"\uFDD0'addMesgForUserCallback":treklet.service.tame_add_mesg_for_user_callback,"\uFDD0'addUserDepartureCallback":treklet.service.tame_add_user_departure_callback,"\uFDD0'alert":treklet.service.tame_safe_alert,"\uFDD0'sendToLocale":treklet.service.tame_send_to_locale,"\uFDD0'addUserSpokeCallback":treklet.service.tame_add_user_spoke_callback,"\uFDD0'addUserRepositionedCallback":treklet.service.tame_add_user_repositioned_callback,"\uFDD0'getUserPosition":treklet.service.tame_get_user_position,"\uFDD0'sendToUser":treklet.service.tame_send_to_user,"\uFDD0'getHostUser":treklet.service.tame_get_host_user,"\uFDD0'getUserInfo":treklet.service.tame_get_user_info,"\uFDD0'currentLocale":treklet.service.tame_current_locale,"\uFDD0'addUserArrivalCallback":treklet.service.tame_add_user_arrival_callback,"\uFDD0'uuidForUsername":treklet.service.tame_uuid_for_username,"\uFDD0'getUsers":treklet.service.tame_get_users,"\uFDD0'setTimeout":treklet.service.tame_set_timeout});
}));
});
