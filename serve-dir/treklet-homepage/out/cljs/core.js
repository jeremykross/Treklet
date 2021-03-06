goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
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
var or__3548__auto____25646 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____25646))
{return or__3548__auto____25646;
} else
{var or__3548__auto____25647 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____25647))
{return or__3548__auto____25647;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__25711 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____25648 = this$;

if(cljs.core.truth_(and__3546__auto____25648))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25648;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____25649 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25649))
{return or__3548__auto____25649;
} else
{var or__3548__auto____25650 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25650))
{return or__3548__auto____25650;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__25712 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____25651 = this$;

if(cljs.core.truth_(and__3546__auto____25651))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25651;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____25652 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25652))
{return or__3548__auto____25652;
} else
{var or__3548__auto____25653 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25653))
{return or__3548__auto____25653;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__25713 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____25654 = this$;

if(cljs.core.truth_(and__3546__auto____25654))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25654;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____25655 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25655))
{return or__3548__auto____25655;
} else
{var or__3548__auto____25656 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25656))
{return or__3548__auto____25656;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__25714 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____25657 = this$;

if(cljs.core.truth_(and__3546__auto____25657))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25657;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____25658 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25658))
{return or__3548__auto____25658;
} else
{var or__3548__auto____25659 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25659))
{return or__3548__auto____25659;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__25715 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____25660 = this$;

if(cljs.core.truth_(and__3546__auto____25660))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25660;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____25661 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25661))
{return or__3548__auto____25661;
} else
{var or__3548__auto____25662 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25662))
{return or__3548__auto____25662;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__25716 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____25663 = this$;

if(cljs.core.truth_(and__3546__auto____25663))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25663;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____25664 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25664))
{return or__3548__auto____25664;
} else
{var or__3548__auto____25665 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25665))
{return or__3548__auto____25665;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__25717 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____25666 = this$;

if(cljs.core.truth_(and__3546__auto____25666))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25666;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____25667 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25667))
{return or__3548__auto____25667;
} else
{var or__3548__auto____25668 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25668))
{return or__3548__auto____25668;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__25718 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____25669 = this$;

if(cljs.core.truth_(and__3546__auto____25669))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25669;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____25670 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25670))
{return or__3548__auto____25670;
} else
{var or__3548__auto____25671 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25671))
{return or__3548__auto____25671;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__25719 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____25672 = this$;

if(cljs.core.truth_(and__3546__auto____25672))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25672;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____25673 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25673))
{return or__3548__auto____25673;
} else
{var or__3548__auto____25674 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25674))
{return or__3548__auto____25674;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__25720 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____25675 = this$;

if(cljs.core.truth_(and__3546__auto____25675))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25675;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____25676 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25676))
{return or__3548__auto____25676;
} else
{var or__3548__auto____25677 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25677))
{return or__3548__auto____25677;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__25721 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____25678 = this$;

if(cljs.core.truth_(and__3546__auto____25678))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25678;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____25679 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25679))
{return or__3548__auto____25679;
} else
{var or__3548__auto____25680 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25680))
{return or__3548__auto____25680;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__25722 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____25681 = this$;

if(cljs.core.truth_(and__3546__auto____25681))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25681;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____25682 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25682))
{return or__3548__auto____25682;
} else
{var or__3548__auto____25683 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25683))
{return or__3548__auto____25683;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__25723 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____25684 = this$;

if(cljs.core.truth_(and__3546__auto____25684))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25684;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____25685 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25685))
{return or__3548__auto____25685;
} else
{var or__3548__auto____25686 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25686))
{return or__3548__auto____25686;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__25724 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____25687 = this$;

if(cljs.core.truth_(and__3546__auto____25687))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25687;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____25688 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25688))
{return or__3548__auto____25688;
} else
{var or__3548__auto____25689 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25689))
{return or__3548__auto____25689;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__25725 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____25690 = this$;

if(cljs.core.truth_(and__3546__auto____25690))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25690;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____25691 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25691))
{return or__3548__auto____25691;
} else
{var or__3548__auto____25692 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25692))
{return or__3548__auto____25692;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__25726 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____25693 = this$;

if(cljs.core.truth_(and__3546__auto____25693))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25693;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____25694 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25694))
{return or__3548__auto____25694;
} else
{var or__3548__auto____25695 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25695))
{return or__3548__auto____25695;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__25727 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____25696 = this$;

if(cljs.core.truth_(and__3546__auto____25696))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25696;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____25697 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25697))
{return or__3548__auto____25697;
} else
{var or__3548__auto____25698 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25698))
{return or__3548__auto____25698;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__25728 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____25699 = this$;

if(cljs.core.truth_(and__3546__auto____25699))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25699;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____25700 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25700))
{return or__3548__auto____25700;
} else
{var or__3548__auto____25701 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25701))
{return or__3548__auto____25701;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__25729 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____25702 = this$;

if(cljs.core.truth_(and__3546__auto____25702))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25702;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____25703 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25703))
{return or__3548__auto____25703;
} else
{var or__3548__auto____25704 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25704))
{return or__3548__auto____25704;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__25730 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____25705 = this$;

if(cljs.core.truth_(and__3546__auto____25705))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25705;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____25706 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25706))
{return or__3548__auto____25706;
} else
{var or__3548__auto____25707 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25707))
{return or__3548__auto____25707;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__25731 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____25708 = this$;

if(cljs.core.truth_(and__3546__auto____25708))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____25708;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____25709 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25709))
{return or__3548__auto____25709;
} else
{var or__3548__auto____25710 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____25710))
{return or__3548__auto____25710;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__25711.call(this,this$);
case  2 :
return _invoke__25712.call(this,this$,a);
case  3 :
return _invoke__25713.call(this,this$,a,b);
case  4 :
return _invoke__25714.call(this,this$,a,b,c);
case  5 :
return _invoke__25715.call(this,this$,a,b,c,d);
case  6 :
return _invoke__25716.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__25717.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__25718.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__25719.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__25720.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__25721.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__25722.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__25723.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__25724.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__25725.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__25726.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__25727.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__25728.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__25729.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__25730.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__25731.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____25733 = coll;

if(cljs.core.truth_(and__3546__auto____25733))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____25733;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____25734 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25734))
{return or__3548__auto____25734;
} else
{var or__3548__auto____25735 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____25735))
{return or__3548__auto____25735;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____25736 = coll;

if(cljs.core.truth_(and__3546__auto____25736))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____25736;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____25737 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25737))
{return or__3548__auto____25737;
} else
{var or__3548__auto____25738 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____25738))
{return or__3548__auto____25738;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____25739 = coll;

if(cljs.core.truth_(and__3546__auto____25739))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____25739;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____25740 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25740))
{return or__3548__auto____25740;
} else
{var or__3548__auto____25741 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____25741))
{return or__3548__auto____25741;
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
var _nth__25748 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____25742 = coll;

if(cljs.core.truth_(and__3546__auto____25742))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____25742;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____25743 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25743))
{return or__3548__auto____25743;
} else
{var or__3548__auto____25744 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____25744))
{return or__3548__auto____25744;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__25749 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____25745 = coll;

if(cljs.core.truth_(and__3546__auto____25745))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____25745;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____25746 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25746))
{return or__3548__auto____25746;
} else
{var or__3548__auto____25747 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____25747))
{return or__3548__auto____25747;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__25748.call(this,coll,n);
case  3 :
return _nth__25749.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____25751 = coll;

if(cljs.core.truth_(and__3546__auto____25751))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____25751;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____25752 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25752))
{return or__3548__auto____25752;
} else
{var or__3548__auto____25753 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____25753))
{return or__3548__auto____25753;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____25754 = coll;

if(cljs.core.truth_(and__3546__auto____25754))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____25754;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____25755 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25755))
{return or__3548__auto____25755;
} else
{var or__3548__auto____25756 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____25756))
{return or__3548__auto____25756;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__25763 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____25757 = o;

if(cljs.core.truth_(and__3546__auto____25757))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____25757;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____25758 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25758))
{return or__3548__auto____25758;
} else
{var or__3548__auto____25759 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____25759))
{return or__3548__auto____25759;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__25764 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____25760 = o;

if(cljs.core.truth_(and__3546__auto____25760))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____25760;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____25761 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25761))
{return or__3548__auto____25761;
} else
{var or__3548__auto____25762 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____25762))
{return or__3548__auto____25762;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__25763.call(this,o,k);
case  3 :
return _lookup__25764.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____25766 = coll;

if(cljs.core.truth_(and__3546__auto____25766))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____25766;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____25767 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25767))
{return or__3548__auto____25767;
} else
{var or__3548__auto____25768 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____25768))
{return or__3548__auto____25768;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____25769 = coll;

if(cljs.core.truth_(and__3546__auto____25769))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____25769;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____25770 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25770))
{return or__3548__auto____25770;
} else
{var or__3548__auto____25771 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____25771))
{return or__3548__auto____25771;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____25772 = coll;

if(cljs.core.truth_(and__3546__auto____25772))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____25772;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____25773 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25773))
{return or__3548__auto____25773;
} else
{var or__3548__auto____25774 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____25774))
{return or__3548__auto____25774;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____25775 = coll;

if(cljs.core.truth_(and__3546__auto____25775))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____25775;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____25776 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25776))
{return or__3548__auto____25776;
} else
{var or__3548__auto____25777 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____25777))
{return or__3548__auto____25777;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____25778 = coll;

if(cljs.core.truth_(and__3546__auto____25778))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____25778;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____25779 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25779))
{return or__3548__auto____25779;
} else
{var or__3548__auto____25780 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____25780))
{return or__3548__auto____25780;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____25781 = coll;

if(cljs.core.truth_(and__3546__auto____25781))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____25781;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____25782 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25782))
{return or__3548__auto____25782;
} else
{var or__3548__auto____25783 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____25783))
{return or__3548__auto____25783;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____25784 = coll;

if(cljs.core.truth_(and__3546__auto____25784))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____25784;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____25785 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25785))
{return or__3548__auto____25785;
} else
{var or__3548__auto____25786 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____25786))
{return or__3548__auto____25786;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____25787 = o;

if(cljs.core.truth_(and__3546__auto____25787))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____25787;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____25788 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25788))
{return or__3548__auto____25788;
} else
{var or__3548__auto____25789 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____25789))
{return or__3548__auto____25789;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____25790 = o;

if(cljs.core.truth_(and__3546__auto____25790))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____25790;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____25791 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25791))
{return or__3548__auto____25791;
} else
{var or__3548__auto____25792 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____25792))
{return or__3548__auto____25792;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____25793 = o;

if(cljs.core.truth_(and__3546__auto____25793))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____25793;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____25794 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25794))
{return or__3548__auto____25794;
} else
{var or__3548__auto____25795 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____25795))
{return or__3548__auto____25795;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____25796 = o;

if(cljs.core.truth_(and__3546__auto____25796))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____25796;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____25797 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25797))
{return or__3548__auto____25797;
} else
{var or__3548__auto____25798 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____25798))
{return or__3548__auto____25798;
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
var _reduce__25805 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____25799 = coll;

if(cljs.core.truth_(and__3546__auto____25799))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____25799;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____25800 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25800))
{return or__3548__auto____25800;
} else
{var or__3548__auto____25801 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____25801))
{return or__3548__auto____25801;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__25806 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____25802 = coll;

if(cljs.core.truth_(and__3546__auto____25802))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____25802;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____25803 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____25803))
{return or__3548__auto____25803;
} else
{var or__3548__auto____25804 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____25804))
{return or__3548__auto____25804;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__25805.call(this,coll,f);
case  3 :
return _reduce__25806.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____25808 = o;

if(cljs.core.truth_(and__3546__auto____25808))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____25808;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____25809 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25809))
{return or__3548__auto____25809;
} else
{var or__3548__auto____25810 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____25810))
{return or__3548__auto____25810;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____25811 = o;

if(cljs.core.truth_(and__3546__auto____25811))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____25811;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____25812 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25812))
{return or__3548__auto____25812;
} else
{var or__3548__auto____25813 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____25813))
{return or__3548__auto____25813;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____25814 = o;

if(cljs.core.truth_(and__3546__auto____25814))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____25814;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____25815 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25815))
{return or__3548__auto____25815;
} else
{var or__3548__auto____25816 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____25816))
{return or__3548__auto____25816;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____25817 = o;

if(cljs.core.truth_(and__3546__auto____25817))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____25817;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____25818 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____25818))
{return or__3548__auto____25818;
} else
{var or__3548__auto____25819 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____25819))
{return or__3548__auto____25819;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____25820 = d;

if(cljs.core.truth_(and__3546__auto____25820))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____25820;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____25821 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____25821))
{return or__3548__auto____25821;
} else
{var or__3548__auto____25822 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____25822))
{return or__3548__auto____25822;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____25823 = this$;

if(cljs.core.truth_(and__3546__auto____25823))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____25823;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____25824 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25824))
{return or__3548__auto____25824;
} else
{var or__3548__auto____25825 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____25825))
{return or__3548__auto____25825;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____25826 = this$;

if(cljs.core.truth_(and__3546__auto____25826))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____25826;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____25827 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25827))
{return or__3548__auto____25827;
} else
{var or__3548__auto____25828 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____25828))
{return or__3548__auto____25828;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____25829 = this$;

if(cljs.core.truth_(and__3546__auto____25829))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____25829;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____25830 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____25830))
{return or__3548__auto____25830;
} else
{var or__3548__auto____25831 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____25831))
{return or__3548__auto____25831;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
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
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__25832 = null;
var G__25832__25833 = (function (o,k){
return null;
});
var G__25832__25834 = (function (o,k,not_found){
return not_found;
});
G__25832 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__25832__25833.call(this,o,k);
case  3 :
return G__25832__25834.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25832;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__25836 = null;
var G__25836__25837 = (function (_,f){
return f.call(null);
});
var G__25836__25838 = (function (_,f,start){
return start;
});
G__25836 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__25836__25837.call(this,_,f);
case  3 :
return G__25836__25838.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25836;
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
return (o === null);
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
var G__25840 = null;
var G__25840__25841 = (function (_,n){
return null;
});
var G__25840__25842 = (function (_,n,not_found){
return not_found;
});
G__25840 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__25840__25841.call(this,_,n);
case  3 :
return G__25840__25842.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25840;
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
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
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
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
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
var ci_reduce__25850 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__25844 = cljs.core._nth.call(null,cicoll,0);
var n__25845 = 1;

while(true){
if(cljs.core.truth_((n__25845 < cljs.core._count.call(null,cicoll))))
{{
var G__25854 = f.call(null,val__25844,cljs.core._nth.call(null,cicoll,n__25845));
var G__25855 = (n__25845 + 1);
val__25844 = G__25854;
n__25845 = G__25855;
continue;
}
} else
{return val__25844;
}
break;
}
}
});
var ci_reduce__25851 = (function (cicoll,f,val){
var val__25846 = val;
var n__25847 = 0;

while(true){
if(cljs.core.truth_((n__25847 < cljs.core._count.call(null,cicoll))))
{{
var G__25856 = f.call(null,val__25846,cljs.core._nth.call(null,cicoll,n__25847));
var G__25857 = (n__25847 + 1);
val__25846 = G__25856;
n__25847 = G__25857;
continue;
}
} else
{return val__25846;
}
break;
}
});
var ci_reduce__25852 = (function (cicoll,f,val,idx){
var val__25848 = val;
var n__25849 = idx;

while(true){
if(cljs.core.truth_((n__25849 < cljs.core._count.call(null,cicoll))))
{{
var G__25858 = f.call(null,val__25848,cljs.core._nth.call(null,cicoll,n__25849));
var G__25859 = (n__25849 + 1);
val__25848 = G__25858;
n__25849 = G__25859;
continue;
}
} else
{return val__25848;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__25850.call(this,cicoll,f);
case  3 :
return ci_reduce__25851.call(this,cicoll,f,val);
case  4 :
return ci_reduce__25852.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__25860 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__25873 = null;
var G__25873__25874 = (function (_,f){
var this__25861 = this;
return cljs.core.ci_reduce.call(null,this__25861.a,f,(this__25861.a[this__25861.i]),(this__25861.i + 1));
});
var G__25873__25875 = (function (_,f,start){
var this__25862 = this;
return cljs.core.ci_reduce.call(null,this__25862.a,f,start,this__25862.i);
});
G__25873 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__25873__25874.call(this,_,f);
case  3 :
return G__25873__25875.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25873;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__25863 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__25864 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__25877 = null;
var G__25877__25878 = (function (coll,n){
var this__25865 = this;
var i__25866 = (n + this__25865.i);

if(cljs.core.truth_((i__25866 < this__25865.a.length)))
{return (this__25865.a[i__25866]);
} else
{return null;
}
});
var G__25877__25879 = (function (coll,n,not_found){
var this__25867 = this;
var i__25868 = (n + this__25867.i);

if(cljs.core.truth_((i__25868 < this__25867.a.length)))
{return (this__25867.a[i__25868]);
} else
{return not_found;
}
});
G__25877 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__25877__25878.call(this,coll,n);
case  3 :
return G__25877__25879.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25877;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__25869 = this;
return (this__25869.a.length - this__25869.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__25870 = this;
return (this__25870.a[this__25870.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__25871 = this;
if(cljs.core.truth_(((this__25871.i + 1) < this__25871.a.length)))
{return (new cljs.core.IndexedSeq(this__25871.a,(this__25871.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__25872 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__25881 = null;
var G__25881__25882 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__25881__25883 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__25881 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__25881__25882.call(this,array,f);
case  3 :
return G__25881__25883.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25881;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__25885 = null;
var G__25885__25886 = (function (array,k){
return (array[k]);
});
var G__25885__25887 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__25885 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__25885__25886.call(this,array,k);
case  3 :
return G__25885__25887.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25885;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__25889 = null;
var G__25889__25890 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__25889__25891 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__25889 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__25889__25890.call(this,array,n);
case  3 :
return G__25889__25891.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__25889;
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
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____25893 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____25893))
{var s__25894 = temp__3698__auto____25893;

return cljs.core._first.call(null,s__25894);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
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
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__25895 = cljs.core.next.call(null,s);
s = G__25895;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__25896 = cljs.core.seq.call(null,x);
var n__25897 = 0;

while(true){
if(cljs.core.truth_(s__25896))
{{
var G__25898 = cljs.core.next.call(null,s__25896);
var G__25899 = (n__25897 + 1);
s__25896 = G__25898;
n__25897 = G__25899;
continue;
}
} else
{return n__25897;
}
break;
}
}));
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
var conj__25900 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__25901 = (function() { 
var G__25903__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__25904 = conj.call(null,coll,x);
var G__25905 = cljs.core.first.call(null,xs);
var G__25906 = cljs.core.next.call(null,xs);
coll = G__25904;
x = G__25905;
xs = G__25906;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__25903 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25903__delegate.call(this, coll, x, xs);
};
G__25903.cljs$lang$maxFixedArity = 2;
G__25903.cljs$lang$applyTo = (function (arglist__25907){
var coll = cljs.core.first(arglist__25907);
var x = cljs.core.first(cljs.core.next(arglist__25907));
var xs = cljs.core.rest(cljs.core.next(arglist__25907));
return G__25903__delegate.call(this, coll, x, xs);
});
return G__25903;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__25900.call(this,coll,x);
default:
return conj__25901.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__25901.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__25908 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__25909 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__25908.call(this,coll,n);
case  3 :
return nth__25909.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__25911 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__25912 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__25911.call(this,o,k);
case  3 :
return get__25912.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
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
var assoc__25915 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__25916 = (function() { 
var G__25918__delegate = function (coll,k,v,kvs){
while(true){
var ret__25914 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__25919 = ret__25914;
var G__25920 = cljs.core.first.call(null,kvs);
var G__25921 = cljs.core.second.call(null,kvs);
var G__25922 = cljs.core.nnext.call(null,kvs);
coll = G__25919;
k = G__25920;
v = G__25921;
kvs = G__25922;
continue;
}
} else
{return ret__25914;
}
break;
}
};
var G__25918 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25918__delegate.call(this, coll, k, v, kvs);
};
G__25918.cljs$lang$maxFixedArity = 3;
G__25918.cljs$lang$applyTo = (function (arglist__25923){
var coll = cljs.core.first(arglist__25923);
var k = cljs.core.first(cljs.core.next(arglist__25923));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25923)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25923)));
return G__25918__delegate.call(this, coll, k, v, kvs);
});
return G__25918;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__25915.call(this,coll,k,v);
default:
return assoc__25916.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__25916.cljs$lang$applyTo;
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
var dissoc__25925 = (function (coll){
return coll;
});
var dissoc__25926 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__25927 = (function() { 
var G__25929__delegate = function (coll,k,ks){
while(true){
var ret__25924 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__25930 = ret__25924;
var G__25931 = cljs.core.first.call(null,ks);
var G__25932 = cljs.core.next.call(null,ks);
coll = G__25930;
k = G__25931;
ks = G__25932;
continue;
}
} else
{return ret__25924;
}
break;
}
};
var G__25929 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25929__delegate.call(this, coll, k, ks);
};
G__25929.cljs$lang$maxFixedArity = 2;
G__25929.cljs$lang$applyTo = (function (arglist__25933){
var coll = cljs.core.first(arglist__25933);
var k = cljs.core.first(cljs.core.next(arglist__25933));
var ks = cljs.core.rest(cljs.core.next(arglist__25933));
return G__25929__delegate.call(this, coll, k, ks);
});
return G__25929;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__25925.call(this,coll);
case  2 :
return dissoc__25926.call(this,coll,k);
default:
return dissoc__25927.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__25927.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____25934 = o;

if(cljs.core.truth_((function (){var and__3546__auto____25935 = x__451__auto____25934;

if(cljs.core.truth_(and__3546__auto____25935))
{var and__3546__auto____25936 = x__451__auto____25934.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____25936))
{return cljs.core.not.call(null,x__451__auto____25934.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____25936;
}
} else
{return and__3546__auto____25935;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____25934);
}
})()))
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
var disj__25938 = (function (coll){
return coll;
});
var disj__25939 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__25940 = (function() { 
var G__25942__delegate = function (coll,k,ks){
while(true){
var ret__25937 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__25943 = ret__25937;
var G__25944 = cljs.core.first.call(null,ks);
var G__25945 = cljs.core.next.call(null,ks);
coll = G__25943;
k = G__25944;
ks = G__25945;
continue;
}
} else
{return ret__25937;
}
break;
}
};
var G__25942 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25942__delegate.call(this, coll, k, ks);
};
G__25942.cljs$lang$maxFixedArity = 2;
G__25942.cljs$lang$applyTo = (function (arglist__25946){
var coll = cljs.core.first(arglist__25946);
var k = cljs.core.first(cljs.core.next(arglist__25946));
var ks = cljs.core.rest(cljs.core.next(arglist__25946));
return G__25942__delegate.call(this, coll, k, ks);
});
return G__25942;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__25938.call(this,coll);
case  2 :
return disj__25939.call(this,coll,k);
default:
return disj__25940.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__25940.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
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
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____25947 = x;

if(cljs.core.truth_((function (){var and__3546__auto____25948 = x__451__auto____25947;

if(cljs.core.truth_(and__3546__auto____25948))
{var and__3546__auto____25949 = x__451__auto____25947.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____25949))
{return cljs.core.not.call(null,x__451__auto____25947.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____25949;
}
} else
{return and__3546__auto____25948;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____25947);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____25950 = x;

if(cljs.core.truth_((function (){var and__3546__auto____25951 = x__451__auto____25950;

if(cljs.core.truth_(and__3546__auto____25951))
{var and__3546__auto____25952 = x__451__auto____25950.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____25952))
{return cljs.core.not.call(null,x__451__auto____25950.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____25952;
}
} else
{return and__3546__auto____25951;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____25950);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____25953 = x;

if(cljs.core.truth_((function (){var and__3546__auto____25954 = x__451__auto____25953;

if(cljs.core.truth_(and__3546__auto____25954))
{var and__3546__auto____25955 = x__451__auto____25953.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____25955))
{return cljs.core.not.call(null,x__451__auto____25953.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____25955;
}
} else
{return and__3546__auto____25954;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____25953);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____25956 = x;

if(cljs.core.truth_((function (){var and__3546__auto____25957 = x__451__auto____25956;

if(cljs.core.truth_(and__3546__auto____25957))
{var and__3546__auto____25958 = x__451__auto____25956.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____25958))
{return cljs.core.not.call(null,x__451__auto____25956.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____25958;
}
} else
{return and__3546__auto____25957;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____25956);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____25959 = x;

if(cljs.core.truth_((function (){var and__3546__auto____25960 = x__451__auto____25959;

if(cljs.core.truth_(and__3546__auto____25960))
{var and__3546__auto____25961 = x__451__auto____25959.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____25961))
{return cljs.core.not.call(null,x__451__auto____25959.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____25961;
}
} else
{return and__3546__auto____25960;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____25959);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____25962 = x;

if(cljs.core.truth_((function (){var and__3546__auto____25963 = x__451__auto____25962;

if(cljs.core.truth_(and__3546__auto____25963))
{var and__3546__auto____25964 = x__451__auto____25962.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____25964))
{return cljs.core.not.call(null,x__451__auto____25962.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____25964;
}
} else
{return and__3546__auto____25963;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____25962);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____25965 = x;

if(cljs.core.truth_((function (){var and__3546__auto____25966 = x__451__auto____25965;

if(cljs.core.truth_(and__3546__auto____25966))
{var and__3546__auto____25967 = x__451__auto____25965.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____25967))
{return cljs.core.not.call(null,x__451__auto____25965.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____25967;
}
} else
{return and__3546__auto____25966;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____25965);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__25968 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__25968.push(key);
}));
return keys__25968;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
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
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__451__auto____25969 = s;

if(cljs.core.truth_((function (){var and__3546__auto____25970 = x__451__auto____25969;

if(cljs.core.truth_(and__3546__auto____25970))
{var and__3546__auto____25971 = x__451__auto____25969.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____25971))
{return cljs.core.not.call(null,x__451__auto____25969.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____25971;
}
} else
{return and__3546__auto____25970;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____25969);
}
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
var and__3546__auto____25972 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____25972))
{return cljs.core.not.call(null,(function (){var or__3548__auto____25973 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____25973))
{return or__3548__auto____25973;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____25972;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____25974 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____25974))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____25974;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____25975 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____25975))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____25975;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____25976 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____25976))
{return (n == n.toFixed());
} else
{return and__3546__auto____25976;
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
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____25977 = coll;

if(cljs.core.truth_(and__3546__auto____25977))
{var and__3546__auto____25978 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____25978))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____25978;
}
} else
{return and__3546__auto____25977;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
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
var distinct_QMARK___25983 = (function (x){
return true;
});
var distinct_QMARK___25984 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___25985 = (function() { 
var G__25987__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__25979 = cljs.core.set([y,x]);
var xs__25980 = more;

while(true){
var x__25981 = cljs.core.first.call(null,xs__25980);
var etc__25982 = cljs.core.next.call(null,xs__25980);

if(cljs.core.truth_(xs__25980))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__25979,x__25981)))
{return false;
} else
{{
var G__25988 = cljs.core.conj.call(null,s__25979,x__25981);
var G__25989 = etc__25982;
s__25979 = G__25988;
xs__25980 = G__25989;
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
var G__25987 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25987__delegate.call(this, x, y, more);
};
G__25987.cljs$lang$maxFixedArity = 2;
G__25987.cljs$lang$applyTo = (function (arglist__25990){
var x = cljs.core.first(arglist__25990);
var y = cljs.core.first(cljs.core.next(arglist__25990));
var more = cljs.core.rest(cljs.core.next(arglist__25990));
return G__25987__delegate.call(this, x, y, more);
});
return G__25987;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___25983.call(this,x);
case  2 :
return distinct_QMARK___25984.call(this,x,y);
default:
return distinct_QMARK___25985.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___25985.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__25991 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__25991)))
{return r__25991;
} else
{if(cljs.core.truth_(r__25991))
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
var sort__25993 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__25994 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__25992 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__25992,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__25992);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__25993.call(this,comp);
case  2 :
return sort__25994.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
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
var sort_by__25996 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__25997 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__25996.call(this,keyfn,comp);
case  3 :
return sort_by__25997.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
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
var reduce__25999 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__26000 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__25999.call(this,f,val);
case  3 :
return reduce__26000.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__26006 = (function (f,coll){
var temp__3695__auto____26002 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____26002))
{var s__26003 = temp__3695__auto____26002;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__26003),cljs.core.next.call(null,s__26003));
} else
{return f.call(null);
}
});
var seq_reduce__26007 = (function (f,val,coll){
var val__26004 = val;
var coll__26005 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__26005))
{{
var G__26009 = f.call(null,val__26004,cljs.core.first.call(null,coll__26005));
var G__26010 = cljs.core.next.call(null,coll__26005);
val__26004 = G__26009;
coll__26005 = G__26010;
continue;
}
} else
{return val__26004;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__26006.call(this,f,val);
case  3 :
return seq_reduce__26007.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__26011 = null;
var G__26011__26012 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__26011__26013 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__26011 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__26011__26012.call(this,coll,f);
case  3 :
return G__26011__26013.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26011;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___26015 = (function (){
return 0;
});
var _PLUS___26016 = (function (x){
return x;
});
var _PLUS___26017 = (function (x,y){
return (x + y);
});
var _PLUS___26018 = (function() { 
var G__26020__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__26020 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26020__delegate.call(this, x, y, more);
};
G__26020.cljs$lang$maxFixedArity = 2;
G__26020.cljs$lang$applyTo = (function (arglist__26021){
var x = cljs.core.first(arglist__26021);
var y = cljs.core.first(cljs.core.next(arglist__26021));
var more = cljs.core.rest(cljs.core.next(arglist__26021));
return G__26020__delegate.call(this, x, y, more);
});
return G__26020;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___26015.call(this);
case  1 :
return _PLUS___26016.call(this,x);
case  2 :
return _PLUS___26017.call(this,x,y);
default:
return _PLUS___26018.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___26018.cljs$lang$applyTo;
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
var ___26022 = (function (x){
return (- x);
});
var ___26023 = (function (x,y){
return (x - y);
});
var ___26024 = (function() { 
var G__26026__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__26026 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26026__delegate.call(this, x, y, more);
};
G__26026.cljs$lang$maxFixedArity = 2;
G__26026.cljs$lang$applyTo = (function (arglist__26027){
var x = cljs.core.first(arglist__26027);
var y = cljs.core.first(cljs.core.next(arglist__26027));
var more = cljs.core.rest(cljs.core.next(arglist__26027));
return G__26026__delegate.call(this, x, y, more);
});
return G__26026;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___26022.call(this,x);
case  2 :
return ___26023.call(this,x,y);
default:
return ___26024.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___26024.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___26028 = (function (){
return 1;
});
var _STAR___26029 = (function (x){
return x;
});
var _STAR___26030 = (function (x,y){
return (x * y);
});
var _STAR___26031 = (function() { 
var G__26033__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__26033 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26033__delegate.call(this, x, y, more);
};
G__26033.cljs$lang$maxFixedArity = 2;
G__26033.cljs$lang$applyTo = (function (arglist__26034){
var x = cljs.core.first(arglist__26034);
var y = cljs.core.first(cljs.core.next(arglist__26034));
var more = cljs.core.rest(cljs.core.next(arglist__26034));
return G__26033__delegate.call(this, x, y, more);
});
return G__26033;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___26028.call(this);
case  1 :
return _STAR___26029.call(this,x);
case  2 :
return _STAR___26030.call(this,x,y);
default:
return _STAR___26031.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___26031.cljs$lang$applyTo;
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
var _SLASH___26035 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___26036 = (function (x,y){
return (x / y);
});
var _SLASH___26037 = (function() { 
var G__26039__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__26039 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26039__delegate.call(this, x, y, more);
};
G__26039.cljs$lang$maxFixedArity = 2;
G__26039.cljs$lang$applyTo = (function (arglist__26040){
var x = cljs.core.first(arglist__26040);
var y = cljs.core.first(cljs.core.next(arglist__26040));
var more = cljs.core.rest(cljs.core.next(arglist__26040));
return G__26039__delegate.call(this, x, y, more);
});
return G__26039;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___26035.call(this,x);
case  2 :
return _SLASH___26036.call(this,x,y);
default:
return _SLASH___26037.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___26037.cljs$lang$applyTo;
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
var _LT___26041 = (function (x){
return true;
});
var _LT___26042 = (function (x,y){
return (x < y);
});
var _LT___26043 = (function() { 
var G__26045__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__26046 = y;
var G__26047 = cljs.core.first.call(null,more);
var G__26048 = cljs.core.next.call(null,more);
x = G__26046;
y = G__26047;
more = G__26048;
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
var G__26045 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26045__delegate.call(this, x, y, more);
};
G__26045.cljs$lang$maxFixedArity = 2;
G__26045.cljs$lang$applyTo = (function (arglist__26049){
var x = cljs.core.first(arglist__26049);
var y = cljs.core.first(cljs.core.next(arglist__26049));
var more = cljs.core.rest(cljs.core.next(arglist__26049));
return G__26045__delegate.call(this, x, y, more);
});
return G__26045;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___26041.call(this,x);
case  2 :
return _LT___26042.call(this,x,y);
default:
return _LT___26043.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___26043.cljs$lang$applyTo;
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
var _LT__EQ___26050 = (function (x){
return true;
});
var _LT__EQ___26051 = (function (x,y){
return (x <= y);
});
var _LT__EQ___26052 = (function() { 
var G__26054__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__26055 = y;
var G__26056 = cljs.core.first.call(null,more);
var G__26057 = cljs.core.next.call(null,more);
x = G__26055;
y = G__26056;
more = G__26057;
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
var G__26054 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26054__delegate.call(this, x, y, more);
};
G__26054.cljs$lang$maxFixedArity = 2;
G__26054.cljs$lang$applyTo = (function (arglist__26058){
var x = cljs.core.first(arglist__26058);
var y = cljs.core.first(cljs.core.next(arglist__26058));
var more = cljs.core.rest(cljs.core.next(arglist__26058));
return G__26054__delegate.call(this, x, y, more);
});
return G__26054;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___26050.call(this,x);
case  2 :
return _LT__EQ___26051.call(this,x,y);
default:
return _LT__EQ___26052.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___26052.cljs$lang$applyTo;
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
var _GT___26059 = (function (x){
return true;
});
var _GT___26060 = (function (x,y){
return (x > y);
});
var _GT___26061 = (function() { 
var G__26063__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__26064 = y;
var G__26065 = cljs.core.first.call(null,more);
var G__26066 = cljs.core.next.call(null,more);
x = G__26064;
y = G__26065;
more = G__26066;
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
var G__26063 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26063__delegate.call(this, x, y, more);
};
G__26063.cljs$lang$maxFixedArity = 2;
G__26063.cljs$lang$applyTo = (function (arglist__26067){
var x = cljs.core.first(arglist__26067);
var y = cljs.core.first(cljs.core.next(arglist__26067));
var more = cljs.core.rest(cljs.core.next(arglist__26067));
return G__26063__delegate.call(this, x, y, more);
});
return G__26063;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___26059.call(this,x);
case  2 :
return _GT___26060.call(this,x,y);
default:
return _GT___26061.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___26061.cljs$lang$applyTo;
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
var _GT__EQ___26068 = (function (x){
return true;
});
var _GT__EQ___26069 = (function (x,y){
return (x >= y);
});
var _GT__EQ___26070 = (function() { 
var G__26072__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__26073 = y;
var G__26074 = cljs.core.first.call(null,more);
var G__26075 = cljs.core.next.call(null,more);
x = G__26073;
y = G__26074;
more = G__26075;
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
var G__26072 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26072__delegate.call(this, x, y, more);
};
G__26072.cljs$lang$maxFixedArity = 2;
G__26072.cljs$lang$applyTo = (function (arglist__26076){
var x = cljs.core.first(arglist__26076);
var y = cljs.core.first(cljs.core.next(arglist__26076));
var more = cljs.core.rest(cljs.core.next(arglist__26076));
return G__26072__delegate.call(this, x, y, more);
});
return G__26072;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___26068.call(this,x);
case  2 :
return _GT__EQ___26069.call(this,x,y);
default:
return _GT__EQ___26070.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___26070.cljs$lang$applyTo;
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
var max__26077 = (function (x){
return x;
});
var max__26078 = (function (x,y){
return ((x > y) ? x : y);
});
var max__26079 = (function() { 
var G__26081__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__26081 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26081__delegate.call(this, x, y, more);
};
G__26081.cljs$lang$maxFixedArity = 2;
G__26081.cljs$lang$applyTo = (function (arglist__26082){
var x = cljs.core.first(arglist__26082);
var y = cljs.core.first(cljs.core.next(arglist__26082));
var more = cljs.core.rest(cljs.core.next(arglist__26082));
return G__26081__delegate.call(this, x, y, more);
});
return G__26081;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__26077.call(this,x);
case  2 :
return max__26078.call(this,x,y);
default:
return max__26079.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__26079.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__26083 = (function (x){
return x;
});
var min__26084 = (function (x,y){
return ((x < y) ? x : y);
});
var min__26085 = (function() { 
var G__26087__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__26087 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26087__delegate.call(this, x, y, more);
};
G__26087.cljs$lang$maxFixedArity = 2;
G__26087.cljs$lang$applyTo = (function (arglist__26088){
var x = cljs.core.first(arglist__26088);
var y = cljs.core.first(cljs.core.next(arglist__26088));
var more = cljs.core.rest(cljs.core.next(arglist__26088));
return G__26087__delegate.call(this, x, y, more);
});
return G__26087;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__26083.call(this,x);
case  2 :
return min__26084.call(this,x,y);
default:
return min__26085.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__26085.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
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
var rem__26089 = (n % d);

return cljs.core.fix.call(null,((n - rem__26089) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__26090 = cljs.core.quot.call(null,n,d);

return (n - (d * q__26090));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__26091 = (function (){
return Math.random.call(null);
});
var rand__26092 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__26091.call(this);
case  1 :
return rand__26092.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
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
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___26094 = (function (x){
return true;
});
var _EQ__EQ___26095 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___26096 = (function() { 
var G__26098__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__26099 = y;
var G__26100 = cljs.core.first.call(null,more);
var G__26101 = cljs.core.next.call(null,more);
x = G__26099;
y = G__26100;
more = G__26101;
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
var G__26098 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26098__delegate.call(this, x, y, more);
};
G__26098.cljs$lang$maxFixedArity = 2;
G__26098.cljs$lang$applyTo = (function (arglist__26102){
var x = cljs.core.first(arglist__26102);
var y = cljs.core.first(cljs.core.next(arglist__26102));
var more = cljs.core.rest(cljs.core.next(arglist__26102));
return G__26098__delegate.call(this, x, y, more);
});
return G__26098;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___26094.call(this,x);
case  2 :
return _EQ__EQ___26095.call(this,x,y);
default:
return _EQ__EQ___26096.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___26096.cljs$lang$applyTo;
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
var n__26103 = n;
var xs__26104 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____26105 = xs__26104;

if(cljs.core.truth_(and__3546__auto____26105))
{return (n__26103 > 0);
} else
{return and__3546__auto____26105;
}
})()))
{{
var G__26106 = (n__26103 - 1);
var G__26107 = cljs.core.next.call(null,xs__26104);
n__26103 = G__26106;
xs__26104 = G__26107;
continue;
}
} else
{return xs__26104;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__26112 = null;
var G__26112__26113 = (function (coll,n){
var temp__3695__auto____26108 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____26108))
{var xs__26109 = temp__3695__auto____26108;

return cljs.core.first.call(null,xs__26109);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__26112__26114 = (function (coll,n,not_found){
var temp__3695__auto____26110 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____26110))
{var xs__26111 = temp__3695__auto____26110;

return cljs.core.first.call(null,xs__26111);
} else
{return not_found;
}
});
G__26112 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__26112__26113.call(this,coll,n);
case  3 :
return G__26112__26114.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26112;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___26116 = (function (){
return "";
});
var str_STAR___26117 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___26118 = (function() { 
var G__26120__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__26121 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__26122 = cljs.core.next.call(null,more);
sb = G__26121;
more = G__26122;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__26120 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__26120__delegate.call(this, x, ys);
};
G__26120.cljs$lang$maxFixedArity = 1;
G__26120.cljs$lang$applyTo = (function (arglist__26123){
var x = cljs.core.first(arglist__26123);
var ys = cljs.core.rest(arglist__26123);
return G__26120__delegate.call(this, x, ys);
});
return G__26120;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___26116.call(this);
case  1 :
return str_STAR___26117.call(this,x);
default:
return str_STAR___26118.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___26118.cljs$lang$applyTo;
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
var str__26124 = (function (){
return "";
});
var str__26125 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__26126 = (function() { 
var G__26128__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__26129 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__26130 = cljs.core.next.call(null,more);
sb = G__26129;
more = G__26130;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__26128 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__26128__delegate.call(this, x, ys);
};
G__26128.cljs$lang$maxFixedArity = 1;
G__26128.cljs$lang$applyTo = (function (arglist__26131){
var x = cljs.core.first(arglist__26131);
var ys = cljs.core.rest(arglist__26131);
return G__26128__delegate.call(this, x, ys);
});
return G__26128;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__26124.call(this);
case  1 :
return str__26125.call(this,x);
default:
return str__26126.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__26126.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__26132 = (function (s,start){
return s.substring(start);
});
var subs__26133 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__26132.call(this,s,start);
case  3 :
return subs__26133.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__26135 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__26136 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__26135.call(this,ns);
case  2 :
return symbol__26136.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__26138 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__26139 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__26138.call(this,ns);
case  2 :
return keyword__26139.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__26141 = cljs.core.seq.call(null,x);
var ys__26142 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__26141 === null)))
{return (ys__26142 === null);
} else
{if(cljs.core.truth_((ys__26142 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__26141),cljs.core.first.call(null,ys__26142))))
{{
var G__26143 = cljs.core.next.call(null,xs__26141);
var G__26144 = cljs.core.next.call(null,ys__26142);
xs__26141 = G__26143;
ys__26142 = G__26144;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
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
return cljs.core.reduce.call(null,(function (p1__26145_SHARP_,p2__26146_SHARP_){
return cljs.core.hash_combine.call(null,p1__26145_SHARP_,cljs.core.hash.call(null,p2__26146_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__26147__26148 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__26147__26148))
{var G__26150__26152 = cljs.core.first.call(null,G__26147__26148);
var vec__26151__26153 = G__26150__26152;
var key_name__26154 = cljs.core.nth.call(null,vec__26151__26153,0,null);
var f__26155 = cljs.core.nth.call(null,vec__26151__26153,1,null);
var G__26147__26156 = G__26147__26148;

var G__26150__26157 = G__26150__26152;
var G__26147__26158 = G__26147__26156;

while(true){
var vec__26159__26160 = G__26150__26157;
var key_name__26161 = cljs.core.nth.call(null,vec__26159__26160,0,null);
var f__26162 = cljs.core.nth.call(null,vec__26159__26160,1,null);
var G__26147__26163 = G__26147__26158;

var str_name__26164 = cljs.core.name.call(null,key_name__26161);

obj[str_name__26164] = f__26162;
var temp__3698__auto____26165 = cljs.core.next.call(null,G__26147__26163);

if(cljs.core.truth_(temp__3698__auto____26165))
{var G__26147__26166 = temp__3698__auto____26165;

{
var G__26167 = cljs.core.first.call(null,G__26147__26166);
var G__26168 = G__26147__26166;
G__26150__26157 = G__26167;
G__26147__26158 = G__26168;
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
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__26169 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__26170 = this;
return (new cljs.core.List(this__26170.meta,o,coll,(this__26170.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26171 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__26172 = this;
return this__26172.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__26173 = this;
return this__26173.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__26174 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__26175 = this;
return this__26175.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__26176 = this;
return this__26176.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26177 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26178 = this;
return (new cljs.core.List(meta,this__26178.first,this__26178.rest,this__26178.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26179 = this;
return this__26179.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26180 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__26181 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__26182 = this;
return (new cljs.core.List(this__26182.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26183 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__26184 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__26185 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__26186 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__26187 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__26188 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26189 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26190 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26191 = this;
return this__26191.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26192 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__26193){
var items = cljs.core.seq( arglist__26193 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26194 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__26195 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26196 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26197 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__26197.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__26198 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__26199 = this;
return this__26199.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__26200 = this;
if(cljs.core.truth_((this__26200.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__26200.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26201 = this;
return this__26201.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26202 = this;
return (new cljs.core.Cons(meta,this__26202.first,this__26202.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__26203 = null;
var G__26203__26204 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__26203__26205 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__26203 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__26203__26204.call(this,string,f);
case  3 :
return G__26203__26205.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26203;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__26207 = null;
var G__26207__26208 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__26207__26209 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__26207 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__26207__26208.call(this,string,k);
case  3 :
return G__26207__26209.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26207;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__26211 = null;
var G__26211__26212 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__26211__26213 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__26211 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__26211__26212.call(this,string,n);
case  3 :
return G__26211__26213.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26211;
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
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__26221 = null;
var G__26221__26222 = (function (tsym26215,coll){
var tsym26215__26217 = this;

var this$__26218 = tsym26215__26217;

return cljs.core.get.call(null,coll,this$__26218.toString());
});
var G__26221__26223 = (function (tsym26216,coll,not_found){
var tsym26216__26219 = this;

var this$__26220 = tsym26216__26219;

return cljs.core.get.call(null,coll,this$__26220.toString(),not_found);
});
G__26221 = function(tsym26216,coll,not_found){
switch(arguments.length){
case  2 :
return G__26221__26222.call(this,tsym26216,coll);
case  3 :
return G__26221__26223.call(this,tsym26216,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26221;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__26225 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__26225;
} else
{lazy_seq.x = x__26225.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26226 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__26227 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26228 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26229 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__26229.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__26230 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__26231 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__26232 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26233 = this;
return this__26233.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26234 = this;
return (new cljs.core.LazySeq(meta,this__26234.realized,this__26234.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__26235 = [];

var s__26236 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__26236)))
{ary__26235.push(cljs.core.first.call(null,s__26236));
{
var G__26237 = cljs.core.next.call(null,s__26236);
s__26236 = G__26237;
continue;
}
} else
{return ary__26235;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__26238 = s;
var i__26239 = n;
var sum__26240 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____26241 = (i__26239 > 0);

if(cljs.core.truth_(and__3546__auto____26241))
{return cljs.core.seq.call(null,s__26238);
} else
{return and__3546__auto____26241;
}
})()))
{{
var G__26242 = cljs.core.next.call(null,s__26238);
var G__26243 = (i__26239 - 1);
var G__26244 = (sum__26240 + 1);
s__26238 = G__26242;
i__26239 = G__26243;
sum__26240 = G__26244;
continue;
}
} else
{return sum__26240;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("\uFDD0'else"))
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
var concat__26248 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__26249 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__26250 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__26245 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__26245))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__26245),concat.call(null,cljs.core.rest.call(null,s__26245),y));
} else
{return y;
}
})));
});
var concat__26251 = (function() { 
var G__26253__delegate = function (x,y,zs){
var cat__26247 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__26246 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__26246))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__26246),cat.call(null,cljs.core.rest.call(null,xys__26246),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__26247.call(null,concat.call(null,x,y),zs);
};
var G__26253 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26253__delegate.call(this, x, y, zs);
};
G__26253.cljs$lang$maxFixedArity = 2;
G__26253.cljs$lang$applyTo = (function (arglist__26254){
var x = cljs.core.first(arglist__26254);
var y = cljs.core.first(cljs.core.next(arglist__26254));
var zs = cljs.core.rest(cljs.core.next(arglist__26254));
return G__26253__delegate.call(this, x, y, zs);
});
return G__26253;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__26248.call(this);
case  1 :
return concat__26249.call(this,x);
case  2 :
return concat__26250.call(this,x,y);
default:
return concat__26251.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__26251.cljs$lang$applyTo;
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
var list_STAR___26255 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___26256 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___26257 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___26258 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___26259 = (function() { 
var G__26261__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__26261 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__26261__delegate.call(this, a, b, c, d, more);
};
G__26261.cljs$lang$maxFixedArity = 4;
G__26261.cljs$lang$applyTo = (function (arglist__26262){
var a = cljs.core.first(arglist__26262);
var b = cljs.core.first(cljs.core.next(arglist__26262));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26262)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26262))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26262))));
return G__26261__delegate.call(this, a, b, c, d, more);
});
return G__26261;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___26255.call(this,a);
case  2 :
return list_STAR___26256.call(this,a,b);
case  3 :
return list_STAR___26257.call(this,a,b,c);
case  4 :
return list_STAR___26258.call(this,a,b,c,d);
default:
return list_STAR___26259.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___26259.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__26272 = (function (f,args){
var fixed_arity__26263 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__26263 + 1)) <= fixed_arity__26263)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__26273 = (function (f,x,args){
var arglist__26264 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__26265 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__26264,fixed_arity__26265) <= fixed_arity__26265)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__26264));
} else
{return f.cljs$lang$applyTo(arglist__26264);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__26264));
}
});
var apply__26274 = (function (f,x,y,args){
var arglist__26266 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__26267 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__26266,fixed_arity__26267) <= fixed_arity__26267)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__26266));
} else
{return f.cljs$lang$applyTo(arglist__26266);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__26266));
}
});
var apply__26275 = (function (f,x,y,z,args){
var arglist__26268 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__26269 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__26268,fixed_arity__26269) <= fixed_arity__26269)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__26268));
} else
{return f.cljs$lang$applyTo(arglist__26268);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__26268));
}
});
var apply__26276 = (function() { 
var G__26278__delegate = function (f,a,b,c,d,args){
var arglist__26270 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__26271 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__26270,fixed_arity__26271) <= fixed_arity__26271)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__26270));
} else
{return f.cljs$lang$applyTo(arglist__26270);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__26270));
}
};
var G__26278 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__26278__delegate.call(this, f, a, b, c, d, args);
};
G__26278.cljs$lang$maxFixedArity = 5;
G__26278.cljs$lang$applyTo = (function (arglist__26279){
var f = cljs.core.first(arglist__26279);
var a = cljs.core.first(cljs.core.next(arglist__26279));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26279)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26279))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26279)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26279)))));
return G__26278__delegate.call(this, f, a, b, c, d, args);
});
return G__26278;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__26272.call(this,f,a);
case  3 :
return apply__26273.call(this,f,a,b);
case  4 :
return apply__26274.call(this,f,a,b,c);
case  5 :
return apply__26275.call(this,f,a,b,c,d);
default:
return apply__26276.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__26276.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__26280){
var obj = cljs.core.first(arglist__26280);
var f = cljs.core.first(cljs.core.next(arglist__26280));
var args = cljs.core.rest(cljs.core.next(arglist__26280));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___26281 = (function (x){
return false;
});
var not_EQ___26282 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___26283 = (function() { 
var G__26285__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__26285 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26285__delegate.call(this, x, y, more);
};
G__26285.cljs$lang$maxFixedArity = 2;
G__26285.cljs$lang$applyTo = (function (arglist__26286){
var x = cljs.core.first(arglist__26286);
var y = cljs.core.first(cljs.core.next(arglist__26286));
var more = cljs.core.rest(cljs.core.next(arglist__26286));
return G__26285__delegate.call(this, x, y, more);
});
return G__26285;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___26281.call(this,x);
case  2 :
return not_EQ___26282.call(this,x,y);
default:
return not_EQ___26283.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___26283.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
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
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__26287 = pred;
var G__26288 = cljs.core.next.call(null,coll);
pred = G__26287;
coll = G__26288;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
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
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____26289 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____26289))
{return or__3548__auto____26289;
} else
{{
var G__26290 = pred;
var G__26291 = cljs.core.next.call(null,coll);
pred = G__26290;
coll = G__26291;
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
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
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
var G__26292 = null;
var G__26292__26293 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__26292__26294 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__26292__26295 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__26292__26296 = (function() { 
var G__26298__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__26298 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26298__delegate.call(this, x, y, zs);
};
G__26298.cljs$lang$maxFixedArity = 2;
G__26298.cljs$lang$applyTo = (function (arglist__26299){
var x = cljs.core.first(arglist__26299);
var y = cljs.core.first(cljs.core.next(arglist__26299));
var zs = cljs.core.rest(cljs.core.next(arglist__26299));
return G__26298__delegate.call(this, x, y, zs);
});
return G__26298;
})()
;
G__26292 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__26292__26293.call(this);
case  1 :
return G__26292__26294.call(this,x);
case  2 :
return G__26292__26295.call(this,x,y);
default:
return G__26292__26296.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__26292.cljs$lang$maxFixedArity = 2;
G__26292.cljs$lang$applyTo = G__26292__26296.cljs$lang$applyTo;
return G__26292;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__26300__delegate = function (args){
return x;
};
var G__26300 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__26300__delegate.call(this, args);
};
G__26300.cljs$lang$maxFixedArity = 0;
G__26300.cljs$lang$applyTo = (function (arglist__26301){
var args = cljs.core.seq( arglist__26301 );;
return G__26300__delegate.call(this, args);
});
return G__26300;
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
var comp__26305 = (function (){
return cljs.core.identity;
});
var comp__26306 = (function (f){
return f;
});
var comp__26307 = (function (f,g){
return (function() {
var G__26311 = null;
var G__26311__26312 = (function (){
return f.call(null,g.call(null));
});
var G__26311__26313 = (function (x){
return f.call(null,g.call(null,x));
});
var G__26311__26314 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__26311__26315 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__26311__26316 = (function() { 
var G__26318__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__26318 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26318__delegate.call(this, x, y, z, args);
};
G__26318.cljs$lang$maxFixedArity = 3;
G__26318.cljs$lang$applyTo = (function (arglist__26319){
var x = cljs.core.first(arglist__26319);
var y = cljs.core.first(cljs.core.next(arglist__26319));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26319)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26319)));
return G__26318__delegate.call(this, x, y, z, args);
});
return G__26318;
})()
;
G__26311 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__26311__26312.call(this);
case  1 :
return G__26311__26313.call(this,x);
case  2 :
return G__26311__26314.call(this,x,y);
case  3 :
return G__26311__26315.call(this,x,y,z);
default:
return G__26311__26316.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__26311.cljs$lang$maxFixedArity = 3;
G__26311.cljs$lang$applyTo = G__26311__26316.cljs$lang$applyTo;
return G__26311;
})()
});
var comp__26308 = (function (f,g,h){
return (function() {
var G__26320 = null;
var G__26320__26321 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__26320__26322 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__26320__26323 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__26320__26324 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__26320__26325 = (function() { 
var G__26327__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__26327 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26327__delegate.call(this, x, y, z, args);
};
G__26327.cljs$lang$maxFixedArity = 3;
G__26327.cljs$lang$applyTo = (function (arglist__26328){
var x = cljs.core.first(arglist__26328);
var y = cljs.core.first(cljs.core.next(arglist__26328));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26328)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26328)));
return G__26327__delegate.call(this, x, y, z, args);
});
return G__26327;
})()
;
G__26320 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__26320__26321.call(this);
case  1 :
return G__26320__26322.call(this,x);
case  2 :
return G__26320__26323.call(this,x,y);
case  3 :
return G__26320__26324.call(this,x,y,z);
default:
return G__26320__26325.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__26320.cljs$lang$maxFixedArity = 3;
G__26320.cljs$lang$applyTo = G__26320__26325.cljs$lang$applyTo;
return G__26320;
})()
});
var comp__26309 = (function() { 
var G__26329__delegate = function (f1,f2,f3,fs){
var fs__26302 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__26330__delegate = function (args){
var ret__26303 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__26302),args);
var fs__26304 = cljs.core.next.call(null,fs__26302);

while(true){
if(cljs.core.truth_(fs__26304))
{{
var G__26331 = cljs.core.first.call(null,fs__26304).call(null,ret__26303);
var G__26332 = cljs.core.next.call(null,fs__26304);
ret__26303 = G__26331;
fs__26304 = G__26332;
continue;
}
} else
{return ret__26303;
}
break;
}
};
var G__26330 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__26330__delegate.call(this, args);
};
G__26330.cljs$lang$maxFixedArity = 0;
G__26330.cljs$lang$applyTo = (function (arglist__26333){
var args = cljs.core.seq( arglist__26333 );;
return G__26330__delegate.call(this, args);
});
return G__26330;
})()
;
};
var G__26329 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26329__delegate.call(this, f1, f2, f3, fs);
};
G__26329.cljs$lang$maxFixedArity = 3;
G__26329.cljs$lang$applyTo = (function (arglist__26334){
var f1 = cljs.core.first(arglist__26334);
var f2 = cljs.core.first(cljs.core.next(arglist__26334));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26334)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26334)));
return G__26329__delegate.call(this, f1, f2, f3, fs);
});
return G__26329;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__26305.call(this);
case  1 :
return comp__26306.call(this,f1);
case  2 :
return comp__26307.call(this,f1,f2);
case  3 :
return comp__26308.call(this,f1,f2,f3);
default:
return comp__26309.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__26309.cljs$lang$applyTo;
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
var partial__26335 = (function (f,arg1){
return (function() { 
var G__26340__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__26340 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__26340__delegate.call(this, args);
};
G__26340.cljs$lang$maxFixedArity = 0;
G__26340.cljs$lang$applyTo = (function (arglist__26341){
var args = cljs.core.seq( arglist__26341 );;
return G__26340__delegate.call(this, args);
});
return G__26340;
})()
;
});
var partial__26336 = (function (f,arg1,arg2){
return (function() { 
var G__26342__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__26342 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__26342__delegate.call(this, args);
};
G__26342.cljs$lang$maxFixedArity = 0;
G__26342.cljs$lang$applyTo = (function (arglist__26343){
var args = cljs.core.seq( arglist__26343 );;
return G__26342__delegate.call(this, args);
});
return G__26342;
})()
;
});
var partial__26337 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__26344__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__26344 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__26344__delegate.call(this, args);
};
G__26344.cljs$lang$maxFixedArity = 0;
G__26344.cljs$lang$applyTo = (function (arglist__26345){
var args = cljs.core.seq( arglist__26345 );;
return G__26344__delegate.call(this, args);
});
return G__26344;
})()
;
});
var partial__26338 = (function() { 
var G__26346__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__26347__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__26347 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__26347__delegate.call(this, args);
};
G__26347.cljs$lang$maxFixedArity = 0;
G__26347.cljs$lang$applyTo = (function (arglist__26348){
var args = cljs.core.seq( arglist__26348 );;
return G__26347__delegate.call(this, args);
});
return G__26347;
})()
;
};
var G__26346 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__26346__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__26346.cljs$lang$maxFixedArity = 4;
G__26346.cljs$lang$applyTo = (function (arglist__26349){
var f = cljs.core.first(arglist__26349);
var arg1 = cljs.core.first(cljs.core.next(arglist__26349));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26349)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26349))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26349))));
return G__26346__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__26346;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__26335.call(this,f,arg1);
case  3 :
return partial__26336.call(this,f,arg1,arg2);
case  4 :
return partial__26337.call(this,f,arg1,arg2,arg3);
default:
return partial__26338.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__26338.cljs$lang$applyTo;
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
var fnil__26350 = (function (f,x){
return (function() {
var G__26354 = null;
var G__26354__26355 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__26354__26356 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__26354__26357 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__26354__26358 = (function() { 
var G__26360__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__26360 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26360__delegate.call(this, a, b, c, ds);
};
G__26360.cljs$lang$maxFixedArity = 3;
G__26360.cljs$lang$applyTo = (function (arglist__26361){
var a = cljs.core.first(arglist__26361);
var b = cljs.core.first(cljs.core.next(arglist__26361));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26361)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26361)));
return G__26360__delegate.call(this, a, b, c, ds);
});
return G__26360;
})()
;
G__26354 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__26354__26355.call(this,a);
case  2 :
return G__26354__26356.call(this,a,b);
case  3 :
return G__26354__26357.call(this,a,b,c);
default:
return G__26354__26358.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__26354.cljs$lang$maxFixedArity = 3;
G__26354.cljs$lang$applyTo = G__26354__26358.cljs$lang$applyTo;
return G__26354;
})()
});
var fnil__26351 = (function (f,x,y){
return (function() {
var G__26362 = null;
var G__26362__26363 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__26362__26364 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__26362__26365 = (function() { 
var G__26367__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__26367 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26367__delegate.call(this, a, b, c, ds);
};
G__26367.cljs$lang$maxFixedArity = 3;
G__26367.cljs$lang$applyTo = (function (arglist__26368){
var a = cljs.core.first(arglist__26368);
var b = cljs.core.first(cljs.core.next(arglist__26368));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26368)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26368)));
return G__26367__delegate.call(this, a, b, c, ds);
});
return G__26367;
})()
;
G__26362 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__26362__26363.call(this,a,b);
case  3 :
return G__26362__26364.call(this,a,b,c);
default:
return G__26362__26365.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__26362.cljs$lang$maxFixedArity = 3;
G__26362.cljs$lang$applyTo = G__26362__26365.cljs$lang$applyTo;
return G__26362;
})()
});
var fnil__26352 = (function (f,x,y,z){
return (function() {
var G__26369 = null;
var G__26369__26370 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__26369__26371 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__26369__26372 = (function() { 
var G__26374__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__26374 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26374__delegate.call(this, a, b, c, ds);
};
G__26374.cljs$lang$maxFixedArity = 3;
G__26374.cljs$lang$applyTo = (function (arglist__26375){
var a = cljs.core.first(arglist__26375);
var b = cljs.core.first(cljs.core.next(arglist__26375));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26375)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26375)));
return G__26374__delegate.call(this, a, b, c, ds);
});
return G__26374;
})()
;
G__26369 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__26369__26370.call(this,a,b);
case  3 :
return G__26369__26371.call(this,a,b,c);
default:
return G__26369__26372.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__26369.cljs$lang$maxFixedArity = 3;
G__26369.cljs$lang$applyTo = G__26369__26372.cljs$lang$applyTo;
return G__26369;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__26350.call(this,f,x);
case  3 :
return fnil__26351.call(this,f,x,y);
case  4 :
return fnil__26352.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
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
var mapi__26378 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____26376 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26376))
{var s__26377 = temp__3698__auto____26376;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__26377)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__26377)));
} else
{return null;
}
})));
});

return mapi__26378.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____26379 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26379))
{var s__26380 = temp__3698__auto____26379;

var x__26381 = f.call(null,cljs.core.first.call(null,s__26380));

if(cljs.core.truth_((x__26381 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__26380));
} else
{return cljs.core.cons.call(null,x__26381,keep.call(null,f,cljs.core.rest.call(null,s__26380)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__26391 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____26388 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26388))
{var s__26389 = temp__3698__auto____26388;

var x__26390 = f.call(null,idx,cljs.core.first.call(null,s__26389));

if(cljs.core.truth_((x__26390 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__26389));
} else
{return cljs.core.cons.call(null,x__26390,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__26389)));
}
} else
{return null;
}
})));
});

return keepi__26391.call(null,0,coll);
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
var every_pred__26436 = (function (p){
return (function() {
var ep1 = null;
var ep1__26441 = (function (){
return true;
});
var ep1__26442 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__26443 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____26398 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____26398))
{return p.call(null,y);
} else
{return and__3546__auto____26398;
}
})());
});
var ep1__26444 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____26399 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____26399))
{var and__3546__auto____26400 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____26400))
{return p.call(null,z);
} else
{return and__3546__auto____26400;
}
} else
{return and__3546__auto____26399;
}
})());
});
var ep1__26445 = (function() { 
var G__26447__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____26401 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____26401))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____26401;
}
})());
};
var G__26447 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26447__delegate.call(this, x, y, z, args);
};
G__26447.cljs$lang$maxFixedArity = 3;
G__26447.cljs$lang$applyTo = (function (arglist__26448){
var x = cljs.core.first(arglist__26448);
var y = cljs.core.first(cljs.core.next(arglist__26448));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26448)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26448)));
return G__26447__delegate.call(this, x, y, z, args);
});
return G__26447;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__26441.call(this);
case  1 :
return ep1__26442.call(this,x);
case  2 :
return ep1__26443.call(this,x,y);
case  3 :
return ep1__26444.call(this,x,y,z);
default:
return ep1__26445.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__26445.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__26437 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__26449 = (function (){
return true;
});
var ep2__26450 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____26402 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____26402))
{return p2.call(null,x);
} else
{return and__3546__auto____26402;
}
})());
});
var ep2__26451 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____26403 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____26403))
{var and__3546__auto____26404 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____26404))
{var and__3546__auto____26405 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____26405))
{return p2.call(null,y);
} else
{return and__3546__auto____26405;
}
} else
{return and__3546__auto____26404;
}
} else
{return and__3546__auto____26403;
}
})());
});
var ep2__26452 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____26406 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____26406))
{var and__3546__auto____26407 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____26407))
{var and__3546__auto____26408 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____26408))
{var and__3546__auto____26409 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____26409))
{var and__3546__auto____26410 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____26410))
{return p2.call(null,z);
} else
{return and__3546__auto____26410;
}
} else
{return and__3546__auto____26409;
}
} else
{return and__3546__auto____26408;
}
} else
{return and__3546__auto____26407;
}
} else
{return and__3546__auto____26406;
}
})());
});
var ep2__26453 = (function() { 
var G__26455__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____26411 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____26411))
{return cljs.core.every_QMARK_.call(null,(function (p1__26382_SHARP_){
var and__3546__auto____26412 = p1.call(null,p1__26382_SHARP_);

if(cljs.core.truth_(and__3546__auto____26412))
{return p2.call(null,p1__26382_SHARP_);
} else
{return and__3546__auto____26412;
}
}),args);
} else
{return and__3546__auto____26411;
}
})());
};
var G__26455 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26455__delegate.call(this, x, y, z, args);
};
G__26455.cljs$lang$maxFixedArity = 3;
G__26455.cljs$lang$applyTo = (function (arglist__26456){
var x = cljs.core.first(arglist__26456);
var y = cljs.core.first(cljs.core.next(arglist__26456));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26456)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26456)));
return G__26455__delegate.call(this, x, y, z, args);
});
return G__26455;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__26449.call(this);
case  1 :
return ep2__26450.call(this,x);
case  2 :
return ep2__26451.call(this,x,y);
case  3 :
return ep2__26452.call(this,x,y,z);
default:
return ep2__26453.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__26453.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__26438 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__26457 = (function (){
return true;
});
var ep3__26458 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____26413 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____26413))
{var and__3546__auto____26414 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____26414))
{return p3.call(null,x);
} else
{return and__3546__auto____26414;
}
} else
{return and__3546__auto____26413;
}
})());
});
var ep3__26459 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____26415 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____26415))
{var and__3546__auto____26416 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____26416))
{var and__3546__auto____26417 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____26417))
{var and__3546__auto____26418 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____26418))
{var and__3546__auto____26419 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____26419))
{return p3.call(null,y);
} else
{return and__3546__auto____26419;
}
} else
{return and__3546__auto____26418;
}
} else
{return and__3546__auto____26417;
}
} else
{return and__3546__auto____26416;
}
} else
{return and__3546__auto____26415;
}
})());
});
var ep3__26460 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____26420 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____26420))
{var and__3546__auto____26421 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____26421))
{var and__3546__auto____26422 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____26422))
{var and__3546__auto____26423 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____26423))
{var and__3546__auto____26424 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____26424))
{var and__3546__auto____26425 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____26425))
{var and__3546__auto____26426 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____26426))
{var and__3546__auto____26427 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____26427))
{return p3.call(null,z);
} else
{return and__3546__auto____26427;
}
} else
{return and__3546__auto____26426;
}
} else
{return and__3546__auto____26425;
}
} else
{return and__3546__auto____26424;
}
} else
{return and__3546__auto____26423;
}
} else
{return and__3546__auto____26422;
}
} else
{return and__3546__auto____26421;
}
} else
{return and__3546__auto____26420;
}
})());
});
var ep3__26461 = (function() { 
var G__26463__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____26428 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____26428))
{return cljs.core.every_QMARK_.call(null,(function (p1__26383_SHARP_){
var and__3546__auto____26429 = p1.call(null,p1__26383_SHARP_);

if(cljs.core.truth_(and__3546__auto____26429))
{var and__3546__auto____26430 = p2.call(null,p1__26383_SHARP_);

if(cljs.core.truth_(and__3546__auto____26430))
{return p3.call(null,p1__26383_SHARP_);
} else
{return and__3546__auto____26430;
}
} else
{return and__3546__auto____26429;
}
}),args);
} else
{return and__3546__auto____26428;
}
})());
};
var G__26463 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26463__delegate.call(this, x, y, z, args);
};
G__26463.cljs$lang$maxFixedArity = 3;
G__26463.cljs$lang$applyTo = (function (arglist__26464){
var x = cljs.core.first(arglist__26464);
var y = cljs.core.first(cljs.core.next(arglist__26464));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26464)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26464)));
return G__26463__delegate.call(this, x, y, z, args);
});
return G__26463;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__26457.call(this);
case  1 :
return ep3__26458.call(this,x);
case  2 :
return ep3__26459.call(this,x,y);
case  3 :
return ep3__26460.call(this,x,y,z);
default:
return ep3__26461.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__26461.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__26439 = (function() { 
var G__26465__delegate = function (p1,p2,p3,ps){
var ps__26431 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__26466 = (function (){
return true;
});
var epn__26467 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__26384_SHARP_){
return p1__26384_SHARP_.call(null,x);
}),ps__26431);
});
var epn__26468 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__26385_SHARP_){
var and__3546__auto____26432 = p1__26385_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____26432))
{return p1__26385_SHARP_.call(null,y);
} else
{return and__3546__auto____26432;
}
}),ps__26431);
});
var epn__26469 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__26386_SHARP_){
var and__3546__auto____26433 = p1__26386_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____26433))
{var and__3546__auto____26434 = p1__26386_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____26434))
{return p1__26386_SHARP_.call(null,z);
} else
{return and__3546__auto____26434;
}
} else
{return and__3546__auto____26433;
}
}),ps__26431);
});
var epn__26470 = (function() { 
var G__26472__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____26435 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____26435))
{return cljs.core.every_QMARK_.call(null,(function (p1__26387_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__26387_SHARP_,args);
}),ps__26431);
} else
{return and__3546__auto____26435;
}
})());
};
var G__26472 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26472__delegate.call(this, x, y, z, args);
};
G__26472.cljs$lang$maxFixedArity = 3;
G__26472.cljs$lang$applyTo = (function (arglist__26473){
var x = cljs.core.first(arglist__26473);
var y = cljs.core.first(cljs.core.next(arglist__26473));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26473)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26473)));
return G__26472__delegate.call(this, x, y, z, args);
});
return G__26472;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__26466.call(this);
case  1 :
return epn__26467.call(this,x);
case  2 :
return epn__26468.call(this,x,y);
case  3 :
return epn__26469.call(this,x,y,z);
default:
return epn__26470.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__26470.cljs$lang$applyTo;
return epn;
})()
};
var G__26465 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26465__delegate.call(this, p1, p2, p3, ps);
};
G__26465.cljs$lang$maxFixedArity = 3;
G__26465.cljs$lang$applyTo = (function (arglist__26474){
var p1 = cljs.core.first(arglist__26474);
var p2 = cljs.core.first(cljs.core.next(arglist__26474));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26474)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26474)));
return G__26465__delegate.call(this, p1, p2, p3, ps);
});
return G__26465;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__26436.call(this,p1);
case  2 :
return every_pred__26437.call(this,p1,p2);
case  3 :
return every_pred__26438.call(this,p1,p2,p3);
default:
return every_pred__26439.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__26439.cljs$lang$applyTo;
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
var some_fn__26514 = (function (p){
return (function() {
var sp1 = null;
var sp1__26519 = (function (){
return null;
});
var sp1__26520 = (function (x){
return p.call(null,x);
});
var sp1__26521 = (function (x,y){
var or__3548__auto____26476 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____26476))
{return or__3548__auto____26476;
} else
{return p.call(null,y);
}
});
var sp1__26522 = (function (x,y,z){
var or__3548__auto____26477 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____26477))
{return or__3548__auto____26477;
} else
{var or__3548__auto____26478 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____26478))
{return or__3548__auto____26478;
} else
{return p.call(null,z);
}
}
});
var sp1__26523 = (function() { 
var G__26525__delegate = function (x,y,z,args){
var or__3548__auto____26479 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____26479))
{return or__3548__auto____26479;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__26525 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26525__delegate.call(this, x, y, z, args);
};
G__26525.cljs$lang$maxFixedArity = 3;
G__26525.cljs$lang$applyTo = (function (arglist__26526){
var x = cljs.core.first(arglist__26526);
var y = cljs.core.first(cljs.core.next(arglist__26526));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26526)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26526)));
return G__26525__delegate.call(this, x, y, z, args);
});
return G__26525;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__26519.call(this);
case  1 :
return sp1__26520.call(this,x);
case  2 :
return sp1__26521.call(this,x,y);
case  3 :
return sp1__26522.call(this,x,y,z);
default:
return sp1__26523.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__26523.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__26515 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__26527 = (function (){
return null;
});
var sp2__26528 = (function (x){
var or__3548__auto____26480 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____26480))
{return or__3548__auto____26480;
} else
{return p2.call(null,x);
}
});
var sp2__26529 = (function (x,y){
var or__3548__auto____26481 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____26481))
{return or__3548__auto____26481;
} else
{var or__3548__auto____26482 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____26482))
{return or__3548__auto____26482;
} else
{var or__3548__auto____26483 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____26483))
{return or__3548__auto____26483;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__26530 = (function (x,y,z){
var or__3548__auto____26484 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____26484))
{return or__3548__auto____26484;
} else
{var or__3548__auto____26485 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____26485))
{return or__3548__auto____26485;
} else
{var or__3548__auto____26486 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____26486))
{return or__3548__auto____26486;
} else
{var or__3548__auto____26487 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____26487))
{return or__3548__auto____26487;
} else
{var or__3548__auto____26488 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____26488))
{return or__3548__auto____26488;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__26531 = (function() { 
var G__26533__delegate = function (x,y,z,args){
var or__3548__auto____26489 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____26489))
{return or__3548__auto____26489;
} else
{return cljs.core.some.call(null,(function (p1__26392_SHARP_){
var or__3548__auto____26490 = p1.call(null,p1__26392_SHARP_);

if(cljs.core.truth_(or__3548__auto____26490))
{return or__3548__auto____26490;
} else
{return p2.call(null,p1__26392_SHARP_);
}
}),args);
}
};
var G__26533 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26533__delegate.call(this, x, y, z, args);
};
G__26533.cljs$lang$maxFixedArity = 3;
G__26533.cljs$lang$applyTo = (function (arglist__26534){
var x = cljs.core.first(arglist__26534);
var y = cljs.core.first(cljs.core.next(arglist__26534));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26534)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26534)));
return G__26533__delegate.call(this, x, y, z, args);
});
return G__26533;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__26527.call(this);
case  1 :
return sp2__26528.call(this,x);
case  2 :
return sp2__26529.call(this,x,y);
case  3 :
return sp2__26530.call(this,x,y,z);
default:
return sp2__26531.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__26531.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__26516 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__26535 = (function (){
return null;
});
var sp3__26536 = (function (x){
var or__3548__auto____26491 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____26491))
{return or__3548__auto____26491;
} else
{var or__3548__auto____26492 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____26492))
{return or__3548__auto____26492;
} else
{return p3.call(null,x);
}
}
});
var sp3__26537 = (function (x,y){
var or__3548__auto____26493 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____26493))
{return or__3548__auto____26493;
} else
{var or__3548__auto____26494 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____26494))
{return or__3548__auto____26494;
} else
{var or__3548__auto____26495 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____26495))
{return or__3548__auto____26495;
} else
{var or__3548__auto____26496 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____26496))
{return or__3548__auto____26496;
} else
{var or__3548__auto____26497 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____26497))
{return or__3548__auto____26497;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__26538 = (function (x,y,z){
var or__3548__auto____26498 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____26498))
{return or__3548__auto____26498;
} else
{var or__3548__auto____26499 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____26499))
{return or__3548__auto____26499;
} else
{var or__3548__auto____26500 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____26500))
{return or__3548__auto____26500;
} else
{var or__3548__auto____26501 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____26501))
{return or__3548__auto____26501;
} else
{var or__3548__auto____26502 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____26502))
{return or__3548__auto____26502;
} else
{var or__3548__auto____26503 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____26503))
{return or__3548__auto____26503;
} else
{var or__3548__auto____26504 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____26504))
{return or__3548__auto____26504;
} else
{var or__3548__auto____26505 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____26505))
{return or__3548__auto____26505;
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
var sp3__26539 = (function() { 
var G__26541__delegate = function (x,y,z,args){
var or__3548__auto____26506 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____26506))
{return or__3548__auto____26506;
} else
{return cljs.core.some.call(null,(function (p1__26393_SHARP_){
var or__3548__auto____26507 = p1.call(null,p1__26393_SHARP_);

if(cljs.core.truth_(or__3548__auto____26507))
{return or__3548__auto____26507;
} else
{var or__3548__auto____26508 = p2.call(null,p1__26393_SHARP_);

if(cljs.core.truth_(or__3548__auto____26508))
{return or__3548__auto____26508;
} else
{return p3.call(null,p1__26393_SHARP_);
}
}
}),args);
}
};
var G__26541 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26541__delegate.call(this, x, y, z, args);
};
G__26541.cljs$lang$maxFixedArity = 3;
G__26541.cljs$lang$applyTo = (function (arglist__26542){
var x = cljs.core.first(arglist__26542);
var y = cljs.core.first(cljs.core.next(arglist__26542));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26542)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26542)));
return G__26541__delegate.call(this, x, y, z, args);
});
return G__26541;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__26535.call(this);
case  1 :
return sp3__26536.call(this,x);
case  2 :
return sp3__26537.call(this,x,y);
case  3 :
return sp3__26538.call(this,x,y,z);
default:
return sp3__26539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__26539.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__26517 = (function() { 
var G__26543__delegate = function (p1,p2,p3,ps){
var ps__26509 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__26544 = (function (){
return null;
});
var spn__26545 = (function (x){
return cljs.core.some.call(null,(function (p1__26394_SHARP_){
return p1__26394_SHARP_.call(null,x);
}),ps__26509);
});
var spn__26546 = (function (x,y){
return cljs.core.some.call(null,(function (p1__26395_SHARP_){
var or__3548__auto____26510 = p1__26395_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____26510))
{return or__3548__auto____26510;
} else
{return p1__26395_SHARP_.call(null,y);
}
}),ps__26509);
});
var spn__26547 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__26396_SHARP_){
var or__3548__auto____26511 = p1__26396_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____26511))
{return or__3548__auto____26511;
} else
{var or__3548__auto____26512 = p1__26396_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____26512))
{return or__3548__auto____26512;
} else
{return p1__26396_SHARP_.call(null,z);
}
}
}),ps__26509);
});
var spn__26548 = (function() { 
var G__26550__delegate = function (x,y,z,args){
var or__3548__auto____26513 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____26513))
{return or__3548__auto____26513;
} else
{return cljs.core.some.call(null,(function (p1__26397_SHARP_){
return cljs.core.some.call(null,p1__26397_SHARP_,args);
}),ps__26509);
}
};
var G__26550 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26550__delegate.call(this, x, y, z, args);
};
G__26550.cljs$lang$maxFixedArity = 3;
G__26550.cljs$lang$applyTo = (function (arglist__26551){
var x = cljs.core.first(arglist__26551);
var y = cljs.core.first(cljs.core.next(arglist__26551));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26551)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26551)));
return G__26550__delegate.call(this, x, y, z, args);
});
return G__26550;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__26544.call(this);
case  1 :
return spn__26545.call(this,x);
case  2 :
return spn__26546.call(this,x,y);
case  3 :
return spn__26547.call(this,x,y,z);
default:
return spn__26548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__26548.cljs$lang$applyTo;
return spn;
})()
};
var G__26543 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26543__delegate.call(this, p1, p2, p3, ps);
};
G__26543.cljs$lang$maxFixedArity = 3;
G__26543.cljs$lang$applyTo = (function (arglist__26552){
var p1 = cljs.core.first(arglist__26552);
var p2 = cljs.core.first(cljs.core.next(arglist__26552));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26552)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26552)));
return G__26543__delegate.call(this, p1, p2, p3, ps);
});
return G__26543;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__26514.call(this,p1);
case  2 :
return some_fn__26515.call(this,p1,p2);
case  3 :
return some_fn__26516.call(this,p1,p2,p3);
default:
return some_fn__26517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__26517.cljs$lang$applyTo;
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
var map__26565 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____26553 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26553))
{var s__26554 = temp__3698__auto____26553;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__26554)),map.call(null,f,cljs.core.rest.call(null,s__26554)));
} else
{return null;
}
})));
});
var map__26566 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__26555 = cljs.core.seq.call(null,c1);
var s2__26556 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____26557 = s1__26555;

if(cljs.core.truth_(and__3546__auto____26557))
{return s2__26556;
} else
{return and__3546__auto____26557;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__26555),cljs.core.first.call(null,s2__26556)),map.call(null,f,cljs.core.rest.call(null,s1__26555),cljs.core.rest.call(null,s2__26556)));
} else
{return null;
}
})));
});
var map__26567 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__26558 = cljs.core.seq.call(null,c1);
var s2__26559 = cljs.core.seq.call(null,c2);
var s3__26560 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____26561 = s1__26558;

if(cljs.core.truth_(and__3546__auto____26561))
{var and__3546__auto____26562 = s2__26559;

if(cljs.core.truth_(and__3546__auto____26562))
{return s3__26560;
} else
{return and__3546__auto____26562;
}
} else
{return and__3546__auto____26561;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__26558),cljs.core.first.call(null,s2__26559),cljs.core.first.call(null,s3__26560)),map.call(null,f,cljs.core.rest.call(null,s1__26558),cljs.core.rest.call(null,s2__26559),cljs.core.rest.call(null,s3__26560)));
} else
{return null;
}
})));
});
var map__26568 = (function() { 
var G__26570__delegate = function (f,c1,c2,c3,colls){
var step__26564 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__26563 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__26563)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__26563),step.call(null,map.call(null,cljs.core.rest,ss__26563)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__26475_SHARP_){
return cljs.core.apply.call(null,f,p1__26475_SHARP_);
}),step__26564.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__26570 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__26570__delegate.call(this, f, c1, c2, c3, colls);
};
G__26570.cljs$lang$maxFixedArity = 4;
G__26570.cljs$lang$applyTo = (function (arglist__26571){
var f = cljs.core.first(arglist__26571);
var c1 = cljs.core.first(cljs.core.next(arglist__26571));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26571)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26571))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26571))));
return G__26570__delegate.call(this, f, c1, c2, c3, colls);
});
return G__26570;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__26565.call(this,f,c1);
case  3 :
return map__26566.call(this,f,c1,c2);
case  4 :
return map__26567.call(this,f,c1,c2,c3);
default:
return map__26568.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__26568.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____26572 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26572))
{var s__26573 = temp__3698__auto____26572;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__26573),take.call(null,(n - 1),cljs.core.rest.call(null,s__26573)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__26576 = (function (n,coll){
while(true){
var s__26574 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____26575 = (n > 0);

if(cljs.core.truth_(and__3546__auto____26575))
{return s__26574;
} else
{return and__3546__auto____26575;
}
})()))
{{
var G__26577 = (n - 1);
var G__26578 = cljs.core.rest.call(null,s__26574);
n = G__26577;
coll = G__26578;
continue;
}
} else
{return s__26574;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__26576.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__26579 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__26580 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__26579.call(this,n);
case  2 :
return drop_last__26580.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__26582 = cljs.core.seq.call(null,coll);
var lead__26583 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__26583))
{{
var G__26584 = cljs.core.next.call(null,s__26582);
var G__26585 = cljs.core.next.call(null,lead__26583);
s__26582 = G__26584;
lead__26583 = G__26585;
continue;
}
} else
{return s__26582;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__26588 = (function (pred,coll){
while(true){
var s__26586 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____26587 = s__26586;

if(cljs.core.truth_(and__3546__auto____26587))
{return pred.call(null,cljs.core.first.call(null,s__26586));
} else
{return and__3546__auto____26587;
}
})()))
{{
var G__26589 = pred;
var G__26590 = cljs.core.rest.call(null,s__26586);
pred = G__26589;
coll = G__26590;
continue;
}
} else
{return s__26586;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__26588.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____26591 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26591))
{var s__26592 = temp__3698__auto____26591;

return cljs.core.concat.call(null,s__26592,cycle.call(null,s__26592));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__26593 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__26594 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__26593.call(this,n);
case  2 :
return repeat__26594.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
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
var repeatedly__26596 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__26597 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__26596.call(this,n);
case  2 :
return repeatedly__26597.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__26603 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__26599 = cljs.core.seq.call(null,c1);
var s2__26600 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____26601 = s1__26599;

if(cljs.core.truth_(and__3546__auto____26601))
{return s2__26600;
} else
{return and__3546__auto____26601;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__26599),cljs.core.cons.call(null,cljs.core.first.call(null,s2__26600),interleave.call(null,cljs.core.rest.call(null,s1__26599),cljs.core.rest.call(null,s2__26600))));
} else
{return null;
}
})));
});
var interleave__26604 = (function() { 
var G__26606__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__26602 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__26602)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__26602),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__26602)));
} else
{return null;
}
})));
};
var G__26606 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26606__delegate.call(this, c1, c2, colls);
};
G__26606.cljs$lang$maxFixedArity = 2;
G__26606.cljs$lang$applyTo = (function (arglist__26607){
var c1 = cljs.core.first(arglist__26607);
var c2 = cljs.core.first(cljs.core.next(arglist__26607));
var colls = cljs.core.rest(cljs.core.next(arglist__26607));
return G__26606__delegate.call(this, c1, c2, colls);
});
return G__26606;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__26603.call(this,c1,c2);
default:
return interleave__26604.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__26604.cljs$lang$applyTo;
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
var cat__26610 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____26608 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____26608))
{var coll__26609 = temp__3695__auto____26608;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__26609),cat.call(null,cljs.core.rest.call(null,coll__26609),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__26610.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__26611 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__26612 = (function() { 
var G__26614__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__26614 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26614__delegate.call(this, f, coll, colls);
};
G__26614.cljs$lang$maxFixedArity = 2;
G__26614.cljs$lang$applyTo = (function (arglist__26615){
var f = cljs.core.first(arglist__26615);
var coll = cljs.core.first(cljs.core.next(arglist__26615));
var colls = cljs.core.rest(cljs.core.next(arglist__26615));
return G__26614__delegate.call(this, f, coll, colls);
});
return G__26614;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__26611.call(this,f,coll);
default:
return mapcat__26612.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__26612.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____26616 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26616))
{var s__26617 = temp__3698__auto____26616;

var f__26618 = cljs.core.first.call(null,s__26617);
var r__26619 = cljs.core.rest.call(null,s__26617);

if(cljs.core.truth_(pred.call(null,f__26618)))
{return cljs.core.cons.call(null,f__26618,filter.call(null,pred,r__26619));
} else
{return filter.call(null,pred,r__26619);
}
} else
{return null;
}
})));
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
var walk__26621 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__26621.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__26620_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__26620_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
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
var partition__26628 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__26629 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____26622 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26622))
{var s__26623 = temp__3698__auto____26622;

var p__26624 = cljs.core.take.call(null,n,s__26623);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__26624))))
{return cljs.core.cons.call(null,p__26624,partition.call(null,n,step,cljs.core.drop.call(null,step,s__26623)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__26630 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____26625 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____26625))
{var s__26626 = temp__3698__auto____26625;

var p__26627 = cljs.core.take.call(null,n,s__26626);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__26627))))
{return cljs.core.cons.call(null,p__26627,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__26626)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__26627,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__26628.call(this,n,step);
case  3 :
return partition__26629.call(this,n,step,pad);
case  4 :
return partition__26630.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__26636 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__26637 = (function (m,ks,not_found){
var sentinel__26632 = cljs.core.lookup_sentinel;
var m__26633 = m;
var ks__26634 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__26634))
{var m__26635 = cljs.core.get.call(null,m__26633,cljs.core.first.call(null,ks__26634),sentinel__26632);

if(cljs.core.truth_((sentinel__26632 === m__26635)))
{return not_found;
} else
{{
var G__26639 = sentinel__26632;
var G__26640 = m__26635;
var G__26641 = cljs.core.next.call(null,ks__26634);
sentinel__26632 = G__26639;
m__26633 = G__26640;
ks__26634 = G__26641;
continue;
}
}
} else
{return m__26633;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__26636.call(this,m,ks);
case  3 :
return get_in__26637.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__26642,v){
var vec__26643__26644 = p__26642;
var k__26645 = cljs.core.nth.call(null,vec__26643__26644,0,null);
var ks__26646 = cljs.core.nthnext.call(null,vec__26643__26644,1);

if(cljs.core.truth_(ks__26646))
{return cljs.core.assoc.call(null,m,k__26645,assoc_in.call(null,cljs.core.get.call(null,m,k__26645),ks__26646,v));
} else
{return cljs.core.assoc.call(null,m,k__26645,v);
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
var update_in__delegate = function (m,p__26647,f,args){
var vec__26648__26649 = p__26647;
var k__26650 = cljs.core.nth.call(null,vec__26648__26649,0,null);
var ks__26651 = cljs.core.nthnext.call(null,vec__26648__26649,1);

if(cljs.core.truth_(ks__26651))
{return cljs.core.assoc.call(null,m,k__26650,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__26650),ks__26651,f,args));
} else
{return cljs.core.assoc.call(null,m,k__26650,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__26650),args));
}
};
var update_in = function (m,p__26647,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__26647, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__26652){
var m = cljs.core.first(arglist__26652);
var p__26647 = cljs.core.first(cljs.core.next(arglist__26652));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26652)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26652)));
return update_in__delegate.call(this, m, p__26647, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__26653 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__26686 = null;
var G__26686__26687 = (function (coll,k){
var this__26654 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__26686__26688 = (function (coll,k,not_found){
var this__26655 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__26686 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__26686__26687.call(this,coll,k);
case  3 :
return G__26686__26688.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26686;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__26656 = this;
var new_array__26657 = cljs.core.aclone.call(null,this__26656.array);

(new_array__26657[k] = v);
return (new cljs.core.Vector(this__26656.meta,new_array__26657));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__26690 = null;
var G__26690__26691 = (function (tsym26658,k){
var this__26660 = this;
var tsym26658__26661 = this;

var coll__26662 = tsym26658__26661;

return cljs.core._lookup.call(null,coll__26662,k);
});
var G__26690__26692 = (function (tsym26659,k,not_found){
var this__26663 = this;
var tsym26659__26664 = this;

var coll__26665 = tsym26659__26664;

return cljs.core._lookup.call(null,coll__26665,k,not_found);
});
G__26690 = function(tsym26659,k,not_found){
switch(arguments.length){
case  2 :
return G__26690__26691.call(this,tsym26659,k);
case  3 :
return G__26690__26692.call(this,tsym26659,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26690;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__26666 = this;
var new_array__26667 = cljs.core.aclone.call(null,this__26666.array);

new_array__26667.push(o);
return (new cljs.core.Vector(this__26666.meta,new_array__26667));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__26694 = null;
var G__26694__26695 = (function (v,f){
var this__26668 = this;
return cljs.core.ci_reduce.call(null,this__26668.array,f);
});
var G__26694__26696 = (function (v,f,start){
var this__26669 = this;
return cljs.core.ci_reduce.call(null,this__26669.array,f,start);
});
G__26694 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__26694__26695.call(this,v,f);
case  3 :
return G__26694__26696.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26694;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26670 = this;
if(cljs.core.truth_((this__26670.array.length > 0)))
{var vector_seq__26671 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__26670.array.length)))
{return cljs.core.cons.call(null,(this__26670.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__26671.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__26672 = this;
return this__26672.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__26673 = this;
var count__26674 = this__26673.array.length;

if(cljs.core.truth_((count__26674 > 0)))
{return (this__26673.array[(count__26674 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__26675 = this;
if(cljs.core.truth_((this__26675.array.length > 0)))
{var new_array__26676 = cljs.core.aclone.call(null,this__26675.array);

new_array__26676.pop();
return (new cljs.core.Vector(this__26675.meta,new_array__26676));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__26677 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26678 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26679 = this;
return (new cljs.core.Vector(meta,this__26679.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26680 = this;
return this__26680.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__26698 = null;
var G__26698__26699 = (function (coll,n){
var this__26681 = this;
if(cljs.core.truth_((function (){var and__3546__auto____26682 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____26682))
{return (n < this__26681.array.length);
} else
{return and__3546__auto____26682;
}
})()))
{return (this__26681.array[n]);
} else
{return null;
}
});
var G__26698__26700 = (function (coll,n,not_found){
var this__26683 = this;
if(cljs.core.truth_((function (){var and__3546__auto____26684 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____26684))
{return (n < this__26683.array.length);
} else
{return and__3546__auto____26684;
}
})()))
{return (this__26683.array[n]);
} else
{return not_found;
}
});
G__26698 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__26698__26699.call(this,coll,n);
case  3 :
return G__26698__26700.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26698;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26685 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__26685.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__26702 = pv.cnt;

if(cljs.core.truth_((cnt__26702 < 32)))
{return 0;
} else
{return (((cnt__26702 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__26703 = level;
var ret__26704 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__26703)))
{return ret__26704;
} else
{var embed__26705 = ret__26704;
var r__26706 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___26707 = (r__26706[0] = embed__26705);

{
var G__26708 = (ll__26703 - 5);
var G__26709 = r__26706;
ll__26703 = G__26708;
ret__26704 = G__26709;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__26710 = cljs.core.aclone.call(null,parent);
var subidx__26711 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__26710[subidx__26711] = tailnode);
return ret__26710;
} else
{var temp__3695__auto____26712 = (parent[subidx__26711]);

if(cljs.core.truth_(temp__3695__auto____26712))
{var child__26713 = temp__3695__auto____26712;

var node_to_insert__26714 = push_tail.call(null,pv,(level - 5),child__26713,tailnode);
var ___26715 = (ret__26710[subidx__26711] = node_to_insert__26714);

return ret__26710;
} else
{var node_to_insert__26716 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___26717 = (ret__26710[subidx__26711] = node_to_insert__26716);

return ret__26710;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____26718 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____26718))
{return (i < pv.cnt);
} else
{return and__3546__auto____26718;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__26719 = pv.root;
var level__26720 = pv.shift;

while(true){
if(cljs.core.truth_((level__26720 > 0)))
{{
var G__26721 = (node__26719[((i >> level__26720) & 31)]);
var G__26722 = (level__26720 - 5);
node__26719 = G__26721;
level__26720 = G__26722;
continue;
}
} else
{return node__26719;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__26723 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__26723[(i & 31)] = val);
return ret__26723;
} else
{var subidx__26724 = ((i >> level) & 31);
var ___26725 = (ret__26723[subidx__26724] = do_assoc.call(null,pv,(level - 5),(node[subidx__26724]),i,val));

return ret__26723;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__26726 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__26727 = pop_tail.call(null,pv,(level - 5),(node[subidx__26726]));

if(cljs.core.truth_((function (){var and__3546__auto____26728 = (new_child__26727 === null);

if(cljs.core.truth_(and__3546__auto____26728))
{return (subidx__26726 === 0);
} else
{return and__3546__auto____26728;
}
})()))
{return null;
} else
{var ret__26729 = cljs.core.aclone.call(null,node);
var ___26730 = (ret__26729[subidx__26726] = new_child__26727);

return ret__26729;
}
} else
{if(cljs.core.truth_((subidx__26726 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__26731 = cljs.core.aclone.call(null,node);
var ___26732 = (ret__26731[subidx__26726] = null);

return ret__26731;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
})
cljs.core.PersistentVector.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__26733 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__26773 = null;
var G__26773__26774 = (function (coll,k){
var this__26734 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__26773__26775 = (function (coll,k,not_found){
var this__26735 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__26773 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__26773__26774.call(this,coll,k);
case  3 :
return G__26773__26775.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26773;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__26736 = this;
if(cljs.core.truth_((function (){var and__3546__auto____26737 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____26737))
{return (k < this__26736.cnt);
} else
{return and__3546__auto____26737;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__26738 = cljs.core.aclone.call(null,this__26736.tail);

(new_tail__26738[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__26736.meta,this__26736.cnt,this__26736.shift,this__26736.root,new_tail__26738));
} else
{return (new cljs.core.PersistentVector(this__26736.meta,this__26736.cnt,this__26736.shift,cljs.core.do_assoc.call(null,coll,this__26736.shift,this__26736.root,k,v),this__26736.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__26736.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__26736.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__26777 = null;
var G__26777__26778 = (function (tsym26739,k){
var this__26741 = this;
var tsym26739__26742 = this;

var coll__26743 = tsym26739__26742;

return cljs.core._lookup.call(null,coll__26743,k);
});
var G__26777__26779 = (function (tsym26740,k,not_found){
var this__26744 = this;
var tsym26740__26745 = this;

var coll__26746 = tsym26740__26745;

return cljs.core._lookup.call(null,coll__26746,k,not_found);
});
G__26777 = function(tsym26740,k,not_found){
switch(arguments.length){
case  2 :
return G__26777__26778.call(this,tsym26740,k);
case  3 :
return G__26777__26779.call(this,tsym26740,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26777;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__26747 = this;
if(cljs.core.truth_(((this__26747.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__26748 = cljs.core.aclone.call(null,this__26747.tail);

new_tail__26748.push(o);
return (new cljs.core.PersistentVector(this__26747.meta,(this__26747.cnt + 1),this__26747.shift,this__26747.root,new_tail__26748));
} else
{var root_overflow_QMARK___26749 = ((this__26747.cnt >> 5) > (1 << this__26747.shift));
var new_shift__26750 = (cljs.core.truth_(root_overflow_QMARK___26749)?(this__26747.shift + 5):this__26747.shift);
var new_root__26752 = (cljs.core.truth_(root_overflow_QMARK___26749)?(function (){var n_r__26751 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__26751[0] = this__26747.root);
(n_r__26751[1] = cljs.core.new_path.call(null,this__26747.shift,this__26747.tail));
return n_r__26751;
})():cljs.core.push_tail.call(null,coll,this__26747.shift,this__26747.root,this__26747.tail));

return (new cljs.core.PersistentVector(this__26747.meta,(this__26747.cnt + 1),new_shift__26750,new_root__26752,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__26781 = null;
var G__26781__26782 = (function (v,f){
var this__26753 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__26781__26783 = (function (v,f,start){
var this__26754 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__26781 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__26781__26782.call(this,v,f);
case  3 :
return G__26781__26783.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26781;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26755 = this;
if(cljs.core.truth_((this__26755.cnt > 0)))
{var vector_seq__26756 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__26755.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__26756.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__26757 = this;
return this__26757.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__26758 = this;
if(cljs.core.truth_((this__26758.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__26758.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__26759 = this;
if(cljs.core.truth_((this__26759.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__26759.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__26759.meta);
} else
{if(cljs.core.truth_((1 < (this__26759.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__26759.meta,(this__26759.cnt - 1),this__26759.shift,this__26759.root,cljs.core.aclone.call(null,this__26759.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__26760 = cljs.core.array_for.call(null,coll,(this__26759.cnt - 2));
var nr__26761 = cljs.core.pop_tail.call(null,this__26759.shift,this__26759.root);
var new_root__26762 = (cljs.core.truth_((nr__26761 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__26761);
var cnt_1__26763 = (this__26759.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____26764 = (5 < this__26759.shift);

if(cljs.core.truth_(and__3546__auto____26764))
{return ((new_root__26762[1]) === null);
} else
{return and__3546__auto____26764;
}
})()))
{return (new cljs.core.PersistentVector(this__26759.meta,cnt_1__26763,(this__26759.shift - 5),(new_root__26762[0]),new_tail__26760));
} else
{return (new cljs.core.PersistentVector(this__26759.meta,cnt_1__26763,this__26759.shift,new_root__26762,new_tail__26760));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__26765 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26766 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26767 = this;
return (new cljs.core.PersistentVector(meta,this__26767.cnt,this__26767.shift,this__26767.root,this__26767.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26768 = this;
return this__26768.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__26785 = null;
var G__26785__26786 = (function (coll,n){
var this__26769 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__26785__26787 = (function (coll,n,not_found){
var this__26770 = this;
if(cljs.core.truth_((function (){var and__3546__auto____26771 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____26771))
{return (n < this__26770.cnt);
} else
{return and__3546__auto____26771;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__26785 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__26785__26786.call(this,coll,n);
case  3 :
return G__26785__26787.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26785;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26772 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__26772.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = (new Array(32));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[]));
cljs.core.PersistentVector.fromArray = (function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xs);
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,coll);
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
vector.cljs$lang$applyTo = (function (arglist__26789){
var args = cljs.core.seq( arglist__26789 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__26790 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__26818 = null;
var G__26818__26819 = (function (coll,k){
var this__26791 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__26818__26820 = (function (coll,k,not_found){
var this__26792 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__26818 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__26818__26819.call(this,coll,k);
case  3 :
return G__26818__26820.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26818;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__26793 = this;
var v_pos__26794 = (this__26793.start + key);

return (new cljs.core.Subvec(this__26793.meta,cljs.core._assoc.call(null,this__26793.v,v_pos__26794,val),this__26793.start,((this__26793.end > (v_pos__26794 + 1)) ? this__26793.end : (v_pos__26794 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__26822 = null;
var G__26822__26823 = (function (tsym26795,k){
var this__26797 = this;
var tsym26795__26798 = this;

var coll__26799 = tsym26795__26798;

return cljs.core._lookup.call(null,coll__26799,k);
});
var G__26822__26824 = (function (tsym26796,k,not_found){
var this__26800 = this;
var tsym26796__26801 = this;

var coll__26802 = tsym26796__26801;

return cljs.core._lookup.call(null,coll__26802,k,not_found);
});
G__26822 = function(tsym26796,k,not_found){
switch(arguments.length){
case  2 :
return G__26822__26823.call(this,tsym26796,k);
case  3 :
return G__26822__26824.call(this,tsym26796,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26822;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__26803 = this;
return (new cljs.core.Subvec(this__26803.meta,cljs.core._assoc_n.call(null,this__26803.v,this__26803.end,o),this__26803.start,(this__26803.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__26826 = null;
var G__26826__26827 = (function (coll,f){
var this__26804 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__26826__26828 = (function (coll,f,start){
var this__26805 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__26826 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__26826__26827.call(this,coll,f);
case  3 :
return G__26826__26828.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26826;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26806 = this;
var subvec_seq__26807 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__26806.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__26806.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__26807.call(null,this__26806.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__26808 = this;
return (this__26808.end - this__26808.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__26809 = this;
return cljs.core._nth.call(null,this__26809.v,(this__26809.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__26810 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__26810.start,this__26810.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__26810.meta,this__26810.v,this__26810.start,(this__26810.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__26811 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26812 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26813 = this;
return (new cljs.core.Subvec(meta,this__26813.v,this__26813.start,this__26813.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26814 = this;
return this__26814.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__26830 = null;
var G__26830__26831 = (function (coll,n){
var this__26815 = this;
return cljs.core._nth.call(null,this__26815.v,(this__26815.start + n));
});
var G__26830__26832 = (function (coll,n,not_found){
var this__26816 = this;
return cljs.core._nth.call(null,this__26816.v,(this__26816.start + n),not_found);
});
G__26830 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__26830__26831.call(this,coll,n);
case  3 :
return G__26830__26832.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26830;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26817 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__26817.meta);
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
var subvec__26834 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__26835 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__26834.call(this,v,start);
case  3 :
return subvec__26835.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26837 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__26838 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26839 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26840 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__26840.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__26841 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__26842 = this;
return cljs.core._first.call(null,this__26842.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__26843 = this;
var temp__3695__auto____26844 = cljs.core.next.call(null,this__26843.front);

if(cljs.core.truth_(temp__3695__auto____26844))
{var f1__26845 = temp__3695__auto____26844;

return (new cljs.core.PersistentQueueSeq(this__26843.meta,f1__26845,this__26843.rear));
} else
{if(cljs.core.truth_((this__26843.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__26843.meta,this__26843.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26846 = this;
return this__26846.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26847 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__26847.front,this__26847.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__26848 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__26849 = this;
if(cljs.core.truth_(this__26849.front))
{return (new cljs.core.PersistentQueue(this__26849.meta,(this__26849.count + 1),this__26849.front,cljs.core.conj.call(null,(function (){var or__3548__auto____26850 = this__26849.rear;

if(cljs.core.truth_(or__3548__auto____26850))
{return or__3548__auto____26850;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__26849.meta,(this__26849.count + 1),cljs.core.conj.call(null,this__26849.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26851 = this;
var rear__26852 = cljs.core.seq.call(null,this__26851.rear);

if(cljs.core.truth_((function (){var or__3548__auto____26853 = this__26851.front;

if(cljs.core.truth_(or__3548__auto____26853))
{return or__3548__auto____26853;
} else
{return rear__26852;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__26851.front,cljs.core.seq.call(null,rear__26852)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__26854 = this;
return this__26854.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__26855 = this;
return cljs.core._first.call(null,this__26855.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__26856 = this;
if(cljs.core.truth_(this__26856.front))
{var temp__3695__auto____26857 = cljs.core.next.call(null,this__26856.front);

if(cljs.core.truth_(temp__3695__auto____26857))
{var f1__26858 = temp__3695__auto____26857;

return (new cljs.core.PersistentQueue(this__26856.meta,(this__26856.count - 1),f1__26858,this__26856.rear));
} else
{return (new cljs.core.PersistentQueue(this__26856.meta,(this__26856.count - 1),cljs.core.seq.call(null,this__26856.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__26859 = this;
return cljs.core.first.call(null,this__26859.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__26860 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26861 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26862 = this;
return (new cljs.core.PersistentQueue(meta,this__26862.count,this__26862.front,this__26862.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26863 = this;
return this__26863.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26864 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__26865 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__26866 = array.length;

var i__26867 = 0;

while(true){
if(cljs.core.truth_((i__26867 < len__26866)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__26867]))))
{return i__26867;
} else
{{
var G__26868 = (i__26867 + incr);
i__26867 = G__26868;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___26870 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___26871 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____26869 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____26869))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____26869;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___26870.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___26871.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__26874 = cljs.core.hash.call(null,a);
var b__26875 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__26874 < b__26875)))
{return -1;
} else
{if(cljs.core.truth_((a__26874 > b__26875)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__26876 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__26903 = null;
var G__26903__26904 = (function (coll,k){
var this__26877 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__26903__26905 = (function (coll,k,not_found){
var this__26878 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__26878.strobj,(this__26878.strobj[k]),not_found);
});
G__26903 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__26903__26904.call(this,coll,k);
case  3 :
return G__26903__26905.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26903;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__26879 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__26880 = goog.object.clone.call(null,this__26879.strobj);
var overwrite_QMARK___26881 = new_strobj__26880.hasOwnProperty(k);

(new_strobj__26880[k] = v);
if(cljs.core.truth_(overwrite_QMARK___26881))
{return (new cljs.core.ObjMap(this__26879.meta,this__26879.keys,new_strobj__26880));
} else
{var new_keys__26882 = cljs.core.aclone.call(null,this__26879.keys);

new_keys__26882.push(k);
return (new cljs.core.ObjMap(this__26879.meta,new_keys__26882,new_strobj__26880));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__26879.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__26883 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__26883.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__26907 = null;
var G__26907__26908 = (function (tsym26884,k){
var this__26886 = this;
var tsym26884__26887 = this;

var coll__26888 = tsym26884__26887;

return cljs.core._lookup.call(null,coll__26888,k);
});
var G__26907__26909 = (function (tsym26885,k,not_found){
var this__26889 = this;
var tsym26885__26890 = this;

var coll__26891 = tsym26885__26890;

return cljs.core._lookup.call(null,coll__26891,k,not_found);
});
G__26907 = function(tsym26885,k,not_found){
switch(arguments.length){
case  2 :
return G__26907__26908.call(this,tsym26885,k);
case  3 :
return G__26907__26909.call(this,tsym26885,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26907;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__26892 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26893 = this;
if(cljs.core.truth_((this__26893.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__26873_SHARP_){
return cljs.core.vector.call(null,p1__26873_SHARP_,(this__26893.strobj[p1__26873_SHARP_]));
}),this__26893.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__26894 = this;
return this__26894.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26895 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26896 = this;
return (new cljs.core.ObjMap(meta,this__26896.keys,this__26896.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26897 = this;
return this__26897.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26898 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__26898.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__26899 = this;
if(cljs.core.truth_((function (){var and__3546__auto____26900 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____26900))
{return this__26899.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____26900;
}
})()))
{var new_keys__26901 = cljs.core.aclone.call(null,this__26899.keys);
var new_strobj__26902 = goog.object.clone.call(null,this__26899.strobj);

new_keys__26901.splice(cljs.core.scan_array.call(null,1,k,new_keys__26901),1);
cljs.core.js_delete.call(null,new_strobj__26902,k);
return (new cljs.core.ObjMap(this__26899.meta,new_keys__26901,new_strobj__26902));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__26912 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__26950 = null;
var G__26950__26951 = (function (coll,k){
var this__26913 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__26950__26952 = (function (coll,k,not_found){
var this__26914 = this;
var bucket__26915 = (this__26914.hashobj[cljs.core.hash.call(null,k)]);
var i__26916 = (cljs.core.truth_(bucket__26915)?cljs.core.scan_array.call(null,2,k,bucket__26915):null);

if(cljs.core.truth_(i__26916))
{return (bucket__26915[(i__26916 + 1)]);
} else
{return not_found;
}
});
G__26950 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__26950__26951.call(this,coll,k);
case  3 :
return G__26950__26952.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26950;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__26917 = this;
var h__26918 = cljs.core.hash.call(null,k);
var bucket__26919 = (this__26917.hashobj[h__26918]);

if(cljs.core.truth_(bucket__26919))
{var new_bucket__26920 = cljs.core.aclone.call(null,bucket__26919);
var new_hashobj__26921 = goog.object.clone.call(null,this__26917.hashobj);

(new_hashobj__26921[h__26918] = new_bucket__26920);
var temp__3695__auto____26922 = cljs.core.scan_array.call(null,2,k,new_bucket__26920);

if(cljs.core.truth_(temp__3695__auto____26922))
{var i__26923 = temp__3695__auto____26922;

(new_bucket__26920[(i__26923 + 1)] = v);
return (new cljs.core.HashMap(this__26917.meta,this__26917.count,new_hashobj__26921));
} else
{new_bucket__26920.push(k,v);
return (new cljs.core.HashMap(this__26917.meta,(this__26917.count + 1),new_hashobj__26921));
}
} else
{var new_hashobj__26924 = goog.object.clone.call(null,this__26917.hashobj);

(new_hashobj__26924[h__26918] = [k,v]);
return (new cljs.core.HashMap(this__26917.meta,(this__26917.count + 1),new_hashobj__26924));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__26925 = this;
var bucket__26926 = (this__26925.hashobj[cljs.core.hash.call(null,k)]);
var i__26927 = (cljs.core.truth_(bucket__26926)?cljs.core.scan_array.call(null,2,k,bucket__26926):null);

if(cljs.core.truth_(i__26927))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__26954 = null;
var G__26954__26955 = (function (tsym26928,k){
var this__26930 = this;
var tsym26928__26931 = this;

var coll__26932 = tsym26928__26931;

return cljs.core._lookup.call(null,coll__26932,k);
});
var G__26954__26956 = (function (tsym26929,k,not_found){
var this__26933 = this;
var tsym26929__26934 = this;

var coll__26935 = tsym26929__26934;

return cljs.core._lookup.call(null,coll__26935,k,not_found);
});
G__26954 = function(tsym26929,k,not_found){
switch(arguments.length){
case  2 :
return G__26954__26955.call(this,tsym26929,k);
case  3 :
return G__26954__26956.call(this,tsym26929,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26954;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__26936 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26937 = this;
if(cljs.core.truth_((this__26937.count > 0)))
{var hashes__26938 = cljs.core.js_keys.call(null,this__26937.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__26911_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__26937.hashobj[p1__26911_SHARP_])));
}),hashes__26938);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__26939 = this;
return this__26939.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__26940 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__26941 = this;
return (new cljs.core.HashMap(meta,this__26941.count,this__26941.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__26942 = this;
return this__26942.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__26943 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__26943.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__26944 = this;
var h__26945 = cljs.core.hash.call(null,k);
var bucket__26946 = (this__26944.hashobj[h__26945]);
var i__26947 = (cljs.core.truth_(bucket__26946)?cljs.core.scan_array.call(null,2,k,bucket__26946):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__26947)))
{return coll;
} else
{var new_hashobj__26948 = goog.object.clone.call(null,this__26944.hashobj);

if(cljs.core.truth_((3 > bucket__26946.length)))
{cljs.core.js_delete.call(null,new_hashobj__26948,h__26945);
} else
{var new_bucket__26949 = cljs.core.aclone.call(null,bucket__26946);

new_bucket__26949.splice(i__26947,2);
(new_hashobj__26948[h__26945] = new_bucket__26949);
}
return (new cljs.core.HashMap(this__26944.meta,(this__26944.count - 1),new_hashobj__26948));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__26958 = ks.length;

var i__26959 = 0;
var out__26960 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__26959 < len__26958)))
{{
var G__26961 = (i__26959 + 1);
var G__26962 = cljs.core.assoc.call(null,out__26960,(ks[i__26959]),(vs[i__26959]));
i__26959 = G__26961;
out__26960 = G__26962;
continue;
}
} else
{return out__26960;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__26963 = cljs.core.seq.call(null,keyvals);
var out__26964 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__26963))
{{
var G__26965 = cljs.core.nnext.call(null,in$__26963);
var G__26966 = cljs.core.assoc.call(null,out__26964,cljs.core.first.call(null,in$__26963),cljs.core.second.call(null,in$__26963));
in$__26963 = G__26965;
out__26964 = G__26966;
continue;
}
} else
{return out__26964;
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
hash_map.cljs$lang$applyTo = (function (arglist__26967){
var keyvals = cljs.core.seq( arglist__26967 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
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
{return cljs.core.reduce.call(null,(function (p1__26968_SHARP_,p2__26969_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____26970 = p1__26968_SHARP_;

if(cljs.core.truth_(or__3548__auto____26970))
{return or__3548__auto____26970;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__26969_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__26971){
var maps = cljs.core.seq( arglist__26971 );;
return merge__delegate.call(this, maps);
});
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
{var merge_entry__26974 = (function (m,e){
var k__26972 = cljs.core.first.call(null,e);
var v__26973 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__26972)))
{return cljs.core.assoc.call(null,m,k__26972,f.call(null,cljs.core.get.call(null,m,k__26972),v__26973));
} else
{return cljs.core.assoc.call(null,m,k__26972,v__26973);
}
});
var merge2__26976 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__26974,(function (){var or__3548__auto____26975 = m1;

if(cljs.core.truth_(or__3548__auto____26975))
{return or__3548__auto____26975;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__26976,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__26977){
var f = cljs.core.first(arglist__26977);
var maps = cljs.core.rest(arglist__26977);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__26979 = cljs.core.ObjMap.fromObject([],{});
var keys__26980 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__26980))
{var key__26981 = cljs.core.first.call(null,keys__26980);
var entry__26982 = cljs.core.get.call(null,map,key__26981,"\uFDD0'user/not-found");

{
var G__26983 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__26982,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__26979,key__26981,entry__26982):ret__26979);
var G__26984 = cljs.core.next.call(null,keys__26980);
ret__26979 = G__26983;
keys__26980 = G__26984;
continue;
}
} else
{return ret__26979;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__26985 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__27006 = null;
var G__27006__27007 = (function (coll,v){
var this__26986 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__27006__27008 = (function (coll,v,not_found){
var this__26987 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__26987.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__27006 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__27006__27007.call(this,coll,v);
case  3 :
return G__27006__27008.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__27006;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__27010 = null;
var G__27010__27011 = (function (tsym26988,k){
var this__26990 = this;
var tsym26988__26991 = this;

var coll__26992 = tsym26988__26991;

return cljs.core._lookup.call(null,coll__26992,k);
});
var G__27010__27012 = (function (tsym26989,k,not_found){
var this__26993 = this;
var tsym26989__26994 = this;

var coll__26995 = tsym26989__26994;

return cljs.core._lookup.call(null,coll__26995,k,not_found);
});
G__27010 = function(tsym26989,k,not_found){
switch(arguments.length){
case  2 :
return G__27010__27011.call(this,tsym26989,k);
case  3 :
return G__27010__27012.call(this,tsym26989,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__27010;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__26996 = this;
return (new cljs.core.Set(this__26996.meta,cljs.core.assoc.call(null,this__26996.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__26997 = this;
return cljs.core.keys.call(null,this__26997.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__26998 = this;
return (new cljs.core.Set(this__26998.meta,cljs.core.dissoc.call(null,this__26998.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__26999 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__27000 = this;
var and__3546__auto____27001 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____27001))
{var and__3546__auto____27002 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____27002))
{return cljs.core.every_QMARK_.call(null,(function (p1__26978_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__26978_SHARP_);
}),other);
} else
{return and__3546__auto____27002;
}
} else
{return and__3546__auto____27001;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__27003 = this;
return (new cljs.core.Set(meta,this__27003.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__27004 = this;
return this__27004.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__27005 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__27005.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__27015 = cljs.core.seq.call(null,coll);
var out__27016 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__27015))))
{{
var G__27017 = cljs.core.rest.call(null,in$__27015);
var G__27018 = cljs.core.conj.call(null,out__27016,cljs.core.first.call(null,in$__27015));
in$__27015 = G__27017;
out__27016 = G__27018;
continue;
}
} else
{return out__27016;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__27019 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____27020 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____27020))
{var e__27021 = temp__3695__auto____27020;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__27021));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__27019,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__27014_SHARP_){
var temp__3695__auto____27022 = cljs.core.find.call(null,smap,p1__27014_SHARP_);

if(cljs.core.truth_(temp__3695__auto____27022))
{var e__27023 = temp__3695__auto____27022;

return cljs.core.second.call(null,e__27023);
} else
{return p1__27014_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__27031 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__27024,seen){
while(true){
var vec__27025__27026 = p__27024;
var f__27027 = cljs.core.nth.call(null,vec__27025__27026,0,null);
var xs__27028 = vec__27025__27026;

var temp__3698__auto____27029 = cljs.core.seq.call(null,xs__27028);

if(cljs.core.truth_(temp__3698__auto____27029))
{var s__27030 = temp__3698__auto____27029;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__27027)))
{{
var G__27032 = cljs.core.rest.call(null,s__27030);
var G__27033 = seen;
p__27024 = G__27032;
seen = G__27033;
continue;
}
} else
{return cljs.core.cons.call(null,f__27027,step.call(null,cljs.core.rest.call(null,s__27030),cljs.core.conj.call(null,seen,f__27027)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__27031.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__27034 = cljs.core.PersistentVector.fromArray([]);
var s__27035 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__27035)))
{{
var G__27036 = cljs.core.conj.call(null,ret__27034,cljs.core.first.call(null,s__27035));
var G__27037 = cljs.core.next.call(null,s__27035);
ret__27034 = G__27036;
s__27035 = G__27037;
continue;
}
} else
{return cljs.core.seq.call(null,ret__27034);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____27038 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____27038))
{return or__3548__auto____27038;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__27039 = x.lastIndexOf("/");

if(cljs.core.truth_((i__27039 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__27039 + 1));
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
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
if(cljs.core.truth_((function (){var or__3548__auto____27040 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____27040))
{return or__3548__auto____27040;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__27041 = x.lastIndexOf("/");

if(cljs.core.truth_((i__27041 > -1)))
{return cljs.core.subs.call(null,x,2,i__27041);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__27044 = cljs.core.ObjMap.fromObject([],{});
var ks__27045 = cljs.core.seq.call(null,keys);
var vs__27046 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____27047 = ks__27045;

if(cljs.core.truth_(and__3546__auto____27047))
{return vs__27046;
} else
{return and__3546__auto____27047;
}
})()))
{{
var G__27048 = cljs.core.assoc.call(null,map__27044,cljs.core.first.call(null,ks__27045),cljs.core.first.call(null,vs__27046));
var G__27049 = cljs.core.next.call(null,ks__27045);
var G__27050 = cljs.core.next.call(null,vs__27046);
map__27044 = G__27048;
ks__27045 = G__27049;
vs__27046 = G__27050;
continue;
}
} else
{return map__27044;
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
var max_key__27053 = (function (k,x){
return x;
});
var max_key__27054 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__27055 = (function() { 
var G__27057__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__27042_SHARP_,p2__27043_SHARP_){
return max_key.call(null,k,p1__27042_SHARP_,p2__27043_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__27057 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27057__delegate.call(this, k, x, y, more);
};
G__27057.cljs$lang$maxFixedArity = 3;
G__27057.cljs$lang$applyTo = (function (arglist__27058){
var k = cljs.core.first(arglist__27058);
var x = cljs.core.first(cljs.core.next(arglist__27058));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27058)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27058)));
return G__27057__delegate.call(this, k, x, y, more);
});
return G__27057;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__27053.call(this,k,x);
case  3 :
return max_key__27054.call(this,k,x,y);
default:
return max_key__27055.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__27055.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__27059 = (function (k,x){
return x;
});
var min_key__27060 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__27061 = (function() { 
var G__27063__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__27051_SHARP_,p2__27052_SHARP_){
return min_key.call(null,k,p1__27051_SHARP_,p2__27052_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__27063 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27063__delegate.call(this, k, x, y, more);
};
G__27063.cljs$lang$maxFixedArity = 3;
G__27063.cljs$lang$applyTo = (function (arglist__27064){
var k = cljs.core.first(arglist__27064);
var x = cljs.core.first(cljs.core.next(arglist__27064));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27064)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27064)));
return G__27063__delegate.call(this, k, x, y, more);
});
return G__27063;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__27059.call(this,k,x);
case  3 :
return min_key__27060.call(this,k,x,y);
default:
return min_key__27061.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__27061.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__27067 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__27068 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____27065 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____27065))
{var s__27066 = temp__3698__auto____27065;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__27066),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__27066)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__27067.call(this,n,step);
case  3 :
return partition_all__27068.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____27070 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____27070))
{var s__27071 = temp__3698__auto____27070;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__27071))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__27071),take_while.call(null,pred,cljs.core.rest.call(null,s__27071)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__27072 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__27073 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__27089 = null;
var G__27089__27090 = (function (rng,f){
var this__27074 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__27089__27091 = (function (rng,f,s){
var this__27075 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__27089 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__27089__27090.call(this,rng,f);
case  3 :
return G__27089__27091.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__27089;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__27076 = this;
var comp__27077 = (cljs.core.truth_((this__27076.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__27077.call(null,this__27076.start,this__27076.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__27078 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__27078.end - this__27078.start) / this__27078.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__27079 = this;
return this__27079.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__27080 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__27080.meta,(this__27080.start + this__27080.step),this__27080.end,this__27080.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__27081 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__27082 = this;
return (new cljs.core.Range(meta,this__27082.start,this__27082.end,this__27082.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__27083 = this;
return this__27083.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__27093 = null;
var G__27093__27094 = (function (rng,n){
var this__27084 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__27084.start + (n * this__27084.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____27085 = (this__27084.start > this__27084.end);

if(cljs.core.truth_(and__3546__auto____27085))
{return cljs.core._EQ_.call(null,this__27084.step,0);
} else
{return and__3546__auto____27085;
}
})()))
{return this__27084.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__27093__27095 = (function (rng,n,not_found){
var this__27086 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__27086.start + (n * this__27086.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____27087 = (this__27086.start > this__27086.end);

if(cljs.core.truth_(and__3546__auto____27087))
{return cljs.core._EQ_.call(null,this__27086.step,0);
} else
{return and__3546__auto____27087;
}
})()))
{return this__27086.start;
} else
{return not_found;
}
}
});
G__27093 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__27093__27094.call(this,rng,n);
case  3 :
return G__27093__27095.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__27093;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__27088 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__27088.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__27097 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__27098 = (function (end){
return range.call(null,0,end,1);
});
var range__27099 = (function (start,end){
return range.call(null,start,end,1);
});
var range__27100 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__27097.call(this);
case  1 :
return range__27098.call(this,start);
case  2 :
return range__27099.call(this,start,end);
case  3 :
return range__27100.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____27102 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____27102))
{var s__27103 = temp__3698__auto____27102;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__27103),take_nth.call(null,n,cljs.core.drop.call(null,n,s__27103)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____27105 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____27105))
{var s__27106 = temp__3698__auto____27105;

var fst__27107 = cljs.core.first.call(null,s__27106);
var fv__27108 = f.call(null,fst__27107);
var run__27109 = cljs.core.cons.call(null,fst__27107,cljs.core.take_while.call(null,(function (p1__27104_SHARP_){
return cljs.core._EQ_.call(null,fv__27108,f.call(null,p1__27104_SHARP_));
}),cljs.core.next.call(null,s__27106)));

return cljs.core.cons.call(null,run__27109,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__27109),s__27106))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__27124 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____27120 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____27120))
{var s__27121 = temp__3695__auto____27120;

return reductions.call(null,f,cljs.core.first.call(null,s__27121),cljs.core.rest.call(null,s__27121));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__27125 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____27122 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____27122))
{var s__27123 = temp__3698__auto____27122;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__27123)),cljs.core.rest.call(null,s__27123));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__27124.call(this,f,init);
case  3 :
return reductions__27125.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
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
var juxt__27128 = (function (f){
return (function() {
var G__27133 = null;
var G__27133__27134 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__27133__27135 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__27133__27136 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__27133__27137 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__27133__27138 = (function() { 
var G__27140__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__27140 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27140__delegate.call(this, x, y, z, args);
};
G__27140.cljs$lang$maxFixedArity = 3;
G__27140.cljs$lang$applyTo = (function (arglist__27141){
var x = cljs.core.first(arglist__27141);
var y = cljs.core.first(cljs.core.next(arglist__27141));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27141)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27141)));
return G__27140__delegate.call(this, x, y, z, args);
});
return G__27140;
})()
;
G__27133 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__27133__27134.call(this);
case  1 :
return G__27133__27135.call(this,x);
case  2 :
return G__27133__27136.call(this,x,y);
case  3 :
return G__27133__27137.call(this,x,y,z);
default:
return G__27133__27138.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__27133.cljs$lang$maxFixedArity = 3;
G__27133.cljs$lang$applyTo = G__27133__27138.cljs$lang$applyTo;
return G__27133;
})()
});
var juxt__27129 = (function (f,g){
return (function() {
var G__27142 = null;
var G__27142__27143 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__27142__27144 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__27142__27145 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__27142__27146 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__27142__27147 = (function() { 
var G__27149__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__27149 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27149__delegate.call(this, x, y, z, args);
};
G__27149.cljs$lang$maxFixedArity = 3;
G__27149.cljs$lang$applyTo = (function (arglist__27150){
var x = cljs.core.first(arglist__27150);
var y = cljs.core.first(cljs.core.next(arglist__27150));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27150)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27150)));
return G__27149__delegate.call(this, x, y, z, args);
});
return G__27149;
})()
;
G__27142 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__27142__27143.call(this);
case  1 :
return G__27142__27144.call(this,x);
case  2 :
return G__27142__27145.call(this,x,y);
case  3 :
return G__27142__27146.call(this,x,y,z);
default:
return G__27142__27147.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__27142.cljs$lang$maxFixedArity = 3;
G__27142.cljs$lang$applyTo = G__27142__27147.cljs$lang$applyTo;
return G__27142;
})()
});
var juxt__27130 = (function (f,g,h){
return (function() {
var G__27151 = null;
var G__27151__27152 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__27151__27153 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__27151__27154 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__27151__27155 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__27151__27156 = (function() { 
var G__27158__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__27158 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27158__delegate.call(this, x, y, z, args);
};
G__27158.cljs$lang$maxFixedArity = 3;
G__27158.cljs$lang$applyTo = (function (arglist__27159){
var x = cljs.core.first(arglist__27159);
var y = cljs.core.first(cljs.core.next(arglist__27159));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27159)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27159)));
return G__27158__delegate.call(this, x, y, z, args);
});
return G__27158;
})()
;
G__27151 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__27151__27152.call(this);
case  1 :
return G__27151__27153.call(this,x);
case  2 :
return G__27151__27154.call(this,x,y);
case  3 :
return G__27151__27155.call(this,x,y,z);
default:
return G__27151__27156.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__27151.cljs$lang$maxFixedArity = 3;
G__27151.cljs$lang$applyTo = G__27151__27156.cljs$lang$applyTo;
return G__27151;
})()
});
var juxt__27131 = (function() { 
var G__27160__delegate = function (f,g,h,fs){
var fs__27127 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__27161 = null;
var G__27161__27162 = (function (){
return cljs.core.reduce.call(null,(function (p1__27110_SHARP_,p2__27111_SHARP_){
return cljs.core.conj.call(null,p1__27110_SHARP_,p2__27111_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__27127);
});
var G__27161__27163 = (function (x){
return cljs.core.reduce.call(null,(function (p1__27112_SHARP_,p2__27113_SHARP_){
return cljs.core.conj.call(null,p1__27112_SHARP_,p2__27113_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__27127);
});
var G__27161__27164 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__27114_SHARP_,p2__27115_SHARP_){
return cljs.core.conj.call(null,p1__27114_SHARP_,p2__27115_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__27127);
});
var G__27161__27165 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__27116_SHARP_,p2__27117_SHARP_){
return cljs.core.conj.call(null,p1__27116_SHARP_,p2__27117_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__27127);
});
var G__27161__27166 = (function() { 
var G__27168__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__27118_SHARP_,p2__27119_SHARP_){
return cljs.core.conj.call(null,p1__27118_SHARP_,cljs.core.apply.call(null,p2__27119_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__27127);
};
var G__27168 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27168__delegate.call(this, x, y, z, args);
};
G__27168.cljs$lang$maxFixedArity = 3;
G__27168.cljs$lang$applyTo = (function (arglist__27169){
var x = cljs.core.first(arglist__27169);
var y = cljs.core.first(cljs.core.next(arglist__27169));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27169)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27169)));
return G__27168__delegate.call(this, x, y, z, args);
});
return G__27168;
})()
;
G__27161 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__27161__27162.call(this);
case  1 :
return G__27161__27163.call(this,x);
case  2 :
return G__27161__27164.call(this,x,y);
case  3 :
return G__27161__27165.call(this,x,y,z);
default:
return G__27161__27166.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__27161.cljs$lang$maxFixedArity = 3;
G__27161.cljs$lang$applyTo = G__27161__27166.cljs$lang$applyTo;
return G__27161;
})()
};
var G__27160 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27160__delegate.call(this, f, g, h, fs);
};
G__27160.cljs$lang$maxFixedArity = 3;
G__27160.cljs$lang$applyTo = (function (arglist__27170){
var f = cljs.core.first(arglist__27170);
var g = cljs.core.first(cljs.core.next(arglist__27170));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27170)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27170)));
return G__27160__delegate.call(this, f, g, h, fs);
});
return G__27160;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__27128.call(this,f);
case  2 :
return juxt__27129.call(this,f,g);
case  3 :
return juxt__27130.call(this,f,g,h);
default:
return juxt__27131.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__27131.cljs$lang$applyTo;
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
var dorun__27172 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__27175 = cljs.core.next.call(null,coll);
coll = G__27175;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__27173 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____27171 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____27171))
{return (n > 0);
} else
{return and__3546__auto____27171;
}
})()))
{{
var G__27176 = (n - 1);
var G__27177 = cljs.core.next.call(null,coll);
n = G__27176;
coll = G__27177;
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
case  1 :
return dorun__27172.call(this,n);
case  2 :
return dorun__27173.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
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
var doall__27178 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__27179 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__27178.call(this,n);
case  2 :
return doall__27179.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__27181 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__27181),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__27181),1)))
{return cljs.core.first.call(null,matches__27181);
} else
{return cljs.core.vec.call(null,matches__27181);
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
var matches__27182 = re.exec(s);

if(cljs.core.truth_((matches__27182 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__27182),1)))
{return cljs.core.first.call(null,matches__27182);
} else
{return cljs.core.vec.call(null,matches__27182);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__27183 = cljs.core.re_find.call(null,re,s);
var match_idx__27184 = s.search(re);
var match_str__27185 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__27183))?cljs.core.first.call(null,match_data__27183):match_data__27183);
var post_match__27186 = cljs.core.subs.call(null,s,(match_idx__27184 + cljs.core.count.call(null,match_str__27185)));

if(cljs.core.truth_(match_data__27183))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__27183,re_seq.call(null,re,post_match__27186));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__27188__27189 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___27190 = cljs.core.nth.call(null,vec__27188__27189,0,null);
var flags__27191 = cljs.core.nth.call(null,vec__27188__27189,1,null);
var pattern__27192 = cljs.core.nth.call(null,vec__27188__27189,2,null);

return (new RegExp(pattern__27192,flags__27191));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__27187_SHARP_){
return print_one.call(null,p1__27187_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____27193 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____27193))
{var and__3546__auto____27197 = (function (){var x__451__auto____27194 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____27195 = x__451__auto____27194;

if(cljs.core.truth_(and__3546__auto____27195))
{var and__3546__auto____27196 = x__451__auto____27194.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____27196))
{return cljs.core.not.call(null,x__451__auto____27194.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____27196;
}
} else
{return and__3546__auto____27195;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____27194);
}
})();

if(cljs.core.truth_(and__3546__auto____27197))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____27197;
}
} else
{return and__3546__auto____27193;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____27198 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____27199 = x__451__auto____27198;

if(cljs.core.truth_(and__3546__auto____27199))
{var and__3546__auto____27200 = x__451__auto____27198.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____27200))
{return cljs.core.not.call(null,x__451__auto____27198.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____27200;
}
} else
{return and__3546__auto____27199;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____27198);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__27201 = cljs.core.first.call(null,objs);
var sb__27202 = (new goog.string.StringBuffer());

var G__27203__27204 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__27203__27204))
{var obj__27205 = cljs.core.first.call(null,G__27203__27204);
var G__27203__27206 = G__27203__27204;

while(true){
if(cljs.core.truth_((obj__27205 === first_obj__27201)))
{} else
{sb__27202.append(" ");
}
var G__27207__27208 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__27205,opts));

if(cljs.core.truth_(G__27207__27208))
{var string__27209 = cljs.core.first.call(null,G__27207__27208);
var G__27207__27210 = G__27207__27208;

while(true){
sb__27202.append(string__27209);
var temp__3698__auto____27211 = cljs.core.next.call(null,G__27207__27210);

if(cljs.core.truth_(temp__3698__auto____27211))
{var G__27207__27212 = temp__3698__auto____27211;

{
var G__27215 = cljs.core.first.call(null,G__27207__27212);
var G__27216 = G__27207__27212;
string__27209 = G__27215;
G__27207__27210 = G__27216;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____27213 = cljs.core.next.call(null,G__27203__27206);

if(cljs.core.truth_(temp__3698__auto____27213))
{var G__27203__27214 = temp__3698__auto____27213;

{
var G__27217 = cljs.core.first.call(null,G__27203__27214);
var G__27218 = G__27203__27214;
obj__27205 = G__27217;
G__27203__27206 = G__27218;
continue;
}
} else
{}
break;
}
} else
{}
return sb__27202;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return cljs.core.str.call(null,cljs.core.pr_sb.call(null,objs,opts));
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__27219 = cljs.core.pr_sb.call(null,objs,opts);

sb__27219.append("\n");
return cljs.core.str.call(null,sb__27219);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__27220 = cljs.core.first.call(null,objs);

var G__27221__27222 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__27221__27222))
{var obj__27223 = cljs.core.first.call(null,G__27221__27222);
var G__27221__27224 = G__27221__27222;

while(true){
if(cljs.core.truth_((obj__27223 === first_obj__27220)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__27225__27226 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__27223,opts));

if(cljs.core.truth_(G__27225__27226))
{var string__27227 = cljs.core.first.call(null,G__27225__27226);
var G__27225__27228 = G__27225__27226;

while(true){
cljs.core.string_print.call(null,string__27227);
var temp__3698__auto____27229 = cljs.core.next.call(null,G__27225__27228);

if(cljs.core.truth_(temp__3698__auto____27229))
{var G__27225__27230 = temp__3698__auto____27229;

{
var G__27233 = cljs.core.first.call(null,G__27225__27230);
var G__27234 = G__27225__27230;
string__27227 = G__27233;
G__27225__27228 = G__27234;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____27231 = cljs.core.next.call(null,G__27221__27224);

if(cljs.core.truth_(temp__3698__auto____27231))
{var G__27221__27232 = temp__3698__auto____27231;

{
var G__27235 = cljs.core.first.call(null,G__27221__27232);
var G__27236 = G__27221__27232;
obj__27223 = G__27235;
G__27221__27224 = G__27236;
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
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
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
pr_str.cljs$lang$applyTo = (function (arglist__27237){
var objs = cljs.core.seq( arglist__27237 );;
return pr_str__delegate.call(this, objs);
});
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
prn_str.cljs$lang$applyTo = (function (arglist__27238){
var objs = cljs.core.seq( arglist__27238 );;
return prn_str__delegate.call(this, objs);
});
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
pr.cljs$lang$applyTo = (function (arglist__27239){
var objs = cljs.core.seq( arglist__27239 );;
return pr__delegate.call(this, objs);
});
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__27240){
var objs = cljs.core.seq( arglist__27240 );;
return cljs_core_print__delegate.call(this, objs);
});
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
print_str.cljs$lang$applyTo = (function (arglist__27241){
var objs = cljs.core.seq( arglist__27241 );;
return print_str__delegate.call(this, objs);
});
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
println.cljs$lang$applyTo = (function (arglist__27242){
var objs = cljs.core.seq( arglist__27242 );;
return println__delegate.call(this, objs);
});
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
println_str.cljs$lang$applyTo = (function (arglist__27243){
var objs = cljs.core.seq( arglist__27243 );;
return println_str__delegate.call(this, objs);
});
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
prn.cljs$lang$applyTo = (function (arglist__27244){
var objs = cljs.core.seq( arglist__27244 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__27245 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__27245,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____27246 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____27246))
{var nspc__27247 = temp__3698__auto____27246;

return cljs.core.str.call(null,nspc__27247,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____27248 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____27248))
{var nspc__27249 = temp__3698__auto____27248;

return cljs.core.str.call(null,nspc__27249,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__27250 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__27250,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__27251 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__27252 = this;
var G__27253__27254 = cljs.core.seq.call(null,this__27252.watches);

if(cljs.core.truth_(G__27253__27254))
{var G__27256__27258 = cljs.core.first.call(null,G__27253__27254);
var vec__27257__27259 = G__27256__27258;
var key__27260 = cljs.core.nth.call(null,vec__27257__27259,0,null);
var f__27261 = cljs.core.nth.call(null,vec__27257__27259,1,null);
var G__27253__27262 = G__27253__27254;

var G__27256__27263 = G__27256__27258;
var G__27253__27264 = G__27253__27262;

while(true){
var vec__27265__27266 = G__27256__27263;
var key__27267 = cljs.core.nth.call(null,vec__27265__27266,0,null);
var f__27268 = cljs.core.nth.call(null,vec__27265__27266,1,null);
var G__27253__27269 = G__27253__27264;

f__27268.call(null,key__27267,this$,oldval,newval);
var temp__3698__auto____27270 = cljs.core.next.call(null,G__27253__27269);

if(cljs.core.truth_(temp__3698__auto____27270))
{var G__27253__27271 = temp__3698__auto____27270;

{
var G__27278 = cljs.core.first.call(null,G__27253__27271);
var G__27279 = G__27253__27271;
G__27256__27263 = G__27278;
G__27253__27264 = G__27279;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__27272 = this;
return this$.watches = cljs.core.assoc.call(null,this__27272.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__27273 = this;
return this$.watches = cljs.core.dissoc.call(null,this__27273.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__27274 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__27274.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__27275 = this;
return this__27275.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__27276 = this;
return this__27276.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__27277 = this;
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
var atom__27286 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__27287 = (function() { 
var G__27289__delegate = function (x,p__27280){
var map__27281__27282 = p__27280;
var map__27281__27283 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__27281__27282))?cljs.core.apply.call(null,cljs.core.hash_map,map__27281__27282):map__27281__27282);
var validator__27284 = cljs.core.get.call(null,map__27281__27283,"\uFDD0'validator");
var meta__27285 = cljs.core.get.call(null,map__27281__27283,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__27285,validator__27284,null));
};
var G__27289 = function (x,var_args){
var p__27280 = null;
if (goog.isDef(var_args)) {
  p__27280 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27289__delegate.call(this, x, p__27280);
};
G__27289.cljs$lang$maxFixedArity = 1;
G__27289.cljs$lang$applyTo = (function (arglist__27290){
var x = cljs.core.first(arglist__27290);
var p__27280 = cljs.core.rest(arglist__27290);
return G__27289__delegate.call(this, x, p__27280);
});
return G__27289;
})()
;
atom = function(x,var_args){
var p__27280 = var_args;
switch(arguments.length){
case  1 :
return atom__27286.call(this,x);
default:
return atom__27287.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__27287.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____27291 = a.validator;

if(cljs.core.truth_(temp__3698__auto____27291))
{var validate__27292 = temp__3698__auto____27291;

if(cljs.core.truth_(validate__27292.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__27293 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__27293,new_value);
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
var swap_BANG___27294 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___27295 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___27296 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___27297 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___27298 = (function() { 
var G__27300__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__27300 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__27300__delegate.call(this, a, f, x, y, z, more);
};
G__27300.cljs$lang$maxFixedArity = 5;
G__27300.cljs$lang$applyTo = (function (arglist__27301){
var a = cljs.core.first(arglist__27301);
var f = cljs.core.first(cljs.core.next(arglist__27301));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27301)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__27301))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__27301)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__27301)))));
return G__27300__delegate.call(this, a, f, x, y, z, more);
});
return G__27300;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___27294.call(this,a,f);
case  3 :
return swap_BANG___27295.call(this,a,f,x);
case  4 :
return swap_BANG___27296.call(this,a,f,x,y);
case  5 :
return swap_BANG___27297.call(this,a,f,x,y,z);
default:
return swap_BANG___27298.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___27298.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__27302){
var iref = cljs.core.first(arglist__27302);
var f = cljs.core.first(cljs.core.next(arglist__27302));
var args = cljs.core.rest(cljs.core.next(arglist__27302));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
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
var gensym__27303 = (function (){
return gensym.call(null,"G__");
});
var gensym__27304 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__27303.call(this);
case  1 :
return gensym__27304.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
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
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__27306 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__27306.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__27307 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__27307.state,(function (p__27308){
var curr_state__27309 = p__27308;
var curr_state__27310 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__27309))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__27309):curr_state__27309);
var done__27311 = cljs.core.get.call(null,curr_state__27310,"\uFDD0'done");

if(cljs.core.truth_(done__27311))
{return curr_state__27310;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__27307.f.call(null)});
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
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
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
var map__27312__27313 = options;
var map__27312__27314 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__27312__27313))?cljs.core.apply.call(null,cljs.core.hash_map,map__27312__27313):map__27312__27313);
var keywordize_keys__27315 = cljs.core.get.call(null,map__27312__27314,"\uFDD0'keywordize-keys");
var keyfn__27316 = (cljs.core.truth_(keywordize_keys__27315)?cljs.core.keyword:cljs.core.str);
var f__27322 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____27321 = (function iter__27317(s__27318){
return (new cljs.core.LazySeq(null,false,(function (){
var s__27318__27319 = s__27318;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__27318__27319)))
{var k__27320 = cljs.core.first.call(null,s__27318__27319);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__27316.call(null,k__27320),thisfn.call(null,(x[k__27320]))]),iter__27317.call(null,cljs.core.rest.call(null,s__27318__27319)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____27321.call(null,cljs.core.js_keys.call(null,x));
})());
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

return f__27322.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__27323){
var x = cljs.core.first(arglist__27323);
var options = cljs.core.rest(arglist__27323);
return js__GT_clj__delegate.call(this, x, options);
});
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
var mem__27324 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__27328__delegate = function (args){
var temp__3695__auto____27325 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__27324),args);

if(cljs.core.truth_(temp__3695__auto____27325))
{var v__27326 = temp__3695__auto____27325;

return v__27326;
} else
{var ret__27327 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__27324,cljs.core.assoc,args,ret__27327);
return ret__27327;
}
};
var G__27328 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__27328__delegate.call(this, args);
};
G__27328.cljs$lang$maxFixedArity = 0;
G__27328.cljs$lang$applyTo = (function (arglist__27329){
var args = cljs.core.seq( arglist__27329 );;
return G__27328__delegate.call(this, args);
});
return G__27328;
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
var trampoline__27331 = (function (f){
while(true){
var ret__27330 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__27330)))
{{
var G__27334 = ret__27330;
f = G__27334;
continue;
}
} else
{return ret__27330;
}
break;
}
});
var trampoline__27332 = (function() { 
var G__27335__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__27335 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27335__delegate.call(this, f, args);
};
G__27335.cljs$lang$maxFixedArity = 1;
G__27335.cljs$lang$applyTo = (function (arglist__27336){
var f = cljs.core.first(arglist__27336);
var args = cljs.core.rest(arglist__27336);
return G__27335__delegate.call(this, f, args);
});
return G__27335;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__27331.call(this,f);
default:
return trampoline__27332.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__27332.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__27337 = (function (){
return rand.call(null,1);
});
var rand__27338 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__27337.call(this);
case  1 :
return rand__27338.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
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
var k__27340 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__27340,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__27340,cljs.core.PersistentVector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___27349 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___27350 = (function (h,child,parent){
var or__3548__auto____27341 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____27341))
{return or__3548__auto____27341;
} else
{var or__3548__auto____27342 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____27342))
{return or__3548__auto____27342;
} else
{var and__3546__auto____27343 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____27343))
{var and__3546__auto____27344 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____27344))
{var and__3546__auto____27345 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____27345))
{var ret__27346 = true;
var i__27347 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____27348 = cljs.core.not.call(null,ret__27346);

if(cljs.core.truth_(or__3548__auto____27348))
{return or__3548__auto____27348;
} else
{return cljs.core._EQ_.call(null,i__27347,cljs.core.count.call(null,parent));
}
})()))
{return ret__27346;
} else
{{
var G__27352 = isa_QMARK_.call(null,h,child.call(null,i__27347),parent.call(null,i__27347));
var G__27353 = (i__27347 + 1);
ret__27346 = G__27352;
i__27347 = G__27353;
continue;
}
}
break;
}
} else
{return and__3546__auto____27345;
}
} else
{return and__3546__auto____27344;
}
} else
{return and__3546__auto____27343;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___27349.call(this,h,child);
case  3 :
return isa_QMARK___27350.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__27354 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__27355 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__27354.call(this,h);
case  2 :
return parents__27355.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__27357 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__27358 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__27357.call(this,h);
case  2 :
return ancestors__27358.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__27360 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__27361 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__27360.call(this,h);
case  2 :
return descendants__27361.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
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
var derive__27371 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__27372 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__27366 = "\uFDD0'parents".call(null,h);
var td__27367 = "\uFDD0'descendants".call(null,h);
var ta__27368 = "\uFDD0'ancestors".call(null,h);
var tf__27369 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____27370 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__27366.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__27368.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__27368.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__27366,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__27369.call(null,"\uFDD0'ancestors".call(null,h),tag,td__27367,parent,ta__27368),"\uFDD0'descendants":tf__27369.call(null,"\uFDD0'descendants".call(null,h),parent,ta__27368,tag,td__27367)});
})());

if(cljs.core.truth_(or__3548__auto____27370))
{return or__3548__auto____27370;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__27371.call(this,h,tag);
case  3 :
return derive__27372.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
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
var underive__27378 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__27379 = (function (h,tag,parent){
var parentMap__27374 = "\uFDD0'parents".call(null,h);
var childsParents__27375 = (cljs.core.truth_(parentMap__27374.call(null,tag))?cljs.core.disj.call(null,parentMap__27374.call(null,tag),parent):cljs.core.set([]));
var newParents__27376 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__27375))?cljs.core.assoc.call(null,parentMap__27374,tag,childsParents__27375):cljs.core.dissoc.call(null,parentMap__27374,tag));
var deriv_seq__27377 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__27363_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__27363_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__27363_SHARP_),cljs.core.second.call(null,p1__27363_SHARP_)));
}),cljs.core.seq.call(null,newParents__27376)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__27374.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__27364_SHARP_,p2__27365_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__27364_SHARP_,p2__27365_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__27377));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__27378.call(this,h,tag);
case  3 :
return underive__27379.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
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
var xprefs__27381 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____27383 = (cljs.core.truth_((function (){var and__3546__auto____27382 = xprefs__27381;

if(cljs.core.truth_(and__3546__auto____27382))
{return xprefs__27381.call(null,y);
} else
{return and__3546__auto____27382;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____27383))
{return or__3548__auto____27383;
} else
{var or__3548__auto____27385 = (function (){var ps__27384 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__27384) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__27384),prefer_table)))
{} else
{}
{
var G__27388 = cljs.core.rest.call(null,ps__27384);
ps__27384 = G__27388;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____27385))
{return or__3548__auto____27385;
} else
{var or__3548__auto____27387 = (function (){var ps__27386 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__27386) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__27386),y,prefer_table)))
{} else
{}
{
var G__27389 = cljs.core.rest.call(null,ps__27386);
ps__27386 = G__27389;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____27387))
{return or__3548__auto____27387;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____27390 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____27390))
{return or__3548__auto____27390;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__27399 = cljs.core.reduce.call(null,(function (be,p__27391){
var vec__27392__27393 = p__27391;
var k__27394 = cljs.core.nth.call(null,vec__27392__27393,0,null);
var ___27395 = cljs.core.nth.call(null,vec__27392__27393,1,null);
var e__27396 = vec__27392__27393;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__27394)))
{var be2__27398 = (cljs.core.truth_((function (){var or__3548__auto____27397 = (be === null);

if(cljs.core.truth_(or__3548__auto____27397))
{return or__3548__auto____27397;
} else
{return cljs.core.dominates.call(null,k__27394,cljs.core.first.call(null,be),prefer_table);
}
})())?e__27396:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__27398),k__27394,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__27394," and ",cljs.core.first.call(null,be2__27398),", and neither is preferred")));
}
return be2__27398;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__27399))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__27399));
return cljs.core.second.call(null,best_entry__27399);
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
if(cljs.core.truth_((function (){var and__3546__auto____27400 = mf;

if(cljs.core.truth_(and__3546__auto____27400))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____27400;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____27401 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____27401))
{return or__3548__auto____27401;
} else
{var or__3548__auto____27402 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____27402))
{return or__3548__auto____27402;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____27403 = mf;

if(cljs.core.truth_(and__3546__auto____27403))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____27403;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____27404 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____27404))
{return or__3548__auto____27404;
} else
{var or__3548__auto____27405 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____27405))
{return or__3548__auto____27405;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____27406 = mf;

if(cljs.core.truth_(and__3546__auto____27406))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____27406;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____27407 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____27407))
{return or__3548__auto____27407;
} else
{var or__3548__auto____27408 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____27408))
{return or__3548__auto____27408;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____27409 = mf;

if(cljs.core.truth_(and__3546__auto____27409))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____27409;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____27410 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____27410))
{return or__3548__auto____27410;
} else
{var or__3548__auto____27411 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____27411))
{return or__3548__auto____27411;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____27412 = mf;

if(cljs.core.truth_(and__3546__auto____27412))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____27412;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____27413 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____27413))
{return or__3548__auto____27413;
} else
{var or__3548__auto____27414 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____27414))
{return or__3548__auto____27414;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____27415 = mf;

if(cljs.core.truth_(and__3546__auto____27415))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____27415;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____27416 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____27416))
{return or__3548__auto____27416;
} else
{var or__3548__auto____27417 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____27417))
{return or__3548__auto____27417;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____27418 = mf;

if(cljs.core.truth_(and__3546__auto____27418))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____27418;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____27419 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____27419))
{return or__3548__auto____27419;
} else
{var or__3548__auto____27420 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____27420))
{return or__3548__auto____27420;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____27421 = mf;

if(cljs.core.truth_(and__3546__auto____27421))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____27421;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____27422 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____27422))
{return or__3548__auto____27422;
} else
{var or__3548__auto____27423 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____27423))
{return or__3548__auto____27423;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__27424 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__27425 = cljs.core._get_method.call(null,mf,dispatch_val__27424);

if(cljs.core.truth_(target_fn__27425))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__27424)));
}
return cljs.core.apply.call(null,target_fn__27425,args);
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
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__27426 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__27427 = this;
cljs.core.swap_BANG_.call(null,this__27427.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__27427.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__27427.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__27427.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__27428 = this;
cljs.core.swap_BANG_.call(null,this__27428.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__27428.method_cache,this__27428.method_table,this__27428.cached_hierarchy,this__27428.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__27429 = this;
cljs.core.swap_BANG_.call(null,this__27429.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__27429.method_cache,this__27429.method_table,this__27429.cached_hierarchy,this__27429.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__27430 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__27430.cached_hierarchy),cljs.core.deref.call(null,this__27430.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__27430.method_cache,this__27430.method_table,this__27430.cached_hierarchy,this__27430.hierarchy);
}
var temp__3695__auto____27431 = cljs.core.deref.call(null,this__27430.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____27431))
{var target_fn__27432 = temp__3695__auto____27431;

return target_fn__27432;
} else
{var temp__3695__auto____27433 = cljs.core.find_and_cache_best_method.call(null,this__27430.name,dispatch_val,this__27430.hierarchy,this__27430.method_table,this__27430.prefer_table,this__27430.method_cache,this__27430.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____27433))
{var target_fn__27434 = temp__3695__auto____27433;

return target_fn__27434;
} else
{return cljs.core.deref.call(null,this__27430.method_table).call(null,this__27430.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__27435 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__27435.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__27435.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__27435.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__27435.method_cache,this__27435.method_table,this__27435.cached_hierarchy,this__27435.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__27436 = this;
return cljs.core.deref.call(null,this__27436.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__27437 = this;
return cljs.core.deref.call(null,this__27437.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__27438 = this;
return cljs.core.do_dispatch.call(null,mf,this__27438.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__27439__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__27439 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27439__delegate.call(this, _, args);
};
G__27439.cljs$lang$maxFixedArity = 1;
G__27439.cljs$lang$applyTo = (function (arglist__27440){
var _ = cljs.core.first(arglist__27440);
var args = cljs.core.rest(arglist__27440);
return G__27439__delegate.call(this, _, args);
});
return G__27439;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
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
