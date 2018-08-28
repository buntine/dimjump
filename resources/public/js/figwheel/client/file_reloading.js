// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24949_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24949_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24950 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24951 = null;
var count__24952 = (0);
var i__24953 = (0);
while(true){
if((i__24953 < count__24952)){
var n = cljs.core._nth.call(null,chunk__24951,i__24953);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__24954 = seq__24950;
var G__24955 = chunk__24951;
var G__24956 = count__24952;
var G__24957 = (i__24953 + (1));
seq__24950 = G__24954;
chunk__24951 = G__24955;
count__24952 = G__24956;
i__24953 = G__24957;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24950);
if(temp__4657__auto__){
var seq__24950__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24950__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__24950__$1);
var G__24958 = cljs.core.chunk_rest.call(null,seq__24950__$1);
var G__24959 = c__4351__auto__;
var G__24960 = cljs.core.count.call(null,c__4351__auto__);
var G__24961 = (0);
seq__24950 = G__24958;
chunk__24951 = G__24959;
count__24952 = G__24960;
i__24953 = G__24961;
continue;
} else {
var n = cljs.core.first.call(null,seq__24950__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__24962 = cljs.core.next.call(null,seq__24950__$1);
var G__24963 = null;
var G__24964 = (0);
var G__24965 = (0);
seq__24950 = G__24962;
chunk__24951 = G__24963;
count__24952 = G__24964;
i__24953 = G__24965;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__24966){
var vec__24967 = p__24966;
var _ = cljs.core.nth.call(null,vec__24967,(0),null);
var v = cljs.core.nth.call(null,vec__24967,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__24970){
var vec__24971 = p__24970;
var k = cljs.core.nth.call(null,vec__24971,(0),null);
var v = cljs.core.nth.call(null,vec__24971,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24983_24991 = cljs.core.seq.call(null,deps);
var chunk__24984_24992 = null;
var count__24985_24993 = (0);
var i__24986_24994 = (0);
while(true){
if((i__24986_24994 < count__24985_24993)){
var dep_24995 = cljs.core._nth.call(null,chunk__24984_24992,i__24986_24994);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_24995;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_24995));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_24995,(depth + (1)),state);
} else {
}


var G__24996 = seq__24983_24991;
var G__24997 = chunk__24984_24992;
var G__24998 = count__24985_24993;
var G__24999 = (i__24986_24994 + (1));
seq__24983_24991 = G__24996;
chunk__24984_24992 = G__24997;
count__24985_24993 = G__24998;
i__24986_24994 = G__24999;
continue;
} else {
var temp__4657__auto___25000 = cljs.core.seq.call(null,seq__24983_24991);
if(temp__4657__auto___25000){
var seq__24983_25001__$1 = temp__4657__auto___25000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24983_25001__$1)){
var c__4351__auto___25002 = cljs.core.chunk_first.call(null,seq__24983_25001__$1);
var G__25003 = cljs.core.chunk_rest.call(null,seq__24983_25001__$1);
var G__25004 = c__4351__auto___25002;
var G__25005 = cljs.core.count.call(null,c__4351__auto___25002);
var G__25006 = (0);
seq__24983_24991 = G__25003;
chunk__24984_24992 = G__25004;
count__24985_24993 = G__25005;
i__24986_24994 = G__25006;
continue;
} else {
var dep_25007 = cljs.core.first.call(null,seq__24983_25001__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_25007;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25007));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25007,(depth + (1)),state);
} else {
}


var G__25008 = cljs.core.next.call(null,seq__24983_25001__$1);
var G__25009 = null;
var G__25010 = (0);
var G__25011 = (0);
seq__24983_24991 = G__25008;
chunk__24984_24992 = G__25009;
count__24985_24993 = G__25010;
i__24986_24994 = G__25011;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24987){
var vec__24988 = p__24987;
var seq__24989 = cljs.core.seq.call(null,vec__24988);
var first__24990 = cljs.core.first.call(null,seq__24989);
var seq__24989__$1 = cljs.core.next.call(null,seq__24989);
var x = first__24990;
var xs = seq__24989__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24988,seq__24989,first__24990,seq__24989__$1,x,xs,get_deps__$1){
return (function (p1__24974_SHARP_){
return clojure.set.difference.call(null,p1__24974_SHARP_,x);
});})(vec__24988,seq__24989,first__24990,seq__24989__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25012 = cljs.core.seq.call(null,provides);
var chunk__25013 = null;
var count__25014 = (0);
var i__25015 = (0);
while(true){
if((i__25015 < count__25014)){
var prov = cljs.core._nth.call(null,chunk__25013,i__25015);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25016_25024 = cljs.core.seq.call(null,requires);
var chunk__25017_25025 = null;
var count__25018_25026 = (0);
var i__25019_25027 = (0);
while(true){
if((i__25019_25027 < count__25018_25026)){
var req_25028 = cljs.core._nth.call(null,chunk__25017_25025,i__25019_25027);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25028,prov);


var G__25029 = seq__25016_25024;
var G__25030 = chunk__25017_25025;
var G__25031 = count__25018_25026;
var G__25032 = (i__25019_25027 + (1));
seq__25016_25024 = G__25029;
chunk__25017_25025 = G__25030;
count__25018_25026 = G__25031;
i__25019_25027 = G__25032;
continue;
} else {
var temp__4657__auto___25033 = cljs.core.seq.call(null,seq__25016_25024);
if(temp__4657__auto___25033){
var seq__25016_25034__$1 = temp__4657__auto___25033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25016_25034__$1)){
var c__4351__auto___25035 = cljs.core.chunk_first.call(null,seq__25016_25034__$1);
var G__25036 = cljs.core.chunk_rest.call(null,seq__25016_25034__$1);
var G__25037 = c__4351__auto___25035;
var G__25038 = cljs.core.count.call(null,c__4351__auto___25035);
var G__25039 = (0);
seq__25016_25024 = G__25036;
chunk__25017_25025 = G__25037;
count__25018_25026 = G__25038;
i__25019_25027 = G__25039;
continue;
} else {
var req_25040 = cljs.core.first.call(null,seq__25016_25034__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25040,prov);


var G__25041 = cljs.core.next.call(null,seq__25016_25034__$1);
var G__25042 = null;
var G__25043 = (0);
var G__25044 = (0);
seq__25016_25024 = G__25041;
chunk__25017_25025 = G__25042;
count__25018_25026 = G__25043;
i__25019_25027 = G__25044;
continue;
}
} else {
}
}
break;
}


var G__25045 = seq__25012;
var G__25046 = chunk__25013;
var G__25047 = count__25014;
var G__25048 = (i__25015 + (1));
seq__25012 = G__25045;
chunk__25013 = G__25046;
count__25014 = G__25047;
i__25015 = G__25048;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25012);
if(temp__4657__auto__){
var seq__25012__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25012__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__25012__$1);
var G__25049 = cljs.core.chunk_rest.call(null,seq__25012__$1);
var G__25050 = c__4351__auto__;
var G__25051 = cljs.core.count.call(null,c__4351__auto__);
var G__25052 = (0);
seq__25012 = G__25049;
chunk__25013 = G__25050;
count__25014 = G__25051;
i__25015 = G__25052;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25012__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25020_25053 = cljs.core.seq.call(null,requires);
var chunk__25021_25054 = null;
var count__25022_25055 = (0);
var i__25023_25056 = (0);
while(true){
if((i__25023_25056 < count__25022_25055)){
var req_25057 = cljs.core._nth.call(null,chunk__25021_25054,i__25023_25056);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25057,prov);


var G__25058 = seq__25020_25053;
var G__25059 = chunk__25021_25054;
var G__25060 = count__25022_25055;
var G__25061 = (i__25023_25056 + (1));
seq__25020_25053 = G__25058;
chunk__25021_25054 = G__25059;
count__25022_25055 = G__25060;
i__25023_25056 = G__25061;
continue;
} else {
var temp__4657__auto___25062__$1 = cljs.core.seq.call(null,seq__25020_25053);
if(temp__4657__auto___25062__$1){
var seq__25020_25063__$1 = temp__4657__auto___25062__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25020_25063__$1)){
var c__4351__auto___25064 = cljs.core.chunk_first.call(null,seq__25020_25063__$1);
var G__25065 = cljs.core.chunk_rest.call(null,seq__25020_25063__$1);
var G__25066 = c__4351__auto___25064;
var G__25067 = cljs.core.count.call(null,c__4351__auto___25064);
var G__25068 = (0);
seq__25020_25053 = G__25065;
chunk__25021_25054 = G__25066;
count__25022_25055 = G__25067;
i__25023_25056 = G__25068;
continue;
} else {
var req_25069 = cljs.core.first.call(null,seq__25020_25063__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25069,prov);


var G__25070 = cljs.core.next.call(null,seq__25020_25063__$1);
var G__25071 = null;
var G__25072 = (0);
var G__25073 = (0);
seq__25020_25053 = G__25070;
chunk__25021_25054 = G__25071;
count__25022_25055 = G__25072;
i__25023_25056 = G__25073;
continue;
}
} else {
}
}
break;
}


var G__25074 = cljs.core.next.call(null,seq__25012__$1);
var G__25075 = null;
var G__25076 = (0);
var G__25077 = (0);
seq__25012 = G__25074;
chunk__25013 = G__25075;
count__25014 = G__25076;
i__25015 = G__25077;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25078_25082 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25079_25083 = null;
var count__25080_25084 = (0);
var i__25081_25085 = (0);
while(true){
if((i__25081_25085 < count__25080_25084)){
var ns_25086 = cljs.core._nth.call(null,chunk__25079_25083,i__25081_25085);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25086);


var G__25087 = seq__25078_25082;
var G__25088 = chunk__25079_25083;
var G__25089 = count__25080_25084;
var G__25090 = (i__25081_25085 + (1));
seq__25078_25082 = G__25087;
chunk__25079_25083 = G__25088;
count__25080_25084 = G__25089;
i__25081_25085 = G__25090;
continue;
} else {
var temp__4657__auto___25091 = cljs.core.seq.call(null,seq__25078_25082);
if(temp__4657__auto___25091){
var seq__25078_25092__$1 = temp__4657__auto___25091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25078_25092__$1)){
var c__4351__auto___25093 = cljs.core.chunk_first.call(null,seq__25078_25092__$1);
var G__25094 = cljs.core.chunk_rest.call(null,seq__25078_25092__$1);
var G__25095 = c__4351__auto___25093;
var G__25096 = cljs.core.count.call(null,c__4351__auto___25093);
var G__25097 = (0);
seq__25078_25082 = G__25094;
chunk__25079_25083 = G__25095;
count__25080_25084 = G__25096;
i__25081_25085 = G__25097;
continue;
} else {
var ns_25098 = cljs.core.first.call(null,seq__25078_25092__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25098);


var G__25099 = cljs.core.next.call(null,seq__25078_25092__$1);
var G__25100 = null;
var G__25101 = (0);
var G__25102 = (0);
seq__25078_25082 = G__25099;
chunk__25079_25083 = G__25100;
count__25080_25084 = G__25101;
i__25081_25085 = G__25102;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25103__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25103 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25104__i = 0, G__25104__a = new Array(arguments.length -  0);
while (G__25104__i < G__25104__a.length) {G__25104__a[G__25104__i] = arguments[G__25104__i + 0]; ++G__25104__i;}
  args = new cljs.core.IndexedSeq(G__25104__a,0,null);
} 
return G__25103__delegate.call(this,args);};
G__25103.cljs$lang$maxFixedArity = 0;
G__25103.cljs$lang$applyTo = (function (arglist__25105){
var args = cljs.core.seq(arglist__25105);
return G__25103__delegate(args);
});
G__25103.cljs$core$IFn$_invoke$arity$variadic = G__25103__delegate;
return G__25103;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__25106_SHARP_,p2__25107_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25106_SHARP_)].join('')),p2__25107_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__25108_SHARP_,p2__25109_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25108_SHARP_)].join(''),p2__25109_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__25110 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__25110.addCallback(((function (G__25110){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__25110))
);

G__25110.addErrback(((function (G__25110){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__25110))
);

return G__25110;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e25111){if((e25111 instanceof Error)){
var e = e25111;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25111;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25112){if((e25112 instanceof Error)){
var e = e25112;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25112;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25113 = cljs.core._EQ_;
var expr__25114 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25113.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25114))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__25113.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25114))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__25113.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__25114))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__25113,expr__25114){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25113,expr__25114))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25116,callback){
var map__25117 = p__25116;
var map__25117__$1 = ((((!((map__25117 == null)))?(((((map__25117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25117):map__25117);
var file_msg = map__25117__$1;
var request_url = cljs.core.get.call(null,map__25117__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__25117,map__25117__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25117,map__25117__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21689__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto__){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto__){
return (function (state_25155){
var state_val_25156 = (state_25155[(1)]);
if((state_val_25156 === (7))){
var inst_25151 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
var statearr_25157_25183 = state_25155__$1;
(statearr_25157_25183[(2)] = inst_25151);

(statearr_25157_25183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (1))){
var state_25155__$1 = state_25155;
var statearr_25158_25184 = state_25155__$1;
(statearr_25158_25184[(2)] = null);

(statearr_25158_25184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (4))){
var inst_25121 = (state_25155[(7)]);
var inst_25121__$1 = (state_25155[(2)]);
var state_25155__$1 = (function (){var statearr_25159 = state_25155;
(statearr_25159[(7)] = inst_25121__$1);

return statearr_25159;
})();
if(cljs.core.truth_(inst_25121__$1)){
var statearr_25160_25185 = state_25155__$1;
(statearr_25160_25185[(1)] = (5));

} else {
var statearr_25161_25186 = state_25155__$1;
(statearr_25161_25186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (15))){
var inst_25134 = (state_25155[(8)]);
var inst_25136 = (state_25155[(9)]);
var inst_25138 = inst_25136.call(null,inst_25134);
var state_25155__$1 = state_25155;
var statearr_25162_25187 = state_25155__$1;
(statearr_25162_25187[(2)] = inst_25138);

(statearr_25162_25187[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (13))){
var inst_25145 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
var statearr_25163_25188 = state_25155__$1;
(statearr_25163_25188[(2)] = inst_25145);

(statearr_25163_25188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (6))){
var state_25155__$1 = state_25155;
var statearr_25164_25189 = state_25155__$1;
(statearr_25164_25189[(2)] = null);

(statearr_25164_25189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (17))){
var inst_25142 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
var statearr_25165_25190 = state_25155__$1;
(statearr_25165_25190[(2)] = inst_25142);

(statearr_25165_25190[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (3))){
var inst_25153 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25155__$1,inst_25153);
} else {
if((state_val_25156 === (12))){
var state_25155__$1 = state_25155;
var statearr_25166_25191 = state_25155__$1;
(statearr_25166_25191[(2)] = null);

(statearr_25166_25191[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (2))){
var state_25155__$1 = state_25155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25155__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25156 === (11))){
var inst_25126 = (state_25155[(10)]);
var inst_25132 = figwheel.client.file_reloading.blocking_load.call(null,inst_25126);
var state_25155__$1 = state_25155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25155__$1,(14),inst_25132);
} else {
if((state_val_25156 === (9))){
var inst_25126 = (state_25155[(10)]);
var state_25155__$1 = state_25155;
if(cljs.core.truth_(inst_25126)){
var statearr_25167_25192 = state_25155__$1;
(statearr_25167_25192[(1)] = (11));

} else {
var statearr_25168_25193 = state_25155__$1;
(statearr_25168_25193[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (5))){
var inst_25127 = (state_25155[(11)]);
var inst_25121 = (state_25155[(7)]);
var inst_25126 = cljs.core.nth.call(null,inst_25121,(0),null);
var inst_25127__$1 = cljs.core.nth.call(null,inst_25121,(1),null);
var state_25155__$1 = (function (){var statearr_25169 = state_25155;
(statearr_25169[(11)] = inst_25127__$1);

(statearr_25169[(10)] = inst_25126);

return statearr_25169;
})();
if(cljs.core.truth_(inst_25127__$1)){
var statearr_25170_25194 = state_25155__$1;
(statearr_25170_25194[(1)] = (8));

} else {
var statearr_25171_25195 = state_25155__$1;
(statearr_25171_25195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (14))){
var inst_25126 = (state_25155[(10)]);
var inst_25136 = (state_25155[(9)]);
var inst_25134 = (state_25155[(2)]);
var inst_25135 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25136__$1 = cljs.core.get.call(null,inst_25135,inst_25126);
var state_25155__$1 = (function (){var statearr_25172 = state_25155;
(statearr_25172[(8)] = inst_25134);

(statearr_25172[(9)] = inst_25136__$1);

return statearr_25172;
})();
if(cljs.core.truth_(inst_25136__$1)){
var statearr_25173_25196 = state_25155__$1;
(statearr_25173_25196[(1)] = (15));

} else {
var statearr_25174_25197 = state_25155__$1;
(statearr_25174_25197[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (16))){
var inst_25134 = (state_25155[(8)]);
var inst_25140 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25134);
var state_25155__$1 = state_25155;
var statearr_25175_25198 = state_25155__$1;
(statearr_25175_25198[(2)] = inst_25140);

(statearr_25175_25198[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (10))){
var inst_25147 = (state_25155[(2)]);
var state_25155__$1 = (function (){var statearr_25176 = state_25155;
(statearr_25176[(12)] = inst_25147);

return statearr_25176;
})();
var statearr_25177_25199 = state_25155__$1;
(statearr_25177_25199[(2)] = null);

(statearr_25177_25199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (8))){
var inst_25127 = (state_25155[(11)]);
var inst_25129 = eval(inst_25127);
var state_25155__$1 = state_25155;
var statearr_25178_25200 = state_25155__$1;
(statearr_25178_25200[(2)] = inst_25129);

(statearr_25178_25200[(1)] = (10));


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
});})(c__21689__auto__))
;
return ((function (switch__21600__auto__,c__21689__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21601__auto__ = null;
var figwheel$client$file_reloading$state_machine__21601__auto____0 = (function (){
var statearr_25179 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25179[(0)] = figwheel$client$file_reloading$state_machine__21601__auto__);

(statearr_25179[(1)] = (1));

return statearr_25179;
});
var figwheel$client$file_reloading$state_machine__21601__auto____1 = (function (state_25155){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_25155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e25180){if((e25180 instanceof Object)){
var ex__21604__auto__ = e25180;
var statearr_25181_25201 = state_25155;
(statearr_25181_25201[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25202 = state_25155;
state_25155 = G__25202;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21601__auto__ = function(state_25155){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21601__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21601__auto____1.call(this,state_25155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21601__auto____0;
figwheel$client$file_reloading$state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21601__auto____1;
return figwheel$client$file_reloading$state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto__))
})();
var state__21691__auto__ = (function (){var statearr_25182 = f__21690__auto__.call(null);
(statearr_25182[(6)] = c__21689__auto__);

return statearr_25182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto__))
);

return c__21689__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__25204 = arguments.length;
switch (G__25204) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25206,callback){
var map__25207 = p__25206;
var map__25207__$1 = ((((!((map__25207 == null)))?(((((map__25207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25207):map__25207);
var file_msg = map__25207__$1;
var namespace = cljs.core.get.call(null,map__25207__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25207,map__25207__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25207,map__25207__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__25209){
var map__25210 = p__25209;
var map__25210__$1 = ((((!((map__25210 == null)))?(((((map__25210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25210):map__25210);
var file_msg = map__25210__$1;
var namespace = cljs.core.get.call(null,map__25210__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25212){
var map__25213 = p__25212;
var map__25213__$1 = ((((!((map__25213 == null)))?(((((map__25213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25213):map__25213);
var file_msg = map__25213__$1;
var namespace = cljs.core.get.call(null,map__25213__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25215,callback){
var map__25216 = p__25215;
var map__25216__$1 = ((((!((map__25216 == null)))?(((((map__25216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25216):map__25216);
var file_msg = map__25216__$1;
var request_url = cljs.core.get.call(null,map__25216__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25216__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21689__auto___25266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___25266,out){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___25266,out){
return (function (state_25251){
var state_val_25252 = (state_25251[(1)]);
if((state_val_25252 === (1))){
var inst_25225 = cljs.core.seq.call(null,files);
var inst_25226 = cljs.core.first.call(null,inst_25225);
var inst_25227 = cljs.core.next.call(null,inst_25225);
var inst_25228 = files;
var state_25251__$1 = (function (){var statearr_25253 = state_25251;
(statearr_25253[(7)] = inst_25227);

(statearr_25253[(8)] = inst_25228);

(statearr_25253[(9)] = inst_25226);

return statearr_25253;
})();
var statearr_25254_25267 = state_25251__$1;
(statearr_25254_25267[(2)] = null);

(statearr_25254_25267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (2))){
var inst_25228 = (state_25251[(8)]);
var inst_25234 = (state_25251[(10)]);
var inst_25233 = cljs.core.seq.call(null,inst_25228);
var inst_25234__$1 = cljs.core.first.call(null,inst_25233);
var inst_25235 = cljs.core.next.call(null,inst_25233);
var inst_25236 = (inst_25234__$1 == null);
var inst_25237 = cljs.core.not.call(null,inst_25236);
var state_25251__$1 = (function (){var statearr_25255 = state_25251;
(statearr_25255[(10)] = inst_25234__$1);

(statearr_25255[(11)] = inst_25235);

return statearr_25255;
})();
if(inst_25237){
var statearr_25256_25268 = state_25251__$1;
(statearr_25256_25268[(1)] = (4));

} else {
var statearr_25257_25269 = state_25251__$1;
(statearr_25257_25269[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (3))){
var inst_25249 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25251__$1,inst_25249);
} else {
if((state_val_25252 === (4))){
var inst_25234 = (state_25251[(10)]);
var inst_25239 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25234);
var state_25251__$1 = state_25251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25251__$1,(7),inst_25239);
} else {
if((state_val_25252 === (5))){
var inst_25245 = cljs.core.async.close_BANG_.call(null,out);
var state_25251__$1 = state_25251;
var statearr_25258_25270 = state_25251__$1;
(statearr_25258_25270[(2)] = inst_25245);

(statearr_25258_25270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (6))){
var inst_25247 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
var statearr_25259_25271 = state_25251__$1;
(statearr_25259_25271[(2)] = inst_25247);

(statearr_25259_25271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (7))){
var inst_25235 = (state_25251[(11)]);
var inst_25241 = (state_25251[(2)]);
var inst_25242 = cljs.core.async.put_BANG_.call(null,out,inst_25241);
var inst_25228 = inst_25235;
var state_25251__$1 = (function (){var statearr_25260 = state_25251;
(statearr_25260[(8)] = inst_25228);

(statearr_25260[(12)] = inst_25242);

return statearr_25260;
})();
var statearr_25261_25272 = state_25251__$1;
(statearr_25261_25272[(2)] = null);

(statearr_25261_25272[(1)] = (2));


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
});})(c__21689__auto___25266,out))
;
return ((function (switch__21600__auto__,c__21689__auto___25266,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21601__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21601__auto____0 = (function (){
var statearr_25262 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25262[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21601__auto__);

(statearr_25262[(1)] = (1));

return statearr_25262;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21601__auto____1 = (function (state_25251){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_25251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e25263){if((e25263 instanceof Object)){
var ex__21604__auto__ = e25263;
var statearr_25264_25273 = state_25251;
(statearr_25264_25273[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25274 = state_25251;
state_25251 = G__25274;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21601__auto__ = function(state_25251){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21601__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21601__auto____1.call(this,state_25251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21601__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21601__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___25266,out))
})();
var state__21691__auto__ = (function (){var statearr_25265 = f__21690__auto__.call(null);
(statearr_25265[(6)] = c__21689__auto___25266);

return statearr_25265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___25266,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25275,opts){
var map__25276 = p__25275;
var map__25276__$1 = ((((!((map__25276 == null)))?(((((map__25276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25276):map__25276);
var eval_body = cljs.core.get.call(null,map__25276__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25276__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25278){var e = e25278;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25279_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25279_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25280){
var vec__25281 = p__25280;
var k = cljs.core.nth.call(null,vec__25281,(0),null);
var v = cljs.core.nth.call(null,vec__25281,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25284){
var vec__25285 = p__25284;
var k = cljs.core.nth.call(null,vec__25285,(0),null);
var v = cljs.core.nth.call(null,vec__25285,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25291,p__25292){
var map__25293 = p__25291;
var map__25293__$1 = ((((!((map__25293 == null)))?(((((map__25293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25293):map__25293);
var opts = map__25293__$1;
var before_jsload = cljs.core.get.call(null,map__25293__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25293__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25293__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25294 = p__25292;
var map__25294__$1 = ((((!((map__25294 == null)))?(((((map__25294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25294):map__25294);
var msg = map__25294__$1;
var files = cljs.core.get.call(null,map__25294__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25294__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25294__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21689__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25448){
var state_val_25449 = (state_25448[(1)]);
if((state_val_25449 === (7))){
var inst_25308 = (state_25448[(7)]);
var inst_25309 = (state_25448[(8)]);
var inst_25310 = (state_25448[(9)]);
var inst_25311 = (state_25448[(10)]);
var inst_25316 = cljs.core._nth.call(null,inst_25309,inst_25311);
var inst_25317 = figwheel.client.file_reloading.eval_body.call(null,inst_25316,opts);
var inst_25318 = (inst_25311 + (1));
var tmp25450 = inst_25308;
var tmp25451 = inst_25309;
var tmp25452 = inst_25310;
var inst_25308__$1 = tmp25450;
var inst_25309__$1 = tmp25451;
var inst_25310__$1 = tmp25452;
var inst_25311__$1 = inst_25318;
var state_25448__$1 = (function (){var statearr_25453 = state_25448;
(statearr_25453[(7)] = inst_25308__$1);

(statearr_25453[(8)] = inst_25309__$1);

(statearr_25453[(9)] = inst_25310__$1);

(statearr_25453[(11)] = inst_25317);

(statearr_25453[(10)] = inst_25311__$1);

return statearr_25453;
})();
var statearr_25454_25537 = state_25448__$1;
(statearr_25454_25537[(2)] = null);

(statearr_25454_25537[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (20))){
var inst_25351 = (state_25448[(12)]);
var inst_25359 = figwheel.client.file_reloading.sort_files.call(null,inst_25351);
var state_25448__$1 = state_25448;
var statearr_25455_25538 = state_25448__$1;
(statearr_25455_25538[(2)] = inst_25359);

(statearr_25455_25538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (27))){
var state_25448__$1 = state_25448;
var statearr_25456_25539 = state_25448__$1;
(statearr_25456_25539[(2)] = null);

(statearr_25456_25539[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (1))){
var inst_25300 = (state_25448[(13)]);
var inst_25297 = before_jsload.call(null,files);
var inst_25298 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25299 = (function (){return ((function (inst_25300,inst_25297,inst_25298,state_val_25449,c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25288_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25288_SHARP_);
});
;})(inst_25300,inst_25297,inst_25298,state_val_25449,c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25300__$1 = cljs.core.filter.call(null,inst_25299,files);
var inst_25301 = cljs.core.not_empty.call(null,inst_25300__$1);
var state_25448__$1 = (function (){var statearr_25457 = state_25448;
(statearr_25457[(13)] = inst_25300__$1);

(statearr_25457[(14)] = inst_25298);

(statearr_25457[(15)] = inst_25297);

return statearr_25457;
})();
if(cljs.core.truth_(inst_25301)){
var statearr_25458_25540 = state_25448__$1;
(statearr_25458_25540[(1)] = (2));

} else {
var statearr_25459_25541 = state_25448__$1;
(statearr_25459_25541[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (24))){
var state_25448__$1 = state_25448;
var statearr_25460_25542 = state_25448__$1;
(statearr_25460_25542[(2)] = null);

(statearr_25460_25542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (39))){
var inst_25401 = (state_25448[(16)]);
var state_25448__$1 = state_25448;
var statearr_25461_25543 = state_25448__$1;
(statearr_25461_25543[(2)] = inst_25401);

(statearr_25461_25543[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (46))){
var inst_25443 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25462_25544 = state_25448__$1;
(statearr_25462_25544[(2)] = inst_25443);

(statearr_25462_25544[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (4))){
var inst_25345 = (state_25448[(2)]);
var inst_25346 = cljs.core.List.EMPTY;
var inst_25347 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25346);
var inst_25348 = (function (){return ((function (inst_25345,inst_25346,inst_25347,state_val_25449,c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25289_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25289_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25289_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__25289_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_25345,inst_25346,inst_25347,state_val_25449,c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25349 = cljs.core.filter.call(null,inst_25348,files);
var inst_25350 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25351 = cljs.core.concat.call(null,inst_25349,inst_25350);
var state_25448__$1 = (function (){var statearr_25463 = state_25448;
(statearr_25463[(17)] = inst_25345);

(statearr_25463[(18)] = inst_25347);

(statearr_25463[(12)] = inst_25351);

return statearr_25463;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25464_25545 = state_25448__$1;
(statearr_25464_25545[(1)] = (16));

} else {
var statearr_25465_25546 = state_25448__$1;
(statearr_25465_25546[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (15))){
var inst_25335 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25466_25547 = state_25448__$1;
(statearr_25466_25547[(2)] = inst_25335);

(statearr_25466_25547[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (21))){
var inst_25361 = (state_25448[(19)]);
var inst_25361__$1 = (state_25448[(2)]);
var inst_25362 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25361__$1);
var state_25448__$1 = (function (){var statearr_25467 = state_25448;
(statearr_25467[(19)] = inst_25361__$1);

return statearr_25467;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25448__$1,(22),inst_25362);
} else {
if((state_val_25449 === (31))){
var inst_25446 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25448__$1,inst_25446);
} else {
if((state_val_25449 === (32))){
var inst_25401 = (state_25448[(16)]);
var inst_25406 = inst_25401.cljs$lang$protocol_mask$partition0$;
var inst_25407 = (inst_25406 & (64));
var inst_25408 = inst_25401.cljs$core$ISeq$;
var inst_25409 = (cljs.core.PROTOCOL_SENTINEL === inst_25408);
var inst_25410 = ((inst_25407) || (inst_25409));
var state_25448__$1 = state_25448;
if(cljs.core.truth_(inst_25410)){
var statearr_25468_25548 = state_25448__$1;
(statearr_25468_25548[(1)] = (35));

} else {
var statearr_25469_25549 = state_25448__$1;
(statearr_25469_25549[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (40))){
var inst_25423 = (state_25448[(20)]);
var inst_25422 = (state_25448[(2)]);
var inst_25423__$1 = cljs.core.get.call(null,inst_25422,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25424 = cljs.core.get.call(null,inst_25422,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25425 = cljs.core.not_empty.call(null,inst_25423__$1);
var state_25448__$1 = (function (){var statearr_25470 = state_25448;
(statearr_25470[(20)] = inst_25423__$1);

(statearr_25470[(21)] = inst_25424);

return statearr_25470;
})();
if(cljs.core.truth_(inst_25425)){
var statearr_25471_25550 = state_25448__$1;
(statearr_25471_25550[(1)] = (41));

} else {
var statearr_25472_25551 = state_25448__$1;
(statearr_25472_25551[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (33))){
var state_25448__$1 = state_25448;
var statearr_25473_25552 = state_25448__$1;
(statearr_25473_25552[(2)] = false);

(statearr_25473_25552[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (13))){
var inst_25321 = (state_25448[(22)]);
var inst_25325 = cljs.core.chunk_first.call(null,inst_25321);
var inst_25326 = cljs.core.chunk_rest.call(null,inst_25321);
var inst_25327 = cljs.core.count.call(null,inst_25325);
var inst_25308 = inst_25326;
var inst_25309 = inst_25325;
var inst_25310 = inst_25327;
var inst_25311 = (0);
var state_25448__$1 = (function (){var statearr_25474 = state_25448;
(statearr_25474[(7)] = inst_25308);

(statearr_25474[(8)] = inst_25309);

(statearr_25474[(9)] = inst_25310);

(statearr_25474[(10)] = inst_25311);

return statearr_25474;
})();
var statearr_25475_25553 = state_25448__$1;
(statearr_25475_25553[(2)] = null);

(statearr_25475_25553[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (22))){
var inst_25364 = (state_25448[(23)]);
var inst_25361 = (state_25448[(19)]);
var inst_25369 = (state_25448[(24)]);
var inst_25365 = (state_25448[(25)]);
var inst_25364__$1 = (state_25448[(2)]);
var inst_25365__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25364__$1);
var inst_25366 = (function (){var all_files = inst_25361;
var res_SINGLEQUOTE_ = inst_25364__$1;
var res = inst_25365__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25364,inst_25361,inst_25369,inst_25365,inst_25364__$1,inst_25365__$1,state_val_25449,c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25290_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25290_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25364,inst_25361,inst_25369,inst_25365,inst_25364__$1,inst_25365__$1,state_val_25449,c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25367 = cljs.core.filter.call(null,inst_25366,inst_25364__$1);
var inst_25368 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25369__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25368);
var inst_25370 = cljs.core.not_empty.call(null,inst_25369__$1);
var state_25448__$1 = (function (){var statearr_25476 = state_25448;
(statearr_25476[(23)] = inst_25364__$1);

(statearr_25476[(24)] = inst_25369__$1);

(statearr_25476[(26)] = inst_25367);

(statearr_25476[(25)] = inst_25365__$1);

return statearr_25476;
})();
if(cljs.core.truth_(inst_25370)){
var statearr_25477_25554 = state_25448__$1;
(statearr_25477_25554[(1)] = (23));

} else {
var statearr_25478_25555 = state_25448__$1;
(statearr_25478_25555[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (36))){
var state_25448__$1 = state_25448;
var statearr_25479_25556 = state_25448__$1;
(statearr_25479_25556[(2)] = false);

(statearr_25479_25556[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (41))){
var inst_25423 = (state_25448[(20)]);
var inst_25427 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25428 = cljs.core.map.call(null,inst_25427,inst_25423);
var inst_25429 = cljs.core.pr_str.call(null,inst_25428);
var inst_25430 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25429)].join('');
var inst_25431 = figwheel.client.utils.log.call(null,inst_25430);
var state_25448__$1 = state_25448;
var statearr_25480_25557 = state_25448__$1;
(statearr_25480_25557[(2)] = inst_25431);

(statearr_25480_25557[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (43))){
var inst_25424 = (state_25448[(21)]);
var inst_25434 = (state_25448[(2)]);
var inst_25435 = cljs.core.not_empty.call(null,inst_25424);
var state_25448__$1 = (function (){var statearr_25481 = state_25448;
(statearr_25481[(27)] = inst_25434);

return statearr_25481;
})();
if(cljs.core.truth_(inst_25435)){
var statearr_25482_25558 = state_25448__$1;
(statearr_25482_25558[(1)] = (44));

} else {
var statearr_25483_25559 = state_25448__$1;
(statearr_25483_25559[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (29))){
var inst_25364 = (state_25448[(23)]);
var inst_25361 = (state_25448[(19)]);
var inst_25369 = (state_25448[(24)]);
var inst_25367 = (state_25448[(26)]);
var inst_25365 = (state_25448[(25)]);
var inst_25401 = (state_25448[(16)]);
var inst_25397 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25400 = (function (){var all_files = inst_25361;
var res_SINGLEQUOTE_ = inst_25364;
var res = inst_25365;
var files_not_loaded = inst_25367;
var dependencies_that_loaded = inst_25369;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25364,inst_25361,inst_25369,inst_25367,inst_25365,inst_25401,inst_25397,state_val_25449,c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25399){
var map__25484 = p__25399;
var map__25484__$1 = ((((!((map__25484 == null)))?(((((map__25484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25484):map__25484);
var namespace = cljs.core.get.call(null,map__25484__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25364,inst_25361,inst_25369,inst_25367,inst_25365,inst_25401,inst_25397,state_val_25449,c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25401__$1 = cljs.core.group_by.call(null,inst_25400,inst_25367);
var inst_25403 = (inst_25401__$1 == null);
var inst_25404 = cljs.core.not.call(null,inst_25403);
var state_25448__$1 = (function (){var statearr_25486 = state_25448;
(statearr_25486[(28)] = inst_25397);

(statearr_25486[(16)] = inst_25401__$1);

return statearr_25486;
})();
if(inst_25404){
var statearr_25487_25560 = state_25448__$1;
(statearr_25487_25560[(1)] = (32));

} else {
var statearr_25488_25561 = state_25448__$1;
(statearr_25488_25561[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (44))){
var inst_25424 = (state_25448[(21)]);
var inst_25437 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25424);
var inst_25438 = cljs.core.pr_str.call(null,inst_25437);
var inst_25439 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25438)].join('');
var inst_25440 = figwheel.client.utils.log.call(null,inst_25439);
var state_25448__$1 = state_25448;
var statearr_25489_25562 = state_25448__$1;
(statearr_25489_25562[(2)] = inst_25440);

(statearr_25489_25562[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (6))){
var inst_25342 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25490_25563 = state_25448__$1;
(statearr_25490_25563[(2)] = inst_25342);

(statearr_25490_25563[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (28))){
var inst_25367 = (state_25448[(26)]);
var inst_25394 = (state_25448[(2)]);
var inst_25395 = cljs.core.not_empty.call(null,inst_25367);
var state_25448__$1 = (function (){var statearr_25491 = state_25448;
(statearr_25491[(29)] = inst_25394);

return statearr_25491;
})();
if(cljs.core.truth_(inst_25395)){
var statearr_25492_25564 = state_25448__$1;
(statearr_25492_25564[(1)] = (29));

} else {
var statearr_25493_25565 = state_25448__$1;
(statearr_25493_25565[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (25))){
var inst_25365 = (state_25448[(25)]);
var inst_25381 = (state_25448[(2)]);
var inst_25382 = cljs.core.not_empty.call(null,inst_25365);
var state_25448__$1 = (function (){var statearr_25494 = state_25448;
(statearr_25494[(30)] = inst_25381);

return statearr_25494;
})();
if(cljs.core.truth_(inst_25382)){
var statearr_25495_25566 = state_25448__$1;
(statearr_25495_25566[(1)] = (26));

} else {
var statearr_25496_25567 = state_25448__$1;
(statearr_25496_25567[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (34))){
var inst_25417 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
if(cljs.core.truth_(inst_25417)){
var statearr_25497_25568 = state_25448__$1;
(statearr_25497_25568[(1)] = (38));

} else {
var statearr_25498_25569 = state_25448__$1;
(statearr_25498_25569[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (17))){
var state_25448__$1 = state_25448;
var statearr_25499_25570 = state_25448__$1;
(statearr_25499_25570[(2)] = recompile_dependents);

(statearr_25499_25570[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (3))){
var state_25448__$1 = state_25448;
var statearr_25500_25571 = state_25448__$1;
(statearr_25500_25571[(2)] = null);

(statearr_25500_25571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (12))){
var inst_25338 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25501_25572 = state_25448__$1;
(statearr_25501_25572[(2)] = inst_25338);

(statearr_25501_25572[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (2))){
var inst_25300 = (state_25448[(13)]);
var inst_25307 = cljs.core.seq.call(null,inst_25300);
var inst_25308 = inst_25307;
var inst_25309 = null;
var inst_25310 = (0);
var inst_25311 = (0);
var state_25448__$1 = (function (){var statearr_25502 = state_25448;
(statearr_25502[(7)] = inst_25308);

(statearr_25502[(8)] = inst_25309);

(statearr_25502[(9)] = inst_25310);

(statearr_25502[(10)] = inst_25311);

return statearr_25502;
})();
var statearr_25503_25573 = state_25448__$1;
(statearr_25503_25573[(2)] = null);

(statearr_25503_25573[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (23))){
var inst_25364 = (state_25448[(23)]);
var inst_25361 = (state_25448[(19)]);
var inst_25369 = (state_25448[(24)]);
var inst_25367 = (state_25448[(26)]);
var inst_25365 = (state_25448[(25)]);
var inst_25372 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25374 = (function (){var all_files = inst_25361;
var res_SINGLEQUOTE_ = inst_25364;
var res = inst_25365;
var files_not_loaded = inst_25367;
var dependencies_that_loaded = inst_25369;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25364,inst_25361,inst_25369,inst_25367,inst_25365,inst_25372,state_val_25449,c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25373){
var map__25504 = p__25373;
var map__25504__$1 = ((((!((map__25504 == null)))?(((((map__25504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25504):map__25504);
var request_url = cljs.core.get.call(null,map__25504__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25364,inst_25361,inst_25369,inst_25367,inst_25365,inst_25372,state_val_25449,c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25375 = cljs.core.reverse.call(null,inst_25369);
var inst_25376 = cljs.core.map.call(null,inst_25374,inst_25375);
var inst_25377 = cljs.core.pr_str.call(null,inst_25376);
var inst_25378 = figwheel.client.utils.log.call(null,inst_25377);
var state_25448__$1 = (function (){var statearr_25506 = state_25448;
(statearr_25506[(31)] = inst_25372);

return statearr_25506;
})();
var statearr_25507_25574 = state_25448__$1;
(statearr_25507_25574[(2)] = inst_25378);

(statearr_25507_25574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (35))){
var state_25448__$1 = state_25448;
var statearr_25508_25575 = state_25448__$1;
(statearr_25508_25575[(2)] = true);

(statearr_25508_25575[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (19))){
var inst_25351 = (state_25448[(12)]);
var inst_25357 = figwheel.client.file_reloading.expand_files.call(null,inst_25351);
var state_25448__$1 = state_25448;
var statearr_25509_25576 = state_25448__$1;
(statearr_25509_25576[(2)] = inst_25357);

(statearr_25509_25576[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (11))){
var state_25448__$1 = state_25448;
var statearr_25510_25577 = state_25448__$1;
(statearr_25510_25577[(2)] = null);

(statearr_25510_25577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (9))){
var inst_25340 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25511_25578 = state_25448__$1;
(statearr_25511_25578[(2)] = inst_25340);

(statearr_25511_25578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (5))){
var inst_25310 = (state_25448[(9)]);
var inst_25311 = (state_25448[(10)]);
var inst_25313 = (inst_25311 < inst_25310);
var inst_25314 = inst_25313;
var state_25448__$1 = state_25448;
if(cljs.core.truth_(inst_25314)){
var statearr_25512_25579 = state_25448__$1;
(statearr_25512_25579[(1)] = (7));

} else {
var statearr_25513_25580 = state_25448__$1;
(statearr_25513_25580[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (14))){
var inst_25321 = (state_25448[(22)]);
var inst_25330 = cljs.core.first.call(null,inst_25321);
var inst_25331 = figwheel.client.file_reloading.eval_body.call(null,inst_25330,opts);
var inst_25332 = cljs.core.next.call(null,inst_25321);
var inst_25308 = inst_25332;
var inst_25309 = null;
var inst_25310 = (0);
var inst_25311 = (0);
var state_25448__$1 = (function (){var statearr_25514 = state_25448;
(statearr_25514[(7)] = inst_25308);

(statearr_25514[(8)] = inst_25309);

(statearr_25514[(32)] = inst_25331);

(statearr_25514[(9)] = inst_25310);

(statearr_25514[(10)] = inst_25311);

return statearr_25514;
})();
var statearr_25515_25581 = state_25448__$1;
(statearr_25515_25581[(2)] = null);

(statearr_25515_25581[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (45))){
var state_25448__$1 = state_25448;
var statearr_25516_25582 = state_25448__$1;
(statearr_25516_25582[(2)] = null);

(statearr_25516_25582[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (26))){
var inst_25364 = (state_25448[(23)]);
var inst_25361 = (state_25448[(19)]);
var inst_25369 = (state_25448[(24)]);
var inst_25367 = (state_25448[(26)]);
var inst_25365 = (state_25448[(25)]);
var inst_25384 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25386 = (function (){var all_files = inst_25361;
var res_SINGLEQUOTE_ = inst_25364;
var res = inst_25365;
var files_not_loaded = inst_25367;
var dependencies_that_loaded = inst_25369;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25364,inst_25361,inst_25369,inst_25367,inst_25365,inst_25384,state_val_25449,c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25385){
var map__25517 = p__25385;
var map__25517__$1 = ((((!((map__25517 == null)))?(((((map__25517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25517):map__25517);
var namespace = cljs.core.get.call(null,map__25517__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25517__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25364,inst_25361,inst_25369,inst_25367,inst_25365,inst_25384,state_val_25449,c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25387 = cljs.core.map.call(null,inst_25386,inst_25365);
var inst_25388 = cljs.core.pr_str.call(null,inst_25387);
var inst_25389 = figwheel.client.utils.log.call(null,inst_25388);
var inst_25390 = (function (){var all_files = inst_25361;
var res_SINGLEQUOTE_ = inst_25364;
var res = inst_25365;
var files_not_loaded = inst_25367;
var dependencies_that_loaded = inst_25369;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25364,inst_25361,inst_25369,inst_25367,inst_25365,inst_25384,inst_25386,inst_25387,inst_25388,inst_25389,state_val_25449,c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25364,inst_25361,inst_25369,inst_25367,inst_25365,inst_25384,inst_25386,inst_25387,inst_25388,inst_25389,state_val_25449,c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25391 = setTimeout(inst_25390,(10));
var state_25448__$1 = (function (){var statearr_25519 = state_25448;
(statearr_25519[(33)] = inst_25384);

(statearr_25519[(34)] = inst_25389);

return statearr_25519;
})();
var statearr_25520_25583 = state_25448__$1;
(statearr_25520_25583[(2)] = inst_25391);

(statearr_25520_25583[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (16))){
var state_25448__$1 = state_25448;
var statearr_25521_25584 = state_25448__$1;
(statearr_25521_25584[(2)] = reload_dependents);

(statearr_25521_25584[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (38))){
var inst_25401 = (state_25448[(16)]);
var inst_25419 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25401);
var state_25448__$1 = state_25448;
var statearr_25522_25585 = state_25448__$1;
(statearr_25522_25585[(2)] = inst_25419);

(statearr_25522_25585[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (30))){
var state_25448__$1 = state_25448;
var statearr_25523_25586 = state_25448__$1;
(statearr_25523_25586[(2)] = null);

(statearr_25523_25586[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (10))){
var inst_25321 = (state_25448[(22)]);
var inst_25323 = cljs.core.chunked_seq_QMARK_.call(null,inst_25321);
var state_25448__$1 = state_25448;
if(inst_25323){
var statearr_25524_25587 = state_25448__$1;
(statearr_25524_25587[(1)] = (13));

} else {
var statearr_25525_25588 = state_25448__$1;
(statearr_25525_25588[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (18))){
var inst_25355 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
if(cljs.core.truth_(inst_25355)){
var statearr_25526_25589 = state_25448__$1;
(statearr_25526_25589[(1)] = (19));

} else {
var statearr_25527_25590 = state_25448__$1;
(statearr_25527_25590[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (42))){
var state_25448__$1 = state_25448;
var statearr_25528_25591 = state_25448__$1;
(statearr_25528_25591[(2)] = null);

(statearr_25528_25591[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (37))){
var inst_25414 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25529_25592 = state_25448__$1;
(statearr_25529_25592[(2)] = inst_25414);

(statearr_25529_25592[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (8))){
var inst_25308 = (state_25448[(7)]);
var inst_25321 = (state_25448[(22)]);
var inst_25321__$1 = cljs.core.seq.call(null,inst_25308);
var state_25448__$1 = (function (){var statearr_25530 = state_25448;
(statearr_25530[(22)] = inst_25321__$1);

return statearr_25530;
})();
if(inst_25321__$1){
var statearr_25531_25593 = state_25448__$1;
(statearr_25531_25593[(1)] = (10));

} else {
var statearr_25532_25594 = state_25448__$1;
(statearr_25532_25594[(1)] = (11));

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
}
});})(c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21600__auto__,c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21601__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21601__auto____0 = (function (){
var statearr_25533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25533[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21601__auto__);

(statearr_25533[(1)] = (1));

return statearr_25533;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21601__auto____1 = (function (state_25448){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_25448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e25534){if((e25534 instanceof Object)){
var ex__21604__auto__ = e25534;
var statearr_25535_25595 = state_25448;
(statearr_25535_25595[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25596 = state_25448;
state_25448 = G__25596;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21601__auto__ = function(state_25448){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21601__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21601__auto____1.call(this,state_25448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21601__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21601__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21691__auto__ = (function (){var statearr_25536 = f__21690__auto__.call(null);
(statearr_25536[(6)] = c__21689__auto__);

return statearr_25536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto__,map__25293,map__25293__$1,opts,before_jsload,on_jsload,reload_dependents,map__25294,map__25294__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21689__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25599,link){
var map__25600 = p__25599;
var map__25600__$1 = ((((!((map__25600 == null)))?(((((map__25600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25600):map__25600);
var file = cljs.core.get.call(null,map__25600__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__25600,map__25600__$1,file){
return (function (p1__25597_SHARP_,p2__25598_SHARP_){
if(cljs.core._EQ_.call(null,p1__25597_SHARP_,p2__25598_SHARP_)){
return p1__25597_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__25600,map__25600__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25603){
var map__25604 = p__25603;
var map__25604__$1 = ((((!((map__25604 == null)))?(((((map__25604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25604):map__25604);
var match_length = cljs.core.get.call(null,map__25604__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25604__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25602_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25602_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25606_SHARP_,p2__25607_SHARP_){
return cljs.core.assoc.call(null,p1__25606_SHARP_,cljs.core.get.call(null,p2__25607_SHARP_,key),p2__25607_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_25608 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_25608);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_25608);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25609,p__25610){
var map__25611 = p__25609;
var map__25611__$1 = ((((!((map__25611 == null)))?(((((map__25611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25611):map__25611);
var on_cssload = cljs.core.get.call(null,map__25611__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__25612 = p__25610;
var map__25612__$1 = ((((!((map__25612 == null)))?(((((map__25612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25612):map__25612);
var files_msg = map__25612__$1;
var files = cljs.core.get.call(null,map__25612__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1535420497602
