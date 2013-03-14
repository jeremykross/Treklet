goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__7899 = (((x == null))?null:x);
if((p[goog.typeOf(x__7899)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__7900__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__7900 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7900__delegate.call(this, array, i, idxs);
};
G__7900.cljs$lang$maxFixedArity = 2;
G__7900.cljs$lang$applyTo = (function (arglist__7901){
var array = cljs.core.first(arglist__7901);
var i = cljs.core.first(cljs.core.next(arglist__7901));
var idxs = cljs.core.rest(cljs.core.next(arglist__7901));
return G__7900__delegate(array, i, idxs);
});
G__7900.cljs$lang$arity$variadic = G__7900__delegate;
return G__7900;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____7986 = this$;
if(and__3822__auto____7986)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____7986;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2391__auto____7987 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7988 = (cljs.core._invoke[goog.typeOf(x__2391__auto____7987)]);
if(or__3824__auto____7988)
{return or__3824__auto____7988;
} else
{var or__3824__auto____7989 = (cljs.core._invoke["_"]);
if(or__3824__auto____7989)
{return or__3824__auto____7989;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____7990 = this$;
if(and__3822__auto____7990)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____7990;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2391__auto____7991 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7992 = (cljs.core._invoke[goog.typeOf(x__2391__auto____7991)]);
if(or__3824__auto____7992)
{return or__3824__auto____7992;
} else
{var or__3824__auto____7993 = (cljs.core._invoke["_"]);
if(or__3824__auto____7993)
{return or__3824__auto____7993;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____7994 = this$;
if(and__3822__auto____7994)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____7994;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2391__auto____7995 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7996 = (cljs.core._invoke[goog.typeOf(x__2391__auto____7995)]);
if(or__3824__auto____7996)
{return or__3824__auto____7996;
} else
{var or__3824__auto____7997 = (cljs.core._invoke["_"]);
if(or__3824__auto____7997)
{return or__3824__auto____7997;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____7998 = this$;
if(and__3822__auto____7998)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____7998;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2391__auto____7999 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8000 = (cljs.core._invoke[goog.typeOf(x__2391__auto____7999)]);
if(or__3824__auto____8000)
{return or__3824__auto____8000;
} else
{var or__3824__auto____8001 = (cljs.core._invoke["_"]);
if(or__3824__auto____8001)
{return or__3824__auto____8001;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____8002 = this$;
if(and__3822__auto____8002)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____8002;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2391__auto____8003 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8004 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8003)]);
if(or__3824__auto____8004)
{return or__3824__auto____8004;
} else
{var or__3824__auto____8005 = (cljs.core._invoke["_"]);
if(or__3824__auto____8005)
{return or__3824__auto____8005;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____8006 = this$;
if(and__3822__auto____8006)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____8006;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2391__auto____8007 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8008 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8007)]);
if(or__3824__auto____8008)
{return or__3824__auto____8008;
} else
{var or__3824__auto____8009 = (cljs.core._invoke["_"]);
if(or__3824__auto____8009)
{return or__3824__auto____8009;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____8010 = this$;
if(and__3822__auto____8010)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____8010;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2391__auto____8011 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8012 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8011)]);
if(or__3824__auto____8012)
{return or__3824__auto____8012;
} else
{var or__3824__auto____8013 = (cljs.core._invoke["_"]);
if(or__3824__auto____8013)
{return or__3824__auto____8013;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____8014 = this$;
if(and__3822__auto____8014)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____8014;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2391__auto____8015 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8016 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8015)]);
if(or__3824__auto____8016)
{return or__3824__auto____8016;
} else
{var or__3824__auto____8017 = (cljs.core._invoke["_"]);
if(or__3824__auto____8017)
{return or__3824__auto____8017;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____8018 = this$;
if(and__3822__auto____8018)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____8018;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2391__auto____8019 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8020 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8019)]);
if(or__3824__auto____8020)
{return or__3824__auto____8020;
} else
{var or__3824__auto____8021 = (cljs.core._invoke["_"]);
if(or__3824__auto____8021)
{return or__3824__auto____8021;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____8022 = this$;
if(and__3822__auto____8022)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____8022;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2391__auto____8023 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8024 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8023)]);
if(or__3824__auto____8024)
{return or__3824__auto____8024;
} else
{var or__3824__auto____8025 = (cljs.core._invoke["_"]);
if(or__3824__auto____8025)
{return or__3824__auto____8025;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____8026 = this$;
if(and__3822__auto____8026)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____8026;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2391__auto____8027 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8028 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8027)]);
if(or__3824__auto____8028)
{return or__3824__auto____8028;
} else
{var or__3824__auto____8029 = (cljs.core._invoke["_"]);
if(or__3824__auto____8029)
{return or__3824__auto____8029;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____8030 = this$;
if(and__3822__auto____8030)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____8030;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2391__auto____8031 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8032 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8031)]);
if(or__3824__auto____8032)
{return or__3824__auto____8032;
} else
{var or__3824__auto____8033 = (cljs.core._invoke["_"]);
if(or__3824__auto____8033)
{return or__3824__auto____8033;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____8034 = this$;
if(and__3822__auto____8034)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____8034;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2391__auto____8035 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8036 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8035)]);
if(or__3824__auto____8036)
{return or__3824__auto____8036;
} else
{var or__3824__auto____8037 = (cljs.core._invoke["_"]);
if(or__3824__auto____8037)
{return or__3824__auto____8037;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____8038 = this$;
if(and__3822__auto____8038)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____8038;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2391__auto____8039 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8040 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8039)]);
if(or__3824__auto____8040)
{return or__3824__auto____8040;
} else
{var or__3824__auto____8041 = (cljs.core._invoke["_"]);
if(or__3824__auto____8041)
{return or__3824__auto____8041;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____8042 = this$;
if(and__3822__auto____8042)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____8042;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2391__auto____8043 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8044 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8043)]);
if(or__3824__auto____8044)
{return or__3824__auto____8044;
} else
{var or__3824__auto____8045 = (cljs.core._invoke["_"]);
if(or__3824__auto____8045)
{return or__3824__auto____8045;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____8046 = this$;
if(and__3822__auto____8046)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____8046;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2391__auto____8047 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8048 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8047)]);
if(or__3824__auto____8048)
{return or__3824__auto____8048;
} else
{var or__3824__auto____8049 = (cljs.core._invoke["_"]);
if(or__3824__auto____8049)
{return or__3824__auto____8049;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____8050 = this$;
if(and__3822__auto____8050)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____8050;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2391__auto____8051 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8052 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8051)]);
if(or__3824__auto____8052)
{return or__3824__auto____8052;
} else
{var or__3824__auto____8053 = (cljs.core._invoke["_"]);
if(or__3824__auto____8053)
{return or__3824__auto____8053;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____8054 = this$;
if(and__3822__auto____8054)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____8054;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2391__auto____8055 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8056 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8055)]);
if(or__3824__auto____8056)
{return or__3824__auto____8056;
} else
{var or__3824__auto____8057 = (cljs.core._invoke["_"]);
if(or__3824__auto____8057)
{return or__3824__auto____8057;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____8058 = this$;
if(and__3822__auto____8058)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____8058;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2391__auto____8059 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8060 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8059)]);
if(or__3824__auto____8060)
{return or__3824__auto____8060;
} else
{var or__3824__auto____8061 = (cljs.core._invoke["_"]);
if(or__3824__auto____8061)
{return or__3824__auto____8061;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____8062 = this$;
if(and__3822__auto____8062)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____8062;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2391__auto____8063 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8064 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8063)]);
if(or__3824__auto____8064)
{return or__3824__auto____8064;
} else
{var or__3824__auto____8065 = (cljs.core._invoke["_"]);
if(or__3824__auto____8065)
{return or__3824__auto____8065;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____8066 = this$;
if(and__3822__auto____8066)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____8066;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2391__auto____8067 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8068 = (cljs.core._invoke[goog.typeOf(x__2391__auto____8067)]);
if(or__3824__auto____8068)
{return or__3824__auto____8068;
} else
{var or__3824__auto____8069 = (cljs.core._invoke["_"]);
if(or__3824__auto____8069)
{return or__3824__auto____8069;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____8074 = coll;
if(and__3822__auto____8074)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____8074;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2391__auto____8075 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8076 = (cljs.core._count[goog.typeOf(x__2391__auto____8075)]);
if(or__3824__auto____8076)
{return or__3824__auto____8076;
} else
{var or__3824__auto____8077 = (cljs.core._count["_"]);
if(or__3824__auto____8077)
{return or__3824__auto____8077;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____8082 = coll;
if(and__3822__auto____8082)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____8082;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2391__auto____8083 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8084 = (cljs.core._empty[goog.typeOf(x__2391__auto____8083)]);
if(or__3824__auto____8084)
{return or__3824__auto____8084;
} else
{var or__3824__auto____8085 = (cljs.core._empty["_"]);
if(or__3824__auto____8085)
{return or__3824__auto____8085;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____8090 = coll;
if(and__3822__auto____8090)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____8090;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2391__auto____8091 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8092 = (cljs.core._conj[goog.typeOf(x__2391__auto____8091)]);
if(or__3824__auto____8092)
{return or__3824__auto____8092;
} else
{var or__3824__auto____8093 = (cljs.core._conj["_"]);
if(or__3824__auto____8093)
{return or__3824__auto____8093;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____8102 = coll;
if(and__3822__auto____8102)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____8102;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2391__auto____8103 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8104 = (cljs.core._nth[goog.typeOf(x__2391__auto____8103)]);
if(or__3824__auto____8104)
{return or__3824__auto____8104;
} else
{var or__3824__auto____8105 = (cljs.core._nth["_"]);
if(or__3824__auto____8105)
{return or__3824__auto____8105;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____8106 = coll;
if(and__3822__auto____8106)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____8106;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2391__auto____8107 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8108 = (cljs.core._nth[goog.typeOf(x__2391__auto____8107)]);
if(or__3824__auto____8108)
{return or__3824__auto____8108;
} else
{var or__3824__auto____8109 = (cljs.core._nth["_"]);
if(or__3824__auto____8109)
{return or__3824__auto____8109;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____8114 = coll;
if(and__3822__auto____8114)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____8114;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2391__auto____8115 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8116 = (cljs.core._first[goog.typeOf(x__2391__auto____8115)]);
if(or__3824__auto____8116)
{return or__3824__auto____8116;
} else
{var or__3824__auto____8117 = (cljs.core._first["_"]);
if(or__3824__auto____8117)
{return or__3824__auto____8117;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____8122 = coll;
if(and__3822__auto____8122)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____8122;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2391__auto____8123 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8124 = (cljs.core._rest[goog.typeOf(x__2391__auto____8123)]);
if(or__3824__auto____8124)
{return or__3824__auto____8124;
} else
{var or__3824__auto____8125 = (cljs.core._rest["_"]);
if(or__3824__auto____8125)
{return or__3824__auto____8125;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____8130 = coll;
if(and__3822__auto____8130)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____8130;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2391__auto____8131 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8132 = (cljs.core._next[goog.typeOf(x__2391__auto____8131)]);
if(or__3824__auto____8132)
{return or__3824__auto____8132;
} else
{var or__3824__auto____8133 = (cljs.core._next["_"]);
if(or__3824__auto____8133)
{return or__3824__auto____8133;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____8142 = o;
if(and__3822__auto____8142)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____8142;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2391__auto____8143 = (((o == null))?null:o);
return (function (){var or__3824__auto____8144 = (cljs.core._lookup[goog.typeOf(x__2391__auto____8143)]);
if(or__3824__auto____8144)
{return or__3824__auto____8144;
} else
{var or__3824__auto____8145 = (cljs.core._lookup["_"]);
if(or__3824__auto____8145)
{return or__3824__auto____8145;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____8146 = o;
if(and__3822__auto____8146)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____8146;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2391__auto____8147 = (((o == null))?null:o);
return (function (){var or__3824__auto____8148 = (cljs.core._lookup[goog.typeOf(x__2391__auto____8147)]);
if(or__3824__auto____8148)
{return or__3824__auto____8148;
} else
{var or__3824__auto____8149 = (cljs.core._lookup["_"]);
if(or__3824__auto____8149)
{return or__3824__auto____8149;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____8154 = coll;
if(and__3822__auto____8154)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____8154;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2391__auto____8155 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8156 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2391__auto____8155)]);
if(or__3824__auto____8156)
{return or__3824__auto____8156;
} else
{var or__3824__auto____8157 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____8157)
{return or__3824__auto____8157;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____8162 = coll;
if(and__3822__auto____8162)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____8162;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2391__auto____8163 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8164 = (cljs.core._assoc[goog.typeOf(x__2391__auto____8163)]);
if(or__3824__auto____8164)
{return or__3824__auto____8164;
} else
{var or__3824__auto____8165 = (cljs.core._assoc["_"]);
if(or__3824__auto____8165)
{return or__3824__auto____8165;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____8170 = coll;
if(and__3822__auto____8170)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____8170;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2391__auto____8171 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8172 = (cljs.core._dissoc[goog.typeOf(x__2391__auto____8171)]);
if(or__3824__auto____8172)
{return or__3824__auto____8172;
} else
{var or__3824__auto____8173 = (cljs.core._dissoc["_"]);
if(or__3824__auto____8173)
{return or__3824__auto____8173;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____8178 = coll;
if(and__3822__auto____8178)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____8178;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2391__auto____8179 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8180 = (cljs.core._key[goog.typeOf(x__2391__auto____8179)]);
if(or__3824__auto____8180)
{return or__3824__auto____8180;
} else
{var or__3824__auto____8181 = (cljs.core._key["_"]);
if(or__3824__auto____8181)
{return or__3824__auto____8181;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____8186 = coll;
if(and__3822__auto____8186)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____8186;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2391__auto____8187 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8188 = (cljs.core._val[goog.typeOf(x__2391__auto____8187)]);
if(or__3824__auto____8188)
{return or__3824__auto____8188;
} else
{var or__3824__auto____8189 = (cljs.core._val["_"]);
if(or__3824__auto____8189)
{return or__3824__auto____8189;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____8194 = coll;
if(and__3822__auto____8194)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____8194;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2391__auto____8195 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8196 = (cljs.core._disjoin[goog.typeOf(x__2391__auto____8195)]);
if(or__3824__auto____8196)
{return or__3824__auto____8196;
} else
{var or__3824__auto____8197 = (cljs.core._disjoin["_"]);
if(or__3824__auto____8197)
{return or__3824__auto____8197;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____8202 = coll;
if(and__3822__auto____8202)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____8202;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2391__auto____8203 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8204 = (cljs.core._peek[goog.typeOf(x__2391__auto____8203)]);
if(or__3824__auto____8204)
{return or__3824__auto____8204;
} else
{var or__3824__auto____8205 = (cljs.core._peek["_"]);
if(or__3824__auto____8205)
{return or__3824__auto____8205;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____8210 = coll;
if(and__3822__auto____8210)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____8210;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2391__auto____8211 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8212 = (cljs.core._pop[goog.typeOf(x__2391__auto____8211)]);
if(or__3824__auto____8212)
{return or__3824__auto____8212;
} else
{var or__3824__auto____8213 = (cljs.core._pop["_"]);
if(or__3824__auto____8213)
{return or__3824__auto____8213;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____8218 = coll;
if(and__3822__auto____8218)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____8218;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2391__auto____8219 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8220 = (cljs.core._assoc_n[goog.typeOf(x__2391__auto____8219)]);
if(or__3824__auto____8220)
{return or__3824__auto____8220;
} else
{var or__3824__auto____8221 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____8221)
{return or__3824__auto____8221;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____8226 = o;
if(and__3822__auto____8226)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____8226;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2391__auto____8227 = (((o == null))?null:o);
return (function (){var or__3824__auto____8228 = (cljs.core._deref[goog.typeOf(x__2391__auto____8227)]);
if(or__3824__auto____8228)
{return or__3824__auto____8228;
} else
{var or__3824__auto____8229 = (cljs.core._deref["_"]);
if(or__3824__auto____8229)
{return or__3824__auto____8229;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____8234 = o;
if(and__3822__auto____8234)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____8234;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2391__auto____8235 = (((o == null))?null:o);
return (function (){var or__3824__auto____8236 = (cljs.core._deref_with_timeout[goog.typeOf(x__2391__auto____8235)]);
if(or__3824__auto____8236)
{return or__3824__auto____8236;
} else
{var or__3824__auto____8237 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____8237)
{return or__3824__auto____8237;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____8242 = o;
if(and__3822__auto____8242)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____8242;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2391__auto____8243 = (((o == null))?null:o);
return (function (){var or__3824__auto____8244 = (cljs.core._meta[goog.typeOf(x__2391__auto____8243)]);
if(or__3824__auto____8244)
{return or__3824__auto____8244;
} else
{var or__3824__auto____8245 = (cljs.core._meta["_"]);
if(or__3824__auto____8245)
{return or__3824__auto____8245;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____8250 = o;
if(and__3822__auto____8250)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____8250;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2391__auto____8251 = (((o == null))?null:o);
return (function (){var or__3824__auto____8252 = (cljs.core._with_meta[goog.typeOf(x__2391__auto____8251)]);
if(or__3824__auto____8252)
{return or__3824__auto____8252;
} else
{var or__3824__auto____8253 = (cljs.core._with_meta["_"]);
if(or__3824__auto____8253)
{return or__3824__auto____8253;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____8262 = coll;
if(and__3822__auto____8262)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____8262;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2391__auto____8263 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8264 = (cljs.core._reduce[goog.typeOf(x__2391__auto____8263)]);
if(or__3824__auto____8264)
{return or__3824__auto____8264;
} else
{var or__3824__auto____8265 = (cljs.core._reduce["_"]);
if(or__3824__auto____8265)
{return or__3824__auto____8265;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____8266 = coll;
if(and__3822__auto____8266)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____8266;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2391__auto____8267 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8268 = (cljs.core._reduce[goog.typeOf(x__2391__auto____8267)]);
if(or__3824__auto____8268)
{return or__3824__auto____8268;
} else
{var or__3824__auto____8269 = (cljs.core._reduce["_"]);
if(or__3824__auto____8269)
{return or__3824__auto____8269;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____8274 = coll;
if(and__3822__auto____8274)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____8274;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2391__auto____8275 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8276 = (cljs.core._kv_reduce[goog.typeOf(x__2391__auto____8275)]);
if(or__3824__auto____8276)
{return or__3824__auto____8276;
} else
{var or__3824__auto____8277 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____8277)
{return or__3824__auto____8277;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____8282 = o;
if(and__3822__auto____8282)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____8282;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2391__auto____8283 = (((o == null))?null:o);
return (function (){var or__3824__auto____8284 = (cljs.core._equiv[goog.typeOf(x__2391__auto____8283)]);
if(or__3824__auto____8284)
{return or__3824__auto____8284;
} else
{var or__3824__auto____8285 = (cljs.core._equiv["_"]);
if(or__3824__auto____8285)
{return or__3824__auto____8285;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____8290 = o;
if(and__3822__auto____8290)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____8290;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2391__auto____8291 = (((o == null))?null:o);
return (function (){var or__3824__auto____8292 = (cljs.core._hash[goog.typeOf(x__2391__auto____8291)]);
if(or__3824__auto____8292)
{return or__3824__auto____8292;
} else
{var or__3824__auto____8293 = (cljs.core._hash["_"]);
if(or__3824__auto____8293)
{return or__3824__auto____8293;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____8298 = o;
if(and__3822__auto____8298)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____8298;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2391__auto____8299 = (((o == null))?null:o);
return (function (){var or__3824__auto____8300 = (cljs.core._seq[goog.typeOf(x__2391__auto____8299)]);
if(or__3824__auto____8300)
{return or__3824__auto____8300;
} else
{var or__3824__auto____8301 = (cljs.core._seq["_"]);
if(or__3824__auto____8301)
{return or__3824__auto____8301;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____8306 = coll;
if(and__3822__auto____8306)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____8306;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2391__auto____8307 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8308 = (cljs.core._rseq[goog.typeOf(x__2391__auto____8307)]);
if(or__3824__auto____8308)
{return or__3824__auto____8308;
} else
{var or__3824__auto____8309 = (cljs.core._rseq["_"]);
if(or__3824__auto____8309)
{return or__3824__auto____8309;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____8314 = coll;
if(and__3822__auto____8314)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____8314;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2391__auto____8315 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8316 = (cljs.core._sorted_seq[goog.typeOf(x__2391__auto____8315)]);
if(or__3824__auto____8316)
{return or__3824__auto____8316;
} else
{var or__3824__auto____8317 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____8317)
{return or__3824__auto____8317;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____8322 = coll;
if(and__3822__auto____8322)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____8322;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2391__auto____8323 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8324 = (cljs.core._sorted_seq_from[goog.typeOf(x__2391__auto____8323)]);
if(or__3824__auto____8324)
{return or__3824__auto____8324;
} else
{var or__3824__auto____8325 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____8325)
{return or__3824__auto____8325;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____8330 = coll;
if(and__3822__auto____8330)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____8330;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2391__auto____8331 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8332 = (cljs.core._entry_key[goog.typeOf(x__2391__auto____8331)]);
if(or__3824__auto____8332)
{return or__3824__auto____8332;
} else
{var or__3824__auto____8333 = (cljs.core._entry_key["_"]);
if(or__3824__auto____8333)
{return or__3824__auto____8333;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____8338 = coll;
if(and__3822__auto____8338)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____8338;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2391__auto____8339 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8340 = (cljs.core._comparator[goog.typeOf(x__2391__auto____8339)]);
if(or__3824__auto____8340)
{return or__3824__auto____8340;
} else
{var or__3824__auto____8341 = (cljs.core._comparator["_"]);
if(or__3824__auto____8341)
{return or__3824__auto____8341;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____8346 = o;
if(and__3822__auto____8346)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____8346;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2391__auto____8347 = (((o == null))?null:o);
return (function (){var or__3824__auto____8348 = (cljs.core._pr_seq[goog.typeOf(x__2391__auto____8347)]);
if(or__3824__auto____8348)
{return or__3824__auto____8348;
} else
{var or__3824__auto____8349 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____8349)
{return or__3824__auto____8349;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____8354 = d;
if(and__3822__auto____8354)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____8354;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2391__auto____8355 = (((d == null))?null:d);
return (function (){var or__3824__auto____8356 = (cljs.core._realized_QMARK_[goog.typeOf(x__2391__auto____8355)]);
if(or__3824__auto____8356)
{return or__3824__auto____8356;
} else
{var or__3824__auto____8357 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____8357)
{return or__3824__auto____8357;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____8362 = this$;
if(and__3822__auto____8362)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____8362;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2391__auto____8363 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8364 = (cljs.core._notify_watches[goog.typeOf(x__2391__auto____8363)]);
if(or__3824__auto____8364)
{return or__3824__auto____8364;
} else
{var or__3824__auto____8365 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____8365)
{return or__3824__auto____8365;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____8370 = this$;
if(and__3822__auto____8370)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____8370;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2391__auto____8371 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8372 = (cljs.core._add_watch[goog.typeOf(x__2391__auto____8371)]);
if(or__3824__auto____8372)
{return or__3824__auto____8372;
} else
{var or__3824__auto____8373 = (cljs.core._add_watch["_"]);
if(or__3824__auto____8373)
{return or__3824__auto____8373;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____8378 = this$;
if(and__3822__auto____8378)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____8378;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2391__auto____8379 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8380 = (cljs.core._remove_watch[goog.typeOf(x__2391__auto____8379)]);
if(or__3824__auto____8380)
{return or__3824__auto____8380;
} else
{var or__3824__auto____8381 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____8381)
{return or__3824__auto____8381;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____8386 = coll;
if(and__3822__auto____8386)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____8386;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2391__auto____8387 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8388 = (cljs.core._as_transient[goog.typeOf(x__2391__auto____8387)]);
if(or__3824__auto____8388)
{return or__3824__auto____8388;
} else
{var or__3824__auto____8389 = (cljs.core._as_transient["_"]);
if(or__3824__auto____8389)
{return or__3824__auto____8389;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____8394 = tcoll;
if(and__3822__auto____8394)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____8394;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2391__auto____8395 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8396 = (cljs.core._conj_BANG_[goog.typeOf(x__2391__auto____8395)]);
if(or__3824__auto____8396)
{return or__3824__auto____8396;
} else
{var or__3824__auto____8397 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____8397)
{return or__3824__auto____8397;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____8402 = tcoll;
if(and__3822__auto____8402)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____8402;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2391__auto____8403 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8404 = (cljs.core._persistent_BANG_[goog.typeOf(x__2391__auto____8403)]);
if(or__3824__auto____8404)
{return or__3824__auto____8404;
} else
{var or__3824__auto____8405 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____8405)
{return or__3824__auto____8405;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____8410 = tcoll;
if(and__3822__auto____8410)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____8410;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2391__auto____8411 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8412 = (cljs.core._assoc_BANG_[goog.typeOf(x__2391__auto____8411)]);
if(or__3824__auto____8412)
{return or__3824__auto____8412;
} else
{var or__3824__auto____8413 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____8413)
{return or__3824__auto____8413;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____8418 = tcoll;
if(and__3822__auto____8418)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____8418;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2391__auto____8419 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8420 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2391__auto____8419)]);
if(or__3824__auto____8420)
{return or__3824__auto____8420;
} else
{var or__3824__auto____8421 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____8421)
{return or__3824__auto____8421;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____8426 = tcoll;
if(and__3822__auto____8426)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____8426;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2391__auto____8427 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8428 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2391__auto____8427)]);
if(or__3824__auto____8428)
{return or__3824__auto____8428;
} else
{var or__3824__auto____8429 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____8429)
{return or__3824__auto____8429;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____8434 = tcoll;
if(and__3822__auto____8434)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____8434;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2391__auto____8435 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8436 = (cljs.core._pop_BANG_[goog.typeOf(x__2391__auto____8435)]);
if(or__3824__auto____8436)
{return or__3824__auto____8436;
} else
{var or__3824__auto____8437 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____8437)
{return or__3824__auto____8437;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____8442 = tcoll;
if(and__3822__auto____8442)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____8442;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2391__auto____8443 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____8444 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2391__auto____8443)]);
if(or__3824__auto____8444)
{return or__3824__auto____8444;
} else
{var or__3824__auto____8445 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____8445)
{return or__3824__auto____8445;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____8450 = x;
if(and__3822__auto____8450)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____8450;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2391__auto____8451 = (((x == null))?null:x);
return (function (){var or__3824__auto____8452 = (cljs.core._compare[goog.typeOf(x__2391__auto____8451)]);
if(or__3824__auto____8452)
{return or__3824__auto____8452;
} else
{var or__3824__auto____8453 = (cljs.core._compare["_"]);
if(or__3824__auto____8453)
{return or__3824__auto____8453;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____8458 = coll;
if(and__3822__auto____8458)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____8458;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2391__auto____8459 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8460 = (cljs.core._drop_first[goog.typeOf(x__2391__auto____8459)]);
if(or__3824__auto____8460)
{return or__3824__auto____8460;
} else
{var or__3824__auto____8461 = (cljs.core._drop_first["_"]);
if(or__3824__auto____8461)
{return or__3824__auto____8461;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____8466 = coll;
if(and__3822__auto____8466)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____8466;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2391__auto____8467 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8468 = (cljs.core._chunked_first[goog.typeOf(x__2391__auto____8467)]);
if(or__3824__auto____8468)
{return or__3824__auto____8468;
} else
{var or__3824__auto____8469 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____8469)
{return or__3824__auto____8469;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____8474 = coll;
if(and__3822__auto____8474)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____8474;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2391__auto____8475 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8476 = (cljs.core._chunked_rest[goog.typeOf(x__2391__auto____8475)]);
if(or__3824__auto____8476)
{return or__3824__auto____8476;
} else
{var or__3824__auto____8477 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____8477)
{return or__3824__auto____8477;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____8482 = coll;
if(and__3822__auto____8482)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____8482;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2391__auto____8483 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8484 = (cljs.core._chunked_next[goog.typeOf(x__2391__auto____8483)]);
if(or__3824__auto____8484)
{return or__3824__auto____8484;
} else
{var or__3824__auto____8485 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____8485)
{return or__3824__auto____8485;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____8487 = (x === y);
if(or__3824__auto____8487)
{return or__3824__auto____8487;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__8488__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__8489 = y;
var G__8490 = cljs.core.first.call(null,more);
var G__8491 = cljs.core.next.call(null,more);
x = G__8489;
y = G__8490;
more = G__8491;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8488 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8488__delegate.call(this, x, y, more);
};
G__8488.cljs$lang$maxFixedArity = 2;
G__8488.cljs$lang$applyTo = (function (arglist__8492){
var x = cljs.core.first(arglist__8492);
var y = cljs.core.first(cljs.core.next(arglist__8492));
var more = cljs.core.rest(cljs.core.next(arglist__8492));
return G__8488__delegate(x, y, more);
});
G__8488.cljs$lang$arity$variadic = G__8488__delegate;
return G__8488;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__8493 = null;
var G__8493__2 = (function (o,k){
return null;
});
var G__8493__3 = (function (o,k,not_found){
return not_found;
});
G__8493 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__8493__2.call(this,o,k);
case 3:
return G__8493__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8493;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__8494 = null;
var G__8494__2 = (function (_,f){
return f.call(null);
});
var G__8494__3 = (function (_,f,start){
return start;
});
G__8494 = function(_,f,start){
switch(arguments.length){
case 2:
return G__8494__2.call(this,_,f);
case 3:
return G__8494__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8494;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__8495 = null;
var G__8495__2 = (function (_,n){
return null;
});
var G__8495__3 = (function (_,n,not_found){
return not_found;
});
G__8495 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__8495__2.call(this,_,n);
case 3:
return G__8495__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8495;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____8496 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____8496)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____8496;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__8509 = cljs.core._count.call(null,cicoll);
if((cnt__8509 === 0))
{return f.call(null);
} else
{var val__8510 = cljs.core._nth.call(null,cicoll,0);
var n__8511 = 1;
while(true){
if((n__8511 < cnt__8509))
{var nval__8512 = f.call(null,val__8510,cljs.core._nth.call(null,cicoll,n__8511));
if(cljs.core.reduced_QMARK_.call(null,nval__8512))
{return cljs.core.deref.call(null,nval__8512);
} else
{{
var G__8521 = nval__8512;
var G__8522 = (n__8511 + 1);
val__8510 = G__8521;
n__8511 = G__8522;
continue;
}
}
} else
{return val__8510;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__8513 = cljs.core._count.call(null,cicoll);
var val__8514 = val;
var n__8515 = 0;
while(true){
if((n__8515 < cnt__8513))
{var nval__8516 = f.call(null,val__8514,cljs.core._nth.call(null,cicoll,n__8515));
if(cljs.core.reduced_QMARK_.call(null,nval__8516))
{return cljs.core.deref.call(null,nval__8516);
} else
{{
var G__8523 = nval__8516;
var G__8524 = (n__8515 + 1);
val__8514 = G__8523;
n__8515 = G__8524;
continue;
}
}
} else
{return val__8514;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__8517 = cljs.core._count.call(null,cicoll);
var val__8518 = val;
var n__8519 = idx;
while(true){
if((n__8519 < cnt__8517))
{var nval__8520 = f.call(null,val__8518,cljs.core._nth.call(null,cicoll,n__8519));
if(cljs.core.reduced_QMARK_.call(null,nval__8520))
{return cljs.core.deref.call(null,nval__8520);
} else
{{
var G__8525 = nval__8520;
var G__8526 = (n__8519 + 1);
val__8518 = G__8525;
n__8519 = G__8526;
continue;
}
}
} else
{return val__8518;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__8539 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__8540 = (arr[0]);
var n__8541 = 1;
while(true){
if((n__8541 < cnt__8539))
{var nval__8542 = f.call(null,val__8540,(arr[n__8541]));
if(cljs.core.reduced_QMARK_.call(null,nval__8542))
{return cljs.core.deref.call(null,nval__8542);
} else
{{
var G__8551 = nval__8542;
var G__8552 = (n__8541 + 1);
val__8540 = G__8551;
n__8541 = G__8552;
continue;
}
}
} else
{return val__8540;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__8543 = arr.length;
var val__8544 = val;
var n__8545 = 0;
while(true){
if((n__8545 < cnt__8543))
{var nval__8546 = f.call(null,val__8544,(arr[n__8545]));
if(cljs.core.reduced_QMARK_.call(null,nval__8546))
{return cljs.core.deref.call(null,nval__8546);
} else
{{
var G__8553 = nval__8546;
var G__8554 = (n__8545 + 1);
val__8544 = G__8553;
n__8545 = G__8554;
continue;
}
}
} else
{return val__8544;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__8547 = arr.length;
var val__8548 = val;
var n__8549 = idx;
while(true){
if((n__8549 < cnt__8547))
{var nval__8550 = f.call(null,val__8548,(arr[n__8549]));
if(cljs.core.reduced_QMARK_.call(null,nval__8550))
{return cljs.core.deref.call(null,nval__8550);
} else
{{
var G__8555 = nval__8550;
var G__8556 = (n__8549 + 1);
val__8548 = G__8555;
n__8549 = G__8556;
continue;
}
}
} else
{return val__8548;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8557 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__8558 = this;
if(((this__8558.i + 1) < this__8558.a.length))
{return (new cljs.core.IndexedSeq(this__8558.a,(this__8558.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8559 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8560 = this;
var c__8561 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__8561 > 0))
{return (new cljs.core.RSeq(coll,(c__8561 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__8562 = this;
var this__8563 = this;
return cljs.core.pr_str.call(null,this__8563);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8564 = this;
if(cljs.core.counted_QMARK_.call(null,this__8564.a))
{return cljs.core.ci_reduce.call(null,this__8564.a,f,(this__8564.a[this__8564.i]),(this__8564.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__8564.a[this__8564.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8565 = this;
if(cljs.core.counted_QMARK_.call(null,this__8565.a))
{return cljs.core.ci_reduce.call(null,this__8565.a,f,start,this__8565.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8566 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8567 = this;
return (this__8567.a.length - this__8567.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__8568 = this;
return (this__8568.a[this__8568.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__8569 = this;
if(((this__8569.i + 1) < this__8569.a.length))
{return (new cljs.core.IndexedSeq(this__8569.a,(this__8569.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8570 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8571 = this;
var i__8572 = (n + this__8571.i);
if((i__8572 < this__8571.a.length))
{return (this__8571.a[i__8572]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8573 = this;
var i__8574 = (n + this__8573.i);
if((i__8574 < this__8573.a.length))
{return (this__8573.a[i__8574]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__8575 = null;
var G__8575__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8575__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8575 = function(array,f,start){
switch(arguments.length){
case 2:
return G__8575__2.call(this,array,f);
case 3:
return G__8575__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8575;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8576 = null;
var G__8576__2 = (function (array,k){
return (array[k]);
});
var G__8576__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8576 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__8576__2.call(this,array,k);
case 3:
return G__8576__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8576;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8577 = null;
var G__8577__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__8577__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__8577 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__8577__2.call(this,array,n);
case 3:
return G__8577__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8577;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8578 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8579 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__8580 = this;
var this__8581 = this;
return cljs.core.pr_str.call(null,this__8581);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8582 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8583 = this;
return (this__8583.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8584 = this;
return cljs.core._nth.call(null,this__8584.ci,this__8584.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8585 = this;
if((this__8585.i > 0))
{return (new cljs.core.RSeq(this__8585.ci,(this__8585.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8586 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__8587 = this;
return (new cljs.core.RSeq(this__8587.ci,this__8587.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8588 = this;
return this__8588.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8592__8593 = coll;
if(G__8592__8593)
{if((function (){var or__3824__auto____8594 = (G__8592__8593.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____8594)
{return or__3824__auto____8594;
} else
{return G__8592__8593.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__8592__8593.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__8592__8593);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__8592__8593);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8599__8600 = coll;
if(G__8599__8600)
{if((function (){var or__3824__auto____8601 = (G__8599__8600.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8601)
{return or__3824__auto____8601;
} else
{return G__8599__8600.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8599__8600.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8599__8600);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8599__8600);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__8602 = cljs.core.seq.call(null,coll);
if((s__8602 == null))
{return null;
} else
{return cljs.core._first.call(null,s__8602);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__8607__8608 = coll;
if(G__8607__8608)
{if((function (){var or__3824__auto____8609 = (G__8607__8608.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8609)
{return or__3824__auto____8609;
} else
{return G__8607__8608.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8607__8608.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8607__8608);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8607__8608);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__8610 = cljs.core.seq.call(null,coll);
if(!((s__8610 == null)))
{return cljs.core._rest.call(null,s__8610);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8614__8615 = coll;
if(G__8614__8615)
{if((function (){var or__3824__auto____8616 = (G__8614__8615.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____8616)
{return or__3824__auto____8616;
} else
{return G__8614__8615.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__8614__8615.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__8614__8615);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__8614__8615);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__8618 = cljs.core.next.call(null,s);
if(!((sn__8618 == null)))
{{
var G__8619 = sn__8618;
s = G__8619;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__8620__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8621 = conj.call(null,coll,x);
var G__8622 = cljs.core.first.call(null,xs);
var G__8623 = cljs.core.next.call(null,xs);
coll = G__8621;
x = G__8622;
xs = G__8623;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8620 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8620__delegate.call(this, coll, x, xs);
};
G__8620.cljs$lang$maxFixedArity = 2;
G__8620.cljs$lang$applyTo = (function (arglist__8624){
var coll = cljs.core.first(arglist__8624);
var x = cljs.core.first(cljs.core.next(arglist__8624));
var xs = cljs.core.rest(cljs.core.next(arglist__8624));
return G__8620__delegate(coll, x, xs);
});
G__8620.cljs$lang$arity$variadic = G__8620__delegate;
return G__8620;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__8627 = cljs.core.seq.call(null,coll);
var acc__8628 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__8627))
{return (acc__8628 + cljs.core._count.call(null,s__8627));
} else
{{
var G__8629 = cljs.core.next.call(null,s__8627);
var G__8630 = (acc__8628 + 1);
s__8627 = G__8629;
acc__8628 = G__8630;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__8637__8638 = coll;
if(G__8637__8638)
{if((function (){var or__3824__auto____8639 = (G__8637__8638.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8639)
{return or__3824__auto____8639;
} else
{return G__8637__8638.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8637__8638.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8637__8638);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8637__8638);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__8640__8641 = coll;
if(G__8640__8641)
{if((function (){var or__3824__auto____8642 = (G__8640__8641.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8642)
{return or__3824__auto____8642;
} else
{return G__8640__8641.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8640__8641.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8640__8641);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8640__8641);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__8645__delegate = function (coll,k,v,kvs){
while(true){
var ret__8644 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__8646 = ret__8644;
var G__8647 = cljs.core.first.call(null,kvs);
var G__8648 = cljs.core.second.call(null,kvs);
var G__8649 = cljs.core.nnext.call(null,kvs);
coll = G__8646;
k = G__8647;
v = G__8648;
kvs = G__8649;
continue;
}
} else
{return ret__8644;
}
break;
}
};
var G__8645 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8645__delegate.call(this, coll, k, v, kvs);
};
G__8645.cljs$lang$maxFixedArity = 3;
G__8645.cljs$lang$applyTo = (function (arglist__8650){
var coll = cljs.core.first(arglist__8650);
var k = cljs.core.first(cljs.core.next(arglist__8650));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8650)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8650)));
return G__8645__delegate(coll, k, v, kvs);
});
G__8645.cljs$lang$arity$variadic = G__8645__delegate;
return G__8645;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__8653__delegate = function (coll,k,ks){
while(true){
var ret__8652 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__8654 = ret__8652;
var G__8655 = cljs.core.first.call(null,ks);
var G__8656 = cljs.core.next.call(null,ks);
coll = G__8654;
k = G__8655;
ks = G__8656;
continue;
}
} else
{return ret__8652;
}
break;
}
};
var G__8653 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8653__delegate.call(this, coll, k, ks);
};
G__8653.cljs$lang$maxFixedArity = 2;
G__8653.cljs$lang$applyTo = (function (arglist__8657){
var coll = cljs.core.first(arglist__8657);
var k = cljs.core.first(cljs.core.next(arglist__8657));
var ks = cljs.core.rest(cljs.core.next(arglist__8657));
return G__8653__delegate(coll, k, ks);
});
G__8653.cljs$lang$arity$variadic = G__8653__delegate;
return G__8653;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__8661__8662 = o;
if(G__8661__8662)
{if((function (){var or__3824__auto____8663 = (G__8661__8662.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____8663)
{return or__3824__auto____8663;
} else
{return G__8661__8662.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__8661__8662.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8661__8662);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8661__8662);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__8666__delegate = function (coll,k,ks){
while(true){
var ret__8665 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__8667 = ret__8665;
var G__8668 = cljs.core.first.call(null,ks);
var G__8669 = cljs.core.next.call(null,ks);
coll = G__8667;
k = G__8668;
ks = G__8669;
continue;
}
} else
{return ret__8665;
}
break;
}
};
var G__8666 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8666__delegate.call(this, coll, k, ks);
};
G__8666.cljs$lang$maxFixedArity = 2;
G__8666.cljs$lang$applyTo = (function (arglist__8670){
var coll = cljs.core.first(arglist__8670);
var k = cljs.core.first(cljs.core.next(arglist__8670));
var ks = cljs.core.rest(cljs.core.next(arglist__8670));
return G__8666__delegate(coll, k, ks);
});
G__8666.cljs$lang$arity$variadic = G__8666__delegate;
return G__8666;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__8672 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__8672);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__8672;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__8674 = (cljs.core.string_hash_cache[k]);
if(!((h__8674 == null)))
{return h__8674;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____8676 = goog.isString(o);
if(and__3822__auto____8676)
{return check_cache;
} else
{return and__3822__auto____8676;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8680__8681 = x;
if(G__8680__8681)
{if((function (){var or__3824__auto____8682 = (G__8680__8681.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____8682)
{return or__3824__auto____8682;
} else
{return G__8680__8681.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__8680__8681.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__8680__8681);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__8680__8681);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8686__8687 = x;
if(G__8686__8687)
{if((function (){var or__3824__auto____8688 = (G__8686__8687.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____8688)
{return or__3824__auto____8688;
} else
{return G__8686__8687.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__8686__8687.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8686__8687);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8686__8687);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__8692__8693 = x;
if(G__8692__8693)
{if((function (){var or__3824__auto____8694 = (G__8692__8693.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____8694)
{return or__3824__auto____8694;
} else
{return G__8692__8693.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__8692__8693.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__8692__8693);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__8692__8693);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__8698__8699 = x;
if(G__8698__8699)
{if((function (){var or__3824__auto____8700 = (G__8698__8699.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____8700)
{return or__3824__auto____8700;
} else
{return G__8698__8699.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__8698__8699.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8698__8699);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8698__8699);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__8704__8705 = x;
if(G__8704__8705)
{if((function (){var or__3824__auto____8706 = (G__8704__8705.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____8706)
{return or__3824__auto____8706;
} else
{return G__8704__8705.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__8704__8705.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__8704__8705);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__8704__8705);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__8710__8711 = x;
if(G__8710__8711)
{if((function (){var or__3824__auto____8712 = (G__8710__8711.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8712)
{return or__3824__auto____8712;
} else
{return G__8710__8711.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8710__8711.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8710__8711);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8710__8711);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__8716__8717 = x;
if(G__8716__8717)
{if((function (){var or__3824__auto____8718 = (G__8716__8717.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8718)
{return or__3824__auto____8718;
} else
{return G__8716__8717.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8716__8717.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8716__8717);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8716__8717);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8722__8723 = x;
if(G__8722__8723)
{if((function (){var or__3824__auto____8724 = (G__8722__8723.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____8724)
{return or__3824__auto____8724;
} else
{return G__8722__8723.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__8722__8723.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8722__8723);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8722__8723);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__8728__8729 = x;
if(G__8728__8729)
{if((function (){var or__3824__auto____8730 = (G__8728__8729.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____8730)
{return or__3824__auto____8730;
} else
{return G__8728__8729.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__8728__8729.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__8728__8729);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__8728__8729);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__8734__8735 = x;
if(G__8734__8735)
{if(cljs.core.truth_((function (){var or__3824__auto____8736 = null;
if(cljs.core.truth_(or__3824__auto____8736))
{return or__3824__auto____8736;
} else
{return G__8734__8735.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__8734__8735.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__8734__8735);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__8734__8735);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__8737__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__8737 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8737__delegate.call(this, keyvals);
};
G__8737.cljs$lang$maxFixedArity = 0;
G__8737.cljs$lang$applyTo = (function (arglist__8738){
var keyvals = cljs.core.seq(arglist__8738);;
return G__8737__delegate(keyvals);
});
G__8737.cljs$lang$arity$variadic = G__8737__delegate;
return G__8737;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__8740 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__8740.push(key);
}));
return keys__8740;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__8744 = i;
var j__8745 = j;
var len__8746 = len;
while(true){
if((len__8746 === 0))
{return to;
} else
{(to[j__8745] = (from[i__8744]));
{
var G__8747 = (i__8744 + 1);
var G__8748 = (j__8745 + 1);
var G__8749 = (len__8746 - 1);
i__8744 = G__8747;
j__8745 = G__8748;
len__8746 = G__8749;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__8753 = (i + (len - 1));
var j__8754 = (j + (len - 1));
var len__8755 = len;
while(true){
if((len__8755 === 0))
{return to;
} else
{(to[j__8754] = (from[i__8753]));
{
var G__8756 = (i__8753 - 1);
var G__8757 = (j__8754 - 1);
var G__8758 = (len__8755 - 1);
i__8753 = G__8756;
j__8754 = G__8757;
len__8755 = G__8758;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__8762__8763 = s;
if(G__8762__8763)
{if((function (){var or__3824__auto____8764 = (G__8762__8763.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8764)
{return or__3824__auto____8764;
} else
{return G__8762__8763.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8762__8763.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8762__8763);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8762__8763);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__8768__8769 = s;
if(G__8768__8769)
{if((function (){var or__3824__auto____8770 = (G__8768__8769.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____8770)
{return or__3824__auto____8770;
} else
{return G__8768__8769.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__8768__8769.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8768__8769);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8768__8769);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____8773 = goog.isString(x);
if(and__3822__auto____8773)
{return !((function (){var or__3824__auto____8774 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____8774)
{return or__3824__auto____8774;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____8773;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____8776 = goog.isString(x);
if(and__3822__auto____8776)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____8776;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____8778 = goog.isString(x);
if(and__3822__auto____8778)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____8778;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____8783 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____8783)
{return or__3824__auto____8783;
} else
{var G__8784__8785 = f;
if(G__8784__8785)
{if((function (){var or__3824__auto____8786 = (G__8784__8785.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____8786)
{return or__3824__auto____8786;
} else
{return G__8784__8785.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__8784__8785.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__8784__8785);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__8784__8785);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____8788 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____8788)
{return (n == n.toFixed());
} else
{return and__3822__auto____8788;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____8791 = coll;
if(cljs.core.truth_(and__3822__auto____8791))
{var and__3822__auto____8792 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____8792)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____8792;
}
} else
{return and__3822__auto____8791;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__8801__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__8797 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__8798 = more;
while(true){
var x__8799 = cljs.core.first.call(null,xs__8798);
var etc__8800 = cljs.core.next.call(null,xs__8798);
if(cljs.core.truth_(xs__8798))
{if(cljs.core.contains_QMARK_.call(null,s__8797,x__8799))
{return false;
} else
{{
var G__8802 = cljs.core.conj.call(null,s__8797,x__8799);
var G__8803 = etc__8800;
s__8797 = G__8802;
xs__8798 = G__8803;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__8801 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8801__delegate.call(this, x, y, more);
};
G__8801.cljs$lang$maxFixedArity = 2;
G__8801.cljs$lang$applyTo = (function (arglist__8804){
var x = cljs.core.first(arglist__8804);
var y = cljs.core.first(cljs.core.next(arglist__8804));
var more = cljs.core.rest(cljs.core.next(arglist__8804));
return G__8801__delegate(x, y, more);
});
G__8801.cljs$lang$arity$variadic = G__8801__delegate;
return G__8801;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__8808__8809 = x;
if(G__8808__8809)
{if(cljs.core.truth_((function (){var or__3824__auto____8810 = null;
if(cljs.core.truth_(or__3824__auto____8810))
{return or__3824__auto____8810;
} else
{return G__8808__8809.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__8808__8809.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__8808__8809);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__8808__8809);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__8815 = cljs.core.count.call(null,xs);
var yl__8816 = cljs.core.count.call(null,ys);
if((xl__8815 < yl__8816))
{return -1;
} else
{if((xl__8815 > yl__8816))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__8815,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__8817 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____8818 = (d__8817 === 0);
if(and__3822__auto____8818)
{return ((n + 1) < len);
} else
{return and__3822__auto____8818;
}
})())
{{
var G__8819 = xs;
var G__8820 = ys;
var G__8821 = len;
var G__8822 = (n + 1);
xs = G__8819;
ys = G__8820;
len = G__8821;
n = G__8822;
continue;
}
} else
{return d__8817;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__8824 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__8824))
{return r__8824;
} else
{if(cljs.core.truth_(r__8824))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__8826 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__8826,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8826);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____8832 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8832)
{var s__8833 = temp__3971__auto____8832;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8833),cljs.core.next.call(null,s__8833));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__8834 = val;
var coll__8835 = cljs.core.seq.call(null,coll);
while(true){
if(coll__8835)
{var nval__8836 = f.call(null,val__8834,cljs.core.first.call(null,coll__8835));
if(cljs.core.reduced_QMARK_.call(null,nval__8836))
{return cljs.core.deref.call(null,nval__8836);
} else
{{
var G__8837 = nval__8836;
var G__8838 = cljs.core.next.call(null,coll__8835);
val__8834 = G__8837;
coll__8835 = G__8838;
continue;
}
}
} else
{return val__8834;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__8840 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__8840);
return cljs.core.vec.call(null,a__8840);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__8847__8848 = coll;
if(G__8847__8848)
{if((function (){var or__3824__auto____8849 = (G__8847__8848.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8849)
{return or__3824__auto____8849;
} else
{return G__8847__8848.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8847__8848.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8847__8848);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8847__8848);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__8850__8851 = coll;
if(G__8850__8851)
{if((function (){var or__3824__auto____8852 = (G__8850__8851.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8852)
{return or__3824__auto____8852;
} else
{return G__8850__8851.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8850__8851.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8850__8851);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8850__8851);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__8853 = this;
return this__8853.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__8854__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8854 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8854__delegate.call(this, x, y, more);
};
G__8854.cljs$lang$maxFixedArity = 2;
G__8854.cljs$lang$applyTo = (function (arglist__8855){
var x = cljs.core.first(arglist__8855);
var y = cljs.core.first(cljs.core.next(arglist__8855));
var more = cljs.core.rest(cljs.core.next(arglist__8855));
return G__8854__delegate(x, y, more);
});
G__8854.cljs$lang$arity$variadic = G__8854__delegate;
return G__8854;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__8856__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8856 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8856__delegate.call(this, x, y, more);
};
G__8856.cljs$lang$maxFixedArity = 2;
G__8856.cljs$lang$applyTo = (function (arglist__8857){
var x = cljs.core.first(arglist__8857);
var y = cljs.core.first(cljs.core.next(arglist__8857));
var more = cljs.core.rest(cljs.core.next(arglist__8857));
return G__8856__delegate(x, y, more);
});
G__8856.cljs$lang$arity$variadic = G__8856__delegate;
return G__8856;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__8858__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8858 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8858__delegate.call(this, x, y, more);
};
G__8858.cljs$lang$maxFixedArity = 2;
G__8858.cljs$lang$applyTo = (function (arglist__8859){
var x = cljs.core.first(arglist__8859);
var y = cljs.core.first(cljs.core.next(arglist__8859));
var more = cljs.core.rest(cljs.core.next(arglist__8859));
return G__8858__delegate(x, y, more);
});
G__8858.cljs$lang$arity$variadic = G__8858__delegate;
return G__8858;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__8860__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8860 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8860__delegate.call(this, x, y, more);
};
G__8860.cljs$lang$maxFixedArity = 2;
G__8860.cljs$lang$applyTo = (function (arglist__8861){
var x = cljs.core.first(arglist__8861);
var y = cljs.core.first(cljs.core.next(arglist__8861));
var more = cljs.core.rest(cljs.core.next(arglist__8861));
return G__8860__delegate(x, y, more);
});
G__8860.cljs$lang$arity$variadic = G__8860__delegate;
return G__8860;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__8862__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__8863 = y;
var G__8864 = cljs.core.first.call(null,more);
var G__8865 = cljs.core.next.call(null,more);
x = G__8863;
y = G__8864;
more = G__8865;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8862 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8862__delegate.call(this, x, y, more);
};
G__8862.cljs$lang$maxFixedArity = 2;
G__8862.cljs$lang$applyTo = (function (arglist__8866){
var x = cljs.core.first(arglist__8866);
var y = cljs.core.first(cljs.core.next(arglist__8866));
var more = cljs.core.rest(cljs.core.next(arglist__8866));
return G__8862__delegate(x, y, more);
});
G__8862.cljs$lang$arity$variadic = G__8862__delegate;
return G__8862;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__8867__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__8868 = y;
var G__8869 = cljs.core.first.call(null,more);
var G__8870 = cljs.core.next.call(null,more);
x = G__8868;
y = G__8869;
more = G__8870;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8867 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8867__delegate.call(this, x, y, more);
};
G__8867.cljs$lang$maxFixedArity = 2;
G__8867.cljs$lang$applyTo = (function (arglist__8871){
var x = cljs.core.first(arglist__8871);
var y = cljs.core.first(cljs.core.next(arglist__8871));
var more = cljs.core.rest(cljs.core.next(arglist__8871));
return G__8867__delegate(x, y, more);
});
G__8867.cljs$lang$arity$variadic = G__8867__delegate;
return G__8867;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__8872__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__8873 = y;
var G__8874 = cljs.core.first.call(null,more);
var G__8875 = cljs.core.next.call(null,more);
x = G__8873;
y = G__8874;
more = G__8875;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8872 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8872__delegate.call(this, x, y, more);
};
G__8872.cljs$lang$maxFixedArity = 2;
G__8872.cljs$lang$applyTo = (function (arglist__8876){
var x = cljs.core.first(arglist__8876);
var y = cljs.core.first(cljs.core.next(arglist__8876));
var more = cljs.core.rest(cljs.core.next(arglist__8876));
return G__8872__delegate(x, y, more);
});
G__8872.cljs$lang$arity$variadic = G__8872__delegate;
return G__8872;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__8877__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__8878 = y;
var G__8879 = cljs.core.first.call(null,more);
var G__8880 = cljs.core.next.call(null,more);
x = G__8878;
y = G__8879;
more = G__8880;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8877 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8877__delegate.call(this, x, y, more);
};
G__8877.cljs$lang$maxFixedArity = 2;
G__8877.cljs$lang$applyTo = (function (arglist__8881){
var x = cljs.core.first(arglist__8881);
var y = cljs.core.first(cljs.core.next(arglist__8881));
var more = cljs.core.rest(cljs.core.next(arglist__8881));
return G__8877__delegate(x, y, more);
});
G__8877.cljs$lang$arity$variadic = G__8877__delegate;
return G__8877;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__8882__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8882 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8882__delegate.call(this, x, y, more);
};
G__8882.cljs$lang$maxFixedArity = 2;
G__8882.cljs$lang$applyTo = (function (arglist__8883){
var x = cljs.core.first(arglist__8883);
var y = cljs.core.first(cljs.core.next(arglist__8883));
var more = cljs.core.rest(cljs.core.next(arglist__8883));
return G__8882__delegate(x, y, more);
});
G__8882.cljs$lang$arity$variadic = G__8882__delegate;
return G__8882;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__8884__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8884 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8884__delegate.call(this, x, y, more);
};
G__8884.cljs$lang$maxFixedArity = 2;
G__8884.cljs$lang$applyTo = (function (arglist__8885){
var x = cljs.core.first(arglist__8885);
var y = cljs.core.first(cljs.core.next(arglist__8885));
var more = cljs.core.rest(cljs.core.next(arglist__8885));
return G__8884__delegate(x, y, more);
});
G__8884.cljs$lang$arity$variadic = G__8884__delegate;
return G__8884;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__8887 = (n % d);
return cljs.core.fix.call(null,((n - rem__8887) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8889 = cljs.core.quot.call(null,n,d);
return (n - (d * q__8889));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__8892 = (v - ((v >> 1) & 1431655765));
var v__8893 = ((v__8892 & 858993459) + ((v__8892 >> 2) & 858993459));
return ((((v__8893 + (v__8893 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__8894__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__8895 = y;
var G__8896 = cljs.core.first.call(null,more);
var G__8897 = cljs.core.next.call(null,more);
x = G__8895;
y = G__8896;
more = G__8897;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8894 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8894__delegate.call(this, x, y, more);
};
G__8894.cljs$lang$maxFixedArity = 2;
G__8894.cljs$lang$applyTo = (function (arglist__8898){
var x = cljs.core.first(arglist__8898);
var y = cljs.core.first(cljs.core.next(arglist__8898));
var more = cljs.core.rest(cljs.core.next(arglist__8898));
return G__8894__delegate(x, y, more);
});
G__8894.cljs$lang$arity$variadic = G__8894__delegate;
return G__8894;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__8902 = n;
var xs__8903 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8904 = xs__8903;
if(and__3822__auto____8904)
{return (n__8902 > 0);
} else
{return and__3822__auto____8904;
}
})()))
{{
var G__8905 = (n__8902 - 1);
var G__8906 = cljs.core.next.call(null,xs__8903);
n__8902 = G__8905;
xs__8903 = G__8906;
continue;
}
} else
{return xs__8903;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__8907__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8908 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8909 = cljs.core.next.call(null,more);
sb = G__8908;
more = G__8909;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8907 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8907__delegate.call(this, x, ys);
};
G__8907.cljs$lang$maxFixedArity = 1;
G__8907.cljs$lang$applyTo = (function (arglist__8910){
var x = cljs.core.first(arglist__8910);
var ys = cljs.core.rest(arglist__8910);
return G__8907__delegate(x, ys);
});
G__8907.cljs$lang$arity$variadic = G__8907__delegate;
return G__8907;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__8911__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8912 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__8913 = cljs.core.next.call(null,more);
sb = G__8912;
more = G__8913;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__8911 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8911__delegate.call(this, x, ys);
};
G__8911.cljs$lang$maxFixedArity = 1;
G__8911.cljs$lang$applyTo = (function (arglist__8914){
var x = cljs.core.first(arglist__8914);
var ys = cljs.core.rest(arglist__8914);
return G__8911__delegate(x, ys);
});
G__8911.cljs$lang$arity$variadic = G__8911__delegate;
return G__8911;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__8915){
var fmt = cljs.core.first(arglist__8915);
var args = cljs.core.rest(arglist__8915);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8918 = cljs.core.seq.call(null,x);
var ys__8919 = cljs.core.seq.call(null,y);
while(true){
if((xs__8918 == null))
{return (ys__8919 == null);
} else
{if((ys__8919 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8918),cljs.core.first.call(null,ys__8919)))
{{
var G__8920 = cljs.core.next.call(null,xs__8918);
var G__8921 = cljs.core.next.call(null,ys__8919);
xs__8918 = G__8920;
ys__8919 = G__8921;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__8922_SHARP_,p2__8923_SHARP_){
return cljs.core.hash_combine.call(null,p1__8922_SHARP_,cljs.core.hash.call(null,p2__8923_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__8927 = 0;
var s__8928 = cljs.core.seq.call(null,m);
while(true){
if(s__8928)
{var e__8929 = cljs.core.first.call(null,s__8928);
{
var G__8930 = ((h__8927 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__8929)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__8929)))) % 4503599627370496);
var G__8931 = cljs.core.next.call(null,s__8928);
h__8927 = G__8930;
s__8928 = G__8931;
continue;
}
} else
{return h__8927;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__8935 = 0;
var s__8936 = cljs.core.seq.call(null,s);
while(true){
if(s__8936)
{var e__8937 = cljs.core.first.call(null,s__8936);
{
var G__8938 = ((h__8935 + cljs.core.hash.call(null,e__8937)) % 4503599627370496);
var G__8939 = cljs.core.next.call(null,s__8936);
h__8935 = G__8938;
s__8936 = G__8939;
continue;
}
} else
{return h__8935;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8960__8961 = cljs.core.seq.call(null,fn_map);
if(G__8960__8961)
{var G__8963__8965 = cljs.core.first.call(null,G__8960__8961);
var vec__8964__8966 = G__8963__8965;
var key_name__8967 = cljs.core.nth.call(null,vec__8964__8966,0,null);
var f__8968 = cljs.core.nth.call(null,vec__8964__8966,1,null);
var G__8960__8969 = G__8960__8961;
var G__8963__8970 = G__8963__8965;
var G__8960__8971 = G__8960__8969;
while(true){
var vec__8972__8973 = G__8963__8970;
var key_name__8974 = cljs.core.nth.call(null,vec__8972__8973,0,null);
var f__8975 = cljs.core.nth.call(null,vec__8972__8973,1,null);
var G__8960__8976 = G__8960__8971;
var str_name__8977 = cljs.core.name.call(null,key_name__8974);
(obj[str_name__8977] = f__8975);
var temp__3974__auto____8978 = cljs.core.next.call(null,G__8960__8976);
if(temp__3974__auto____8978)
{var G__8960__8979 = temp__3974__auto____8978;
{
var G__8980 = cljs.core.first.call(null,G__8960__8979);
var G__8981 = G__8960__8979;
G__8963__8970 = G__8980;
G__8960__8971 = G__8981;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8982 = this;
var h__2220__auto____8983 = this__8982.__hash;
if(!((h__2220__auto____8983 == null)))
{return h__2220__auto____8983;
} else
{var h__2220__auto____8984 = cljs.core.hash_coll.call(null,coll);
this__8982.__hash = h__2220__auto____8984;
return h__2220__auto____8984;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8985 = this;
if((this__8985.count === 1))
{return null;
} else
{return this__8985.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8986 = this;
return (new cljs.core.List(this__8986.meta,o,coll,(this__8986.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__8987 = this;
var this__8988 = this;
return cljs.core.pr_str.call(null,this__8988);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8989 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8990 = this;
return this__8990.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8991 = this;
return this__8991.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8992 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8993 = this;
return this__8993.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8994 = this;
if((this__8994.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__8994.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8995 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8996 = this;
return (new cljs.core.List(meta,this__8996.first,this__8996.rest,this__8996.count,this__8996.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8997 = this;
return this__8997.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8998 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8999 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9000 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9001 = this;
return (new cljs.core.List(this__9001.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__9002 = this;
var this__9003 = this;
return cljs.core.pr_str.call(null,this__9003);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9004 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9005 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9006 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9007 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9008 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9009 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9010 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9011 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9012 = this;
return this__9012.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9013 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__9017__9018 = coll;
if(G__9017__9018)
{if((function (){var or__3824__auto____9019 = (G__9017__9018.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____9019)
{return or__3824__auto____9019;
} else
{return G__9017__9018.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__9017__9018.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9017__9018);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9017__9018);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__9020__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__9020 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9020__delegate.call(this, x, y, z, items);
};
G__9020.cljs$lang$maxFixedArity = 3;
G__9020.cljs$lang$applyTo = (function (arglist__9021){
var x = cljs.core.first(arglist__9021);
var y = cljs.core.first(cljs.core.next(arglist__9021));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9021)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9021)));
return G__9020__delegate(x, y, z, items);
});
G__9020.cljs$lang$arity$variadic = G__9020__delegate;
return G__9020;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9022 = this;
var h__2220__auto____9023 = this__9022.__hash;
if(!((h__2220__auto____9023 == null)))
{return h__2220__auto____9023;
} else
{var h__2220__auto____9024 = cljs.core.hash_coll.call(null,coll);
this__9022.__hash = h__2220__auto____9024;
return h__2220__auto____9024;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9025 = this;
if((this__9025.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__9025.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9026 = this;
return (new cljs.core.Cons(null,o,coll,this__9026.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__9027 = this;
var this__9028 = this;
return cljs.core.pr_str.call(null,this__9028);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9029 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9030 = this;
return this__9030.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9031 = this;
if((this__9031.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__9031.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9032 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9033 = this;
return (new cljs.core.Cons(meta,this__9033.first,this__9033.rest,this__9033.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9034 = this;
return this__9034.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9035 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9035.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____9040 = (coll == null);
if(or__3824__auto____9040)
{return or__3824__auto____9040;
} else
{var G__9041__9042 = coll;
if(G__9041__9042)
{if((function (){var or__3824__auto____9043 = (G__9041__9042.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9043)
{return or__3824__auto____9043;
} else
{return G__9041__9042.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9041__9042.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9041__9042);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9041__9042);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__9047__9048 = x;
if(G__9047__9048)
{if((function (){var or__3824__auto____9049 = (G__9047__9048.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____9049)
{return or__3824__auto____9049;
} else
{return G__9047__9048.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__9047__9048.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9047__9048);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9047__9048);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__9050 = null;
var G__9050__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9050__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9050 = function(string,f,start){
switch(arguments.length){
case 2:
return G__9050__2.call(this,string,f);
case 3:
return G__9050__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9050;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9051 = null;
var G__9051__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9051__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9051 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__9051__2.call(this,string,k);
case 3:
return G__9051__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9051;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9052 = null;
var G__9052__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__9052__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9052 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__9052__2.call(this,string,n);
case 3:
return G__9052__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9052;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__9064 = null;
var G__9064__2 = (function (this_sym9055,coll){
var this__9057 = this;
var this_sym9055__9058 = this;
var ___9059 = this_sym9055__9058;
if((coll == null))
{return null;
} else
{var strobj__9060 = coll.strobj;
if((strobj__9060 == null))
{return cljs.core._lookup.call(null,coll,this__9057.k,null);
} else
{return (strobj__9060[this__9057.k]);
}
}
});
var G__9064__3 = (function (this_sym9056,coll,not_found){
var this__9057 = this;
var this_sym9056__9061 = this;
var ___9062 = this_sym9056__9061;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__9057.k,not_found);
}
});
G__9064 = function(this_sym9056,coll,not_found){
switch(arguments.length){
case 2:
return G__9064__2.call(this,this_sym9056,coll);
case 3:
return G__9064__3.call(this,this_sym9056,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9064;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym9053,args9054){
var this__9063 = this;
return this_sym9053.call.apply(this_sym9053,[this_sym9053].concat(args9054.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__9073 = null;
var G__9073__2 = (function (this_sym9067,coll){
var this_sym9067__9069 = this;
var this__9070 = this_sym9067__9069;
return cljs.core._lookup.call(null,coll,this__9070.toString(),null);
});
var G__9073__3 = (function (this_sym9068,coll,not_found){
var this_sym9068__9071 = this;
var this__9072 = this_sym9068__9071;
return cljs.core._lookup.call(null,coll,this__9072.toString(),not_found);
});
G__9073 = function(this_sym9068,coll,not_found){
switch(arguments.length){
case 2:
return G__9073__2.call(this,this_sym9068,coll);
case 3:
return G__9073__3.call(this,this_sym9068,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9073;
})()
;
String.prototype.apply = (function (this_sym9065,args9066){
return this_sym9065.call.apply(this_sym9065,[this_sym9065].concat(args9066.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__9075 = lazy_seq.x;
if(lazy_seq.realized)
{return x__9075;
} else
{lazy_seq.x = x__9075.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9076 = this;
var h__2220__auto____9077 = this__9076.__hash;
if(!((h__2220__auto____9077 == null)))
{return h__2220__auto____9077;
} else
{var h__2220__auto____9078 = cljs.core.hash_coll.call(null,coll);
this__9076.__hash = h__2220__auto____9078;
return h__2220__auto____9078;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9079 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9080 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__9081 = this;
var this__9082 = this;
return cljs.core.pr_str.call(null,this__9082);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9083 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9084 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9085 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9086 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9087 = this;
return (new cljs.core.LazySeq(meta,this__9087.realized,this__9087.x,this__9087.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9088 = this;
return this__9088.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9089 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9089.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9090 = this;
return this__9090.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__9091 = this;
var ___9092 = this;
(this__9091.buf[this__9091.end] = o);
return this__9091.end = (this__9091.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__9093 = this;
var ___9094 = this;
var ret__9095 = (new cljs.core.ArrayChunk(this__9093.buf,0,this__9093.end));
this__9093.buf = null;
return ret__9095;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9096 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__9096.arr[this__9096.off]),(this__9096.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9097 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__9097.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__9098 = this;
if((this__9098.off === this__9098.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__9098.arr,(this__9098.off + 1),this__9098.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__9099 = this;
return (this__9099.arr[(this__9099.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__9100 = this;
if((function (){var and__3822__auto____9101 = (i >= 0);
if(and__3822__auto____9101)
{return (i < (this__9100.end - this__9100.off));
} else
{return and__3822__auto____9101;
}
})())
{return (this__9100.arr[(this__9100.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9102 = this;
return (this__9102.end - this__9102.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__9103 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9104 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9105 = this;
return cljs.core._nth.call(null,this__9105.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9106 = this;
if((cljs.core._count.call(null,this__9106.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__9106.chunk),this__9106.more,this__9106.meta));
} else
{if((this__9106.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9106.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9107 = this;
if((this__9107.more == null))
{return null;
} else
{return this__9107.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9108 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9109 = this;
return (new cljs.core.ChunkedCons(this__9109.chunk,this__9109.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9110 = this;
return this__9110.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9111 = this;
return this__9111.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9112 = this;
if((this__9112.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9112.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__9116__9117 = s;
if(G__9116__9117)
{if(cljs.core.truth_((function (){var or__3824__auto____9118 = null;
if(cljs.core.truth_(or__3824__auto____9118))
{return or__3824__auto____9118;
} else
{return G__9116__9117.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__9116__9117.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9116__9117);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9116__9117);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__9121 = [];
var s__9122 = s;
while(true){
if(cljs.core.seq.call(null,s__9122))
{ary__9121.push(cljs.core.first.call(null,s__9122));
{
var G__9123 = cljs.core.next.call(null,s__9122);
s__9122 = G__9123;
continue;
}
} else
{return ary__9121;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__9127 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__9128 = 0;
var xs__9129 = cljs.core.seq.call(null,coll);
while(true){
if(xs__9129)
{(ret__9127[i__9128] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__9129)));
{
var G__9130 = (i__9128 + 1);
var G__9131 = cljs.core.next.call(null,xs__9129);
i__9128 = G__9130;
xs__9129 = G__9131;
continue;
}
} else
{}
break;
}
return ret__9127;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__9139 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9140 = cljs.core.seq.call(null,init_val_or_seq);
var i__9141 = 0;
var s__9142 = s__9140;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9143 = s__9142;
if(and__3822__auto____9143)
{return (i__9141 < size);
} else
{return and__3822__auto____9143;
}
})()))
{(a__9139[i__9141] = cljs.core.first.call(null,s__9142));
{
var G__9146 = (i__9141 + 1);
var G__9147 = cljs.core.next.call(null,s__9142);
i__9141 = G__9146;
s__9142 = G__9147;
continue;
}
} else
{return a__9139;
}
break;
}
} else
{var n__2555__auto____9144 = size;
var i__9145 = 0;
while(true){
if((i__9145 < n__2555__auto____9144))
{(a__9139[i__9145] = init_val_or_seq);
{
var G__9148 = (i__9145 + 1);
i__9145 = G__9148;
continue;
}
} else
{}
break;
}
return a__9139;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__9156 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9157 = cljs.core.seq.call(null,init_val_or_seq);
var i__9158 = 0;
var s__9159 = s__9157;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9160 = s__9159;
if(and__3822__auto____9160)
{return (i__9158 < size);
} else
{return and__3822__auto____9160;
}
})()))
{(a__9156[i__9158] = cljs.core.first.call(null,s__9159));
{
var G__9163 = (i__9158 + 1);
var G__9164 = cljs.core.next.call(null,s__9159);
i__9158 = G__9163;
s__9159 = G__9164;
continue;
}
} else
{return a__9156;
}
break;
}
} else
{var n__2555__auto____9161 = size;
var i__9162 = 0;
while(true){
if((i__9162 < n__2555__auto____9161))
{(a__9156[i__9162] = init_val_or_seq);
{
var G__9165 = (i__9162 + 1);
i__9162 = G__9165;
continue;
}
} else
{}
break;
}
return a__9156;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__9173 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9174 = cljs.core.seq.call(null,init_val_or_seq);
var i__9175 = 0;
var s__9176 = s__9174;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9177 = s__9176;
if(and__3822__auto____9177)
{return (i__9175 < size);
} else
{return and__3822__auto____9177;
}
})()))
{(a__9173[i__9175] = cljs.core.first.call(null,s__9176));
{
var G__9180 = (i__9175 + 1);
var G__9181 = cljs.core.next.call(null,s__9176);
i__9175 = G__9180;
s__9176 = G__9181;
continue;
}
} else
{return a__9173;
}
break;
}
} else
{var n__2555__auto____9178 = size;
var i__9179 = 0;
while(true){
if((i__9179 < n__2555__auto____9178))
{(a__9173[i__9179] = init_val_or_seq);
{
var G__9182 = (i__9179 + 1);
i__9179 = G__9182;
continue;
}
} else
{}
break;
}
return a__9173;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__9187 = s;
var i__9188 = n;
var sum__9189 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9190 = (i__9188 > 0);
if(and__3822__auto____9190)
{return cljs.core.seq.call(null,s__9187);
} else
{return and__3822__auto____9190;
}
})()))
{{
var G__9191 = cljs.core.next.call(null,s__9187);
var G__9192 = (i__9188 - 1);
var G__9193 = (sum__9189 + 1);
s__9187 = G__9191;
i__9188 = G__9192;
sum__9189 = G__9193;
continue;
}
} else
{return sum__9189;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9198 = cljs.core.seq.call(null,x);
if(s__9198)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__9198))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__9198),concat.call(null,cljs.core.chunk_rest.call(null,s__9198),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9198),concat.call(null,cljs.core.rest.call(null,s__9198),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__9202__delegate = function (x,y,zs){
var cat__9201 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9200 = cljs.core.seq.call(null,xys);
if(xys__9200)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__9200))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__9200),cat.call(null,cljs.core.chunk_rest.call(null,xys__9200),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9200),cat.call(null,cljs.core.rest.call(null,xys__9200),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__9201.call(null,concat.call(null,x,y),zs);
};
var G__9202 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9202__delegate.call(this, x, y, zs);
};
G__9202.cljs$lang$maxFixedArity = 2;
G__9202.cljs$lang$applyTo = (function (arglist__9203){
var x = cljs.core.first(arglist__9203);
var y = cljs.core.first(cljs.core.next(arglist__9203));
var zs = cljs.core.rest(cljs.core.next(arglist__9203));
return G__9202__delegate(x, y, zs);
});
G__9202.cljs$lang$arity$variadic = G__9202__delegate;
return G__9202;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__9204__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9204 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9204__delegate.call(this, a, b, c, d, more);
};
G__9204.cljs$lang$maxFixedArity = 4;
G__9204.cljs$lang$applyTo = (function (arglist__9205){
var a = cljs.core.first(arglist__9205);
var b = cljs.core.first(cljs.core.next(arglist__9205));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9205)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9205))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9205))));
return G__9204__delegate(a, b, c, d, more);
});
G__9204.cljs$lang$arity$variadic = G__9204__delegate;
return G__9204;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__9247 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__9248 = cljs.core._first.call(null,args__9247);
var args__9249 = cljs.core._rest.call(null,args__9247);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__9248);
} else
{return f.call(null,a__9248);
}
} else
{var b__9250 = cljs.core._first.call(null,args__9249);
var args__9251 = cljs.core._rest.call(null,args__9249);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__9248,b__9250);
} else
{return f.call(null,a__9248,b__9250);
}
} else
{var c__9252 = cljs.core._first.call(null,args__9251);
var args__9253 = cljs.core._rest.call(null,args__9251);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__9248,b__9250,c__9252);
} else
{return f.call(null,a__9248,b__9250,c__9252);
}
} else
{var d__9254 = cljs.core._first.call(null,args__9253);
var args__9255 = cljs.core._rest.call(null,args__9253);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__9248,b__9250,c__9252,d__9254);
} else
{return f.call(null,a__9248,b__9250,c__9252,d__9254);
}
} else
{var e__9256 = cljs.core._first.call(null,args__9255);
var args__9257 = cljs.core._rest.call(null,args__9255);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__9248,b__9250,c__9252,d__9254,e__9256);
} else
{return f.call(null,a__9248,b__9250,c__9252,d__9254,e__9256);
}
} else
{var f__9258 = cljs.core._first.call(null,args__9257);
var args__9259 = cljs.core._rest.call(null,args__9257);
if((argc === 6))
{if(f__9258.cljs$lang$arity$6)
{return f__9258.cljs$lang$arity$6(a__9248,b__9250,c__9252,d__9254,e__9256,f__9258);
} else
{return f__9258.call(null,a__9248,b__9250,c__9252,d__9254,e__9256,f__9258);
}
} else
{var g__9260 = cljs.core._first.call(null,args__9259);
var args__9261 = cljs.core._rest.call(null,args__9259);
if((argc === 7))
{if(f__9258.cljs$lang$arity$7)
{return f__9258.cljs$lang$arity$7(a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260);
} else
{return f__9258.call(null,a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260);
}
} else
{var h__9262 = cljs.core._first.call(null,args__9261);
var args__9263 = cljs.core._rest.call(null,args__9261);
if((argc === 8))
{if(f__9258.cljs$lang$arity$8)
{return f__9258.cljs$lang$arity$8(a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262);
} else
{return f__9258.call(null,a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262);
}
} else
{var i__9264 = cljs.core._first.call(null,args__9263);
var args__9265 = cljs.core._rest.call(null,args__9263);
if((argc === 9))
{if(f__9258.cljs$lang$arity$9)
{return f__9258.cljs$lang$arity$9(a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264);
} else
{return f__9258.call(null,a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264);
}
} else
{var j__9266 = cljs.core._first.call(null,args__9265);
var args__9267 = cljs.core._rest.call(null,args__9265);
if((argc === 10))
{if(f__9258.cljs$lang$arity$10)
{return f__9258.cljs$lang$arity$10(a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266);
} else
{return f__9258.call(null,a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266);
}
} else
{var k__9268 = cljs.core._first.call(null,args__9267);
var args__9269 = cljs.core._rest.call(null,args__9267);
if((argc === 11))
{if(f__9258.cljs$lang$arity$11)
{return f__9258.cljs$lang$arity$11(a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268);
} else
{return f__9258.call(null,a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268);
}
} else
{var l__9270 = cljs.core._first.call(null,args__9269);
var args__9271 = cljs.core._rest.call(null,args__9269);
if((argc === 12))
{if(f__9258.cljs$lang$arity$12)
{return f__9258.cljs$lang$arity$12(a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270);
} else
{return f__9258.call(null,a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270);
}
} else
{var m__9272 = cljs.core._first.call(null,args__9271);
var args__9273 = cljs.core._rest.call(null,args__9271);
if((argc === 13))
{if(f__9258.cljs$lang$arity$13)
{return f__9258.cljs$lang$arity$13(a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270,m__9272);
} else
{return f__9258.call(null,a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270,m__9272);
}
} else
{var n__9274 = cljs.core._first.call(null,args__9273);
var args__9275 = cljs.core._rest.call(null,args__9273);
if((argc === 14))
{if(f__9258.cljs$lang$arity$14)
{return f__9258.cljs$lang$arity$14(a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270,m__9272,n__9274);
} else
{return f__9258.call(null,a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270,m__9272,n__9274);
}
} else
{var o__9276 = cljs.core._first.call(null,args__9275);
var args__9277 = cljs.core._rest.call(null,args__9275);
if((argc === 15))
{if(f__9258.cljs$lang$arity$15)
{return f__9258.cljs$lang$arity$15(a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270,m__9272,n__9274,o__9276);
} else
{return f__9258.call(null,a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270,m__9272,n__9274,o__9276);
}
} else
{var p__9278 = cljs.core._first.call(null,args__9277);
var args__9279 = cljs.core._rest.call(null,args__9277);
if((argc === 16))
{if(f__9258.cljs$lang$arity$16)
{return f__9258.cljs$lang$arity$16(a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270,m__9272,n__9274,o__9276,p__9278);
} else
{return f__9258.call(null,a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270,m__9272,n__9274,o__9276,p__9278);
}
} else
{var q__9280 = cljs.core._first.call(null,args__9279);
var args__9281 = cljs.core._rest.call(null,args__9279);
if((argc === 17))
{if(f__9258.cljs$lang$arity$17)
{return f__9258.cljs$lang$arity$17(a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270,m__9272,n__9274,o__9276,p__9278,q__9280);
} else
{return f__9258.call(null,a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270,m__9272,n__9274,o__9276,p__9278,q__9280);
}
} else
{var r__9282 = cljs.core._first.call(null,args__9281);
var args__9283 = cljs.core._rest.call(null,args__9281);
if((argc === 18))
{if(f__9258.cljs$lang$arity$18)
{return f__9258.cljs$lang$arity$18(a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270,m__9272,n__9274,o__9276,p__9278,q__9280,r__9282);
} else
{return f__9258.call(null,a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270,m__9272,n__9274,o__9276,p__9278,q__9280,r__9282);
}
} else
{var s__9284 = cljs.core._first.call(null,args__9283);
var args__9285 = cljs.core._rest.call(null,args__9283);
if((argc === 19))
{if(f__9258.cljs$lang$arity$19)
{return f__9258.cljs$lang$arity$19(a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270,m__9272,n__9274,o__9276,p__9278,q__9280,r__9282,s__9284);
} else
{return f__9258.call(null,a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270,m__9272,n__9274,o__9276,p__9278,q__9280,r__9282,s__9284);
}
} else
{var t__9286 = cljs.core._first.call(null,args__9285);
var args__9287 = cljs.core._rest.call(null,args__9285);
if((argc === 20))
{if(f__9258.cljs$lang$arity$20)
{return f__9258.cljs$lang$arity$20(a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270,m__9272,n__9274,o__9276,p__9278,q__9280,r__9282,s__9284,t__9286);
} else
{return f__9258.call(null,a__9248,b__9250,c__9252,d__9254,e__9256,f__9258,g__9260,h__9262,i__9264,j__9266,k__9268,l__9270,m__9272,n__9274,o__9276,p__9278,q__9280,r__9282,s__9284,t__9286);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__9302 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9303 = cljs.core.bounded_count.call(null,args,(fixed_arity__9302 + 1));
if((bc__9303 <= fixed_arity__9302))
{return cljs.core.apply_to.call(null,f,bc__9303,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__9304 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__9305 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9306 = cljs.core.bounded_count.call(null,arglist__9304,(fixed_arity__9305 + 1));
if((bc__9306 <= fixed_arity__9305))
{return cljs.core.apply_to.call(null,f,bc__9306,arglist__9304);
} else
{return f.cljs$lang$applyTo(arglist__9304);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9304));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__9307 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__9308 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9309 = cljs.core.bounded_count.call(null,arglist__9307,(fixed_arity__9308 + 1));
if((bc__9309 <= fixed_arity__9308))
{return cljs.core.apply_to.call(null,f,bc__9309,arglist__9307);
} else
{return f.cljs$lang$applyTo(arglist__9307);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9307));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__9310 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__9311 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9312 = cljs.core.bounded_count.call(null,arglist__9310,(fixed_arity__9311 + 1));
if((bc__9312 <= fixed_arity__9311))
{return cljs.core.apply_to.call(null,f,bc__9312,arglist__9310);
} else
{return f.cljs$lang$applyTo(arglist__9310);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9310));
}
});
var apply__6 = (function() { 
var G__9316__delegate = function (f,a,b,c,d,args){
var arglist__9313 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__9314 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__9315 = cljs.core.bounded_count.call(null,arglist__9313,(fixed_arity__9314 + 1));
if((bc__9315 <= fixed_arity__9314))
{return cljs.core.apply_to.call(null,f,bc__9315,arglist__9313);
} else
{return f.cljs$lang$applyTo(arglist__9313);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9313));
}
};
var G__9316 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9316__delegate.call(this, f, a, b, c, d, args);
};
G__9316.cljs$lang$maxFixedArity = 5;
G__9316.cljs$lang$applyTo = (function (arglist__9317){
var f = cljs.core.first(arglist__9317);
var a = cljs.core.first(cljs.core.next(arglist__9317));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9317)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9317))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9317)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9317)))));
return G__9316__delegate(f, a, b, c, d, args);
});
G__9316.cljs$lang$arity$variadic = G__9316__delegate;
return G__9316;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__9318){
var obj = cljs.core.first(arglist__9318);
var f = cljs.core.first(cljs.core.next(arglist__9318));
var args = cljs.core.rest(cljs.core.next(arglist__9318));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__9319__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__9319 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9319__delegate.call(this, x, y, more);
};
G__9319.cljs$lang$maxFixedArity = 2;
G__9319.cljs$lang$applyTo = (function (arglist__9320){
var x = cljs.core.first(arglist__9320);
var y = cljs.core.first(cljs.core.next(arglist__9320));
var more = cljs.core.rest(cljs.core.next(arglist__9320));
return G__9319__delegate(x, y, more);
});
G__9319.cljs$lang$arity$variadic = G__9319__delegate;
return G__9319;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__9321 = pred;
var G__9322 = cljs.core.next.call(null,coll);
pred = G__9321;
coll = G__9322;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____9324 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____9324))
{return or__3824__auto____9324;
} else
{{
var G__9325 = pred;
var G__9326 = cljs.core.next.call(null,coll);
pred = G__9325;
coll = G__9326;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__9327 = null;
var G__9327__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__9327__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__9327__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__9327__3 = (function() { 
var G__9328__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__9328 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9328__delegate.call(this, x, y, zs);
};
G__9328.cljs$lang$maxFixedArity = 2;
G__9328.cljs$lang$applyTo = (function (arglist__9329){
var x = cljs.core.first(arglist__9329);
var y = cljs.core.first(cljs.core.next(arglist__9329));
var zs = cljs.core.rest(cljs.core.next(arglist__9329));
return G__9328__delegate(x, y, zs);
});
G__9328.cljs$lang$arity$variadic = G__9328__delegate;
return G__9328;
})()
;
G__9327 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__9327__0.call(this);
case 1:
return G__9327__1.call(this,x);
case 2:
return G__9327__2.call(this,x,y);
default:
return G__9327__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__9327.cljs$lang$maxFixedArity = 2;
G__9327.cljs$lang$applyTo = G__9327__3.cljs$lang$applyTo;
return G__9327;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__9330__delegate = function (args){
return x;
};
var G__9330 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9330__delegate.call(this, args);
};
G__9330.cljs$lang$maxFixedArity = 0;
G__9330.cljs$lang$applyTo = (function (arglist__9331){
var args = cljs.core.seq(arglist__9331);;
return G__9330__delegate(args);
});
G__9330.cljs$lang$arity$variadic = G__9330__delegate;
return G__9330;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__9338 = null;
var G__9338__0 = (function (){
return f.call(null,g.call(null));
});
var G__9338__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__9338__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__9338__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__9338__4 = (function() { 
var G__9339__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9339 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9339__delegate.call(this, x, y, z, args);
};
G__9339.cljs$lang$maxFixedArity = 3;
G__9339.cljs$lang$applyTo = (function (arglist__9340){
var x = cljs.core.first(arglist__9340);
var y = cljs.core.first(cljs.core.next(arglist__9340));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9340)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9340)));
return G__9339__delegate(x, y, z, args);
});
G__9339.cljs$lang$arity$variadic = G__9339__delegate;
return G__9339;
})()
;
G__9338 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9338__0.call(this);
case 1:
return G__9338__1.call(this,x);
case 2:
return G__9338__2.call(this,x,y);
case 3:
return G__9338__3.call(this,x,y,z);
default:
return G__9338__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9338.cljs$lang$maxFixedArity = 3;
G__9338.cljs$lang$applyTo = G__9338__4.cljs$lang$applyTo;
return G__9338;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__9341 = null;
var G__9341__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__9341__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__9341__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__9341__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__9341__4 = (function() { 
var G__9342__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__9342 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9342__delegate.call(this, x, y, z, args);
};
G__9342.cljs$lang$maxFixedArity = 3;
G__9342.cljs$lang$applyTo = (function (arglist__9343){
var x = cljs.core.first(arglist__9343);
var y = cljs.core.first(cljs.core.next(arglist__9343));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9343)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9343)));
return G__9342__delegate(x, y, z, args);
});
G__9342.cljs$lang$arity$variadic = G__9342__delegate;
return G__9342;
})()
;
G__9341 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9341__0.call(this);
case 1:
return G__9341__1.call(this,x);
case 2:
return G__9341__2.call(this,x,y);
case 3:
return G__9341__3.call(this,x,y,z);
default:
return G__9341__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9341.cljs$lang$maxFixedArity = 3;
G__9341.cljs$lang$applyTo = G__9341__4.cljs$lang$applyTo;
return G__9341;
})()
});
var comp__4 = (function() { 
var G__9344__delegate = function (f1,f2,f3,fs){
var fs__9335 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__9345__delegate = function (args){
var ret__9336 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__9335),args);
var fs__9337 = cljs.core.next.call(null,fs__9335);
while(true){
if(fs__9337)
{{
var G__9346 = cljs.core.first.call(null,fs__9337).call(null,ret__9336);
var G__9347 = cljs.core.next.call(null,fs__9337);
ret__9336 = G__9346;
fs__9337 = G__9347;
continue;
}
} else
{return ret__9336;
}
break;
}
};
var G__9345 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9345__delegate.call(this, args);
};
G__9345.cljs$lang$maxFixedArity = 0;
G__9345.cljs$lang$applyTo = (function (arglist__9348){
var args = cljs.core.seq(arglist__9348);;
return G__9345__delegate(args);
});
G__9345.cljs$lang$arity$variadic = G__9345__delegate;
return G__9345;
})()
;
};
var G__9344 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9344__delegate.call(this, f1, f2, f3, fs);
};
G__9344.cljs$lang$maxFixedArity = 3;
G__9344.cljs$lang$applyTo = (function (arglist__9349){
var f1 = cljs.core.first(arglist__9349);
var f2 = cljs.core.first(cljs.core.next(arglist__9349));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9349)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9349)));
return G__9344__delegate(f1, f2, f3, fs);
});
G__9344.cljs$lang$arity$variadic = G__9344__delegate;
return G__9344;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__9350__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__9350 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9350__delegate.call(this, args);
};
G__9350.cljs$lang$maxFixedArity = 0;
G__9350.cljs$lang$applyTo = (function (arglist__9351){
var args = cljs.core.seq(arglist__9351);;
return G__9350__delegate(args);
});
G__9350.cljs$lang$arity$variadic = G__9350__delegate;
return G__9350;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__9352__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__9352 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9352__delegate.call(this, args);
};
G__9352.cljs$lang$maxFixedArity = 0;
G__9352.cljs$lang$applyTo = (function (arglist__9353){
var args = cljs.core.seq(arglist__9353);;
return G__9352__delegate(args);
});
G__9352.cljs$lang$arity$variadic = G__9352__delegate;
return G__9352;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__9354__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__9354 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9354__delegate.call(this, args);
};
G__9354.cljs$lang$maxFixedArity = 0;
G__9354.cljs$lang$applyTo = (function (arglist__9355){
var args = cljs.core.seq(arglist__9355);;
return G__9354__delegate(args);
});
G__9354.cljs$lang$arity$variadic = G__9354__delegate;
return G__9354;
})()
;
});
var partial__5 = (function() { 
var G__9356__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__9357__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__9357 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9357__delegate.call(this, args);
};
G__9357.cljs$lang$maxFixedArity = 0;
G__9357.cljs$lang$applyTo = (function (arglist__9358){
var args = cljs.core.seq(arglist__9358);;
return G__9357__delegate(args);
});
G__9357.cljs$lang$arity$variadic = G__9357__delegate;
return G__9357;
})()
;
};
var G__9356 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9356__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__9356.cljs$lang$maxFixedArity = 4;
G__9356.cljs$lang$applyTo = (function (arglist__9359){
var f = cljs.core.first(arglist__9359);
var arg1 = cljs.core.first(cljs.core.next(arglist__9359));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9359)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9359))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9359))));
return G__9356__delegate(f, arg1, arg2, arg3, more);
});
G__9356.cljs$lang$arity$variadic = G__9356__delegate;
return G__9356;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__9360 = null;
var G__9360__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__9360__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__9360__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__9360__4 = (function() { 
var G__9361__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__9361 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9361__delegate.call(this, a, b, c, ds);
};
G__9361.cljs$lang$maxFixedArity = 3;
G__9361.cljs$lang$applyTo = (function (arglist__9362){
var a = cljs.core.first(arglist__9362);
var b = cljs.core.first(cljs.core.next(arglist__9362));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9362)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9362)));
return G__9361__delegate(a, b, c, ds);
});
G__9361.cljs$lang$arity$variadic = G__9361__delegate;
return G__9361;
})()
;
G__9360 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__9360__1.call(this,a);
case 2:
return G__9360__2.call(this,a,b);
case 3:
return G__9360__3.call(this,a,b,c);
default:
return G__9360__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9360.cljs$lang$maxFixedArity = 3;
G__9360.cljs$lang$applyTo = G__9360__4.cljs$lang$applyTo;
return G__9360;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__9363 = null;
var G__9363__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__9363__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__9363__4 = (function() { 
var G__9364__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__9364 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9364__delegate.call(this, a, b, c, ds);
};
G__9364.cljs$lang$maxFixedArity = 3;
G__9364.cljs$lang$applyTo = (function (arglist__9365){
var a = cljs.core.first(arglist__9365);
var b = cljs.core.first(cljs.core.next(arglist__9365));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9365)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9365)));
return G__9364__delegate(a, b, c, ds);
});
G__9364.cljs$lang$arity$variadic = G__9364__delegate;
return G__9364;
})()
;
G__9363 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__9363__2.call(this,a,b);
case 3:
return G__9363__3.call(this,a,b,c);
default:
return G__9363__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9363.cljs$lang$maxFixedArity = 3;
G__9363.cljs$lang$applyTo = G__9363__4.cljs$lang$applyTo;
return G__9363;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__9366 = null;
var G__9366__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__9366__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__9366__4 = (function() { 
var G__9367__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__9367 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9367__delegate.call(this, a, b, c, ds);
};
G__9367.cljs$lang$maxFixedArity = 3;
G__9367.cljs$lang$applyTo = (function (arglist__9368){
var a = cljs.core.first(arglist__9368);
var b = cljs.core.first(cljs.core.next(arglist__9368));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9368)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9368)));
return G__9367__delegate(a, b, c, ds);
});
G__9367.cljs$lang$arity$variadic = G__9367__delegate;
return G__9367;
})()
;
G__9366 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__9366__2.call(this,a,b);
case 3:
return G__9366__3.call(this,a,b,c);
default:
return G__9366__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9366.cljs$lang$maxFixedArity = 3;
G__9366.cljs$lang$applyTo = G__9366__4.cljs$lang$applyTo;
return G__9366;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__9384 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9392 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9392)
{var s__9393 = temp__3974__auto____9392;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9393))
{var c__9394 = cljs.core.chunk_first.call(null,s__9393);
var size__9395 = cljs.core.count.call(null,c__9394);
var b__9396 = cljs.core.chunk_buffer.call(null,size__9395);
var n__2555__auto____9397 = size__9395;
var i__9398 = 0;
while(true){
if((i__9398 < n__2555__auto____9397))
{cljs.core.chunk_append.call(null,b__9396,f.call(null,(idx + i__9398),cljs.core._nth.call(null,c__9394,i__9398)));
{
var G__9399 = (i__9398 + 1);
i__9398 = G__9399;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9396),mapi.call(null,(idx + size__9395),cljs.core.chunk_rest.call(null,s__9393)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__9393)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__9393)));
}
} else
{return null;
}
}),null));
});
return mapi__9384.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9409 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9409)
{var s__9410 = temp__3974__auto____9409;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9410))
{var c__9411 = cljs.core.chunk_first.call(null,s__9410);
var size__9412 = cljs.core.count.call(null,c__9411);
var b__9413 = cljs.core.chunk_buffer.call(null,size__9412);
var n__2555__auto____9414 = size__9412;
var i__9415 = 0;
while(true){
if((i__9415 < n__2555__auto____9414))
{var x__9416 = f.call(null,cljs.core._nth.call(null,c__9411,i__9415));
if((x__9416 == null))
{} else
{cljs.core.chunk_append.call(null,b__9413,x__9416);
}
{
var G__9418 = (i__9415 + 1);
i__9415 = G__9418;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9413),keep.call(null,f,cljs.core.chunk_rest.call(null,s__9410)));
} else
{var x__9417 = f.call(null,cljs.core.first.call(null,s__9410));
if((x__9417 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__9410));
} else
{return cljs.core.cons.call(null,x__9417,keep.call(null,f,cljs.core.rest.call(null,s__9410)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__9444 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9454 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9454)
{var s__9455 = temp__3974__auto____9454;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9455))
{var c__9456 = cljs.core.chunk_first.call(null,s__9455);
var size__9457 = cljs.core.count.call(null,c__9456);
var b__9458 = cljs.core.chunk_buffer.call(null,size__9457);
var n__2555__auto____9459 = size__9457;
var i__9460 = 0;
while(true){
if((i__9460 < n__2555__auto____9459))
{var x__9461 = f.call(null,(idx + i__9460),cljs.core._nth.call(null,c__9456,i__9460));
if((x__9461 == null))
{} else
{cljs.core.chunk_append.call(null,b__9458,x__9461);
}
{
var G__9463 = (i__9460 + 1);
i__9460 = G__9463;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9458),keepi.call(null,(idx + size__9457),cljs.core.chunk_rest.call(null,s__9455)));
} else
{var x__9462 = f.call(null,idx,cljs.core.first.call(null,s__9455));
if((x__9462 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__9455));
} else
{return cljs.core.cons.call(null,x__9462,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__9455)));
}
}
} else
{return null;
}
}),null));
});
return keepi__9444.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9549 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____9549))
{return p.call(null,y);
} else
{return and__3822__auto____9549;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9550 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____9550))
{var and__3822__auto____9551 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____9551))
{return p.call(null,z);
} else
{return and__3822__auto____9551;
}
} else
{return and__3822__auto____9550;
}
})());
});
var ep1__4 = (function() { 
var G__9620__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9552 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9552))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____9552;
}
})());
};
var G__9620 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9620__delegate.call(this, x, y, z, args);
};
G__9620.cljs$lang$maxFixedArity = 3;
G__9620.cljs$lang$applyTo = (function (arglist__9621){
var x = cljs.core.first(arglist__9621);
var y = cljs.core.first(cljs.core.next(arglist__9621));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9621)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9621)));
return G__9620__delegate(x, y, z, args);
});
G__9620.cljs$lang$arity$variadic = G__9620__delegate;
return G__9620;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9564 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9564))
{return p2.call(null,x);
} else
{return and__3822__auto____9564;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9565 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9565))
{var and__3822__auto____9566 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9566))
{var and__3822__auto____9567 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9567))
{return p2.call(null,y);
} else
{return and__3822__auto____9567;
}
} else
{return and__3822__auto____9566;
}
} else
{return and__3822__auto____9565;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9568 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9568))
{var and__3822__auto____9569 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9569))
{var and__3822__auto____9570 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____9570))
{var and__3822__auto____9571 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9571))
{var and__3822__auto____9572 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9572))
{return p2.call(null,z);
} else
{return and__3822__auto____9572;
}
} else
{return and__3822__auto____9571;
}
} else
{return and__3822__auto____9570;
}
} else
{return and__3822__auto____9569;
}
} else
{return and__3822__auto____9568;
}
})());
});
var ep2__4 = (function() { 
var G__9622__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9573 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9573))
{return cljs.core.every_QMARK_.call(null,(function (p1__9419_SHARP_){
var and__3822__auto____9574 = p1.call(null,p1__9419_SHARP_);
if(cljs.core.truth_(and__3822__auto____9574))
{return p2.call(null,p1__9419_SHARP_);
} else
{return and__3822__auto____9574;
}
}),args);
} else
{return and__3822__auto____9573;
}
})());
};
var G__9622 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9622__delegate.call(this, x, y, z, args);
};
G__9622.cljs$lang$maxFixedArity = 3;
G__9622.cljs$lang$applyTo = (function (arglist__9623){
var x = cljs.core.first(arglist__9623);
var y = cljs.core.first(cljs.core.next(arglist__9623));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9623)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9623)));
return G__9622__delegate(x, y, z, args);
});
G__9622.cljs$lang$arity$variadic = G__9622__delegate;
return G__9622;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9593 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9593))
{var and__3822__auto____9594 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9594))
{return p3.call(null,x);
} else
{return and__3822__auto____9594;
}
} else
{return and__3822__auto____9593;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9595 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9595))
{var and__3822__auto____9596 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9596))
{var and__3822__auto____9597 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____9597))
{var and__3822__auto____9598 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9598))
{var and__3822__auto____9599 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9599))
{return p3.call(null,y);
} else
{return and__3822__auto____9599;
}
} else
{return and__3822__auto____9598;
}
} else
{return and__3822__auto____9597;
}
} else
{return and__3822__auto____9596;
}
} else
{return and__3822__auto____9595;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9600 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9600))
{var and__3822__auto____9601 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9601))
{var and__3822__auto____9602 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____9602))
{var and__3822__auto____9603 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9603))
{var and__3822__auto____9604 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9604))
{var and__3822__auto____9605 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____9605))
{var and__3822__auto____9606 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____9606))
{var and__3822__auto____9607 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____9607))
{return p3.call(null,z);
} else
{return and__3822__auto____9607;
}
} else
{return and__3822__auto____9606;
}
} else
{return and__3822__auto____9605;
}
} else
{return and__3822__auto____9604;
}
} else
{return and__3822__auto____9603;
}
} else
{return and__3822__auto____9602;
}
} else
{return and__3822__auto____9601;
}
} else
{return and__3822__auto____9600;
}
})());
});
var ep3__4 = (function() { 
var G__9624__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9608 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9608))
{return cljs.core.every_QMARK_.call(null,(function (p1__9420_SHARP_){
var and__3822__auto____9609 = p1.call(null,p1__9420_SHARP_);
if(cljs.core.truth_(and__3822__auto____9609))
{var and__3822__auto____9610 = p2.call(null,p1__9420_SHARP_);
if(cljs.core.truth_(and__3822__auto____9610))
{return p3.call(null,p1__9420_SHARP_);
} else
{return and__3822__auto____9610;
}
} else
{return and__3822__auto____9609;
}
}),args);
} else
{return and__3822__auto____9608;
}
})());
};
var G__9624 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9624__delegate.call(this, x, y, z, args);
};
G__9624.cljs$lang$maxFixedArity = 3;
G__9624.cljs$lang$applyTo = (function (arglist__9625){
var x = cljs.core.first(arglist__9625);
var y = cljs.core.first(cljs.core.next(arglist__9625));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9625)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9625)));
return G__9624__delegate(x, y, z, args);
});
G__9624.cljs$lang$arity$variadic = G__9624__delegate;
return G__9624;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__9626__delegate = function (p1,p2,p3,ps){
var ps__9611 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__9421_SHARP_){
return p1__9421_SHARP_.call(null,x);
}),ps__9611);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__9422_SHARP_){
var and__3822__auto____9616 = p1__9422_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____9616))
{return p1__9422_SHARP_.call(null,y);
} else
{return and__3822__auto____9616;
}
}),ps__9611);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__9423_SHARP_){
var and__3822__auto____9617 = p1__9423_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____9617))
{var and__3822__auto____9618 = p1__9423_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____9618))
{return p1__9423_SHARP_.call(null,z);
} else
{return and__3822__auto____9618;
}
} else
{return and__3822__auto____9617;
}
}),ps__9611);
});
var epn__4 = (function() { 
var G__9627__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9619 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9619))
{return cljs.core.every_QMARK_.call(null,(function (p1__9424_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__9424_SHARP_,args);
}),ps__9611);
} else
{return and__3822__auto____9619;
}
})());
};
var G__9627 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9627__delegate.call(this, x, y, z, args);
};
G__9627.cljs$lang$maxFixedArity = 3;
G__9627.cljs$lang$applyTo = (function (arglist__9628){
var x = cljs.core.first(arglist__9628);
var y = cljs.core.first(cljs.core.next(arglist__9628));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9628)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9628)));
return G__9627__delegate(x, y, z, args);
});
G__9627.cljs$lang$arity$variadic = G__9627__delegate;
return G__9627;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__9626 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9626__delegate.call(this, p1, p2, p3, ps);
};
G__9626.cljs$lang$maxFixedArity = 3;
G__9626.cljs$lang$applyTo = (function (arglist__9629){
var p1 = cljs.core.first(arglist__9629);
var p2 = cljs.core.first(cljs.core.next(arglist__9629));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9629)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9629)));
return G__9626__delegate(p1, p2, p3, ps);
});
G__9626.cljs$lang$arity$variadic = G__9626__delegate;
return G__9626;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____9710 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____9710))
{return or__3824__auto____9710;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____9711 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____9711))
{return or__3824__auto____9711;
} else
{var or__3824__auto____9712 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____9712))
{return or__3824__auto____9712;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__9781__delegate = function (x,y,z,args){
var or__3824__auto____9713 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9713))
{return or__3824__auto____9713;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__9781 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9781__delegate.call(this, x, y, z, args);
};
G__9781.cljs$lang$maxFixedArity = 3;
G__9781.cljs$lang$applyTo = (function (arglist__9782){
var x = cljs.core.first(arglist__9782);
var y = cljs.core.first(cljs.core.next(arglist__9782));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9782)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9782)));
return G__9781__delegate(x, y, z, args);
});
G__9781.cljs$lang$arity$variadic = G__9781__delegate;
return G__9781;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____9725 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9725))
{return or__3824__auto____9725;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____9726 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9726))
{return or__3824__auto____9726;
} else
{var or__3824__auto____9727 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9727))
{return or__3824__auto____9727;
} else
{var or__3824__auto____9728 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9728))
{return or__3824__auto____9728;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____9729 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9729))
{return or__3824__auto____9729;
} else
{var or__3824__auto____9730 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9730))
{return or__3824__auto____9730;
} else
{var or__3824__auto____9731 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____9731))
{return or__3824__auto____9731;
} else
{var or__3824__auto____9732 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9732))
{return or__3824__auto____9732;
} else
{var or__3824__auto____9733 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9733))
{return or__3824__auto____9733;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__9783__delegate = function (x,y,z,args){
var or__3824__auto____9734 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9734))
{return or__3824__auto____9734;
} else
{return cljs.core.some.call(null,(function (p1__9464_SHARP_){
var or__3824__auto____9735 = p1.call(null,p1__9464_SHARP_);
if(cljs.core.truth_(or__3824__auto____9735))
{return or__3824__auto____9735;
} else
{return p2.call(null,p1__9464_SHARP_);
}
}),args);
}
};
var G__9783 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9783__delegate.call(this, x, y, z, args);
};
G__9783.cljs$lang$maxFixedArity = 3;
G__9783.cljs$lang$applyTo = (function (arglist__9784){
var x = cljs.core.first(arglist__9784);
var y = cljs.core.first(cljs.core.next(arglist__9784));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9784)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9784)));
return G__9783__delegate(x, y, z, args);
});
G__9783.cljs$lang$arity$variadic = G__9783__delegate;
return G__9783;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____9754 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9754))
{return or__3824__auto____9754;
} else
{var or__3824__auto____9755 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9755))
{return or__3824__auto____9755;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____9756 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9756))
{return or__3824__auto____9756;
} else
{var or__3824__auto____9757 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9757))
{return or__3824__auto____9757;
} else
{var or__3824__auto____9758 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____9758))
{return or__3824__auto____9758;
} else
{var or__3824__auto____9759 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9759))
{return or__3824__auto____9759;
} else
{var or__3824__auto____9760 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9760))
{return or__3824__auto____9760;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____9761 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9761))
{return or__3824__auto____9761;
} else
{var or__3824__auto____9762 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9762))
{return or__3824__auto____9762;
} else
{var or__3824__auto____9763 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____9763))
{return or__3824__auto____9763;
} else
{var or__3824__auto____9764 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9764))
{return or__3824__auto____9764;
} else
{var or__3824__auto____9765 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9765))
{return or__3824__auto____9765;
} else
{var or__3824__auto____9766 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____9766))
{return or__3824__auto____9766;
} else
{var or__3824__auto____9767 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____9767))
{return or__3824__auto____9767;
} else
{var or__3824__auto____9768 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____9768))
{return or__3824__auto____9768;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__9785__delegate = function (x,y,z,args){
var or__3824__auto____9769 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9769))
{return or__3824__auto____9769;
} else
{return cljs.core.some.call(null,(function (p1__9465_SHARP_){
var or__3824__auto____9770 = p1.call(null,p1__9465_SHARP_);
if(cljs.core.truth_(or__3824__auto____9770))
{return or__3824__auto____9770;
} else
{var or__3824__auto____9771 = p2.call(null,p1__9465_SHARP_);
if(cljs.core.truth_(or__3824__auto____9771))
{return or__3824__auto____9771;
} else
{return p3.call(null,p1__9465_SHARP_);
}
}
}),args);
}
};
var G__9785 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9785__delegate.call(this, x, y, z, args);
};
G__9785.cljs$lang$maxFixedArity = 3;
G__9785.cljs$lang$applyTo = (function (arglist__9786){
var x = cljs.core.first(arglist__9786);
var y = cljs.core.first(cljs.core.next(arglist__9786));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9786)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9786)));
return G__9785__delegate(x, y, z, args);
});
G__9785.cljs$lang$arity$variadic = G__9785__delegate;
return G__9785;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__9787__delegate = function (p1,p2,p3,ps){
var ps__9772 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__9466_SHARP_){
return p1__9466_SHARP_.call(null,x);
}),ps__9772);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__9467_SHARP_){
var or__3824__auto____9777 = p1__9467_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____9777))
{return or__3824__auto____9777;
} else
{return p1__9467_SHARP_.call(null,y);
}
}),ps__9772);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__9468_SHARP_){
var or__3824__auto____9778 = p1__9468_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____9778))
{return or__3824__auto____9778;
} else
{var or__3824__auto____9779 = p1__9468_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____9779))
{return or__3824__auto____9779;
} else
{return p1__9468_SHARP_.call(null,z);
}
}
}),ps__9772);
});
var spn__4 = (function() { 
var G__9788__delegate = function (x,y,z,args){
var or__3824__auto____9780 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9780))
{return or__3824__auto____9780;
} else
{return cljs.core.some.call(null,(function (p1__9469_SHARP_){
return cljs.core.some.call(null,p1__9469_SHARP_,args);
}),ps__9772);
}
};
var G__9788 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9788__delegate.call(this, x, y, z, args);
};
G__9788.cljs$lang$maxFixedArity = 3;
G__9788.cljs$lang$applyTo = (function (arglist__9789){
var x = cljs.core.first(arglist__9789);
var y = cljs.core.first(cljs.core.next(arglist__9789));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9789)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9789)));
return G__9788__delegate(x, y, z, args);
});
G__9788.cljs$lang$arity$variadic = G__9788__delegate;
return G__9788;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__9787 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9787__delegate.call(this, p1, p2, p3, ps);
};
G__9787.cljs$lang$maxFixedArity = 3;
G__9787.cljs$lang$applyTo = (function (arglist__9790){
var p1 = cljs.core.first(arglist__9790);
var p2 = cljs.core.first(cljs.core.next(arglist__9790));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9790)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9790)));
return G__9787__delegate(p1, p2, p3, ps);
});
G__9787.cljs$lang$arity$variadic = G__9787__delegate;
return G__9787;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9809 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9809)
{var s__9810 = temp__3974__auto____9809;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9810))
{var c__9811 = cljs.core.chunk_first.call(null,s__9810);
var size__9812 = cljs.core.count.call(null,c__9811);
var b__9813 = cljs.core.chunk_buffer.call(null,size__9812);
var n__2555__auto____9814 = size__9812;
var i__9815 = 0;
while(true){
if((i__9815 < n__2555__auto____9814))
{cljs.core.chunk_append.call(null,b__9813,f.call(null,cljs.core._nth.call(null,c__9811,i__9815)));
{
var G__9827 = (i__9815 + 1);
i__9815 = G__9827;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9813),map.call(null,f,cljs.core.chunk_rest.call(null,s__9810)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__9810)),map.call(null,f,cljs.core.rest.call(null,s__9810)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9816 = cljs.core.seq.call(null,c1);
var s2__9817 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____9818 = s1__9816;
if(and__3822__auto____9818)
{return s2__9817;
} else
{return and__3822__auto____9818;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9816),cljs.core.first.call(null,s2__9817)),map.call(null,f,cljs.core.rest.call(null,s1__9816),cljs.core.rest.call(null,s2__9817)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9819 = cljs.core.seq.call(null,c1);
var s2__9820 = cljs.core.seq.call(null,c2);
var s3__9821 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____9822 = s1__9819;
if(and__3822__auto____9822)
{var and__3822__auto____9823 = s2__9820;
if(and__3822__auto____9823)
{return s3__9821;
} else
{return and__3822__auto____9823;
}
} else
{return and__3822__auto____9822;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9819),cljs.core.first.call(null,s2__9820),cljs.core.first.call(null,s3__9821)),map.call(null,f,cljs.core.rest.call(null,s1__9819),cljs.core.rest.call(null,s2__9820),cljs.core.rest.call(null,s3__9821)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__9828__delegate = function (f,c1,c2,c3,colls){
var step__9826 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9825 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9825))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__9825),step.call(null,map.call(null,cljs.core.rest,ss__9825)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__9630_SHARP_){
return cljs.core.apply.call(null,f,p1__9630_SHARP_);
}),step__9826.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__9828 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9828__delegate.call(this, f, c1, c2, c3, colls);
};
G__9828.cljs$lang$maxFixedArity = 4;
G__9828.cljs$lang$applyTo = (function (arglist__9829){
var f = cljs.core.first(arglist__9829);
var c1 = cljs.core.first(cljs.core.next(arglist__9829));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9829)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9829))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9829))));
return G__9828__delegate(f, c1, c2, c3, colls);
});
G__9828.cljs$lang$arity$variadic = G__9828__delegate;
return G__9828;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____9832 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9832)
{var s__9833 = temp__3974__auto____9832;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9833),take.call(null,(n - 1),cljs.core.rest.call(null,s__9833)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__9839 = (function (n,coll){
while(true){
var s__9837 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____9838 = (n > 0);
if(and__3822__auto____9838)
{return s__9837;
} else
{return and__3822__auto____9838;
}
})()))
{{
var G__9840 = (n - 1);
var G__9841 = cljs.core.rest.call(null,s__9837);
n = G__9840;
coll = G__9841;
continue;
}
} else
{return s__9837;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__9839.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__9844 = cljs.core.seq.call(null,coll);
var lead__9845 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__9845)
{{
var G__9846 = cljs.core.next.call(null,s__9844);
var G__9847 = cljs.core.next.call(null,lead__9845);
s__9844 = G__9846;
lead__9845 = G__9847;
continue;
}
} else
{return s__9844;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__9853 = (function (pred,coll){
while(true){
var s__9851 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____9852 = s__9851;
if(and__3822__auto____9852)
{return pred.call(null,cljs.core.first.call(null,s__9851));
} else
{return and__3822__auto____9852;
}
})()))
{{
var G__9854 = pred;
var G__9855 = cljs.core.rest.call(null,s__9851);
pred = G__9854;
coll = G__9855;
continue;
}
} else
{return s__9851;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__9853.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9858 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9858)
{var s__9859 = temp__3974__auto____9858;
return cljs.core.concat.call(null,s__9859,cycle.call(null,s__9859));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9864 = cljs.core.seq.call(null,c1);
var s2__9865 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____9866 = s1__9864;
if(and__3822__auto____9866)
{return s2__9865;
} else
{return and__3822__auto____9866;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__9864),cljs.core.cons.call(null,cljs.core.first.call(null,s2__9865),interleave.call(null,cljs.core.rest.call(null,s1__9864),cljs.core.rest.call(null,s2__9865))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__9868__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9867 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9867))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__9867),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__9867)));
} else
{return null;
}
}),null));
};
var G__9868 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9868__delegate.call(this, c1, c2, colls);
};
G__9868.cljs$lang$maxFixedArity = 2;
G__9868.cljs$lang$applyTo = (function (arglist__9869){
var c1 = cljs.core.first(arglist__9869);
var c2 = cljs.core.first(cljs.core.next(arglist__9869));
var colls = cljs.core.rest(cljs.core.next(arglist__9869));
return G__9868__delegate(c1, c2, colls);
});
G__9868.cljs$lang$arity$variadic = G__9868__delegate;
return G__9868;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__9879 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9877 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9877)
{var coll__9878 = temp__3971__auto____9877;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__9878),cat.call(null,cljs.core.rest.call(null,coll__9878),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__9879.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__9880__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__9880 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9880__delegate.call(this, f, coll, colls);
};
G__9880.cljs$lang$maxFixedArity = 2;
G__9880.cljs$lang$applyTo = (function (arglist__9881){
var f = cljs.core.first(arglist__9881);
var coll = cljs.core.first(cljs.core.next(arglist__9881));
var colls = cljs.core.rest(cljs.core.next(arglist__9881));
return G__9880__delegate(f, coll, colls);
});
G__9880.cljs$lang$arity$variadic = G__9880__delegate;
return G__9880;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9891 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9891)
{var s__9892 = temp__3974__auto____9891;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9892))
{var c__9893 = cljs.core.chunk_first.call(null,s__9892);
var size__9894 = cljs.core.count.call(null,c__9893);
var b__9895 = cljs.core.chunk_buffer.call(null,size__9894);
var n__2555__auto____9896 = size__9894;
var i__9897 = 0;
while(true){
if((i__9897 < n__2555__auto____9896))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__9893,i__9897))))
{cljs.core.chunk_append.call(null,b__9895,cljs.core._nth.call(null,c__9893,i__9897));
} else
{}
{
var G__9900 = (i__9897 + 1);
i__9897 = G__9900;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9895),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__9892)));
} else
{var f__9898 = cljs.core.first.call(null,s__9892);
var r__9899 = cljs.core.rest.call(null,s__9892);
if(cljs.core.truth_(pred.call(null,f__9898)))
{return cljs.core.cons.call(null,f__9898,filter.call(null,pred,r__9899));
} else
{return filter.call(null,pred,r__9899);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__9903 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__9903.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__9901_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__9901_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__9907__9908 = to;
if(G__9907__9908)
{if((function (){var or__3824__auto____9909 = (G__9907__9908.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____9909)
{return or__3824__auto____9909;
} else
{return G__9907__9908.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__9907__9908.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9907__9908);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9907__9908);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__9910__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__9910 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9910__delegate.call(this, f, c1, c2, c3, colls);
};
G__9910.cljs$lang$maxFixedArity = 4;
G__9910.cljs$lang$applyTo = (function (arglist__9911){
var f = cljs.core.first(arglist__9911);
var c1 = cljs.core.first(cljs.core.next(arglist__9911));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9911)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9911))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9911))));
return G__9910__delegate(f, c1, c2, c3, colls);
});
G__9910.cljs$lang$arity$variadic = G__9910__delegate;
return G__9910;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9918 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9918)
{var s__9919 = temp__3974__auto____9918;
var p__9920 = cljs.core.take.call(null,n,s__9919);
if((n === cljs.core.count.call(null,p__9920)))
{return cljs.core.cons.call(null,p__9920,partition.call(null,n,step,cljs.core.drop.call(null,step,s__9919)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9921 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9921)
{var s__9922 = temp__3974__auto____9921;
var p__9923 = cljs.core.take.call(null,n,s__9922);
if((n === cljs.core.count.call(null,p__9923)))
{return cljs.core.cons.call(null,p__9923,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__9922)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__9923,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__9928 = cljs.core.lookup_sentinel;
var m__9929 = m;
var ks__9930 = cljs.core.seq.call(null,ks);
while(true){
if(ks__9930)
{var m__9931 = cljs.core._lookup.call(null,m__9929,cljs.core.first.call(null,ks__9930),sentinel__9928);
if((sentinel__9928 === m__9931))
{return not_found;
} else
{{
var G__9932 = sentinel__9928;
var G__9933 = m__9931;
var G__9934 = cljs.core.next.call(null,ks__9930);
sentinel__9928 = G__9932;
m__9929 = G__9933;
ks__9930 = G__9934;
continue;
}
}
} else
{return m__9929;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__9935,v){
var vec__9940__9941 = p__9935;
var k__9942 = cljs.core.nth.call(null,vec__9940__9941,0,null);
var ks__9943 = cljs.core.nthnext.call(null,vec__9940__9941,1);
if(cljs.core.truth_(ks__9943))
{return cljs.core.assoc.call(null,m,k__9942,assoc_in.call(null,cljs.core._lookup.call(null,m,k__9942,null),ks__9943,v));
} else
{return cljs.core.assoc.call(null,m,k__9942,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__9944,f,args){
var vec__9949__9950 = p__9944;
var k__9951 = cljs.core.nth.call(null,vec__9949__9950,0,null);
var ks__9952 = cljs.core.nthnext.call(null,vec__9949__9950,1);
if(cljs.core.truth_(ks__9952))
{return cljs.core.assoc.call(null,m,k__9951,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__9951,null),ks__9952,f,args));
} else
{return cljs.core.assoc.call(null,m,k__9951,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__9951,null),args));
}
};
var update_in = function (m,p__9944,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__9944, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__9953){
var m = cljs.core.first(arglist__9953);
var p__9944 = cljs.core.first(cljs.core.next(arglist__9953));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9953)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9953)));
return update_in__delegate(m, p__9944, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9956 = this;
var h__2220__auto____9957 = this__9956.__hash;
if(!((h__2220__auto____9957 == null)))
{return h__2220__auto____9957;
} else
{var h__2220__auto____9958 = cljs.core.hash_coll.call(null,coll);
this__9956.__hash = h__2220__auto____9958;
return h__2220__auto____9958;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9959 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9960 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9961 = this;
var new_array__9962 = this__9961.array.slice();
(new_array__9962[k] = v);
return (new cljs.core.Vector(this__9961.meta,new_array__9962,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__9993 = null;
var G__9993__2 = (function (this_sym9963,k){
var this__9965 = this;
var this_sym9963__9966 = this;
var coll__9967 = this_sym9963__9966;
return coll__9967.cljs$core$ILookup$_lookup$arity$2(coll__9967,k);
});
var G__9993__3 = (function (this_sym9964,k,not_found){
var this__9965 = this;
var this_sym9964__9968 = this;
var coll__9969 = this_sym9964__9968;
return coll__9969.cljs$core$ILookup$_lookup$arity$3(coll__9969,k,not_found);
});
G__9993 = function(this_sym9964,k,not_found){
switch(arguments.length){
case 2:
return G__9993__2.call(this,this_sym9964,k);
case 3:
return G__9993__3.call(this,this_sym9964,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9993;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym9954,args9955){
var this__9970 = this;
return this_sym9954.call.apply(this_sym9954,[this_sym9954].concat(args9955.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9971 = this;
var new_array__9972 = this__9971.array.slice();
new_array__9972.push(o);
return (new cljs.core.Vector(this__9971.meta,new_array__9972,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__9973 = this;
var this__9974 = this;
return cljs.core.pr_str.call(null,this__9974);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9975 = this;
return cljs.core.ci_reduce.call(null,this__9975.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9976 = this;
return cljs.core.ci_reduce.call(null,this__9976.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9977 = this;
if((this__9977.array.length > 0))
{var vector_seq__9978 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__9977.array.length))
{return cljs.core.cons.call(null,(this__9977.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__9978.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9979 = this;
return this__9979.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9980 = this;
var count__9981 = this__9980.array.length;
if((count__9981 > 0))
{return (this__9980.array[(count__9981 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9982 = this;
if((this__9982.array.length > 0))
{var new_array__9983 = this__9982.array.slice();
new_array__9983.pop();
return (new cljs.core.Vector(this__9982.meta,new_array__9983,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9984 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9985 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9986 = this;
return (new cljs.core.Vector(meta,this__9986.array,this__9986.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9987 = this;
return this__9987.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9988 = this;
if((function (){var and__3822__auto____9989 = (0 <= n);
if(and__3822__auto____9989)
{return (n < this__9988.array.length);
} else
{return and__3822__auto____9989;
}
})())
{return (this__9988.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9990 = this;
if((function (){var and__3822__auto____9991 = (0 <= n);
if(and__3822__auto____9991)
{return (n < this__9990.array.length);
} else
{return and__3822__auto____9991;
}
})())
{return (this__9990.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9992 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9992.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2338__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__9995 = pv.cnt;
if((cnt__9995 < 32))
{return 0;
} else
{return (((cnt__9995 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__10001 = level;
var ret__10002 = node;
while(true){
if((ll__10001 === 0))
{return ret__10002;
} else
{var embed__10003 = ret__10002;
var r__10004 = cljs.core.pv_fresh_node.call(null,edit);
var ___10005 = cljs.core.pv_aset.call(null,r__10004,0,embed__10003);
{
var G__10006 = (ll__10001 - 5);
var G__10007 = r__10004;
ll__10001 = G__10006;
ret__10002 = G__10007;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__10013 = cljs.core.pv_clone_node.call(null,parent);
var subidx__10014 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__10013,subidx__10014,tailnode);
return ret__10013;
} else
{var child__10015 = cljs.core.pv_aget.call(null,parent,subidx__10014);
if(!((child__10015 == null)))
{var node_to_insert__10016 = push_tail.call(null,pv,(level - 5),child__10015,tailnode);
cljs.core.pv_aset.call(null,ret__10013,subidx__10014,node_to_insert__10016);
return ret__10013;
} else
{var node_to_insert__10017 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__10013,subidx__10014,node_to_insert__10017);
return ret__10013;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____10021 = (0 <= i);
if(and__3822__auto____10021)
{return (i < pv.cnt);
} else
{return and__3822__auto____10021;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__10022 = pv.root;
var level__10023 = pv.shift;
while(true){
if((level__10023 > 0))
{{
var G__10024 = cljs.core.pv_aget.call(null,node__10022,((i >>> level__10023) & 31));
var G__10025 = (level__10023 - 5);
node__10022 = G__10024;
level__10023 = G__10025;
continue;
}
} else
{return node__10022.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__10028 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__10028,(i & 31),val);
return ret__10028;
} else
{var subidx__10029 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10028,subidx__10029,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10029),i,val));
return ret__10028;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__10035 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10036 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10035));
if((function (){var and__3822__auto____10037 = (new_child__10036 == null);
if(and__3822__auto____10037)
{return (subidx__10035 === 0);
} else
{return and__3822__auto____10037;
}
})())
{return null;
} else
{var ret__10038 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10038,subidx__10035,new_child__10036);
return ret__10038;
}
} else
{if((subidx__10035 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__10039 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10039,subidx__10035,null);
return ret__10039;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10042 = this;
return (new cljs.core.TransientVector(this__10042.cnt,this__10042.shift,cljs.core.tv_editable_root.call(null,this__10042.root),cljs.core.tv_editable_tail.call(null,this__10042.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10043 = this;
var h__2220__auto____10044 = this__10043.__hash;
if(!((h__2220__auto____10044 == null)))
{return h__2220__auto____10044;
} else
{var h__2220__auto____10045 = cljs.core.hash_coll.call(null,coll);
this__10043.__hash = h__2220__auto____10045;
return h__2220__auto____10045;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10046 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10047 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10048 = this;
if((function (){var and__3822__auto____10049 = (0 <= k);
if(and__3822__auto____10049)
{return (k < this__10048.cnt);
} else
{return and__3822__auto____10049;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__10050 = this__10048.tail.slice();
(new_tail__10050[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__10048.meta,this__10048.cnt,this__10048.shift,this__10048.root,new_tail__10050,null));
} else
{return (new cljs.core.PersistentVector(this__10048.meta,this__10048.cnt,this__10048.shift,cljs.core.do_assoc.call(null,coll,this__10048.shift,this__10048.root,k,v),this__10048.tail,null));
}
} else
{if((k === this__10048.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__10048.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__10098 = null;
var G__10098__2 = (function (this_sym10051,k){
var this__10053 = this;
var this_sym10051__10054 = this;
var coll__10055 = this_sym10051__10054;
return coll__10055.cljs$core$ILookup$_lookup$arity$2(coll__10055,k);
});
var G__10098__3 = (function (this_sym10052,k,not_found){
var this__10053 = this;
var this_sym10052__10056 = this;
var coll__10057 = this_sym10052__10056;
return coll__10057.cljs$core$ILookup$_lookup$arity$3(coll__10057,k,not_found);
});
G__10098 = function(this_sym10052,k,not_found){
switch(arguments.length){
case 2:
return G__10098__2.call(this,this_sym10052,k);
case 3:
return G__10098__3.call(this,this_sym10052,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10098;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym10040,args10041){
var this__10058 = this;
return this_sym10040.call.apply(this_sym10040,[this_sym10040].concat(args10041.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__10059 = this;
var step_init__10060 = [0,init];
var i__10061 = 0;
while(true){
if((i__10061 < this__10059.cnt))
{var arr__10062 = cljs.core.array_for.call(null,v,i__10061);
var len__10063 = arr__10062.length;
var init__10067 = (function (){var j__10064 = 0;
var init__10065 = (step_init__10060[1]);
while(true){
if((j__10064 < len__10063))
{var init__10066 = f.call(null,init__10065,(j__10064 + i__10061),(arr__10062[j__10064]));
if(cljs.core.reduced_QMARK_.call(null,init__10066))
{return init__10066;
} else
{{
var G__10099 = (j__10064 + 1);
var G__10100 = init__10066;
j__10064 = G__10099;
init__10065 = G__10100;
continue;
}
}
} else
{(step_init__10060[0] = len__10063);
(step_init__10060[1] = init__10065);
return init__10065;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10067))
{return cljs.core.deref.call(null,init__10067);
} else
{{
var G__10101 = (i__10061 + (step_init__10060[0]));
i__10061 = G__10101;
continue;
}
}
} else
{return (step_init__10060[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10068 = this;
if(((this__10068.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__10069 = this__10068.tail.slice();
new_tail__10069.push(o);
return (new cljs.core.PersistentVector(this__10068.meta,(this__10068.cnt + 1),this__10068.shift,this__10068.root,new_tail__10069,null));
} else
{var root_overflow_QMARK___10070 = ((this__10068.cnt >>> 5) > (1 << this__10068.shift));
var new_shift__10071 = ((root_overflow_QMARK___10070)?(this__10068.shift + 5):this__10068.shift);
var new_root__10073 = ((root_overflow_QMARK___10070)?(function (){var n_r__10072 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__10072,0,this__10068.root);
cljs.core.pv_aset.call(null,n_r__10072,1,cljs.core.new_path.call(null,null,this__10068.shift,(new cljs.core.VectorNode(null,this__10068.tail))));
return n_r__10072;
})():cljs.core.push_tail.call(null,coll,this__10068.shift,this__10068.root,(new cljs.core.VectorNode(null,this__10068.tail))));
return (new cljs.core.PersistentVector(this__10068.meta,(this__10068.cnt + 1),new_shift__10071,new_root__10073,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10074 = this;
if((this__10074.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__10074.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__10075 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__10076 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__10077 = this;
var this__10078 = this;
return cljs.core.pr_str.call(null,this__10078);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10079 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10080 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10081 = this;
if((this__10081.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10082 = this;
return this__10082.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10083 = this;
if((this__10083.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__10083.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10084 = this;
if((this__10084.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10084.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10084.meta);
} else
{if((1 < (this__10084.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__10084.meta,(this__10084.cnt - 1),this__10084.shift,this__10084.root,this__10084.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__10085 = cljs.core.array_for.call(null,coll,(this__10084.cnt - 2));
var nr__10086 = cljs.core.pop_tail.call(null,coll,this__10084.shift,this__10084.root);
var new_root__10087 = (((nr__10086 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__10086);
var cnt_1__10088 = (this__10084.cnt - 1);
if((function (){var and__3822__auto____10089 = (5 < this__10084.shift);
if(and__3822__auto____10089)
{return (cljs.core.pv_aget.call(null,new_root__10087,1) == null);
} else
{return and__3822__auto____10089;
}
})())
{return (new cljs.core.PersistentVector(this__10084.meta,cnt_1__10088,(this__10084.shift - 5),cljs.core.pv_aget.call(null,new_root__10087,0),new_tail__10085,null));
} else
{return (new cljs.core.PersistentVector(this__10084.meta,cnt_1__10088,this__10084.shift,new_root__10087,new_tail__10085,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10090 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10091 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10092 = this;
return (new cljs.core.PersistentVector(meta,this__10092.cnt,this__10092.shift,this__10092.root,this__10092.tail,this__10092.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10093 = this;
return this__10093.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10094 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10095 = this;
if((function (){var and__3822__auto____10096 = (0 <= n);
if(and__3822__auto____10096)
{return (n < this__10095.cnt);
} else
{return and__3822__auto____10096;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10097 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10097.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__10102 = xs.length;
var xs__10103 = (((no_clone === true))?xs:xs.slice());
if((l__10102 < 32))
{return (new cljs.core.PersistentVector(null,l__10102,5,cljs.core.PersistentVector.EMPTY_NODE,xs__10103,null));
} else
{var node__10104 = xs__10103.slice(0,32);
var v__10105 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__10104,null));
var i__10106 = 32;
var out__10107 = cljs.core._as_transient.call(null,v__10105);
while(true){
if((i__10106 < l__10102))
{{
var G__10108 = (i__10106 + 1);
var G__10109 = cljs.core.conj_BANG_.call(null,out__10107,(xs__10103[i__10106]));
i__10106 = G__10108;
out__10107 = G__10109;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10107);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__10110){
var args = cljs.core.seq(arglist__10110);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__10111 = this;
if(((this__10111.off + 1) < this__10111.node.length))
{var s__10112 = cljs.core.chunked_seq.call(null,this__10111.vec,this__10111.node,this__10111.i,(this__10111.off + 1));
if((s__10112 == null))
{return null;
} else
{return s__10112;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10113 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10114 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10115 = this;
return (this__10115.node[this__10115.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10116 = this;
if(((this__10116.off + 1) < this__10116.node.length))
{var s__10117 = cljs.core.chunked_seq.call(null,this__10116.vec,this__10116.node,this__10116.i,(this__10116.off + 1));
if((s__10117 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10117;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__10118 = this;
var l__10119 = this__10118.node.length;
var s__10120 = ((((this__10118.i + l__10119) < cljs.core._count.call(null,this__10118.vec)))?cljs.core.chunked_seq.call(null,this__10118.vec,(this__10118.i + l__10119),0):null);
if((s__10120 == null))
{return null;
} else
{return s__10120;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10121 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__10122 = this;
return cljs.core.chunked_seq.call(null,this__10122.vec,this__10122.node,this__10122.i,this__10122.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__10123 = this;
return this__10123.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10124 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10124.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__10125 = this;
return cljs.core.array_chunk.call(null,this__10125.node,this__10125.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__10126 = this;
var l__10127 = this__10126.node.length;
var s__10128 = ((((this__10126.i + l__10127) < cljs.core._count.call(null,this__10126.vec)))?cljs.core.chunked_seq.call(null,this__10126.vec,(this__10126.i + l__10127),0):null);
if((s__10128 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10128;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10131 = this;
var h__2220__auto____10132 = this__10131.__hash;
if(!((h__2220__auto____10132 == null)))
{return h__2220__auto____10132;
} else
{var h__2220__auto____10133 = cljs.core.hash_coll.call(null,coll);
this__10131.__hash = h__2220__auto____10133;
return h__2220__auto____10133;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10134 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10135 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__10136 = this;
var v_pos__10137 = (this__10136.start + key);
return (new cljs.core.Subvec(this__10136.meta,cljs.core._assoc.call(null,this__10136.v,v_pos__10137,val),this__10136.start,((this__10136.end > (v_pos__10137 + 1)) ? this__10136.end : (v_pos__10137 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__10163 = null;
var G__10163__2 = (function (this_sym10138,k){
var this__10140 = this;
var this_sym10138__10141 = this;
var coll__10142 = this_sym10138__10141;
return coll__10142.cljs$core$ILookup$_lookup$arity$2(coll__10142,k);
});
var G__10163__3 = (function (this_sym10139,k,not_found){
var this__10140 = this;
var this_sym10139__10143 = this;
var coll__10144 = this_sym10139__10143;
return coll__10144.cljs$core$ILookup$_lookup$arity$3(coll__10144,k,not_found);
});
G__10163 = function(this_sym10139,k,not_found){
switch(arguments.length){
case 2:
return G__10163__2.call(this,this_sym10139,k);
case 3:
return G__10163__3.call(this,this_sym10139,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10163;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym10129,args10130){
var this__10145 = this;
return this_sym10129.call.apply(this_sym10129,[this_sym10129].concat(args10130.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10146 = this;
return (new cljs.core.Subvec(this__10146.meta,cljs.core._assoc_n.call(null,this__10146.v,this__10146.end,o),this__10146.start,(this__10146.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__10147 = this;
var this__10148 = this;
return cljs.core.pr_str.call(null,this__10148);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__10149 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__10150 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10151 = this;
var subvec_seq__10152 = (function subvec_seq(i){
if((i === this__10151.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__10151.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__10152.call(null,this__10151.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10153 = this;
return (this__10153.end - this__10153.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10154 = this;
return cljs.core._nth.call(null,this__10154.v,(this__10154.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10155 = this;
if((this__10155.start === this__10155.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__10155.meta,this__10155.v,this__10155.start,(this__10155.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10156 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10157 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10158 = this;
return (new cljs.core.Subvec(meta,this__10158.v,this__10158.start,this__10158.end,this__10158.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10159 = this;
return this__10159.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10160 = this;
return cljs.core._nth.call(null,this__10160.v,(this__10160.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10161 = this;
return cljs.core._nth.call(null,this__10161.v,(this__10161.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10162 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10162.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__10165 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__10165,0,tl.length);
return ret__10165;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__10169 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__10170 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10169,subidx__10170,(((level === 5))?tail_node:(function (){var child__10171 = cljs.core.pv_aget.call(null,ret__10169,subidx__10170);
if(!((child__10171 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__10171,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__10169;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__10176 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__10177 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10178 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__10176,subidx__10177));
if((function (){var and__3822__auto____10179 = (new_child__10178 == null);
if(and__3822__auto____10179)
{return (subidx__10177 === 0);
} else
{return and__3822__auto____10179;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__10176,subidx__10177,new_child__10178);
return node__10176;
}
} else
{if((subidx__10177 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__10176,subidx__10177,null);
return node__10176;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____10184 = (0 <= i);
if(and__3822__auto____10184)
{return (i < tv.cnt);
} else
{return and__3822__auto____10184;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__10185 = tv.root;
var node__10186 = root__10185;
var level__10187 = tv.shift;
while(true){
if((level__10187 > 0))
{{
var G__10188 = cljs.core.tv_ensure_editable.call(null,root__10185.edit,cljs.core.pv_aget.call(null,node__10186,((i >>> level__10187) & 31)));
var G__10189 = (level__10187 - 5);
node__10186 = G__10188;
level__10187 = G__10189;
continue;
}
} else
{return node__10186.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__10229 = null;
var G__10229__2 = (function (this_sym10192,k){
var this__10194 = this;
var this_sym10192__10195 = this;
var coll__10196 = this_sym10192__10195;
return coll__10196.cljs$core$ILookup$_lookup$arity$2(coll__10196,k);
});
var G__10229__3 = (function (this_sym10193,k,not_found){
var this__10194 = this;
var this_sym10193__10197 = this;
var coll__10198 = this_sym10193__10197;
return coll__10198.cljs$core$ILookup$_lookup$arity$3(coll__10198,k,not_found);
});
G__10229 = function(this_sym10193,k,not_found){
switch(arguments.length){
case 2:
return G__10229__2.call(this,this_sym10193,k);
case 3:
return G__10229__3.call(this,this_sym10193,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10229;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym10190,args10191){
var this__10199 = this;
return this_sym10190.call.apply(this_sym10190,[this_sym10190].concat(args10191.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10200 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10201 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10202 = this;
if(this__10202.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10203 = this;
if((function (){var and__3822__auto____10204 = (0 <= n);
if(and__3822__auto____10204)
{return (n < this__10203.cnt);
} else
{return and__3822__auto____10204;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10205 = this;
if(this__10205.root.edit)
{return this__10205.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__10206 = this;
if(this__10206.root.edit)
{if((function (){var and__3822__auto____10207 = (0 <= n);
if(and__3822__auto____10207)
{return (n < this__10206.cnt);
} else
{return and__3822__auto____10207;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__10206.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__10212 = (function go(level,node){
var node__10210 = cljs.core.tv_ensure_editable.call(null,this__10206.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__10210,(n & 31),val);
return node__10210;
} else
{var subidx__10211 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__10210,subidx__10211,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__10210,subidx__10211)));
return node__10210;
}
}).call(null,this__10206.shift,this__10206.root);
this__10206.root = new_root__10212;
return tcoll;
}
} else
{if((n === this__10206.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__10206.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__10213 = this;
if(this__10213.root.edit)
{if((this__10213.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10213.cnt))
{this__10213.cnt = 0;
return tcoll;
} else
{if((((this__10213.cnt - 1) & 31) > 0))
{this__10213.cnt = (this__10213.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__10214 = cljs.core.editable_array_for.call(null,tcoll,(this__10213.cnt - 2));
var new_root__10216 = (function (){var nr__10215 = cljs.core.tv_pop_tail.call(null,tcoll,this__10213.shift,this__10213.root);
if(!((nr__10215 == null)))
{return nr__10215;
} else
{return (new cljs.core.VectorNode(this__10213.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____10217 = (5 < this__10213.shift);
if(and__3822__auto____10217)
{return (cljs.core.pv_aget.call(null,new_root__10216,1) == null);
} else
{return and__3822__auto____10217;
}
})())
{var new_root__10218 = cljs.core.tv_ensure_editable.call(null,this__10213.root.edit,cljs.core.pv_aget.call(null,new_root__10216,0));
this__10213.root = new_root__10218;
this__10213.shift = (this__10213.shift - 5);
this__10213.cnt = (this__10213.cnt - 1);
this__10213.tail = new_tail__10214;
return tcoll;
} else
{this__10213.root = new_root__10216;
this__10213.cnt = (this__10213.cnt - 1);
this__10213.tail = new_tail__10214;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10219 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10220 = this;
if(this__10220.root.edit)
{if(((this__10220.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__10220.tail[(this__10220.cnt & 31)] = o);
this__10220.cnt = (this__10220.cnt + 1);
return tcoll;
} else
{var tail_node__10221 = (new cljs.core.VectorNode(this__10220.root.edit,this__10220.tail));
var new_tail__10222 = cljs.core.make_array.call(null,32);
(new_tail__10222[0] = o);
this__10220.tail = new_tail__10222;
if(((this__10220.cnt >>> 5) > (1 << this__10220.shift)))
{var new_root_array__10223 = cljs.core.make_array.call(null,32);
var new_shift__10224 = (this__10220.shift + 5);
(new_root_array__10223[0] = this__10220.root);
(new_root_array__10223[1] = cljs.core.new_path.call(null,this__10220.root.edit,this__10220.shift,tail_node__10221));
this__10220.root = (new cljs.core.VectorNode(this__10220.root.edit,new_root_array__10223));
this__10220.shift = new_shift__10224;
this__10220.cnt = (this__10220.cnt + 1);
return tcoll;
} else
{var new_root__10225 = cljs.core.tv_push_tail.call(null,tcoll,this__10220.shift,this__10220.root,tail_node__10221);
this__10220.root = new_root__10225;
this__10220.cnt = (this__10220.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10226 = this;
if(this__10226.root.edit)
{this__10226.root.edit = null;
var len__10227 = (this__10226.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__10228 = cljs.core.make_array.call(null,len__10227);
cljs.core.array_copy.call(null,this__10226.tail,0,trimmed_tail__10228,0,len__10227);
return (new cljs.core.PersistentVector(null,this__10226.cnt,this__10226.shift,this__10226.root,trimmed_tail__10228,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10230 = this;
var h__2220__auto____10231 = this__10230.__hash;
if(!((h__2220__auto____10231 == null)))
{return h__2220__auto____10231;
} else
{var h__2220__auto____10232 = cljs.core.hash_coll.call(null,coll);
this__10230.__hash = h__2220__auto____10232;
return h__2220__auto____10232;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10233 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__10234 = this;
var this__10235 = this;
return cljs.core.pr_str.call(null,this__10235);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10236 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10237 = this;
return cljs.core._first.call(null,this__10237.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10238 = this;
var temp__3971__auto____10239 = cljs.core.next.call(null,this__10238.front);
if(temp__3971__auto____10239)
{var f1__10240 = temp__3971__auto____10239;
return (new cljs.core.PersistentQueueSeq(this__10238.meta,f1__10240,this__10238.rear,null));
} else
{if((this__10238.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__10238.meta,this__10238.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10241 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10242 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__10242.front,this__10242.rear,this__10242.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10243 = this;
return this__10243.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10244 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10244.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10245 = this;
var h__2220__auto____10246 = this__10245.__hash;
if(!((h__2220__auto____10246 == null)))
{return h__2220__auto____10246;
} else
{var h__2220__auto____10247 = cljs.core.hash_coll.call(null,coll);
this__10245.__hash = h__2220__auto____10247;
return h__2220__auto____10247;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10248 = this;
if(cljs.core.truth_(this__10248.front))
{return (new cljs.core.PersistentQueue(this__10248.meta,(this__10248.count + 1),this__10248.front,cljs.core.conj.call(null,(function (){var or__3824__auto____10249 = this__10248.rear;
if(cljs.core.truth_(or__3824__auto____10249))
{return or__3824__auto____10249;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__10248.meta,(this__10248.count + 1),cljs.core.conj.call(null,this__10248.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__10250 = this;
var this__10251 = this;
return cljs.core.pr_str.call(null,this__10251);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10252 = this;
var rear__10253 = cljs.core.seq.call(null,this__10252.rear);
if(cljs.core.truth_((function (){var or__3824__auto____10254 = this__10252.front;
if(cljs.core.truth_(or__3824__auto____10254))
{return or__3824__auto____10254;
} else
{return rear__10253;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__10252.front,cljs.core.seq.call(null,rear__10253),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10255 = this;
return this__10255.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10256 = this;
return cljs.core._first.call(null,this__10256.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10257 = this;
if(cljs.core.truth_(this__10257.front))
{var temp__3971__auto____10258 = cljs.core.next.call(null,this__10257.front);
if(temp__3971__auto____10258)
{var f1__10259 = temp__3971__auto____10258;
return (new cljs.core.PersistentQueue(this__10257.meta,(this__10257.count - 1),f1__10259,this__10257.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__10257.meta,(this__10257.count - 1),cljs.core.seq.call(null,this__10257.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10260 = this;
return cljs.core.first.call(null,this__10260.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10261 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10262 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10263 = this;
return (new cljs.core.PersistentQueue(meta,this__10263.count,this__10263.front,this__10263.rear,this__10263.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10264 = this;
return this__10264.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10265 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10266 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__10269 = array.length;
var i__10270 = 0;
while(true){
if((i__10270 < len__10269))
{if((k === (array[i__10270])))
{return i__10270;
} else
{{
var G__10271 = (i__10270 + incr);
i__10270 = G__10271;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__10274 = cljs.core.hash.call(null,a);
var b__10275 = cljs.core.hash.call(null,b);
if((a__10274 < b__10275))
{return -1;
} else
{if((a__10274 > b__10275))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__10283 = m.keys;
var len__10284 = ks__10283.length;
var so__10285 = m.strobj;
var out__10286 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__10287 = 0;
var out__10288 = cljs.core.transient$.call(null,out__10286);
while(true){
if((i__10287 < len__10284))
{var k__10289 = (ks__10283[i__10287]);
{
var G__10290 = (i__10287 + 1);
var G__10291 = cljs.core.assoc_BANG_.call(null,out__10288,k__10289,(so__10285[k__10289]));
i__10287 = G__10290;
out__10288 = G__10291;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__10288,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__10297 = {};
var l__10298 = ks.length;
var i__10299 = 0;
while(true){
if((i__10299 < l__10298))
{var k__10300 = (ks[i__10299]);
(new_obj__10297[k__10300] = (obj[k__10300]));
{
var G__10301 = (i__10299 + 1);
i__10299 = G__10301;
continue;
}
} else
{}
break;
}
return new_obj__10297;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10304 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10305 = this;
var h__2220__auto____10306 = this__10305.__hash;
if(!((h__2220__auto____10306 == null)))
{return h__2220__auto____10306;
} else
{var h__2220__auto____10307 = cljs.core.hash_imap.call(null,coll);
this__10305.__hash = h__2220__auto____10307;
return h__2220__auto____10307;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10308 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10309 = this;
if((function (){var and__3822__auto____10310 = goog.isString(k);
if(and__3822__auto____10310)
{return !((cljs.core.scan_array.call(null,1,k,this__10309.keys) == null));
} else
{return and__3822__auto____10310;
}
})())
{return (this__10309.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10311 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____10312 = (this__10311.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____10312)
{return or__3824__auto____10312;
} else
{return (this__10311.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__10311.keys) == null)))
{var new_strobj__10313 = cljs.core.obj_clone.call(null,this__10311.strobj,this__10311.keys);
(new_strobj__10313[k] = v);
return (new cljs.core.ObjMap(this__10311.meta,this__10311.keys,new_strobj__10313,(this__10311.update_count + 1),null));
} else
{var new_strobj__10314 = cljs.core.obj_clone.call(null,this__10311.strobj,this__10311.keys);
var new_keys__10315 = this__10311.keys.slice();
(new_strobj__10314[k] = v);
new_keys__10315.push(k);
return (new cljs.core.ObjMap(this__10311.meta,new_keys__10315,new_strobj__10314,(this__10311.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10316 = this;
if((function (){var and__3822__auto____10317 = goog.isString(k);
if(and__3822__auto____10317)
{return !((cljs.core.scan_array.call(null,1,k,this__10316.keys) == null));
} else
{return and__3822__auto____10317;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__10339 = null;
var G__10339__2 = (function (this_sym10318,k){
var this__10320 = this;
var this_sym10318__10321 = this;
var coll__10322 = this_sym10318__10321;
return coll__10322.cljs$core$ILookup$_lookup$arity$2(coll__10322,k);
});
var G__10339__3 = (function (this_sym10319,k,not_found){
var this__10320 = this;
var this_sym10319__10323 = this;
var coll__10324 = this_sym10319__10323;
return coll__10324.cljs$core$ILookup$_lookup$arity$3(coll__10324,k,not_found);
});
G__10339 = function(this_sym10319,k,not_found){
switch(arguments.length){
case 2:
return G__10339__2.call(this,this_sym10319,k);
case 3:
return G__10339__3.call(this,this_sym10319,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10339;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym10302,args10303){
var this__10325 = this;
return this_sym10302.call.apply(this_sym10302,[this_sym10302].concat(args10303.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10326 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__10327 = this;
var this__10328 = this;
return cljs.core.pr_str.call(null,this__10328);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10329 = this;
if((this__10329.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__10292_SHARP_){
return cljs.core.vector.call(null,p1__10292_SHARP_,(this__10329.strobj[p1__10292_SHARP_]));
}),this__10329.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10330 = this;
return this__10330.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10331 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10332 = this;
return (new cljs.core.ObjMap(meta,this__10332.keys,this__10332.strobj,this__10332.update_count,this__10332.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10333 = this;
return this__10333.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10334 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__10334.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10335 = this;
if((function (){var and__3822__auto____10336 = goog.isString(k);
if(and__3822__auto____10336)
{return !((cljs.core.scan_array.call(null,1,k,this__10335.keys) == null));
} else
{return and__3822__auto____10336;
}
})())
{var new_keys__10337 = this__10335.keys.slice();
var new_strobj__10338 = cljs.core.obj_clone.call(null,this__10335.strobj,this__10335.keys);
new_keys__10337.splice(cljs.core.scan_array.call(null,1,k,new_keys__10337),1);
cljs.core.js_delete.call(null,new_strobj__10338,k);
return (new cljs.core.ObjMap(this__10335.meta,new_keys__10337,new_strobj__10338,(this__10335.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10343 = this;
var h__2220__auto____10344 = this__10343.__hash;
if(!((h__2220__auto____10344 == null)))
{return h__2220__auto____10344;
} else
{var h__2220__auto____10345 = cljs.core.hash_imap.call(null,coll);
this__10343.__hash = h__2220__auto____10345;
return h__2220__auto____10345;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10346 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10347 = this;
var bucket__10348 = (this__10347.hashobj[cljs.core.hash.call(null,k)]);
var i__10349 = (cljs.core.truth_(bucket__10348)?cljs.core.scan_array.call(null,2,k,bucket__10348):null);
if(cljs.core.truth_(i__10349))
{return (bucket__10348[(i__10349 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10350 = this;
var h__10351 = cljs.core.hash.call(null,k);
var bucket__10352 = (this__10350.hashobj[h__10351]);
if(cljs.core.truth_(bucket__10352))
{var new_bucket__10353 = bucket__10352.slice();
var new_hashobj__10354 = goog.object.clone(this__10350.hashobj);
(new_hashobj__10354[h__10351] = new_bucket__10353);
var temp__3971__auto____10355 = cljs.core.scan_array.call(null,2,k,new_bucket__10353);
if(cljs.core.truth_(temp__3971__auto____10355))
{var i__10356 = temp__3971__auto____10355;
(new_bucket__10353[(i__10356 + 1)] = v);
return (new cljs.core.HashMap(this__10350.meta,this__10350.count,new_hashobj__10354,null));
} else
{new_bucket__10353.push(k,v);
return (new cljs.core.HashMap(this__10350.meta,(this__10350.count + 1),new_hashobj__10354,null));
}
} else
{var new_hashobj__10357 = goog.object.clone(this__10350.hashobj);
(new_hashobj__10357[h__10351] = [k,v]);
return (new cljs.core.HashMap(this__10350.meta,(this__10350.count + 1),new_hashobj__10357,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10358 = this;
var bucket__10359 = (this__10358.hashobj[cljs.core.hash.call(null,k)]);
var i__10360 = (cljs.core.truth_(bucket__10359)?cljs.core.scan_array.call(null,2,k,bucket__10359):null);
if(cljs.core.truth_(i__10360))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__10385 = null;
var G__10385__2 = (function (this_sym10361,k){
var this__10363 = this;
var this_sym10361__10364 = this;
var coll__10365 = this_sym10361__10364;
return coll__10365.cljs$core$ILookup$_lookup$arity$2(coll__10365,k);
});
var G__10385__3 = (function (this_sym10362,k,not_found){
var this__10363 = this;
var this_sym10362__10366 = this;
var coll__10367 = this_sym10362__10366;
return coll__10367.cljs$core$ILookup$_lookup$arity$3(coll__10367,k,not_found);
});
G__10385 = function(this_sym10362,k,not_found){
switch(arguments.length){
case 2:
return G__10385__2.call(this,this_sym10362,k);
case 3:
return G__10385__3.call(this,this_sym10362,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10385;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym10341,args10342){
var this__10368 = this;
return this_sym10341.call.apply(this_sym10341,[this_sym10341].concat(args10342.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10369 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__10370 = this;
var this__10371 = this;
return cljs.core.pr_str.call(null,this__10371);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10372 = this;
if((this__10372.count > 0))
{var hashes__10373 = cljs.core.js_keys.call(null,this__10372.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__10340_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__10372.hashobj[p1__10340_SHARP_])));
}),hashes__10373);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10374 = this;
return this__10374.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10375 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10376 = this;
return (new cljs.core.HashMap(meta,this__10376.count,this__10376.hashobj,this__10376.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10377 = this;
return this__10377.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10378 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__10378.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10379 = this;
var h__10380 = cljs.core.hash.call(null,k);
var bucket__10381 = (this__10379.hashobj[h__10380]);
var i__10382 = (cljs.core.truth_(bucket__10381)?cljs.core.scan_array.call(null,2,k,bucket__10381):null);
if(cljs.core.not.call(null,i__10382))
{return coll;
} else
{var new_hashobj__10383 = goog.object.clone(this__10379.hashobj);
if((3 > bucket__10381.length))
{cljs.core.js_delete.call(null,new_hashobj__10383,h__10380);
} else
{var new_bucket__10384 = bucket__10381.slice();
new_bucket__10384.splice(i__10382,2);
(new_hashobj__10383[h__10380] = new_bucket__10384);
}
return (new cljs.core.HashMap(this__10379.meta,(this__10379.count - 1),new_hashobj__10383,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__10386 = ks.length;
var i__10387 = 0;
var out__10388 = cljs.core.HashMap.EMPTY;
while(true){
if((i__10387 < len__10386))
{{
var G__10389 = (i__10387 + 1);
var G__10390 = cljs.core.assoc.call(null,out__10388,(ks[i__10387]),(vs[i__10387]));
i__10387 = G__10389;
out__10388 = G__10390;
continue;
}
} else
{return out__10388;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__10394 = m.arr;
var len__10395 = arr__10394.length;
var i__10396 = 0;
while(true){
if((len__10395 <= i__10396))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__10394[i__10396]),k))
{return i__10396;
} else
{if("\uFDD0'else")
{{
var G__10397 = (i__10396 + 2);
i__10396 = G__10397;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10400 = this;
return (new cljs.core.TransientArrayMap({},this__10400.arr.length,this__10400.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10401 = this;
var h__2220__auto____10402 = this__10401.__hash;
if(!((h__2220__auto____10402 == null)))
{return h__2220__auto____10402;
} else
{var h__2220__auto____10403 = cljs.core.hash_imap.call(null,coll);
this__10401.__hash = h__2220__auto____10403;
return h__2220__auto____10403;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10404 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10405 = this;
var idx__10406 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10406 === -1))
{return not_found;
} else
{return (this__10405.arr[(idx__10406 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10407 = this;
var idx__10408 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10408 === -1))
{if((this__10407.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__10407.meta,(this__10407.cnt + 1),(function (){var G__10409__10410 = this__10407.arr.slice();
G__10409__10410.push(k);
G__10409__10410.push(v);
return G__10409__10410;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__10407.arr[(idx__10408 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__10407.meta,this__10407.cnt,(function (){var G__10411__10412 = this__10407.arr.slice();
(G__10411__10412[(idx__10408 + 1)] = v);
return G__10411__10412;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10413 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__10445 = null;
var G__10445__2 = (function (this_sym10414,k){
var this__10416 = this;
var this_sym10414__10417 = this;
var coll__10418 = this_sym10414__10417;
return coll__10418.cljs$core$ILookup$_lookup$arity$2(coll__10418,k);
});
var G__10445__3 = (function (this_sym10415,k,not_found){
var this__10416 = this;
var this_sym10415__10419 = this;
var coll__10420 = this_sym10415__10419;
return coll__10420.cljs$core$ILookup$_lookup$arity$3(coll__10420,k,not_found);
});
G__10445 = function(this_sym10415,k,not_found){
switch(arguments.length){
case 2:
return G__10445__2.call(this,this_sym10415,k);
case 3:
return G__10445__3.call(this,this_sym10415,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10445;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym10398,args10399){
var this__10421 = this;
return this_sym10398.call.apply(this_sym10398,[this_sym10398].concat(args10399.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10422 = this;
var len__10423 = this__10422.arr.length;
var i__10424 = 0;
var init__10425 = init;
while(true){
if((i__10424 < len__10423))
{var init__10426 = f.call(null,init__10425,(this__10422.arr[i__10424]),(this__10422.arr[(i__10424 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__10426))
{return cljs.core.deref.call(null,init__10426);
} else
{{
var G__10446 = (i__10424 + 2);
var G__10447 = init__10426;
i__10424 = G__10446;
init__10425 = G__10447;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10427 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__10428 = this;
var this__10429 = this;
return cljs.core.pr_str.call(null,this__10429);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10430 = this;
if((this__10430.cnt > 0))
{var len__10431 = this__10430.arr.length;
var array_map_seq__10432 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__10431))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__10430.arr[i]),(this__10430.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__10432.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10433 = this;
return this__10433.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10434 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10435 = this;
return (new cljs.core.PersistentArrayMap(meta,this__10435.cnt,this__10435.arr,this__10435.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10436 = this;
return this__10436.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10437 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10437.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10438 = this;
var idx__10439 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10439 >= 0))
{var len__10440 = this__10438.arr.length;
var new_len__10441 = (len__10440 - 2);
if((new_len__10441 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__10442 = cljs.core.make_array.call(null,new_len__10441);
var s__10443 = 0;
var d__10444 = 0;
while(true){
if((s__10443 >= len__10440))
{return (new cljs.core.PersistentArrayMap(this__10438.meta,(this__10438.cnt - 1),new_arr__10442,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__10438.arr[s__10443])))
{{
var G__10448 = (s__10443 + 2);
var G__10449 = d__10444;
s__10443 = G__10448;
d__10444 = G__10449;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__10442[d__10444] = (this__10438.arr[s__10443]));
(new_arr__10442[(d__10444 + 1)] = (this__10438.arr[(s__10443 + 1)]));
{
var G__10450 = (s__10443 + 2);
var G__10451 = (d__10444 + 2);
s__10443 = G__10450;
d__10444 = G__10451;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__10452 = cljs.core.count.call(null,ks);
var i__10453 = 0;
var out__10454 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__10453 < len__10452))
{{
var G__10455 = (i__10453 + 1);
var G__10456 = cljs.core.assoc_BANG_.call(null,out__10454,(ks[i__10453]),(vs[i__10453]));
i__10453 = G__10455;
out__10454 = G__10456;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10454);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__10457 = this;
if(cljs.core.truth_(this__10457.editable_QMARK_))
{var idx__10458 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__10458 >= 0))
{(this__10457.arr[idx__10458] = (this__10457.arr[(this__10457.len - 2)]));
(this__10457.arr[(idx__10458 + 1)] = (this__10457.arr[(this__10457.len - 1)]));
var G__10459__10460 = this__10457.arr;
G__10459__10460.pop();
G__10459__10460.pop();
G__10459__10460;
this__10457.len = (this__10457.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10461 = this;
if(cljs.core.truth_(this__10461.editable_QMARK_))
{var idx__10462 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__10462 === -1))
{if(((this__10461.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__10461.len = (this__10461.len + 2);
this__10461.arr.push(key);
this__10461.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__10461.len,this__10461.arr),key,val);
}
} else
{if((val === (this__10461.arr[(idx__10462 + 1)])))
{return tcoll;
} else
{(this__10461.arr[(idx__10462 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10463 = this;
if(cljs.core.truth_(this__10463.editable_QMARK_))
{if((function (){var G__10464__10465 = o;
if(G__10464__10465)
{if((function (){var or__3824__auto____10466 = (G__10464__10465.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____10466)
{return or__3824__auto____10466;
} else
{return G__10464__10465.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__10464__10465.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10464__10465);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10464__10465);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__10467 = cljs.core.seq.call(null,o);
var tcoll__10468 = tcoll;
while(true){
var temp__3971__auto____10469 = cljs.core.first.call(null,es__10467);
if(cljs.core.truth_(temp__3971__auto____10469))
{var e__10470 = temp__3971__auto____10469;
{
var G__10476 = cljs.core.next.call(null,es__10467);
var G__10477 = tcoll__10468.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__10468,cljs.core.key.call(null,e__10470),cljs.core.val.call(null,e__10470));
es__10467 = G__10476;
tcoll__10468 = G__10477;
continue;
}
} else
{return tcoll__10468;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10471 = this;
if(cljs.core.truth_(this__10471.editable_QMARK_))
{this__10471.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__10471.len,2),this__10471.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__10472 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__10473 = this;
if(cljs.core.truth_(this__10473.editable_QMARK_))
{var idx__10474 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__10474 === -1))
{return not_found;
} else
{return (this__10473.arr[(idx__10474 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10475 = this;
if(cljs.core.truth_(this__10475.editable_QMARK_))
{return cljs.core.quot.call(null,this__10475.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__10480 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__10481 = 0;
while(true){
if((i__10481 < len))
{{
var G__10482 = cljs.core.assoc_BANG_.call(null,out__10480,(arr[i__10481]),(arr[(i__10481 + 1)]));
var G__10483 = (i__10481 + 2);
out__10480 = G__10482;
i__10481 = G__10483;
continue;
}
} else
{return out__10480;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2338__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__10488__10489 = arr.slice();
(G__10488__10489[i] = a);
return G__10488__10489;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__10490__10491 = arr.slice();
(G__10490__10491[i] = a);
(G__10490__10491[j] = b);
return G__10490__10491;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__10493 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__10493,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__10493,(2 * i),(new_arr__10493.length - (2 * i)));
return new_arr__10493;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__10496 = inode.ensure_editable(edit);
(editable__10496.arr[i] = a);
return editable__10496;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__10497 = inode.ensure_editable(edit);
(editable__10497.arr[i] = a);
(editable__10497.arr[j] = b);
return editable__10497;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__10504 = arr.length;
var i__10505 = 0;
var init__10506 = init;
while(true){
if((i__10505 < len__10504))
{var init__10509 = (function (){var k__10507 = (arr[i__10505]);
if(!((k__10507 == null)))
{return f.call(null,init__10506,k__10507,(arr[(i__10505 + 1)]));
} else
{var node__10508 = (arr[(i__10505 + 1)]);
if(!((node__10508 == null)))
{return node__10508.kv_reduce(f,init__10506);
} else
{return init__10506;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10509))
{return cljs.core.deref.call(null,init__10509);
} else
{{
var G__10510 = (i__10505 + 2);
var G__10511 = init__10509;
i__10505 = G__10510;
init__10506 = G__10511;
continue;
}
}
} else
{return init__10506;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__10512 = this;
var inode__10513 = this;
if((this__10512.bitmap === bit))
{return null;
} else
{var editable__10514 = inode__10513.ensure_editable(e);
var earr__10515 = editable__10514.arr;
var len__10516 = earr__10515.length;
editable__10514.bitmap = (bit ^ editable__10514.bitmap);
cljs.core.array_copy.call(null,earr__10515,(2 * (i + 1)),earr__10515,(2 * i),(len__10516 - (2 * (i + 1))));
(earr__10515[(len__10516 - 2)] = null);
(earr__10515[(len__10516 - 1)] = null);
return editable__10514;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10517 = this;
var inode__10518 = this;
var bit__10519 = (1 << ((hash >>> shift) & 0x01f));
var idx__10520 = cljs.core.bitmap_indexed_node_index.call(null,this__10517.bitmap,bit__10519);
if(((this__10517.bitmap & bit__10519) === 0))
{var n__10521 = cljs.core.bit_count.call(null,this__10517.bitmap);
if(((2 * n__10521) < this__10517.arr.length))
{var editable__10522 = inode__10518.ensure_editable(edit);
var earr__10523 = editable__10522.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__10523,(2 * idx__10520),earr__10523,(2 * (idx__10520 + 1)),(2 * (n__10521 - idx__10520)));
(earr__10523[(2 * idx__10520)] = key);
(earr__10523[((2 * idx__10520) + 1)] = val);
editable__10522.bitmap = (editable__10522.bitmap | bit__10519);
return editable__10522;
} else
{if((n__10521 >= 16))
{var nodes__10524 = cljs.core.make_array.call(null,32);
var jdx__10525 = ((hash >>> shift) & 0x01f);
(nodes__10524[jdx__10525] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__10526 = 0;
var j__10527 = 0;
while(true){
if((i__10526 < 32))
{if((((this__10517.bitmap >>> i__10526) & 1) === 0))
{{
var G__10580 = (i__10526 + 1);
var G__10581 = j__10527;
i__10526 = G__10580;
j__10527 = G__10581;
continue;
}
} else
{(nodes__10524[i__10526] = ((!(((this__10517.arr[j__10527]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__10517.arr[j__10527])),(this__10517.arr[j__10527]),(this__10517.arr[(j__10527 + 1)]),added_leaf_QMARK_):(this__10517.arr[(j__10527 + 1)])));
{
var G__10582 = (i__10526 + 1);
var G__10583 = (j__10527 + 2);
i__10526 = G__10582;
j__10527 = G__10583;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__10521 + 1),nodes__10524));
} else
{if("\uFDD0'else")
{var new_arr__10528 = cljs.core.make_array.call(null,(2 * (n__10521 + 4)));
cljs.core.array_copy.call(null,this__10517.arr,0,new_arr__10528,0,(2 * idx__10520));
(new_arr__10528[(2 * idx__10520)] = key);
(new_arr__10528[((2 * idx__10520) + 1)] = val);
cljs.core.array_copy.call(null,this__10517.arr,(2 * idx__10520),new_arr__10528,(2 * (idx__10520 + 1)),(2 * (n__10521 - idx__10520)));
added_leaf_QMARK_.val = true;
var editable__10529 = inode__10518.ensure_editable(edit);
editable__10529.arr = new_arr__10528;
editable__10529.bitmap = (editable__10529.bitmap | bit__10519);
return editable__10529;
} else
{return null;
}
}
}
} else
{var key_or_nil__10530 = (this__10517.arr[(2 * idx__10520)]);
var val_or_node__10531 = (this__10517.arr[((2 * idx__10520) + 1)]);
if((key_or_nil__10530 == null))
{var n__10532 = val_or_node__10531.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10532 === val_or_node__10531))
{return inode__10518;
} else
{return cljs.core.edit_and_set.call(null,inode__10518,edit,((2 * idx__10520) + 1),n__10532);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10530))
{if((val === val_or_node__10531))
{return inode__10518;
} else
{return cljs.core.edit_and_set.call(null,inode__10518,edit,((2 * idx__10520) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__10518,edit,(2 * idx__10520),null,((2 * idx__10520) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__10530,val_or_node__10531,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__10533 = this;
var inode__10534 = this;
return cljs.core.create_inode_seq.call(null,this__10533.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10535 = this;
var inode__10536 = this;
var bit__10537 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10535.bitmap & bit__10537) === 0))
{return inode__10536;
} else
{var idx__10538 = cljs.core.bitmap_indexed_node_index.call(null,this__10535.bitmap,bit__10537);
var key_or_nil__10539 = (this__10535.arr[(2 * idx__10538)]);
var val_or_node__10540 = (this__10535.arr[((2 * idx__10538) + 1)]);
if((key_or_nil__10539 == null))
{var n__10541 = val_or_node__10540.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__10541 === val_or_node__10540))
{return inode__10536;
} else
{if(!((n__10541 == null)))
{return cljs.core.edit_and_set.call(null,inode__10536,edit,((2 * idx__10538) + 1),n__10541);
} else
{if((this__10535.bitmap === bit__10537))
{return null;
} else
{if("\uFDD0'else")
{return inode__10536.edit_and_remove_pair(edit,bit__10537,idx__10538);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10539))
{(removed_leaf_QMARK_[0] = true);
return inode__10536.edit_and_remove_pair(edit,bit__10537,idx__10538);
} else
{if("\uFDD0'else")
{return inode__10536;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__10542 = this;
var inode__10543 = this;
if((e === this__10542.edit))
{return inode__10543;
} else
{var n__10544 = cljs.core.bit_count.call(null,this__10542.bitmap);
var new_arr__10545 = cljs.core.make_array.call(null,(((n__10544 < 0))?4:(2 * (n__10544 + 1))));
cljs.core.array_copy.call(null,this__10542.arr,0,new_arr__10545,0,(2 * n__10544));
return (new cljs.core.BitmapIndexedNode(e,this__10542.bitmap,new_arr__10545));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__10546 = this;
var inode__10547 = this;
return cljs.core.inode_kv_reduce.call(null,this__10546.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10548 = this;
var inode__10549 = this;
var bit__10550 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10548.bitmap & bit__10550) === 0))
{return not_found;
} else
{var idx__10551 = cljs.core.bitmap_indexed_node_index.call(null,this__10548.bitmap,bit__10550);
var key_or_nil__10552 = (this__10548.arr[(2 * idx__10551)]);
var val_or_node__10553 = (this__10548.arr[((2 * idx__10551) + 1)]);
if((key_or_nil__10552 == null))
{return val_or_node__10553.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10552))
{return cljs.core.PersistentVector.fromArray([key_or_nil__10552,val_or_node__10553], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__10554 = this;
var inode__10555 = this;
var bit__10556 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10554.bitmap & bit__10556) === 0))
{return inode__10555;
} else
{var idx__10557 = cljs.core.bitmap_indexed_node_index.call(null,this__10554.bitmap,bit__10556);
var key_or_nil__10558 = (this__10554.arr[(2 * idx__10557)]);
var val_or_node__10559 = (this__10554.arr[((2 * idx__10557) + 1)]);
if((key_or_nil__10558 == null))
{var n__10560 = val_or_node__10559.inode_without((shift + 5),hash,key);
if((n__10560 === val_or_node__10559))
{return inode__10555;
} else
{if(!((n__10560 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__10554.bitmap,cljs.core.clone_and_set.call(null,this__10554.arr,((2 * idx__10557) + 1),n__10560)));
} else
{if((this__10554.bitmap === bit__10556))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__10554.bitmap ^ bit__10556),cljs.core.remove_pair.call(null,this__10554.arr,idx__10557)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10558))
{return (new cljs.core.BitmapIndexedNode(null,(this__10554.bitmap ^ bit__10556),cljs.core.remove_pair.call(null,this__10554.arr,idx__10557)));
} else
{if("\uFDD0'else")
{return inode__10555;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10561 = this;
var inode__10562 = this;
var bit__10563 = (1 << ((hash >>> shift) & 0x01f));
var idx__10564 = cljs.core.bitmap_indexed_node_index.call(null,this__10561.bitmap,bit__10563);
if(((this__10561.bitmap & bit__10563) === 0))
{var n__10565 = cljs.core.bit_count.call(null,this__10561.bitmap);
if((n__10565 >= 16))
{var nodes__10566 = cljs.core.make_array.call(null,32);
var jdx__10567 = ((hash >>> shift) & 0x01f);
(nodes__10566[jdx__10567] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__10568 = 0;
var j__10569 = 0;
while(true){
if((i__10568 < 32))
{if((((this__10561.bitmap >>> i__10568) & 1) === 0))
{{
var G__10584 = (i__10568 + 1);
var G__10585 = j__10569;
i__10568 = G__10584;
j__10569 = G__10585;
continue;
}
} else
{(nodes__10566[i__10568] = ((!(((this__10561.arr[j__10569]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__10561.arr[j__10569])),(this__10561.arr[j__10569]),(this__10561.arr[(j__10569 + 1)]),added_leaf_QMARK_):(this__10561.arr[(j__10569 + 1)])));
{
var G__10586 = (i__10568 + 1);
var G__10587 = (j__10569 + 2);
i__10568 = G__10586;
j__10569 = G__10587;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__10565 + 1),nodes__10566));
} else
{var new_arr__10570 = cljs.core.make_array.call(null,(2 * (n__10565 + 1)));
cljs.core.array_copy.call(null,this__10561.arr,0,new_arr__10570,0,(2 * idx__10564));
(new_arr__10570[(2 * idx__10564)] = key);
(new_arr__10570[((2 * idx__10564) + 1)] = val);
cljs.core.array_copy.call(null,this__10561.arr,(2 * idx__10564),new_arr__10570,(2 * (idx__10564 + 1)),(2 * (n__10565 - idx__10564)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__10561.bitmap | bit__10563),new_arr__10570));
}
} else
{var key_or_nil__10571 = (this__10561.arr[(2 * idx__10564)]);
var val_or_node__10572 = (this__10561.arr[((2 * idx__10564) + 1)]);
if((key_or_nil__10571 == null))
{var n__10573 = val_or_node__10572.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10573 === val_or_node__10572))
{return inode__10562;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__10561.bitmap,cljs.core.clone_and_set.call(null,this__10561.arr,((2 * idx__10564) + 1),n__10573)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10571))
{if((val === val_or_node__10572))
{return inode__10562;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__10561.bitmap,cljs.core.clone_and_set.call(null,this__10561.arr,((2 * idx__10564) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__10561.bitmap,cljs.core.clone_and_set.call(null,this__10561.arr,(2 * idx__10564),null,((2 * idx__10564) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__10571,val_or_node__10572,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10574 = this;
var inode__10575 = this;
var bit__10576 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10574.bitmap & bit__10576) === 0))
{return not_found;
} else
{var idx__10577 = cljs.core.bitmap_indexed_node_index.call(null,this__10574.bitmap,bit__10576);
var key_or_nil__10578 = (this__10574.arr[(2 * idx__10577)]);
var val_or_node__10579 = (this__10574.arr[((2 * idx__10577) + 1)]);
if((key_or_nil__10578 == null))
{return val_or_node__10579.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10578))
{return val_or_node__10579;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__10595 = array_node.arr;
var len__10596 = (2 * (array_node.cnt - 1));
var new_arr__10597 = cljs.core.make_array.call(null,len__10596);
var i__10598 = 0;
var j__10599 = 1;
var bitmap__10600 = 0;
while(true){
if((i__10598 < len__10596))
{if((function (){var and__3822__auto____10601 = !((i__10598 === idx));
if(and__3822__auto____10601)
{return !(((arr__10595[i__10598]) == null));
} else
{return and__3822__auto____10601;
}
})())
{(new_arr__10597[j__10599] = (arr__10595[i__10598]));
{
var G__10602 = (i__10598 + 1);
var G__10603 = (j__10599 + 2);
var G__10604 = (bitmap__10600 | (1 << i__10598));
i__10598 = G__10602;
j__10599 = G__10603;
bitmap__10600 = G__10604;
continue;
}
} else
{{
var G__10605 = (i__10598 + 1);
var G__10606 = j__10599;
var G__10607 = bitmap__10600;
i__10598 = G__10605;
j__10599 = G__10606;
bitmap__10600 = G__10607;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__10600,new_arr__10597));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10608 = this;
var inode__10609 = this;
var idx__10610 = ((hash >>> shift) & 0x01f);
var node__10611 = (this__10608.arr[idx__10610]);
if((node__10611 == null))
{var editable__10612 = cljs.core.edit_and_set.call(null,inode__10609,edit,idx__10610,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__10612.cnt = (editable__10612.cnt + 1);
return editable__10612;
} else
{var n__10613 = node__10611.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10613 === node__10611))
{return inode__10609;
} else
{return cljs.core.edit_and_set.call(null,inode__10609,edit,idx__10610,n__10613);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__10614 = this;
var inode__10615 = this;
return cljs.core.create_array_node_seq.call(null,this__10614.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10616 = this;
var inode__10617 = this;
var idx__10618 = ((hash >>> shift) & 0x01f);
var node__10619 = (this__10616.arr[idx__10618]);
if((node__10619 == null))
{return inode__10617;
} else
{var n__10620 = node__10619.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__10620 === node__10619))
{return inode__10617;
} else
{if((n__10620 == null))
{if((this__10616.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__10617,edit,idx__10618);
} else
{var editable__10621 = cljs.core.edit_and_set.call(null,inode__10617,edit,idx__10618,n__10620);
editable__10621.cnt = (editable__10621.cnt - 1);
return editable__10621;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__10617,edit,idx__10618,n__10620);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__10622 = this;
var inode__10623 = this;
if((e === this__10622.edit))
{return inode__10623;
} else
{return (new cljs.core.ArrayNode(e,this__10622.cnt,this__10622.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__10624 = this;
var inode__10625 = this;
var len__10626 = this__10624.arr.length;
var i__10627 = 0;
var init__10628 = init;
while(true){
if((i__10627 < len__10626))
{var node__10629 = (this__10624.arr[i__10627]);
if(!((node__10629 == null)))
{var init__10630 = node__10629.kv_reduce(f,init__10628);
if(cljs.core.reduced_QMARK_.call(null,init__10630))
{return cljs.core.deref.call(null,init__10630);
} else
{{
var G__10649 = (i__10627 + 1);
var G__10650 = init__10630;
i__10627 = G__10649;
init__10628 = G__10650;
continue;
}
}
} else
{return null;
}
} else
{return init__10628;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10631 = this;
var inode__10632 = this;
var idx__10633 = ((hash >>> shift) & 0x01f);
var node__10634 = (this__10631.arr[idx__10633]);
if(!((node__10634 == null)))
{return node__10634.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__10635 = this;
var inode__10636 = this;
var idx__10637 = ((hash >>> shift) & 0x01f);
var node__10638 = (this__10635.arr[idx__10637]);
if(!((node__10638 == null)))
{var n__10639 = node__10638.inode_without((shift + 5),hash,key);
if((n__10639 === node__10638))
{return inode__10636;
} else
{if((n__10639 == null))
{if((this__10635.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__10636,null,idx__10637);
} else
{return (new cljs.core.ArrayNode(null,(this__10635.cnt - 1),cljs.core.clone_and_set.call(null,this__10635.arr,idx__10637,n__10639)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__10635.cnt,cljs.core.clone_and_set.call(null,this__10635.arr,idx__10637,n__10639)));
} else
{return null;
}
}
}
} else
{return inode__10636;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10640 = this;
var inode__10641 = this;
var idx__10642 = ((hash >>> shift) & 0x01f);
var node__10643 = (this__10640.arr[idx__10642]);
if((node__10643 == null))
{return (new cljs.core.ArrayNode(null,(this__10640.cnt + 1),cljs.core.clone_and_set.call(null,this__10640.arr,idx__10642,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__10644 = node__10643.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10644 === node__10643))
{return inode__10641;
} else
{return (new cljs.core.ArrayNode(null,this__10640.cnt,cljs.core.clone_and_set.call(null,this__10640.arr,idx__10642,n__10644)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10645 = this;
var inode__10646 = this;
var idx__10647 = ((hash >>> shift) & 0x01f);
var node__10648 = (this__10645.arr[idx__10647]);
if(!((node__10648 == null)))
{return node__10648.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__10653 = (2 * cnt);
var i__10654 = 0;
while(true){
if((i__10654 < lim__10653))
{if(cljs.core.key_test.call(null,key,(arr[i__10654])))
{return i__10654;
} else
{{
var G__10655 = (i__10654 + 2);
i__10654 = G__10655;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10656 = this;
var inode__10657 = this;
if((hash === this__10656.collision_hash))
{var idx__10658 = cljs.core.hash_collision_node_find_index.call(null,this__10656.arr,this__10656.cnt,key);
if((idx__10658 === -1))
{if((this__10656.arr.length > (2 * this__10656.cnt)))
{var editable__10659 = cljs.core.edit_and_set.call(null,inode__10657,edit,(2 * this__10656.cnt),key,((2 * this__10656.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__10659.cnt = (editable__10659.cnt + 1);
return editable__10659;
} else
{var len__10660 = this__10656.arr.length;
var new_arr__10661 = cljs.core.make_array.call(null,(len__10660 + 2));
cljs.core.array_copy.call(null,this__10656.arr,0,new_arr__10661,0,len__10660);
(new_arr__10661[len__10660] = key);
(new_arr__10661[(len__10660 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__10657.ensure_editable_array(edit,(this__10656.cnt + 1),new_arr__10661);
}
} else
{if(((this__10656.arr[(idx__10658 + 1)]) === val))
{return inode__10657;
} else
{return cljs.core.edit_and_set.call(null,inode__10657,edit,(idx__10658 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__10656.collision_hash >>> shift) & 0x01f)),[null,inode__10657,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__10662 = this;
var inode__10663 = this;
return cljs.core.create_inode_seq.call(null,this__10662.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10664 = this;
var inode__10665 = this;
var idx__10666 = cljs.core.hash_collision_node_find_index.call(null,this__10664.arr,this__10664.cnt,key);
if((idx__10666 === -1))
{return inode__10665;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__10664.cnt === 1))
{return null;
} else
{var editable__10667 = inode__10665.ensure_editable(edit);
var earr__10668 = editable__10667.arr;
(earr__10668[idx__10666] = (earr__10668[((2 * this__10664.cnt) - 2)]));
(earr__10668[(idx__10666 + 1)] = (earr__10668[((2 * this__10664.cnt) - 1)]));
(earr__10668[((2 * this__10664.cnt) - 1)] = null);
(earr__10668[((2 * this__10664.cnt) - 2)] = null);
editable__10667.cnt = (editable__10667.cnt - 1);
return editable__10667;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__10669 = this;
var inode__10670 = this;
if((e === this__10669.edit))
{return inode__10670;
} else
{var new_arr__10671 = cljs.core.make_array.call(null,(2 * (this__10669.cnt + 1)));
cljs.core.array_copy.call(null,this__10669.arr,0,new_arr__10671,0,(2 * this__10669.cnt));
return (new cljs.core.HashCollisionNode(e,this__10669.collision_hash,this__10669.cnt,new_arr__10671));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__10672 = this;
var inode__10673 = this;
return cljs.core.inode_kv_reduce.call(null,this__10672.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10674 = this;
var inode__10675 = this;
var idx__10676 = cljs.core.hash_collision_node_find_index.call(null,this__10674.arr,this__10674.cnt,key);
if((idx__10676 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__10674.arr[idx__10676])))
{return cljs.core.PersistentVector.fromArray([(this__10674.arr[idx__10676]),(this__10674.arr[(idx__10676 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__10677 = this;
var inode__10678 = this;
var idx__10679 = cljs.core.hash_collision_node_find_index.call(null,this__10677.arr,this__10677.cnt,key);
if((idx__10679 === -1))
{return inode__10678;
} else
{if((this__10677.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__10677.collision_hash,(this__10677.cnt - 1),cljs.core.remove_pair.call(null,this__10677.arr,cljs.core.quot.call(null,idx__10679,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10680 = this;
var inode__10681 = this;
if((hash === this__10680.collision_hash))
{var idx__10682 = cljs.core.hash_collision_node_find_index.call(null,this__10680.arr,this__10680.cnt,key);
if((idx__10682 === -1))
{var len__10683 = this__10680.arr.length;
var new_arr__10684 = cljs.core.make_array.call(null,(len__10683 + 2));
cljs.core.array_copy.call(null,this__10680.arr,0,new_arr__10684,0,len__10683);
(new_arr__10684[len__10683] = key);
(new_arr__10684[(len__10683 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__10680.collision_hash,(this__10680.cnt + 1),new_arr__10684));
} else
{if(cljs.core._EQ_.call(null,(this__10680.arr[idx__10682]),val))
{return inode__10681;
} else
{return (new cljs.core.HashCollisionNode(null,this__10680.collision_hash,this__10680.cnt,cljs.core.clone_and_set.call(null,this__10680.arr,(idx__10682 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__10680.collision_hash >>> shift) & 0x01f)),[null,inode__10681])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10685 = this;
var inode__10686 = this;
var idx__10687 = cljs.core.hash_collision_node_find_index.call(null,this__10685.arr,this__10685.cnt,key);
if((idx__10687 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__10685.arr[idx__10687])))
{return (this__10685.arr[(idx__10687 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__10688 = this;
var inode__10689 = this;
if((e === this__10688.edit))
{this__10688.arr = array;
this__10688.cnt = count;
return inode__10689;
} else
{return (new cljs.core.HashCollisionNode(this__10688.edit,this__10688.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__10694 = cljs.core.hash.call(null,key1);
if((key1hash__10694 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__10694,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___10695 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__10694,key1,val1,added_leaf_QMARK___10695).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___10695);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__10696 = cljs.core.hash.call(null,key1);
if((key1hash__10696 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__10696,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___10697 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__10696,key1,val1,added_leaf_QMARK___10697).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___10697);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10698 = this;
var h__2220__auto____10699 = this__10698.__hash;
if(!((h__2220__auto____10699 == null)))
{return h__2220__auto____10699;
} else
{var h__2220__auto____10700 = cljs.core.hash_coll.call(null,coll);
this__10698.__hash = h__2220__auto____10700;
return h__2220__auto____10700;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10701 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__10702 = this;
var this__10703 = this;
return cljs.core.pr_str.call(null,this__10703);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10704 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10705 = this;
if((this__10705.s == null))
{return cljs.core.PersistentVector.fromArray([(this__10705.nodes[this__10705.i]),(this__10705.nodes[(this__10705.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__10705.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10706 = this;
if((this__10706.s == null))
{return cljs.core.create_inode_seq.call(null,this__10706.nodes,(this__10706.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__10706.nodes,this__10706.i,cljs.core.next.call(null,this__10706.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10707 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10708 = this;
return (new cljs.core.NodeSeq(meta,this__10708.nodes,this__10708.i,this__10708.s,this__10708.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10709 = this;
return this__10709.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10710 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10710.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__10717 = nodes.length;
var j__10718 = i;
while(true){
if((j__10718 < len__10717))
{if(!(((nodes[j__10718]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__10718,null,null));
} else
{var temp__3971__auto____10719 = (nodes[(j__10718 + 1)]);
if(cljs.core.truth_(temp__3971__auto____10719))
{var node__10720 = temp__3971__auto____10719;
var temp__3971__auto____10721 = node__10720.inode_seq();
if(cljs.core.truth_(temp__3971__auto____10721))
{var node_seq__10722 = temp__3971__auto____10721;
return (new cljs.core.NodeSeq(null,nodes,(j__10718 + 2),node_seq__10722,null));
} else
{{
var G__10723 = (j__10718 + 2);
j__10718 = G__10723;
continue;
}
}
} else
{{
var G__10724 = (j__10718 + 2);
j__10718 = G__10724;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10725 = this;
var h__2220__auto____10726 = this__10725.__hash;
if(!((h__2220__auto____10726 == null)))
{return h__2220__auto____10726;
} else
{var h__2220__auto____10727 = cljs.core.hash_coll.call(null,coll);
this__10725.__hash = h__2220__auto____10727;
return h__2220__auto____10727;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10728 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__10729 = this;
var this__10730 = this;
return cljs.core.pr_str.call(null,this__10730);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10731 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10732 = this;
return cljs.core.first.call(null,this__10732.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10733 = this;
return cljs.core.create_array_node_seq.call(null,null,this__10733.nodes,this__10733.i,cljs.core.next.call(null,this__10733.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10734 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10735 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__10735.nodes,this__10735.i,this__10735.s,this__10735.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10736 = this;
return this__10736.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10737 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10737.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__10744 = nodes.length;
var j__10745 = i;
while(true){
if((j__10745 < len__10744))
{var temp__3971__auto____10746 = (nodes[j__10745]);
if(cljs.core.truth_(temp__3971__auto____10746))
{var nj__10747 = temp__3971__auto____10746;
var temp__3971__auto____10748 = nj__10747.inode_seq();
if(cljs.core.truth_(temp__3971__auto____10748))
{var ns__10749 = temp__3971__auto____10748;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__10745 + 1),ns__10749,null));
} else
{{
var G__10750 = (j__10745 + 1);
j__10745 = G__10750;
continue;
}
}
} else
{{
var G__10751 = (j__10745 + 1);
j__10745 = G__10751;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10754 = this;
return (new cljs.core.TransientHashMap({},this__10754.root,this__10754.cnt,this__10754.has_nil_QMARK_,this__10754.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10755 = this;
var h__2220__auto____10756 = this__10755.__hash;
if(!((h__2220__auto____10756 == null)))
{return h__2220__auto____10756;
} else
{var h__2220__auto____10757 = cljs.core.hash_imap.call(null,coll);
this__10755.__hash = h__2220__auto____10757;
return h__2220__auto____10757;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10758 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10759 = this;
if((k == null))
{if(this__10759.has_nil_QMARK_)
{return this__10759.nil_val;
} else
{return not_found;
}
} else
{if((this__10759.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__10759.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10760 = this;
if((k == null))
{if((function (){var and__3822__auto____10761 = this__10760.has_nil_QMARK_;
if(and__3822__auto____10761)
{return (v === this__10760.nil_val);
} else
{return and__3822__auto____10761;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10760.meta,((this__10760.has_nil_QMARK_)?this__10760.cnt:(this__10760.cnt + 1)),this__10760.root,true,v,null));
}
} else
{var added_leaf_QMARK___10762 = (new cljs.core.Box(false));
var new_root__10763 = (((this__10760.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__10760.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___10762);
if((new_root__10763 === this__10760.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10760.meta,((added_leaf_QMARK___10762.val)?(this__10760.cnt + 1):this__10760.cnt),new_root__10763,this__10760.has_nil_QMARK_,this__10760.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10764 = this;
if((k == null))
{return this__10764.has_nil_QMARK_;
} else
{if((this__10764.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__10764.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__10787 = null;
var G__10787__2 = (function (this_sym10765,k){
var this__10767 = this;
var this_sym10765__10768 = this;
var coll__10769 = this_sym10765__10768;
return coll__10769.cljs$core$ILookup$_lookup$arity$2(coll__10769,k);
});
var G__10787__3 = (function (this_sym10766,k,not_found){
var this__10767 = this;
var this_sym10766__10770 = this;
var coll__10771 = this_sym10766__10770;
return coll__10771.cljs$core$ILookup$_lookup$arity$3(coll__10771,k,not_found);
});
G__10787 = function(this_sym10766,k,not_found){
switch(arguments.length){
case 2:
return G__10787__2.call(this,this_sym10766,k);
case 3:
return G__10787__3.call(this,this_sym10766,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10787;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym10752,args10753){
var this__10772 = this;
return this_sym10752.call.apply(this_sym10752,[this_sym10752].concat(args10753.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10773 = this;
var init__10774 = ((this__10773.has_nil_QMARK_)?f.call(null,init,null,this__10773.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__10774))
{return cljs.core.deref.call(null,init__10774);
} else
{if(!((this__10773.root == null)))
{return this__10773.root.kv_reduce(f,init__10774);
} else
{if("\uFDD0'else")
{return init__10774;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10775 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__10776 = this;
var this__10777 = this;
return cljs.core.pr_str.call(null,this__10777);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10778 = this;
if((this__10778.cnt > 0))
{var s__10779 = ((!((this__10778.root == null)))?this__10778.root.inode_seq():null);
if(this__10778.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__10778.nil_val], true),s__10779);
} else
{return s__10779;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10780 = this;
return this__10780.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10781 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10782 = this;
return (new cljs.core.PersistentHashMap(meta,this__10782.cnt,this__10782.root,this__10782.has_nil_QMARK_,this__10782.nil_val,this__10782.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10783 = this;
return this__10783.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10784 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__10784.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10785 = this;
if((k == null))
{if(this__10785.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__10785.meta,(this__10785.cnt - 1),this__10785.root,false,null,null));
} else
{return coll;
}
} else
{if((this__10785.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__10786 = this__10785.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__10786 === this__10785.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10785.meta,(this__10785.cnt - 1),new_root__10786,this__10785.has_nil_QMARK_,this__10785.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__10788 = ks.length;
var i__10789 = 0;
var out__10790 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__10789 < len__10788))
{{
var G__10791 = (i__10789 + 1);
var G__10792 = cljs.core.assoc_BANG_.call(null,out__10790,(ks[i__10789]),(vs[i__10789]));
i__10789 = G__10791;
out__10790 = G__10792;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10790);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__10793 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10794 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__10795 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10796 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__10797 = this;
if((k == null))
{if(this__10797.has_nil_QMARK_)
{return this__10797.nil_val;
} else
{return null;
}
} else
{if((this__10797.root == null))
{return null;
} else
{return this__10797.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__10798 = this;
if((k == null))
{if(this__10798.has_nil_QMARK_)
{return this__10798.nil_val;
} else
{return not_found;
}
} else
{if((this__10798.root == null))
{return not_found;
} else
{return this__10798.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10799 = this;
if(this__10799.edit)
{return this__10799.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__10800 = this;
var tcoll__10801 = this;
if(this__10800.edit)
{if((function (){var G__10802__10803 = o;
if(G__10802__10803)
{if((function (){var or__3824__auto____10804 = (G__10802__10803.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____10804)
{return or__3824__auto____10804;
} else
{return G__10802__10803.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__10802__10803.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10802__10803);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10802__10803);
}
})())
{return tcoll__10801.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__10805 = cljs.core.seq.call(null,o);
var tcoll__10806 = tcoll__10801;
while(true){
var temp__3971__auto____10807 = cljs.core.first.call(null,es__10805);
if(cljs.core.truth_(temp__3971__auto____10807))
{var e__10808 = temp__3971__auto____10807;
{
var G__10819 = cljs.core.next.call(null,es__10805);
var G__10820 = tcoll__10806.assoc_BANG_(cljs.core.key.call(null,e__10808),cljs.core.val.call(null,e__10808));
es__10805 = G__10819;
tcoll__10806 = G__10820;
continue;
}
} else
{return tcoll__10806;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__10809 = this;
var tcoll__10810 = this;
if(this__10809.edit)
{if((k == null))
{if((this__10809.nil_val === v))
{} else
{this__10809.nil_val = v;
}
if(this__10809.has_nil_QMARK_)
{} else
{this__10809.count = (this__10809.count + 1);
this__10809.has_nil_QMARK_ = true;
}
return tcoll__10810;
} else
{var added_leaf_QMARK___10811 = (new cljs.core.Box(false));
var node__10812 = (((this__10809.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__10809.root).inode_assoc_BANG_(this__10809.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___10811);
if((node__10812 === this__10809.root))
{} else
{this__10809.root = node__10812;
}
if(added_leaf_QMARK___10811.val)
{this__10809.count = (this__10809.count + 1);
} else
{}
return tcoll__10810;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__10813 = this;
var tcoll__10814 = this;
if(this__10813.edit)
{if((k == null))
{if(this__10813.has_nil_QMARK_)
{this__10813.has_nil_QMARK_ = false;
this__10813.nil_val = null;
this__10813.count = (this__10813.count - 1);
return tcoll__10814;
} else
{return tcoll__10814;
}
} else
{if((this__10813.root == null))
{return tcoll__10814;
} else
{var removed_leaf_QMARK___10815 = (new cljs.core.Box(false));
var node__10816 = this__10813.root.inode_without_BANG_(this__10813.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___10815);
if((node__10816 === this__10813.root))
{} else
{this__10813.root = node__10816;
}
if(cljs.core.truth_((removed_leaf_QMARK___10815[0])))
{this__10813.count = (this__10813.count - 1);
} else
{}
return tcoll__10814;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__10817 = this;
var tcoll__10818 = this;
if(this__10817.edit)
{this__10817.edit = null;
return (new cljs.core.PersistentHashMap(null,this__10817.count,this__10817.root,this__10817.has_nil_QMARK_,this__10817.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__10823 = node;
var stack__10824 = stack;
while(true){
if(!((t__10823 == null)))
{{
var G__10825 = ((ascending_QMARK_)?t__10823.left:t__10823.right);
var G__10826 = cljs.core.conj.call(null,stack__10824,t__10823);
t__10823 = G__10825;
stack__10824 = G__10826;
continue;
}
} else
{return stack__10824;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10827 = this;
var h__2220__auto____10828 = this__10827.__hash;
if(!((h__2220__auto____10828 == null)))
{return h__2220__auto____10828;
} else
{var h__2220__auto____10829 = cljs.core.hash_coll.call(null,coll);
this__10827.__hash = h__2220__auto____10829;
return h__2220__auto____10829;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10830 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__10831 = this;
var this__10832 = this;
return cljs.core.pr_str.call(null,this__10832);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10833 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10834 = this;
if((this__10834.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__10834.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__10835 = this;
return cljs.core.peek.call(null,this__10835.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__10836 = this;
var t__10837 = cljs.core.first.call(null,this__10836.stack);
var next_stack__10838 = cljs.core.tree_map_seq_push.call(null,((this__10836.ascending_QMARK_)?t__10837.right:t__10837.left),cljs.core.next.call(null,this__10836.stack),this__10836.ascending_QMARK_);
if(!((next_stack__10838 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__10838,this__10836.ascending_QMARK_,(this__10836.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10839 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10840 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__10840.stack,this__10840.ascending_QMARK_,this__10840.cnt,this__10840.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10841 = this;
return this__10841.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____10843 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____10843)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____10843;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____10845 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____10845)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____10845;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__10849 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__10849))
{return cljs.core.deref.call(null,init__10849);
} else
{var init__10850 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__10849):init__10849);
if(cljs.core.reduced_QMARK_.call(null,init__10850))
{return cljs.core.deref.call(null,init__10850);
} else
{var init__10851 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__10850):init__10850);
if(cljs.core.reduced_QMARK_.call(null,init__10851))
{return cljs.core.deref.call(null,init__10851);
} else
{return init__10851;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10854 = this;
var h__2220__auto____10855 = this__10854.__hash;
if(!((h__2220__auto____10855 == null)))
{return h__2220__auto____10855;
} else
{var h__2220__auto____10856 = cljs.core.hash_coll.call(null,coll);
this__10854.__hash = h__2220__auto____10856;
return h__2220__auto____10856;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10857 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10858 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10859 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10859.key,this__10859.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__10907 = null;
var G__10907__2 = (function (this_sym10860,k){
var this__10862 = this;
var this_sym10860__10863 = this;
var node__10864 = this_sym10860__10863;
return node__10864.cljs$core$ILookup$_lookup$arity$2(node__10864,k);
});
var G__10907__3 = (function (this_sym10861,k,not_found){
var this__10862 = this;
var this_sym10861__10865 = this;
var node__10866 = this_sym10861__10865;
return node__10866.cljs$core$ILookup$_lookup$arity$3(node__10866,k,not_found);
});
G__10907 = function(this_sym10861,k,not_found){
switch(arguments.length){
case 2:
return G__10907__2.call(this,this_sym10861,k);
case 3:
return G__10907__3.call(this,this_sym10861,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10907;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym10852,args10853){
var this__10867 = this;
return this_sym10852.call.apply(this_sym10852,[this_sym10852].concat(args10853.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10868 = this;
return cljs.core.PersistentVector.fromArray([this__10868.key,this__10868.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10869 = this;
return this__10869.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10870 = this;
return this__10870.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__10871 = this;
var node__10872 = this;
return ins.balance_right(node__10872);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__10873 = this;
var node__10874 = this;
return (new cljs.core.RedNode(this__10873.key,this__10873.val,this__10873.left,this__10873.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__10875 = this;
var node__10876 = this;
return cljs.core.balance_right_del.call(null,this__10875.key,this__10875.val,this__10875.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__10877 = this;
var node__10878 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__10879 = this;
var node__10880 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10880,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__10881 = this;
var node__10882 = this;
return cljs.core.balance_left_del.call(null,this__10881.key,this__10881.val,del,this__10881.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__10883 = this;
var node__10884 = this;
return ins.balance_left(node__10884);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__10885 = this;
var node__10886 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__10886,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__10908 = null;
var G__10908__0 = (function (){
var this__10887 = this;
var this__10889 = this;
return cljs.core.pr_str.call(null,this__10889);
});
G__10908 = function(){
switch(arguments.length){
case 0:
return G__10908__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10908;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__10890 = this;
var node__10891 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10891,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__10892 = this;
var node__10893 = this;
return node__10893;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10894 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10895 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10896 = this;
return cljs.core.list.call(null,this__10896.key,this__10896.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10897 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10898 = this;
return this__10898.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10899 = this;
return cljs.core.PersistentVector.fromArray([this__10899.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10900 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10900.key,this__10900.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10901 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10902 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10902.key,this__10902.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10903 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10904 = this;
if((n === 0))
{return this__10904.key;
} else
{if((n === 1))
{return this__10904.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__10905 = this;
if((n === 0))
{return this__10905.key;
} else
{if((n === 1))
{return this__10905.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__10906 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10911 = this;
var h__2220__auto____10912 = this__10911.__hash;
if(!((h__2220__auto____10912 == null)))
{return h__2220__auto____10912;
} else
{var h__2220__auto____10913 = cljs.core.hash_coll.call(null,coll);
this__10911.__hash = h__2220__auto____10913;
return h__2220__auto____10913;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10914 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10915 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10916 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10916.key,this__10916.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__10964 = null;
var G__10964__2 = (function (this_sym10917,k){
var this__10919 = this;
var this_sym10917__10920 = this;
var node__10921 = this_sym10917__10920;
return node__10921.cljs$core$ILookup$_lookup$arity$2(node__10921,k);
});
var G__10964__3 = (function (this_sym10918,k,not_found){
var this__10919 = this;
var this_sym10918__10922 = this;
var node__10923 = this_sym10918__10922;
return node__10923.cljs$core$ILookup$_lookup$arity$3(node__10923,k,not_found);
});
G__10964 = function(this_sym10918,k,not_found){
switch(arguments.length){
case 2:
return G__10964__2.call(this,this_sym10918,k);
case 3:
return G__10964__3.call(this,this_sym10918,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10964;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym10909,args10910){
var this__10924 = this;
return this_sym10909.call.apply(this_sym10909,[this_sym10909].concat(args10910.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10925 = this;
return cljs.core.PersistentVector.fromArray([this__10925.key,this__10925.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10926 = this;
return this__10926.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10927 = this;
return this__10927.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__10928 = this;
var node__10929 = this;
return (new cljs.core.RedNode(this__10928.key,this__10928.val,this__10928.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__10930 = this;
var node__10931 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__10932 = this;
var node__10933 = this;
return (new cljs.core.RedNode(this__10932.key,this__10932.val,this__10932.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__10934 = this;
var node__10935 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__10936 = this;
var node__10937 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10937,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__10938 = this;
var node__10939 = this;
return (new cljs.core.RedNode(this__10938.key,this__10938.val,del,this__10938.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__10940 = this;
var node__10941 = this;
return (new cljs.core.RedNode(this__10940.key,this__10940.val,ins,this__10940.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__10942 = this;
var node__10943 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10942.left))
{return (new cljs.core.RedNode(this__10942.key,this__10942.val,this__10942.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__10942.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10942.right))
{return (new cljs.core.RedNode(this__10942.right.key,this__10942.right.val,(new cljs.core.BlackNode(this__10942.key,this__10942.val,this__10942.left,this__10942.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__10942.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__10943,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__10965 = null;
var G__10965__0 = (function (){
var this__10944 = this;
var this__10946 = this;
return cljs.core.pr_str.call(null,this__10946);
});
G__10965 = function(){
switch(arguments.length){
case 0:
return G__10965__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10965;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__10947 = this;
var node__10948 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10947.right))
{return (new cljs.core.RedNode(this__10947.key,this__10947.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10947.left,null)),this__10947.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10947.left))
{return (new cljs.core.RedNode(this__10947.left.key,this__10947.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10947.left.left,null)),(new cljs.core.BlackNode(this__10947.key,this__10947.val,this__10947.left.right,this__10947.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10948,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__10949 = this;
var node__10950 = this;
return (new cljs.core.BlackNode(this__10949.key,this__10949.val,this__10949.left,this__10949.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10951 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10952 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10953 = this;
return cljs.core.list.call(null,this__10953.key,this__10953.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10954 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10955 = this;
return this__10955.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10956 = this;
return cljs.core.PersistentVector.fromArray([this__10956.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10957 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10957.key,this__10957.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10958 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10959 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10959.key,this__10959.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10960 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10961 = this;
if((n === 0))
{return this__10961.key;
} else
{if((n === 1))
{return this__10961.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__10962 = this;
if((n === 0))
{return this__10962.key;
} else
{if((n === 1))
{return this__10962.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__10963 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__10969 = comp.call(null,k,tree.key);
if((c__10969 === 0))
{(found[0] = tree);
return null;
} else
{if((c__10969 < 0))
{var ins__10970 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__10970 == null)))
{return tree.add_left(ins__10970);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__10971 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__10971 == null)))
{return tree.add_right(ins__10971);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__10974 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10974))
{return (new cljs.core.RedNode(app__10974.key,app__10974.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__10974.left,null)),(new cljs.core.RedNode(right.key,right.val,app__10974.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__10974,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__10975 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10975))
{return (new cljs.core.RedNode(app__10975.key,app__10975.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__10975.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__10975.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__10975,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__10981 = comp.call(null,k,tree.key);
if((c__10981 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__10981 < 0))
{var del__10982 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____10983 = !((del__10982 == null));
if(or__3824__auto____10983)
{return or__3824__auto____10983;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__10982,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__10982,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__10984 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____10985 = !((del__10984 == null));
if(or__3824__auto____10985)
{return or__3824__auto____10985;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__10984);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__10984,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__10988 = tree.key;
var c__10989 = comp.call(null,k,tk__10988);
if((c__10989 === 0))
{return tree.replace(tk__10988,v,tree.left,tree.right);
} else
{if((c__10989 < 0))
{return tree.replace(tk__10988,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__10988,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10992 = this;
var h__2220__auto____10993 = this__10992.__hash;
if(!((h__2220__auto____10993 == null)))
{return h__2220__auto____10993;
} else
{var h__2220__auto____10994 = cljs.core.hash_imap.call(null,coll);
this__10992.__hash = h__2220__auto____10994;
return h__2220__auto____10994;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10995 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10996 = this;
var n__10997 = coll.entry_at(k);
if(!((n__10997 == null)))
{return n__10997.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10998 = this;
var found__10999 = [null];
var t__11000 = cljs.core.tree_map_add.call(null,this__10998.comp,this__10998.tree,k,v,found__10999);
if((t__11000 == null))
{var found_node__11001 = cljs.core.nth.call(null,found__10999,0);
if(cljs.core._EQ_.call(null,v,found_node__11001.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10998.comp,cljs.core.tree_map_replace.call(null,this__10998.comp,this__10998.tree,k,v),this__10998.cnt,this__10998.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10998.comp,t__11000.blacken(),(this__10998.cnt + 1),this__10998.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11002 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__11036 = null;
var G__11036__2 = (function (this_sym11003,k){
var this__11005 = this;
var this_sym11003__11006 = this;
var coll__11007 = this_sym11003__11006;
return coll__11007.cljs$core$ILookup$_lookup$arity$2(coll__11007,k);
});
var G__11036__3 = (function (this_sym11004,k,not_found){
var this__11005 = this;
var this_sym11004__11008 = this;
var coll__11009 = this_sym11004__11008;
return coll__11009.cljs$core$ILookup$_lookup$arity$3(coll__11009,k,not_found);
});
G__11036 = function(this_sym11004,k,not_found){
switch(arguments.length){
case 2:
return G__11036__2.call(this,this_sym11004,k);
case 3:
return G__11036__3.call(this,this_sym11004,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11036;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym10990,args10991){
var this__11010 = this;
return this_sym10990.call.apply(this_sym10990,[this_sym10990].concat(args10991.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11011 = this;
if(!((this__11011.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__11011.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11012 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11013 = this;
if((this__11013.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11013.tree,false,this__11013.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__11014 = this;
var this__11015 = this;
return cljs.core.pr_str.call(null,this__11015);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__11016 = this;
var coll__11017 = this;
var t__11018 = this__11016.tree;
while(true){
if(!((t__11018 == null)))
{var c__11019 = this__11016.comp.call(null,k,t__11018.key);
if((c__11019 === 0))
{return t__11018;
} else
{if((c__11019 < 0))
{{
var G__11037 = t__11018.left;
t__11018 = G__11037;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__11038 = t__11018.right;
t__11018 = G__11038;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__11020 = this;
if((this__11020.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11020.tree,ascending_QMARK_,this__11020.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11021 = this;
if((this__11021.cnt > 0))
{var stack__11022 = null;
var t__11023 = this__11021.tree;
while(true){
if(!((t__11023 == null)))
{var c__11024 = this__11021.comp.call(null,k,t__11023.key);
if((c__11024 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__11022,t__11023),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__11024 < 0))
{{
var G__11039 = cljs.core.conj.call(null,stack__11022,t__11023);
var G__11040 = t__11023.left;
stack__11022 = G__11039;
t__11023 = G__11040;
continue;
}
} else
{{
var G__11041 = stack__11022;
var G__11042 = t__11023.right;
stack__11022 = G__11041;
t__11023 = G__11042;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__11024 > 0))
{{
var G__11043 = cljs.core.conj.call(null,stack__11022,t__11023);
var G__11044 = t__11023.right;
stack__11022 = G__11043;
t__11023 = G__11044;
continue;
}
} else
{{
var G__11045 = stack__11022;
var G__11046 = t__11023.left;
stack__11022 = G__11045;
t__11023 = G__11046;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__11022 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__11022,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__11025 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11026 = this;
return this__11026.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11027 = this;
if((this__11027.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11027.tree,true,this__11027.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11028 = this;
return this__11028.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11029 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11030 = this;
return (new cljs.core.PersistentTreeMap(this__11030.comp,this__11030.tree,this__11030.cnt,meta,this__11030.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11031 = this;
return this__11031.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11032 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__11032.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11033 = this;
var found__11034 = [null];
var t__11035 = cljs.core.tree_map_remove.call(null,this__11033.comp,this__11033.tree,k,found__11034);
if((t__11035 == null))
{if((cljs.core.nth.call(null,found__11034,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11033.comp,null,0,this__11033.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11033.comp,t__11035.blacken(),(this__11033.cnt - 1),this__11033.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__11049 = cljs.core.seq.call(null,keyvals);
var out__11050 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__11049)
{{
var G__11051 = cljs.core.nnext.call(null,in__11049);
var G__11052 = cljs.core.assoc_BANG_.call(null,out__11050,cljs.core.first.call(null,in__11049),cljs.core.second.call(null,in__11049));
in__11049 = G__11051;
out__11050 = G__11052;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11050);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__11053){
var keyvals = cljs.core.seq(arglist__11053);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__11054){
var keyvals = cljs.core.seq(arglist__11054);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__11058 = [];
var obj__11059 = {};
var kvs__11060 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__11060)
{ks__11058.push(cljs.core.first.call(null,kvs__11060));
(obj__11059[cljs.core.first.call(null,kvs__11060)] = cljs.core.second.call(null,kvs__11060));
{
var G__11061 = cljs.core.nnext.call(null,kvs__11060);
kvs__11060 = G__11061;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__11058,obj__11059);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__11062){
var keyvals = cljs.core.seq(arglist__11062);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__11065 = cljs.core.seq.call(null,keyvals);
var out__11066 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__11065)
{{
var G__11067 = cljs.core.nnext.call(null,in__11065);
var G__11068 = cljs.core.assoc.call(null,out__11066,cljs.core.first.call(null,in__11065),cljs.core.second.call(null,in__11065));
in__11065 = G__11067;
out__11066 = G__11068;
continue;
}
} else
{return out__11066;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__11069){
var keyvals = cljs.core.seq(arglist__11069);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__11072 = cljs.core.seq.call(null,keyvals);
var out__11073 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__11072)
{{
var G__11074 = cljs.core.nnext.call(null,in__11072);
var G__11075 = cljs.core.assoc.call(null,out__11073,cljs.core.first.call(null,in__11072),cljs.core.second.call(null,in__11072));
in__11072 = G__11074;
out__11073 = G__11075;
continue;
}
} else
{return out__11073;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__11076){
var comparator = cljs.core.first(arglist__11076);
var keyvals = cljs.core.rest(arglist__11076);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__11077_SHARP_,p2__11078_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____11080 = p1__11077_SHARP_;
if(cljs.core.truth_(or__3824__auto____11080))
{return or__3824__auto____11080;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__11078_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__11081){
var maps = cljs.core.seq(arglist__11081);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__11089 = (function (m,e){
var k__11087 = cljs.core.first.call(null,e);
var v__11088 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__11087))
{return cljs.core.assoc.call(null,m,k__11087,f.call(null,cljs.core._lookup.call(null,m,k__11087,null),v__11088));
} else
{return cljs.core.assoc.call(null,m,k__11087,v__11088);
}
});
var merge2__11091 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__11089,(function (){var or__3824__auto____11090 = m1;
if(cljs.core.truth_(or__3824__auto____11090))
{return or__3824__auto____11090;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__11091,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__11092){
var f = cljs.core.first(arglist__11092);
var maps = cljs.core.rest(arglist__11092);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__11097 = cljs.core.ObjMap.EMPTY;
var keys__11098 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__11098)
{var key__11099 = cljs.core.first.call(null,keys__11098);
var entry__11100 = cljs.core._lookup.call(null,map,key__11099,"\uFDD0'cljs.core/not-found");
{
var G__11101 = ((cljs.core.not_EQ_.call(null,entry__11100,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__11097,key__11099,entry__11100):ret__11097);
var G__11102 = cljs.core.next.call(null,keys__11098);
ret__11097 = G__11101;
keys__11098 = G__11102;
continue;
}
} else
{return ret__11097;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__11106 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__11106.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11107 = this;
var h__2220__auto____11108 = this__11107.__hash;
if(!((h__2220__auto____11108 == null)))
{return h__2220__auto____11108;
} else
{var h__2220__auto____11109 = cljs.core.hash_iset.call(null,coll);
this__11107.__hash = h__2220__auto____11109;
return h__2220__auto____11109;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11110 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11111 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11111.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__11132 = null;
var G__11132__2 = (function (this_sym11112,k){
var this__11114 = this;
var this_sym11112__11115 = this;
var coll__11116 = this_sym11112__11115;
return coll__11116.cljs$core$ILookup$_lookup$arity$2(coll__11116,k);
});
var G__11132__3 = (function (this_sym11113,k,not_found){
var this__11114 = this;
var this_sym11113__11117 = this;
var coll__11118 = this_sym11113__11117;
return coll__11118.cljs$core$ILookup$_lookup$arity$3(coll__11118,k,not_found);
});
G__11132 = function(this_sym11113,k,not_found){
switch(arguments.length){
case 2:
return G__11132__2.call(this,this_sym11113,k);
case 3:
return G__11132__3.call(this,this_sym11113,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11132;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym11104,args11105){
var this__11119 = this;
return this_sym11104.call.apply(this_sym11104,[this_sym11104].concat(args11105.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11120 = this;
return (new cljs.core.PersistentHashSet(this__11120.meta,cljs.core.assoc.call(null,this__11120.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__11121 = this;
var this__11122 = this;
return cljs.core.pr_str.call(null,this__11122);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11123 = this;
return cljs.core.keys.call(null,this__11123.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11124 = this;
return (new cljs.core.PersistentHashSet(this__11124.meta,cljs.core.dissoc.call(null,this__11124.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11125 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11126 = this;
var and__3822__auto____11127 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____11127)
{var and__3822__auto____11128 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____11128)
{return cljs.core.every_QMARK_.call(null,(function (p1__11103_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11103_SHARP_);
}),other);
} else
{return and__3822__auto____11128;
}
} else
{return and__3822__auto____11127;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11129 = this;
return (new cljs.core.PersistentHashSet(meta,this__11129.hash_map,this__11129.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11130 = this;
return this__11130.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11131 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__11131.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__11133 = cljs.core.count.call(null,items);
var i__11134 = 0;
var out__11135 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__11134 < len__11133))
{{
var G__11136 = (i__11134 + 1);
var G__11137 = cljs.core.conj_BANG_.call(null,out__11135,(items[i__11134]));
i__11134 = G__11136;
out__11135 = G__11137;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11135);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__11155 = null;
var G__11155__2 = (function (this_sym11141,k){
var this__11143 = this;
var this_sym11141__11144 = this;
var tcoll__11145 = this_sym11141__11144;
if((cljs.core._lookup.call(null,this__11143.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__11155__3 = (function (this_sym11142,k,not_found){
var this__11143 = this;
var this_sym11142__11146 = this;
var tcoll__11147 = this_sym11142__11146;
if((cljs.core._lookup.call(null,this__11143.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__11155 = function(this_sym11142,k,not_found){
switch(arguments.length){
case 2:
return G__11155__2.call(this,this_sym11142,k);
case 3:
return G__11155__3.call(this,this_sym11142,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11155;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym11139,args11140){
var this__11148 = this;
return this_sym11139.call.apply(this_sym11139,[this_sym11139].concat(args11140.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__11149 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__11150 = this;
if((cljs.core._lookup.call(null,this__11150.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11151 = this;
return cljs.core.count.call(null,this__11151.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__11152 = this;
this__11152.transient_map = cljs.core.dissoc_BANG_.call(null,this__11152.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11153 = this;
this__11153.transient_map = cljs.core.assoc_BANG_.call(null,this__11153.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11154 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__11154.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11158 = this;
var h__2220__auto____11159 = this__11158.__hash;
if(!((h__2220__auto____11159 == null)))
{return h__2220__auto____11159;
} else
{var h__2220__auto____11160 = cljs.core.hash_iset.call(null,coll);
this__11158.__hash = h__2220__auto____11160;
return h__2220__auto____11160;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11161 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11162 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11162.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__11188 = null;
var G__11188__2 = (function (this_sym11163,k){
var this__11165 = this;
var this_sym11163__11166 = this;
var coll__11167 = this_sym11163__11166;
return coll__11167.cljs$core$ILookup$_lookup$arity$2(coll__11167,k);
});
var G__11188__3 = (function (this_sym11164,k,not_found){
var this__11165 = this;
var this_sym11164__11168 = this;
var coll__11169 = this_sym11164__11168;
return coll__11169.cljs$core$ILookup$_lookup$arity$3(coll__11169,k,not_found);
});
G__11188 = function(this_sym11164,k,not_found){
switch(arguments.length){
case 2:
return G__11188__2.call(this,this_sym11164,k);
case 3:
return G__11188__3.call(this,this_sym11164,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11188;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym11156,args11157){
var this__11170 = this;
return this_sym11156.call.apply(this_sym11156,[this_sym11156].concat(args11157.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11171 = this;
return (new cljs.core.PersistentTreeSet(this__11171.meta,cljs.core.assoc.call(null,this__11171.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11172 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__11172.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__11173 = this;
var this__11174 = this;
return cljs.core.pr_str.call(null,this__11174);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__11175 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__11175.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11176 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__11176.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__11177 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11178 = this;
return cljs.core._comparator.call(null,this__11178.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11179 = this;
return cljs.core.keys.call(null,this__11179.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11180 = this;
return (new cljs.core.PersistentTreeSet(this__11180.meta,cljs.core.dissoc.call(null,this__11180.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11181 = this;
return cljs.core.count.call(null,this__11181.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11182 = this;
var and__3822__auto____11183 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____11183)
{var and__3822__auto____11184 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____11184)
{return cljs.core.every_QMARK_.call(null,(function (p1__11138_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11138_SHARP_);
}),other);
} else
{return and__3822__auto____11184;
}
} else
{return and__3822__auto____11183;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11185 = this;
return (new cljs.core.PersistentTreeSet(meta,this__11185.tree_map,this__11185.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11186 = this;
return this__11186.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11187 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__11187.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__11193__delegate = function (keys){
var in__11191 = cljs.core.seq.call(null,keys);
var out__11192 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__11191))
{{
var G__11194 = cljs.core.next.call(null,in__11191);
var G__11195 = cljs.core.conj_BANG_.call(null,out__11192,cljs.core.first.call(null,in__11191));
in__11191 = G__11194;
out__11192 = G__11195;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11192);
}
break;
}
};
var G__11193 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11193__delegate.call(this, keys);
};
G__11193.cljs$lang$maxFixedArity = 0;
G__11193.cljs$lang$applyTo = (function (arglist__11196){
var keys = cljs.core.seq(arglist__11196);;
return G__11193__delegate(keys);
});
G__11193.cljs$lang$arity$variadic = G__11193__delegate;
return G__11193;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__11197){
var keys = cljs.core.seq(arglist__11197);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__11199){
var comparator = cljs.core.first(arglist__11199);
var keys = cljs.core.rest(arglist__11199);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__11205 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____11206 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____11206))
{var e__11207 = temp__3971__auto____11206;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__11207));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__11205,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__11198_SHARP_){
var temp__3971__auto____11208 = cljs.core.find.call(null,smap,p1__11198_SHARP_);
if(cljs.core.truth_(temp__3971__auto____11208))
{var e__11209 = temp__3971__auto____11208;
return cljs.core.second.call(null,e__11209);
} else
{return p1__11198_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__11239 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__11232,seen){
while(true){
var vec__11233__11234 = p__11232;
var f__11235 = cljs.core.nth.call(null,vec__11233__11234,0,null);
var xs__11236 = vec__11233__11234;
var temp__3974__auto____11237 = cljs.core.seq.call(null,xs__11236);
if(temp__3974__auto____11237)
{var s__11238 = temp__3974__auto____11237;
if(cljs.core.contains_QMARK_.call(null,seen,f__11235))
{{
var G__11240 = cljs.core.rest.call(null,s__11238);
var G__11241 = seen;
p__11232 = G__11240;
seen = G__11241;
continue;
}
} else
{return cljs.core.cons.call(null,f__11235,step.call(null,cljs.core.rest.call(null,s__11238),cljs.core.conj.call(null,seen,f__11235)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__11239.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__11244 = cljs.core.PersistentVector.EMPTY;
var s__11245 = s;
while(true){
if(cljs.core.next.call(null,s__11245))
{{
var G__11246 = cljs.core.conj.call(null,ret__11244,cljs.core.first.call(null,s__11245));
var G__11247 = cljs.core.next.call(null,s__11245);
ret__11244 = G__11246;
s__11245 = G__11247;
continue;
}
} else
{return cljs.core.seq.call(null,ret__11244);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____11250 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11250)
{return or__3824__auto____11250;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11251 = x.lastIndexOf("/");
if((i__11251 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__11251 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____11254 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11254)
{return or__3824__auto____11254;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11255 = x.lastIndexOf("/");
if((i__11255 > -1))
{return cljs.core.subs.call(null,x,2,i__11255);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__11262 = cljs.core.ObjMap.EMPTY;
var ks__11263 = cljs.core.seq.call(null,keys);
var vs__11264 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____11265 = ks__11263;
if(and__3822__auto____11265)
{return vs__11264;
} else
{return and__3822__auto____11265;
}
})())
{{
var G__11266 = cljs.core.assoc.call(null,map__11262,cljs.core.first.call(null,ks__11263),cljs.core.first.call(null,vs__11264));
var G__11267 = cljs.core.next.call(null,ks__11263);
var G__11268 = cljs.core.next.call(null,vs__11264);
map__11262 = G__11266;
ks__11263 = G__11267;
vs__11264 = G__11268;
continue;
}
} else
{return map__11262;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__11271__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11256_SHARP_,p2__11257_SHARP_){
return max_key.call(null,k,p1__11256_SHARP_,p2__11257_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__11271 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11271__delegate.call(this, k, x, y, more);
};
G__11271.cljs$lang$maxFixedArity = 3;
G__11271.cljs$lang$applyTo = (function (arglist__11272){
var k = cljs.core.first(arglist__11272);
var x = cljs.core.first(cljs.core.next(arglist__11272));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11272)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11272)));
return G__11271__delegate(k, x, y, more);
});
G__11271.cljs$lang$arity$variadic = G__11271__delegate;
return G__11271;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__11273__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11269_SHARP_,p2__11270_SHARP_){
return min_key.call(null,k,p1__11269_SHARP_,p2__11270_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__11273 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11273__delegate.call(this, k, x, y, more);
};
G__11273.cljs$lang$maxFixedArity = 3;
G__11273.cljs$lang$applyTo = (function (arglist__11274){
var k = cljs.core.first(arglist__11274);
var x = cljs.core.first(cljs.core.next(arglist__11274));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11274)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11274)));
return G__11273__delegate(k, x, y, more);
});
G__11273.cljs$lang$arity$variadic = G__11273__delegate;
return G__11273;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11277 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11277)
{var s__11278 = temp__3974__auto____11277;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__11278),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__11278)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11281 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11281)
{var s__11282 = temp__3974__auto____11281;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__11282))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__11282),take_while.call(null,pred,cljs.core.rest.call(null,s__11282)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__11284 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__11284.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__11296 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____11297 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____11297))
{var vec__11298__11299 = temp__3974__auto____11297;
var e__11300 = cljs.core.nth.call(null,vec__11298__11299,0,null);
var s__11301 = vec__11298__11299;
if(cljs.core.truth_(include__11296.call(null,e__11300)))
{return s__11301;
} else
{return cljs.core.next.call(null,s__11301);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__11296,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____11302 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____11302))
{var vec__11303__11304 = temp__3974__auto____11302;
var e__11305 = cljs.core.nth.call(null,vec__11303__11304,0,null);
var s__11306 = vec__11303__11304;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__11305))?s__11306:cljs.core.next.call(null,s__11306)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__11318 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____11319 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____11319))
{var vec__11320__11321 = temp__3974__auto____11319;
var e__11322 = cljs.core.nth.call(null,vec__11320__11321,0,null);
var s__11323 = vec__11320__11321;
if(cljs.core.truth_(include__11318.call(null,e__11322)))
{return s__11323;
} else
{return cljs.core.next.call(null,s__11323);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__11318,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____11324 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____11324))
{var vec__11325__11326 = temp__3974__auto____11324;
var e__11327 = cljs.core.nth.call(null,vec__11325__11326,0,null);
var s__11328 = vec__11325__11326;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__11327))?s__11328:cljs.core.next.call(null,s__11328)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__11329 = this;
var h__2220__auto____11330 = this__11329.__hash;
if(!((h__2220__auto____11330 == null)))
{return h__2220__auto____11330;
} else
{var h__2220__auto____11331 = cljs.core.hash_coll.call(null,rng);
this__11329.__hash = h__2220__auto____11331;
return h__2220__auto____11331;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__11332 = this;
if((this__11332.step > 0))
{if(((this__11332.start + this__11332.step) < this__11332.end))
{return (new cljs.core.Range(this__11332.meta,(this__11332.start + this__11332.step),this__11332.end,this__11332.step,null));
} else
{return null;
}
} else
{if(((this__11332.start + this__11332.step) > this__11332.end))
{return (new cljs.core.Range(this__11332.meta,(this__11332.start + this__11332.step),this__11332.end,this__11332.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__11333 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__11334 = this;
var this__11335 = this;
return cljs.core.pr_str.call(null,this__11335);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__11336 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__11337 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__11338 = this;
if((this__11338.step > 0))
{if((this__11338.start < this__11338.end))
{return rng;
} else
{return null;
}
} else
{if((this__11338.start > this__11338.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__11339 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__11339.end - this__11339.start) / this__11339.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__11340 = this;
return this__11340.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__11341 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__11341.meta,(this__11341.start + this__11341.step),this__11341.end,this__11341.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__11342 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__11343 = this;
return (new cljs.core.Range(meta,this__11343.start,this__11343.end,this__11343.step,this__11343.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__11344 = this;
return this__11344.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__11345 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__11345.start + (n * this__11345.step));
} else
{if((function (){var and__3822__auto____11346 = (this__11345.start > this__11345.end);
if(and__3822__auto____11346)
{return (this__11345.step === 0);
} else
{return and__3822__auto____11346;
}
})())
{return this__11345.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__11347 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__11347.start + (n * this__11347.step));
} else
{if((function (){var and__3822__auto____11348 = (this__11347.start > this__11347.end);
if(and__3822__auto____11348)
{return (this__11347.step === 0);
} else
{return and__3822__auto____11348;
}
})())
{return this__11347.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__11349 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11349.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11352 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11352)
{var s__11353 = temp__3974__auto____11352;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__11353),take_nth.call(null,n,cljs.core.drop.call(null,n,s__11353)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11360 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11360)
{var s__11361 = temp__3974__auto____11360;
var fst__11362 = cljs.core.first.call(null,s__11361);
var fv__11363 = f.call(null,fst__11362);
var run__11364 = cljs.core.cons.call(null,fst__11362,cljs.core.take_while.call(null,(function (p1__11354_SHARP_){
return cljs.core._EQ_.call(null,fv__11363,f.call(null,p1__11354_SHARP_));
}),cljs.core.next.call(null,s__11361)));
return cljs.core.cons.call(null,run__11364,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__11364),s__11361))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____11379 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____11379)
{var s__11380 = temp__3971__auto____11379;
return reductions.call(null,f,cljs.core.first.call(null,s__11380),cljs.core.rest.call(null,s__11380));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11381 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11381)
{var s__11382 = temp__3974__auto____11381;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__11382)),cljs.core.rest.call(null,s__11382));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__11385 = null;
var G__11385__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__11385__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__11385__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__11385__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__11385__4 = (function() { 
var G__11386__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__11386 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11386__delegate.call(this, x, y, z, args);
};
G__11386.cljs$lang$maxFixedArity = 3;
G__11386.cljs$lang$applyTo = (function (arglist__11387){
var x = cljs.core.first(arglist__11387);
var y = cljs.core.first(cljs.core.next(arglist__11387));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11387)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11387)));
return G__11386__delegate(x, y, z, args);
});
G__11386.cljs$lang$arity$variadic = G__11386__delegate;
return G__11386;
})()
;
G__11385 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11385__0.call(this);
case 1:
return G__11385__1.call(this,x);
case 2:
return G__11385__2.call(this,x,y);
case 3:
return G__11385__3.call(this,x,y,z);
default:
return G__11385__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11385.cljs$lang$maxFixedArity = 3;
G__11385.cljs$lang$applyTo = G__11385__4.cljs$lang$applyTo;
return G__11385;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__11388 = null;
var G__11388__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__11388__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__11388__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__11388__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__11388__4 = (function() { 
var G__11389__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__11389 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11389__delegate.call(this, x, y, z, args);
};
G__11389.cljs$lang$maxFixedArity = 3;
G__11389.cljs$lang$applyTo = (function (arglist__11390){
var x = cljs.core.first(arglist__11390);
var y = cljs.core.first(cljs.core.next(arglist__11390));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11390)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11390)));
return G__11389__delegate(x, y, z, args);
});
G__11389.cljs$lang$arity$variadic = G__11389__delegate;
return G__11389;
})()
;
G__11388 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11388__0.call(this);
case 1:
return G__11388__1.call(this,x);
case 2:
return G__11388__2.call(this,x,y);
case 3:
return G__11388__3.call(this,x,y,z);
default:
return G__11388__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11388.cljs$lang$maxFixedArity = 3;
G__11388.cljs$lang$applyTo = G__11388__4.cljs$lang$applyTo;
return G__11388;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__11391 = null;
var G__11391__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__11391__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__11391__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__11391__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__11391__4 = (function() { 
var G__11392__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__11392 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11392__delegate.call(this, x, y, z, args);
};
G__11392.cljs$lang$maxFixedArity = 3;
G__11392.cljs$lang$applyTo = (function (arglist__11393){
var x = cljs.core.first(arglist__11393);
var y = cljs.core.first(cljs.core.next(arglist__11393));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11393)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11393)));
return G__11392__delegate(x, y, z, args);
});
G__11392.cljs$lang$arity$variadic = G__11392__delegate;
return G__11392;
})()
;
G__11391 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11391__0.call(this);
case 1:
return G__11391__1.call(this,x);
case 2:
return G__11391__2.call(this,x,y);
case 3:
return G__11391__3.call(this,x,y,z);
default:
return G__11391__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11391.cljs$lang$maxFixedArity = 3;
G__11391.cljs$lang$applyTo = G__11391__4.cljs$lang$applyTo;
return G__11391;
})()
});
var juxt__4 = (function() { 
var G__11394__delegate = function (f,g,h,fs){
var fs__11384 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__11395 = null;
var G__11395__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__11365_SHARP_,p2__11366_SHARP_){
return cljs.core.conj.call(null,p1__11365_SHARP_,p2__11366_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__11384);
});
var G__11395__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__11367_SHARP_,p2__11368_SHARP_){
return cljs.core.conj.call(null,p1__11367_SHARP_,p2__11368_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__11384);
});
var G__11395__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__11369_SHARP_,p2__11370_SHARP_){
return cljs.core.conj.call(null,p1__11369_SHARP_,p2__11370_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__11384);
});
var G__11395__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__11371_SHARP_,p2__11372_SHARP_){
return cljs.core.conj.call(null,p1__11371_SHARP_,p2__11372_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__11384);
});
var G__11395__4 = (function() { 
var G__11396__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__11373_SHARP_,p2__11374_SHARP_){
return cljs.core.conj.call(null,p1__11373_SHARP_,cljs.core.apply.call(null,p2__11374_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__11384);
};
var G__11396 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11396__delegate.call(this, x, y, z, args);
};
G__11396.cljs$lang$maxFixedArity = 3;
G__11396.cljs$lang$applyTo = (function (arglist__11397){
var x = cljs.core.first(arglist__11397);
var y = cljs.core.first(cljs.core.next(arglist__11397));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11397)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11397)));
return G__11396__delegate(x, y, z, args);
});
G__11396.cljs$lang$arity$variadic = G__11396__delegate;
return G__11396;
})()
;
G__11395 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11395__0.call(this);
case 1:
return G__11395__1.call(this,x);
case 2:
return G__11395__2.call(this,x,y);
case 3:
return G__11395__3.call(this,x,y,z);
default:
return G__11395__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11395.cljs$lang$maxFixedArity = 3;
G__11395.cljs$lang$applyTo = G__11395__4.cljs$lang$applyTo;
return G__11395;
})()
};
var G__11394 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11394__delegate.call(this, f, g, h, fs);
};
G__11394.cljs$lang$maxFixedArity = 3;
G__11394.cljs$lang$applyTo = (function (arglist__11398){
var f = cljs.core.first(arglist__11398);
var g = cljs.core.first(cljs.core.next(arglist__11398));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11398)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11398)));
return G__11394__delegate(f, g, h, fs);
});
G__11394.cljs$lang$arity$variadic = G__11394__delegate;
return G__11394;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__11401 = cljs.core.next.call(null,coll);
coll = G__11401;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11400 = cljs.core.seq.call(null,coll);
if(and__3822__auto____11400)
{return (n > 0);
} else
{return and__3822__auto____11400;
}
})()))
{{
var G__11402 = (n - 1);
var G__11403 = cljs.core.next.call(null,coll);
n = G__11402;
coll = G__11403;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__11405 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__11405),s))
{if((cljs.core.count.call(null,matches__11405) === 1))
{return cljs.core.first.call(null,matches__11405);
} else
{return cljs.core.vec.call(null,matches__11405);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__11407 = re.exec(s);
if((matches__11407 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__11407) === 1))
{return cljs.core.first.call(null,matches__11407);
} else
{return cljs.core.vec.call(null,matches__11407);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__11412 = cljs.core.re_find.call(null,re,s);
var match_idx__11413 = s.search(re);
var match_str__11414 = ((cljs.core.coll_QMARK_.call(null,match_data__11412))?cljs.core.first.call(null,match_data__11412):match_data__11412);
var post_match__11415 = cljs.core.subs.call(null,s,(match_idx__11413 + cljs.core.count.call(null,match_str__11414)));
if(cljs.core.truth_(match_data__11412))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__11412,re_seq.call(null,re,post_match__11415));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__11422__11423 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___11424 = cljs.core.nth.call(null,vec__11422__11423,0,null);
var flags__11425 = cljs.core.nth.call(null,vec__11422__11423,1,null);
var pattern__11426 = cljs.core.nth.call(null,vec__11422__11423,2,null);
return (new RegExp(pattern__11426,flags__11425));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__11416_SHARP_){
return print_one.call(null,p1__11416_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____11436 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____11436))
{var and__3822__auto____11440 = (function (){var G__11437__11438 = obj;
if(G__11437__11438)
{if((function (){var or__3824__auto____11439 = (G__11437__11438.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____11439)
{return or__3824__auto____11439;
} else
{return G__11437__11438.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__11437__11438.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11437__11438);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11437__11438);
}
})();
if(cljs.core.truth_(and__3822__auto____11440))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____11440;
}
} else
{return and__3822__auto____11436;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____11441 = !((obj == null));
if(and__3822__auto____11441)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____11441;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__11442__11443 = obj;
if(G__11442__11443)
{if((function (){var or__3824__auto____11444 = (G__11442__11443.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____11444)
{return or__3824__auto____11444;
} else
{return G__11442__11443.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__11442__11443.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__11442__11443);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__11442__11443);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__11464 = (new goog.string.StringBuffer());
var G__11465__11466 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__11465__11466)
{var string__11467 = cljs.core.first.call(null,G__11465__11466);
var G__11465__11468 = G__11465__11466;
while(true){
sb__11464.append(string__11467);
var temp__3974__auto____11469 = cljs.core.next.call(null,G__11465__11468);
if(temp__3974__auto____11469)
{var G__11465__11470 = temp__3974__auto____11469;
{
var G__11483 = cljs.core.first.call(null,G__11465__11470);
var G__11484 = G__11465__11470;
string__11467 = G__11483;
G__11465__11468 = G__11484;
continue;
}
} else
{}
break;
}
} else
{}
var G__11471__11472 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__11471__11472)
{var obj__11473 = cljs.core.first.call(null,G__11471__11472);
var G__11471__11474 = G__11471__11472;
while(true){
sb__11464.append(" ");
var G__11475__11476 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__11473,opts));
if(G__11475__11476)
{var string__11477 = cljs.core.first.call(null,G__11475__11476);
var G__11475__11478 = G__11475__11476;
while(true){
sb__11464.append(string__11477);
var temp__3974__auto____11479 = cljs.core.next.call(null,G__11475__11478);
if(temp__3974__auto____11479)
{var G__11475__11480 = temp__3974__auto____11479;
{
var G__11485 = cljs.core.first.call(null,G__11475__11480);
var G__11486 = G__11475__11480;
string__11477 = G__11485;
G__11475__11478 = G__11486;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____11481 = cljs.core.next.call(null,G__11471__11474);
if(temp__3974__auto____11481)
{var G__11471__11482 = temp__3974__auto____11481;
{
var G__11487 = cljs.core.first.call(null,G__11471__11482);
var G__11488 = G__11471__11482;
obj__11473 = G__11487;
G__11471__11474 = G__11488;
continue;
}
} else
{}
break;
}
} else
{}
return sb__11464;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__11490 = cljs.core.pr_sb.call(null,objs,opts);
sb__11490.append("\n");
return [cljs.core.str(sb__11490)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__11509__11510 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__11509__11510)
{var string__11511 = cljs.core.first.call(null,G__11509__11510);
var G__11509__11512 = G__11509__11510;
while(true){
cljs.core.string_print.call(null,string__11511);
var temp__3974__auto____11513 = cljs.core.next.call(null,G__11509__11512);
if(temp__3974__auto____11513)
{var G__11509__11514 = temp__3974__auto____11513;
{
var G__11527 = cljs.core.first.call(null,G__11509__11514);
var G__11528 = G__11509__11514;
string__11511 = G__11527;
G__11509__11512 = G__11528;
continue;
}
} else
{}
break;
}
} else
{}
var G__11515__11516 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__11515__11516)
{var obj__11517 = cljs.core.first.call(null,G__11515__11516);
var G__11515__11518 = G__11515__11516;
while(true){
cljs.core.string_print.call(null," ");
var G__11519__11520 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__11517,opts));
if(G__11519__11520)
{var string__11521 = cljs.core.first.call(null,G__11519__11520);
var G__11519__11522 = G__11519__11520;
while(true){
cljs.core.string_print.call(null,string__11521);
var temp__3974__auto____11523 = cljs.core.next.call(null,G__11519__11522);
if(temp__3974__auto____11523)
{var G__11519__11524 = temp__3974__auto____11523;
{
var G__11529 = cljs.core.first.call(null,G__11519__11524);
var G__11530 = G__11519__11524;
string__11521 = G__11529;
G__11519__11522 = G__11530;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____11525 = cljs.core.next.call(null,G__11515__11518);
if(temp__3974__auto____11525)
{var G__11515__11526 = temp__3974__auto____11525;
{
var G__11531 = cljs.core.first.call(null,G__11515__11526);
var G__11532 = G__11515__11526;
obj__11517 = G__11531;
G__11515__11518 = G__11532;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__11533){
var objs = cljs.core.seq(arglist__11533);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__11534){
var objs = cljs.core.seq(arglist__11534);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__11535){
var objs = cljs.core.seq(arglist__11535);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__11536){
var objs = cljs.core.seq(arglist__11536);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__11537){
var objs = cljs.core.seq(arglist__11537);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__11538){
var objs = cljs.core.seq(arglist__11538);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__11539){
var objs = cljs.core.seq(arglist__11539);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__11540){
var objs = cljs.core.seq(arglist__11540);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__11541){
var fmt = cljs.core.first(arglist__11541);
var args = cljs.core.rest(arglist__11541);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11542 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11542,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11543 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11543,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11544 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11544,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____11545 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____11545))
{var nspc__11546 = temp__3974__auto____11545;
return [cljs.core.str(nspc__11546),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____11547 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____11547))
{var nspc__11548 = temp__3974__auto____11547;
return [cljs.core.str(nspc__11548),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11549 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11549,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__11551 = (function (n,len){
var ns__11550 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__11550) < len))
{{
var G__11553 = [cljs.core.str("0"),cljs.core.str(ns__11550)].join('');
ns__11550 = G__11553;
continue;
}
} else
{return ns__11550;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__11551.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__11551.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__11551.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__11551.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__11551.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__11551.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11552 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11552,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11554 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__11555 = this;
var G__11556__11557 = cljs.core.seq.call(null,this__11555.watches);
if(G__11556__11557)
{var G__11559__11561 = cljs.core.first.call(null,G__11556__11557);
var vec__11560__11562 = G__11559__11561;
var key__11563 = cljs.core.nth.call(null,vec__11560__11562,0,null);
var f__11564 = cljs.core.nth.call(null,vec__11560__11562,1,null);
var G__11556__11565 = G__11556__11557;
var G__11559__11566 = G__11559__11561;
var G__11556__11567 = G__11556__11565;
while(true){
var vec__11568__11569 = G__11559__11566;
var key__11570 = cljs.core.nth.call(null,vec__11568__11569,0,null);
var f__11571 = cljs.core.nth.call(null,vec__11568__11569,1,null);
var G__11556__11572 = G__11556__11567;
f__11571.call(null,key__11570,this$,oldval,newval);
var temp__3974__auto____11573 = cljs.core.next.call(null,G__11556__11572);
if(temp__3974__auto____11573)
{var G__11556__11574 = temp__3974__auto____11573;
{
var G__11581 = cljs.core.first.call(null,G__11556__11574);
var G__11582 = G__11556__11574;
G__11559__11566 = G__11581;
G__11556__11567 = G__11582;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__11575 = this;
return this$.watches = cljs.core.assoc.call(null,this__11575.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__11576 = this;
return this$.watches = cljs.core.dissoc.call(null,this__11576.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__11577 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__11577.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__11578 = this;
return this__11578.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__11579 = this;
return this__11579.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__11580 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__11594__delegate = function (x,p__11583){
var map__11589__11590 = p__11583;
var map__11589__11591 = ((cljs.core.seq_QMARK_.call(null,map__11589__11590))?cljs.core.apply.call(null,cljs.core.hash_map,map__11589__11590):map__11589__11590);
var validator__11592 = cljs.core._lookup.call(null,map__11589__11591,"\uFDD0'validator",null);
var meta__11593 = cljs.core._lookup.call(null,map__11589__11591,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__11593,validator__11592,null));
};
var G__11594 = function (x,var_args){
var p__11583 = null;
if (goog.isDef(var_args)) {
  p__11583 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11594__delegate.call(this, x, p__11583);
};
G__11594.cljs$lang$maxFixedArity = 1;
G__11594.cljs$lang$applyTo = (function (arglist__11595){
var x = cljs.core.first(arglist__11595);
var p__11583 = cljs.core.rest(arglist__11595);
return G__11594__delegate(x, p__11583);
});
G__11594.cljs$lang$arity$variadic = G__11594__delegate;
return G__11594;
})()
;
atom = function(x,var_args){
var p__11583 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____11599 = a.validator;
if(cljs.core.truth_(temp__3974__auto____11599))
{var validate__11600 = temp__3974__auto____11599;
if(cljs.core.truth_(validate__11600.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__11601 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__11601,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__11602__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__11602 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__11602__delegate.call(this, a, f, x, y, z, more);
};
G__11602.cljs$lang$maxFixedArity = 5;
G__11602.cljs$lang$applyTo = (function (arglist__11603){
var a = cljs.core.first(arglist__11603);
var f = cljs.core.first(cljs.core.next(arglist__11603));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11603)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11603))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11603)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11603)))));
return G__11602__delegate(a, f, x, y, z, more);
});
G__11602.cljs$lang$arity$variadic = G__11602__delegate;
return G__11602;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__11604){
var iref = cljs.core.first(arglist__11604);
var f = cljs.core.first(cljs.core.next(arglist__11604));
var args = cljs.core.rest(cljs.core.next(arglist__11604));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__11605 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__11605.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__11606 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__11606.state,(function (p__11607){
var map__11608__11609 = p__11607;
var map__11608__11610 = ((cljs.core.seq_QMARK_.call(null,map__11608__11609))?cljs.core.apply.call(null,cljs.core.hash_map,map__11608__11609):map__11608__11609);
var curr_state__11611 = map__11608__11610;
var done__11612 = cljs.core._lookup.call(null,map__11608__11610,"\uFDD0'done",null);
if(cljs.core.truth_(done__11612))
{return curr_state__11611;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__11606.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__11633__11634 = options;
var map__11633__11635 = ((cljs.core.seq_QMARK_.call(null,map__11633__11634))?cljs.core.apply.call(null,cljs.core.hash_map,map__11633__11634):map__11633__11634);
var keywordize_keys__11636 = cljs.core._lookup.call(null,map__11633__11635,"\uFDD0'keywordize-keys",null);
var keyfn__11637 = (cljs.core.truth_(keywordize_keys__11636)?cljs.core.keyword:cljs.core.str);
var f__11652 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2490__auto____11651 = (function iter__11645(s__11646){
return (new cljs.core.LazySeq(null,false,(function (){
var s__11646__11649 = s__11646;
while(true){
if(cljs.core.seq.call(null,s__11646__11649))
{var k__11650 = cljs.core.first.call(null,s__11646__11649);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__11637.call(null,k__11650),thisfn.call(null,(x[k__11650]))], true),iter__11645.call(null,cljs.core.rest.call(null,s__11646__11649)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2490__auto____11651.call(null,cljs.core.js_keys.call(null,x));
})());
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
return f__11652.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__11653){
var x = cljs.core.first(arglist__11653);
var options = cljs.core.rest(arglist__11653);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__11658 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__11662__delegate = function (args){
var temp__3971__auto____11659 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__11658),args,null);
if(cljs.core.truth_(temp__3971__auto____11659))
{var v__11660 = temp__3971__auto____11659;
return v__11660;
} else
{var ret__11661 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__11658,cljs.core.assoc,args,ret__11661);
return ret__11661;
}
};
var G__11662 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11662__delegate.call(this, args);
};
G__11662.cljs$lang$maxFixedArity = 0;
G__11662.cljs$lang$applyTo = (function (arglist__11663){
var args = cljs.core.seq(arglist__11663);;
return G__11662__delegate(args);
});
G__11662.cljs$lang$arity$variadic = G__11662__delegate;
return G__11662;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__11665 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__11665))
{{
var G__11666 = ret__11665;
f = G__11666;
continue;
}
} else
{return ret__11665;
}
break;
}
});
var trampoline__2 = (function() { 
var G__11667__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__11667 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11667__delegate.call(this, f, args);
};
G__11667.cljs$lang$maxFixedArity = 1;
G__11667.cljs$lang$applyTo = (function (arglist__11668){
var f = cljs.core.first(arglist__11668);
var args = cljs.core.rest(arglist__11668);
return G__11667__delegate(f, args);
});
G__11667.cljs$lang$arity$variadic = G__11667__delegate;
return G__11667;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__11670 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__11670,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__11670,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____11679 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____11679)
{return or__3824__auto____11679;
} else
{var or__3824__auto____11680 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____11680)
{return or__3824__auto____11680;
} else
{var and__3822__auto____11681 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____11681)
{var and__3822__auto____11682 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____11682)
{var and__3822__auto____11683 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____11683)
{var ret__11684 = true;
var i__11685 = 0;
while(true){
if((function (){var or__3824__auto____11686 = cljs.core.not.call(null,ret__11684);
if(or__3824__auto____11686)
{return or__3824__auto____11686;
} else
{return (i__11685 === cljs.core.count.call(null,parent));
}
})())
{return ret__11684;
} else
{{
var G__11687 = isa_QMARK_.call(null,h,child.call(null,i__11685),parent.call(null,i__11685));
var G__11688 = (i__11685 + 1);
ret__11684 = G__11687;
i__11685 = G__11688;
continue;
}
}
break;
}
} else
{return and__3822__auto____11683;
}
} else
{return and__3822__auto____11682;
}
} else
{return and__3822__auto____11681;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728))))].join('')));
}
var tp__11697 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__11698 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__11699 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__11700 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____11701 = ((cljs.core.contains_QMARK_.call(null,tp__11697.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__11699.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__11699.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__11697,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__11700.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__11698,parent,ta__11699),"\uFDD0'descendants":tf__11700.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__11699,tag,td__11698)});
})());
if(cljs.core.truth_(or__3824__auto____11701))
{return or__3824__auto____11701;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__11706 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__11707 = (cljs.core.truth_(parentMap__11706.call(null,tag))?cljs.core.disj.call(null,parentMap__11706.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__11708 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__11707))?cljs.core.assoc.call(null,parentMap__11706,tag,childsParents__11707):cljs.core.dissoc.call(null,parentMap__11706,tag));
var deriv_seq__11709 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__11689_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__11689_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__11689_SHARP_),cljs.core.second.call(null,p1__11689_SHARP_)));
}),cljs.core.seq.call(null,newParents__11708)));
if(cljs.core.contains_QMARK_.call(null,parentMap__11706.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__11690_SHARP_,p2__11691_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__11690_SHARP_,p2__11691_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__11709));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__11717 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____11719 = (cljs.core.truth_((function (){var and__3822__auto____11718 = xprefs__11717;
if(cljs.core.truth_(and__3822__auto____11718))
{return xprefs__11717.call(null,y);
} else
{return and__3822__auto____11718;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____11719))
{return or__3824__auto____11719;
} else
{var or__3824__auto____11721 = (function (){var ps__11720 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__11720) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__11720),prefer_table)))
{} else
{}
{
var G__11724 = cljs.core.rest.call(null,ps__11720);
ps__11720 = G__11724;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____11721))
{return or__3824__auto____11721;
} else
{var or__3824__auto____11723 = (function (){var ps__11722 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__11722) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__11722),y,prefer_table)))
{} else
{}
{
var G__11725 = cljs.core.rest.call(null,ps__11722);
ps__11722 = G__11725;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____11723))
{return or__3824__auto____11723;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____11727 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____11727))
{return or__3824__auto____11727;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__11745 = cljs.core.reduce.call(null,(function (be,p__11737){
var vec__11738__11739 = p__11737;
var k__11740 = cljs.core.nth.call(null,vec__11738__11739,0,null);
var ___11741 = cljs.core.nth.call(null,vec__11738__11739,1,null);
var e__11742 = vec__11738__11739;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__11740))
{var be2__11744 = (cljs.core.truth_((function (){var or__3824__auto____11743 = (be == null);
if(or__3824__auto____11743)
{return or__3824__auto____11743;
} else
{return cljs.core.dominates.call(null,k__11740,cljs.core.first.call(null,be),prefer_table);
}
})())?e__11742:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__11744),k__11740,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__11740),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__11744)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__11744;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__11745))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__11745));
return cljs.core.second.call(null,best_entry__11745);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____11750 = mf;
if(and__3822__auto____11750)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____11750;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2391__auto____11751 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11752 = (cljs.core._reset[goog.typeOf(x__2391__auto____11751)]);
if(or__3824__auto____11752)
{return or__3824__auto____11752;
} else
{var or__3824__auto____11753 = (cljs.core._reset["_"]);
if(or__3824__auto____11753)
{return or__3824__auto____11753;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____11758 = mf;
if(and__3822__auto____11758)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____11758;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2391__auto____11759 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11760 = (cljs.core._add_method[goog.typeOf(x__2391__auto____11759)]);
if(or__3824__auto____11760)
{return or__3824__auto____11760;
} else
{var or__3824__auto____11761 = (cljs.core._add_method["_"]);
if(or__3824__auto____11761)
{return or__3824__auto____11761;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____11766 = mf;
if(and__3822__auto____11766)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____11766;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2391__auto____11767 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11768 = (cljs.core._remove_method[goog.typeOf(x__2391__auto____11767)]);
if(or__3824__auto____11768)
{return or__3824__auto____11768;
} else
{var or__3824__auto____11769 = (cljs.core._remove_method["_"]);
if(or__3824__auto____11769)
{return or__3824__auto____11769;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____11774 = mf;
if(and__3822__auto____11774)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____11774;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2391__auto____11775 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11776 = (cljs.core._prefer_method[goog.typeOf(x__2391__auto____11775)]);
if(or__3824__auto____11776)
{return or__3824__auto____11776;
} else
{var or__3824__auto____11777 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____11777)
{return or__3824__auto____11777;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____11782 = mf;
if(and__3822__auto____11782)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____11782;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2391__auto____11783 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11784 = (cljs.core._get_method[goog.typeOf(x__2391__auto____11783)]);
if(or__3824__auto____11784)
{return or__3824__auto____11784;
} else
{var or__3824__auto____11785 = (cljs.core._get_method["_"]);
if(or__3824__auto____11785)
{return or__3824__auto____11785;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____11790 = mf;
if(and__3822__auto____11790)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____11790;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2391__auto____11791 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11792 = (cljs.core._methods[goog.typeOf(x__2391__auto____11791)]);
if(or__3824__auto____11792)
{return or__3824__auto____11792;
} else
{var or__3824__auto____11793 = (cljs.core._methods["_"]);
if(or__3824__auto____11793)
{return or__3824__auto____11793;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____11798 = mf;
if(and__3822__auto____11798)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____11798;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2391__auto____11799 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11800 = (cljs.core._prefers[goog.typeOf(x__2391__auto____11799)]);
if(or__3824__auto____11800)
{return or__3824__auto____11800;
} else
{var or__3824__auto____11801 = (cljs.core._prefers["_"]);
if(or__3824__auto____11801)
{return or__3824__auto____11801;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____11806 = mf;
if(and__3822__auto____11806)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____11806;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2391__auto____11807 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11808 = (cljs.core._dispatch[goog.typeOf(x__2391__auto____11807)]);
if(or__3824__auto____11808)
{return or__3824__auto____11808;
} else
{var or__3824__auto____11809 = (cljs.core._dispatch["_"]);
if(or__3824__auto____11809)
{return or__3824__auto____11809;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__11812 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__11813 = cljs.core._get_method.call(null,mf,dispatch_val__11812);
if(cljs.core.truth_(target_fn__11813))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__11812)].join('')));
}
return cljs.core.apply.call(null,target_fn__11813,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11814 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__11815 = this;
cljs.core.swap_BANG_.call(null,this__11815.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11815.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11815.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11815.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__11816 = this;
cljs.core.swap_BANG_.call(null,this__11816.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__11816.method_cache,this__11816.method_table,this__11816.cached_hierarchy,this__11816.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__11817 = this;
cljs.core.swap_BANG_.call(null,this__11817.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__11817.method_cache,this__11817.method_table,this__11817.cached_hierarchy,this__11817.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__11818 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__11818.cached_hierarchy),cljs.core.deref.call(null,this__11818.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__11818.method_cache,this__11818.method_table,this__11818.cached_hierarchy,this__11818.hierarchy);
}
var temp__3971__auto____11819 = cljs.core.deref.call(null,this__11818.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____11819))
{var target_fn__11820 = temp__3971__auto____11819;
return target_fn__11820;
} else
{var temp__3971__auto____11821 = cljs.core.find_and_cache_best_method.call(null,this__11818.name,dispatch_val,this__11818.hierarchy,this__11818.method_table,this__11818.prefer_table,this__11818.method_cache,this__11818.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____11821))
{var target_fn__11822 = temp__3971__auto____11821;
return target_fn__11822;
} else
{return cljs.core.deref.call(null,this__11818.method_table).call(null,this__11818.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__11823 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__11823.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__11823.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__11823.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__11823.method_cache,this__11823.method_table,this__11823.cached_hierarchy,this__11823.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__11824 = this;
return cljs.core.deref.call(null,this__11824.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__11825 = this;
return cljs.core.deref.call(null,this__11825.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__11826 = this;
return cljs.core.do_dispatch.call(null,mf,this__11826.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__11828__delegate = function (_,args){
var self__11827 = this;
return cljs.core._dispatch.call(null,self__11827,args);
};
var G__11828 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11828__delegate.call(this, _, args);
};
G__11828.cljs$lang$maxFixedArity = 1;
G__11828.cljs$lang$applyTo = (function (arglist__11829){
var _ = cljs.core.first(arglist__11829);
var args = cljs.core.rest(arglist__11829);
return G__11828__delegate(_, args);
});
G__11828.cljs$lang$arity$variadic = G__11828__delegate;
return G__11828;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__11830 = this;
return cljs.core._dispatch.call(null,self__11830,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11831 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_11833,_){
var this__11832 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__11832.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__11834 = this;
var and__3822__auto____11835 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____11835)
{return (this__11834.uuid === other.uuid);
} else
{return and__3822__auto____11835;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__11836 = this;
var this__11837 = this;
return cljs.core.pr_str.call(null,this__11837);
});
cljs.core.UUID;
