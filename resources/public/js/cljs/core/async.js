// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__21735 = arguments.length;
switch (G__21735) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21736 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21736 = (function (f,blockable,meta21737){
this.f = f;
this.blockable = blockable;
this.meta21737 = meta21737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21738,meta21737__$1){
var self__ = this;
var _21738__$1 = this;
return (new cljs.core.async.t_cljs$core$async21736(self__.f,self__.blockable,meta21737__$1));
});

cljs.core.async.t_cljs$core$async21736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21738){
var self__ = this;
var _21738__$1 = this;
return self__.meta21737;
});

cljs.core.async.t_cljs$core$async21736.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21736.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21736.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21736.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21737","meta21737",1395095630,null)], null);
});

cljs.core.async.t_cljs$core$async21736.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21736";

cljs.core.async.t_cljs$core$async21736.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21736");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21736.
 */
cljs.core.async.__GT_t_cljs$core$async21736 = (function cljs$core$async$__GT_t_cljs$core$async21736(f__$1,blockable__$1,meta21737){
return (new cljs.core.async.t_cljs$core$async21736(f__$1,blockable__$1,meta21737));
});

}

return (new cljs.core.async.t_cljs$core$async21736(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__21742 = arguments.length;
switch (G__21742) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__21745 = arguments.length;
switch (G__21745) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__21748 = arguments.length;
switch (G__21748) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21750 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21750);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21750,ret){
return (function (){
return fn1.call(null,val_21750);
});})(val_21750,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__21752 = arguments.length;
switch (G__21752) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___21754 = n;
var x_21755 = (0);
while(true){
if((x_21755 < n__4408__auto___21754)){
(a[x_21755] = (0));

var G__21756 = (x_21755 + (1));
x_21755 = G__21756;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21757 = (i + (1));
i = G__21757;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21758 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21758 = (function (flag,meta21759){
this.flag = flag;
this.meta21759 = meta21759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21760,meta21759__$1){
var self__ = this;
var _21760__$1 = this;
return (new cljs.core.async.t_cljs$core$async21758(self__.flag,meta21759__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21760){
var self__ = this;
var _21760__$1 = this;
return self__.meta21759;
});})(flag))
;

cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21758.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21759","meta21759",1253994804,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21758.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21758";

cljs.core.async.t_cljs$core$async21758.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21758");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21758.
 */
cljs.core.async.__GT_t_cljs$core$async21758 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21758(flag__$1,meta21759){
return (new cljs.core.async.t_cljs$core$async21758(flag__$1,meta21759));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21758(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21761 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21761 = (function (flag,cb,meta21762){
this.flag = flag;
this.cb = cb;
this.meta21762 = meta21762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21763,meta21762__$1){
var self__ = this;
var _21763__$1 = this;
return (new cljs.core.async.t_cljs$core$async21761(self__.flag,self__.cb,meta21762__$1));
});

cljs.core.async.t_cljs$core$async21761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21763){
var self__ = this;
var _21763__$1 = this;
return self__.meta21762;
});

cljs.core.async.t_cljs$core$async21761.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21761.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21762","meta21762",288182559,null)], null);
});

cljs.core.async.t_cljs$core$async21761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21761";

cljs.core.async.t_cljs$core$async21761.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21761");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21761.
 */
cljs.core.async.__GT_t_cljs$core$async21761 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21761(flag__$1,cb__$1,meta21762){
return (new cljs.core.async.t_cljs$core$async21761(flag__$1,cb__$1,meta21762));
});

}

return (new cljs.core.async.t_cljs$core$async21761(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21764_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21764_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21765_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21765_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21766 = (i + (1));
i = G__21766;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21772 = arguments.length;
var i__4532__auto___21773 = (0);
while(true){
if((i__4532__auto___21773 < len__4531__auto___21772)){
args__4534__auto__.push((arguments[i__4532__auto___21773]));

var G__21774 = (i__4532__auto___21773 + (1));
i__4532__auto___21773 = G__21774;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21769){
var map__21770 = p__21769;
var map__21770__$1 = ((((!((map__21770 == null)))?(((((map__21770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21770):map__21770);
var opts = map__21770__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21767){
var G__21768 = cljs.core.first.call(null,seq21767);
var seq21767__$1 = cljs.core.next.call(null,seq21767);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21768,seq21767__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__21776 = arguments.length;
switch (G__21776) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21689__auto___21822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___21822){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___21822){
return (function (state_21800){
var state_val_21801 = (state_21800[(1)]);
if((state_val_21801 === (7))){
var inst_21796 = (state_21800[(2)]);
var state_21800__$1 = state_21800;
var statearr_21802_21823 = state_21800__$1;
(statearr_21802_21823[(2)] = inst_21796);

(statearr_21802_21823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (1))){
var state_21800__$1 = state_21800;
var statearr_21803_21824 = state_21800__$1;
(statearr_21803_21824[(2)] = null);

(statearr_21803_21824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (4))){
var inst_21779 = (state_21800[(7)]);
var inst_21779__$1 = (state_21800[(2)]);
var inst_21780 = (inst_21779__$1 == null);
var state_21800__$1 = (function (){var statearr_21804 = state_21800;
(statearr_21804[(7)] = inst_21779__$1);

return statearr_21804;
})();
if(cljs.core.truth_(inst_21780)){
var statearr_21805_21825 = state_21800__$1;
(statearr_21805_21825[(1)] = (5));

} else {
var statearr_21806_21826 = state_21800__$1;
(statearr_21806_21826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (13))){
var state_21800__$1 = state_21800;
var statearr_21807_21827 = state_21800__$1;
(statearr_21807_21827[(2)] = null);

(statearr_21807_21827[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (6))){
var inst_21779 = (state_21800[(7)]);
var state_21800__$1 = state_21800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21800__$1,(11),to,inst_21779);
} else {
if((state_val_21801 === (3))){
var inst_21798 = (state_21800[(2)]);
var state_21800__$1 = state_21800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21800__$1,inst_21798);
} else {
if((state_val_21801 === (12))){
var state_21800__$1 = state_21800;
var statearr_21808_21828 = state_21800__$1;
(statearr_21808_21828[(2)] = null);

(statearr_21808_21828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (2))){
var state_21800__$1 = state_21800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21800__$1,(4),from);
} else {
if((state_val_21801 === (11))){
var inst_21789 = (state_21800[(2)]);
var state_21800__$1 = state_21800;
if(cljs.core.truth_(inst_21789)){
var statearr_21809_21829 = state_21800__$1;
(statearr_21809_21829[(1)] = (12));

} else {
var statearr_21810_21830 = state_21800__$1;
(statearr_21810_21830[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (9))){
var state_21800__$1 = state_21800;
var statearr_21811_21831 = state_21800__$1;
(statearr_21811_21831[(2)] = null);

(statearr_21811_21831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (5))){
var state_21800__$1 = state_21800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21812_21832 = state_21800__$1;
(statearr_21812_21832[(1)] = (8));

} else {
var statearr_21813_21833 = state_21800__$1;
(statearr_21813_21833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (14))){
var inst_21794 = (state_21800[(2)]);
var state_21800__$1 = state_21800;
var statearr_21814_21834 = state_21800__$1;
(statearr_21814_21834[(2)] = inst_21794);

(statearr_21814_21834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (10))){
var inst_21786 = (state_21800[(2)]);
var state_21800__$1 = state_21800;
var statearr_21815_21835 = state_21800__$1;
(statearr_21815_21835[(2)] = inst_21786);

(statearr_21815_21835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (8))){
var inst_21783 = cljs.core.async.close_BANG_.call(null,to);
var state_21800__$1 = state_21800;
var statearr_21816_21836 = state_21800__$1;
(statearr_21816_21836[(2)] = inst_21783);

(statearr_21816_21836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__21689__auto___21822))
;
return ((function (switch__21600__auto__,c__21689__auto___21822){
return (function() {
var cljs$core$async$state_machine__21601__auto__ = null;
var cljs$core$async$state_machine__21601__auto____0 = (function (){
var statearr_21817 = [null,null,null,null,null,null,null,null];
(statearr_21817[(0)] = cljs$core$async$state_machine__21601__auto__);

(statearr_21817[(1)] = (1));

return statearr_21817;
});
var cljs$core$async$state_machine__21601__auto____1 = (function (state_21800){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_21800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e21818){if((e21818 instanceof Object)){
var ex__21604__auto__ = e21818;
var statearr_21819_21837 = state_21800;
(statearr_21819_21837[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21838 = state_21800;
state_21800 = G__21838;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$state_machine__21601__auto__ = function(state_21800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21601__auto____1.call(this,state_21800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21601__auto____0;
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21601__auto____1;
return cljs$core$async$state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___21822))
})();
var state__21691__auto__ = (function (){var statearr_21820 = f__21690__auto__.call(null);
(statearr_21820[(6)] = c__21689__auto___21822);

return statearr_21820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___21822))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21839){
var vec__21840 = p__21839;
var v = cljs.core.nth.call(null,vec__21840,(0),null);
var p = cljs.core.nth.call(null,vec__21840,(1),null);
var job = vec__21840;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21689__auto___22011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___22011,res,vec__21840,v,p,job,jobs,results){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___22011,res,vec__21840,v,p,job,jobs,results){
return (function (state_21847){
var state_val_21848 = (state_21847[(1)]);
if((state_val_21848 === (1))){
var state_21847__$1 = state_21847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21847__$1,(2),res,v);
} else {
if((state_val_21848 === (2))){
var inst_21844 = (state_21847[(2)]);
var inst_21845 = cljs.core.async.close_BANG_.call(null,res);
var state_21847__$1 = (function (){var statearr_21849 = state_21847;
(statearr_21849[(7)] = inst_21844);

return statearr_21849;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21847__$1,inst_21845);
} else {
return null;
}
}
});})(c__21689__auto___22011,res,vec__21840,v,p,job,jobs,results))
;
return ((function (switch__21600__auto__,c__21689__auto___22011,res,vec__21840,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____0 = (function (){
var statearr_21850 = [null,null,null,null,null,null,null,null];
(statearr_21850[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__);

(statearr_21850[(1)] = (1));

return statearr_21850;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____1 = (function (state_21847){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_21847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e21851){if((e21851 instanceof Object)){
var ex__21604__auto__ = e21851;
var statearr_21852_22012 = state_21847;
(statearr_21852_22012[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22013 = state_21847;
state_21847 = G__22013;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__ = function(state_21847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____1.call(this,state_21847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___22011,res,vec__21840,v,p,job,jobs,results))
})();
var state__21691__auto__ = (function (){var statearr_21853 = f__21690__auto__.call(null);
(statearr_21853[(6)] = c__21689__auto___22011);

return statearr_21853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___22011,res,vec__21840,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21854){
var vec__21855 = p__21854;
var v = cljs.core.nth.call(null,vec__21855,(0),null);
var p = cljs.core.nth.call(null,vec__21855,(1),null);
var job = vec__21855;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___22014 = n;
var __22015 = (0);
while(true){
if((__22015 < n__4408__auto___22014)){
var G__21858_22016 = type;
var G__21858_22017__$1 = (((G__21858_22016 instanceof cljs.core.Keyword))?G__21858_22016.fqn:null);
switch (G__21858_22017__$1) {
case "compute":
var c__21689__auto___22019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22015,c__21689__auto___22019,G__21858_22016,G__21858_22017__$1,n__4408__auto___22014,jobs,results,process,async){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (__22015,c__21689__auto___22019,G__21858_22016,G__21858_22017__$1,n__4408__auto___22014,jobs,results,process,async){
return (function (state_21871){
var state_val_21872 = (state_21871[(1)]);
if((state_val_21872 === (1))){
var state_21871__$1 = state_21871;
var statearr_21873_22020 = state_21871__$1;
(statearr_21873_22020[(2)] = null);

(statearr_21873_22020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21872 === (2))){
var state_21871__$1 = state_21871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21871__$1,(4),jobs);
} else {
if((state_val_21872 === (3))){
var inst_21869 = (state_21871[(2)]);
var state_21871__$1 = state_21871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21871__$1,inst_21869);
} else {
if((state_val_21872 === (4))){
var inst_21861 = (state_21871[(2)]);
var inst_21862 = process.call(null,inst_21861);
var state_21871__$1 = state_21871;
if(cljs.core.truth_(inst_21862)){
var statearr_21874_22021 = state_21871__$1;
(statearr_21874_22021[(1)] = (5));

} else {
var statearr_21875_22022 = state_21871__$1;
(statearr_21875_22022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21872 === (5))){
var state_21871__$1 = state_21871;
var statearr_21876_22023 = state_21871__$1;
(statearr_21876_22023[(2)] = null);

(statearr_21876_22023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21872 === (6))){
var state_21871__$1 = state_21871;
var statearr_21877_22024 = state_21871__$1;
(statearr_21877_22024[(2)] = null);

(statearr_21877_22024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21872 === (7))){
var inst_21867 = (state_21871[(2)]);
var state_21871__$1 = state_21871;
var statearr_21878_22025 = state_21871__$1;
(statearr_21878_22025[(2)] = inst_21867);

(statearr_21878_22025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__22015,c__21689__auto___22019,G__21858_22016,G__21858_22017__$1,n__4408__auto___22014,jobs,results,process,async))
;
return ((function (__22015,switch__21600__auto__,c__21689__auto___22019,G__21858_22016,G__21858_22017__$1,n__4408__auto___22014,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____0 = (function (){
var statearr_21879 = [null,null,null,null,null,null,null];
(statearr_21879[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__);

(statearr_21879[(1)] = (1));

return statearr_21879;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____1 = (function (state_21871){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_21871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e21880){if((e21880 instanceof Object)){
var ex__21604__auto__ = e21880;
var statearr_21881_22026 = state_21871;
(statearr_21881_22026[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22027 = state_21871;
state_21871 = G__22027;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__ = function(state_21871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____1.call(this,state_21871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__;
})()
;})(__22015,switch__21600__auto__,c__21689__auto___22019,G__21858_22016,G__21858_22017__$1,n__4408__auto___22014,jobs,results,process,async))
})();
var state__21691__auto__ = (function (){var statearr_21882 = f__21690__auto__.call(null);
(statearr_21882[(6)] = c__21689__auto___22019);

return statearr_21882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(__22015,c__21689__auto___22019,G__21858_22016,G__21858_22017__$1,n__4408__auto___22014,jobs,results,process,async))
);


break;
case "async":
var c__21689__auto___22028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22015,c__21689__auto___22028,G__21858_22016,G__21858_22017__$1,n__4408__auto___22014,jobs,results,process,async){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (__22015,c__21689__auto___22028,G__21858_22016,G__21858_22017__$1,n__4408__auto___22014,jobs,results,process,async){
return (function (state_21895){
var state_val_21896 = (state_21895[(1)]);
if((state_val_21896 === (1))){
var state_21895__$1 = state_21895;
var statearr_21897_22029 = state_21895__$1;
(statearr_21897_22029[(2)] = null);

(statearr_21897_22029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21896 === (2))){
var state_21895__$1 = state_21895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21895__$1,(4),jobs);
} else {
if((state_val_21896 === (3))){
var inst_21893 = (state_21895[(2)]);
var state_21895__$1 = state_21895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21895__$1,inst_21893);
} else {
if((state_val_21896 === (4))){
var inst_21885 = (state_21895[(2)]);
var inst_21886 = async.call(null,inst_21885);
var state_21895__$1 = state_21895;
if(cljs.core.truth_(inst_21886)){
var statearr_21898_22030 = state_21895__$1;
(statearr_21898_22030[(1)] = (5));

} else {
var statearr_21899_22031 = state_21895__$1;
(statearr_21899_22031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21896 === (5))){
var state_21895__$1 = state_21895;
var statearr_21900_22032 = state_21895__$1;
(statearr_21900_22032[(2)] = null);

(statearr_21900_22032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21896 === (6))){
var state_21895__$1 = state_21895;
var statearr_21901_22033 = state_21895__$1;
(statearr_21901_22033[(2)] = null);

(statearr_21901_22033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21896 === (7))){
var inst_21891 = (state_21895[(2)]);
var state_21895__$1 = state_21895;
var statearr_21902_22034 = state_21895__$1;
(statearr_21902_22034[(2)] = inst_21891);

(statearr_21902_22034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__22015,c__21689__auto___22028,G__21858_22016,G__21858_22017__$1,n__4408__auto___22014,jobs,results,process,async))
;
return ((function (__22015,switch__21600__auto__,c__21689__auto___22028,G__21858_22016,G__21858_22017__$1,n__4408__auto___22014,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____0 = (function (){
var statearr_21903 = [null,null,null,null,null,null,null];
(statearr_21903[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__);

(statearr_21903[(1)] = (1));

return statearr_21903;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____1 = (function (state_21895){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_21895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e21904){if((e21904 instanceof Object)){
var ex__21604__auto__ = e21904;
var statearr_21905_22035 = state_21895;
(statearr_21905_22035[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22036 = state_21895;
state_21895 = G__22036;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__ = function(state_21895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____1.call(this,state_21895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__;
})()
;})(__22015,switch__21600__auto__,c__21689__auto___22028,G__21858_22016,G__21858_22017__$1,n__4408__auto___22014,jobs,results,process,async))
})();
var state__21691__auto__ = (function (){var statearr_21906 = f__21690__auto__.call(null);
(statearr_21906[(6)] = c__21689__auto___22028);

return statearr_21906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(__22015,c__21689__auto___22028,G__21858_22016,G__21858_22017__$1,n__4408__auto___22014,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21858_22017__$1)].join('')));

}

var G__22037 = (__22015 + (1));
__22015 = G__22037;
continue;
} else {
}
break;
}

var c__21689__auto___22038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___22038,jobs,results,process,async){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___22038,jobs,results,process,async){
return (function (state_21928){
var state_val_21929 = (state_21928[(1)]);
if((state_val_21929 === (1))){
var state_21928__$1 = state_21928;
var statearr_21930_22039 = state_21928__$1;
(statearr_21930_22039[(2)] = null);

(statearr_21930_22039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21929 === (2))){
var state_21928__$1 = state_21928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21928__$1,(4),from);
} else {
if((state_val_21929 === (3))){
var inst_21926 = (state_21928[(2)]);
var state_21928__$1 = state_21928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21928__$1,inst_21926);
} else {
if((state_val_21929 === (4))){
var inst_21909 = (state_21928[(7)]);
var inst_21909__$1 = (state_21928[(2)]);
var inst_21910 = (inst_21909__$1 == null);
var state_21928__$1 = (function (){var statearr_21931 = state_21928;
(statearr_21931[(7)] = inst_21909__$1);

return statearr_21931;
})();
if(cljs.core.truth_(inst_21910)){
var statearr_21932_22040 = state_21928__$1;
(statearr_21932_22040[(1)] = (5));

} else {
var statearr_21933_22041 = state_21928__$1;
(statearr_21933_22041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21929 === (5))){
var inst_21912 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21928__$1 = state_21928;
var statearr_21934_22042 = state_21928__$1;
(statearr_21934_22042[(2)] = inst_21912);

(statearr_21934_22042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21929 === (6))){
var inst_21914 = (state_21928[(8)]);
var inst_21909 = (state_21928[(7)]);
var inst_21914__$1 = cljs.core.async.chan.call(null,(1));
var inst_21915 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21916 = [inst_21909,inst_21914__$1];
var inst_21917 = (new cljs.core.PersistentVector(null,2,(5),inst_21915,inst_21916,null));
var state_21928__$1 = (function (){var statearr_21935 = state_21928;
(statearr_21935[(8)] = inst_21914__$1);

return statearr_21935;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21928__$1,(8),jobs,inst_21917);
} else {
if((state_val_21929 === (7))){
var inst_21924 = (state_21928[(2)]);
var state_21928__$1 = state_21928;
var statearr_21936_22043 = state_21928__$1;
(statearr_21936_22043[(2)] = inst_21924);

(statearr_21936_22043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21929 === (8))){
var inst_21914 = (state_21928[(8)]);
var inst_21919 = (state_21928[(2)]);
var state_21928__$1 = (function (){var statearr_21937 = state_21928;
(statearr_21937[(9)] = inst_21919);

return statearr_21937;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21928__$1,(9),results,inst_21914);
} else {
if((state_val_21929 === (9))){
var inst_21921 = (state_21928[(2)]);
var state_21928__$1 = (function (){var statearr_21938 = state_21928;
(statearr_21938[(10)] = inst_21921);

return statearr_21938;
})();
var statearr_21939_22044 = state_21928__$1;
(statearr_21939_22044[(2)] = null);

(statearr_21939_22044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__21689__auto___22038,jobs,results,process,async))
;
return ((function (switch__21600__auto__,c__21689__auto___22038,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____0 = (function (){
var statearr_21940 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21940[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__);

(statearr_21940[(1)] = (1));

return statearr_21940;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____1 = (function (state_21928){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_21928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e21941){if((e21941 instanceof Object)){
var ex__21604__auto__ = e21941;
var statearr_21942_22045 = state_21928;
(statearr_21942_22045[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22046 = state_21928;
state_21928 = G__22046;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__ = function(state_21928){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____1.call(this,state_21928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___22038,jobs,results,process,async))
})();
var state__21691__auto__ = (function (){var statearr_21943 = f__21690__auto__.call(null);
(statearr_21943[(6)] = c__21689__auto___22038);

return statearr_21943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___22038,jobs,results,process,async))
);


var c__21689__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto__,jobs,results,process,async){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto__,jobs,results,process,async){
return (function (state_21981){
var state_val_21982 = (state_21981[(1)]);
if((state_val_21982 === (7))){
var inst_21977 = (state_21981[(2)]);
var state_21981__$1 = state_21981;
var statearr_21983_22047 = state_21981__$1;
(statearr_21983_22047[(2)] = inst_21977);

(statearr_21983_22047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (20))){
var state_21981__$1 = state_21981;
var statearr_21984_22048 = state_21981__$1;
(statearr_21984_22048[(2)] = null);

(statearr_21984_22048[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (1))){
var state_21981__$1 = state_21981;
var statearr_21985_22049 = state_21981__$1;
(statearr_21985_22049[(2)] = null);

(statearr_21985_22049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (4))){
var inst_21946 = (state_21981[(7)]);
var inst_21946__$1 = (state_21981[(2)]);
var inst_21947 = (inst_21946__$1 == null);
var state_21981__$1 = (function (){var statearr_21986 = state_21981;
(statearr_21986[(7)] = inst_21946__$1);

return statearr_21986;
})();
if(cljs.core.truth_(inst_21947)){
var statearr_21987_22050 = state_21981__$1;
(statearr_21987_22050[(1)] = (5));

} else {
var statearr_21988_22051 = state_21981__$1;
(statearr_21988_22051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (15))){
var inst_21959 = (state_21981[(8)]);
var state_21981__$1 = state_21981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21981__$1,(18),to,inst_21959);
} else {
if((state_val_21982 === (21))){
var inst_21972 = (state_21981[(2)]);
var state_21981__$1 = state_21981;
var statearr_21989_22052 = state_21981__$1;
(statearr_21989_22052[(2)] = inst_21972);

(statearr_21989_22052[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (13))){
var inst_21974 = (state_21981[(2)]);
var state_21981__$1 = (function (){var statearr_21990 = state_21981;
(statearr_21990[(9)] = inst_21974);

return statearr_21990;
})();
var statearr_21991_22053 = state_21981__$1;
(statearr_21991_22053[(2)] = null);

(statearr_21991_22053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (6))){
var inst_21946 = (state_21981[(7)]);
var state_21981__$1 = state_21981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21981__$1,(11),inst_21946);
} else {
if((state_val_21982 === (17))){
var inst_21967 = (state_21981[(2)]);
var state_21981__$1 = state_21981;
if(cljs.core.truth_(inst_21967)){
var statearr_21992_22054 = state_21981__$1;
(statearr_21992_22054[(1)] = (19));

} else {
var statearr_21993_22055 = state_21981__$1;
(statearr_21993_22055[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (3))){
var inst_21979 = (state_21981[(2)]);
var state_21981__$1 = state_21981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21981__$1,inst_21979);
} else {
if((state_val_21982 === (12))){
var inst_21956 = (state_21981[(10)]);
var state_21981__$1 = state_21981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21981__$1,(14),inst_21956);
} else {
if((state_val_21982 === (2))){
var state_21981__$1 = state_21981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21981__$1,(4),results);
} else {
if((state_val_21982 === (19))){
var state_21981__$1 = state_21981;
var statearr_21994_22056 = state_21981__$1;
(statearr_21994_22056[(2)] = null);

(statearr_21994_22056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (11))){
var inst_21956 = (state_21981[(2)]);
var state_21981__$1 = (function (){var statearr_21995 = state_21981;
(statearr_21995[(10)] = inst_21956);

return statearr_21995;
})();
var statearr_21996_22057 = state_21981__$1;
(statearr_21996_22057[(2)] = null);

(statearr_21996_22057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (9))){
var state_21981__$1 = state_21981;
var statearr_21997_22058 = state_21981__$1;
(statearr_21997_22058[(2)] = null);

(statearr_21997_22058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (5))){
var state_21981__$1 = state_21981;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21998_22059 = state_21981__$1;
(statearr_21998_22059[(1)] = (8));

} else {
var statearr_21999_22060 = state_21981__$1;
(statearr_21999_22060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (14))){
var inst_21959 = (state_21981[(8)]);
var inst_21961 = (state_21981[(11)]);
var inst_21959__$1 = (state_21981[(2)]);
var inst_21960 = (inst_21959__$1 == null);
var inst_21961__$1 = cljs.core.not.call(null,inst_21960);
var state_21981__$1 = (function (){var statearr_22000 = state_21981;
(statearr_22000[(8)] = inst_21959__$1);

(statearr_22000[(11)] = inst_21961__$1);

return statearr_22000;
})();
if(inst_21961__$1){
var statearr_22001_22061 = state_21981__$1;
(statearr_22001_22061[(1)] = (15));

} else {
var statearr_22002_22062 = state_21981__$1;
(statearr_22002_22062[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (16))){
var inst_21961 = (state_21981[(11)]);
var state_21981__$1 = state_21981;
var statearr_22003_22063 = state_21981__$1;
(statearr_22003_22063[(2)] = inst_21961);

(statearr_22003_22063[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (10))){
var inst_21953 = (state_21981[(2)]);
var state_21981__$1 = state_21981;
var statearr_22004_22064 = state_21981__$1;
(statearr_22004_22064[(2)] = inst_21953);

(statearr_22004_22064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (18))){
var inst_21964 = (state_21981[(2)]);
var state_21981__$1 = state_21981;
var statearr_22005_22065 = state_21981__$1;
(statearr_22005_22065[(2)] = inst_21964);

(statearr_22005_22065[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (8))){
var inst_21950 = cljs.core.async.close_BANG_.call(null,to);
var state_21981__$1 = state_21981;
var statearr_22006_22066 = state_21981__$1;
(statearr_22006_22066[(2)] = inst_21950);

(statearr_22006_22066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__21689__auto__,jobs,results,process,async))
;
return ((function (switch__21600__auto__,c__21689__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____0 = (function (){
var statearr_22007 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22007[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__);

(statearr_22007[(1)] = (1));

return statearr_22007;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____1 = (function (state_21981){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_21981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e22008){if((e22008 instanceof Object)){
var ex__21604__auto__ = e22008;
var statearr_22009_22067 = state_21981;
(statearr_22009_22067[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22068 = state_21981;
state_21981 = G__22068;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__ = function(state_21981){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____1.call(this,state_21981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21601__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto__,jobs,results,process,async))
})();
var state__21691__auto__ = (function (){var statearr_22010 = f__21690__auto__.call(null);
(statearr_22010[(6)] = c__21689__auto__);

return statearr_22010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto__,jobs,results,process,async))
);

return c__21689__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__22070 = arguments.length;
switch (G__22070) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__22073 = arguments.length;
switch (G__22073) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__22076 = arguments.length;
switch (G__22076) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21689__auto___22125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___22125,tc,fc){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___22125,tc,fc){
return (function (state_22102){
var state_val_22103 = (state_22102[(1)]);
if((state_val_22103 === (7))){
var inst_22098 = (state_22102[(2)]);
var state_22102__$1 = state_22102;
var statearr_22104_22126 = state_22102__$1;
(statearr_22104_22126[(2)] = inst_22098);

(statearr_22104_22126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22103 === (1))){
var state_22102__$1 = state_22102;
var statearr_22105_22127 = state_22102__$1;
(statearr_22105_22127[(2)] = null);

(statearr_22105_22127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22103 === (4))){
var inst_22079 = (state_22102[(7)]);
var inst_22079__$1 = (state_22102[(2)]);
var inst_22080 = (inst_22079__$1 == null);
var state_22102__$1 = (function (){var statearr_22106 = state_22102;
(statearr_22106[(7)] = inst_22079__$1);

return statearr_22106;
})();
if(cljs.core.truth_(inst_22080)){
var statearr_22107_22128 = state_22102__$1;
(statearr_22107_22128[(1)] = (5));

} else {
var statearr_22108_22129 = state_22102__$1;
(statearr_22108_22129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22103 === (13))){
var state_22102__$1 = state_22102;
var statearr_22109_22130 = state_22102__$1;
(statearr_22109_22130[(2)] = null);

(statearr_22109_22130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22103 === (6))){
var inst_22079 = (state_22102[(7)]);
var inst_22085 = p.call(null,inst_22079);
var state_22102__$1 = state_22102;
if(cljs.core.truth_(inst_22085)){
var statearr_22110_22131 = state_22102__$1;
(statearr_22110_22131[(1)] = (9));

} else {
var statearr_22111_22132 = state_22102__$1;
(statearr_22111_22132[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22103 === (3))){
var inst_22100 = (state_22102[(2)]);
var state_22102__$1 = state_22102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22102__$1,inst_22100);
} else {
if((state_val_22103 === (12))){
var state_22102__$1 = state_22102;
var statearr_22112_22133 = state_22102__$1;
(statearr_22112_22133[(2)] = null);

(statearr_22112_22133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22103 === (2))){
var state_22102__$1 = state_22102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22102__$1,(4),ch);
} else {
if((state_val_22103 === (11))){
var inst_22079 = (state_22102[(7)]);
var inst_22089 = (state_22102[(2)]);
var state_22102__$1 = state_22102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22102__$1,(8),inst_22089,inst_22079);
} else {
if((state_val_22103 === (9))){
var state_22102__$1 = state_22102;
var statearr_22113_22134 = state_22102__$1;
(statearr_22113_22134[(2)] = tc);

(statearr_22113_22134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22103 === (5))){
var inst_22082 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22083 = cljs.core.async.close_BANG_.call(null,fc);
var state_22102__$1 = (function (){var statearr_22114 = state_22102;
(statearr_22114[(8)] = inst_22082);

return statearr_22114;
})();
var statearr_22115_22135 = state_22102__$1;
(statearr_22115_22135[(2)] = inst_22083);

(statearr_22115_22135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22103 === (14))){
var inst_22096 = (state_22102[(2)]);
var state_22102__$1 = state_22102;
var statearr_22116_22136 = state_22102__$1;
(statearr_22116_22136[(2)] = inst_22096);

(statearr_22116_22136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22103 === (10))){
var state_22102__$1 = state_22102;
var statearr_22117_22137 = state_22102__$1;
(statearr_22117_22137[(2)] = fc);

(statearr_22117_22137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22103 === (8))){
var inst_22091 = (state_22102[(2)]);
var state_22102__$1 = state_22102;
if(cljs.core.truth_(inst_22091)){
var statearr_22118_22138 = state_22102__$1;
(statearr_22118_22138[(1)] = (12));

} else {
var statearr_22119_22139 = state_22102__$1;
(statearr_22119_22139[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__21689__auto___22125,tc,fc))
;
return ((function (switch__21600__auto__,c__21689__auto___22125,tc,fc){
return (function() {
var cljs$core$async$state_machine__21601__auto__ = null;
var cljs$core$async$state_machine__21601__auto____0 = (function (){
var statearr_22120 = [null,null,null,null,null,null,null,null,null];
(statearr_22120[(0)] = cljs$core$async$state_machine__21601__auto__);

(statearr_22120[(1)] = (1));

return statearr_22120;
});
var cljs$core$async$state_machine__21601__auto____1 = (function (state_22102){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_22102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e22121){if((e22121 instanceof Object)){
var ex__21604__auto__ = e22121;
var statearr_22122_22140 = state_22102;
(statearr_22122_22140[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22141 = state_22102;
state_22102 = G__22141;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$state_machine__21601__auto__ = function(state_22102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21601__auto____1.call(this,state_22102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21601__auto____0;
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21601__auto____1;
return cljs$core$async$state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___22125,tc,fc))
})();
var state__21691__auto__ = (function (){var statearr_22123 = f__21690__auto__.call(null);
(statearr_22123[(6)] = c__21689__auto___22125);

return statearr_22123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___22125,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21689__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto__){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto__){
return (function (state_22162){
var state_val_22163 = (state_22162[(1)]);
if((state_val_22163 === (7))){
var inst_22158 = (state_22162[(2)]);
var state_22162__$1 = state_22162;
var statearr_22164_22182 = state_22162__$1;
(statearr_22164_22182[(2)] = inst_22158);

(statearr_22164_22182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22163 === (1))){
var inst_22142 = init;
var state_22162__$1 = (function (){var statearr_22165 = state_22162;
(statearr_22165[(7)] = inst_22142);

return statearr_22165;
})();
var statearr_22166_22183 = state_22162__$1;
(statearr_22166_22183[(2)] = null);

(statearr_22166_22183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22163 === (4))){
var inst_22145 = (state_22162[(8)]);
var inst_22145__$1 = (state_22162[(2)]);
var inst_22146 = (inst_22145__$1 == null);
var state_22162__$1 = (function (){var statearr_22167 = state_22162;
(statearr_22167[(8)] = inst_22145__$1);

return statearr_22167;
})();
if(cljs.core.truth_(inst_22146)){
var statearr_22168_22184 = state_22162__$1;
(statearr_22168_22184[(1)] = (5));

} else {
var statearr_22169_22185 = state_22162__$1;
(statearr_22169_22185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22163 === (6))){
var inst_22142 = (state_22162[(7)]);
var inst_22149 = (state_22162[(9)]);
var inst_22145 = (state_22162[(8)]);
var inst_22149__$1 = f.call(null,inst_22142,inst_22145);
var inst_22150 = cljs.core.reduced_QMARK_.call(null,inst_22149__$1);
var state_22162__$1 = (function (){var statearr_22170 = state_22162;
(statearr_22170[(9)] = inst_22149__$1);

return statearr_22170;
})();
if(inst_22150){
var statearr_22171_22186 = state_22162__$1;
(statearr_22171_22186[(1)] = (8));

} else {
var statearr_22172_22187 = state_22162__$1;
(statearr_22172_22187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22163 === (3))){
var inst_22160 = (state_22162[(2)]);
var state_22162__$1 = state_22162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22162__$1,inst_22160);
} else {
if((state_val_22163 === (2))){
var state_22162__$1 = state_22162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22162__$1,(4),ch);
} else {
if((state_val_22163 === (9))){
var inst_22149 = (state_22162[(9)]);
var inst_22142 = inst_22149;
var state_22162__$1 = (function (){var statearr_22173 = state_22162;
(statearr_22173[(7)] = inst_22142);

return statearr_22173;
})();
var statearr_22174_22188 = state_22162__$1;
(statearr_22174_22188[(2)] = null);

(statearr_22174_22188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22163 === (5))){
var inst_22142 = (state_22162[(7)]);
var state_22162__$1 = state_22162;
var statearr_22175_22189 = state_22162__$1;
(statearr_22175_22189[(2)] = inst_22142);

(statearr_22175_22189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22163 === (10))){
var inst_22156 = (state_22162[(2)]);
var state_22162__$1 = state_22162;
var statearr_22176_22190 = state_22162__$1;
(statearr_22176_22190[(2)] = inst_22156);

(statearr_22176_22190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22163 === (8))){
var inst_22149 = (state_22162[(9)]);
var inst_22152 = cljs.core.deref.call(null,inst_22149);
var state_22162__$1 = state_22162;
var statearr_22177_22191 = state_22162__$1;
(statearr_22177_22191[(2)] = inst_22152);

(statearr_22177_22191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__21689__auto__))
;
return ((function (switch__21600__auto__,c__21689__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21601__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21601__auto____0 = (function (){
var statearr_22178 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22178[(0)] = cljs$core$async$reduce_$_state_machine__21601__auto__);

(statearr_22178[(1)] = (1));

return statearr_22178;
});
var cljs$core$async$reduce_$_state_machine__21601__auto____1 = (function (state_22162){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_22162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e22179){if((e22179 instanceof Object)){
var ex__21604__auto__ = e22179;
var statearr_22180_22192 = state_22162;
(statearr_22180_22192[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22193 = state_22162;
state_22162 = G__22193;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21601__auto__ = function(state_22162){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21601__auto____1.call(this,state_22162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21601__auto____0;
cljs$core$async$reduce_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21601__auto____1;
return cljs$core$async$reduce_$_state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto__))
})();
var state__21691__auto__ = (function (){var statearr_22181 = f__21690__auto__.call(null);
(statearr_22181[(6)] = c__21689__auto__);

return statearr_22181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto__))
);

return c__21689__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__21689__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto__,f__$1){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto__,f__$1){
return (function (state_22199){
var state_val_22200 = (state_22199[(1)]);
if((state_val_22200 === (1))){
var inst_22194 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_22199__$1 = state_22199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22199__$1,(2),inst_22194);
} else {
if((state_val_22200 === (2))){
var inst_22196 = (state_22199[(2)]);
var inst_22197 = f__$1.call(null,inst_22196);
var state_22199__$1 = state_22199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22199__$1,inst_22197);
} else {
return null;
}
}
});})(c__21689__auto__,f__$1))
;
return ((function (switch__21600__auto__,c__21689__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__21601__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21601__auto____0 = (function (){
var statearr_22201 = [null,null,null,null,null,null,null];
(statearr_22201[(0)] = cljs$core$async$transduce_$_state_machine__21601__auto__);

(statearr_22201[(1)] = (1));

return statearr_22201;
});
var cljs$core$async$transduce_$_state_machine__21601__auto____1 = (function (state_22199){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_22199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e22202){if((e22202 instanceof Object)){
var ex__21604__auto__ = e22202;
var statearr_22203_22205 = state_22199;
(statearr_22203_22205[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22206 = state_22199;
state_22199 = G__22206;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21601__auto__ = function(state_22199){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21601__auto____1.call(this,state_22199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21601__auto____0;
cljs$core$async$transduce_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21601__auto____1;
return cljs$core$async$transduce_$_state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto__,f__$1))
})();
var state__21691__auto__ = (function (){var statearr_22204 = f__21690__auto__.call(null);
(statearr_22204[(6)] = c__21689__auto__);

return statearr_22204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto__,f__$1))
);

return c__21689__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__22208 = arguments.length;
switch (G__22208) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21689__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto__){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto__){
return (function (state_22233){
var state_val_22234 = (state_22233[(1)]);
if((state_val_22234 === (7))){
var inst_22215 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
var statearr_22235_22256 = state_22233__$1;
(statearr_22235_22256[(2)] = inst_22215);

(statearr_22235_22256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (1))){
var inst_22209 = cljs.core.seq.call(null,coll);
var inst_22210 = inst_22209;
var state_22233__$1 = (function (){var statearr_22236 = state_22233;
(statearr_22236[(7)] = inst_22210);

return statearr_22236;
})();
var statearr_22237_22257 = state_22233__$1;
(statearr_22237_22257[(2)] = null);

(statearr_22237_22257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (4))){
var inst_22210 = (state_22233[(7)]);
var inst_22213 = cljs.core.first.call(null,inst_22210);
var state_22233__$1 = state_22233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22233__$1,(7),ch,inst_22213);
} else {
if((state_val_22234 === (13))){
var inst_22227 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
var statearr_22238_22258 = state_22233__$1;
(statearr_22238_22258[(2)] = inst_22227);

(statearr_22238_22258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (6))){
var inst_22218 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
if(cljs.core.truth_(inst_22218)){
var statearr_22239_22259 = state_22233__$1;
(statearr_22239_22259[(1)] = (8));

} else {
var statearr_22240_22260 = state_22233__$1;
(statearr_22240_22260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (3))){
var inst_22231 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22233__$1,inst_22231);
} else {
if((state_val_22234 === (12))){
var state_22233__$1 = state_22233;
var statearr_22241_22261 = state_22233__$1;
(statearr_22241_22261[(2)] = null);

(statearr_22241_22261[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (2))){
var inst_22210 = (state_22233[(7)]);
var state_22233__$1 = state_22233;
if(cljs.core.truth_(inst_22210)){
var statearr_22242_22262 = state_22233__$1;
(statearr_22242_22262[(1)] = (4));

} else {
var statearr_22243_22263 = state_22233__$1;
(statearr_22243_22263[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (11))){
var inst_22224 = cljs.core.async.close_BANG_.call(null,ch);
var state_22233__$1 = state_22233;
var statearr_22244_22264 = state_22233__$1;
(statearr_22244_22264[(2)] = inst_22224);

(statearr_22244_22264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (9))){
var state_22233__$1 = state_22233;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22245_22265 = state_22233__$1;
(statearr_22245_22265[(1)] = (11));

} else {
var statearr_22246_22266 = state_22233__$1;
(statearr_22246_22266[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (5))){
var inst_22210 = (state_22233[(7)]);
var state_22233__$1 = state_22233;
var statearr_22247_22267 = state_22233__$1;
(statearr_22247_22267[(2)] = inst_22210);

(statearr_22247_22267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (10))){
var inst_22229 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
var statearr_22248_22268 = state_22233__$1;
(statearr_22248_22268[(2)] = inst_22229);

(statearr_22248_22268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (8))){
var inst_22210 = (state_22233[(7)]);
var inst_22220 = cljs.core.next.call(null,inst_22210);
var inst_22210__$1 = inst_22220;
var state_22233__$1 = (function (){var statearr_22249 = state_22233;
(statearr_22249[(7)] = inst_22210__$1);

return statearr_22249;
})();
var statearr_22250_22269 = state_22233__$1;
(statearr_22250_22269[(2)] = null);

(statearr_22250_22269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__21689__auto__))
;
return ((function (switch__21600__auto__,c__21689__auto__){
return (function() {
var cljs$core$async$state_machine__21601__auto__ = null;
var cljs$core$async$state_machine__21601__auto____0 = (function (){
var statearr_22251 = [null,null,null,null,null,null,null,null];
(statearr_22251[(0)] = cljs$core$async$state_machine__21601__auto__);

(statearr_22251[(1)] = (1));

return statearr_22251;
});
var cljs$core$async$state_machine__21601__auto____1 = (function (state_22233){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_22233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e22252){if((e22252 instanceof Object)){
var ex__21604__auto__ = e22252;
var statearr_22253_22270 = state_22233;
(statearr_22253_22270[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22271 = state_22233;
state_22233 = G__22271;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$state_machine__21601__auto__ = function(state_22233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21601__auto____1.call(this,state_22233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21601__auto____0;
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21601__auto____1;
return cljs$core$async$state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto__))
})();
var state__21691__auto__ = (function (){var statearr_22254 = f__21690__auto__.call(null);
(statearr_22254[(6)] = c__21689__auto__);

return statearr_22254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto__))
);

return c__21689__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22272 = (function (ch,cs,meta22273){
this.ch = ch;
this.cs = cs;
this.meta22273 = meta22273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22274,meta22273__$1){
var self__ = this;
var _22274__$1 = this;
return (new cljs.core.async.t_cljs$core$async22272(self__.ch,self__.cs,meta22273__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22274){
var self__ = this;
var _22274__$1 = this;
return self__.meta22273;
});})(cs))
;

cljs.core.async.t_cljs$core$async22272.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22272.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22272.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22272.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22272.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22272.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22272.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22273","meta22273",-620350937,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22272.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22272";

cljs.core.async.t_cljs$core$async22272.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async22272");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22272.
 */
cljs.core.async.__GT_t_cljs$core$async22272 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22272(ch__$1,cs__$1,meta22273){
return (new cljs.core.async.t_cljs$core$async22272(ch__$1,cs__$1,meta22273));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22272(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21689__auto___22494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___22494,cs,m,dchan,dctr,done){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___22494,cs,m,dchan,dctr,done){
return (function (state_22409){
var state_val_22410 = (state_22409[(1)]);
if((state_val_22410 === (7))){
var inst_22405 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
var statearr_22411_22495 = state_22409__$1;
(statearr_22411_22495[(2)] = inst_22405);

(statearr_22411_22495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (20))){
var inst_22308 = (state_22409[(7)]);
var inst_22320 = cljs.core.first.call(null,inst_22308);
var inst_22321 = cljs.core.nth.call(null,inst_22320,(0),null);
var inst_22322 = cljs.core.nth.call(null,inst_22320,(1),null);
var state_22409__$1 = (function (){var statearr_22412 = state_22409;
(statearr_22412[(8)] = inst_22321);

return statearr_22412;
})();
if(cljs.core.truth_(inst_22322)){
var statearr_22413_22496 = state_22409__$1;
(statearr_22413_22496[(1)] = (22));

} else {
var statearr_22414_22497 = state_22409__$1;
(statearr_22414_22497[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (27))){
var inst_22357 = (state_22409[(9)]);
var inst_22350 = (state_22409[(10)]);
var inst_22277 = (state_22409[(11)]);
var inst_22352 = (state_22409[(12)]);
var inst_22357__$1 = cljs.core._nth.call(null,inst_22350,inst_22352);
var inst_22358 = cljs.core.async.put_BANG_.call(null,inst_22357__$1,inst_22277,done);
var state_22409__$1 = (function (){var statearr_22415 = state_22409;
(statearr_22415[(9)] = inst_22357__$1);

return statearr_22415;
})();
if(cljs.core.truth_(inst_22358)){
var statearr_22416_22498 = state_22409__$1;
(statearr_22416_22498[(1)] = (30));

} else {
var statearr_22417_22499 = state_22409__$1;
(statearr_22417_22499[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (1))){
var state_22409__$1 = state_22409;
var statearr_22418_22500 = state_22409__$1;
(statearr_22418_22500[(2)] = null);

(statearr_22418_22500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (24))){
var inst_22308 = (state_22409[(7)]);
var inst_22327 = (state_22409[(2)]);
var inst_22328 = cljs.core.next.call(null,inst_22308);
var inst_22286 = inst_22328;
var inst_22287 = null;
var inst_22288 = (0);
var inst_22289 = (0);
var state_22409__$1 = (function (){var statearr_22419 = state_22409;
(statearr_22419[(13)] = inst_22286);

(statearr_22419[(14)] = inst_22287);

(statearr_22419[(15)] = inst_22327);

(statearr_22419[(16)] = inst_22288);

(statearr_22419[(17)] = inst_22289);

return statearr_22419;
})();
var statearr_22420_22501 = state_22409__$1;
(statearr_22420_22501[(2)] = null);

(statearr_22420_22501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (39))){
var state_22409__$1 = state_22409;
var statearr_22424_22502 = state_22409__$1;
(statearr_22424_22502[(2)] = null);

(statearr_22424_22502[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (4))){
var inst_22277 = (state_22409[(11)]);
var inst_22277__$1 = (state_22409[(2)]);
var inst_22278 = (inst_22277__$1 == null);
var state_22409__$1 = (function (){var statearr_22425 = state_22409;
(statearr_22425[(11)] = inst_22277__$1);

return statearr_22425;
})();
if(cljs.core.truth_(inst_22278)){
var statearr_22426_22503 = state_22409__$1;
(statearr_22426_22503[(1)] = (5));

} else {
var statearr_22427_22504 = state_22409__$1;
(statearr_22427_22504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (15))){
var inst_22286 = (state_22409[(13)]);
var inst_22287 = (state_22409[(14)]);
var inst_22288 = (state_22409[(16)]);
var inst_22289 = (state_22409[(17)]);
var inst_22304 = (state_22409[(2)]);
var inst_22305 = (inst_22289 + (1));
var tmp22421 = inst_22286;
var tmp22422 = inst_22287;
var tmp22423 = inst_22288;
var inst_22286__$1 = tmp22421;
var inst_22287__$1 = tmp22422;
var inst_22288__$1 = tmp22423;
var inst_22289__$1 = inst_22305;
var state_22409__$1 = (function (){var statearr_22428 = state_22409;
(statearr_22428[(13)] = inst_22286__$1);

(statearr_22428[(14)] = inst_22287__$1);

(statearr_22428[(16)] = inst_22288__$1);

(statearr_22428[(17)] = inst_22289__$1);

(statearr_22428[(18)] = inst_22304);

return statearr_22428;
})();
var statearr_22429_22505 = state_22409__$1;
(statearr_22429_22505[(2)] = null);

(statearr_22429_22505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (21))){
var inst_22331 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
var statearr_22433_22506 = state_22409__$1;
(statearr_22433_22506[(2)] = inst_22331);

(statearr_22433_22506[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (31))){
var inst_22357 = (state_22409[(9)]);
var inst_22361 = done.call(null,null);
var inst_22362 = cljs.core.async.untap_STAR_.call(null,m,inst_22357);
var state_22409__$1 = (function (){var statearr_22434 = state_22409;
(statearr_22434[(19)] = inst_22361);

return statearr_22434;
})();
var statearr_22435_22507 = state_22409__$1;
(statearr_22435_22507[(2)] = inst_22362);

(statearr_22435_22507[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (32))){
var inst_22351 = (state_22409[(20)]);
var inst_22350 = (state_22409[(10)]);
var inst_22349 = (state_22409[(21)]);
var inst_22352 = (state_22409[(12)]);
var inst_22364 = (state_22409[(2)]);
var inst_22365 = (inst_22352 + (1));
var tmp22430 = inst_22351;
var tmp22431 = inst_22350;
var tmp22432 = inst_22349;
var inst_22349__$1 = tmp22432;
var inst_22350__$1 = tmp22431;
var inst_22351__$1 = tmp22430;
var inst_22352__$1 = inst_22365;
var state_22409__$1 = (function (){var statearr_22436 = state_22409;
(statearr_22436[(20)] = inst_22351__$1);

(statearr_22436[(10)] = inst_22350__$1);

(statearr_22436[(21)] = inst_22349__$1);

(statearr_22436[(22)] = inst_22364);

(statearr_22436[(12)] = inst_22352__$1);

return statearr_22436;
})();
var statearr_22437_22508 = state_22409__$1;
(statearr_22437_22508[(2)] = null);

(statearr_22437_22508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (40))){
var inst_22377 = (state_22409[(23)]);
var inst_22381 = done.call(null,null);
var inst_22382 = cljs.core.async.untap_STAR_.call(null,m,inst_22377);
var state_22409__$1 = (function (){var statearr_22438 = state_22409;
(statearr_22438[(24)] = inst_22381);

return statearr_22438;
})();
var statearr_22439_22509 = state_22409__$1;
(statearr_22439_22509[(2)] = inst_22382);

(statearr_22439_22509[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (33))){
var inst_22368 = (state_22409[(25)]);
var inst_22370 = cljs.core.chunked_seq_QMARK_.call(null,inst_22368);
var state_22409__$1 = state_22409;
if(inst_22370){
var statearr_22440_22510 = state_22409__$1;
(statearr_22440_22510[(1)] = (36));

} else {
var statearr_22441_22511 = state_22409__$1;
(statearr_22441_22511[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (13))){
var inst_22298 = (state_22409[(26)]);
var inst_22301 = cljs.core.async.close_BANG_.call(null,inst_22298);
var state_22409__$1 = state_22409;
var statearr_22442_22512 = state_22409__$1;
(statearr_22442_22512[(2)] = inst_22301);

(statearr_22442_22512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (22))){
var inst_22321 = (state_22409[(8)]);
var inst_22324 = cljs.core.async.close_BANG_.call(null,inst_22321);
var state_22409__$1 = state_22409;
var statearr_22443_22513 = state_22409__$1;
(statearr_22443_22513[(2)] = inst_22324);

(statearr_22443_22513[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (36))){
var inst_22368 = (state_22409[(25)]);
var inst_22372 = cljs.core.chunk_first.call(null,inst_22368);
var inst_22373 = cljs.core.chunk_rest.call(null,inst_22368);
var inst_22374 = cljs.core.count.call(null,inst_22372);
var inst_22349 = inst_22373;
var inst_22350 = inst_22372;
var inst_22351 = inst_22374;
var inst_22352 = (0);
var state_22409__$1 = (function (){var statearr_22444 = state_22409;
(statearr_22444[(20)] = inst_22351);

(statearr_22444[(10)] = inst_22350);

(statearr_22444[(21)] = inst_22349);

(statearr_22444[(12)] = inst_22352);

return statearr_22444;
})();
var statearr_22445_22514 = state_22409__$1;
(statearr_22445_22514[(2)] = null);

(statearr_22445_22514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (41))){
var inst_22368 = (state_22409[(25)]);
var inst_22384 = (state_22409[(2)]);
var inst_22385 = cljs.core.next.call(null,inst_22368);
var inst_22349 = inst_22385;
var inst_22350 = null;
var inst_22351 = (0);
var inst_22352 = (0);
var state_22409__$1 = (function (){var statearr_22446 = state_22409;
(statearr_22446[(20)] = inst_22351);

(statearr_22446[(27)] = inst_22384);

(statearr_22446[(10)] = inst_22350);

(statearr_22446[(21)] = inst_22349);

(statearr_22446[(12)] = inst_22352);

return statearr_22446;
})();
var statearr_22447_22515 = state_22409__$1;
(statearr_22447_22515[(2)] = null);

(statearr_22447_22515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (43))){
var state_22409__$1 = state_22409;
var statearr_22448_22516 = state_22409__$1;
(statearr_22448_22516[(2)] = null);

(statearr_22448_22516[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (29))){
var inst_22393 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
var statearr_22449_22517 = state_22409__$1;
(statearr_22449_22517[(2)] = inst_22393);

(statearr_22449_22517[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (44))){
var inst_22402 = (state_22409[(2)]);
var state_22409__$1 = (function (){var statearr_22450 = state_22409;
(statearr_22450[(28)] = inst_22402);

return statearr_22450;
})();
var statearr_22451_22518 = state_22409__$1;
(statearr_22451_22518[(2)] = null);

(statearr_22451_22518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (6))){
var inst_22341 = (state_22409[(29)]);
var inst_22340 = cljs.core.deref.call(null,cs);
var inst_22341__$1 = cljs.core.keys.call(null,inst_22340);
var inst_22342 = cljs.core.count.call(null,inst_22341__$1);
var inst_22343 = cljs.core.reset_BANG_.call(null,dctr,inst_22342);
var inst_22348 = cljs.core.seq.call(null,inst_22341__$1);
var inst_22349 = inst_22348;
var inst_22350 = null;
var inst_22351 = (0);
var inst_22352 = (0);
var state_22409__$1 = (function (){var statearr_22452 = state_22409;
(statearr_22452[(20)] = inst_22351);

(statearr_22452[(10)] = inst_22350);

(statearr_22452[(21)] = inst_22349);

(statearr_22452[(30)] = inst_22343);

(statearr_22452[(29)] = inst_22341__$1);

(statearr_22452[(12)] = inst_22352);

return statearr_22452;
})();
var statearr_22453_22519 = state_22409__$1;
(statearr_22453_22519[(2)] = null);

(statearr_22453_22519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (28))){
var inst_22368 = (state_22409[(25)]);
var inst_22349 = (state_22409[(21)]);
var inst_22368__$1 = cljs.core.seq.call(null,inst_22349);
var state_22409__$1 = (function (){var statearr_22454 = state_22409;
(statearr_22454[(25)] = inst_22368__$1);

return statearr_22454;
})();
if(inst_22368__$1){
var statearr_22455_22520 = state_22409__$1;
(statearr_22455_22520[(1)] = (33));

} else {
var statearr_22456_22521 = state_22409__$1;
(statearr_22456_22521[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (25))){
var inst_22351 = (state_22409[(20)]);
var inst_22352 = (state_22409[(12)]);
var inst_22354 = (inst_22352 < inst_22351);
var inst_22355 = inst_22354;
var state_22409__$1 = state_22409;
if(cljs.core.truth_(inst_22355)){
var statearr_22457_22522 = state_22409__$1;
(statearr_22457_22522[(1)] = (27));

} else {
var statearr_22458_22523 = state_22409__$1;
(statearr_22458_22523[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (34))){
var state_22409__$1 = state_22409;
var statearr_22459_22524 = state_22409__$1;
(statearr_22459_22524[(2)] = null);

(statearr_22459_22524[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (17))){
var state_22409__$1 = state_22409;
var statearr_22460_22525 = state_22409__$1;
(statearr_22460_22525[(2)] = null);

(statearr_22460_22525[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (3))){
var inst_22407 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22409__$1,inst_22407);
} else {
if((state_val_22410 === (12))){
var inst_22336 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
var statearr_22461_22526 = state_22409__$1;
(statearr_22461_22526[(2)] = inst_22336);

(statearr_22461_22526[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (2))){
var state_22409__$1 = state_22409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22409__$1,(4),ch);
} else {
if((state_val_22410 === (23))){
var state_22409__$1 = state_22409;
var statearr_22462_22527 = state_22409__$1;
(statearr_22462_22527[(2)] = null);

(statearr_22462_22527[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (35))){
var inst_22391 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
var statearr_22463_22528 = state_22409__$1;
(statearr_22463_22528[(2)] = inst_22391);

(statearr_22463_22528[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (19))){
var inst_22308 = (state_22409[(7)]);
var inst_22312 = cljs.core.chunk_first.call(null,inst_22308);
var inst_22313 = cljs.core.chunk_rest.call(null,inst_22308);
var inst_22314 = cljs.core.count.call(null,inst_22312);
var inst_22286 = inst_22313;
var inst_22287 = inst_22312;
var inst_22288 = inst_22314;
var inst_22289 = (0);
var state_22409__$1 = (function (){var statearr_22464 = state_22409;
(statearr_22464[(13)] = inst_22286);

(statearr_22464[(14)] = inst_22287);

(statearr_22464[(16)] = inst_22288);

(statearr_22464[(17)] = inst_22289);

return statearr_22464;
})();
var statearr_22465_22529 = state_22409__$1;
(statearr_22465_22529[(2)] = null);

(statearr_22465_22529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (11))){
var inst_22286 = (state_22409[(13)]);
var inst_22308 = (state_22409[(7)]);
var inst_22308__$1 = cljs.core.seq.call(null,inst_22286);
var state_22409__$1 = (function (){var statearr_22466 = state_22409;
(statearr_22466[(7)] = inst_22308__$1);

return statearr_22466;
})();
if(inst_22308__$1){
var statearr_22467_22530 = state_22409__$1;
(statearr_22467_22530[(1)] = (16));

} else {
var statearr_22468_22531 = state_22409__$1;
(statearr_22468_22531[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (9))){
var inst_22338 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
var statearr_22469_22532 = state_22409__$1;
(statearr_22469_22532[(2)] = inst_22338);

(statearr_22469_22532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (5))){
var inst_22284 = cljs.core.deref.call(null,cs);
var inst_22285 = cljs.core.seq.call(null,inst_22284);
var inst_22286 = inst_22285;
var inst_22287 = null;
var inst_22288 = (0);
var inst_22289 = (0);
var state_22409__$1 = (function (){var statearr_22470 = state_22409;
(statearr_22470[(13)] = inst_22286);

(statearr_22470[(14)] = inst_22287);

(statearr_22470[(16)] = inst_22288);

(statearr_22470[(17)] = inst_22289);

return statearr_22470;
})();
var statearr_22471_22533 = state_22409__$1;
(statearr_22471_22533[(2)] = null);

(statearr_22471_22533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (14))){
var state_22409__$1 = state_22409;
var statearr_22472_22534 = state_22409__$1;
(statearr_22472_22534[(2)] = null);

(statearr_22472_22534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (45))){
var inst_22399 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
var statearr_22473_22535 = state_22409__$1;
(statearr_22473_22535[(2)] = inst_22399);

(statearr_22473_22535[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (26))){
var inst_22341 = (state_22409[(29)]);
var inst_22395 = (state_22409[(2)]);
var inst_22396 = cljs.core.seq.call(null,inst_22341);
var state_22409__$1 = (function (){var statearr_22474 = state_22409;
(statearr_22474[(31)] = inst_22395);

return statearr_22474;
})();
if(inst_22396){
var statearr_22475_22536 = state_22409__$1;
(statearr_22475_22536[(1)] = (42));

} else {
var statearr_22476_22537 = state_22409__$1;
(statearr_22476_22537[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (16))){
var inst_22308 = (state_22409[(7)]);
var inst_22310 = cljs.core.chunked_seq_QMARK_.call(null,inst_22308);
var state_22409__$1 = state_22409;
if(inst_22310){
var statearr_22477_22538 = state_22409__$1;
(statearr_22477_22538[(1)] = (19));

} else {
var statearr_22478_22539 = state_22409__$1;
(statearr_22478_22539[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (38))){
var inst_22388 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
var statearr_22479_22540 = state_22409__$1;
(statearr_22479_22540[(2)] = inst_22388);

(statearr_22479_22540[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (30))){
var state_22409__$1 = state_22409;
var statearr_22480_22541 = state_22409__$1;
(statearr_22480_22541[(2)] = null);

(statearr_22480_22541[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (10))){
var inst_22287 = (state_22409[(14)]);
var inst_22289 = (state_22409[(17)]);
var inst_22297 = cljs.core._nth.call(null,inst_22287,inst_22289);
var inst_22298 = cljs.core.nth.call(null,inst_22297,(0),null);
var inst_22299 = cljs.core.nth.call(null,inst_22297,(1),null);
var state_22409__$1 = (function (){var statearr_22481 = state_22409;
(statearr_22481[(26)] = inst_22298);

return statearr_22481;
})();
if(cljs.core.truth_(inst_22299)){
var statearr_22482_22542 = state_22409__$1;
(statearr_22482_22542[(1)] = (13));

} else {
var statearr_22483_22543 = state_22409__$1;
(statearr_22483_22543[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (18))){
var inst_22334 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
var statearr_22484_22544 = state_22409__$1;
(statearr_22484_22544[(2)] = inst_22334);

(statearr_22484_22544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (42))){
var state_22409__$1 = state_22409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22409__$1,(45),dchan);
} else {
if((state_val_22410 === (37))){
var inst_22368 = (state_22409[(25)]);
var inst_22377 = (state_22409[(23)]);
var inst_22277 = (state_22409[(11)]);
var inst_22377__$1 = cljs.core.first.call(null,inst_22368);
var inst_22378 = cljs.core.async.put_BANG_.call(null,inst_22377__$1,inst_22277,done);
var state_22409__$1 = (function (){var statearr_22485 = state_22409;
(statearr_22485[(23)] = inst_22377__$1);

return statearr_22485;
})();
if(cljs.core.truth_(inst_22378)){
var statearr_22486_22545 = state_22409__$1;
(statearr_22486_22545[(1)] = (39));

} else {
var statearr_22487_22546 = state_22409__$1;
(statearr_22487_22546[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (8))){
var inst_22288 = (state_22409[(16)]);
var inst_22289 = (state_22409[(17)]);
var inst_22291 = (inst_22289 < inst_22288);
var inst_22292 = inst_22291;
var state_22409__$1 = state_22409;
if(cljs.core.truth_(inst_22292)){
var statearr_22488_22547 = state_22409__$1;
(statearr_22488_22547[(1)] = (10));

} else {
var statearr_22489_22548 = state_22409__$1;
(statearr_22489_22548[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__21689__auto___22494,cs,m,dchan,dctr,done))
;
return ((function (switch__21600__auto__,c__21689__auto___22494,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21601__auto__ = null;
var cljs$core$async$mult_$_state_machine__21601__auto____0 = (function (){
var statearr_22490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22490[(0)] = cljs$core$async$mult_$_state_machine__21601__auto__);

(statearr_22490[(1)] = (1));

return statearr_22490;
});
var cljs$core$async$mult_$_state_machine__21601__auto____1 = (function (state_22409){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_22409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e22491){if((e22491 instanceof Object)){
var ex__21604__auto__ = e22491;
var statearr_22492_22549 = state_22409;
(statearr_22492_22549[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22550 = state_22409;
state_22409 = G__22550;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21601__auto__ = function(state_22409){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21601__auto____1.call(this,state_22409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21601__auto____0;
cljs$core$async$mult_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21601__auto____1;
return cljs$core$async$mult_$_state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___22494,cs,m,dchan,dctr,done))
})();
var state__21691__auto__ = (function (){var statearr_22493 = f__21690__auto__.call(null);
(statearr_22493[(6)] = c__21689__auto___22494);

return statearr_22493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___22494,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__22552 = arguments.length;
switch (G__22552) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22564 = arguments.length;
var i__4532__auto___22565 = (0);
while(true){
if((i__4532__auto___22565 < len__4531__auto___22564)){
args__4534__auto__.push((arguments[i__4532__auto___22565]));

var G__22566 = (i__4532__auto___22565 + (1));
i__4532__auto___22565 = G__22566;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22558){
var map__22559 = p__22558;
var map__22559__$1 = ((((!((map__22559 == null)))?(((((map__22559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22559):map__22559);
var opts = map__22559__$1;
var statearr_22561_22567 = state;
(statearr_22561_22567[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22559,map__22559__$1,opts){
return (function (val){
var statearr_22562_22568 = state;
(statearr_22562_22568[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22559,map__22559__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22563_22569 = state;
(statearr_22563_22569[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22554){
var G__22555 = cljs.core.first.call(null,seq22554);
var seq22554__$1 = cljs.core.next.call(null,seq22554);
var G__22556 = cljs.core.first.call(null,seq22554__$1);
var seq22554__$2 = cljs.core.next.call(null,seq22554__$1);
var G__22557 = cljs.core.first.call(null,seq22554__$2);
var seq22554__$3 = cljs.core.next.call(null,seq22554__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22555,G__22556,G__22557,seq22554__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22570 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta22571){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta22571 = meta22571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22572,meta22571__$1){
var self__ = this;
var _22572__$1 = this;
return (new cljs.core.async.t_cljs$core$async22570(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta22571__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22570.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22572){
var self__ = this;
var _22572__$1 = this;
return self__.meta22571;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22570.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22570.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22570.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22570.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22570.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22570.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22570.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22570.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22570.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta22571","meta22571",-1783510994,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22570";

cljs.core.async.t_cljs$core$async22570.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async22570");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22570.
 */
cljs.core.async.__GT_t_cljs$core$async22570 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22570(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22571){
return (new cljs.core.async.t_cljs$core$async22570(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22571));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22570(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21689__auto___22734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___22734,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___22734,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22674){
var state_val_22675 = (state_22674[(1)]);
if((state_val_22675 === (7))){
var inst_22589 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22676_22735 = state_22674__$1;
(statearr_22676_22735[(2)] = inst_22589);

(statearr_22676_22735[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (20))){
var inst_22601 = (state_22674[(7)]);
var state_22674__$1 = state_22674;
var statearr_22677_22736 = state_22674__$1;
(statearr_22677_22736[(2)] = inst_22601);

(statearr_22677_22736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (27))){
var state_22674__$1 = state_22674;
var statearr_22678_22737 = state_22674__$1;
(statearr_22678_22737[(2)] = null);

(statearr_22678_22737[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (1))){
var inst_22576 = (state_22674[(8)]);
var inst_22576__$1 = calc_state.call(null);
var inst_22578 = (inst_22576__$1 == null);
var inst_22579 = cljs.core.not.call(null,inst_22578);
var state_22674__$1 = (function (){var statearr_22679 = state_22674;
(statearr_22679[(8)] = inst_22576__$1);

return statearr_22679;
})();
if(inst_22579){
var statearr_22680_22738 = state_22674__$1;
(statearr_22680_22738[(1)] = (2));

} else {
var statearr_22681_22739 = state_22674__$1;
(statearr_22681_22739[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (24))){
var inst_22634 = (state_22674[(9)]);
var inst_22648 = (state_22674[(10)]);
var inst_22625 = (state_22674[(11)]);
var inst_22648__$1 = inst_22625.call(null,inst_22634);
var state_22674__$1 = (function (){var statearr_22682 = state_22674;
(statearr_22682[(10)] = inst_22648__$1);

return statearr_22682;
})();
if(cljs.core.truth_(inst_22648__$1)){
var statearr_22683_22740 = state_22674__$1;
(statearr_22683_22740[(1)] = (29));

} else {
var statearr_22684_22741 = state_22674__$1;
(statearr_22684_22741[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (4))){
var inst_22592 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22592)){
var statearr_22685_22742 = state_22674__$1;
(statearr_22685_22742[(1)] = (8));

} else {
var statearr_22686_22743 = state_22674__$1;
(statearr_22686_22743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (15))){
var inst_22619 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22619)){
var statearr_22687_22744 = state_22674__$1;
(statearr_22687_22744[(1)] = (19));

} else {
var statearr_22688_22745 = state_22674__$1;
(statearr_22688_22745[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (21))){
var inst_22624 = (state_22674[(12)]);
var inst_22624__$1 = (state_22674[(2)]);
var inst_22625 = cljs.core.get.call(null,inst_22624__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22626 = cljs.core.get.call(null,inst_22624__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22627 = cljs.core.get.call(null,inst_22624__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22674__$1 = (function (){var statearr_22689 = state_22674;
(statearr_22689[(13)] = inst_22626);

(statearr_22689[(11)] = inst_22625);

(statearr_22689[(12)] = inst_22624__$1);

return statearr_22689;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22674__$1,(22),inst_22627);
} else {
if((state_val_22675 === (31))){
var inst_22656 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22656)){
var statearr_22690_22746 = state_22674__$1;
(statearr_22690_22746[(1)] = (32));

} else {
var statearr_22691_22747 = state_22674__$1;
(statearr_22691_22747[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (32))){
var inst_22633 = (state_22674[(14)]);
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22674__$1,(35),out,inst_22633);
} else {
if((state_val_22675 === (33))){
var inst_22624 = (state_22674[(12)]);
var inst_22601 = inst_22624;
var state_22674__$1 = (function (){var statearr_22692 = state_22674;
(statearr_22692[(7)] = inst_22601);

return statearr_22692;
})();
var statearr_22693_22748 = state_22674__$1;
(statearr_22693_22748[(2)] = null);

(statearr_22693_22748[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (13))){
var inst_22601 = (state_22674[(7)]);
var inst_22608 = inst_22601.cljs$lang$protocol_mask$partition0$;
var inst_22609 = (inst_22608 & (64));
var inst_22610 = inst_22601.cljs$core$ISeq$;
var inst_22611 = (cljs.core.PROTOCOL_SENTINEL === inst_22610);
var inst_22612 = ((inst_22609) || (inst_22611));
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22612)){
var statearr_22694_22749 = state_22674__$1;
(statearr_22694_22749[(1)] = (16));

} else {
var statearr_22695_22750 = state_22674__$1;
(statearr_22695_22750[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (22))){
var inst_22634 = (state_22674[(9)]);
var inst_22633 = (state_22674[(14)]);
var inst_22632 = (state_22674[(2)]);
var inst_22633__$1 = cljs.core.nth.call(null,inst_22632,(0),null);
var inst_22634__$1 = cljs.core.nth.call(null,inst_22632,(1),null);
var inst_22635 = (inst_22633__$1 == null);
var inst_22636 = cljs.core._EQ_.call(null,inst_22634__$1,change);
var inst_22637 = ((inst_22635) || (inst_22636));
var state_22674__$1 = (function (){var statearr_22696 = state_22674;
(statearr_22696[(9)] = inst_22634__$1);

(statearr_22696[(14)] = inst_22633__$1);

return statearr_22696;
})();
if(cljs.core.truth_(inst_22637)){
var statearr_22697_22751 = state_22674__$1;
(statearr_22697_22751[(1)] = (23));

} else {
var statearr_22698_22752 = state_22674__$1;
(statearr_22698_22752[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (36))){
var inst_22624 = (state_22674[(12)]);
var inst_22601 = inst_22624;
var state_22674__$1 = (function (){var statearr_22699 = state_22674;
(statearr_22699[(7)] = inst_22601);

return statearr_22699;
})();
var statearr_22700_22753 = state_22674__$1;
(statearr_22700_22753[(2)] = null);

(statearr_22700_22753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (29))){
var inst_22648 = (state_22674[(10)]);
var state_22674__$1 = state_22674;
var statearr_22701_22754 = state_22674__$1;
(statearr_22701_22754[(2)] = inst_22648);

(statearr_22701_22754[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (6))){
var state_22674__$1 = state_22674;
var statearr_22702_22755 = state_22674__$1;
(statearr_22702_22755[(2)] = false);

(statearr_22702_22755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (28))){
var inst_22644 = (state_22674[(2)]);
var inst_22645 = calc_state.call(null);
var inst_22601 = inst_22645;
var state_22674__$1 = (function (){var statearr_22703 = state_22674;
(statearr_22703[(7)] = inst_22601);

(statearr_22703[(15)] = inst_22644);

return statearr_22703;
})();
var statearr_22704_22756 = state_22674__$1;
(statearr_22704_22756[(2)] = null);

(statearr_22704_22756[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (25))){
var inst_22670 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22705_22757 = state_22674__$1;
(statearr_22705_22757[(2)] = inst_22670);

(statearr_22705_22757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (34))){
var inst_22668 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22706_22758 = state_22674__$1;
(statearr_22706_22758[(2)] = inst_22668);

(statearr_22706_22758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (17))){
var state_22674__$1 = state_22674;
var statearr_22707_22759 = state_22674__$1;
(statearr_22707_22759[(2)] = false);

(statearr_22707_22759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (3))){
var state_22674__$1 = state_22674;
var statearr_22708_22760 = state_22674__$1;
(statearr_22708_22760[(2)] = false);

(statearr_22708_22760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (12))){
var inst_22672 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22674__$1,inst_22672);
} else {
if((state_val_22675 === (2))){
var inst_22576 = (state_22674[(8)]);
var inst_22581 = inst_22576.cljs$lang$protocol_mask$partition0$;
var inst_22582 = (inst_22581 & (64));
var inst_22583 = inst_22576.cljs$core$ISeq$;
var inst_22584 = (cljs.core.PROTOCOL_SENTINEL === inst_22583);
var inst_22585 = ((inst_22582) || (inst_22584));
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22585)){
var statearr_22709_22761 = state_22674__$1;
(statearr_22709_22761[(1)] = (5));

} else {
var statearr_22710_22762 = state_22674__$1;
(statearr_22710_22762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (23))){
var inst_22633 = (state_22674[(14)]);
var inst_22639 = (inst_22633 == null);
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22639)){
var statearr_22711_22763 = state_22674__$1;
(statearr_22711_22763[(1)] = (26));

} else {
var statearr_22712_22764 = state_22674__$1;
(statearr_22712_22764[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (35))){
var inst_22659 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22659)){
var statearr_22713_22765 = state_22674__$1;
(statearr_22713_22765[(1)] = (36));

} else {
var statearr_22714_22766 = state_22674__$1;
(statearr_22714_22766[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (19))){
var inst_22601 = (state_22674[(7)]);
var inst_22621 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22601);
var state_22674__$1 = state_22674;
var statearr_22715_22767 = state_22674__$1;
(statearr_22715_22767[(2)] = inst_22621);

(statearr_22715_22767[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (11))){
var inst_22601 = (state_22674[(7)]);
var inst_22605 = (inst_22601 == null);
var inst_22606 = cljs.core.not.call(null,inst_22605);
var state_22674__$1 = state_22674;
if(inst_22606){
var statearr_22716_22768 = state_22674__$1;
(statearr_22716_22768[(1)] = (13));

} else {
var statearr_22717_22769 = state_22674__$1;
(statearr_22717_22769[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (9))){
var inst_22576 = (state_22674[(8)]);
var state_22674__$1 = state_22674;
var statearr_22718_22770 = state_22674__$1;
(statearr_22718_22770[(2)] = inst_22576);

(statearr_22718_22770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (5))){
var state_22674__$1 = state_22674;
var statearr_22719_22771 = state_22674__$1;
(statearr_22719_22771[(2)] = true);

(statearr_22719_22771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (14))){
var state_22674__$1 = state_22674;
var statearr_22720_22772 = state_22674__$1;
(statearr_22720_22772[(2)] = false);

(statearr_22720_22772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (26))){
var inst_22634 = (state_22674[(9)]);
var inst_22641 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22634);
var state_22674__$1 = state_22674;
var statearr_22721_22773 = state_22674__$1;
(statearr_22721_22773[(2)] = inst_22641);

(statearr_22721_22773[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (16))){
var state_22674__$1 = state_22674;
var statearr_22722_22774 = state_22674__$1;
(statearr_22722_22774[(2)] = true);

(statearr_22722_22774[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (38))){
var inst_22664 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22723_22775 = state_22674__$1;
(statearr_22723_22775[(2)] = inst_22664);

(statearr_22723_22775[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (30))){
var inst_22634 = (state_22674[(9)]);
var inst_22626 = (state_22674[(13)]);
var inst_22625 = (state_22674[(11)]);
var inst_22651 = cljs.core.empty_QMARK_.call(null,inst_22625);
var inst_22652 = inst_22626.call(null,inst_22634);
var inst_22653 = cljs.core.not.call(null,inst_22652);
var inst_22654 = ((inst_22651) && (inst_22653));
var state_22674__$1 = state_22674;
var statearr_22724_22776 = state_22674__$1;
(statearr_22724_22776[(2)] = inst_22654);

(statearr_22724_22776[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (10))){
var inst_22576 = (state_22674[(8)]);
var inst_22597 = (state_22674[(2)]);
var inst_22598 = cljs.core.get.call(null,inst_22597,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22599 = cljs.core.get.call(null,inst_22597,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22600 = cljs.core.get.call(null,inst_22597,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22601 = inst_22576;
var state_22674__$1 = (function (){var statearr_22725 = state_22674;
(statearr_22725[(16)] = inst_22599);

(statearr_22725[(17)] = inst_22598);

(statearr_22725[(7)] = inst_22601);

(statearr_22725[(18)] = inst_22600);

return statearr_22725;
})();
var statearr_22726_22777 = state_22674__$1;
(statearr_22726_22777[(2)] = null);

(statearr_22726_22777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (18))){
var inst_22616 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22727_22778 = state_22674__$1;
(statearr_22727_22778[(2)] = inst_22616);

(statearr_22727_22778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (37))){
var state_22674__$1 = state_22674;
var statearr_22728_22779 = state_22674__$1;
(statearr_22728_22779[(2)] = null);

(statearr_22728_22779[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (8))){
var inst_22576 = (state_22674[(8)]);
var inst_22594 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22576);
var state_22674__$1 = state_22674;
var statearr_22729_22780 = state_22674__$1;
(statearr_22729_22780[(2)] = inst_22594);

(statearr_22729_22780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__21689__auto___22734,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21600__auto__,c__21689__auto___22734,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21601__auto__ = null;
var cljs$core$async$mix_$_state_machine__21601__auto____0 = (function (){
var statearr_22730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22730[(0)] = cljs$core$async$mix_$_state_machine__21601__auto__);

(statearr_22730[(1)] = (1));

return statearr_22730;
});
var cljs$core$async$mix_$_state_machine__21601__auto____1 = (function (state_22674){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_22674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e22731){if((e22731 instanceof Object)){
var ex__21604__auto__ = e22731;
var statearr_22732_22781 = state_22674;
(statearr_22732_22781[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22782 = state_22674;
state_22674 = G__22782;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21601__auto__ = function(state_22674){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21601__auto____1.call(this,state_22674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21601__auto____0;
cljs$core$async$mix_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21601__auto____1;
return cljs$core$async$mix_$_state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___22734,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21691__auto__ = (function (){var statearr_22733 = f__21690__auto__.call(null);
(statearr_22733[(6)] = c__21689__auto___22734);

return statearr_22733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___22734,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__22784 = arguments.length;
switch (G__22784) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__22788 = arguments.length;
switch (G__22788) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__22786_SHARP_){
if(cljs.core.truth_(p1__22786_SHARP_.call(null,topic))){
return p1__22786_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22786_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22789 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22790){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22790 = meta22790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22791,meta22790__$1){
var self__ = this;
var _22791__$1 = this;
return (new cljs.core.async.t_cljs$core$async22789(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22790__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22791){
var self__ = this;
var _22791__$1 = this;
return self__.meta22790;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22789.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22789.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22789.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22789.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22789.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22789.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22789.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22790","meta22790",-1404671750,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22789";

cljs.core.async.t_cljs$core$async22789.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async22789");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22789.
 */
cljs.core.async.__GT_t_cljs$core$async22789 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22789(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22790){
return (new cljs.core.async.t_cljs$core$async22789(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22790));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22789(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21689__auto___22909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___22909,mults,ensure_mult,p){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___22909,mults,ensure_mult,p){
return (function (state_22863){
var state_val_22864 = (state_22863[(1)]);
if((state_val_22864 === (7))){
var inst_22859 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
var statearr_22865_22910 = state_22863__$1;
(statearr_22865_22910[(2)] = inst_22859);

(statearr_22865_22910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (20))){
var state_22863__$1 = state_22863;
var statearr_22866_22911 = state_22863__$1;
(statearr_22866_22911[(2)] = null);

(statearr_22866_22911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (1))){
var state_22863__$1 = state_22863;
var statearr_22867_22912 = state_22863__$1;
(statearr_22867_22912[(2)] = null);

(statearr_22867_22912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (24))){
var inst_22842 = (state_22863[(7)]);
var inst_22851 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22842);
var state_22863__$1 = state_22863;
var statearr_22868_22913 = state_22863__$1;
(statearr_22868_22913[(2)] = inst_22851);

(statearr_22868_22913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (4))){
var inst_22794 = (state_22863[(8)]);
var inst_22794__$1 = (state_22863[(2)]);
var inst_22795 = (inst_22794__$1 == null);
var state_22863__$1 = (function (){var statearr_22869 = state_22863;
(statearr_22869[(8)] = inst_22794__$1);

return statearr_22869;
})();
if(cljs.core.truth_(inst_22795)){
var statearr_22870_22914 = state_22863__$1;
(statearr_22870_22914[(1)] = (5));

} else {
var statearr_22871_22915 = state_22863__$1;
(statearr_22871_22915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (15))){
var inst_22836 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
var statearr_22872_22916 = state_22863__$1;
(statearr_22872_22916[(2)] = inst_22836);

(statearr_22872_22916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (21))){
var inst_22856 = (state_22863[(2)]);
var state_22863__$1 = (function (){var statearr_22873 = state_22863;
(statearr_22873[(9)] = inst_22856);

return statearr_22873;
})();
var statearr_22874_22917 = state_22863__$1;
(statearr_22874_22917[(2)] = null);

(statearr_22874_22917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (13))){
var inst_22818 = (state_22863[(10)]);
var inst_22820 = cljs.core.chunked_seq_QMARK_.call(null,inst_22818);
var state_22863__$1 = state_22863;
if(inst_22820){
var statearr_22875_22918 = state_22863__$1;
(statearr_22875_22918[(1)] = (16));

} else {
var statearr_22876_22919 = state_22863__$1;
(statearr_22876_22919[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (22))){
var inst_22848 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
if(cljs.core.truth_(inst_22848)){
var statearr_22877_22920 = state_22863__$1;
(statearr_22877_22920[(1)] = (23));

} else {
var statearr_22878_22921 = state_22863__$1;
(statearr_22878_22921[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (6))){
var inst_22842 = (state_22863[(7)]);
var inst_22794 = (state_22863[(8)]);
var inst_22844 = (state_22863[(11)]);
var inst_22842__$1 = topic_fn.call(null,inst_22794);
var inst_22843 = cljs.core.deref.call(null,mults);
var inst_22844__$1 = cljs.core.get.call(null,inst_22843,inst_22842__$1);
var state_22863__$1 = (function (){var statearr_22879 = state_22863;
(statearr_22879[(7)] = inst_22842__$1);

(statearr_22879[(11)] = inst_22844__$1);

return statearr_22879;
})();
if(cljs.core.truth_(inst_22844__$1)){
var statearr_22880_22922 = state_22863__$1;
(statearr_22880_22922[(1)] = (19));

} else {
var statearr_22881_22923 = state_22863__$1;
(statearr_22881_22923[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (25))){
var inst_22853 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
var statearr_22882_22924 = state_22863__$1;
(statearr_22882_22924[(2)] = inst_22853);

(statearr_22882_22924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (17))){
var inst_22818 = (state_22863[(10)]);
var inst_22827 = cljs.core.first.call(null,inst_22818);
var inst_22828 = cljs.core.async.muxch_STAR_.call(null,inst_22827);
var inst_22829 = cljs.core.async.close_BANG_.call(null,inst_22828);
var inst_22830 = cljs.core.next.call(null,inst_22818);
var inst_22804 = inst_22830;
var inst_22805 = null;
var inst_22806 = (0);
var inst_22807 = (0);
var state_22863__$1 = (function (){var statearr_22883 = state_22863;
(statearr_22883[(12)] = inst_22804);

(statearr_22883[(13)] = inst_22805);

(statearr_22883[(14)] = inst_22806);

(statearr_22883[(15)] = inst_22807);

(statearr_22883[(16)] = inst_22829);

return statearr_22883;
})();
var statearr_22884_22925 = state_22863__$1;
(statearr_22884_22925[(2)] = null);

(statearr_22884_22925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (3))){
var inst_22861 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22863__$1,inst_22861);
} else {
if((state_val_22864 === (12))){
var inst_22838 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
var statearr_22885_22926 = state_22863__$1;
(statearr_22885_22926[(2)] = inst_22838);

(statearr_22885_22926[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (2))){
var state_22863__$1 = state_22863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22863__$1,(4),ch);
} else {
if((state_val_22864 === (23))){
var state_22863__$1 = state_22863;
var statearr_22886_22927 = state_22863__$1;
(statearr_22886_22927[(2)] = null);

(statearr_22886_22927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (19))){
var inst_22794 = (state_22863[(8)]);
var inst_22844 = (state_22863[(11)]);
var inst_22846 = cljs.core.async.muxch_STAR_.call(null,inst_22844);
var state_22863__$1 = state_22863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22863__$1,(22),inst_22846,inst_22794);
} else {
if((state_val_22864 === (11))){
var inst_22804 = (state_22863[(12)]);
var inst_22818 = (state_22863[(10)]);
var inst_22818__$1 = cljs.core.seq.call(null,inst_22804);
var state_22863__$1 = (function (){var statearr_22887 = state_22863;
(statearr_22887[(10)] = inst_22818__$1);

return statearr_22887;
})();
if(inst_22818__$1){
var statearr_22888_22928 = state_22863__$1;
(statearr_22888_22928[(1)] = (13));

} else {
var statearr_22889_22929 = state_22863__$1;
(statearr_22889_22929[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (9))){
var inst_22840 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
var statearr_22890_22930 = state_22863__$1;
(statearr_22890_22930[(2)] = inst_22840);

(statearr_22890_22930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (5))){
var inst_22801 = cljs.core.deref.call(null,mults);
var inst_22802 = cljs.core.vals.call(null,inst_22801);
var inst_22803 = cljs.core.seq.call(null,inst_22802);
var inst_22804 = inst_22803;
var inst_22805 = null;
var inst_22806 = (0);
var inst_22807 = (0);
var state_22863__$1 = (function (){var statearr_22891 = state_22863;
(statearr_22891[(12)] = inst_22804);

(statearr_22891[(13)] = inst_22805);

(statearr_22891[(14)] = inst_22806);

(statearr_22891[(15)] = inst_22807);

return statearr_22891;
})();
var statearr_22892_22931 = state_22863__$1;
(statearr_22892_22931[(2)] = null);

(statearr_22892_22931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (14))){
var state_22863__$1 = state_22863;
var statearr_22896_22932 = state_22863__$1;
(statearr_22896_22932[(2)] = null);

(statearr_22896_22932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (16))){
var inst_22818 = (state_22863[(10)]);
var inst_22822 = cljs.core.chunk_first.call(null,inst_22818);
var inst_22823 = cljs.core.chunk_rest.call(null,inst_22818);
var inst_22824 = cljs.core.count.call(null,inst_22822);
var inst_22804 = inst_22823;
var inst_22805 = inst_22822;
var inst_22806 = inst_22824;
var inst_22807 = (0);
var state_22863__$1 = (function (){var statearr_22897 = state_22863;
(statearr_22897[(12)] = inst_22804);

(statearr_22897[(13)] = inst_22805);

(statearr_22897[(14)] = inst_22806);

(statearr_22897[(15)] = inst_22807);

return statearr_22897;
})();
var statearr_22898_22933 = state_22863__$1;
(statearr_22898_22933[(2)] = null);

(statearr_22898_22933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (10))){
var inst_22804 = (state_22863[(12)]);
var inst_22805 = (state_22863[(13)]);
var inst_22806 = (state_22863[(14)]);
var inst_22807 = (state_22863[(15)]);
var inst_22812 = cljs.core._nth.call(null,inst_22805,inst_22807);
var inst_22813 = cljs.core.async.muxch_STAR_.call(null,inst_22812);
var inst_22814 = cljs.core.async.close_BANG_.call(null,inst_22813);
var inst_22815 = (inst_22807 + (1));
var tmp22893 = inst_22804;
var tmp22894 = inst_22805;
var tmp22895 = inst_22806;
var inst_22804__$1 = tmp22893;
var inst_22805__$1 = tmp22894;
var inst_22806__$1 = tmp22895;
var inst_22807__$1 = inst_22815;
var state_22863__$1 = (function (){var statearr_22899 = state_22863;
(statearr_22899[(12)] = inst_22804__$1);

(statearr_22899[(13)] = inst_22805__$1);

(statearr_22899[(14)] = inst_22806__$1);

(statearr_22899[(15)] = inst_22807__$1);

(statearr_22899[(17)] = inst_22814);

return statearr_22899;
})();
var statearr_22900_22934 = state_22863__$1;
(statearr_22900_22934[(2)] = null);

(statearr_22900_22934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (18))){
var inst_22833 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
var statearr_22901_22935 = state_22863__$1;
(statearr_22901_22935[(2)] = inst_22833);

(statearr_22901_22935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (8))){
var inst_22806 = (state_22863[(14)]);
var inst_22807 = (state_22863[(15)]);
var inst_22809 = (inst_22807 < inst_22806);
var inst_22810 = inst_22809;
var state_22863__$1 = state_22863;
if(cljs.core.truth_(inst_22810)){
var statearr_22902_22936 = state_22863__$1;
(statearr_22902_22936[(1)] = (10));

} else {
var statearr_22903_22937 = state_22863__$1;
(statearr_22903_22937[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__21689__auto___22909,mults,ensure_mult,p))
;
return ((function (switch__21600__auto__,c__21689__auto___22909,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21601__auto__ = null;
var cljs$core$async$state_machine__21601__auto____0 = (function (){
var statearr_22904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22904[(0)] = cljs$core$async$state_machine__21601__auto__);

(statearr_22904[(1)] = (1));

return statearr_22904;
});
var cljs$core$async$state_machine__21601__auto____1 = (function (state_22863){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_22863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e22905){if((e22905 instanceof Object)){
var ex__21604__auto__ = e22905;
var statearr_22906_22938 = state_22863;
(statearr_22906_22938[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22939 = state_22863;
state_22863 = G__22939;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$state_machine__21601__auto__ = function(state_22863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21601__auto____1.call(this,state_22863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21601__auto____0;
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21601__auto____1;
return cljs$core$async$state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___22909,mults,ensure_mult,p))
})();
var state__21691__auto__ = (function (){var statearr_22907 = f__21690__auto__.call(null);
(statearr_22907[(6)] = c__21689__auto___22909);

return statearr_22907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___22909,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__22941 = arguments.length;
switch (G__22941) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__22944 = arguments.length;
switch (G__22944) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__22947 = arguments.length;
switch (G__22947) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21689__auto___23014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___23014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___23014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22986){
var state_val_22987 = (state_22986[(1)]);
if((state_val_22987 === (7))){
var state_22986__$1 = state_22986;
var statearr_22988_23015 = state_22986__$1;
(statearr_22988_23015[(2)] = null);

(statearr_22988_23015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (1))){
var state_22986__$1 = state_22986;
var statearr_22989_23016 = state_22986__$1;
(statearr_22989_23016[(2)] = null);

(statearr_22989_23016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (4))){
var inst_22950 = (state_22986[(7)]);
var inst_22952 = (inst_22950 < cnt);
var state_22986__$1 = state_22986;
if(cljs.core.truth_(inst_22952)){
var statearr_22990_23017 = state_22986__$1;
(statearr_22990_23017[(1)] = (6));

} else {
var statearr_22991_23018 = state_22986__$1;
(statearr_22991_23018[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (15))){
var inst_22982 = (state_22986[(2)]);
var state_22986__$1 = state_22986;
var statearr_22992_23019 = state_22986__$1;
(statearr_22992_23019[(2)] = inst_22982);

(statearr_22992_23019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (13))){
var inst_22975 = cljs.core.async.close_BANG_.call(null,out);
var state_22986__$1 = state_22986;
var statearr_22993_23020 = state_22986__$1;
(statearr_22993_23020[(2)] = inst_22975);

(statearr_22993_23020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (6))){
var state_22986__$1 = state_22986;
var statearr_22994_23021 = state_22986__$1;
(statearr_22994_23021[(2)] = null);

(statearr_22994_23021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (3))){
var inst_22984 = (state_22986[(2)]);
var state_22986__$1 = state_22986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22986__$1,inst_22984);
} else {
if((state_val_22987 === (12))){
var inst_22972 = (state_22986[(8)]);
var inst_22972__$1 = (state_22986[(2)]);
var inst_22973 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22972__$1);
var state_22986__$1 = (function (){var statearr_22995 = state_22986;
(statearr_22995[(8)] = inst_22972__$1);

return statearr_22995;
})();
if(cljs.core.truth_(inst_22973)){
var statearr_22996_23022 = state_22986__$1;
(statearr_22996_23022[(1)] = (13));

} else {
var statearr_22997_23023 = state_22986__$1;
(statearr_22997_23023[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (2))){
var inst_22949 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22950 = (0);
var state_22986__$1 = (function (){var statearr_22998 = state_22986;
(statearr_22998[(9)] = inst_22949);

(statearr_22998[(7)] = inst_22950);

return statearr_22998;
})();
var statearr_22999_23024 = state_22986__$1;
(statearr_22999_23024[(2)] = null);

(statearr_22999_23024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (11))){
var inst_22950 = (state_22986[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22986,(10),Object,null,(9));
var inst_22959 = chs__$1.call(null,inst_22950);
var inst_22960 = done.call(null,inst_22950);
var inst_22961 = cljs.core.async.take_BANG_.call(null,inst_22959,inst_22960);
var state_22986__$1 = state_22986;
var statearr_23000_23025 = state_22986__$1;
(statearr_23000_23025[(2)] = inst_22961);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22986__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (9))){
var inst_22950 = (state_22986[(7)]);
var inst_22963 = (state_22986[(2)]);
var inst_22964 = (inst_22950 + (1));
var inst_22950__$1 = inst_22964;
var state_22986__$1 = (function (){var statearr_23001 = state_22986;
(statearr_23001[(10)] = inst_22963);

(statearr_23001[(7)] = inst_22950__$1);

return statearr_23001;
})();
var statearr_23002_23026 = state_22986__$1;
(statearr_23002_23026[(2)] = null);

(statearr_23002_23026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (5))){
var inst_22970 = (state_22986[(2)]);
var state_22986__$1 = (function (){var statearr_23003 = state_22986;
(statearr_23003[(11)] = inst_22970);

return statearr_23003;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22986__$1,(12),dchan);
} else {
if((state_val_22987 === (14))){
var inst_22972 = (state_22986[(8)]);
var inst_22977 = cljs.core.apply.call(null,f,inst_22972);
var state_22986__$1 = state_22986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22986__$1,(16),out,inst_22977);
} else {
if((state_val_22987 === (16))){
var inst_22979 = (state_22986[(2)]);
var state_22986__$1 = (function (){var statearr_23004 = state_22986;
(statearr_23004[(12)] = inst_22979);

return statearr_23004;
})();
var statearr_23005_23027 = state_22986__$1;
(statearr_23005_23027[(2)] = null);

(statearr_23005_23027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (10))){
var inst_22954 = (state_22986[(2)]);
var inst_22955 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22986__$1 = (function (){var statearr_23006 = state_22986;
(statearr_23006[(13)] = inst_22954);

return statearr_23006;
})();
var statearr_23007_23028 = state_22986__$1;
(statearr_23007_23028[(2)] = inst_22955);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22986__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (8))){
var inst_22968 = (state_22986[(2)]);
var state_22986__$1 = state_22986;
var statearr_23008_23029 = state_22986__$1;
(statearr_23008_23029[(2)] = inst_22968);

(statearr_23008_23029[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__21689__auto___23014,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21600__auto__,c__21689__auto___23014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21601__auto__ = null;
var cljs$core$async$state_machine__21601__auto____0 = (function (){
var statearr_23009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23009[(0)] = cljs$core$async$state_machine__21601__auto__);

(statearr_23009[(1)] = (1));

return statearr_23009;
});
var cljs$core$async$state_machine__21601__auto____1 = (function (state_22986){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_22986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e23010){if((e23010 instanceof Object)){
var ex__21604__auto__ = e23010;
var statearr_23011_23030 = state_22986;
(statearr_23011_23030[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23031 = state_22986;
state_22986 = G__23031;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$state_machine__21601__auto__ = function(state_22986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21601__auto____1.call(this,state_22986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21601__auto____0;
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21601__auto____1;
return cljs$core$async$state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___23014,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21691__auto__ = (function (){var statearr_23012 = f__21690__auto__.call(null);
(statearr_23012[(6)] = c__21689__auto___23014);

return statearr_23012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___23014,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__23034 = arguments.length;
switch (G__23034) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21689__auto___23088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___23088,out){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___23088,out){
return (function (state_23066){
var state_val_23067 = (state_23066[(1)]);
if((state_val_23067 === (7))){
var inst_23045 = (state_23066[(7)]);
var inst_23046 = (state_23066[(8)]);
var inst_23045__$1 = (state_23066[(2)]);
var inst_23046__$1 = cljs.core.nth.call(null,inst_23045__$1,(0),null);
var inst_23047 = cljs.core.nth.call(null,inst_23045__$1,(1),null);
var inst_23048 = (inst_23046__$1 == null);
var state_23066__$1 = (function (){var statearr_23068 = state_23066;
(statearr_23068[(7)] = inst_23045__$1);

(statearr_23068[(9)] = inst_23047);

(statearr_23068[(8)] = inst_23046__$1);

return statearr_23068;
})();
if(cljs.core.truth_(inst_23048)){
var statearr_23069_23089 = state_23066__$1;
(statearr_23069_23089[(1)] = (8));

} else {
var statearr_23070_23090 = state_23066__$1;
(statearr_23070_23090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23067 === (1))){
var inst_23035 = cljs.core.vec.call(null,chs);
var inst_23036 = inst_23035;
var state_23066__$1 = (function (){var statearr_23071 = state_23066;
(statearr_23071[(10)] = inst_23036);

return statearr_23071;
})();
var statearr_23072_23091 = state_23066__$1;
(statearr_23072_23091[(2)] = null);

(statearr_23072_23091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23067 === (4))){
var inst_23036 = (state_23066[(10)]);
var state_23066__$1 = state_23066;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23066__$1,(7),inst_23036);
} else {
if((state_val_23067 === (6))){
var inst_23062 = (state_23066[(2)]);
var state_23066__$1 = state_23066;
var statearr_23073_23092 = state_23066__$1;
(statearr_23073_23092[(2)] = inst_23062);

(statearr_23073_23092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23067 === (3))){
var inst_23064 = (state_23066[(2)]);
var state_23066__$1 = state_23066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23066__$1,inst_23064);
} else {
if((state_val_23067 === (2))){
var inst_23036 = (state_23066[(10)]);
var inst_23038 = cljs.core.count.call(null,inst_23036);
var inst_23039 = (inst_23038 > (0));
var state_23066__$1 = state_23066;
if(cljs.core.truth_(inst_23039)){
var statearr_23075_23093 = state_23066__$1;
(statearr_23075_23093[(1)] = (4));

} else {
var statearr_23076_23094 = state_23066__$1;
(statearr_23076_23094[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23067 === (11))){
var inst_23036 = (state_23066[(10)]);
var inst_23055 = (state_23066[(2)]);
var tmp23074 = inst_23036;
var inst_23036__$1 = tmp23074;
var state_23066__$1 = (function (){var statearr_23077 = state_23066;
(statearr_23077[(11)] = inst_23055);

(statearr_23077[(10)] = inst_23036__$1);

return statearr_23077;
})();
var statearr_23078_23095 = state_23066__$1;
(statearr_23078_23095[(2)] = null);

(statearr_23078_23095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23067 === (9))){
var inst_23046 = (state_23066[(8)]);
var state_23066__$1 = state_23066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23066__$1,(11),out,inst_23046);
} else {
if((state_val_23067 === (5))){
var inst_23060 = cljs.core.async.close_BANG_.call(null,out);
var state_23066__$1 = state_23066;
var statearr_23079_23096 = state_23066__$1;
(statearr_23079_23096[(2)] = inst_23060);

(statearr_23079_23096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23067 === (10))){
var inst_23058 = (state_23066[(2)]);
var state_23066__$1 = state_23066;
var statearr_23080_23097 = state_23066__$1;
(statearr_23080_23097[(2)] = inst_23058);

(statearr_23080_23097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23067 === (8))){
var inst_23045 = (state_23066[(7)]);
var inst_23047 = (state_23066[(9)]);
var inst_23036 = (state_23066[(10)]);
var inst_23046 = (state_23066[(8)]);
var inst_23050 = (function (){var cs = inst_23036;
var vec__23041 = inst_23045;
var v = inst_23046;
var c = inst_23047;
return ((function (cs,vec__23041,v,c,inst_23045,inst_23047,inst_23036,inst_23046,state_val_23067,c__21689__auto___23088,out){
return (function (p1__23032_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23032_SHARP_);
});
;})(cs,vec__23041,v,c,inst_23045,inst_23047,inst_23036,inst_23046,state_val_23067,c__21689__auto___23088,out))
})();
var inst_23051 = cljs.core.filterv.call(null,inst_23050,inst_23036);
var inst_23036__$1 = inst_23051;
var state_23066__$1 = (function (){var statearr_23081 = state_23066;
(statearr_23081[(10)] = inst_23036__$1);

return statearr_23081;
})();
var statearr_23082_23098 = state_23066__$1;
(statearr_23082_23098[(2)] = null);

(statearr_23082_23098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__21689__auto___23088,out))
;
return ((function (switch__21600__auto__,c__21689__auto___23088,out){
return (function() {
var cljs$core$async$state_machine__21601__auto__ = null;
var cljs$core$async$state_machine__21601__auto____0 = (function (){
var statearr_23083 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23083[(0)] = cljs$core$async$state_machine__21601__auto__);

(statearr_23083[(1)] = (1));

return statearr_23083;
});
var cljs$core$async$state_machine__21601__auto____1 = (function (state_23066){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_23066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e23084){if((e23084 instanceof Object)){
var ex__21604__auto__ = e23084;
var statearr_23085_23099 = state_23066;
(statearr_23085_23099[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23100 = state_23066;
state_23066 = G__23100;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$state_machine__21601__auto__ = function(state_23066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21601__auto____1.call(this,state_23066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21601__auto____0;
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21601__auto____1;
return cljs$core$async$state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___23088,out))
})();
var state__21691__auto__ = (function (){var statearr_23086 = f__21690__auto__.call(null);
(statearr_23086[(6)] = c__21689__auto___23088);

return statearr_23086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___23088,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__23102 = arguments.length;
switch (G__23102) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21689__auto___23147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___23147,out){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___23147,out){
return (function (state_23126){
var state_val_23127 = (state_23126[(1)]);
if((state_val_23127 === (7))){
var inst_23108 = (state_23126[(7)]);
var inst_23108__$1 = (state_23126[(2)]);
var inst_23109 = (inst_23108__$1 == null);
var inst_23110 = cljs.core.not.call(null,inst_23109);
var state_23126__$1 = (function (){var statearr_23128 = state_23126;
(statearr_23128[(7)] = inst_23108__$1);

return statearr_23128;
})();
if(inst_23110){
var statearr_23129_23148 = state_23126__$1;
(statearr_23129_23148[(1)] = (8));

} else {
var statearr_23130_23149 = state_23126__$1;
(statearr_23130_23149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (1))){
var inst_23103 = (0);
var state_23126__$1 = (function (){var statearr_23131 = state_23126;
(statearr_23131[(8)] = inst_23103);

return statearr_23131;
})();
var statearr_23132_23150 = state_23126__$1;
(statearr_23132_23150[(2)] = null);

(statearr_23132_23150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (4))){
var state_23126__$1 = state_23126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23126__$1,(7),ch);
} else {
if((state_val_23127 === (6))){
var inst_23121 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23133_23151 = state_23126__$1;
(statearr_23133_23151[(2)] = inst_23121);

(statearr_23133_23151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (3))){
var inst_23123 = (state_23126[(2)]);
var inst_23124 = cljs.core.async.close_BANG_.call(null,out);
var state_23126__$1 = (function (){var statearr_23134 = state_23126;
(statearr_23134[(9)] = inst_23123);

return statearr_23134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23126__$1,inst_23124);
} else {
if((state_val_23127 === (2))){
var inst_23103 = (state_23126[(8)]);
var inst_23105 = (inst_23103 < n);
var state_23126__$1 = state_23126;
if(cljs.core.truth_(inst_23105)){
var statearr_23135_23152 = state_23126__$1;
(statearr_23135_23152[(1)] = (4));

} else {
var statearr_23136_23153 = state_23126__$1;
(statearr_23136_23153[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (11))){
var inst_23103 = (state_23126[(8)]);
var inst_23113 = (state_23126[(2)]);
var inst_23114 = (inst_23103 + (1));
var inst_23103__$1 = inst_23114;
var state_23126__$1 = (function (){var statearr_23137 = state_23126;
(statearr_23137[(10)] = inst_23113);

(statearr_23137[(8)] = inst_23103__$1);

return statearr_23137;
})();
var statearr_23138_23154 = state_23126__$1;
(statearr_23138_23154[(2)] = null);

(statearr_23138_23154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (9))){
var state_23126__$1 = state_23126;
var statearr_23139_23155 = state_23126__$1;
(statearr_23139_23155[(2)] = null);

(statearr_23139_23155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (5))){
var state_23126__$1 = state_23126;
var statearr_23140_23156 = state_23126__$1;
(statearr_23140_23156[(2)] = null);

(statearr_23140_23156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (10))){
var inst_23118 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23141_23157 = state_23126__$1;
(statearr_23141_23157[(2)] = inst_23118);

(statearr_23141_23157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (8))){
var inst_23108 = (state_23126[(7)]);
var state_23126__$1 = state_23126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23126__$1,(11),out,inst_23108);
} else {
return null;
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
});})(c__21689__auto___23147,out))
;
return ((function (switch__21600__auto__,c__21689__auto___23147,out){
return (function() {
var cljs$core$async$state_machine__21601__auto__ = null;
var cljs$core$async$state_machine__21601__auto____0 = (function (){
var statearr_23142 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23142[(0)] = cljs$core$async$state_machine__21601__auto__);

(statearr_23142[(1)] = (1));

return statearr_23142;
});
var cljs$core$async$state_machine__21601__auto____1 = (function (state_23126){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_23126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e23143){if((e23143 instanceof Object)){
var ex__21604__auto__ = e23143;
var statearr_23144_23158 = state_23126;
(statearr_23144_23158[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23159 = state_23126;
state_23126 = G__23159;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$state_machine__21601__auto__ = function(state_23126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21601__auto____1.call(this,state_23126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21601__auto____0;
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21601__auto____1;
return cljs$core$async$state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___23147,out))
})();
var state__21691__auto__ = (function (){var statearr_23145 = f__21690__auto__.call(null);
(statearr_23145[(6)] = c__21689__auto___23147);

return statearr_23145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___23147,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23161 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23161 = (function (f,ch,meta23162){
this.f = f;
this.ch = ch;
this.meta23162 = meta23162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23163,meta23162__$1){
var self__ = this;
var _23163__$1 = this;
return (new cljs.core.async.t_cljs$core$async23161(self__.f,self__.ch,meta23162__$1));
});

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23163){
var self__ = this;
var _23163__$1 = this;
return self__.meta23162;
});

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23164 = (function (f,ch,meta23162,_,fn1,meta23165){
this.f = f;
this.ch = ch;
this.meta23162 = meta23162;
this._ = _;
this.fn1 = fn1;
this.meta23165 = meta23165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23166,meta23165__$1){
var self__ = this;
var _23166__$1 = this;
return (new cljs.core.async.t_cljs$core$async23164(self__.f,self__.ch,self__.meta23162,self__._,self__.fn1,meta23165__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23166){
var self__ = this;
var _23166__$1 = this;
return self__.meta23165;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23164.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23164.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23160_SHARP_){
return f1.call(null,(((p1__23160_SHARP_ == null))?null:self__.f.call(null,p1__23160_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23164.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23162","meta23162",1365527414,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23161","cljs.core.async/t_cljs$core$async23161",273950111,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23165","meta23165",-781079131,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23164";

cljs.core.async.t_cljs$core$async23164.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23164");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23164.
 */
cljs.core.async.__GT_t_cljs$core$async23164 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23164(f__$1,ch__$1,meta23162__$1,___$2,fn1__$1,meta23165){
return (new cljs.core.async.t_cljs$core$async23164(f__$1,ch__$1,meta23162__$1,___$2,fn1__$1,meta23165));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23164(self__.f,self__.ch,self__.meta23162,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23162","meta23162",1365527414,null)], null);
});

cljs.core.async.t_cljs$core$async23161.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23161";

cljs.core.async.t_cljs$core$async23161.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23161");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23161.
 */
cljs.core.async.__GT_t_cljs$core$async23161 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23161(f__$1,ch__$1,meta23162){
return (new cljs.core.async.t_cljs$core$async23161(f__$1,ch__$1,meta23162));
});

}

return (new cljs.core.async.t_cljs$core$async23161(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23167 = (function (f,ch,meta23168){
this.f = f;
this.ch = ch;
this.meta23168 = meta23168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23169,meta23168__$1){
var self__ = this;
var _23169__$1 = this;
return (new cljs.core.async.t_cljs$core$async23167(self__.f,self__.ch,meta23168__$1));
});

cljs.core.async.t_cljs$core$async23167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23169){
var self__ = this;
var _23169__$1 = this;
return self__.meta23168;
});

cljs.core.async.t_cljs$core$async23167.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23167.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23167.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23168","meta23168",2110886791,null)], null);
});

cljs.core.async.t_cljs$core$async23167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23167";

cljs.core.async.t_cljs$core$async23167.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23167");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23167.
 */
cljs.core.async.__GT_t_cljs$core$async23167 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23167(f__$1,ch__$1,meta23168){
return (new cljs.core.async.t_cljs$core$async23167(f__$1,ch__$1,meta23168));
});

}

return (new cljs.core.async.t_cljs$core$async23167(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23170 = (function (p,ch,meta23171){
this.p = p;
this.ch = ch;
this.meta23171 = meta23171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23172,meta23171__$1){
var self__ = this;
var _23172__$1 = this;
return (new cljs.core.async.t_cljs$core$async23170(self__.p,self__.ch,meta23171__$1));
});

cljs.core.async.t_cljs$core$async23170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23172){
var self__ = this;
var _23172__$1 = this;
return self__.meta23171;
});

cljs.core.async.t_cljs$core$async23170.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23170.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23170.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23170.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23171","meta23171",396814222,null)], null);
});

cljs.core.async.t_cljs$core$async23170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23170";

cljs.core.async.t_cljs$core$async23170.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23170");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23170.
 */
cljs.core.async.__GT_t_cljs$core$async23170 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23170(p__$1,ch__$1,meta23171){
return (new cljs.core.async.t_cljs$core$async23170(p__$1,ch__$1,meta23171));
});

}

return (new cljs.core.async.t_cljs$core$async23170(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__23174 = arguments.length;
switch (G__23174) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21689__auto___23214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___23214,out){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___23214,out){
return (function (state_23195){
var state_val_23196 = (state_23195[(1)]);
if((state_val_23196 === (7))){
var inst_23191 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
var statearr_23197_23215 = state_23195__$1;
(statearr_23197_23215[(2)] = inst_23191);

(statearr_23197_23215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (1))){
var state_23195__$1 = state_23195;
var statearr_23198_23216 = state_23195__$1;
(statearr_23198_23216[(2)] = null);

(statearr_23198_23216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (4))){
var inst_23177 = (state_23195[(7)]);
var inst_23177__$1 = (state_23195[(2)]);
var inst_23178 = (inst_23177__$1 == null);
var state_23195__$1 = (function (){var statearr_23199 = state_23195;
(statearr_23199[(7)] = inst_23177__$1);

return statearr_23199;
})();
if(cljs.core.truth_(inst_23178)){
var statearr_23200_23217 = state_23195__$1;
(statearr_23200_23217[(1)] = (5));

} else {
var statearr_23201_23218 = state_23195__$1;
(statearr_23201_23218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (6))){
var inst_23177 = (state_23195[(7)]);
var inst_23182 = p.call(null,inst_23177);
var state_23195__$1 = state_23195;
if(cljs.core.truth_(inst_23182)){
var statearr_23202_23219 = state_23195__$1;
(statearr_23202_23219[(1)] = (8));

} else {
var statearr_23203_23220 = state_23195__$1;
(statearr_23203_23220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (3))){
var inst_23193 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23195__$1,inst_23193);
} else {
if((state_val_23196 === (2))){
var state_23195__$1 = state_23195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23195__$1,(4),ch);
} else {
if((state_val_23196 === (11))){
var inst_23185 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
var statearr_23204_23221 = state_23195__$1;
(statearr_23204_23221[(2)] = inst_23185);

(statearr_23204_23221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (9))){
var state_23195__$1 = state_23195;
var statearr_23205_23222 = state_23195__$1;
(statearr_23205_23222[(2)] = null);

(statearr_23205_23222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (5))){
var inst_23180 = cljs.core.async.close_BANG_.call(null,out);
var state_23195__$1 = state_23195;
var statearr_23206_23223 = state_23195__$1;
(statearr_23206_23223[(2)] = inst_23180);

(statearr_23206_23223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (10))){
var inst_23188 = (state_23195[(2)]);
var state_23195__$1 = (function (){var statearr_23207 = state_23195;
(statearr_23207[(8)] = inst_23188);

return statearr_23207;
})();
var statearr_23208_23224 = state_23195__$1;
(statearr_23208_23224[(2)] = null);

(statearr_23208_23224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (8))){
var inst_23177 = (state_23195[(7)]);
var state_23195__$1 = state_23195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23195__$1,(11),out,inst_23177);
} else {
return null;
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
});})(c__21689__auto___23214,out))
;
return ((function (switch__21600__auto__,c__21689__auto___23214,out){
return (function() {
var cljs$core$async$state_machine__21601__auto__ = null;
var cljs$core$async$state_machine__21601__auto____0 = (function (){
var statearr_23209 = [null,null,null,null,null,null,null,null,null];
(statearr_23209[(0)] = cljs$core$async$state_machine__21601__auto__);

(statearr_23209[(1)] = (1));

return statearr_23209;
});
var cljs$core$async$state_machine__21601__auto____1 = (function (state_23195){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_23195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e23210){if((e23210 instanceof Object)){
var ex__21604__auto__ = e23210;
var statearr_23211_23225 = state_23195;
(statearr_23211_23225[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23226 = state_23195;
state_23195 = G__23226;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$state_machine__21601__auto__ = function(state_23195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21601__auto____1.call(this,state_23195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21601__auto____0;
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21601__auto____1;
return cljs$core$async$state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___23214,out))
})();
var state__21691__auto__ = (function (){var statearr_23212 = f__21690__auto__.call(null);
(statearr_23212[(6)] = c__21689__auto___23214);

return statearr_23212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___23214,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23228 = arguments.length;
switch (G__23228) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21689__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto__){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto__){
return (function (state_23291){
var state_val_23292 = (state_23291[(1)]);
if((state_val_23292 === (7))){
var inst_23287 = (state_23291[(2)]);
var state_23291__$1 = state_23291;
var statearr_23293_23331 = state_23291__$1;
(statearr_23293_23331[(2)] = inst_23287);

(statearr_23293_23331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (20))){
var inst_23257 = (state_23291[(7)]);
var inst_23268 = (state_23291[(2)]);
var inst_23269 = cljs.core.next.call(null,inst_23257);
var inst_23243 = inst_23269;
var inst_23244 = null;
var inst_23245 = (0);
var inst_23246 = (0);
var state_23291__$1 = (function (){var statearr_23294 = state_23291;
(statearr_23294[(8)] = inst_23268);

(statearr_23294[(9)] = inst_23246);

(statearr_23294[(10)] = inst_23244);

(statearr_23294[(11)] = inst_23245);

(statearr_23294[(12)] = inst_23243);

return statearr_23294;
})();
var statearr_23295_23332 = state_23291__$1;
(statearr_23295_23332[(2)] = null);

(statearr_23295_23332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (1))){
var state_23291__$1 = state_23291;
var statearr_23296_23333 = state_23291__$1;
(statearr_23296_23333[(2)] = null);

(statearr_23296_23333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (4))){
var inst_23232 = (state_23291[(13)]);
var inst_23232__$1 = (state_23291[(2)]);
var inst_23233 = (inst_23232__$1 == null);
var state_23291__$1 = (function (){var statearr_23297 = state_23291;
(statearr_23297[(13)] = inst_23232__$1);

return statearr_23297;
})();
if(cljs.core.truth_(inst_23233)){
var statearr_23298_23334 = state_23291__$1;
(statearr_23298_23334[(1)] = (5));

} else {
var statearr_23299_23335 = state_23291__$1;
(statearr_23299_23335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (15))){
var state_23291__$1 = state_23291;
var statearr_23303_23336 = state_23291__$1;
(statearr_23303_23336[(2)] = null);

(statearr_23303_23336[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (21))){
var state_23291__$1 = state_23291;
var statearr_23304_23337 = state_23291__$1;
(statearr_23304_23337[(2)] = null);

(statearr_23304_23337[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (13))){
var inst_23246 = (state_23291[(9)]);
var inst_23244 = (state_23291[(10)]);
var inst_23245 = (state_23291[(11)]);
var inst_23243 = (state_23291[(12)]);
var inst_23253 = (state_23291[(2)]);
var inst_23254 = (inst_23246 + (1));
var tmp23300 = inst_23244;
var tmp23301 = inst_23245;
var tmp23302 = inst_23243;
var inst_23243__$1 = tmp23302;
var inst_23244__$1 = tmp23300;
var inst_23245__$1 = tmp23301;
var inst_23246__$1 = inst_23254;
var state_23291__$1 = (function (){var statearr_23305 = state_23291;
(statearr_23305[(9)] = inst_23246__$1);

(statearr_23305[(10)] = inst_23244__$1);

(statearr_23305[(11)] = inst_23245__$1);

(statearr_23305[(12)] = inst_23243__$1);

(statearr_23305[(14)] = inst_23253);

return statearr_23305;
})();
var statearr_23306_23338 = state_23291__$1;
(statearr_23306_23338[(2)] = null);

(statearr_23306_23338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (22))){
var state_23291__$1 = state_23291;
var statearr_23307_23339 = state_23291__$1;
(statearr_23307_23339[(2)] = null);

(statearr_23307_23339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (6))){
var inst_23232 = (state_23291[(13)]);
var inst_23241 = f.call(null,inst_23232);
var inst_23242 = cljs.core.seq.call(null,inst_23241);
var inst_23243 = inst_23242;
var inst_23244 = null;
var inst_23245 = (0);
var inst_23246 = (0);
var state_23291__$1 = (function (){var statearr_23308 = state_23291;
(statearr_23308[(9)] = inst_23246);

(statearr_23308[(10)] = inst_23244);

(statearr_23308[(11)] = inst_23245);

(statearr_23308[(12)] = inst_23243);

return statearr_23308;
})();
var statearr_23309_23340 = state_23291__$1;
(statearr_23309_23340[(2)] = null);

(statearr_23309_23340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (17))){
var inst_23257 = (state_23291[(7)]);
var inst_23261 = cljs.core.chunk_first.call(null,inst_23257);
var inst_23262 = cljs.core.chunk_rest.call(null,inst_23257);
var inst_23263 = cljs.core.count.call(null,inst_23261);
var inst_23243 = inst_23262;
var inst_23244 = inst_23261;
var inst_23245 = inst_23263;
var inst_23246 = (0);
var state_23291__$1 = (function (){var statearr_23310 = state_23291;
(statearr_23310[(9)] = inst_23246);

(statearr_23310[(10)] = inst_23244);

(statearr_23310[(11)] = inst_23245);

(statearr_23310[(12)] = inst_23243);

return statearr_23310;
})();
var statearr_23311_23341 = state_23291__$1;
(statearr_23311_23341[(2)] = null);

(statearr_23311_23341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (3))){
var inst_23289 = (state_23291[(2)]);
var state_23291__$1 = state_23291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23291__$1,inst_23289);
} else {
if((state_val_23292 === (12))){
var inst_23277 = (state_23291[(2)]);
var state_23291__$1 = state_23291;
var statearr_23312_23342 = state_23291__$1;
(statearr_23312_23342[(2)] = inst_23277);

(statearr_23312_23342[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (2))){
var state_23291__$1 = state_23291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23291__$1,(4),in$);
} else {
if((state_val_23292 === (23))){
var inst_23285 = (state_23291[(2)]);
var state_23291__$1 = state_23291;
var statearr_23313_23343 = state_23291__$1;
(statearr_23313_23343[(2)] = inst_23285);

(statearr_23313_23343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (19))){
var inst_23272 = (state_23291[(2)]);
var state_23291__$1 = state_23291;
var statearr_23314_23344 = state_23291__$1;
(statearr_23314_23344[(2)] = inst_23272);

(statearr_23314_23344[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (11))){
var inst_23257 = (state_23291[(7)]);
var inst_23243 = (state_23291[(12)]);
var inst_23257__$1 = cljs.core.seq.call(null,inst_23243);
var state_23291__$1 = (function (){var statearr_23315 = state_23291;
(statearr_23315[(7)] = inst_23257__$1);

return statearr_23315;
})();
if(inst_23257__$1){
var statearr_23316_23345 = state_23291__$1;
(statearr_23316_23345[(1)] = (14));

} else {
var statearr_23317_23346 = state_23291__$1;
(statearr_23317_23346[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (9))){
var inst_23279 = (state_23291[(2)]);
var inst_23280 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23291__$1 = (function (){var statearr_23318 = state_23291;
(statearr_23318[(15)] = inst_23279);

return statearr_23318;
})();
if(cljs.core.truth_(inst_23280)){
var statearr_23319_23347 = state_23291__$1;
(statearr_23319_23347[(1)] = (21));

} else {
var statearr_23320_23348 = state_23291__$1;
(statearr_23320_23348[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (5))){
var inst_23235 = cljs.core.async.close_BANG_.call(null,out);
var state_23291__$1 = state_23291;
var statearr_23321_23349 = state_23291__$1;
(statearr_23321_23349[(2)] = inst_23235);

(statearr_23321_23349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (14))){
var inst_23257 = (state_23291[(7)]);
var inst_23259 = cljs.core.chunked_seq_QMARK_.call(null,inst_23257);
var state_23291__$1 = state_23291;
if(inst_23259){
var statearr_23322_23350 = state_23291__$1;
(statearr_23322_23350[(1)] = (17));

} else {
var statearr_23323_23351 = state_23291__$1;
(statearr_23323_23351[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (16))){
var inst_23275 = (state_23291[(2)]);
var state_23291__$1 = state_23291;
var statearr_23324_23352 = state_23291__$1;
(statearr_23324_23352[(2)] = inst_23275);

(statearr_23324_23352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23292 === (10))){
var inst_23246 = (state_23291[(9)]);
var inst_23244 = (state_23291[(10)]);
var inst_23251 = cljs.core._nth.call(null,inst_23244,inst_23246);
var state_23291__$1 = state_23291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23291__$1,(13),out,inst_23251);
} else {
if((state_val_23292 === (18))){
var inst_23257 = (state_23291[(7)]);
var inst_23266 = cljs.core.first.call(null,inst_23257);
var state_23291__$1 = state_23291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23291__$1,(20),out,inst_23266);
} else {
if((state_val_23292 === (8))){
var inst_23246 = (state_23291[(9)]);
var inst_23245 = (state_23291[(11)]);
var inst_23248 = (inst_23246 < inst_23245);
var inst_23249 = inst_23248;
var state_23291__$1 = state_23291;
if(cljs.core.truth_(inst_23249)){
var statearr_23325_23353 = state_23291__$1;
(statearr_23325_23353[(1)] = (10));

} else {
var statearr_23326_23354 = state_23291__$1;
(statearr_23326_23354[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});})(c__21689__auto__))
;
return ((function (switch__21600__auto__,c__21689__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21601__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21601__auto____0 = (function (){
var statearr_23327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23327[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21601__auto__);

(statearr_23327[(1)] = (1));

return statearr_23327;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21601__auto____1 = (function (state_23291){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_23291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e23328){if((e23328 instanceof Object)){
var ex__21604__auto__ = e23328;
var statearr_23329_23355 = state_23291;
(statearr_23329_23355[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23356 = state_23291;
state_23291 = G__23356;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21601__auto__ = function(state_23291){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21601__auto____1.call(this,state_23291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21601__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21601__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto__))
})();
var state__21691__auto__ = (function (){var statearr_23330 = f__21690__auto__.call(null);
(statearr_23330[(6)] = c__21689__auto__);

return statearr_23330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto__))
);

return c__21689__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23358 = arguments.length;
switch (G__23358) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__23361 = arguments.length;
switch (G__23361) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__23364 = arguments.length;
switch (G__23364) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21689__auto___23411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___23411,out){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___23411,out){
return (function (state_23388){
var state_val_23389 = (state_23388[(1)]);
if((state_val_23389 === (7))){
var inst_23383 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
var statearr_23390_23412 = state_23388__$1;
(statearr_23390_23412[(2)] = inst_23383);

(statearr_23390_23412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23389 === (1))){
var inst_23365 = null;
var state_23388__$1 = (function (){var statearr_23391 = state_23388;
(statearr_23391[(7)] = inst_23365);

return statearr_23391;
})();
var statearr_23392_23413 = state_23388__$1;
(statearr_23392_23413[(2)] = null);

(statearr_23392_23413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23389 === (4))){
var inst_23368 = (state_23388[(8)]);
var inst_23368__$1 = (state_23388[(2)]);
var inst_23369 = (inst_23368__$1 == null);
var inst_23370 = cljs.core.not.call(null,inst_23369);
var state_23388__$1 = (function (){var statearr_23393 = state_23388;
(statearr_23393[(8)] = inst_23368__$1);

return statearr_23393;
})();
if(inst_23370){
var statearr_23394_23414 = state_23388__$1;
(statearr_23394_23414[(1)] = (5));

} else {
var statearr_23395_23415 = state_23388__$1;
(statearr_23395_23415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23389 === (6))){
var state_23388__$1 = state_23388;
var statearr_23396_23416 = state_23388__$1;
(statearr_23396_23416[(2)] = null);

(statearr_23396_23416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23389 === (3))){
var inst_23385 = (state_23388[(2)]);
var inst_23386 = cljs.core.async.close_BANG_.call(null,out);
var state_23388__$1 = (function (){var statearr_23397 = state_23388;
(statearr_23397[(9)] = inst_23385);

return statearr_23397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23388__$1,inst_23386);
} else {
if((state_val_23389 === (2))){
var state_23388__$1 = state_23388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23388__$1,(4),ch);
} else {
if((state_val_23389 === (11))){
var inst_23368 = (state_23388[(8)]);
var inst_23377 = (state_23388[(2)]);
var inst_23365 = inst_23368;
var state_23388__$1 = (function (){var statearr_23398 = state_23388;
(statearr_23398[(7)] = inst_23365);

(statearr_23398[(10)] = inst_23377);

return statearr_23398;
})();
var statearr_23399_23417 = state_23388__$1;
(statearr_23399_23417[(2)] = null);

(statearr_23399_23417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23389 === (9))){
var inst_23368 = (state_23388[(8)]);
var state_23388__$1 = state_23388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23388__$1,(11),out,inst_23368);
} else {
if((state_val_23389 === (5))){
var inst_23365 = (state_23388[(7)]);
var inst_23368 = (state_23388[(8)]);
var inst_23372 = cljs.core._EQ_.call(null,inst_23368,inst_23365);
var state_23388__$1 = state_23388;
if(inst_23372){
var statearr_23401_23418 = state_23388__$1;
(statearr_23401_23418[(1)] = (8));

} else {
var statearr_23402_23419 = state_23388__$1;
(statearr_23402_23419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23389 === (10))){
var inst_23380 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
var statearr_23403_23420 = state_23388__$1;
(statearr_23403_23420[(2)] = inst_23380);

(statearr_23403_23420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23389 === (8))){
var inst_23365 = (state_23388[(7)]);
var tmp23400 = inst_23365;
var inst_23365__$1 = tmp23400;
var state_23388__$1 = (function (){var statearr_23404 = state_23388;
(statearr_23404[(7)] = inst_23365__$1);

return statearr_23404;
})();
var statearr_23405_23421 = state_23388__$1;
(statearr_23405_23421[(2)] = null);

(statearr_23405_23421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__21689__auto___23411,out))
;
return ((function (switch__21600__auto__,c__21689__auto___23411,out){
return (function() {
var cljs$core$async$state_machine__21601__auto__ = null;
var cljs$core$async$state_machine__21601__auto____0 = (function (){
var statearr_23406 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23406[(0)] = cljs$core$async$state_machine__21601__auto__);

(statearr_23406[(1)] = (1));

return statearr_23406;
});
var cljs$core$async$state_machine__21601__auto____1 = (function (state_23388){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_23388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e23407){if((e23407 instanceof Object)){
var ex__21604__auto__ = e23407;
var statearr_23408_23422 = state_23388;
(statearr_23408_23422[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23423 = state_23388;
state_23388 = G__23423;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$state_machine__21601__auto__ = function(state_23388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21601__auto____1.call(this,state_23388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21601__auto____0;
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21601__auto____1;
return cljs$core$async$state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___23411,out))
})();
var state__21691__auto__ = (function (){var statearr_23409 = f__21690__auto__.call(null);
(statearr_23409[(6)] = c__21689__auto___23411);

return statearr_23409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___23411,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23425 = arguments.length;
switch (G__23425) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21689__auto___23491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___23491,out){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___23491,out){
return (function (state_23463){
var state_val_23464 = (state_23463[(1)]);
if((state_val_23464 === (7))){
var inst_23459 = (state_23463[(2)]);
var state_23463__$1 = state_23463;
var statearr_23465_23492 = state_23463__$1;
(statearr_23465_23492[(2)] = inst_23459);

(statearr_23465_23492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23464 === (1))){
var inst_23426 = (new Array(n));
var inst_23427 = inst_23426;
var inst_23428 = (0);
var state_23463__$1 = (function (){var statearr_23466 = state_23463;
(statearr_23466[(7)] = inst_23428);

(statearr_23466[(8)] = inst_23427);

return statearr_23466;
})();
var statearr_23467_23493 = state_23463__$1;
(statearr_23467_23493[(2)] = null);

(statearr_23467_23493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23464 === (4))){
var inst_23431 = (state_23463[(9)]);
var inst_23431__$1 = (state_23463[(2)]);
var inst_23432 = (inst_23431__$1 == null);
var inst_23433 = cljs.core.not.call(null,inst_23432);
var state_23463__$1 = (function (){var statearr_23468 = state_23463;
(statearr_23468[(9)] = inst_23431__$1);

return statearr_23468;
})();
if(inst_23433){
var statearr_23469_23494 = state_23463__$1;
(statearr_23469_23494[(1)] = (5));

} else {
var statearr_23470_23495 = state_23463__$1;
(statearr_23470_23495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23464 === (15))){
var inst_23453 = (state_23463[(2)]);
var state_23463__$1 = state_23463;
var statearr_23471_23496 = state_23463__$1;
(statearr_23471_23496[(2)] = inst_23453);

(statearr_23471_23496[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23464 === (13))){
var state_23463__$1 = state_23463;
var statearr_23472_23497 = state_23463__$1;
(statearr_23472_23497[(2)] = null);

(statearr_23472_23497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23464 === (6))){
var inst_23428 = (state_23463[(7)]);
var inst_23449 = (inst_23428 > (0));
var state_23463__$1 = state_23463;
if(cljs.core.truth_(inst_23449)){
var statearr_23473_23498 = state_23463__$1;
(statearr_23473_23498[(1)] = (12));

} else {
var statearr_23474_23499 = state_23463__$1;
(statearr_23474_23499[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23464 === (3))){
var inst_23461 = (state_23463[(2)]);
var state_23463__$1 = state_23463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23463__$1,inst_23461);
} else {
if((state_val_23464 === (12))){
var inst_23427 = (state_23463[(8)]);
var inst_23451 = cljs.core.vec.call(null,inst_23427);
var state_23463__$1 = state_23463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23463__$1,(15),out,inst_23451);
} else {
if((state_val_23464 === (2))){
var state_23463__$1 = state_23463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23463__$1,(4),ch);
} else {
if((state_val_23464 === (11))){
var inst_23443 = (state_23463[(2)]);
var inst_23444 = (new Array(n));
var inst_23427 = inst_23444;
var inst_23428 = (0);
var state_23463__$1 = (function (){var statearr_23475 = state_23463;
(statearr_23475[(10)] = inst_23443);

(statearr_23475[(7)] = inst_23428);

(statearr_23475[(8)] = inst_23427);

return statearr_23475;
})();
var statearr_23476_23500 = state_23463__$1;
(statearr_23476_23500[(2)] = null);

(statearr_23476_23500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23464 === (9))){
var inst_23427 = (state_23463[(8)]);
var inst_23441 = cljs.core.vec.call(null,inst_23427);
var state_23463__$1 = state_23463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23463__$1,(11),out,inst_23441);
} else {
if((state_val_23464 === (5))){
var inst_23431 = (state_23463[(9)]);
var inst_23436 = (state_23463[(11)]);
var inst_23428 = (state_23463[(7)]);
var inst_23427 = (state_23463[(8)]);
var inst_23435 = (inst_23427[inst_23428] = inst_23431);
var inst_23436__$1 = (inst_23428 + (1));
var inst_23437 = (inst_23436__$1 < n);
var state_23463__$1 = (function (){var statearr_23477 = state_23463;
(statearr_23477[(11)] = inst_23436__$1);

(statearr_23477[(12)] = inst_23435);

return statearr_23477;
})();
if(cljs.core.truth_(inst_23437)){
var statearr_23478_23501 = state_23463__$1;
(statearr_23478_23501[(1)] = (8));

} else {
var statearr_23479_23502 = state_23463__$1;
(statearr_23479_23502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23464 === (14))){
var inst_23456 = (state_23463[(2)]);
var inst_23457 = cljs.core.async.close_BANG_.call(null,out);
var state_23463__$1 = (function (){var statearr_23481 = state_23463;
(statearr_23481[(13)] = inst_23456);

return statearr_23481;
})();
var statearr_23482_23503 = state_23463__$1;
(statearr_23482_23503[(2)] = inst_23457);

(statearr_23482_23503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23464 === (10))){
var inst_23447 = (state_23463[(2)]);
var state_23463__$1 = state_23463;
var statearr_23483_23504 = state_23463__$1;
(statearr_23483_23504[(2)] = inst_23447);

(statearr_23483_23504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23464 === (8))){
var inst_23436 = (state_23463[(11)]);
var inst_23427 = (state_23463[(8)]);
var tmp23480 = inst_23427;
var inst_23427__$1 = tmp23480;
var inst_23428 = inst_23436;
var state_23463__$1 = (function (){var statearr_23484 = state_23463;
(statearr_23484[(7)] = inst_23428);

(statearr_23484[(8)] = inst_23427__$1);

return statearr_23484;
})();
var statearr_23485_23505 = state_23463__$1;
(statearr_23485_23505[(2)] = null);

(statearr_23485_23505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__21689__auto___23491,out))
;
return ((function (switch__21600__auto__,c__21689__auto___23491,out){
return (function() {
var cljs$core$async$state_machine__21601__auto__ = null;
var cljs$core$async$state_machine__21601__auto____0 = (function (){
var statearr_23486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23486[(0)] = cljs$core$async$state_machine__21601__auto__);

(statearr_23486[(1)] = (1));

return statearr_23486;
});
var cljs$core$async$state_machine__21601__auto____1 = (function (state_23463){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_23463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e23487){if((e23487 instanceof Object)){
var ex__21604__auto__ = e23487;
var statearr_23488_23506 = state_23463;
(statearr_23488_23506[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23507 = state_23463;
state_23463 = G__23507;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$state_machine__21601__auto__ = function(state_23463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21601__auto____1.call(this,state_23463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21601__auto____0;
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21601__auto____1;
return cljs$core$async$state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___23491,out))
})();
var state__21691__auto__ = (function (){var statearr_23489 = f__21690__auto__.call(null);
(statearr_23489[(6)] = c__21689__auto___23491);

return statearr_23489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___23491,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23509 = arguments.length;
switch (G__23509) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21689__auto___23579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___23579,out){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___23579,out){
return (function (state_23551){
var state_val_23552 = (state_23551[(1)]);
if((state_val_23552 === (7))){
var inst_23547 = (state_23551[(2)]);
var state_23551__$1 = state_23551;
var statearr_23553_23580 = state_23551__$1;
(statearr_23553_23580[(2)] = inst_23547);

(statearr_23553_23580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23552 === (1))){
var inst_23510 = [];
var inst_23511 = inst_23510;
var inst_23512 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23551__$1 = (function (){var statearr_23554 = state_23551;
(statearr_23554[(7)] = inst_23512);

(statearr_23554[(8)] = inst_23511);

return statearr_23554;
})();
var statearr_23555_23581 = state_23551__$1;
(statearr_23555_23581[(2)] = null);

(statearr_23555_23581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23552 === (4))){
var inst_23515 = (state_23551[(9)]);
var inst_23515__$1 = (state_23551[(2)]);
var inst_23516 = (inst_23515__$1 == null);
var inst_23517 = cljs.core.not.call(null,inst_23516);
var state_23551__$1 = (function (){var statearr_23556 = state_23551;
(statearr_23556[(9)] = inst_23515__$1);

return statearr_23556;
})();
if(inst_23517){
var statearr_23557_23582 = state_23551__$1;
(statearr_23557_23582[(1)] = (5));

} else {
var statearr_23558_23583 = state_23551__$1;
(statearr_23558_23583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23552 === (15))){
var inst_23541 = (state_23551[(2)]);
var state_23551__$1 = state_23551;
var statearr_23559_23584 = state_23551__$1;
(statearr_23559_23584[(2)] = inst_23541);

(statearr_23559_23584[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23552 === (13))){
var state_23551__$1 = state_23551;
var statearr_23560_23585 = state_23551__$1;
(statearr_23560_23585[(2)] = null);

(statearr_23560_23585[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23552 === (6))){
var inst_23511 = (state_23551[(8)]);
var inst_23536 = inst_23511.length;
var inst_23537 = (inst_23536 > (0));
var state_23551__$1 = state_23551;
if(cljs.core.truth_(inst_23537)){
var statearr_23561_23586 = state_23551__$1;
(statearr_23561_23586[(1)] = (12));

} else {
var statearr_23562_23587 = state_23551__$1;
(statearr_23562_23587[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23552 === (3))){
var inst_23549 = (state_23551[(2)]);
var state_23551__$1 = state_23551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23551__$1,inst_23549);
} else {
if((state_val_23552 === (12))){
var inst_23511 = (state_23551[(8)]);
var inst_23539 = cljs.core.vec.call(null,inst_23511);
var state_23551__$1 = state_23551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23551__$1,(15),out,inst_23539);
} else {
if((state_val_23552 === (2))){
var state_23551__$1 = state_23551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23551__$1,(4),ch);
} else {
if((state_val_23552 === (11))){
var inst_23519 = (state_23551[(10)]);
var inst_23515 = (state_23551[(9)]);
var inst_23529 = (state_23551[(2)]);
var inst_23530 = [];
var inst_23531 = inst_23530.push(inst_23515);
var inst_23511 = inst_23530;
var inst_23512 = inst_23519;
var state_23551__$1 = (function (){var statearr_23563 = state_23551;
(statearr_23563[(7)] = inst_23512);

(statearr_23563[(8)] = inst_23511);

(statearr_23563[(11)] = inst_23529);

(statearr_23563[(12)] = inst_23531);

return statearr_23563;
})();
var statearr_23564_23588 = state_23551__$1;
(statearr_23564_23588[(2)] = null);

(statearr_23564_23588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23552 === (9))){
var inst_23511 = (state_23551[(8)]);
var inst_23527 = cljs.core.vec.call(null,inst_23511);
var state_23551__$1 = state_23551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23551__$1,(11),out,inst_23527);
} else {
if((state_val_23552 === (5))){
var inst_23512 = (state_23551[(7)]);
var inst_23519 = (state_23551[(10)]);
var inst_23515 = (state_23551[(9)]);
var inst_23519__$1 = f.call(null,inst_23515);
var inst_23520 = cljs.core._EQ_.call(null,inst_23519__$1,inst_23512);
var inst_23521 = cljs.core.keyword_identical_QMARK_.call(null,inst_23512,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23522 = ((inst_23520) || (inst_23521));
var state_23551__$1 = (function (){var statearr_23565 = state_23551;
(statearr_23565[(10)] = inst_23519__$1);

return statearr_23565;
})();
if(cljs.core.truth_(inst_23522)){
var statearr_23566_23589 = state_23551__$1;
(statearr_23566_23589[(1)] = (8));

} else {
var statearr_23567_23590 = state_23551__$1;
(statearr_23567_23590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23552 === (14))){
var inst_23544 = (state_23551[(2)]);
var inst_23545 = cljs.core.async.close_BANG_.call(null,out);
var state_23551__$1 = (function (){var statearr_23569 = state_23551;
(statearr_23569[(13)] = inst_23544);

return statearr_23569;
})();
var statearr_23570_23591 = state_23551__$1;
(statearr_23570_23591[(2)] = inst_23545);

(statearr_23570_23591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23552 === (10))){
var inst_23534 = (state_23551[(2)]);
var state_23551__$1 = state_23551;
var statearr_23571_23592 = state_23551__$1;
(statearr_23571_23592[(2)] = inst_23534);

(statearr_23571_23592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23552 === (8))){
var inst_23511 = (state_23551[(8)]);
var inst_23519 = (state_23551[(10)]);
var inst_23515 = (state_23551[(9)]);
var inst_23524 = inst_23511.push(inst_23515);
var tmp23568 = inst_23511;
var inst_23511__$1 = tmp23568;
var inst_23512 = inst_23519;
var state_23551__$1 = (function (){var statearr_23572 = state_23551;
(statearr_23572[(7)] = inst_23512);

(statearr_23572[(8)] = inst_23511__$1);

(statearr_23572[(14)] = inst_23524);

return statearr_23572;
})();
var statearr_23573_23593 = state_23551__$1;
(statearr_23573_23593[(2)] = null);

(statearr_23573_23593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__21689__auto___23579,out))
;
return ((function (switch__21600__auto__,c__21689__auto___23579,out){
return (function() {
var cljs$core$async$state_machine__21601__auto__ = null;
var cljs$core$async$state_machine__21601__auto____0 = (function (){
var statearr_23574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23574[(0)] = cljs$core$async$state_machine__21601__auto__);

(statearr_23574[(1)] = (1));

return statearr_23574;
});
var cljs$core$async$state_machine__21601__auto____1 = (function (state_23551){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_23551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e23575){if((e23575 instanceof Object)){
var ex__21604__auto__ = e23575;
var statearr_23576_23594 = state_23551;
(statearr_23576_23594[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23595 = state_23551;
state_23551 = G__23595;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
cljs$core$async$state_machine__21601__auto__ = function(state_23551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21601__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21601__auto____1.call(this,state_23551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21601__auto____0;
cljs$core$async$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21601__auto____1;
return cljs$core$async$state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___23579,out))
})();
var state__21691__auto__ = (function (){var statearr_23577 = f__21690__auto__.call(null);
(statearr_23577[(6)] = c__21689__auto___23579);

return statearr_23577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___23579,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1535420495538
