// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26423){
var map__26424 = p__26423;
var map__26424__$1 = ((((!((map__26424 == null)))?(((((map__26424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26424):map__26424);
var m = map__26424__$1;
var n = cljs.core.get.call(null,map__26424__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26424__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26426_26448 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26427_26449 = null;
var count__26428_26450 = (0);
var i__26429_26451 = (0);
while(true){
if((i__26429_26451 < count__26428_26450)){
var f_26452 = cljs.core._nth.call(null,chunk__26427_26449,i__26429_26451);
cljs.core.println.call(null,"  ",f_26452);


var G__26453 = seq__26426_26448;
var G__26454 = chunk__26427_26449;
var G__26455 = count__26428_26450;
var G__26456 = (i__26429_26451 + (1));
seq__26426_26448 = G__26453;
chunk__26427_26449 = G__26454;
count__26428_26450 = G__26455;
i__26429_26451 = G__26456;
continue;
} else {
var temp__4657__auto___26457 = cljs.core.seq.call(null,seq__26426_26448);
if(temp__4657__auto___26457){
var seq__26426_26458__$1 = temp__4657__auto___26457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26426_26458__$1)){
var c__4351__auto___26459 = cljs.core.chunk_first.call(null,seq__26426_26458__$1);
var G__26460 = cljs.core.chunk_rest.call(null,seq__26426_26458__$1);
var G__26461 = c__4351__auto___26459;
var G__26462 = cljs.core.count.call(null,c__4351__auto___26459);
var G__26463 = (0);
seq__26426_26448 = G__26460;
chunk__26427_26449 = G__26461;
count__26428_26450 = G__26462;
i__26429_26451 = G__26463;
continue;
} else {
var f_26464 = cljs.core.first.call(null,seq__26426_26458__$1);
cljs.core.println.call(null,"  ",f_26464);


var G__26465 = cljs.core.next.call(null,seq__26426_26458__$1);
var G__26466 = null;
var G__26467 = (0);
var G__26468 = (0);
seq__26426_26448 = G__26465;
chunk__26427_26449 = G__26466;
count__26428_26450 = G__26467;
i__26429_26451 = G__26468;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26469 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26469);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26469)))?cljs.core.second.call(null,arglists_26469):arglists_26469));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26430_26470 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26431_26471 = null;
var count__26432_26472 = (0);
var i__26433_26473 = (0);
while(true){
if((i__26433_26473 < count__26432_26472)){
var vec__26434_26474 = cljs.core._nth.call(null,chunk__26431_26471,i__26433_26473);
var name_26475 = cljs.core.nth.call(null,vec__26434_26474,(0),null);
var map__26437_26476 = cljs.core.nth.call(null,vec__26434_26474,(1),null);
var map__26437_26477__$1 = ((((!((map__26437_26476 == null)))?(((((map__26437_26476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26437_26476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26437_26476):map__26437_26476);
var doc_26478 = cljs.core.get.call(null,map__26437_26477__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26479 = cljs.core.get.call(null,map__26437_26477__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26475);

cljs.core.println.call(null," ",arglists_26479);

if(cljs.core.truth_(doc_26478)){
cljs.core.println.call(null," ",doc_26478);
} else {
}


var G__26480 = seq__26430_26470;
var G__26481 = chunk__26431_26471;
var G__26482 = count__26432_26472;
var G__26483 = (i__26433_26473 + (1));
seq__26430_26470 = G__26480;
chunk__26431_26471 = G__26481;
count__26432_26472 = G__26482;
i__26433_26473 = G__26483;
continue;
} else {
var temp__4657__auto___26484 = cljs.core.seq.call(null,seq__26430_26470);
if(temp__4657__auto___26484){
var seq__26430_26485__$1 = temp__4657__auto___26484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26430_26485__$1)){
var c__4351__auto___26486 = cljs.core.chunk_first.call(null,seq__26430_26485__$1);
var G__26487 = cljs.core.chunk_rest.call(null,seq__26430_26485__$1);
var G__26488 = c__4351__auto___26486;
var G__26489 = cljs.core.count.call(null,c__4351__auto___26486);
var G__26490 = (0);
seq__26430_26470 = G__26487;
chunk__26431_26471 = G__26488;
count__26432_26472 = G__26489;
i__26433_26473 = G__26490;
continue;
} else {
var vec__26439_26491 = cljs.core.first.call(null,seq__26430_26485__$1);
var name_26492 = cljs.core.nth.call(null,vec__26439_26491,(0),null);
var map__26442_26493 = cljs.core.nth.call(null,vec__26439_26491,(1),null);
var map__26442_26494__$1 = ((((!((map__26442_26493 == null)))?(((((map__26442_26493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26442_26493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26442_26493):map__26442_26493);
var doc_26495 = cljs.core.get.call(null,map__26442_26494__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26496 = cljs.core.get.call(null,map__26442_26494__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26492);

cljs.core.println.call(null," ",arglists_26496);

if(cljs.core.truth_(doc_26495)){
cljs.core.println.call(null," ",doc_26495);
} else {
}


var G__26497 = cljs.core.next.call(null,seq__26430_26485__$1);
var G__26498 = null;
var G__26499 = (0);
var G__26500 = (0);
seq__26430_26470 = G__26497;
chunk__26431_26471 = G__26498;
count__26432_26472 = G__26499;
i__26433_26473 = G__26500;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__26444 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26445 = null;
var count__26446 = (0);
var i__26447 = (0);
while(true){
if((i__26447 < count__26446)){
var role = cljs.core._nth.call(null,chunk__26445,i__26447);
var temp__4657__auto___26501__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___26501__$1)){
var spec_26502 = temp__4657__auto___26501__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26502));
} else {
}


var G__26503 = seq__26444;
var G__26504 = chunk__26445;
var G__26505 = count__26446;
var G__26506 = (i__26447 + (1));
seq__26444 = G__26503;
chunk__26445 = G__26504;
count__26446 = G__26505;
i__26447 = G__26506;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__26444);
if(temp__4657__auto____$1){
var seq__26444__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26444__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__26444__$1);
var G__26507 = cljs.core.chunk_rest.call(null,seq__26444__$1);
var G__26508 = c__4351__auto__;
var G__26509 = cljs.core.count.call(null,c__4351__auto__);
var G__26510 = (0);
seq__26444 = G__26507;
chunk__26445 = G__26508;
count__26446 = G__26509;
i__26447 = G__26510;
continue;
} else {
var role = cljs.core.first.call(null,seq__26444__$1);
var temp__4657__auto___26511__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___26511__$2)){
var spec_26512 = temp__4657__auto___26511__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26512));
} else {
}


var G__26513 = cljs.core.next.call(null,seq__26444__$1);
var G__26514 = null;
var G__26515 = (0);
var G__26516 = (0);
seq__26444 = G__26513;
chunk__26445 = G__26514;
count__26446 = G__26515;
i__26447 = G__26516;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1535420498856
