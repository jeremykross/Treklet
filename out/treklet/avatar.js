goog.provide('treklet.avatar');
goog.require('cljs.core');
goog.require('goog.net.IframeIo');
goog.require('goog.dom.classes');
goog.require('treklet.events');
goog.require('goog.ui.PopupColorPicker');
goog.require('goog.ui.ColorPicker');
goog.require('goog.dom');
goog.require('treklet.localstorage');
goog.require('goog.dom.forms');
goog.require('hiccups.runtime');
goog.require('goog.array');
goog.require('goog.events');
goog.require('treklet.constants');
goog.require('goog.style');
goog.require('goog.json');
goog.require('treklet.util');
goog.require('goog.ui.Dialog');
goog.require('goog.ui.ColorButton');
treklet.avatar.enyo = enyo;
treklet.avatar.onyx = onyx;

/**
* @constructor
* @param {*} username
* @param {*} balloon_bg_color
* @param {*} balloon_text_color
* @param {*} name_bg_color
* @param {*} name_text_color
* @param {*} guid
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
treklet.avatar.Avatar = (function (username,balloon_bg_color,balloon_text_color,name_bg_color,name_text_color,guid,__meta,__extmap){
this.username = username;
this.balloon_bg_color = balloon_bg_color;
this.balloon_text_color = balloon_text_color;
this.name_bg_color = name_bg_color;
this.name_text_color = name_text_color;
this.guid = guid;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 619054858;
if(arguments.length>6){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
treklet.avatar.Avatar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2346__auto__){
var this__33386 = this;
var h__2220__auto____33387 = this__33386.__hash;
if(!((h__2220__auto____33387 == null)))
{return h__2220__auto____33387;
} else
{var h__2220__auto____33388 = cljs.core.hash_imap(this__2346__auto__);
this__33386.__hash = h__2220__auto____33388;
return h__2220__auto____33388;
}
});
treklet.avatar.Avatar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2351__auto__,k__2352__auto__){
var this__33389 = this;
return this__2351__auto__.cljs$core$ILookup$_lookup$arity$3(this__2351__auto__,k__2352__auto__,null);
});
treklet.avatar.Avatar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2353__auto__,k33384,else__2354__auto__){
var this__33390 = this;
if((k33384 === "\uFDD0'username"))
{return this__33390.username;
} else
{if((k33384 === "\uFDD0'balloon-bg-color"))
{return this__33390.balloon_bg_color;
} else
{if((k33384 === "\uFDD0'balloon-text-color"))
{return this__33390.balloon_text_color;
} else
{if((k33384 === "\uFDD0'name-bg-color"))
{return this__33390.name_bg_color;
} else
{if((k33384 === "\uFDD0'name-text-color"))
{return this__33390.name_text_color;
} else
{if((k33384 === "\uFDD0'guid"))
{return this__33390.guid;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.cljs$lang$arity$3(this__33390.__extmap,k33384,else__2354__auto__);
} else
{return null;
}
}
}
}
}
}
}
});
treklet.avatar.Avatar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2358__auto__,k__2359__auto__,G__33383){
var this__33391 = this;
var pred__33392__33395 = cljs.core.identical_QMARK_;
var expr__33393__33396 = k__2359__auto__;
if((pred__33392__33395.cljs$lang$arity$2 ? pred__33392__33395.cljs$lang$arity$2("\uFDD0'username",expr__33393__33396) : pred__33392__33395.call(null,"\uFDD0'username",expr__33393__33396)))
{return (new treklet.avatar.Avatar(G__33383,this__33391.balloon_bg_color,this__33391.balloon_text_color,this__33391.name_bg_color,this__33391.name_text_color,this__33391.guid,this__33391.__meta,this__33391.__extmap,null));
} else
{if((pred__33392__33395.cljs$lang$arity$2 ? pred__33392__33395.cljs$lang$arity$2("\uFDD0'balloon-bg-color",expr__33393__33396) : pred__33392__33395.call(null,"\uFDD0'balloon-bg-color",expr__33393__33396)))
{return (new treklet.avatar.Avatar(this__33391.username,G__33383,this__33391.balloon_text_color,this__33391.name_bg_color,this__33391.name_text_color,this__33391.guid,this__33391.__meta,this__33391.__extmap,null));
} else
{if((pred__33392__33395.cljs$lang$arity$2 ? pred__33392__33395.cljs$lang$arity$2("\uFDD0'balloon-text-color",expr__33393__33396) : pred__33392__33395.call(null,"\uFDD0'balloon-text-color",expr__33393__33396)))
{return (new treklet.avatar.Avatar(this__33391.username,this__33391.balloon_bg_color,G__33383,this__33391.name_bg_color,this__33391.name_text_color,this__33391.guid,this__33391.__meta,this__33391.__extmap,null));
} else
{if((pred__33392__33395.cljs$lang$arity$2 ? pred__33392__33395.cljs$lang$arity$2("\uFDD0'name-bg-color",expr__33393__33396) : pred__33392__33395.call(null,"\uFDD0'name-bg-color",expr__33393__33396)))
{return (new treklet.avatar.Avatar(this__33391.username,this__33391.balloon_bg_color,this__33391.balloon_text_color,G__33383,this__33391.name_text_color,this__33391.guid,this__33391.__meta,this__33391.__extmap,null));
} else
{if((pred__33392__33395.cljs$lang$arity$2 ? pred__33392__33395.cljs$lang$arity$2("\uFDD0'name-text-color",expr__33393__33396) : pred__33392__33395.call(null,"\uFDD0'name-text-color",expr__33393__33396)))
{return (new treklet.avatar.Avatar(this__33391.username,this__33391.balloon_bg_color,this__33391.balloon_text_color,this__33391.name_bg_color,G__33383,this__33391.guid,this__33391.__meta,this__33391.__extmap,null));
} else
{if((pred__33392__33395.cljs$lang$arity$2 ? pred__33392__33395.cljs$lang$arity$2("\uFDD0'guid",expr__33393__33396) : pred__33392__33395.call(null,"\uFDD0'guid",expr__33393__33396)))
{return (new treklet.avatar.Avatar(this__33391.username,this__33391.balloon_bg_color,this__33391.balloon_text_color,this__33391.name_bg_color,this__33391.name_text_color,G__33383,this__33391.__meta,this__33391.__extmap,null));
} else
{return (new treklet.avatar.Avatar(this__33391.username,this__33391.balloon_bg_color,this__33391.balloon_text_color,this__33391.name_bg_color,this__33391.name_text_color,this__33391.guid,this__33391.__meta,cljs.core.assoc.cljs$lang$arity$3(this__33391.__extmap,k__2359__auto__,G__33383),null));
}
}
}
}
}
}
});
treklet.avatar.Avatar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2356__auto__,entry__2357__auto__){
var this__33397 = this;
if(cljs.core.vector_QMARK_(entry__2357__auto__))
{return this__2356__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2356__auto__,cljs.core._nth.cljs$lang$arity$2(entry__2357__auto__,0),cljs.core._nth.cljs$lang$arity$2(entry__2357__auto__,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,this__2356__auto__,entry__2357__auto__);
}
});
treklet.avatar.Avatar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2363__auto__){
var this__33398 = this;
return cljs.core.seq(cljs.core.concat.cljs$lang$arity$2(cljs.core.PersistentVector.fromArray([cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq(["\uFDD0'username",this__33398.username], 0)),cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq(["\uFDD0'balloon-bg-color",this__33398.balloon_bg_color], 0)),cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq(["\uFDD0'balloon-text-color",this__33398.balloon_text_color], 0)),cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq(["\uFDD0'name-bg-color",this__33398.name_bg_color], 0)),cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq(["\uFDD0'name-text-color",this__33398.name_text_color], 0)),cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq(["\uFDD0'guid",this__33398.guid], 0))], true),this__33398.__extmap));
});
treklet.avatar.Avatar.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2365__auto__,opts__2366__auto__){
var this__33399 = this;
var pr_pair__2367__auto____33400 = (function (keyval__2368__auto__){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts__2366__auto__,keyval__2368__auto__);
});
return cljs.core.pr_sequential(pr_pair__2367__auto____33400,[cljs.core.str("#"),cljs.core.str("Avatar"),cljs.core.str("{")].join(''),", ","}",opts__2366__auto__,cljs.core.concat.cljs$lang$arity$2(cljs.core.PersistentVector.fromArray([cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq(["\uFDD0'username",this__33399.username], 0)),cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq(["\uFDD0'balloon-bg-color",this__33399.balloon_bg_color], 0)),cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq(["\uFDD0'balloon-text-color",this__33399.balloon_text_color], 0)),cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq(["\uFDD0'name-bg-color",this__33399.name_bg_color], 0)),cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq(["\uFDD0'name-text-color",this__33399.name_text_color], 0)),cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq(["\uFDD0'guid",this__33399.guid], 0))], true),this__33399.__extmap));
});
treklet.avatar.Avatar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2355__auto__){
var this__33401 = this;
return (6 + cljs.core.count(this__33401.__extmap));
});
treklet.avatar.Avatar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2347__auto__,other__2348__auto__){
var this__33402 = this;
if(cljs.core.truth_((function (){var and__3822__auto____33403 = other__2348__auto__;
if(cljs.core.truth_(and__3822__auto____33403))
{var and__3822__auto____33404 = (this__2347__auto__.constructor === other__2348__auto__.constructor);
if(and__3822__auto____33404)
{return cljs.core.equiv_map(this__2347__auto__,other__2348__auto__);
} else
{return and__3822__auto____33404;
}
} else
{return and__3822__auto____33403;
}
})()))
{return true;
} else
{return false;
}
});
treklet.avatar.Avatar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2350__auto__,G__33383){
var this__33405 = this;
return (new treklet.avatar.Avatar(this__33405.username,this__33405.balloon_bg_color,this__33405.balloon_text_color,this__33405.name_bg_color,this__33405.name_text_color,this__33405.guid,G__33383,this__33405.__extmap,this__33405.__hash));
});
treklet.avatar.Avatar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2349__auto__){
var this__33406 = this;
return this__33406.__meta;
});
treklet.avatar.Avatar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2360__auto__,k__2361__auto__){
var this__33407 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.fromArray(["\uFDD0'name-bg-color","\uFDD0'name-text-color","\uFDD0'guid","\uFDD0'username","\uFDD0'balloon-bg-color","\uFDD0'balloon-text-color"]),k__2361__auto__))
{return cljs.core.dissoc.cljs$lang$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.ObjMap.EMPTY,this__2360__auto__),this__33407.__meta),k__2361__auto__);
} else
{return (new treklet.avatar.Avatar(this__33407.username,this__33407.balloon_bg_color,this__33407.balloon_text_color,this__33407.name_bg_color,this__33407.name_text_color,this__33407.guid,this__33407.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$lang$arity$2(this__33407.__extmap,k__2361__auto__)),null));
}
});
treklet.avatar.Avatar.cljs$lang$type = true;
treklet.avatar.Avatar.cljs$lang$ctorPrSeq = (function (this__2385__auto__){
return cljs.core.list.cljs$lang$arity$1("treklet.avatar/Avatar");
});
treklet.avatar.__GT_Avatar = (function __GT_Avatar(username,balloon_bg_color,balloon_text_color,name_bg_color,name_text_color,guid){
return (new treklet.avatar.Avatar(username,balloon_bg_color,balloon_text_color,name_bg_color,name_text_color,guid));
});
treklet.avatar.map__GT_Avatar = (function map__GT_Avatar(G__33385){
return (new treklet.avatar.Avatar((new cljs.core.Keyword("\uFDD0'username")).call(null,G__33385),(new cljs.core.Keyword("\uFDD0'balloon-bg-color")).call(null,G__33385),(new cljs.core.Keyword("\uFDD0'balloon-text-color")).call(null,G__33385),(new cljs.core.Keyword("\uFDD0'name-bg-color")).call(null,G__33385),(new cljs.core.Keyword("\uFDD0'name-text-color")).call(null,G__33385),(new cljs.core.Keyword("\uFDD0'guid")).call(null,G__33385),null,cljs.core.dissoc.cljs$lang$arity$variadic(G__33385,"\uFDD0'username",cljs.core.array_seq(["\uFDD0'balloon-bg-color","\uFDD0'balloon-text-color","\uFDD0'name-bg-color","\uFDD0'name-text-color","\uFDD0'guid"], 0))));
});
treklet.avatar.Avatar;
treklet.avatar._uuid_ = cljs.core.atom.cljs$lang$arity$1(null);
treklet.avatar._local_avatar_ = cljs.core.atom.cljs$lang$arity$1(null);
treklet.events.slot_avatar_changed((function (avatar){
treklet.util.atom_set_BANG_(treklet.avatar._local_avatar_,avatar);
return treklet.util.atom_set_BANG_(treklet.avatar._uuid_,(avatar.cljs$lang$arity$1 ? avatar.cljs$lang$arity$1("\uFDD0'uuid") : avatar.call(null,"\uFDD0'uuid")));
}));
treklet.avatar._STAR_avatar_pane_STAR_ = goog.dom.htmlToDocumentFragment("<div id='treklet-avatar-pane'></div>");
treklet.avatar.dom_append = (function dom_append(html_fragment){
var elem__33409 = goog.dom.htmlToDocumentFragment(html_fragment);
goog.dom.append(document.body,elem__33409);
return elem__33409;
});
treklet.avatar.make_avatar = (function make_avatar(username,balloon_bg_color,balloon_text_color,name_bg_color,name_text_color){
return cljs.core.ObjMap.fromObject(["\uFDD0'username","\uFDD0'balloon-bg-color","\uFDD0'balloon-text-color","\uFDD0'name-bg-color","\uFDD0'name-text-color"],{"\uFDD0'username":username,"\uFDD0'balloon-bg-color":balloon_bg_color,"\uFDD0'balloon-text-color":balloon_text_color,"\uFDD0'name-bg-color":name_bg_color,"\uFDD0'name-text-color":name_text_color});
});
treklet.avatar.dom_add_avatar_pane = (function dom_add_avatar_pane(){
return goog.dom.append(goog.dom.getElement("treklet-root"),treklet.avatar._STAR_avatar_pane_STAR_);
});
treklet.avatar.tmpl_make_avatar = (function tmpl_make_avatar(uuid,username,img_src){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.ObjMap.fromObject(["id","class","\uFDD0'id","\uFDD0'class"],{"id":[cljs.core.str("treklet-avatar-"),cljs.core.str(uuid)].join(''),"class":"avatar","\uFDD0'id":null,"\uFDD0'class":null}))),cljs.core.str(">"),cljs.core.str("<"),cljs.core.str("img"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.ObjMap.fromObject(["onerror","src","\uFDD0'id","\uFDD0'class"],{"onerror":[cljs.core.str("this.src="),cljs.core.str("'"),cljs.core.str(treklet.constants._image_dir_),cljs.core.str("anon.png"),cljs.core.str("'")].join(''),"src":img_src,"\uFDD0'id":null,"\uFDD0'class":null}))),cljs.core.str(" />"),cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.ObjMap.fromObject(["id","class","\uFDD0'id","\uFDD0'class"],{"id":[cljs.core.str("treklet-avatar-balloon-"),cljs.core.str(username)].join(''),"class":"avatar-balloon","\uFDD0'id":null,"\uFDD0'class":null}))),cljs.core.str(">"),cljs.core.str("Now is the time for all good men to come to the aid of their country."),cljs.core.str("</div>"),cljs.core.str((function (){var attrs33412__33413 = username;
if(cljs.core.map_QMARK_(attrs33412__33413))
{return [cljs.core.str("<span"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":"avatar-name"}),attrs33412__33413], 0)))),cljs.core.str(">"),cljs.core.str("</span>")].join('');
} else
{return [cljs.core.str("<span class=\"avatar-name\">"),cljs.core.str(hiccups.runtime.render_html(attrs33412__33413)),cljs.core.str("</span>")].join('');
}
})()),cljs.core.str("</div>")].join('');
});
treklet.avatar.tmpl_make_avatar_design = (function tmpl_make_avatar_design(username){
return [cljs.core.str("<div"),cljs.core.str(" class=\"avatarDesignDialog\""),cljs.core.str(">"),cljs.core.str("<form"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.ObjMap.fromObject(["action","method","enctype","\uFDD0'id","\uFDD0'class"],{"action":[cljs.core.str(treklet.constants._file_addr_),cljs.core.str("avatar-upload")].join(''),"method":"POST","enctype":"multipart/form-data","\uFDD0'id":null,"\uFDD0'class":null}))),cljs.core.str(">"),cljs.core.str("<div"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("Username:"),cljs.core.str("<br />"),cljs.core.str("<"),cljs.core.str("input"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.ObjMap.fromObject(["value","type","name","\uFDD0'id","\uFDD0'class"],{"value":username,"type":"text","name":"username","\uFDD0'id":null,"\uFDD0'class":"username"}))),cljs.core.str(" />"),cljs.core.str("</div>"),cljs.core.str("<div>Image:<br /><input name=\"avatarimage\" type=\"file\" /></div>"),cljs.core.str("</form>"),cljs.core.str("<div class=\"button name-bg-color\"></div>"),cljs.core.str("<div class=\"button name-text-color\"></div>"),cljs.core.str("<div class=\"button balloon-bg-color\"></div>"),cljs.core.str("<div class=\"button balloon-text-color\"></div>"),cljs.core.str("<div class=\"preview\" style=\"float:right\"></div>"),cljs.core.str("</div>")].join('');
});
treklet.avatar.tmpl_make_locale_notice = (function tmpl_make_locale_notice(username,new_locale){
return [cljs.core.str((function (){var attrs33448__33453 = [cljs.core.str(username),cljs.core.str(" is now at ")].join('');
if(cljs.core.map_QMARK_(attrs33448__33453))
{return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":"locale-changed-notice"}),attrs33448__33453], 0)))),cljs.core.str(">"),cljs.core.str("<br />"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'class"],{"\uFDD0'href":new_locale,"\uFDD0'id":null,"\uFDD0'class":null}))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html(treklet.util.ellipsize(new_locale,"64"))),cljs.core.str("</a>"),cljs.core.str("</div>")].join('');
} else
{return [cljs.core.str("<div class=\"locale-changed-notice\">"),cljs.core.str(hiccups.runtime.render_html(attrs33448__33453)),cljs.core.str("<br />"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'class"],{"\uFDD0'href":new_locale,"\uFDD0'id":null,"\uFDD0'class":null}))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html(treklet.util.ellipsize(new_locale,"64"))),cljs.core.str("</a>"),cljs.core.str("</div>")].join('');
}
})())].join('');
});
treklet.avatar.dom_avatar_elem = (function dom_avatar_elem(username){
return goog.dom.getElement([cljs.core.str("treklet-avatar-"),cljs.core.str(username)].join(''));
});
treklet.avatar.dom_balloon_elem = (function dom_balloon_elem(avatar_elem){
if(cljs.core.string_QMARK_(avatar_elem))
{return dom_balloon_elem(treklet.avatar.dom_avatar_elem(avatar_elem));
} else
{return goog.dom.getElementByClass("avatar-balloon",avatar_elem);
}
});
treklet.avatar.dom_img_elem = (function dom_img_elem(avatar_elem){
return cljs.core.first(goog.array.toArray(goog.dom.getElementsByTagNameAndClass("img",null,avatar_elem)));
});
treklet.avatar.dom_name_elem = (function dom_name_elem(avatar_elem){
if(cljs.core.string_QMARK_(avatar_elem))
{return dom_name_elem(treklet.avatar.dom_avatar_elem(avatar_elem));
} else
{return cljs.core.first(goog.array.toArray(goog.dom.getElementsByTagNameAndClass("span",null,avatar_elem)));
}
});
treklet.avatar.get_uuids = (function get_uuids(){
return cljs.core.map.cljs$lang$arity$2((function (p1__33454_SHARP_){
return p1__33454_SHARP_.id.replace("treklet-avatar-","");
}),goog.array.toArray(goog.dom.getElementsByClass("avatar")));
});
treklet.avatar.username_for_uuid = (function username_for_uuid(uuid){
return goog.dom.getTextContent(treklet.avatar.dom_name_elem(treklet.avatar.dom_avatar_elem(uuid)));
});
treklet.avatar.uuid_for_username = (function uuid_for_username(username){
return cljs.core.first(cljs.core.filter((function (p1__33455_SHARP_){
return cljs.core._EQ_.cljs$lang$arity$2(treklet.avatar.username_for_uuid(p1__33455_SHARP_),username);
}),treklet.avatar.get_uuids()));
});
treklet.avatar.dom_hide_avatars = (function dom_hide_avatars(){
goog.dom.classes.remove(treklet.avatar._STAR_avatar_pane_STAR_,"anim-show");
goog.dom.classes.add(treklet.avatar._STAR_avatar_pane_STAR_,"anim-hide");
return setTimeout((function (){
return goog.style.setOpacity(treklet.avatar._STAR_avatar_pane_STAR_,0);
}),250);
});
treklet.avatar.dom_show_avatars = (function dom_show_avatars(){
goog.dom.classes.remove(treklet.avatar._STAR_avatar_pane_STAR_,"anim-hide");
goog.dom.classes.add(treklet.avatar._STAR_avatar_pane_STAR_,"anim-show");
return setTimeout((function (){
return goog.style.setOpacity(treklet.avatar._STAR_avatar_pane_STAR_,1);
}),250);
});
treklet.avatar.toggle_avatars_visibility = (function (){
var call_cnt__33456 = cljs.core.atom.cljs$lang$arity$1(0);
return (function (){
cljs.core.swap_BANG_.cljs$lang$arity$2(call_cnt__33456,cljs.core.inc);
if(cljs.core._EQ_.cljs$lang$arity$2((cljs.core.deref(call_cnt__33456) % 2),0))
{return treklet.avatar.dom_show_avatars();
} else
{return treklet.avatar.dom_hide_avatars();
}
});
}).call(null);
treklet.avatar.dom_locale_notice = (function dom_locale_notice(username,new_locale,x,y){
var notice__33458 = treklet.avatar.dom_append(treklet.avatar.tmpl_make_locale_notice(username,new_locale));
treklet.util.position_center(notice__33458,x,y);
goog.dom.classes.add(notice__33458,"anim-notify");
return setTimeout((function (){
goog.style.setOpacity(notice__33458,0);
return setTimeout((function (){
return goog.dom.removeNode(notice__33458);
}),500);
}),5000);
});
treklet.avatar.dom_append_avatar = (function dom_append_avatar(avatar){
var uuid__33464 = (avatar.cljs$lang$arity$1 ? avatar.cljs$lang$arity$1("\uFDD0'uuid") : avatar.call(null,"\uFDD0'uuid"));
var username__33465 = (avatar.cljs$lang$arity$1 ? avatar.cljs$lang$arity$1("\uFDD0'username") : avatar.call(null,"\uFDD0'username"));
var img__33466 = [cljs.core.str(treklet.constants._file_addr_),cljs.core.str("images/"),cljs.core.str(uuid__33464),cljs.core.str(".png")].join('');
var avatar__33467 = goog.dom.htmlToDocumentFragment(treklet.avatar.tmpl_make_avatar(uuid__33464,username__33465,img__33466));
var balloon__33468 = goog.dom.getElementByClass("avatar-balloon",avatar__33467);
goog.style.setStyle(balloon__33468,"display","none");
return goog.dom.append(document.body,avatar__33467);
});
treklet.avatar.avatar_speak = (function avatar_speak(username,phrase){
treklet.events.signal_avatar_spoke.cljs$lang$arity$variadic(cljs.core.array_seq([username,phrase], 0));
if(cljs.core.not_EQ_.cljs$lang$arity$2(phrase.indexOf("~/"),0))
{var balloon__33470 = treklet.avatar.dom_balloon_elem(username);
balloon__33470.textContent = phrase;
goog.style.setOpacity(balloon__33470,1);
goog.dom.classes.remove(balloon__33470,"anim-wither");
goog.dom.classes.add(balloon__33470,"anim-pop");
goog.style.setStyle(balloon__33470,"display","block");
return setTimeout((function (){
goog.style.setOpacity(balloon__33470,0);
goog.dom.classes.add(balloon__33470,"anim-wither");
goog.dom.classes.remove(balloon__33470,"anim-pop");
return setTimeout((function (){
return goog.style.setStyle(balloon__33470,"display","none");
}),1000);
}),10000);
} else
{return null;
}
});
treklet.avatar.avatar_move = (function avatar_move(username,x,y){
var avatar__33475 = treklet.avatar.dom_avatar_elem(username);
var size__33476 = goog.style.getSize(avatar__33475);
var x_pos__33477 = (x - (size__33476.width / 2));
var y_pos__33478 = (y - (size__33476.height / 2));
treklet.events.signal_user_repositioned.cljs$lang$arity$variadic(cljs.core.array_seq([username,x,y], 0));
return goog.style.setPosition(avatar__33475,x_pos__33477,y_pos__33478);
});
treklet.avatar.get_position = (function get_position(username){
var pos__33480 = goog.style.getPosition(treklet.avatar.dom_avatar_elem(username));
return cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":pos__33480.x(),"\uFDD0'y":pos__33480.y()});
});
treklet.avatar.remove_avatar = (function() {
var remove_avatar = null;
var remove_avatar__1 = (function (username){
return remove_avatar.cljs$lang$arity$2(username,null);
});
var remove_avatar__2 = (function (username,callback){
var avatar__33482 = treklet.avatar.dom_avatar_elem(username);
goog.dom.classes.add(avatar__33482,"anim-exit");
return setTimeout((function (){
goog.style.setOpacity(avatar__33482,0);
goog.dom.removeNode(avatar__33482);
if(cljs.core.truth_(callback))
{return (callback.cljs$lang$arity$0 ? callback.cljs$lang$arity$0() : callback.call(null));
} else
{return null;
}
}),270);
});
remove_avatar = function(username,callback){
switch(arguments.length){
case 1:
return remove_avatar__1.call(this,username);
case 2:
return remove_avatar__2.call(this,username,callback);
}
throw('Invalid arity: ' + arguments.length);
};
remove_avatar.cljs$lang$arity$1 = remove_avatar__1;
remove_avatar.cljs$lang$arity$2 = remove_avatar__2;
return remove_avatar;
})()
;
treklet.avatar.dom_prepare_avatar = (function dom_prepare_avatar(avatar){
var avatar_elem__33490 = treklet.avatar.dom_avatar_elem((avatar.cljs$lang$arity$1 ? avatar.cljs$lang$arity$1("\uFDD0'uuid") : avatar.call(null,"\uFDD0'uuid")));
var av_img__33491 = treklet.avatar.dom_img_elem(avatar_elem__33490);
var av_balloon__33492 = treklet.avatar.dom_balloon_elem(avatar_elem__33490);
var av_username__33493 = treklet.avatar.dom_name_elem(avatar_elem__33490);
var img_size__33494 = goog.style.getSize(av_img__33491);
var img_offset__33495 = goog.style.getPosition(av_img__33491);
var add_offset__33496 = 7;
goog.style.setPosition(av_balloon__33492,((img_offset__33495.x + img_size__33494.width) + add_offset__33496));
goog.style.setStyle(av_balloon__33492,"background-color",(avatar.cljs$lang$arity$1 ? avatar.cljs$lang$arity$1("\uFDD0'balloon-bg-color") : avatar.call(null,"\uFDD0'balloon-bg-color")));
goog.style.setStyle(av_balloon__33492,"color",(avatar.cljs$lang$arity$1 ? avatar.cljs$lang$arity$1("\uFDD0'balloon-text-color") : avatar.call(null,"\uFDD0'balloon-text-color")));
goog.style.setStyle(av_username__33493,"background-color",(avatar.cljs$lang$arity$1 ? avatar.cljs$lang$arity$1("\uFDD0'name-bg-color") : avatar.call(null,"\uFDD0'name-bg-color")));
goog.style.setStyle(av_username__33493,"color",(avatar.cljs$lang$arity$1 ? avatar.cljs$lang$arity$1("\uFDD0'name-text-color") : avatar.call(null,"\uFDD0'name-text-color")));
goog.dom.setTextContent(av_username__33493,(avatar.cljs$lang$arity$1 ? avatar.cljs$lang$arity$1("\uFDD0'username") : avatar.call(null,"\uFDD0'username")));
goog.dom.classes.add(avatar_elem__33490,"anim-entrance");
goog.style.setStyle(avatar_elem__33490,"z-index","16000000");
return setTimeout((function (){
return goog.style.setStyle(avatar_elem__33490,"z-index","auto");
}),520);
});
treklet.avatar.add_avatar = (function add_avatar(avatar){
treklet.avatar.dom_append_avatar(avatar);
return treklet.avatar.dom_prepare_avatar(avatar);
});
treklet.avatar.update_user_avatar = (function update_user_avatar(avatar){
return treklet.avatar.remove_avatar.cljs$lang$arity$2((avatar.cljs$lang$arity$1 ? avatar.cljs$lang$arity$1("\uFDD0'uuid") : avatar.call(null,"\uFDD0'uuid")),(function (){
treklet.avatar.add_avatar(avatar);
return treklet.events.signal_avatar_changed.cljs$lang$arity$variadic(cljs.core.array_seq([avatar], 0));
}));
});
