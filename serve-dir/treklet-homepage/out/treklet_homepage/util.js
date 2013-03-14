goog.provide('treklet.util');
goog.require('cljs.core');
goog.require('goog.style');
goog.require('goog.dom');
treklet.util.append_html_frag = (function append_html_frag(html_fragment){
var elem__25602 = goog.dom.htmlToDocumentFragment.call(null,html_fragment);

goog.dom.append.call(null,document.body,elem__25602);
return elem__25602;
});
cljs.core.js__GT_clj = (function js__GT_clj(x){
return js__GT_clj.call(null,x,"\uFDD0'keywordize-keys",true);
});
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
treklet.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.reduce.call(null,(function (m,p__25604){
var vec__25605__25606 = p__25604;
var k__25607 = cljs.core.nth.call(null,vec__25605__25606,0,null);
var v__25608 = cljs.core.nth.call(null,vec__25605__25606,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__25607),clj__GT_js.call(null,v__25608));
}),cljs.core.ObjMap.fromObject([],{}),x).strobj;
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});
treklet.util.identity_remove = (function identity_remove(a_seq,an_object){
return cljs.core.remove.call(null,(function (p1__25603_SHARP_){
return (p1__25603_SHARP_ === an_object);
}),a_seq);
});
treklet.util.atom_set_BANG_ = (function atom_set_BANG_(the_atom,value){
return cljs.core.compare_and_set_BANG_.call(null,the_atom,cljs.core.deref.call(null,the_atom),value);
});
treklet.util.position_center = (function position_center(element,x,y){
var size__25609 = goog.style.getSize.call(null,element);
var half_width__25610 = (size__25609.width / 2);
var half_height__25611 = (size__25609.height / 2);

return goog.style.setPosition.call(null,element,(x - half_width__25610),(y - half_height__25611));
});
treklet.util.ellipsize = (function ellipsize(string,size){
if(cljs.core.truth_((string.length > size)))
{return cljs.core.str.call(null,string.slice(0,size),"...");
} else
{return string;
}
});
treklet.util.capitalize = (function capitalize(string){
return cljs.core.str.call(null,string.charAt(0).toUpperCase(),string.slice(1));
});
treklet.util.str_contains = (function str_contains(string,substring){
return cljs.core.not_EQ_.call(null,string.indexOf(substring),-1);
});
treklet.util.make_counter = (function() {
var make_counter = null;
var make_counter__25613 = (function (){
return make_counter.call(null,0);
});
var make_counter__25614 = (function (initial_value){
var counts__25612 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() {
var cnter = null;
var cnter__25616 = (function (id){
return cljs.core.deref.call(null,counts__25612).call(null,id);
});
var cnter__25617 = (function (modifier,id){
return cnter.call(null,modifier,id,1);
});
var cnter__25618 = (function() { 
var G__25620__delegate = function (modifier,id,args){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,counts__25612),id))))
{cljs.core.swap_BANG_.call(null,counts__25612,cljs.core.assoc,id,initial_value);
} else
{}
cljs.core.swap_BANG_.call(null,counts__25612,cljs.core.assoc,id,cljs.core.apply.call(null,modifier,cljs.core.deref.call(null,counts__25612).call(null,id),args));
return cljs.core.deref.call(null,counts__25612).call(null,id);
};
var G__25620 = function (modifier,id,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25620__delegate.call(this, modifier, id, args);
};
G__25620.cljs$lang$maxFixedArity = 2;
G__25620.cljs$lang$applyTo = (function (arglist__25621){
var modifier = cljs.core.first(arglist__25621);
var id = cljs.core.first(cljs.core.next(arglist__25621));
var args = cljs.core.rest(cljs.core.next(arglist__25621));
return G__25620__delegate.call(this, modifier, id, args);
});
return G__25620;
})()
;
cnter = function(modifier,id,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return cnter__25616.call(this,modifier);
case  2 :
return cnter__25617.call(this,modifier,id);
default:
return cnter__25618.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
cnter.cljs$lang$maxFixedArity = 2;
cnter.cljs$lang$applyTo = cnter__25618.cljs$lang$applyTo;
return cnter;
})()
});
make_counter = function(initial_value){
switch(arguments.length){
case  0 :
return make_counter__25613.call(this);
case  1 :
return make_counter__25614.call(this,initial_value);
}
throw('Invalid arity: ' + arguments.length);
};
return make_counter;
})()
;
