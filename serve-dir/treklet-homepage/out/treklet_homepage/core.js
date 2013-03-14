goog.provide('treklet_homepage.core');
goog.require('cljs.core');
goog.require('treklet.util');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent');
goog.require('goog.dom.dataset');
goog.require('goog.dom.classes');
goog.require('goog.fx.dom');
goog.require('goog.style');
treklet_homepage.core._url_ = "http://174.143.169.193:8082";
treklet_homepage.core._text_ = cljs.core.PersistentVector.fromArray(["Welcome to Trek!",cljs.core.ObjMap.fromObject(["\uFDD0'pause"],{"\uFDD0'pause":100}),"Welcome to Treklet!"]);
treklet_homepage.core.px_to_int = (function px_to_int(px){
return parseInt.call(null,px.replace("px",""));
});
treklet_homepage.core.int_to_px = (function int_to_px(integer_list){
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p1__25622_SHARP_){
return cljs.core.str.call(null,p1__25622_SHARP_,"px");
}),integer_list));
});
treklet_homepage.core.scan_verb_lines = (function scan_verb_lines(){
var elem__25623 = goog.dom.getElement.call(null,"scanlines");
var bg_pos__25624 = treklet_homepage.core.px_to_int.call(null,cljs.core.second.call(null,clojure.string.split.call(null,goog.style.getStyle.call(null,elem__25623,"background-position")," ")));

return goog.style.setStyle.call(null,elem__25623,"background-position",treklet_homepage.core.int_to_px.call(null,cljs.core.PersistentVector.fromArray([0,(bg_pos__25624 - 19190)])));
});
treklet_homepage.core.decay = (function() {
var decay = null;
var decay__25629 = (function (elem){
return decay.call(null,elem,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":undefined,"\uFDD0'y":undefined}));
});
var decay__25630 = (function (elem,position){
var clone__25625 = elem.cloneNode(true);
var parent__25626 = elem.parentNode;
var fade__25627 = (new goog.fx.dom.FadeOutAndHide(clone__25625,1000));
var id__25628 = elem.getAttribute("id");

clone__25625.removeAttribute("id");
goog.dom.classes.add.call(null,clone__25625,"decay");
goog.style.setPosition.call(null,clone__25625,(position.call(null,"\uFDD0'x") - 5),position.call(null,"\uFDD0'y"));
goog.dom.append.call(null,parent__25626,clone__25625);
return fade__25627.play();
});
decay = function(elem,position){
switch(arguments.length){
case  1 :
return decay__25629.call(this,elem);
case  2 :
return decay__25630.call(this,elem,position);
}
throw('Invalid arity: ' + arguments.length);
};
return decay;
})()
;
treklet_homepage.core.advance = (function advance(){
var history__25632 = goog.dom.getElement.call(null,"history");
var current_line__25633 = goog.dom.getElement.call(null,"current-line");
var current_text__25634 = goog.dom.getFirstElementChild.call(null,current_line__25633).innerHTML;

treklet_homepage.core.decay.call(null,history__25632);
return goog.dom.insertSiblingBefore.call(null,goog.dom.createDom.call(null,"div",null,goog.dom.htmlToDocumentFragment.call(null,current_text__25634)),current_line__25633);
});
treklet_homepage.core.marker_left = (function marker_left(){
return goog.dom.getPageOffsetLeft.call(null,goog.dom.getElement.call(null,"marker"));
});
treklet_homepage.core.set_current_line = (function set_current_line(txt){
var line__25635 = goog.dom.getFirstElementChild.call(null,goog.dom.getElement.call(null,"current-line"));

goog.dom.removeChildren.call(null,line__25635);
return goog.dom.appendChild.call(null,line__25635,goog.dom.htmlToDocumentFragment.call(null,txt));
});
treklet_homepage.core.advance_line = (function advance_line(txt){
treklet_homepage.core.advance.call(null);
return treklet_homepage.core.set_current_line.call(null,txt);
});
treklet_homepage.core.type_at = (function() {
var type_at = null;
var type_at__25640 = (function (mesg){
return type_at.call(null,mesg,null);
});
var type_at__25641 = (function (mesg,cb){
return type_at.call(null,mesg,25,100,cb);
});
var type_at__25642 = (function (mesg,speed,cb){
return type_at.call(null,mesg,speed,100,cb);
});
var type_at__25643 = (function (mesg,speed,variance,cb){
var mesg__25636 = clojure.string.replace.call(null,mesg," "," ");
var update__25638 = (function me(i){
var i__25637 = (cljs.core.truth_(cljs.core._EQ_.call(null,mesg__25636.charAt(i),"<"))?((mesg__25636.substring(i).indexOf(">") + i) + 1):(cljs.core.truth_(cljs.core._EQ_.call(null,mesg__25636.charAt(i),"&"))?(i + 5):i));

treklet_homepage.core.set_current_line.call(null,mesg__25636.substring(0,i__25637));
if(cljs.core.truth_((i__25637 < mesg__25636.length)))
{return setTimeout.call(null,(function (){
return me.call(null,(i__25637 + 1));
}),(speed + cljs.core.rand_int.call(null,variance)));
} else
{if(cljs.core.truth_(cb))
{return cb.call(null);
} else
{return null;
}
}
});
var run__25639 = (function (){
treklet_homepage.core.advance.call(null);
return update__25638.call(null,0);
});

return run__25639;
});
type_at = function(mesg,speed,variance,cb){
switch(arguments.length){
case  1 :
return type_at__25640.call(this,mesg);
case  2 :
return type_at__25641.call(this,mesg,speed);
case  3 :
return type_at__25642.call(this,mesg,speed,variance);
case  4 :
return type_at__25643.call(this,mesg,speed,variance,cb);
}
throw('Invalid arity: ' + arguments.length);
};
return type_at;
})()
;
treklet_homepage.core.prompt_proper_browser = (function prompt_proper_browser(cb){
if(cljs.core.truth_(goog.userAgent.WEBKIT))
{return treklet_homepage.core.type_at.call(null,cljs.core.str.call(null,"1. Use it! To install in Chrome click <a href='",treklet_homepage.core._url_,"treklet.user.js'> here</a>."),cb);
} else
{if(cljs.core.truth_(goog.userAgent.GECKO))
{return treklet_homepage.core.type_at.call(null,"1. Use it! To install in Firefox get <a> Greasemonkey </a> and click here.",cb);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return treklet_homepage.core.type_at.call(null,"1. Please use Chrome or Firefox to install in your browser.");
} else
{return null;
}
}
}
});
treklet_homepage.core.onTrekletStarted = (function onTrekletStarted(){
return setTimeout.call(null,treklet_homepage.core.type_at.call(null,"Treklet is a new way to experience the web.",treklet_homepage.core.type_at.call(null,"It lets you meet and interact with users on the same web page as you.",treklet_homepage.core.type_at.call(null,"Every user is represented by a graphical avatar on the page.",treklet_homepage.core.type_at.call(null,"You can move your avatar simply by clicking, try that now.",(function (){
return treklet['events']['slot_user_repositioned'].call(null,(function me(username,x,y){
if(cljs.core.truth_(cljs.core._EQ_.call(null,username,treklet['core']['localUuid'].call(null))))
{treklet['events']['unslot_user_repositioned'].call(null,me);
return treklet_homepage.core.type_at.call(null,"You can chat by typing a message in the bar at the bottom, please do!",(function (){
return treklet['events']['slot_avatar_spoke'].call(null,(function me(username,phrase){
if(cljs.core.truth_(cljs.core._EQ_.call(null,username,treklet['core']['localUuid'].call(null))))
{treklet['events']['unslot_avatar_spoke'].call(null,me);
return treklet_homepage.core.type_at.call(null,cljs.core.str.call(null,"Well, ",phrase," to you too."),treklet_homepage.core.type_at.call(null,"You can double click your avatar to customize its appearance.",(function (){
return treklet['events']['slot_overlay_changed'].call(null,(function me(evt){
treklet['events']['unslot_overlay_changed'].call(null,me);
return treklet_homepage.core.type_at.call(null,"Please customize your avatar.",(function (){
return treklet['events']['slot_avatar_changed'].call(null,(function (avatar){
return treklet_homepage.core.type_at.call(null,"Hey, looks good.",treklet_homepage.core.type_at.call(null,"Treklet has a plugin system for developers.",treklet_homepage.core.type_at.call(null,cljs.core.str.call(null,"Please run our demo plugin (Pet-Fighter) by clicking here."),treklet_homepage.core.type_at.call(null,"Sorry, Plugins Coming Again Soon.",treklet_homepage.core.type_at.call(null,"Anyway, if you like what you see, there're lot of ways to help.",treklet_homepage.core.prompt_proper_browser.call(null,treklet_homepage.core.type_at.call(null,"2. Write some code? (git-hub)",treklet_homepage.core.type_at.call(null,"3. If so moved? (kickstarter)",treklet_homepage.core.type_at.call(null,"Programmed by Jeremy Kross",treklet_homepage.core.type_at.call(null,"Pet-Fighter sprites by Brett Kirschner")))))))))).call(null);
}));
})).call(null);
}));
}))).call(null);
} else
{return null;
}
}));
})).call(null);
} else
{return null;
}
}));
}))))),1000);
});
goog.exportSymbol("onTrekletStarted",treklet_homepage.core.onTrekletStarted);
treklet_homepage.core.main = (function main(){
var elem__25645 = goog.dom.getElement.call(null,"scanlines");

goog.style.setStyle.call(null,elem__25645,"background-position","0px 0px");
setInterval.call(null,treklet_homepage.core.scan_verb_lines,75);
return treklet_homepage.core.type_at.call(null,"Welcome to Treklet!",treklet_homepage.core.type_at.call(null,"Click <a href=\"javascript:(function() {function getScript(url,success) {var script=document.createElement('script');script.src=url;var head=document.getElementsByTagName('head')[0], done=false;script.onload=script.onreadystatechange = function(){if ( !done && (!this.readyState|| this.readyState == 'loaded'|| this.readyState == 'complete') ) {done=true;success();script.onload = script.onreadystatechange = null;head.removeChild(script);}};head.appendChild(script);}function getCSS(url) {var s = document.createElement('link');s.setAttribute('href', url);s.setAttribute('rel', 'stylesheet');s.setAttribute('type', 'text/css');document.getElementsByTagName('head')[0].appendChild(s);}getCSS('http://174.143.169.193:8082/css/treklet.css');getScript('http://174.143.169.193:8081/socket.io/socket.io.js', function() { getScript('http://174.143.169.193:8082/external.js', function() { getScript('http://174.143.169.193:8082/treklet.js', function() {});});});})();\">here</a> to start, okay?")).call(null);
});
goog.exportSymbol('treklet_homepage.core.main', treklet_homepage.core.main);
setTimeout.call(null,(function (){
return treklet_homepage.core.main.call(null);
}),1000);
