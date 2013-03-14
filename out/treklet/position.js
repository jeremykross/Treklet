goog.provide('treklet.position');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('goog.dom.dataset');
goog.require('goog.dom.classes');
goog.require('goog.string');
goog.require('goog.dom');
treklet.position.dom_generate_plutoid_1 = (function dom_generate_plutoid_1(node){
if(cljs.core._EQ_.call(null,node.nodeType,1))
{var collected_hash__15470 = (function (){var child_nodes__15466 = node.childNodes;
var collected_hash__15467 = "";
while(true){
if((cljs.core.count.call(null,child_nodes__15466) === 0))
{collected_hash__15467;
} else
{}
var h__15468 = dom_generate_plutoid_1.call(null,cljs.core.first.call(null,child_nodes__15466));
if(cljs.core.truth_((function (){var and__3822__auto____15469 = h__15468;
if(cljs.core.truth_(and__3822__auto____15469))
{return (h__15468.length > 0);
} else
{return and__3822__auto____15469;
}
})()))
{{
var G__15471 = cljs.core.rest.call(null,child_nodes__15466);
var G__15472 = [cljs.core.str(collected_hash__15467),cljs.core.str(h__15468)].join('');
child_nodes__15466 = G__15471;
collected_hash__15467 = G__15472;
continue;
}
} else
{{
var G__15473 = cljs.core.rest.call(null,child_nodes__15466);
var G__15474 = collected_hash__15467;
child_nodes__15466 = G__15473;
collected_hash__15467 = G__15474;
continue;
}
}
break;
}
})();
if(!(cljs.core._EQ_.call(null,node.tagName.toUpperCase(),"BODY")))
{goog.dom.dataset.set(node,"plutoid",1234);
} else
{goog.dom.dataset.set(node,"plutoid",cljs.core.hash.call(null,[cljs.core.str(node.tagName()),cljs.core.str(collected_hash__15470)].join('')));
}
alert([cljs.core.str("Set "),cljs.core.str(goog.dom.dataset.get(node,"plutoid")),cljs.core.str(" for "),cljs.core.str(goog.dom.getOuterHtml(node))].join(''));
return collected_hash__15470;
} else
{if(cljs.core._EQ_.call(null,node.nodeType,3))
{return goog.string.trim(node.nodeValue());
} else
{return null;
}
}
});
treklet.position.dom_generate_plutoid = (function dom_generate_plutoid(node){
if(cljs.core._EQ_.call(null,node.nodeType,1))
{var plutoid__15482 = cljs.core.hash.call(null,goog.dom.getOuterHtml(node));
goog.dom.dataset.set(node,"plutoid",[cljs.core.str(plutoid__15482)].join(''));
goog.dom.classes.add(node,[cljs.core.str("_"),cljs.core.str(plutoid__15482)].join(''));
return goog.dom.classes.add(node,(function (){var G__15483__15484 = cljs.core.seq.call(null,goog.array.toArray(node.childNodes));
if(G__15483__15484)
{var child__15485 = cljs.core.first.call(null,G__15483__15484);
var G__15483__15486 = G__15483__15484;
while(true){
dom_generate_plutoid.call(null,child__15485);
var temp__3974__auto____15487 = cljs.core.next.call(null,G__15483__15486);
if(temp__3974__auto____15487)
{var G__15483__15488 = temp__3974__auto____15487;
{
var G__15489 = cljs.core.first.call(null,G__15483__15488);
var G__15490 = G__15483__15488;
child__15485 = G__15489;
G__15483__15486 = G__15490;
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
})());
} else
{return null;
}
});
