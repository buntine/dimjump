// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21437__delegate = function (x__21423__auto__){
if(cljs.core.truth_(dimjump.core.init)){
return cljs.core.apply.call(null,dimjump.core.init,x__21423__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("dimjump.core/init"),"' is missing"].join(''));
}
};
var G__21437 = function (var_args){
var x__21423__auto__ = null;
if (arguments.length > 0) {
var G__21438__i = 0, G__21438__a = new Array(arguments.length -  0);
while (G__21438__i < G__21438__a.length) {G__21438__a[G__21438__i] = arguments[G__21438__i + 0]; ++G__21438__i;}
  x__21423__auto__ = new cljs.core.IndexedSeq(G__21438__a,0,null);
} 
return G__21437__delegate.call(this,x__21423__auto__);};
G__21437.cljs$lang$maxFixedArity = 0;
G__21437.cljs$lang$applyTo = (function (arglist__21439){
var x__21423__auto__ = cljs.core.seq(arglist__21439);
return G__21437__delegate(x__21423__auto__);
});
G__21437.cljs$core$IFn$_invoke$arity$variadic = G__21437__delegate;
return G__21437;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://0.0.0.0:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1535434993465
