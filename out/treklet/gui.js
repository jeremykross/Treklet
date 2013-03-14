goog.provide('treklet.old_gui');
goog.require('cljs.core');
goog.require('goog.net.IframeIo');
goog.require('goog.dom');
goog.require('goog.json');
goog.require('treklet.avatar');
goog.require('treklet.localstorage');
goog.require('treklet.events');
goog.require('treklet.constants');
goog.require('treklet.util');
treklet.old_gui.enyo = enyo;
treklet.old_gui.onyx = onyx;
treklet.old_gui.make_content_modifier = (function make_content_modifier(component,property){
return (function (){
var this__7478 = this;
return (((this__7478["$"])[component])["setContent"]).call(((this__7478["$"])[component]),(this__7478[property]));
});
});
enyo.kind.call(null,treklet.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'kind","\uFDD0'classes","\uFDD0'tabs","\uFDD0'setAvatar","\uFDD0'components","\uFDD0'evt-tab-changed"],{"\uFDD0'name":"MainWindow","\uFDD0'kind":"enyo.Control","\uFDD0'classes":"onyx","\uFDD0'tabs":cljs.core.PersistentVector.fromArray(["pluginManager","avatarDesign"], true),"\uFDD0'setAvatar":(function (avatar){
var this__7479 = this;
return (((this__7479["$"])["avatarDesign"])["setAvatar"]).call(((this__7479["$"])["avatarDesign"]),avatar);
}),"\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'tag","\uFDD0'style","\uFDD0'components"],{"\uFDD0'tag":"div","\uFDD0'style":"text-align:center;","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'tag","\uFDD0'style","\uFDD0'components"],{"\uFDD0'tag":"span","\uFDD0'style":"display:inline-block;","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'style","\uFDD0'controlClasses","\uFDD0'components"],{"\uFDD0'kind":"onyx.RadioGroup","\uFDD0'name":"tabGroup","\uFDD0'style":"padding:10px;","\uFDD0'controlClasses":"onyx-tabbutton","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'content","\uFDD0'widget","\uFDD0'active","\uFDD0'ontap"],{"\uFDD0'name":"tabAvatar","\uFDD0'content":"Avatar","\uFDD0'widget":"avatarDesign","\uFDD0'active":true,"\uFDD0'ontap":"evt-tab-changed"}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'widget","\uFDD0'content","\uFDD0'ontap"],{"\uFDD0'name":"tabPlugins","\uFDD0'widget":"pluginManager","\uFDD0'content":"Plugins","\uFDD0'ontap":"evt-tab-changed"})], true)})], true)})], true)}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'components"],{"\uFDD0'name":"tabs","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'showing"],{"\uFDD0'kind":"PluginManager","\uFDD0'name":"pluginManager","\uFDD0'showing":false}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name"],{"\uFDD0'kind":"AvatarDesign","\uFDD0'name":"avatarDesign"})], true)})], true),"\uFDD0'evt-tab-changed":(function (sender,d){
var this__7480 = this;
var G__7481__7482 = cljs.core.seq.call(null,(this__7480["tabs"]));
if(G__7481__7482)
{var tab__7483 = cljs.core.first.call(null,G__7481__7482);
var G__7481__7484 = G__7481__7482;
while(true){
(((this__7480["$"])[tab__7483])["hide"]).call(((this__7480["$"])[tab__7483]));
var temp__3974__auto____7485 = cljs.core.next.call(null,G__7481__7484);
if(temp__3974__auto____7485)
{var G__7481__7486 = temp__3974__auto____7485;
{
var G__7487 = cljs.core.first.call(null,G__7481__7486);
var G__7488 = G__7481__7486;
tab__7483 = G__7487;
G__7481__7484 = G__7488;
continue;
}
} else
{}
break;
}
} else
{}
return (((this__7480["$"])[(sender["widget"])])["show"]).call(((this__7480["$"])[(sender["widget"])]));
})})));
treklet.old_gui.MainWindow = MainWindow;
enyo.kind.call(null,treklet.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'autoStartChanged","\uFDD0'components","\uFDD0'kind","\uFDD0'name","\uFDD0'style","\uFDD0'evt-toggle-changed","\uFDD0'published","\uFDD0'evt-check-changed","\uFDD0'labelChanged","\uFDD0'create","\uFDD0'classes"],{"\uFDD0'autoStartChanged":(function (){
var this__7489 = this;
return (((this__7489["$"])["toggleControl"])["setValue"]).call(((this__7489["$"])["toggleControl"]),(this__7489["autoStart"]));
}),"\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'onChange","\uFDD0'style"],{"\uFDD0'kind":"onyx.Checkbox","\uFDD0'name":"checkbox","\uFDD0'onChange":"evt-check-changed","\uFDD0'style":"float:left;margin-right:5px"}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'content","\uFDD0'style"],{"\uFDD0'name":"labelControl","\uFDD0'content":"Test","\uFDD0'style":"float:left;font-size:17px;line-height:31px;"}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'onChange","\uFDD0'style"],{"\uFDD0'kind":"onyx.ToggleButton","\uFDD0'name":"toggleControl","\uFDD0'onChange":"evt-toggle-changed","\uFDD0'style":"float:right"}),cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"clear:both;"})], true),"\uFDD0'kind":"enyo.Control","\uFDD0'name":"Plugin","\uFDD0'style":"padding:2px","\uFDD0'evt-toggle-changed":(function (sender){
var this__7490 = this;
return (this__7490["bubble"]).call(this__7490,"onToggleChanged",cljs.core.ObjMap.fromObject(["\uFDD0'isOn","\uFDD0'plugin"],{"\uFDD0'isOn":(sender["getValue"]).call(sender),"\uFDD0'plugin":this__7490}));
}),"\uFDD0'published":cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'pluginName","\uFDD0'pluginHref","\uFDD0'autoStart"],{"\uFDD0'label":"","\uFDD0'pluginName":"","\uFDD0'pluginHref":"","\uFDD0'autoStart":false}),"\uFDD0'evt-check-changed":(function (sender){
var this__7491 = this;
return (this__7491["bubble"]).call(this__7491,"onCheckChanged",cljs.core.ObjMap.fromObject(["\uFDD0'checked","\uFDD0'plugin"],{"\uFDD0'checked":(sender["getValue"]).call(sender),"\uFDD0'plugin":this__7491}));
}),"\uFDD0'labelChanged":treklet.old_gui.make_content_modifier.call(null,"labelControl","label"),"\uFDD0'create":(function (){
var this__7492 = this;
(this__7492["inherited"]).call(this__7492,arguments);
(this__7492["labelChanged"]).call(this__7492);
return (this__7492["autoStartChanged"]).call(this__7492);
}),"\uFDD0'classes":"onyx"})));
treklet.old_gui.Plugin = Plugin;
enyo.kind.call(null,treklet.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'components","\uFDD0'kind","\uFDD0'evt-delete-clicked","\uFDD0'checkedPlugins","\uFDD0'name","\uFDD0'addPlugin","\uFDD0'style","\uFDD0'evt-toggle-changed","\uFDD0'handlers","\uFDD0'evt-check-changed","\uFDD0'create","\uFDD0'classes"],{"\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'style","\uFDD0'components"],{"\uFDD0'style":"padding:2px;","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'content","\uFDD0'style"],{"\uFDD0'content":"Installed Plugins:","\uFDD0'style":"position:relative;top:15;float:left;"}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'style","\uFDD0'ontap","\uFDD0'content"],{"\uFDD0'kind":"onyx.Button","\uFDD0'style":"float:right;","\uFDD0'ontap":"evt-delete-clicked","\uFDD0'content":"Delete Checked"}),cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"clear:both;"}),cljs.core.ObjMap.fromObject(["\uFDD0'tag","\uFDD0'name","\uFDD0'style","\uFDD0'components"],{"\uFDD0'tag":"div","\uFDD0'name":"pluginDiv","\uFDD0'style":"max-height:275px;overflow:auto;padding:5px;margin:5px;border:1px solid lightgrey;","\uFDD0'components":cljs.core.PersistentVector.EMPTY})], true)})], true),"\uFDD0'kind":"enyo.Control","\uFDD0'evt-delete-clicked":(function (sender,e){
var this__7493 = this;
var plugins__7494 = cljs.core.deref.call(null,(this__7493["checkedPlugins"]));
var G__7495__7496 = cljs.core.seq.call(null,plugins__7494);
if(G__7495__7496)
{var G__7498__7500 = cljs.core.first.call(null,G__7495__7496);
var vec__7499__7501 = G__7498__7500;
var href__7502 = cljs.core.nth.call(null,vec__7499__7501,0,null);
var plugin__7503 = cljs.core.nth.call(null,vec__7499__7501,1,null);
var G__7495__7504 = G__7495__7496;
var G__7498__7505 = G__7498__7500;
var G__7495__7506 = G__7495__7504;
while(true){
var vec__7507__7508 = G__7498__7505;
var href__7509 = cljs.core.nth.call(null,vec__7507__7508,0,null);
var plugin__7510 = cljs.core.nth.call(null,vec__7507__7508,1,null);
var G__7495__7511 = G__7495__7506;
treklet.localstorage.remove_plugin.call(null,href__7509);
(plugin__7510["destroy"]).call(plugin__7510);
var temp__3974__auto____7512 = cljs.core.next.call(null,G__7495__7511);
if(temp__3974__auto____7512)
{var G__7495__7513 = temp__3974__auto____7512;
{
var G__7540 = cljs.core.first.call(null,G__7495__7513);
var G__7541 = G__7495__7513;
G__7498__7505 = G__7540;
G__7495__7506 = G__7541;
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
}),"\uFDD0'checkedPlugins":cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY),"\uFDD0'name":"PluginManager","\uFDD0'addPlugin":(function (plugin_map){
var this__7514 = this;
(this__7514["createComponent"]).call(this__7514,treklet.util.clj__GT_js.call(null,cljs.core.merge.call(null,plugin_map,cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'container","\uFDD0'label","\uFDD0'autoStart"],{"\uFDD0'kind":"Plugin","\uFDD0'container":((this__7514["$"])["pluginDiv"]),"\uFDD0'label":treklet.util.ellipsize.call(null,plugin_map.call(null,"\uFDD0'pluginName"),35),"\uFDD0'autoStart":plugin_map.call(null,"\uFDD0'pluginAutoStart")}))));
return (((this__7514["$"])["pluginDiv"])["render"]).call(((this__7514["$"])["pluginDiv"]));
}),"\uFDD0'style":"width:100%;","\uFDD0'evt-toggle-changed":(function (sender,e){
var plugin__7515 = e.call(null,"\uFDD0'plugin");
if(cljs.core.truth_(e.call(null,"\uFDD0'isOn")))
{return treklet.localstorage.modify_plugin.call(null,(plugin__7515["getPluginHref"]).call(plugin__7515),cljs.core.ObjMap.fromObject(["\uFDD0'autostart"],{"\uFDD0'autostart":true}));
} else
{return treklet.localstorage.modify_plugin.call(null,(plugin__7515["getPluginHref"]).call(plugin__7515),cljs.core.ObjMap.fromObject(["\uFDD0'autostart"],{"\uFDD0'autostart":false}));
}
}),"\uFDD0'handlers":cljs.core.ObjMap.fromObject(["\uFDD0'onCheckChanged","\uFDD0'onToggleChanged"],{"\uFDD0'onCheckChanged":"evt-check-changed","\uFDD0'onToggleChanged":"evt-toggle-changed"}),"\uFDD0'evt-check-changed":(function (sender,e){
var this__7516 = this;
var checked_plugins__7517 = (this__7516["checkedPlugins"]);
var plugin__7518 = e.call(null,"\uFDD0'plugin");
var href__7519 = (plugin__7518["getPluginHref"]).call(plugin__7518);
if(cljs.core.truth_(e.call(null,"\uFDD0'checked")))
{return cljs.core.swap_BANG_.call(null,checked_plugins__7517,cljs.core.assoc,href__7519,plugin__7518);
} else
{return cljs.core.swap_BANG_.call(null,checked_plugins__7517,cljs.core.dissoc,href__7519);
}
}),"\uFDD0'create":(function (){
var this__7520 = this;
(this__7520["inherited"]).call(this__7520,arguments);
return treklet.localstorage.read.call(null,"plugins",(function (plugins){
if(cljs.core.truth_(plugins))
{var G__7521__7522 = cljs.core.seq.call(null,plugins);
if(G__7521__7522)
{var G__7524__7526 = cljs.core.first.call(null,G__7521__7522);
var vec__7525__7527 = G__7524__7526;
var k__7528 = cljs.core.nth.call(null,vec__7525__7527,0,null);
var v__7529 = cljs.core.nth.call(null,vec__7525__7527,1,null);
var G__7521__7530 = G__7521__7522;
var G__7524__7531 = G__7524__7526;
var G__7521__7532 = G__7521__7530;
while(true){
var vec__7533__7534 = G__7524__7531;
var k__7535 = cljs.core.nth.call(null,vec__7533__7534,0,null);
var v__7536 = cljs.core.nth.call(null,vec__7533__7534,1,null);
var G__7521__7537 = G__7521__7532;
(this__7520["addPlugin"]).call(this__7520,cljs.core.ObjMap.fromObject(["\uFDD0'pluginName","\uFDD0'pluginHref","\uFDD0'pluginAutoStart"],{"\uFDD0'pluginName":v__7536.call(null,"\uFDD0'name"),"\uFDD0'pluginHref":v__7536.call(null,"\uFDD0'href"),"\uFDD0'pluginAutoStart":v__7536.call(null,"\uFDD0'autostart")}));
var temp__3974__auto____7538 = cljs.core.next.call(null,G__7521__7537);
if(temp__3974__auto____7538)
{var G__7521__7539 = temp__3974__auto____7538;
{
var G__7542 = cljs.core.first.call(null,G__7521__7539);
var G__7543 = G__7521__7539;
G__7524__7531 = G__7542;
G__7521__7532 = G__7543;
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
} else
{return null;
}
}));
}),"\uFDD0'classes":"onyx"})));
treklet.old_gui.PluginManager = PluginManager;
enyo.kind.call(null,treklet.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'components","\uFDD0'kind","\uFDD0'evt-on-close-requested","\uFDD0'evt-color-btn-tap","\uFDD0'name","\uFDD0'evt-ok-clicked","\uFDD0'published","\uFDD0'evt-color-pick","\uFDD0'create","\uFDD0'classes","\uFDD0'avatarChanged","\uFDD0'evt-cancel-clicked"],{"\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'tag","\uFDD0'name","\uFDD0'style","\uFDD0'attributes","\uFDD0'components"],{"\uFDD0'tag":"form","\uFDD0'name":"form","\uFDD0'style":"padding:0;","\uFDD0'attributes":cljs.core.ObjMap.fromObject(["\uFDD0'enctype","\uFDD0'method","\uFDD0'action"],{"\uFDD0'enctype":"multipart/form-data","\uFDD0'method":"POST","\uFDD0'action":[cljs.core.str(treklet.constants._file_addr_),cljs.core.str("avatar-upload")].join('')}),"\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'tag","\uFDD0'content","\uFDD0'style"],{"\uFDD0'tag":"div","\uFDD0'content":"Avatar Image:","\uFDD0'style":"margin-top:9px;margin-left:7px"}),cljs.core.ObjMap.fromObject(["\uFDD0'tag","\uFDD0'style","\uFDD0'attributes"],{"\uFDD0'tag":"input","\uFDD0'style":"pading:0;margin:0 0 0 7px;","\uFDD0'attributes":cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'type","\uFDD0'size"],{"\uFDD0'name":"avatarimage","\uFDD0'type":"file","\uFDD0'size":10})}),cljs.core.ObjMap.fromObject(["\uFDD0'tag","\uFDD0'attributes"],{"\uFDD0'tag":"input","\uFDD0'attributes":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'name","\uFDD0'value","\uFDD0'class"],{"\uFDD0'type":"hidden","\uFDD0'name":"username","\uFDD0'value":"jeremy","\uFDD0'class":"username"})})], true)}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'style","\uFDD0'components"],{"\uFDD0'kind":"onyx.InputDecorator","\uFDD0'style":"margin:16px 7px 0px 7px;padding:10px;width:380px;display:block;","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'attributes","\uFDD0'placeholder"],{"\uFDD0'kind":"enyo.Input","\uFDD0'name":"usernameInput","\uFDD0'attributes":cljs.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":"username"}),"\uFDD0'placeholder":"Enter a Username"})], true)}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'avatarKey","\uFDD0'content","\uFDD0'style","\uFDD0'ontap"],{"\uFDD0'kind":"onyx.Button","\uFDD0'name":"usernameBackgroundColorBtn","\uFDD0'avatarKey":"name-bg-color","\uFDD0'content":"Username Background Color","\uFDD0'style":"margin:7px;display:block;width:400px;","\uFDD0'ontap":"evt-color-btn-tap"}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'avatarKey","\uFDD0'content","\uFDD0'style","\uFDD0'ontap"],{"\uFDD0'kind":"onyx.Button","\uFDD0'name":"usernameTextColorBtn","\uFDD0'avatarKey":"name-text-color","\uFDD0'content":"Username Text Color","\uFDD0'style":"margin:7px;display:block;width:400px;","\uFDD0'ontap":"evt-color-btn-tap"}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'avatarKey","\uFDD0'content","\uFDD0'style","\uFDD0'ontap"],{"\uFDD0'kind":"onyx.Button","\uFDD0'name":"balloonBackgroundColorBtn","\uFDD0'avatarKey":"balloon-bg-color","\uFDD0'content":"Balloon Background Color","\uFDD0'style":"margin:7px;display:block;width:400px;","\uFDD0'ontap":"evt-color-btn-tap"}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'avatarKey","\uFDD0'content","\uFDD0'style","\uFDD0'ontap"],{"\uFDD0'kind":"onyx.Button","\uFDD0'name":"balloonTextColorBtn","\uFDD0'avatarKey":"balloon-text-color","\uFDD0'content":"Balloon Text Color","\uFDD0'style":"margin:7px;display:block;width:400px;","\uFDD0'ontap":"evt-color-btn-tap"}),cljs.core.ObjMap.fromObject(["\uFDD0'tag","\uFDD0'style","\uFDD0'components"],{"\uFDD0'tag":"div","\uFDD0'style":"text-align:center","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'tag","\uFDD0'allowHtml","\uFDD0'style","\uFDD0'components"],{"\uFDD0'tag":"span","\uFDD0'allowHtml":true,"\uFDD0'style":"display:inline-block;","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'content","\uFDD0'style","\uFDD0'ontap"],{"\uFDD0'kind":"onyx.Button","\uFDD0'content":"Ok","\uFDD0'style":"width:193px;margin:7px","\uFDD0'ontap":"evt-ok-clicked"}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'content","\uFDD0'style","\uFDD0'ontap"],{"\uFDD0'kind":"onyx.Button","\uFDD0'content":"Cancel","\uFDD0'style":"width:193px;margin:7px","\uFDD0'ontap":"evt-cancel-clicked"})], true)})], true)}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'autoDismiss","\uFDD0'centered","\uFDD0'floating","\uFDD0'modal","\uFDD0'style","\uFDD0'components"],{"\uFDD0'kind":"onyx.Popup","\uFDD0'name":"colorPopup","\uFDD0'autoDismiss":false,"\uFDD0'centered":true,"\uFDD0'floating":true,"\uFDD0'modal":true,"\uFDD0'style":"width:300px;z-index:16000005;","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'onColorPick"],{"\uFDD0'kind":"ColorPicker","\uFDD0'onColorPick":"evt-color-pick"})], true)})], true),"\uFDD0'kind":"enyo.Control","\uFDD0'evt-on-close-requested":(function (sender,e){
var this__7544 = this;
return (e["doOnCloseRequeseted"]).call(e);
}),"\uFDD0'evt-color-btn-tap":(function (sender,e){
var this__7545 = this;
var color_pop__7546 = ((this__7545["$"])["colorPopup"]);
(color_pop__7546["for-btn"] = sender);
return (color_pop__7546["show"]).call(color_pop__7546);
}),"\uFDD0'name":"AvatarDesign","\uFDD0'evt-ok-clicked":(function (sender,e){
var this__7547 = this;
var get_color__7548 = (function (btn){
return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,(btn["avatarKey"]))],[(btn["color"])]);
});
var av__7549 = cljs.core.merge.call(null,(this__7547["getAvatar"]).call(this__7547),cljs.core.ObjMap.fromObject(["\uFDD0'username"],{"\uFDD0'username":((((this__7547["$"])["usernameInput"])["hasNode"]).call(((this__7547["$"])["usernameInput"]))["value"])}),get_color__7548.call(null,((this__7547["$"])["usernameBackgroundColorBtn"])),get_color__7548.call(null,((this__7547["$"])["usernameTextColorBtn"])),get_color__7548.call(null,((this__7547["$"])["balloonBackgroundColorBtn"])),get_color__7548.call(null,((this__7547["$"])["balloonTextColorBtn"])));
treklet.avatar.update_user_avatar.call(null,av__7549);
var iframeio__7550 = (new goog.net.IframeIo());
var form__7551 = (((this__7547["$"])["form"])["hasNode"]).call(((this__7547["$"])["form"]));
var username__7552 = goog.dom.getElementByClass("username",form__7551);
username__7552.setAttribute("value",cljs.core.deref.call(null,treklet.avatar._uuid_));
iframeio__7550.sendFromForm(form__7551);
return (this__7547["bubble"]).call(this__7547,"onCloseRequested");
}),"\uFDD0'published":cljs.core.ObjMap.fromObject(["\uFDD0'avatar"],{"\uFDD0'avatar":null}),"\uFDD0'evt-color-pick":(function (sender,color){
var this__7553 = this;
var color_pop__7554 = ((this__7553["$"])["colorPopup"]);
var btn__7555 = (color_pop__7554["for-btn"]);
var color__7556 = (sender["color"]);
(btn__7555["applyStyle"]).call(btn__7555,"background-color",color__7556);
(btn__7555["color"] = color__7556);
return (color_pop__7554["hide"]).call(color_pop__7554);
}),"\uFDD0'create":(function (){
var this__7557 = this;
return (this__7557["inherited"]).call(this__7557,arguments);
}),"\uFDD0'classes":"onyx","\uFDD0'avatarChanged":(function (){
var this__7558 = this;
var lookup__7559 = cljs.core.ObjMap.fromObject(["\uFDD0'name-bg-color","\uFDD0'name-text-color","\uFDD0'balloon-bg-color","\uFDD0'balloon-text-color"],{"\uFDD0'name-bg-color":"usernameBackgroundColorBtn","\uFDD0'name-text-color":"usernameTextColorBtn","\uFDD0'balloon-bg-color":"balloonBackgroundColorBtn","\uFDD0'balloon-text-color":"balloonTextColorBtn"});
return setTimeout((function (){
var avatar__7560 = (this__7558["getAvatar"]).call(this__7558);
((((this__7558["$"])["usernameInput"])["hasNode"]).call(((this__7558["$"])["usernameInput"]))["value"] = avatar__7560.call(null,"\uFDD0'username"));
var G__7561__7562 = cljs.core.seq.call(null,cljs.core.keys.call(null,lookup__7559));
if(G__7561__7562)
{var k__7563 = cljs.core.first.call(null,G__7561__7562);
var G__7561__7564 = G__7561__7562;
while(true){
var button__7565 = ((this__7558["$"])[lookup__7559.call(null,k__7563)]);
var color__7566 = avatar__7560.call(null,k__7563);
(button__7565["applyStyle"]).call(button__7565,"background-color",color__7566);
(button__7565["color"] = color__7566);
var temp__3974__auto____7567 = cljs.core.next.call(null,G__7561__7564);
if(temp__3974__auto____7567)
{var G__7561__7568 = temp__3974__auto____7567;
{
var G__7570 = cljs.core.first.call(null,G__7561__7568);
var G__7571 = G__7561__7568;
k__7563 = G__7570;
G__7561__7564 = G__7571;
continue;
}
} else
{}
break;
}
} else
{}
return 100;
}));
}),"\uFDD0'evt-cancel-clicked":(function (sender,e){
var this__7569 = this;
return (this__7569["bubble"]).call(this__7569,"onCloseRequested");
})})));
treklet.old_gui.AvatarDesign = AvatarDesign;
enyo.kind.call(null,treklet.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'components","\uFDD0'messageChanged","\uFDD0'evt-no-tapped","\uFDD0'kind","\uFDD0'evt-yes-tapped","\uFDD0'name","\uFDD0'centered","\uFDD0'titleChanged","\uFDD0'style","\uFDD0'published","\uFDD0'floating","\uFDD0'positiveLabelChanged","\uFDD0'negativeLabelChanged","\uFDD0'classes"],{"\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'content","\uFDD0'style"],{"\uFDD0'name":"titleComp","\uFDD0'content":"Example Title","\uFDD0'style":"font-size:22px;margin-bottom:10px;margin-top:9px"}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'content","\uFDD0'style"],{"\uFDD0'name":"mesgComp","\uFDD0'content":"Example Message","\uFDD0'style":"font-size:15px;margin-bottom:15px;"}),cljs.core.ObjMap.fromObject(["\uFDD0'tag","\uFDD0'style","\uFDD0'components"],{"\uFDD0'tag":"div","\uFDD0'style":"text-align:center","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'tag","\uFDD0'allowHtml","\uFDD0'style","\uFDD0'components"],{"\uFDD0'tag":"span","\uFDD0'allowHtml":true,"\uFDD0'style":"display:inline-block;","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'kind","\uFDD0'content","\uFDD0'style","\uFDD0'ontap"],{"\uFDD0'name":"posBtn","\uFDD0'kind":"onyx.Button","\uFDD0'content":"Yes","\uFDD0'style":"margin:10px","\uFDD0'ontap":"evt-yes-tapped"}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'kind","\uFDD0'content","\uFDD0'style","\uFDD0'ontap"],{"\uFDD0'name":"negBtn","\uFDD0'kind":"onyx.Button","\uFDD0'content":"No","\uFDD0'style":"margin:10px","\uFDD0'ontap":"evt-no-tapped"})], true)})], true)})], true),"\uFDD0'messageChanged":treklet.old_gui.make_content_modifier.call(null,"mesgComp","message"),"\uFDD0'evt-no-tapped":(function (sender,e){
var this__7572 = this;
return (this__7572["hide"]).call(this__7572);
}),"\uFDD0'kind":"onyx.Popup","\uFDD0'evt-yes-tapped":(function (sender,e){
var this__7573 = this;
if(cljs.core.truth_((this__7573["positiveCallback"])))
{(this__7573["positiveCallback"]).call(null);
} else
{}
return (this__7573["hide"]).call(this__7573);
}),"\uFDD0'name":"YesNoDialog","\uFDD0'centered":true,"\uFDD0'titleChanged":treklet.old_gui.make_content_modifier.call(null,"titleComp","title"),"\uFDD0'style":"position:fixed;padding:25px;z-index:16000005;","\uFDD0'published":cljs.core.ObjMap.fromObject(["\uFDD0'message","\uFDD0'title","\uFDD0'positiveLabel","\uFDD0'negativeLabel","\uFDD0'positiveCallback"],{"\uFDD0'message":"Example Message","\uFDD0'title":"Example Title","\uFDD0'positiveLabel":"Yes","\uFDD0'negativeLabel":"No","\uFDD0'positiveCallback":null}),"\uFDD0'floating":true,"\uFDD0'positiveLabelChanged":treklet.old_gui.make_content_modifier.call(null,"posBtn","positiveLabel"),"\uFDD0'negativeLabelChanged":treklet.old_gui.make_content_modifier.call(null,"negBtn","negativeLabel"),"\uFDD0'classes":"onyx"})));
treklet.old_gui.YesNoDialog = YesNoDialog;
treklet.old_gui.yes_no_dialog = (function yes_no_dialog(title,mesg,yes_cb){
var control__7575 = (new treklet.old_gui.YesNoDialog());
(control__7575["setTitle"]).call(control__7575,title);
(control__7575["setMessage"]).call(control__7575,mesg);
(control__7575["setPositiveCallback"]).call(control__7575,yes_cb);
return (control__7575["show"]).call(control__7575);
});
enyo.kind.call(null,treklet.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'components","\uFDD0'kind","\uFDD0'evt-on-close-requested","\uFDD0'name","\uFDD0'setAvatar","\uFDD0'autoDismiss","\uFDD0'style","\uFDD0'handlers","\uFDD0'floating","\uFDD0'classes"],{"\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'kind"],{"\uFDD0'name":"mainWindow","\uFDD0'kind":"MainWindow"})], true),"\uFDD0'kind":"onyx.Popup","\uFDD0'evt-on-close-requested":(function (sender,e){
var this__7576 = this;
treklet.events.signal_overlay_changed.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'visible"],{"\uFDD0'visible":false}));
return (this__7576["hide"]).call(this__7576);
}),"\uFDD0'name":"AvatarDesignPopup","\uFDD0'setAvatar":(function (avatar){
var this__7577 = this;
return (((this__7577["$"])["mainWindow"])["setAvatar"]).call(((this__7577["$"])["mainWindow"]),avatar);
}),"\uFDD0'autoDismiss":false,"\uFDD0'style":"position:fixed;top:5%;right:2.5%;z-index:16000005;","\uFDD0'handlers":cljs.core.ObjMap.fromObject(["\uFDD0'onCloseRequested"],{"\uFDD0'onCloseRequested":"evt-on-close-requested"}),"\uFDD0'floating":true,"\uFDD0'classes":"onyx"})));
treklet.old_gui.AvatarDesignPopup = AvatarDesignPopup;
