goog.provide('treklet.gui.kinds.main');
goog.require('cljs.core');
goog.require('treklet.events');
goog.require('treklet.util');
goog.require('treklet.gui.state');
goog.require('treklet.gui.enyo');
treklet.gui.kinds.main._state_ = treklet.gui.state._reference_;
cljs.core.swap_BANG_.cljs$lang$arity$3(treklet.gui.kinds.main._state_,cljs.core.merge,cljs.core.ObjMap.fromObject(["\uFDD0'manager-kind"],{"\uFDD0'manager-kind":cljs.core.ObjMap.fromObject(["\uFDD0'panels","\uFDD0'panel-index"],{"\uFDD0'panels":cljs.core.PersistentVector.fromArray(["Avatar","Plugins"], true),"\uFDD0'panel-index":0})}));
treklet.gui.kinds.main._bottom_button_ = "display:inline-block;width:85%;margin:10px";
treklet.gui.enyo.kind(cljs.core.ObjMap.fromObject(["\uFDD0'components","\uFDD0'modal","\uFDD0'kind","\uFDD0'scrim","\uFDD0'name","\uFDD0'autoDismiss","\uFDD0'handlers","\uFDD0'floating","\uFDD0'scim","\uFDD0'classes","\uFDD0'scrimClassName"],{"\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'kind"],{"\uFDD0'kind":"treklet_js.gui.kinds.Manager"})], true),"\uFDD0'modal":false,"\uFDD0'kind":"onyx.Popup","\uFDD0'scrim":false,"\uFDD0'name":"treklet_js.gui.kinds.MainPopup","\uFDD0'autoDismiss":false,"\uFDD0'handlers":cljs.core.ObjMap.fromObject(["\uFDD0'onDismiss"],{"\uFDD0'onDismiss":"hide"}),"\uFDD0'floating":true,"\uFDD0'scim":true,"\uFDD0'classes":"treklet_main-popup","\uFDD0'scrimClassName":"treklet_scrim"}));
treklet.gui.enyo.kind(cljs.core.ObjMap.fromObject(["\uFDD0'components","\uFDD0'kind","\uFDD0'layoutKind","\uFDD0'name","\uFDD0'style","\uFDD0'create","\uFDD0'classes","\uFDD0'okTap","\uFDD0'events"],{"\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'style","\uFDD0'controlClasses","\uFDD0'components"],{"\uFDD0'kind":"onyx.RadioGroup","\uFDD0'name":"managerTabs","\uFDD0'style":"display:block;text-align:center;padding:10px;","\uFDD0'controlClasses":"onyx-tabbutton","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'content","\uFDD0'active"],{"\uFDD0'content":"Avatar","\uFDD0'active":true}),cljs.core.ObjMap.fromObject(["\uFDD0'content"],{"\uFDD0'content":"Plugins"})], true)}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'fit","\uFDD0'index","\uFDD0'name","\uFDD0'style","\uFDD0'arrangerKind","\uFDD0'components"],{"\uFDD0'kind":"enyo.Panels","\uFDD0'fit":true,"\uFDD0'index":0,"\uFDD0'name":"managerPanels","\uFDD0'style":"background-color:black;","\uFDD0'arrangerKind":"HFlipArranger","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'kind"],{"\uFDD0'name":"avatar","\uFDD0'kind":"treklet_js.gui.kinds.AvatarDesign"}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'kind"],{"\uFDD0'name":"plugin","\uFDD0'kind":"PluginManager"})], true)}),cljs.core.ObjMap.fromObject(["\uFDD0'style","\uFDD0'components"],{"\uFDD0'style":"text-align:center","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'style","\uFDD0'content","\uFDD0'ontap"],{"\uFDD0'kind":"onyx.Button","\uFDD0'style":treklet.gui.kinds.main._bottom_button_,"\uFDD0'content":"Ok","\uFDD0'ontap":"okTap"})], true)})], true),"\uFDD0'kind":"enyo.Control","\uFDD0'layoutKind":"enyo.FittableRowsLayout","\uFDD0'name":"treklet_js.gui.kinds.Manager","\uFDD0'style":"width: 100%; height:100%","\uFDD0'create":(function (){
var self__26686 = this;
(self__26686["inherited"]).call(self__26686,arguments);
var manager_tabs__26687 = ((self__26686["$"])["managerTabs"]);
var manager_panes__26688 = ((self__26686["$"])["managerPanels"]);
treklet.gui.enyo.make_subscribable(manager_tabs__26687,"active");
treklet.gui.enyo.make_subscribable(manager_panes__26688,"index");
treklet.gui.enyo.bind_to_state.cljs$lang$arity$variadic(manager_tabs__26687,"active",treklet.gui.kinds.main._state_,"manager-kind.panel-index",cljs.core.array_seq(["\uFDD0'l2r",(function (x){
if(cljs.core.truth_(x))
{return treklet.util.index_of(cljs.core.deref(treklet.gui.kinds.main._state_).call(null,"\uFDD0'manager-kind").call(null,"\uFDD0'panels"),(x["content"]));
} else
{return null;
}
})], 0));
return treklet.gui.enyo.bind_to_state.cljs$lang$arity$4(manager_panes__26688,"index",treklet.gui.kinds.main._state_,"manager-kind.panel-index");
}),"\uFDD0'classes":"onyx","\uFDD0'okTap":(function (){
var self__26689 = this;
treklet.events.signal_overlay_changed.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.ObjMap.fromObject(["\uFDD0'visible"],{"\uFDD0'visible":false})], 0));
((self__26689["$"])["avatar"]).updateAvatar();
return (self__26689["doDismiss"]).call(self__26689);
}),"\uFDD0'events":cljs.core.ObjMap.fromObject(["\uFDD0'onDismiss"],{"\uFDD0'onDismiss":""})}));
