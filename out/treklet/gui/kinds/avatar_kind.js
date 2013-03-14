goog.provide('treklet.gui.kinds.avatar');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('treklet.avatar');
goog.require('treklet.constants');
goog.require('treklet.util');
goog.require('treklet.gui.state');
goog.require('treklet.gui.enyo');
treklet.gui.kinds.avatar._state_ = treklet.gui.state._reference_;
cljs.core.swap_BANG_.cljs$lang$arity$3(treklet.gui.kinds.avatar._state_,cljs.core.merge,cljs.core.ObjMap.fromObject(["\uFDD0'avatar-design"],{"\uFDD0'avatar-design":cljs.core.ObjMap.fromObject(["\uFDD0'balloon-bg-color","\uFDD0'balloon-fg-color","\uFDD0'name-bg-color","\uFDD0'name-fg-color","\uFDD0'username"],{"\uFDD0'balloon-bg-color":"transparent","\uFDD0'balloon-fg-color":"transparent","\uFDD0'name-bg-color":"transparent","\uFDD0'name-fg-color":"transparent","\uFDD0'username":""})}));
treklet.gui.kinds.avatar._centered_ = "-webkit-box-sizing:border-box;box-sizing:border-box;-moz-box-sizing:border-box;display:block;width:85%;margin:10px auto 10px auto !important;padding-left:10px;padding-right:10px;";
treklet.gui.kinds.avatar._bottom_button_ = "width:40%;margin:10px;display:inline-block;";
treklet.gui.enyo.kind(cljs.core.ObjMap.fromObject(["\uFDD0'components","\uFDD0'uploadAvatarImage","\uFDD0'getColor","\uFDD0'avatarImageTapped","\uFDD0'colorPicked","\uFDD0'kind","\uFDD0'avatarImageDismissed","\uFDD0'colorButtonTapped","\uFDD0'name","\uFDD0'published","\uFDD0'updateAvatar","\uFDD0'create","\uFDD0'classes","\uFDD0'avatarChanged"],{"\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'components","\uFDD0'modal","\uFDD0'kind","\uFDD0'name","\uFDD0'centered","\uFDD0'autoDismiss","\uFDD0'forButton","\uFDD0'style","\uFDD0'floating"],{"\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'onColorPick"],{"\uFDD0'kind":"ColorPicker","\uFDD0'onColorPick":"colorPicked"})], true),"\uFDD0'modal":true,"\uFDD0'kind":"onyx.Popup","\uFDD0'name":"colorPopup","\uFDD0'centered":true,"\uFDD0'autoDismiss":true,"\uFDD0'forButton":null,"\uFDD0'style":"z-index:16000007 !important;width:300px;","\uFDD0'floating":true}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'centered","\uFDD0'floating","\uFDD0'modal","\uFDD0'style","\uFDD0'components"],{"\uFDD0'kind":"onyx.Popup","\uFDD0'name":"imagePopup","\uFDD0'centered":true,"\uFDD0'floating":true,"\uFDD0'modal":true,"\uFDD0'style":"padding:10px;width 300px;z-index:16000007 !important;","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'uploadNote"],{"\uFDD0'kind":"jmtk.FileInput","\uFDD0'name":"fileInput","\uFDD0'uploadNote":"Please select an image file."}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'ontap","\uFDD0'style","\uFDD0'content"],{"\uFDD0'kind":"onyx.Button","\uFDD0'ontap":"uploadAvatarImage","\uFDD0'style":"display:inline-block;width:48%;margin:2px;","\uFDD0'content":"Upload"}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'ontap","\uFDD0'style","\uFDD0'content"],{"\uFDD0'kind":"onyx.Button","\uFDD0'ontap":"avatarImageDismissed","\uFDD0'style":"display:inline-block;width:48%;margin:2px;","\uFDD0'content":"Cancel"})], true)}),cljs.core.ObjMap.fromObject(["\uFDD0'tag","\uFDD0'classes","\uFDD0'ontap","\uFDD0'name"],{"\uFDD0'tag":"img","\uFDD0'classes":"treklet_avatar-design-image","\uFDD0'ontap":"avatarImageTapped","\uFDD0'name":"image"}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'classes","\uFDD0'components"],{"\uFDD0'kind":"onyx.InputDecorator","\uFDD0'classes":"username-input","\uFDD0'components":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'placeholder"],{"\uFDD0'kind":"enyo.Input","\uFDD0'name":"usernameInput","\uFDD0'placeholder":"Enter a Username"})], true)}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'ontap","\uFDD0'style","\uFDD0'content"],{"\uFDD0'kind":"onyx.Button","\uFDD0'name":"usernameBgColorButton","\uFDD0'ontap":"colorButtonTapped","\uFDD0'style":treklet.gui.kinds.avatar._centered_,"\uFDD0'content":"Username Background Color"}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'ontap","\uFDD0'style","\uFDD0'content"],{"\uFDD0'kind":"onyx.Button","\uFDD0'name":"usernameTextColorButton","\uFDD0'ontap":"colorButtonTapped","\uFDD0'style":treklet.gui.kinds.avatar._centered_,"\uFDD0'content":"Username Background Color"}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'ontap","\uFDD0'style","\uFDD0'content"],{"\uFDD0'kind":"onyx.Button","\uFDD0'name":"balloonBgColorButton","\uFDD0'ontap":"colorButtonTapped","\uFDD0'style":treklet.gui.kinds.avatar._centered_,"\uFDD0'content":"Username Background Color"}),cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'name","\uFDD0'ontap","\uFDD0'style","\uFDD0'content"],{"\uFDD0'kind":"onyx.Button","\uFDD0'name":"balloonTextColorButton","\uFDD0'ontap":"colorButtonTapped","\uFDD0'style":treklet.gui.kinds.avatar._centered_,"\uFDD0'content":"Username Background Color"})], true),"\uFDD0'uploadAvatarImage":(function (){
var self__42754 = this;
var form__42755 = (new FormData());
var file__42756 = (((self__42754["$"])["fileInput"]).getFiles()[0]);
var xhr__42757 = (new XMLHttpRequest());
if(cljs.core.truth_(file__42756))
{form__42755.append("username",cljs.core.deref(treklet.avatar._uuid_));
form__42755.append("avatarimage",file__42756);
xhr__42757.open("POST",[cljs.core.str(treklet.constants._file_addr_),cljs.core.str("avatar-upload")].join(''));
xhr__42757.send(form__42755);
xhr__42757.onreadystatechange = setTimeout((function (){
return ((self__42754["$"])["image"]).setAttribute("src",[cljs.core.str(treklet.constants._file_addr_),cljs.core.str("images/"),cljs.core.str(cljs.core.deref(treklet.avatar._local_avatar_).call(null,"\uFDD0'uuid")),cljs.core.str(".png")].join(''));
}),1000);
return (self__42754["avatarImageDismissed"]).call(self__42754);
} else
{return null;
}
}),"\uFDD0'getColor":(function (btn){
var self__42758 = this;
return ((self__42758["$"])[btn]).getComputedStyleValue("background-color");
}),"\uFDD0'avatarImageTapped":(function (){
var self__42759 = this;
var image_popup__42760 = ((self__42759["$"])["imagePopup"]);
return image_popup__42760.show();
}),"\uFDD0'colorPicked":(function (sender,evt){
var self__42761 = this;
var color_popup__42762 = ((self__42761["$"])["colorPopup"]);
var btn__42763 = (color_popup__42762["forButton"]);
btn__42763.applyStyle("background-color",(sender["color"]));
return color_popup__42762.hide();
}),"\uFDD0'kind":"enyo.Control","\uFDD0'avatarImageDismissed":(function (){
var self__42764 = this;
var image_popup__42765 = ((self__42764["$"])["imagePopup"]);
return image_popup__42765.hide();
}),"\uFDD0'colorButtonTapped":(function (sender,evt){
var self__42766 = this;
var color_popup__42767 = ((self__42766["$"])["colorPopup"]);
(color_popup__42767["forButton"] = sender);
return color_popup__42767.show();
}),"\uFDD0'name":"treklet_js.gui.kinds.AvatarDesign","\uFDD0'published":cljs.core.ObjMap.fromObject(["\uFDD0'avatar"],{"\uFDD0'avatar":null}),"\uFDD0'updateAvatar":(function (){
var self__42768 = this;
return treklet.avatar.update_user_avatar(cljs.core.merge.cljs$lang$arity$variadic(cljs.core.array_seq([(self__42768["getAvatar"]).call(self__42768),cljs.core.ObjMap.fromObject(["\uFDD0'username","\uFDD0'balloon-bg-color","\uFDD0'balloon-text-color","\uFDD0'name-bg-color","\uFDD0'name-text-color"],{"\uFDD0'username":((self__42768["$"])["usernameInput"]).getValue(),"\uFDD0'balloon-bg-color":(self__42768["getColor"]).call(self__42768,"balloonBgColorButton"),"\uFDD0'balloon-text-color":(self__42768["getColor"]).call(self__42768,"balloonTextColorButton"),"\uFDD0'name-bg-color":(self__42768["getColor"]).call(self__42768,"usernameBgColorButton"),"\uFDD0'name-text-color":(self__42768["getColor"]).call(self__42768,"usernameTextColorButton")})], 0)));
}),"\uFDD0'create":(function (){
var self__42769 = this;
(self__42769["inherited"]).call(self__42769,arguments);
return (self__42769["setAvatar"]).call(self__42769,cljs.core.deref(treklet.avatar._local_avatar_));
}),"\uFDD0'classes":"onyx treklet_avatar-design","\uFDD0'avatarChanged":(function (){
var self__42770 = this;
var avatar__42771 = (self__42770["getAvatar"]).call(self__42770);
var username_input__42772 = ((self__42770["$"])["usernameInput"]);
var balloon_bg_btn__42773 = ((self__42770["$"])["balloonBgColorButton"]);
var balloon_text_btn__42774 = ((self__42770["$"])["balloonTextColorButton"]);
var name_bg_btn__42775 = ((self__42770["$"])["usernameBgColorButton"]);
var name_text_btn__42776 = ((self__42770["$"])["usernameTextColorButton"]);
var img__42777 = ((self__42770["$"])["image"]);
if(cljs.core.truth_(avatar__42771))
{img__42777.setAttribute("src",[cljs.core.str(treklet.constants._file_addr_),cljs.core.str("images/"),cljs.core.str((avatar__42771.cljs$lang$arity$1 ? avatar__42771.cljs$lang$arity$1("\uFDD0'uuid") : avatar__42771.call(null,"\uFDD0'uuid"))),cljs.core.str(".png")].join(''));
username_input__42772.setValue((avatar__42771.cljs$lang$arity$1 ? avatar__42771.cljs$lang$arity$1("\uFDD0'username") : avatar__42771.call(null,"\uFDD0'username")));
balloon_bg_btn__42773.applyStyle("background-color",(avatar__42771.cljs$lang$arity$1 ? avatar__42771.cljs$lang$arity$1("\uFDD0'balloon-bg-color") : avatar__42771.call(null,"\uFDD0'balloon-bg-color")));
balloon_text_btn__42774.applyStyle("background-color",(avatar__42771.cljs$lang$arity$1 ? avatar__42771.cljs$lang$arity$1("\uFDD0'balloon-text-color") : avatar__42771.call(null,"\uFDD0'balloon-text-color")));
name_bg_btn__42775.applyStyle("background-color",(avatar__42771.cljs$lang$arity$1 ? avatar__42771.cljs$lang$arity$1("\uFDD0'name-bg-color") : avatar__42771.call(null,"\uFDD0'name-bg-color")));
return name_text_btn__42776.applyStyle("background-color",(avatar__42771.cljs$lang$arity$1 ? avatar__42771.cljs$lang$arity$1("\uFDD0'name-text-color") : avatar__42771.call(null,"\uFDD0'name-text-color")));
} else
{return null;
}
})}));
