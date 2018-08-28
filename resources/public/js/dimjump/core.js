// Compiled by ClojureScript 1.10.339 {}
goog.provide('dimjump.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
dimjump.core.setup = (function dimjump$core$setup(){
quil.core.frame_rate.call(null,(10));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num","num",1985240673),(10)], null);
});
dimjump.core.draw = (function dimjump$core$draw(state){
quil.core.fill.call(null,quil.core.color.call(null,(150),(150),(150)));

return quil.core.rect.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(state),(30),(30),(30));
});
dimjump.core.progress = (function dimjump$core$progress(state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num","num",1985240673),(new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(state) + (1))], null);
});
dimjump.core.init = (function dimjump$core$init(){
dimjump.core.dim_jump = (function dimjump$core$init_$_dim_jump(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game",new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
return quil.core.smooth.call(null,(2));
}),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,dimjump.core.progress))?(function() { 
var G__26865__delegate = function (args){
return cljs.core.apply.call(null,dimjump.core.progress,args);
};
var G__26865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26866__i = 0, G__26866__a = new Array(arguments.length -  0);
while (G__26866__i < G__26866__a.length) {G__26866__a[G__26866__i] = arguments[G__26866__i + 0]; ++G__26866__i;}
  args = new cljs.core.IndexedSeq(G__26866__a,0,null);
} 
return G__26865__delegate.call(this,args);};
G__26865.cljs$lang$maxFixedArity = 0;
G__26865.cljs$lang$applyTo = (function (arglist__26867){
var args = cljs.core.seq(arglist__26867);
return G__26865__delegate(args);
});
G__26865.cljs$core$IFn$_invoke$arity$variadic = G__26865__delegate;
return G__26865;
})()
:dimjump.core.progress),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,dimjump.core.setup))?(function() { 
var G__26868__delegate = function (args){
return cljs.core.apply.call(null,dimjump.core.setup,args);
};
var G__26868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26869__i = 0, G__26869__a = new Array(arguments.length -  0);
while (G__26869__i < G__26869__a.length) {G__26869__a[G__26869__i] = arguments[G__26869__i + 0]; ++G__26869__i;}
  args = new cljs.core.IndexedSeq(G__26869__a,0,null);
} 
return G__26868__delegate.call(this,args);};
G__26868.cljs$lang$maxFixedArity = 0;
G__26868.cljs$lang$applyTo = (function (arglist__26870){
var args = cljs.core.seq(arglist__26870);
return G__26868__delegate(args);
});
G__26868.cljs$core$IFn$_invoke$arity$variadic = G__26868__delegate;
return G__26868;
})()
:dimjump.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,dimjump.core.draw))?(function() { 
var G__26871__delegate = function (args){
return cljs.core.apply.call(null,dimjump.core.draw,args);
};
var G__26871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26872__i = 0, G__26872__a = new Array(arguments.length -  0);
while (G__26872__i < G__26872__a.length) {G__26872__a[G__26872__i] = arguments[G__26872__i + 0]; ++G__26872__i;}
  args = new cljs.core.IndexedSeq(G__26872__a,0,null);
} 
return G__26871__delegate.call(this,args);};
G__26871.cljs$lang$maxFixedArity = 0;
G__26871.cljs$lang$applyTo = (function (arglist__26873){
var args = cljs.core.seq(arglist__26873);
return G__26871__delegate(args);
});
G__26871.cljs$core$IFn$_invoke$arity$variadic = G__26871__delegate;
return G__26871;
})()
:dimjump.core.draw));
});
goog.exportSymbol('dimjump.core.dim_jump', dimjump.core.dim_jump);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26389__26390__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__26389__26390__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),dimjump.core.dim_jump,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game"], null));
}
});

//# sourceMappingURL=core.js.map?rel=1535435086846
