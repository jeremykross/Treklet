goog.provide('treklet.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.style');
treklet.util.append_html_frag = (function append_html_frag(html_fragment){
var elem__7005 = goog.dom.htmlToDocumentFragment(html_fragment);
goog.dom.append(document.body,elem__7005);
return elem__7005;
});
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
treklet.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.reduce.call(null,(function (m,p__7012){
var vec__7013__7014 = p__7012;
var k__7015 = cljs.core.nth.call(null,vec__7013__7014,0,null);
var v__7016 = cljs.core.nth.call(null,vec__7013__7014,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__7015),clj__GT_js.call(null,v__7016));
}),cljs.core.ObjMap.EMPTY,x).strobj;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if("\uFDD0'else")
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
return cljs.core.remove.call(null,(function (p1__7006_SHARP_){
return (p1__7006_SHARP_ === an_object);
}),a_seq);
});
treklet.util.atom_set_BANG_ = (function atom_set_BANG_(the_atom,value){
return cljs.core.compare_and_set_BANG_.call(null,the_atom,cljs.core.deref.call(null,the_atom),value);
});
treklet.util.position_center = (function position_center(element,x,y){
var size__7020 = goog.style.getSize(element);
var half_width__7021 = (size__7020.width / 2);
var half_height__7022 = (size__7020.height / 2);
return goog.style.setPosition(element,(x - half_width__7021),(y - half_height__7022));
});
treklet.util.ellipsize = (function ellipsize(string,size){
if((string.length > size))
{return [cljs.core.str(string.slice(0,size)),cljs.core.str("...")].join('');
} else
{return string;
}
});
treklet.util.capitalize = (function capitalize(string){
return [cljs.core.str(string.charAt(0).toUpperCase()),cljs.core.str(string.slice(1))].join('');
});
treklet.util.starts_with = (function starts_with(string,substr){
return (string.indexOf(substr) === 0);
});
treklet.util.make_counter = (function() {
var make_counter = null;
var make_counter__0 = (function (){
return make_counter.call(null,0);
});
var make_counter__1 = (function (initial_value){
var counts__7024 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() {
var cnter = null;
var cnter__1 = (function (id){
return cljs.core.deref.call(null,counts__7024).call(null,id);
});
var cnter__2 = (function (modifier,id){
return cnter.call(null,modifier,id,1);
});
var cnter__3 = (function() { 
var G__7025__delegate = function (modifier,id,args){
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,counts__7024),id)))
{cljs.core.swap_BANG_.call(null,counts__7024,cljs.core.assoc,id,initial_value);
} else
{}
cljs.core.swap_BANG_.call(null,counts__7024,cljs.core.assoc,id,cljs.core.apply.call(null,modifier,cljs.core.deref.call(null,counts__7024).call(null,id),args));
return cljs.core.deref.call(null,counts__7024).call(null,id);
};
var G__7025 = function (modifier,id,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7025__delegate.call(this, modifier, id, args);
};
G__7025.cljs$lang$maxFixedArity = 2;
G__7025.cljs$lang$applyTo = (function (arglist__7026){
var modifier = cljs.core.first(arglist__7026);
var id = cljs.core.first(cljs.core.next(arglist__7026));
var args = cljs.core.rest(cljs.core.next(arglist__7026));
return G__7025__delegate(modifier, id, args);
});
G__7025.cljs$lang$arity$variadic = G__7025__delegate;
return G__7025;
})()
;
cnter = function(modifier,id,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return cnter__1.call(this,modifier);
case 2:
return cnter__2.call(this,modifier,id);
default:
return cnter__3.cljs$lang$arity$variadic(modifier,id, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
cnter.cljs$lang$maxFixedArity = 2;
cnter.cljs$lang$applyTo = cnter__3.cljs$lang$applyTo;
cnter.cljs$lang$arity$1 = cnter__1;
cnter.cljs$lang$arity$2 = cnter__2;
cnter.cljs$lang$arity$variadic = cnter__3.cljs$lang$arity$variadic;
return cnter;
})()
});
make_counter = function(initial_value){
switch(arguments.length){
case 0:
return make_counter__0.call(this);
case 1:
return make_counter__1.call(this,initial_value);
}
throw('Invalid arity: ' + arguments.length);
};
make_counter.cljs$lang$arity$0 = make_counter__0;
make_counter.cljs$lang$arity$1 = make_counter__1;
return make_counter;
})()
;
treklet.util.get_path = (function() {
var get_path = null;
var get_path__2 = (function (a_map,path){
return get_path.call(null,a_map,path,null);
});
var get_path__3 = (function (a_map,path,not_found){
var element__7032 = a_map;
var path__7033 = cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,path,/\./));
while(true){
var cur_key__7034 = cljs.core.first.call(null,path__7033);
var remaining__7035 = cljs.core.rest.call(null,path__7033);
var cur_elem__7036 = element__7032.call(null,cur_key__7034);
if((cljs.core.count.call(null,remaining__7035) === 0))
{return cur_elem__7036;
} else
{if(!(cljs.core.map_QMARK_.call(null,cur_elem__7036)))
{return not_found;
} else
{{
var G__7037 = cur_elem__7036;
var G__7038 = remaining__7035;
element__7032 = G__7037;
path__7033 = G__7038;
continue;
}
}
}
break;
}
});
get_path = function(a_map,path,not_found){
switch(arguments.length){
case 2:
return get_path__2.call(this,a_map,path);
case 3:
return get_path__3.call(this,a_map,path,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_path.cljs$lang$arity$2 = get_path__2;
get_path.cljs$lang$arity$3 = get_path__3;
return get_path;
})()
;
treklet.util.set_path = (function set_path(a_map,path,value){
var element__7047 = value;
var reverse_keys__7048 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\./));
while(true){
var cur_key__7049 = cljs.core.keyword.call(null,cljs.core.first.call(null,reverse_keys__7048));
var remaining__7050 = cljs.core.rest.call(null,reverse_keys__7048);
var path_to_remaining__7051 = clojure.string.join.call(null,".",cljs.core.reverse.call(null,remaining__7050));
var currently__7052 = treklet.util.get_path.call(null,a_map,path_to_remaining__7051);
var currently__7053 = ((cljs.core.associative_QMARK_.call(null,currently__7052))?currently__7052:cljs.core.ObjMap.EMPTY);
var cur_elem__7054 = cljs.core.assoc.call(null,currently__7053,cur_key__7049,element__7047);
if((cljs.core.count.call(null,remaining__7050) === 0))
{return cljs.core.merge.call(null,a_map,cur_elem__7054);
} else
{{
var G__7055 = cur_elem__7054;
var G__7056 = remaining__7050;
element__7047 = G__7055;
reverse_keys__7048 = G__7056;
continue;
}
}
break;
}
});
treklet.util.state_bind = (function state_bind(state,path,cb){
var binding_fn__7062 = (function (cb,state,old_val,new_val){
var old_val__7060 = treklet.util.get_path.call(null,old_val,path);
var new_val__7061 = treklet.util.get_path.call(null,new_val,path);
if(cljs.core.not_EQ_.call(null,old_val__7060,new_val__7061))
{return cb.call(null,old_val__7060,new_val__7061);
} else
{return null;
}
});
cljs.core.add_watch.call(null,state,cb,binding_fn__7062);
binding_fn__7062.call(null,cb,state,cljs.core.ObjMap.EMPTY,cljs.core.deref.call(null,state));
return cb;
});
treklet.util.bind_to = (function bind_to(state,path7064,path){
return null;
});
/**
* @param {...*} var_args
*/
treklet.util.dynamic_call = (function() { 
var dynamic_call__delegate = function (a_kind,method_name,args){
return (a_kind[method_name]).apply(a_kind,treklet.util.clj__GT_js.call(null,args));
};
var dynamic_call = function (a_kind,method_name,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return dynamic_call__delegate.call(this, a_kind, method_name, args);
};
dynamic_call.cljs$lang$maxFixedArity = 2;
dynamic_call.cljs$lang$applyTo = (function (arglist__7065){
var a_kind = cljs.core.first(arglist__7065);
var method_name = cljs.core.first(cljs.core.next(arglist__7065));
var args = cljs.core.rest(cljs.core.next(arglist__7065));
return dynamic_call__delegate(a_kind, method_name, args);
});
dynamic_call.cljs$lang$arity$variadic = dynamic_call__delegate;
return dynamic_call;
})()
;
/**
* @param {...*} var_args
*/
treklet.util.no_op = (function() { 
var no_op__delegate = function (args){
return null;
};
var no_op = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return no_op__delegate.call(this, args);
};
no_op.cljs$lang$maxFixedArity = 0;
no_op.cljs$lang$applyTo = (function (arglist__7066){
var args = cljs.core.seq(arglist__7066);;
return no_op__delegate(args);
});
no_op.cljs$lang$arity$variadic = no_op__delegate;
return no_op;
})()
;
treklet.util.index_of = (function index_of(a_seq,x){
return cljs.core.zipmap.call(null,a_seq,cljs.core.range.call(null,cljs.core.count.call(null,a_seq))).call(null,x);
});
