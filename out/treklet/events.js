goog.provide('treklet.events');
goog.require('cljs.core');
var subscribers__6198__auto____7738 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* @param {...*} var_args
*/
treklet.events.signal_avatar_changed = (function() { 
var signal_avatar_changed__delegate = function (args__6199__auto__){
var G__7745__7746 = cljs.core.seq.call(null,cljs.core.deref.call(null,subscribers__6198__auto____7738));
if(G__7745__7746)
{var s__6200__auto____7747 = cljs.core.first.call(null,G__7745__7746);
var G__7745__7748 = G__7745__7746;
while(true){
cljs.core.apply.call(null,s__6200__auto____7747,args__6199__auto__);
var temp__3974__auto____7749 = cljs.core.next.call(null,G__7745__7748);
if(temp__3974__auto____7749)
{var G__7745__7750 = temp__3974__auto____7749;
{
var G__7751 = cljs.core.first.call(null,G__7745__7750);
var G__7752 = G__7745__7750;
s__6200__auto____7747 = G__7751;
G__7745__7748 = G__7752;
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
};
var signal_avatar_changed = function (var_args){
var args__6199__auto__ = null;
if (goog.isDef(var_args)) {
  args__6199__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return signal_avatar_changed__delegate.call(this, args__6199__auto__);
};
signal_avatar_changed.cljs$lang$maxFixedArity = 0;
signal_avatar_changed.cljs$lang$applyTo = (function (arglist__7753){
var args__6199__auto__ = cljs.core.seq(arglist__7753);;
return signal_avatar_changed__delegate(args__6199__auto__);
});
signal_avatar_changed.cljs$lang$arity$variadic = signal_avatar_changed__delegate;
return signal_avatar_changed;
})()
;
treklet.events.slot_avatar_changed = (function slot_avatar_changed(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____7738,cljs.core.conj,listener__6201__auto__);
});
treklet.events.unslot_avatar_changed = (function unslot_avatar_changed(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____7738,(function (p1__6197__6202__auto__,p2__6196__6203__auto__){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__6196__6203__auto__]),p1__6197__6202__auto__);
}),listener__6201__auto__);
});
goog.exportSymbol("treklet.events.signal_avatar_changed",treklet.events.signal_avatar_changed);
goog.exportSymbol("treklet.events.slot_avatar_changed",treklet.events.slot_avatar_changed);
goog.exportSymbol("treklet.events.unslot_avatar_changed",treklet.events.unslot_avatar_changed);
var subscribers__6198__auto____7754 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* @param {...*} var_args
*/
treklet.events.signal_avatar_spoke = (function() { 
var signal_avatar_spoke__delegate = function (args__6199__auto__){
var G__7761__7762 = cljs.core.seq.call(null,cljs.core.deref.call(null,subscribers__6198__auto____7754));
if(G__7761__7762)
{var s__6200__auto____7763 = cljs.core.first.call(null,G__7761__7762);
var G__7761__7764 = G__7761__7762;
while(true){
cljs.core.apply.call(null,s__6200__auto____7763,args__6199__auto__);
var temp__3974__auto____7765 = cljs.core.next.call(null,G__7761__7764);
if(temp__3974__auto____7765)
{var G__7761__7766 = temp__3974__auto____7765;
{
var G__7767 = cljs.core.first.call(null,G__7761__7766);
var G__7768 = G__7761__7766;
s__6200__auto____7763 = G__7767;
G__7761__7764 = G__7768;
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
};
var signal_avatar_spoke = function (var_args){
var args__6199__auto__ = null;
if (goog.isDef(var_args)) {
  args__6199__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return signal_avatar_spoke__delegate.call(this, args__6199__auto__);
};
signal_avatar_spoke.cljs$lang$maxFixedArity = 0;
signal_avatar_spoke.cljs$lang$applyTo = (function (arglist__7769){
var args__6199__auto__ = cljs.core.seq(arglist__7769);;
return signal_avatar_spoke__delegate(args__6199__auto__);
});
signal_avatar_spoke.cljs$lang$arity$variadic = signal_avatar_spoke__delegate;
return signal_avatar_spoke;
})()
;
treklet.events.slot_avatar_spoke = (function slot_avatar_spoke(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____7754,cljs.core.conj,listener__6201__auto__);
});
treklet.events.unslot_avatar_spoke = (function unslot_avatar_spoke(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____7754,(function (p1__6197__6202__auto__,p2__6196__6203__auto__){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__6196__6203__auto__]),p1__6197__6202__auto__);
}),listener__6201__auto__);
});
goog.exportSymbol("treklet.events.signal_avatar_spoke",treklet.events.signal_avatar_spoke);
goog.exportSymbol("treklet.events.slot_avatar_spoke",treklet.events.slot_avatar_spoke);
goog.exportSymbol("treklet.events.unslot_avatar_spoke",treklet.events.unslot_avatar_spoke);
var subscribers__6198__auto____7770 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* @param {...*} var_args
*/
treklet.events.signal_user_arrival = (function() { 
var signal_user_arrival__delegate = function (args__6199__auto__){
var G__7777__7778 = cljs.core.seq.call(null,cljs.core.deref.call(null,subscribers__6198__auto____7770));
if(G__7777__7778)
{var s__6200__auto____7779 = cljs.core.first.call(null,G__7777__7778);
var G__7777__7780 = G__7777__7778;
while(true){
cljs.core.apply.call(null,s__6200__auto____7779,args__6199__auto__);
var temp__3974__auto____7781 = cljs.core.next.call(null,G__7777__7780);
if(temp__3974__auto____7781)
{var G__7777__7782 = temp__3974__auto____7781;
{
var G__7783 = cljs.core.first.call(null,G__7777__7782);
var G__7784 = G__7777__7782;
s__6200__auto____7779 = G__7783;
G__7777__7780 = G__7784;
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
};
var signal_user_arrival = function (var_args){
var args__6199__auto__ = null;
if (goog.isDef(var_args)) {
  args__6199__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return signal_user_arrival__delegate.call(this, args__6199__auto__);
};
signal_user_arrival.cljs$lang$maxFixedArity = 0;
signal_user_arrival.cljs$lang$applyTo = (function (arglist__7785){
var args__6199__auto__ = cljs.core.seq(arglist__7785);;
return signal_user_arrival__delegate(args__6199__auto__);
});
signal_user_arrival.cljs$lang$arity$variadic = signal_user_arrival__delegate;
return signal_user_arrival;
})()
;
treklet.events.slot_user_arrival = (function slot_user_arrival(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____7770,cljs.core.conj,listener__6201__auto__);
});
treklet.events.unslot_user_arrival = (function unslot_user_arrival(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____7770,(function (p1__6197__6202__auto__,p2__6196__6203__auto__){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__6196__6203__auto__]),p1__6197__6202__auto__);
}),listener__6201__auto__);
});
goog.exportSymbol("treklet.events.signal_user_arrival",treklet.events.signal_user_arrival);
goog.exportSymbol("treklet.events.slot_user_arrival",treklet.events.slot_user_arrival);
goog.exportSymbol("treklet.events.unslot_user_arrival",treklet.events.unslot_user_arrival);
var subscribers__6198__auto____7786 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* @param {...*} var_args
*/
treklet.events.signal_user_departure = (function() { 
var signal_user_departure__delegate = function (args__6199__auto__){
var G__7793__7794 = cljs.core.seq.call(null,cljs.core.deref.call(null,subscribers__6198__auto____7786));
if(G__7793__7794)
{var s__6200__auto____7795 = cljs.core.first.call(null,G__7793__7794);
var G__7793__7796 = G__7793__7794;
while(true){
cljs.core.apply.call(null,s__6200__auto____7795,args__6199__auto__);
var temp__3974__auto____7797 = cljs.core.next.call(null,G__7793__7796);
if(temp__3974__auto____7797)
{var G__7793__7798 = temp__3974__auto____7797;
{
var G__7799 = cljs.core.first.call(null,G__7793__7798);
var G__7800 = G__7793__7798;
s__6200__auto____7795 = G__7799;
G__7793__7796 = G__7800;
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
};
var signal_user_departure = function (var_args){
var args__6199__auto__ = null;
if (goog.isDef(var_args)) {
  args__6199__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return signal_user_departure__delegate.call(this, args__6199__auto__);
};
signal_user_departure.cljs$lang$maxFixedArity = 0;
signal_user_departure.cljs$lang$applyTo = (function (arglist__7801){
var args__6199__auto__ = cljs.core.seq(arglist__7801);;
return signal_user_departure__delegate(args__6199__auto__);
});
signal_user_departure.cljs$lang$arity$variadic = signal_user_departure__delegate;
return signal_user_departure;
})()
;
treklet.events.slot_user_departure = (function slot_user_departure(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____7786,cljs.core.conj,listener__6201__auto__);
});
treklet.events.unslot_user_departure = (function unslot_user_departure(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____7786,(function (p1__6197__6202__auto__,p2__6196__6203__auto__){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__6196__6203__auto__]),p1__6197__6202__auto__);
}),listener__6201__auto__);
});
goog.exportSymbol("treklet.events.signal_user_departure",treklet.events.signal_user_departure);
goog.exportSymbol("treklet.events.slot_user_departure",treklet.events.slot_user_departure);
goog.exportSymbol("treklet.events.unslot_user_departure",treklet.events.unslot_user_departure);
var subscribers__6198__auto____7802 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* @param {...*} var_args
*/
treklet.events.signal_mesg_for_user = (function() { 
var signal_mesg_for_user__delegate = function (args__6199__auto__){
var G__7809__7810 = cljs.core.seq.call(null,cljs.core.deref.call(null,subscribers__6198__auto____7802));
if(G__7809__7810)
{var s__6200__auto____7811 = cljs.core.first.call(null,G__7809__7810);
var G__7809__7812 = G__7809__7810;
while(true){
cljs.core.apply.call(null,s__6200__auto____7811,args__6199__auto__);
var temp__3974__auto____7813 = cljs.core.next.call(null,G__7809__7812);
if(temp__3974__auto____7813)
{var G__7809__7814 = temp__3974__auto____7813;
{
var G__7815 = cljs.core.first.call(null,G__7809__7814);
var G__7816 = G__7809__7814;
s__6200__auto____7811 = G__7815;
G__7809__7812 = G__7816;
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
};
var signal_mesg_for_user = function (var_args){
var args__6199__auto__ = null;
if (goog.isDef(var_args)) {
  args__6199__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return signal_mesg_for_user__delegate.call(this, args__6199__auto__);
};
signal_mesg_for_user.cljs$lang$maxFixedArity = 0;
signal_mesg_for_user.cljs$lang$applyTo = (function (arglist__7817){
var args__6199__auto__ = cljs.core.seq(arglist__7817);;
return signal_mesg_for_user__delegate(args__6199__auto__);
});
signal_mesg_for_user.cljs$lang$arity$variadic = signal_mesg_for_user__delegate;
return signal_mesg_for_user;
})()
;
treklet.events.slot_mesg_for_user = (function slot_mesg_for_user(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____7802,cljs.core.conj,listener__6201__auto__);
});
treklet.events.unslot_mesg_for_user = (function unslot_mesg_for_user(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____7802,(function (p1__6197__6202__auto__,p2__6196__6203__auto__){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__6196__6203__auto__]),p1__6197__6202__auto__);
}),listener__6201__auto__);
});
goog.exportSymbol("treklet.events.signal_mesg_for_user",treklet.events.signal_mesg_for_user);
goog.exportSymbol("treklet.events.slot_mesg_for_user",treklet.events.slot_mesg_for_user);
goog.exportSymbol("treklet.events.unslot_mesg_for_user",treklet.events.unslot_mesg_for_user);
var subscribers__6198__auto____7818 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* @param {...*} var_args
*/
treklet.events.signal_user_repositioned = (function() { 
var signal_user_repositioned__delegate = function (args__6199__auto__){
var G__7825__7826 = cljs.core.seq.call(null,cljs.core.deref.call(null,subscribers__6198__auto____7818));
if(G__7825__7826)
{var s__6200__auto____7827 = cljs.core.first.call(null,G__7825__7826);
var G__7825__7828 = G__7825__7826;
while(true){
cljs.core.apply.call(null,s__6200__auto____7827,args__6199__auto__);
var temp__3974__auto____7829 = cljs.core.next.call(null,G__7825__7828);
if(temp__3974__auto____7829)
{var G__7825__7830 = temp__3974__auto____7829;
{
var G__7831 = cljs.core.first.call(null,G__7825__7830);
var G__7832 = G__7825__7830;
s__6200__auto____7827 = G__7831;
G__7825__7828 = G__7832;
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
};
var signal_user_repositioned = function (var_args){
var args__6199__auto__ = null;
if (goog.isDef(var_args)) {
  args__6199__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return signal_user_repositioned__delegate.call(this, args__6199__auto__);
};
signal_user_repositioned.cljs$lang$maxFixedArity = 0;
signal_user_repositioned.cljs$lang$applyTo = (function (arglist__7833){
var args__6199__auto__ = cljs.core.seq(arglist__7833);;
return signal_user_repositioned__delegate(args__6199__auto__);
});
signal_user_repositioned.cljs$lang$arity$variadic = signal_user_repositioned__delegate;
return signal_user_repositioned;
})()
;
treklet.events.slot_user_repositioned = (function slot_user_repositioned(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____7818,cljs.core.conj,listener__6201__auto__);
});
treklet.events.unslot_user_repositioned = (function unslot_user_repositioned(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____7818,(function (p1__6197__6202__auto__,p2__6196__6203__auto__){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__6196__6203__auto__]),p1__6197__6202__auto__);
}),listener__6201__auto__);
});
goog.exportSymbol("treklet.events.signal_user_repositioned",treklet.events.signal_user_repositioned);
goog.exportSymbol("treklet.events.slot_user_repositioned",treklet.events.slot_user_repositioned);
goog.exportSymbol("treklet.events.unslot_user_repositioned",treklet.events.unslot_user_repositioned);
var subscribers__6198__auto____7834 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* @param {...*} var_args
*/
treklet.events.signal_plugin_run = (function() { 
var signal_plugin_run__delegate = function (args__6199__auto__){
var G__7841__7842 = cljs.core.seq.call(null,cljs.core.deref.call(null,subscribers__6198__auto____7834));
if(G__7841__7842)
{var s__6200__auto____7843 = cljs.core.first.call(null,G__7841__7842);
var G__7841__7844 = G__7841__7842;
while(true){
cljs.core.apply.call(null,s__6200__auto____7843,args__6199__auto__);
var temp__3974__auto____7845 = cljs.core.next.call(null,G__7841__7844);
if(temp__3974__auto____7845)
{var G__7841__7846 = temp__3974__auto____7845;
{
var G__7847 = cljs.core.first.call(null,G__7841__7846);
var G__7848 = G__7841__7846;
s__6200__auto____7843 = G__7847;
G__7841__7844 = G__7848;
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
};
var signal_plugin_run = function (var_args){
var args__6199__auto__ = null;
if (goog.isDef(var_args)) {
  args__6199__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return signal_plugin_run__delegate.call(this, args__6199__auto__);
};
signal_plugin_run.cljs$lang$maxFixedArity = 0;
signal_plugin_run.cljs$lang$applyTo = (function (arglist__7849){
var args__6199__auto__ = cljs.core.seq(arglist__7849);;
return signal_plugin_run__delegate(args__6199__auto__);
});
signal_plugin_run.cljs$lang$arity$variadic = signal_plugin_run__delegate;
return signal_plugin_run;
})()
;
treklet.events.slot_plugin_run = (function slot_plugin_run(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____7834,cljs.core.conj,listener__6201__auto__);
});
treklet.events.unslot_plugin_run = (function unslot_plugin_run(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____7834,(function (p1__6197__6202__auto__,p2__6196__6203__auto__){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__6196__6203__auto__]),p1__6197__6202__auto__);
}),listener__6201__auto__);
});
goog.exportSymbol("treklet.events.signal_plugin_run",treklet.events.signal_plugin_run);
goog.exportSymbol("treklet.events.slot_plugin_run",treklet.events.slot_plugin_run);
goog.exportSymbol("treklet.events.unslot_plugin_run",treklet.events.unslot_plugin_run);
var subscribers__6198__auto____7850 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* @param {...*} var_args
*/
treklet.events.signal_overlay_changed = (function() { 
var signal_overlay_changed__delegate = function (args__6199__auto__){
var G__7857__7858 = cljs.core.seq.call(null,cljs.core.deref.call(null,subscribers__6198__auto____7850));
if(G__7857__7858)
{var s__6200__auto____7859 = cljs.core.first.call(null,G__7857__7858);
var G__7857__7860 = G__7857__7858;
while(true){
cljs.core.apply.call(null,s__6200__auto____7859,args__6199__auto__);
var temp__3974__auto____7861 = cljs.core.next.call(null,G__7857__7860);
if(temp__3974__auto____7861)
{var G__7857__7862 = temp__3974__auto____7861;
{
var G__7863 = cljs.core.first.call(null,G__7857__7862);
var G__7864 = G__7857__7862;
s__6200__auto____7859 = G__7863;
G__7857__7860 = G__7864;
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
};
var signal_overlay_changed = function (var_args){
var args__6199__auto__ = null;
if (goog.isDef(var_args)) {
  args__6199__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return signal_overlay_changed__delegate.call(this, args__6199__auto__);
};
signal_overlay_changed.cljs$lang$maxFixedArity = 0;
signal_overlay_changed.cljs$lang$applyTo = (function (arglist__7865){
var args__6199__auto__ = cljs.core.seq(arglist__7865);;
return signal_overlay_changed__delegate(args__6199__auto__);
});
signal_overlay_changed.cljs$lang$arity$variadic = signal_overlay_changed__delegate;
return signal_overlay_changed;
})()
;
treklet.events.slot_overlay_changed = (function slot_overlay_changed(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____7850,cljs.core.conj,listener__6201__auto__);
});
treklet.events.unslot_overlay_changed = (function unslot_overlay_changed(listener__6201__auto__){
return cljs.core.swap_BANG_.call(null,subscribers__6198__auto____7850,(function (p1__6197__6202__auto__,p2__6196__6203__auto__){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__6196__6203__auto__]),p1__6197__6202__auto__);
}),listener__6201__auto__);
});
goog.exportSymbol("treklet.events.signal_overlay_changed",treklet.events.signal_overlay_changed);
goog.exportSymbol("treklet.events.slot_overlay_changed",treklet.events.slot_overlay_changed);
goog.exportSymbol("treklet.events.unslot_overlay_changed",treklet.events.unslot_overlay_changed);
