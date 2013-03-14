goog.provide('treklet.gui.enyo');
goog.require('cljs.core');
goog.require('goog.json');
goog.require('clojure.string');
goog.require('treklet.util');
treklet.gui.enyo.components_from = (function components_from(a_seq){
return cljs.core.map.call(null,(function (x){
return cljs.core.ObjMap.fromObject(["\uFDD0'content"],{"\uFDD0'content":[cljs.core.str(x)].join('')});
}),a_seq);
});
treklet.gui.enyo.onyx_picker = (function() {
var onyx_picker = null;
var onyx_picker__2 = (function (button,components){
return onyx_picker.call(null,cljs.core.ObjMap.EMPTY,button,components,cljs.core.ObjMap.EMPTY);
});
var onyx_picker__3 = (function (mixin,button,components){
return onyx_picker.call(null,mixin,button,components,cljs.core.ObjMap.EMPTY);
});
var onyx_picker__4 = (function (mixin,button,components,components_mixin){
return cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'components"],{"\uFDD0'kind":"onyx.PickerDecorator","\uFDD0'components":cljs.core.PersistentVector.fromArray([button,cljs.core.ObjMap.fromObject(["\uFDD0'kind","\uFDD0'components"],{"\uFDD0'kind":"onyx.Picker","\uFDD0'components":cljs.core.map.call(null,(function (p1__7578_SHARP_){
return cljs.core.merge.call(null,p1__7578_SHARP_,components_mixin);
}),components)})], true)}),mixin);
});
onyx_picker = function(mixin,button,components,components_mixin){
switch(arguments.length){
case 2:
return onyx_picker__2.call(this,mixin,button);
case 3:
return onyx_picker__3.call(this,mixin,button,components);
case 4:
return onyx_picker__4.call(this,mixin,button,components,components_mixin);
}
throw('Invalid arity: ' + arguments.length);
};
onyx_picker.cljs$lang$arity$2 = onyx_picker__2;
onyx_picker.cljs$lang$arity$3 = onyx_picker__3;
onyx_picker.cljs$lang$arity$4 = onyx_picker__4;
return onyx_picker;
})()
;
treklet.gui.enyo.camel_str = (function camel_str(before,property,after){
return [cljs.core.str(before),cljs.core.str((((cljs.core.count.call(null,before) > 0))?treklet.util.capitalize.call(null,property):property)),cljs.core.str(after)].join('');
});
treklet.gui.enyo.add_change_listener_method_name = (function add_change_listener_method_name(property){
return treklet.gui.enyo.camel_str.call(null,"add",property,"ChangeListener");
});
treklet.gui.enyo.remove_change_listener_method_name = (function remove_change_listener_method_name(property){
return treklet.gui.enyo.camel_str.call(null,"remove",property,"ChangeListener");
});
treklet.gui.enyo.on_changed_method_name = (function on_changed_method_name(property){
return treklet.gui.enyo.camel_str.call(null,"",property,"Changed");
});
treklet.gui.enyo.set_method_name = (function set_method_name(property){
return treklet.gui.enyo.camel_str.call(null,"set",property,"");
});
treklet.gui.enyo.make_subscribable_submap = (function make_subscribable_submap(property){
var change_listeners__7591 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,treklet.gui.enyo.add_change_listener_method_name.call(null,property)),cljs.core.keyword.call(null,treklet.gui.enyo.remove_change_listener_method_name.call(null,property)),cljs.core.keyword.call(null,treklet.gui.enyo.on_changed_method_name.call(null,property))],[(function (callback){
var self__7592 = this;
return cljs.core.swap_BANG_.call(null,change_listeners__7591,cljs.core.conj,callback);
}),(function (callback){
var self__7593 = this;
return cljs.core.swap_BANG_.call(null,change_listeners__7591,(function (p1__7580_SHARP_,p2__7579_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__7579_SHARP_]),p1__7580_SHARP_);
}),callback);
}),(function (changed_from){
var self__7594 = this;
var G__7595__7596 = cljs.core.seq.call(null,cljs.core.deref.call(null,change_listeners__7591));
if(G__7595__7596)
{var l__7597 = cljs.core.first.call(null,G__7595__7596);
var G__7595__7598 = G__7595__7596;
while(true){
l__7597.call(null,self__7594,property,changed_from,(self__7594[property]));
var temp__3974__auto____7599 = cljs.core.next.call(null,G__7595__7598);
if(temp__3974__auto____7599)
{var G__7595__7600 = temp__3974__auto____7599;
{
var G__7601 = cljs.core.first.call(null,G__7595__7600);
var G__7602 = G__7595__7600;
l__7597 = G__7601;
G__7595__7598 = G__7602;
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
})]);
});
treklet.gui.enyo.make_subscribable = (function make_subscribable(kind,property){
var change_listeners__7626 = treklet.gui.enyo.make_subscribable_submap.call(null,property);
var G__7627__7628 = cljs.core.seq.call(null,change_listeners__7626);
if(G__7627__7628)
{var G__7630__7632 = cljs.core.first.call(null,G__7627__7628);
var vec__7631__7633 = G__7630__7632;
var func_name__7634 = cljs.core.nth.call(null,vec__7631__7633,0,null);
var func__7635 = cljs.core.nth.call(null,vec__7631__7633,1,null);
var G__7627__7636 = G__7627__7628;
var G__7630__7637 = G__7630__7632;
var G__7627__7638 = G__7627__7636;
while(true){
var vec__7639__7640 = G__7630__7637;
var func_name__7641 = cljs.core.nth.call(null,vec__7639__7640,0,null);
var func__7642 = cljs.core.nth.call(null,vec__7639__7640,1,null);
var G__7627__7643 = G__7627__7638;
var func_name__7644 = cljs.core.name.call(null,func_name__7641);
var old_func__7645 = (kind[func_name__7644]);
(kind[func_name__7644] = ((function (G__7630__7637,G__7627__7638,func_name__7644,old_func__7645,vec__7639__7640,func_name__7641,func__7642,G__7627__7643){
return (function() { 
var G__7649__delegate = function (args){
var args__7646 = treklet.util.clj__GT_js.call(null,args);
if(cljs.core.truth_(old_func__7645))
{old_func__7645.apply(kind,args__7646);
} else
{}
return func__7642.apply(kind,args__7646);
};
var G__7649 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7649__delegate.call(this, args);
};
G__7649.cljs$lang$maxFixedArity = 0;
G__7649.cljs$lang$applyTo = (function (arglist__7650){
var args = cljs.core.seq(arglist__7650);;
return G__7649__delegate(args);
});
G__7649.cljs$lang$arity$variadic = G__7649__delegate;
return G__7649;
})()
;})(G__7630__7637,G__7627__7638,func_name__7644,old_func__7645,vec__7639__7640,func_name__7641,func__7642,G__7627__7643))
);
var temp__3974__auto____7647 = cljs.core.next.call(null,G__7627__7643);
if(temp__3974__auto____7647)
{var G__7627__7648 = temp__3974__auto____7647;
{
var G__7651 = cljs.core.first.call(null,G__7627__7648);
var G__7652 = G__7627__7648;
G__7630__7637 = G__7651;
G__7627__7638 = G__7652;
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
});
treklet.gui.enyo.add_subscribables = (function add_subscribables(a_map){
var subscribable__7658 = a_map.call(null,"\uFDD0'subscribable");
var published__7659 = a_map.call(null,"\uFDD0'published");
var kind__7660 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,a_map,"\uFDD0'published",cljs.core.merge.call(null,published__7659,subscribable__7658)),"\uFDD0'subscribable");
var kind__7661 = kind__7660;
var subscribable__7662 = cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,subscribable__7658));
while(true){
if((cljs.core.count.call(null,subscribable__7662) === 0))
{return treklet.util.clj__GT_js.call(null,kind__7661);
} else
{{
var G__7663 = cljs.core.merge.call(null,kind__7661,treklet.gui.enyo.make_subscribable_submap.call(null,cljs.core.first.call(null,subscribable__7662)));
var G__7664 = cljs.core.rest.call(null,subscribable__7662);
kind__7661 = G__7663;
subscribable__7662 = G__7664;
continue;
}
}
break;
}
});
treklet.gui.enyo.kind = (function kind(a_map){
return (enyo["kind"]).call(enyo,treklet.gui.enyo.add_subscribables.call(null,a_map));
});
treklet.gui.enyo.create = (function create(constructor,a_map){
return (new constructor(treklet.util.clj__GT_js.call(null,a_map)));
});
treklet.gui.enyo.create_component = (function create_component(a_map){
return treklet.gui.enyo.create.call(null,enyo.Component,a_map);
});
treklet.gui.enyo.create_control = (function create_control(a_map){
return treklet.gui.enyo.create.call(null,enyo.Control,a_map);
});
treklet.gui.enyo.bind_to = (function bind_to(kind0,property0,kind1,property1){
var bind__7666 = (function (k0,p0,k1,p1){
return treklet.util.dynamic_call.call(null,k0,treklet.gui.enyo.add_change_listener_method_name.call(null,p0),(function (kind,property,from,to){
return treklet.util.dynamic_call.call(null,k1,treklet.gui.enyo.set_method_name.call(null,p1),to);
}));
});
bind__7666.call(null,kind0,property0,kind1,property1);
return bind__7666.call(null,kind1,property1,kind0,property0);
});
/**
* @param {...*} var_args
*/
treklet.gui.enyo.bind_to_state = (function() {
var bind_to_state = null;
var bind_to_state__4 = (function (kind_instance,property,state,path){
return bind_to_state.call(null,kind_instance,property,state,path,"\uFDD0'l2r",cljs.core.identity,"\uFDD0'r2l",cljs.core.identity);
});
var bind_to_state__5 = (function() { 
var G__7669__delegate = function (kind_instance,property,state,path,others){
var transforms__7668 = cljs.core.apply.call(null,cljs.core.hash_map,others);
if(cljs.core.contains_QMARK_.call(null,transforms__7668,"\uFDD0'l2r"))
{treklet.util.dynamic_call.call(null,kind_instance,treklet.gui.enyo.add_change_listener_method_name.call(null,property),(function (kind,property,from,to){
return cljs.core.swap_BANG_.call(null,state,treklet.util.set_path,path,transforms__7668.call(null,"\uFDD0'l2r").call(null,to));
}));
} else
{}
if(cljs.core.contains_QMARK_.call(null,transforms__7668,"\uFDD0'r2l"))
{return treklet.util.state_bind.call(null,state,path,(function (from,to){
return treklet.util.dynamic_call.call(null,kind_instance,treklet.gui.enyo.set_method_name.call(null,property),transforms__7668.call(null,"\uFDD0'r2l").call(null,to));
}));
} else
{return null;
}
};
var G__7669 = function (kind_instance,property,state,path,var_args){
var others = null;
if (goog.isDef(var_args)) {
  others = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7669__delegate.call(this, kind_instance, property, state, path, others);
};
G__7669.cljs$lang$maxFixedArity = 4;
G__7669.cljs$lang$applyTo = (function (arglist__7670){
var kind_instance = cljs.core.first(arglist__7670);
var property = cljs.core.first(cljs.core.next(arglist__7670));
var state = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7670)));
var path = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7670))));
var others = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7670))));
return G__7669__delegate(kind_instance, property, state, path, others);
});
G__7669.cljs$lang$arity$variadic = G__7669__delegate;
return G__7669;
})()
;
bind_to_state = function(kind_instance,property,state,path,var_args){
var others = var_args;
switch(arguments.length){
case 4:
return bind_to_state__4.call(this,kind_instance,property,state,path);
default:
return bind_to_state__5.cljs$lang$arity$variadic(kind_instance,property,state,path, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
bind_to_state.cljs$lang$maxFixedArity = 4;
bind_to_state.cljs$lang$applyTo = bind_to_state__5.cljs$lang$applyTo;
bind_to_state.cljs$lang$arity$4 = bind_to_state__4;
bind_to_state.cljs$lang$arity$variadic = bind_to_state__5.cljs$lang$arity$variadic;
return bind_to_state;
})()
;
treklet.gui.enyo.on_properties_change = (function on_properties_change(kind_instance,properties,cb){
var G__7677__7678 = cljs.core.seq.call(null,properties);
if(G__7677__7678)
{var property__7679 = cljs.core.first.call(null,G__7677__7678);
var G__7677__7680 = G__7677__7678;
while(true){
treklet.util.dynamic_call.call(null,kind_instance,treklet.gui.enyo.add_change_listener_method_name.call(null,property__7679),((function (property__7679,G__7677__7680){
return (function() { 
var G__7683__delegate = function (junk){
return cb.call(null);
};
var G__7683 = function (var_args){
var junk = null;
if (goog.isDef(var_args)) {
  junk = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7683__delegate.call(this, junk);
};
G__7683.cljs$lang$maxFixedArity = 0;
G__7683.cljs$lang$applyTo = (function (arglist__7684){
var junk = cljs.core.seq(arglist__7684);;
return G__7683__delegate(junk);
});
G__7683.cljs$lang$arity$variadic = G__7683__delegate;
return G__7683;
})()
;})(property__7679,G__7677__7680))
);
var temp__3974__auto____7681 = cljs.core.next.call(null,G__7677__7680);
if(temp__3974__auto____7681)
{var G__7677__7682 = temp__3974__auto____7681;
{
var G__7685 = cljs.core.first.call(null,G__7677__7682);
var G__7686 = G__7677__7682;
property__7679 = G__7685;
G__7677__7680 = G__7686;
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
});
/**
* @param {...*} var_args
*/
treklet.gui.enyo.render_on_change = (function() { 
var render_on_change__delegate = function (kind_instance,properties){
return treklet.gui.enyo.on_properties_change.call(null,kind_instance,properties,(function (){
return (kind_instance["render"]).call(kind_instance);
}));
};
var render_on_change = function (kind_instance,var_args){
var properties = null;
if (goog.isDef(var_args)) {
  properties = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return render_on_change__delegate.call(this, kind_instance, properties);
};
render_on_change.cljs$lang$maxFixedArity = 1;
render_on_change.cljs$lang$applyTo = (function (arglist__7687){
var kind_instance = cljs.core.first(arglist__7687);
var properties = cljs.core.rest(arglist__7687);
return render_on_change__delegate(kind_instance, properties);
});
render_on_change.cljs$lang$arity$variadic = render_on_change__delegate;
return render_on_change;
})()
;
