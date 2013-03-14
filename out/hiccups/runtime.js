goog.provide('hiccups.runtime');
goog.require('cljs.core');
goog.require('clojure.string');
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
hiccups.runtime.re_tag = /([^\s\.#]+)(?:#([^s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Characters to replace when escaping HTML
*/
hiccups.runtime.character_escapes = cljs.core.PersistentArrayMap.fromArrays(["&","<",">","\""],["&amp;","&lt;","&gt;","&quot;"]);
/**
* A list of tags that need an explicit ending tag when rendered.
*/
hiccups.runtime.container_tags = cljs.core.PersistentHashSet.fromArray(["dd","head","a","b","body","pre","form","iframe","dl","em","fieldset","i","h1","h2","span","h3","script","html","h4","h5","h6","table","dt","div","style","label","option","ul","strong","canvas","textarea","li","ol"]);
hiccups.runtime.as_str = (function as_str(x){
if((function (){var or__3824__auto____11839 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11839)
{return or__3824__auto____11839;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return cljs.core.name.call(null,x);
} else
{return [cljs.core.str(x)].join('');
}
});
hiccups.runtime._STAR_html_mode_STAR_ = "\uFDD0'xml";
hiccups.runtime.xml_mode_QMARK_ = (function xml_mode_QMARK_(){
return cljs.core._EQ_.call(null,hiccups.runtime._STAR_html_mode_STAR_,"\uFDD0'xml");
});
hiccups.runtime.in_mode = (function in_mode(mode,f){
var _STAR_html_mode_STAR_11843__11844 = hiccups.runtime._STAR_html_mode_STAR_;
try{hiccups.runtime._STAR_html_mode_STAR_ = mode;
return f.call(null);
}finally {hiccups.runtime._STAR_html_mode_STAR_ = _STAR_html_mode_STAR_11843__11844;
}});
/**
* Change special characters into HTML character entities.
*/
hiccups.runtime.escape_html = (function escape_html(text){
return clojure.string.escape.call(null,hiccups.runtime.as_str.call(null,text),hiccups.runtime.character_escapes);
});
hiccups.runtime.h = hiccups.runtime.escape_html;
hiccups.runtime.end_tag = (function end_tag(){
if(cljs.core.truth_(hiccups.runtime.xml_mode_QMARK_.call(null)))
{return " />";
} else
{return ">";
}
});
hiccups.runtime.xml_attribute = (function xml_attribute(name,value){
return [cljs.core.str(" "),cljs.core.str(hiccups.runtime.as_str.call(null,name)),cljs.core.str("=\""),cljs.core.str(hiccups.runtime.escape_html.call(null,value)),cljs.core.str("\"")].join('');
});
hiccups.runtime.render_attribute = (function render_attribute(p__11846){
var vec__11851__11852 = p__11846;
var name__11853 = cljs.core.nth.call(null,vec__11851__11852,0,null);
var value__11854 = cljs.core.nth.call(null,vec__11851__11852,1,null);
if(value__11854 === true)
{if(cljs.core.truth_(hiccups.runtime.xml_mode_QMARK_.call(null)))
{return hiccups.runtime.xml_attribute.call(null,name__11853,name__11853);
} else
{return [cljs.core.str(" "),cljs.core.str(hiccups.runtime.as_str.call(null,name__11853))].join('');
}
} else
{if(cljs.core.not.call(null,value__11854))
{return "";
} else
{if("\uFDD0'else")
{return hiccups.runtime.xml_attribute.call(null,name__11853,value__11854);
} else
{return null;
}
}
}
});
hiccups.runtime.render_attr_map = (function render_attr_map(attrs){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.sort.call(null,cljs.core.map.call(null,hiccups.runtime.render_attribute,attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
hiccups.runtime.normalize_element = (function normalize_element(p__11855){
var vec__11870__11871 = p__11855;
var tag__11872 = cljs.core.nth.call(null,vec__11870__11871,0,null);
var content__11873 = cljs.core.nthnext.call(null,vec__11870__11871,1);
if(!((function (){var or__3824__auto____11874 = cljs.core.keyword_QMARK_.call(null,tag__11872);
if(or__3824__auto____11874)
{return or__3824__auto____11874;
} else
{var or__3824__auto____11875 = cljs.core.symbol_QMARK_.call(null,tag__11872);
if(or__3824__auto____11875)
{return or__3824__auto____11875;
} else
{return cljs.core.string_QMARK_.call(null,tag__11872);
}
}
})()))
{throw [cljs.core.str(tag__11872),cljs.core.str(" is not a valid tag name")].join('');
} else
{}
var vec__11876__11877 = cljs.core.re_matches.call(null,hiccups.runtime.re_tag,hiccups.runtime.as_str.call(null,tag__11872));
var ___11878 = cljs.core.nth.call(null,vec__11876__11877,0,null);
var tag__11879 = cljs.core.nth.call(null,vec__11876__11877,1,null);
var id__11880 = cljs.core.nth.call(null,vec__11876__11877,2,null);
var class__11881 = cljs.core.nth.call(null,vec__11876__11877,3,null);
var tag_attrs__11882 = cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":id__11880,"\uFDD0'class":(cljs.core.truth_(class__11881)?class__11881.replace("."," "):null)});
var map_attrs__11883 = cljs.core.first.call(null,content__11873);
if(cljs.core.map_QMARK_.call(null,map_attrs__11883))
{return cljs.core.PersistentVector.fromArray([tag__11879,cljs.core.merge.call(null,tag_attrs__11882,map_attrs__11883),cljs.core.next.call(null,content__11873)], true);
} else
{return cljs.core.PersistentVector.fromArray([tag__11879,tag_attrs__11882,content__11873], true);
}
});
/**
* Render a tag vector as a HTML element.
*/
hiccups.runtime.render_element = (function render_element(element){
var vec__11890__11891 = hiccups.runtime.normalize_element.call(null,element);
var tag__11892 = cljs.core.nth.call(null,vec__11890__11891,0,null);
var attrs__11893 = cljs.core.nth.call(null,vec__11890__11891,1,null);
var content__11894 = cljs.core.nth.call(null,vec__11890__11891,2,null);
if(cljs.core.truth_((function (){var or__3824__auto____11895 = content__11894;
if(cljs.core.truth_(or__3824__auto____11895))
{return or__3824__auto____11895;
} else
{return hiccups.runtime.container_tags.call(null,tag__11892);
}
})()))
{return [cljs.core.str("<"),cljs.core.str(tag__11892),cljs.core.str(hiccups.runtime.render_attr_map.call(null,attrs__11893)),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,content__11894)),cljs.core.str("</"),cljs.core.str(tag__11892),cljs.core.str(">")].join('');
} else
{return [cljs.core.str("<"),cljs.core.str(tag__11892),cljs.core.str(hiccups.runtime.render_attr_map.call(null,attrs__11893)),cljs.core.str(hiccups.runtime.end_tag.call(null))].join('');
}
});
/**
* Turn a Clojure data type into a string of HTML.
*/
hiccups.runtime.render_html = (function render_html(x){
if(cljs.core.vector_QMARK_.call(null,x))
{return hiccups.runtime.render_element.call(null,x);
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,render_html,x));
} else
{if("\uFDD0'else")
{return hiccups.runtime.as_str.call(null,x);
} else
{return null;
}
}
}
});
