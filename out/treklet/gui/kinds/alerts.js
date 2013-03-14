goog.provide('treklet.gui.kinds.alerts');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('treklet.util');
goog.require('treklet.gui.enyo');
treklet.gui.kinds.alerts.input_box = (function input_box(title,message,placeholder,buttons,cb){
var box__83115 = (new intelimap_js.gui.kinds.MessageBox(treklet.util.clj__GT_js(cljs.core.ObjMap.fromObject(["\uFDD0'hideCallback"],{"\uFDD0'hideCallback":cb}))));
(box__83115["setup"]).call(box__83115,title,message,placeholder,buttons);
return (box__83115["show"]).call(box__83115);
});
treklet.gui.kinds.alerts.message_box = (function message_box(title,message,buttons){
return treklet.gui.kinds.alerts.input_box(title,message,null,buttons,null);
});
treklet.gui.kinds.alerts.yes_no_dialog = (function yes_no_dialog(title,mesg,yes_cb){
return treklet.gui.kinds.alerts.input_box(title,mesg,null,cljs.core.PersistentVector.fromArray(["Yes","No"], true),(function (resp){
if(cljs.core._EQ_.cljs$lang$arity$2(((resp.cljs$lang$arity$1 ? resp.cljs$lang$arity$1("\uFDD0'btn") : resp.call(null,"\uFDD0'btn"))["getContent"]).call((resp.cljs$lang$arity$1 ? resp.cljs$lang$arity$1("\uFDD0'btn") : resp.call(null,"\uFDD0'btn"))),"Yes"))
{if(cljs.core.truth_(yes_cb))
{return (yes_cb.cljs$lang$arity$0 ? yes_cb.cljs$lang$arity$0() : yes_cb.call(null));
} else
{return null;
}
} else
{return null;
}
}));
});
treklet.gui.enyo.kind(cljs.core.ObjMap.fromObject(["\uFDD0'components","\uFDD0'modal","\uFDD0'kind","\uFDD0'hide","\uFDD0'scrim","\uFDD0'name","\uFDD0'centered","\uFDD0'autoDismiss","\uFDD0'style","\uFDD0'keydown","\uFDD0'ondown","\uFDD0'published","\uFDD0'created","\uFDD0'floating","\uFDD0'classes","\uFDD0'scrimClassName","\uFDD0'show","\uFDD0'btnTap","\uFDD0'setup"],{"\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'allowHtml","\uFDD0'classes"],{"\uFDD0'name":"title","\uFDD0'allowHtml":true,"\uFDD0'classes":"title"}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'allowHtml","\uFDD0'classes"],{"\uFDD0'name":"message","\uFDD0'allowHtml":true,"\uFDD0'classes":"message"}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'style","\uFDD0'components"],{"\uFDD0'kind":"onyx.InputDecorator","\uFDD0'style":"box-sizing:border-box;display:block;width:90%;margin: 0 auto;","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name"],{"\uFDD0'kind":"onyx.Input","\uFDD0'name":"inputBox"})], true)}),cljs.core.ObjMap.fromObject(["\uFDD0'tag","\uFDD0'name","\uFDD0'style","\uFDD0'content"],{"\uFDD0'tag":"div","\uFDD0'name":"buttons","\uFDD0'style":"text-align:center;margin: 0 auto","\uFDD0'content":"Buttons here!"})], true),"\uFDD0'modal":true,"\uFDD0'kind":"onyx.Popup","\uFDD0'hide":(function (sender){
var self__83116 = this;
var hide_callback__83117 = (self__83116["getHideCallback"]).call(self__83116);
var input_box__83118 = ((self__83116["$"])["inputBox"]);
(self__83116["addClass"]).call(self__83116,"anim-scale-out");
return setTimeout((function (){
if(cljs.core.truth_(hide_callback__83117))
{(hide_callback__83117.cljs$lang$arity$1 ? hide_callback__83117.cljs$lang$arity$1(cljs.core.ObjMap.fromObject(["\uFDD0'input","\uFDD0'btn"],{"\uFDD0'input":input_box__83118.getValue(),"\uFDD0'btn":sender})) : hide_callback__83117.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'input","\uFDD0'btn"],{"\uFDD0'input":input_box__83118.getValue(),"\uFDD0'btn":sender})));
} else
{}
goog.dom.classes.remove(document.body,"filter-blur");
return (self__83116["setShowing"]).call(self__83116,false);
}),250);
}),"\uFDD0'scrim":false,"\uFDD0'name":"intelimap_js.gui.kinds.MessageBox","\uFDD0'centered":true,"\uFDD0'autoDismiss":false,"\uFDD0'style":"background-color:white;color:black;-webkit-box-shadow:19px 19px 25px rgba(0,0,0,.3) !important;background-image:none;padding:30px;z-index:160000;","\uFDD0'keydown":(function (sender,evt){
var self__83119 = this;
if(cljs.core._EQ_.cljs$lang$arity$2(evt.keyCode,13))
{return (self__83119["hide"]).call(self__83119);
} else
{return null;
}
}),"\uFDD0'ondown":"keydown","\uFDD0'published":cljs.core.ObjMap.fromObject(["\uFDD0'hideCallback"],{"\uFDD0'hideCallback":null}),"\uFDD0'created":(function (){
var self__83120 = this;
return (self__83120["inherited"]).call(self__83120,arguments);
}),"\uFDD0'floating":true,"\uFDD0'classes":"onyx-light message-box","\uFDD0'scrimClassName":"custom-scrim","\uFDD0'show":(function (){
var self__83121 = this;
(self__83121["inherited"]).call(self__83121,arguments);
(self__83121["addClass"]).call(self__83121,"anim-scale-in");
return goog.dom.classes.add(document.body,"filter-blur");
}),"\uFDD0'btnTap":(function (sender,evt){
var self__83122 = this;
return (self__83122["hide"]).call(self__83122,sender);
}),"\uFDD0'setup":(function (title,message,placeholder,buttons){
var self__83123 = this;
var title_control__83124 = ((self__83123["$"])["title"]);
var mesg__83125 = ((self__83123["$"])["message"]);
(title_control__83124["setContent"]).call(title_control__83124,title);
(mesg__83125["setContent"]).call(mesg__83125,message);
var input_box__83126 = ((self__83123["$"])["inputBox"]);
if((placeholder == null))
{input_box__83126.applyStyle("display","none");
} else
{input_box__83126.setPlaceholder(placeholder);
}
var width__83127 = (30 / cljs.core.count(buttons));
var margin__83128 = (5 / cljs.core.count(buttons));
var margin_str__83129 = [cljs.core.str("15px "),cljs.core.str(margin__83128),cljs.core.str("% 0px "),cljs.core.str(margin__83128),cljs.core.str("%;")].join('');
var G__83130__83131 = cljs.core.seq(buttons);
if(G__83130__83131)
{var btn__83132 = cljs.core.first(G__83130__83131);
var G__83130__83133 = G__83130__83131;
while(true){
((self__83123["$"])["buttons"]).addChild((new onyx.Button(treklet.util.clj__GT_js(cljs.core.ObjMap.fromObject(["\uFDD0'owner","\uFDD0'ontap","\uFDD0'style","\uFDD0'content"],{"\uFDD0'owner":self__83123,"\uFDD0'ontap":"btnTap","\uFDD0'style":[cljs.core.str("background-image:none;background-color:c4e3fe;"),cljs.core.str("margin:"),cljs.core.str(margin_str__83129)].join(''),"\uFDD0'content":btn__83132})))));
var temp__3974__auto____83134 = cljs.core.next(G__83130__83133);
if(temp__3974__auto____83134)
{var G__83130__83135 = temp__3974__auto____83134;
{
var G__83136 = cljs.core.first(G__83130__83135);
var G__83137 = G__83130__83135;
btn__83132 = G__83136;
G__83130__83133 = G__83137;
continue;
}
} else
{}
break;
}
} else
{}
return (self__83123["render"]).call(self__83123);
})}));
