goog.provide('treklet.comms');
goog.require('cljs.core');
goog.require('treklet.constants');
goog.require('treklet.util');
treklet.comms._sockio_ = io.connect(treklet.constants._sockio_addr_);
treklet.comms.notify_server = (function() {
var notify_server = null;
var notify_server__1 = (function (evt_name){
return notify_server.call(null,evt_name,null);
});
var notify_server__2 = (function (evt_name,data){
return treklet.comms._sockio_.emit(evt_name,treklet.util.clj__GT_js.call(null,data));
});
notify_server = function(evt_name,data){
switch(arguments.length){
case 1:
return notify_server__1.call(this,evt_name);
case 2:
return notify_server__2.call(this,evt_name,data);
}
throw('Invalid arity: ' + arguments.length);
};
notify_server.cljs$lang$arity$1 = notify_server__1;
notify_server.cljs$lang$arity$2 = notify_server__2;
return notify_server;
})()
;
treklet.comms.react_server = (function react_server(evt_name,f){
return treklet.comms._sockio_.on(evt_name,(function (data){
return f.call(null,cljs.core.js__GT_clj.call(null,data,"\uFDD0'keywordize-keys",true));
}));
});
