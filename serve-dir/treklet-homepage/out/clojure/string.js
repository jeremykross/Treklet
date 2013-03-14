goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__27441 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__27442 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__27441.call(this,separator);
case  2 :
return join__27442.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(cljs.core.truth_((cljs.core.count.call(null,s) < 2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__27450 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__27451 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__27444 = s;
var limit__27445 = limit;
var parts__27446 = cljs.core.PersistentVector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__27445,1)))
{return cljs.core.conj.call(null,parts__27446,s__27444);
} else
{var temp__3695__auto____27447 = cljs.core.re_find.call(null,re,s__27444);

if(cljs.core.truth_(temp__3695__auto____27447))
{var m__27448 = temp__3695__auto____27447;

var index__27449 = s__27444.indexOf(m__27448);

{
var G__27453 = s__27444.substring((index__27449 + cljs.core.count.call(null,m__27448)));
var G__27454 = (limit__27445 - 1);
var G__27455 = cljs.core.conj.call(null,parts__27446,s__27444.substring(0,index__27449));
s__27444 = G__27453;
limit__27445 = G__27454;
parts__27446 = G__27455;
continue;
}
} else
{return cljs.core.conj.call(null,parts__27446,s__27444);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__27450.call(this,s,re);
case  3 :
return split__27451.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__27456 = s.length;

while(true){
if(cljs.core.truth_((index__27456 === 0)))
{return "";
} else
{var ch__27457 = cljs.core.get.call(null,s,(index__27456 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____27458 = cljs.core._EQ_.call(null,ch__27457,"\n");

if(cljs.core.truth_(or__3548__auto____27458))
{return or__3548__auto____27458;
} else
{return cljs.core._EQ_.call(null,ch__27457,"\r");
}
})()))
{{
var G__27459 = (index__27456 - 1);
index__27456 = G__27459;
continue;
}
} else
{return s.substring(0,index__27456);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__27460 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____27461 = cljs.core.not.call(null,s__27460);

if(cljs.core.truth_(or__3548__auto____27461))
{return or__3548__auto____27461;
} else
{var or__3548__auto____27462 = cljs.core._EQ_.call(null,"",s__27460);

if(cljs.core.truth_(or__3548__auto____27462))
{return or__3548__auto____27462;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__27460);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__27463 = (new goog.string.StringBuffer());
var length__27464 = s.length;

var index__27465 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__27464,index__27465)))
{return buffer__27463.toString();
} else
{var ch__27466 = s.charAt(index__27465);

var temp__3695__auto____27467 = cljs.core.get.call(null,cmap,ch__27466);

if(cljs.core.truth_(temp__3695__auto____27467))
{var replacement__27468 = temp__3695__auto____27467;

buffer__27463.append(cljs.core.str.call(null,replacement__27468));
} else
{buffer__27463.append(ch__27466);
}
{
var G__27469 = (index__27465 + 1);
index__27465 = G__27469;
continue;
}
}
break;
}
});
