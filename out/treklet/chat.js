goog.provide('treklet.chat');
goog.require('cljs.core');
goog.require('treklet.avatar');
goog.require('treklet.constants');
goog.require('goog.style');
goog.require('goog.dom.classes');
goog.require('goog.dom');
goog.require('hiccups.runtime');
var subscribers__6198__auto____6942 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* @param {...*} var_args
*/
treklet.chat.signal_input_focused = (function() { 
var signal_input_focused__delegate = function (args__6199__auto__){
var G__6949__6950 = cljs.core.seq.call(null,cljs.core.deref.call(null,subscribers__6198__auto____6942));
if(G__6949__6950)
{var s__6200__auto____6951 = cljs.core.first.call(null,G__6949__6950);
var G__6949__6952 = G__6949__6950;
while(true){
cljs.core.apply.call(null,s__6200__auto____6951,args__6199__auto__);
var temp__3974__auto____6953 = cljs.core.next.call(null,G__6949__6952);
if(temp__3974__auto____6953)
{var G__6949__6954 = temp__3974__auto____6953;
{
var G__6955 = cljs.core.first.call(null,G__6949__6954);
var G__6956 = G__6949__6954;
s__6200__auto____6951 = G__6955;
G__6949__6952 = G__6956;
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
};
var signal_input_focused = function (var_args){
var args__6199__auto__ = null;
if (goog.isDef(var_args)) {
  args__6199__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return signal_input_focused__delegate.call(this, args__6199__auto__);
};
signal_input_focused.cljs$lang$maxFixedArity = 0;
signal_input_focused.cljs$lang$applyTo = (function (arglist__6957){
var args__6199__auto__ = cljs.core.seq(arglist__6957);;
return signal_input_focused__delegate(args__6199__auto__);
});
signal_input_focused.cljs$lang$arity$variadic = signal_input_focused__delegate;
return signal_input_focused;
})()
;
treklet.chat.slot_input_focused = (function slot_input_focused(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____6942,cljs.core.conj,listener__6201__auto__);
});
treklet.chat.unslot_input_focused = (function unslot_input_focused(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____6942,(function (p1__6197__6202__auto__,p2__6196__6203__auto__){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__6196__6203__auto__]),p1__6197__6202__auto__);
}),listener__6201__auto__);
});
var subscribers__6198__auto____6958 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* @param {...*} var_args
*/
treklet.chat.signal_input_blurred = (function() { 
var signal_input_blurred__delegate = function (args__6199__auto__){
var G__6965__6966 = cljs.core.seq.call(null,cljs.core.deref.call(null,subscribers__6198__auto____6958));
if(G__6965__6966)
{var s__6200__auto____6967 = cljs.core.first.call(null,G__6965__6966);
var G__6965__6968 = G__6965__6966;
while(true){
cljs.core.apply.call(null,s__6200__auto____6967,args__6199__auto__);
var temp__3974__auto____6969 = cljs.core.next.call(null,G__6965__6968);
if(temp__3974__auto____6969)
{var G__6965__6970 = temp__3974__auto____6969;
{
var G__6971 = cljs.core.first.call(null,G__6965__6970);
var G__6972 = G__6965__6970;
s__6200__auto____6967 = G__6971;
G__6965__6968 = G__6972;
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
};
var signal_input_blurred = function (var_args){
var args__6199__auto__ = null;
if (goog.isDef(var_args)) {
  args__6199__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return signal_input_blurred__delegate.call(this, args__6199__auto__);
};
signal_input_blurred.cljs$lang$maxFixedArity = 0;
signal_input_blurred.cljs$lang$applyTo = (function (arglist__6973){
var args__6199__auto__ = cljs.core.seq(arglist__6973);;
return signal_input_blurred__delegate(args__6199__auto__);
});
signal_input_blurred.cljs$lang$arity$variadic = signal_input_blurred__delegate;
return signal_input_blurred;
})()
;
treklet.chat.slot_input_blurred = (function slot_input_blurred(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____6958,cljs.core.conj,listener__6201__auto__);
});
treklet.chat.unslot_input_blurred = (function unslot_input_blurred(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____6958,(function (p1__6197__6202__auto__,p2__6196__6203__auto__){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__6196__6203__auto__]),p1__6197__6202__auto__);
}),listener__6201__auto__);
});
treklet.chat.tmpl_make_chat_log = (function tmpl_make_chat_log(){
return [cljs.core.str("<div id=\"treklet-chat-log\"></div>")].join('');
});
treklet.chat.tmpl_make_chat_line = (function tmpl_make_chat_line(id,username,phrase){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":id,"\uFDD0'class":"treklet-chat-line"}))),cljs.core.str(">"),cljs.core.str("<"),cljs.core.str("img"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'onerror","\uFDD0'src","\uFDD0'id","\uFDD0'class"],{"\uFDD0'onerror":[cljs.core.str("this.src="),cljs.core.str("'"),cljs.core.str(treklet.constants._image_dir_),cljs.core.str("anon.png"),cljs.core.str("'")].join(''),"\uFDD0'src":[cljs.core.str(treklet.constants._image_dir_),cljs.core.str(username),cljs.core.str(".png")].join(''),"\uFDD0'id":null,"\uFDD0'class":null}))),cljs.core.str(" />"),cljs.core.str("<div"),cljs.core.str(" class=\"treklet-line-phrase\""),cljs.core.str(">"),cljs.core.str("<span"),cljs.core.str(" style=\"font-weight: bold;\""),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,[cljs.core.str(username),cljs.core.str(": ")].join(''))),cljs.core.str("</span>"),cljs.core.str(hiccups.runtime.render_html.call(null,phrase)),cljs.core.str("</div>"),cljs.core.str("<div style=\"clear:both;\"></div>"),cljs.core.str("</div>")].join('');
});
treklet.chat.tmpl_make_chat_box = (function tmpl_make_chat_box(){
return [cljs.core.str("<div id=\"treklet-chat-box\"><div id=\"treklet-chat-window\"></div></div>")].join('');
});
treklet.chat.get_history_elem = (function get_history_elem(){
return goog.dom.getElement("treklet-chat-box");
});
treklet.chat.get_window_elem = (function get_window_elem(){
return goog.dom.getElement("treklet-chat-window");
});
treklet.chat.prepare = (function prepare(input_elem){
treklet.chat.slot_input_focused.call(null,(function (){
goog.style.setStyle(goog.dom.getElement("treklet-chat-box"),"visibility","visible");
goog.style.setStyle(goog.dom.getElement("treklet-chat-box"),"z-index",16000004);
return goog.style.setOpacity(goog.dom.getElement("treklet-chat-box"),1);
}));
treklet.chat.slot_input_blurred.call(null,(function (){
goog.style.setOpacity(goog.dom.getElement("treklet-chat-box"),0);
setTimeout((function (){
return goog.style.setStyle(goog.dom.getElement("treklet-chat-box"),"visibility","hidden");
}),500);
return goog.style.setStyle(goog.dom.getElement("treklet-chat-box"),"z-index",16000001);
}));
treklet.avatar.slot_avatar_spoke.call(null,(function (uuid,phrase){
var window__6995 = treklet.chat.get_window_elem.call(null);
var window_pos__6996 = goog.style.getPosition(window__6995);
var username__6997 = treklet.avatar.username_for_uuid.call(null,uuid);
var id__6998 = cljs.core.hash.call(null,[cljs.core.str((new Date()).getTime()),cljs.core.str(uuid),cljs.core.str(phrase)].join(''));
var line_frag__6999 = goog.dom.htmlToDocumentFragment(treklet.chat.tmpl_make_chat_line.call(null,id__6998,username__6997,phrase));
goog.dom.append(window__6995,line_frag__6999);
return setTimeout((function (){
var line_elem__7000 = goog.dom.getElement([cljs.core.str(id__6998)].join(''));
var line_size__7001 = goog.style.getSize(line_elem__7000);
var balloon_elem__7002 = treklet.avatar.dom_balloon_elem.call(null,uuid);
var phrase_elem__7003 = goog.dom.getElementByClass("treklet-line-phrase",line_elem__7000);
goog.dom.classes.add(line_elem__7000,"initial-state");
goog.style.setStyle(phrase_elem__7003,"background-color",goog.style.getStyle(balloon_elem__7002,"background-color"));
goog.style.setStyle(phrase_elem__7003,"color",goog.style.getStyle(balloon_elem__7002,"color"));
return goog.style.setPosition(treklet.chat.get_window_elem.call(null),window_pos__6996.x,(window_pos__6996.y - (5 + line_size__7001.height)));
}),10);
}));
return goog.dom.append(document.body,goog.dom.htmlToDocumentFragment(treklet.chat.tmpl_make_chat_box.call(null)));
});
