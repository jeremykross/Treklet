goog.provide('treklet.core');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('treklet.events');
goog.require('goog.async.Delay');
goog.require('goog.fx.dom');
goog.require('treklet.position');
goog.require('goog.dom');
goog.require('treklet.gui.kinds.alerts');
goog.require('treklet.localstorage');
goog.require('hiccups.runtime');
goog.require('goog.dom.dataset');
goog.require('goog.events');
goog.require('treklet.constants');
goog.require('treklet.service');
goog.require('goog.style');
goog.require('treklet.gui.kinds.main');
goog.require('treklet.comms');
goog.require('treklet.avatar');
goog.require('treklet.chat');
goog.require('goog.fx.easing');
goog.require('goog.json');
goog.require('treklet.util');
goog.require('treklet.gui');
goog.require('goog.fx');
treklet.core._STAR_avatar_name_STAR_ = cljs.core.atom.cljs$lang$arity$1(null);
treklet.core._uuid_ = cljs.core.atom.cljs$lang$arity$1(null);
treklet.core.evt_doc_clicked = (function evt_doc_clicked(e){
if(cljs.core.not(goog.dom.classes.has(e.target,"treklet")))
{var scroll__33071 = goog.dom.getDocumentScroll(cljs.core.List.EMPTY);
var x__33072 = (e.clientX + scroll__33071.x);
var y__33073 = (e.clientY + scroll__33071.y);
var target__33074 = e.target;
var plutoid__33075 = goog.dom.dataset.get(target__33074,"plutoid");
var size__33076 = goog.style.getSize(target__33074);
treklet.avatar.avatar_move(cljs.core.deref(treklet.core._uuid_),x__33072,y__33073);
return treklet.comms.notify_server.cljs$lang$arity$2("move",cljs.core.ObjMap.fromObject(["uuid","x","y","plutoid","elem-relative-x","elem-relative-y","width","height"],{"uuid":cljs.core.deref(treklet.core._uuid_),"x":x__33072,"y":y__33073,"plutoid":plutoid__33075,"elem-relative-x":e.offsetX,"elem-relative-y":e.offsetY,"width":size__33076.width,"height":size__33076.height}));
} else
{return null;
}
});
treklet.core.evt_speech_keypress = (function (){
var required_time__33077 = 1000;
var last_call_time__33078 = cljs.core.atom.cljs$lang$arity$1(0);
return (function (e){
var cur_time__33079 = (new Date()).getTime();
var duration__33080 = (cur_time__33079 - cljs.core.deref(last_call_time__33078));
var phrase__33081 = e.target.value;
if((function (){var and__3822__auto____33082 = cljs.core._EQ_.cljs$lang$arity$2(e.keyCode,13);
if(and__3822__auto____33082)
{return (duration__33080 > required_time__33077);
} else
{return and__3822__auto____33082;
}
})())
{treklet.util.atom_set_BANG_(last_call_time__33078,cur_time__33079);
treklet.avatar.avatar_speak(cljs.core.deref(treklet.core._uuid_),phrase__33081);
treklet.comms.notify_server.cljs$lang$arity$2("speak",cljs.core.ObjMap.fromObject(["uuid","phrase"],{"uuid":cljs.core.deref(treklet.core._uuid_),"phrase":phrase__33081}));
e.target.value = "";
} else
{}
return false;
});
}).call(null);
treklet.core.evt_speech_focus = (function evt_speech_focus(e){
treklet.chat.signal_input_focused();
return true;
});
treklet.core.evt_speech_blur = (function evt_speech_blur(e){
treklet.chat.signal_input_blurred();
return true;
});
treklet.core.evt_doc_keyup = (function evt_doc_keyup(e){
if(cljs.core._EQ_.cljs$lang$arity$2(ekeyCode,35))
{return (treklet.avatar.toggle_avatars_visibility.cljs$lang$arity$0 ? treklet.avatar.toggle_avatars_visibility.cljs$lang$arity$0() : treklet.avatar.toggle_avatars_visibility.call(null));
} else
{return null;
}
});
treklet.core.evt_speech_click = (function evt_speech_click(e){
return alert("Box was clicked");
});
treklet.core.evt_avatar_dblclick = (function evt_avatar_dblclick(e){
treklet.events.signal_overlay_changed.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.ObjMap.fromObject(["\uFDD0'visible"],{"\uFDD0'visible":true})], 0));
var popup__33084 = new treklet_js.gui.kinds.MainPopup;
window.scrollTo(0,0);
return popup__33084.show();
});
treklet.core.tmpl_make_speech_input = (function tmpl_make_speech_input(){
return [cljs.core.str("<div class=\"treklet\" id=\"treklet-speech-input\"><input class=\"treklet treklet-input-box\" placeholder-text=\"Just say hello...\" placeholder=\"Just say hello...\" type=\"text\" /></div>")].join('');
});
treklet.core.enable_clicks = (function enable_clicks(enabled){
return cljs.core.PersistentArrayMap.fromArrays([true,false],[goog.events.listen,goog.events.unlisten]).call(null,enabled).call(null,document.body,"click",treklet.core.evt_doc_clicked);
});
treklet.core.start = (function start(saved_avatar){
if(cljs.core.not_EQ_.cljs$lang$arity$2(typeof onTrekletStarted,"undefined"))
{onTrekletStarted();
} else
{}
treklet.service.init();
treklet.events.slot_avatar_changed((function (avatar){
treklet.localstorage.write.cljs$lang$arity$2("saved-avatar",avatar);
treklet.util.atom_set_BANG_(treklet.core._STAR_avatar_name_STAR_,(avatar.cljs$lang$arity$1 ? avatar.cljs$lang$arity$1("\uFDD0'username") : avatar.call(null,"\uFDD0'username")));
treklet.util.atom_set_BANG_(treklet.core._uuid_,(avatar.cljs$lang$arity$1 ? avatar.cljs$lang$arity$1("\uFDD0'uuid") : avatar.call(null,"\uFDD0'uuid")));
var elem__33100 = treklet.avatar.dom_avatar_elem(cljs.core.deref(treklet.core._uuid_));
goog.events.listen(elem__33100,"dblclick",treklet.core.evt_avatar_dblclick);
return goog.dom.classes.add(elem__33100,"treklet-user-avatar");
}));
treklet.events.slot_overlay_changed((function (e){
return treklet.core.enable_clicks(cljs.core.not((e.cljs$lang$arity$1 ? e.cljs$lang$arity$1("\uFDD0'visible") : e.call(null,"\uFDD0'visible"))));
}));
treklet.core.enable_clicks(true);
var input_box__33101 = goog.dom.htmlToDocumentFragment(treklet.core.tmpl_make_speech_input());
var input_elem__33102 = goog.dom.getElementByClass("treklet-input-box",input_box__33101);
goog.dom.append(document.body,input_box__33101);
goog.events.listen(input_box__33101,"keypress",treklet.core.evt_speech_keypress);
goog.events.listen(input_elem__33102,"focus",treklet.core.evt_speech_focus);
goog.events.listen(input_elem__33102,"blur",treklet.core.evt_speech_blur);
setTimeout((function (){
goog.dom.classes.add(input_box__33101,"inplace");
return 1000;
}));
treklet.comms.react_server("mesg-for-user",(function (data){
return treklet.events.signal_mesg_for_user.cljs$lang$arity$variadic(cljs.core.array_seq([(data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'from-uuid") : data.call(null,"\uFDD0'from-uuid")),(data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'user-mesg") : data.call(null,"\uFDD0'user-mesg"))], 0));
}));
treklet.comms.react_server("user-arrival",(function (data){
treklet.events.signal_user_arrival.cljs$lang$arity$variadic(cljs.core.array_seq([(data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'uuid") : data.call(null,"\uFDD0'uuid"))], 0));
return treklet.avatar.add_avatar((data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'avatar") : data.call(null,"\uFDD0'avatar")));
}));
treklet.comms.react_server("user-departure",(function (data){
treklet.events.signal_user_departure.cljs$lang$arity$variadic(cljs.core.array_seq([(data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'uuid") : data.call(null,"\uFDD0'uuid"))], 0));
return treklet.avatar.remove_avatar.cljs$lang$arity$1((data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'uuid") : data.call(null,"\uFDD0'uuid")));
}));
treklet.comms.react_server("user-locale-changed",(function (data){
if(cljs.core.truth_((data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'last-move") : data.call(null,"\uFDD0'last-move"))))
{return treklet.avatar.dom_locale_notice((data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'username") : data.call(null,"\uFDD0'username")),(data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'locale") : data.call(null,"\uFDD0'locale")),(data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'last-move") : data.call(null,"\uFDD0'last-move")).call(null,"\uFDD0'x"),(data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'last-move") : data.call(null,"\uFDD0'last-move")).call(null,"\uFDD0'y"));
} else
{return null;
}
}));
treklet.comms.react_server("user-speak",(function (data){
if(!(cljs.core._EQ_.cljs$lang$arity$2((data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'uuid") : data.call(null,"\uFDD0'uuid")),cljs.core.deref(treklet.core._uuid_))))
{return treklet.avatar.avatar_speak((data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'uuid") : data.call(null,"\uFDD0'uuid")),(data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'phrase") : data.call(null,"\uFDD0'phrase")));
} else
{return null;
}
}));
treklet.comms.react_server("user-move",(function (data){
if(!(cljs.core._EQ_.cljs$lang$arity$2((data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'uuid") : data.call(null,"\uFDD0'uuid")),cljs.core.deref(treklet.core._uuid_))))
{var element__33103 = goog.dom.getElementByClass([cljs.core.str("_"),cljs.core.str((data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'plutoid") : data.call(null,"\uFDD0'plutoid")))].join(''));
if(cljs.core.truth_(element__33103))
{var offset__33104 = goog.style.getPageOffset(element__33103);
var size__33105 = goog.style.getSize(element__33103);
var pct_along_x__33106 = ((data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'elem-relative-x") : data.call(null,"\uFDD0'elem-relative-x")) / (data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'width") : data.call(null,"\uFDD0'width")));
var pct_along_y__33107 = ((data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'elem-relative-y") : data.call(null,"\uFDD0'elem-relative-y")) / (data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'height") : data.call(null,"\uFDD0'height")));
var x__33108 = (offset__33104.x + (size__33105.width * pct_along_x__33106));
var y__33109 = (offset__33104.y + (size__33105.height * pct_along_y__33107));
return treklet.avatar.avatar_move((data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'uuid") : data.call(null,"\uFDD0'uuid")),x__33108,y__33109);
} else
{return treklet.avatar.avatar_move((data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'uuid") : data.call(null,"\uFDD0'uuid")),(data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'x") : data.call(null,"\uFDD0'x")),(data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'y") : data.call(null,"\uFDD0'y")));
}
} else
{return null;
}
}));
treklet.comms.notify_server.cljs$lang$arity$1("ready");
return treklet.comms.react_server("accepted",(function (data){
var avatar__33110 = cljs.core.merge.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.ObjMap.fromObject(["\uFDD0'uuid"],{"\uFDD0'uuid":(data.cljs$lang$arity$1 ? data.cljs$lang$arity$1("\uFDD0'uuid") : data.call(null,"\uFDD0'uuid"))}),saved_avatar], 0));
treklet.avatar.add_avatar(avatar__33110);
treklet.events.signal_avatar_changed.cljs$lang$arity$variadic(cljs.core.array_seq([avatar__33110], 0));
return treklet.comms.notify_server.cljs$lang$arity$2("arrival",cljs.core.ObjMap.fromObject(["uuid","avatar","locale"],{"uuid":(avatar__33110.cljs$lang$arity$1 ? avatar__33110.cljs$lang$arity$1("\uFDD0'uuid") : avatar__33110.call(null,"\uFDD0'uuid")),"avatar":avatar__33110,"locale":document.URL}));
}));
});
treklet.core.localUuid = (function localUuid(){
return cljs.core.deref(treklet.core._uuid_);
});
goog.exportSymbol('treklet.core.localUuid', treklet.core.localUuid);
treklet.core.prompt_for_username = (function prompt_for_username(){
return treklet.gui.kinds.alerts.input_box("Please Enter a Username:","There's no signup, use anything you like.","",cljs.core.PersistentVector.fromArray(["Alright Let's Go!"], true),(function (resp){
return treklet.core.start(treklet.avatar.make_avatar((resp.cljs$lang$arity$1 ? resp.cljs$lang$arity$1("\uFDD0'input") : resp.call(null,"\uFDD0'input")),"#CEF6F6","#008800","#FFFF81","#FA5882"));
}));
});
treklet.core.main = (function main(){
if(cljs.core._EQ_.cljs$lang$arity$2((window["TREKLET_RUNNING"]),undefined))
{(window["TREKLET_RUNNING"] = true);
treklet.position.dom_generate_plutoid(document.body);
var notification__33113 = (new enyo.Notification());
var glass_pane__33114 = goog.dom.htmlToDocumentFragment("<div id='treklet_glass-pane'></div>");
notification__33113.renderInto(glass_pane__33114);
setTimeout((function (){
return notification__33113.sendNotification(treklet.util.clj__GT_js(cljs.core.ObjMap.fromObject(["\uFDD0'title","\uFDD0'message"],{"\uFDD0'title":"Hey!","\uFDD0'message":"Please Support our <a href='google.com' style='color:white;'> Kickstarter! </a>"})));
}),2000);
goog.dom.append(document.body,glass_pane__33114);
return treklet.localstorage.init((function (){
return treklet.localstorage.read("saved-avatar",(function (saved_avatar){
if(cljs.core.not(saved_avatar))
{return treklet.core.prompt_for_username();
} else
{return treklet.core.start(saved_avatar);
}
}));
}));
} else
{return null;
}
});
goog.exportSymbol('treklet.core.main', treklet.core.main);
setTimeout((function (){
return treklet.core.main();
}),1000);
