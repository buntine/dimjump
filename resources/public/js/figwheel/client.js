// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e26711){if((e26711 instanceof Error)){
var e = e26711;
return "Error: Unable to stringify";
} else {
throw e26711;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__26714 = arguments.length;
switch (G__26714) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__26712_SHARP_){
if(typeof p1__26712_SHARP_ === 'string'){
return p1__26712_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__26712_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26717 = arguments.length;
var i__4532__auto___26718 = (0);
while(true){
if((i__4532__auto___26718 < len__4531__auto___26717)){
args__4534__auto__.push((arguments[i__4532__auto___26718]));

var G__26719 = (i__4532__auto___26718 + (1));
i__4532__auto___26718 = G__26719;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq26716){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26716));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26721 = arguments.length;
var i__4532__auto___26722 = (0);
while(true){
if((i__4532__auto___26722 < len__4531__auto___26721)){
args__4534__auto__.push((arguments[i__4532__auto___26722]));

var G__26723 = (i__4532__auto___26722 + (1));
i__4532__auto___26722 = G__26723;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq26720){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26720));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26724){
var map__26725 = p__26724;
var map__26725__$1 = ((((!((map__26725 == null)))?(((((map__26725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26725):map__26725);
var message = cljs.core.get.call(null,map__26725__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26725__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21689__auto___26804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___26804,ch){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___26804,ch){
return (function (state_26776){
var state_val_26777 = (state_26776[(1)]);
if((state_val_26777 === (7))){
var inst_26772 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
var statearr_26778_26805 = state_26776__$1;
(statearr_26778_26805[(2)] = inst_26772);

(statearr_26778_26805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (1))){
var state_26776__$1 = state_26776;
var statearr_26779_26806 = state_26776__$1;
(statearr_26779_26806[(2)] = null);

(statearr_26779_26806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (4))){
var inst_26729 = (state_26776[(7)]);
var inst_26729__$1 = (state_26776[(2)]);
var state_26776__$1 = (function (){var statearr_26780 = state_26776;
(statearr_26780[(7)] = inst_26729__$1);

return statearr_26780;
})();
if(cljs.core.truth_(inst_26729__$1)){
var statearr_26781_26807 = state_26776__$1;
(statearr_26781_26807[(1)] = (5));

} else {
var statearr_26782_26808 = state_26776__$1;
(statearr_26782_26808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (15))){
var inst_26736 = (state_26776[(8)]);
var inst_26751 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26736);
var inst_26752 = cljs.core.first.call(null,inst_26751);
var inst_26753 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26752);
var inst_26754 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26753)].join('');
var inst_26755 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26754);
var state_26776__$1 = state_26776;
var statearr_26783_26809 = state_26776__$1;
(statearr_26783_26809[(2)] = inst_26755);

(statearr_26783_26809[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (13))){
var inst_26760 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
var statearr_26784_26810 = state_26776__$1;
(statearr_26784_26810[(2)] = inst_26760);

(statearr_26784_26810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (6))){
var state_26776__$1 = state_26776;
var statearr_26785_26811 = state_26776__$1;
(statearr_26785_26811[(2)] = null);

(statearr_26785_26811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (17))){
var inst_26758 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
var statearr_26786_26812 = state_26776__$1;
(statearr_26786_26812[(2)] = inst_26758);

(statearr_26786_26812[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (3))){
var inst_26774 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26776__$1,inst_26774);
} else {
if((state_val_26777 === (12))){
var inst_26735 = (state_26776[(9)]);
var inst_26749 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26735,opts);
var state_26776__$1 = state_26776;
if(cljs.core.truth_(inst_26749)){
var statearr_26787_26813 = state_26776__$1;
(statearr_26787_26813[(1)] = (15));

} else {
var statearr_26788_26814 = state_26776__$1;
(statearr_26788_26814[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (2))){
var state_26776__$1 = state_26776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26776__$1,(4),ch);
} else {
if((state_val_26777 === (11))){
var inst_26736 = (state_26776[(8)]);
var inst_26741 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26742 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26736);
var inst_26743 = cljs.core.async.timeout.call(null,(1000));
var inst_26744 = [inst_26742,inst_26743];
var inst_26745 = (new cljs.core.PersistentVector(null,2,(5),inst_26741,inst_26744,null));
var state_26776__$1 = state_26776;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26776__$1,(14),inst_26745);
} else {
if((state_val_26777 === (9))){
var inst_26736 = (state_26776[(8)]);
var inst_26762 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26763 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26736);
var inst_26764 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26763);
var inst_26765 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26764)].join('');
var inst_26766 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26765);
var state_26776__$1 = (function (){var statearr_26789 = state_26776;
(statearr_26789[(10)] = inst_26762);

return statearr_26789;
})();
var statearr_26790_26815 = state_26776__$1;
(statearr_26790_26815[(2)] = inst_26766);

(statearr_26790_26815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (5))){
var inst_26729 = (state_26776[(7)]);
var inst_26731 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26732 = (new cljs.core.PersistentArrayMap(null,2,inst_26731,null));
var inst_26733 = (new cljs.core.PersistentHashSet(null,inst_26732,null));
var inst_26734 = figwheel.client.focus_msgs.call(null,inst_26733,inst_26729);
var inst_26735 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26734);
var inst_26736 = cljs.core.first.call(null,inst_26734);
var inst_26737 = figwheel.client.autoload_QMARK_.call(null);
var state_26776__$1 = (function (){var statearr_26791 = state_26776;
(statearr_26791[(9)] = inst_26735);

(statearr_26791[(8)] = inst_26736);

return statearr_26791;
})();
if(cljs.core.truth_(inst_26737)){
var statearr_26792_26816 = state_26776__$1;
(statearr_26792_26816[(1)] = (8));

} else {
var statearr_26793_26817 = state_26776__$1;
(statearr_26793_26817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (14))){
var inst_26747 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
var statearr_26794_26818 = state_26776__$1;
(statearr_26794_26818[(2)] = inst_26747);

(statearr_26794_26818[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (16))){
var state_26776__$1 = state_26776;
var statearr_26795_26819 = state_26776__$1;
(statearr_26795_26819[(2)] = null);

(statearr_26795_26819[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (10))){
var inst_26768 = (state_26776[(2)]);
var state_26776__$1 = (function (){var statearr_26796 = state_26776;
(statearr_26796[(11)] = inst_26768);

return statearr_26796;
})();
var statearr_26797_26820 = state_26776__$1;
(statearr_26797_26820[(2)] = null);

(statearr_26797_26820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (8))){
var inst_26735 = (state_26776[(9)]);
var inst_26739 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26735,opts);
var state_26776__$1 = state_26776;
if(cljs.core.truth_(inst_26739)){
var statearr_26798_26821 = state_26776__$1;
(statearr_26798_26821[(1)] = (11));

} else {
var statearr_26799_26822 = state_26776__$1;
(statearr_26799_26822[(1)] = (12));

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
});})(c__21689__auto___26804,ch))
;
return ((function (switch__21600__auto__,c__21689__auto___26804,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21601__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21601__auto____0 = (function (){
var statearr_26800 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26800[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21601__auto__);

(statearr_26800[(1)] = (1));

return statearr_26800;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21601__auto____1 = (function (state_26776){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_26776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e26801){if((e26801 instanceof Object)){
var ex__21604__auto__ = e26801;
var statearr_26802_26823 = state_26776;
(statearr_26802_26823[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26824 = state_26776;
state_26776 = G__26824;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21601__auto__ = function(state_26776){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21601__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21601__auto____1.call(this,state_26776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21601__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21601__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___26804,ch))
})();
var state__21691__auto__ = (function (){var statearr_26803 = f__21690__auto__.call(null);
(statearr_26803[(6)] = c__21689__auto___26804);

return statearr_26803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___26804,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26825_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26825_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26829 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26829){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_26827 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_26828 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_26827,_STAR_print_fn_STAR_26828,sb,base_path_26829){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_26827,_STAR_print_fn_STAR_26828,sb,base_path_26829))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26828;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26827;
}}catch (e26826){if((e26826 instanceof Error)){
var e = e26826;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26829], null));
} else {
var e = e26826;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26829))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26830){
var map__26831 = p__26830;
var map__26831__$1 = ((((!((map__26831 == null)))?(((((map__26831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26831):map__26831);
var opts = map__26831__$1;
var build_id = cljs.core.get.call(null,map__26831__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26831,map__26831__$1,opts,build_id){
return (function (p__26833){
var vec__26834 = p__26833;
var seq__26835 = cljs.core.seq.call(null,vec__26834);
var first__26836 = cljs.core.first.call(null,seq__26835);
var seq__26835__$1 = cljs.core.next.call(null,seq__26835);
var map__26837 = first__26836;
var map__26837__$1 = ((((!((map__26837 == null)))?(((((map__26837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26837):map__26837);
var msg = map__26837__$1;
var msg_name = cljs.core.get.call(null,map__26837__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__26835__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26834,seq__26835,first__26836,seq__26835__$1,map__26837,map__26837__$1,msg,msg_name,_,map__26831,map__26831__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26834,seq__26835,first__26836,seq__26835__$1,map__26837,map__26837__$1,msg,msg_name,_,map__26831,map__26831__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26831,map__26831__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26839){
var vec__26840 = p__26839;
var seq__26841 = cljs.core.seq.call(null,vec__26840);
var first__26842 = cljs.core.first.call(null,seq__26841);
var seq__26841__$1 = cljs.core.next.call(null,seq__26841);
var map__26843 = first__26842;
var map__26843__$1 = ((((!((map__26843 == null)))?(((((map__26843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26843):map__26843);
var msg = map__26843__$1;
var msg_name = cljs.core.get.call(null,map__26843__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__26841__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26845){
var map__26846 = p__26845;
var map__26846__$1 = ((((!((map__26846 == null)))?(((((map__26846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26846):map__26846);
var on_compile_warning = cljs.core.get.call(null,map__26846__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26846__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26846,map__26846__$1,on_compile_warning,on_compile_fail){
return (function (p__26848){
var vec__26849 = p__26848;
var seq__26850 = cljs.core.seq.call(null,vec__26849);
var first__26851 = cljs.core.first.call(null,seq__26850);
var seq__26850__$1 = cljs.core.next.call(null,seq__26850);
var map__26852 = first__26851;
var map__26852__$1 = ((((!((map__26852 == null)))?(((((map__26852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26852):map__26852);
var msg = map__26852__$1;
var msg_name = cljs.core.get.call(null,map__26852__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__26850__$1;
var pred__26854 = cljs.core._EQ_;
var expr__26855 = msg_name;
if(cljs.core.truth_(pred__26854.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26855))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26854.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26855))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26846,map__26846__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21689__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto__,msg_hist,msg_names,msg){
return (function (state_26944){
var state_val_26945 = (state_26944[(1)]);
if((state_val_26945 === (7))){
var inst_26864 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
if(cljs.core.truth_(inst_26864)){
var statearr_26946_26993 = state_26944__$1;
(statearr_26946_26993[(1)] = (8));

} else {
var statearr_26947_26994 = state_26944__$1;
(statearr_26947_26994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (20))){
var inst_26938 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
var statearr_26948_26995 = state_26944__$1;
(statearr_26948_26995[(2)] = inst_26938);

(statearr_26948_26995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (27))){
var inst_26934 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
var statearr_26949_26996 = state_26944__$1;
(statearr_26949_26996[(2)] = inst_26934);

(statearr_26949_26996[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (1))){
var inst_26857 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26944__$1 = state_26944;
if(cljs.core.truth_(inst_26857)){
var statearr_26950_26997 = state_26944__$1;
(statearr_26950_26997[(1)] = (2));

} else {
var statearr_26951_26998 = state_26944__$1;
(statearr_26951_26998[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (24))){
var inst_26936 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
var statearr_26952_26999 = state_26944__$1;
(statearr_26952_26999[(2)] = inst_26936);

(statearr_26952_26999[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (4))){
var inst_26942 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26944__$1,inst_26942);
} else {
if((state_val_26945 === (15))){
var inst_26940 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
var statearr_26953_27000 = state_26944__$1;
(statearr_26953_27000[(2)] = inst_26940);

(statearr_26953_27000[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (21))){
var inst_26893 = (state_26944[(2)]);
var inst_26894 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26895 = figwheel.client.auto_jump_to_error.call(null,opts,inst_26894);
var state_26944__$1 = (function (){var statearr_26954 = state_26944;
(statearr_26954[(7)] = inst_26893);

return statearr_26954;
})();
var statearr_26955_27001 = state_26944__$1;
(statearr_26955_27001[(2)] = inst_26895);

(statearr_26955_27001[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (31))){
var inst_26923 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26944__$1 = state_26944;
if(cljs.core.truth_(inst_26923)){
var statearr_26956_27002 = state_26944__$1;
(statearr_26956_27002[(1)] = (34));

} else {
var statearr_26957_27003 = state_26944__$1;
(statearr_26957_27003[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (32))){
var inst_26932 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
var statearr_26958_27004 = state_26944__$1;
(statearr_26958_27004[(2)] = inst_26932);

(statearr_26958_27004[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (33))){
var inst_26919 = (state_26944[(2)]);
var inst_26920 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26921 = figwheel.client.auto_jump_to_error.call(null,opts,inst_26920);
var state_26944__$1 = (function (){var statearr_26959 = state_26944;
(statearr_26959[(8)] = inst_26919);

return statearr_26959;
})();
var statearr_26960_27005 = state_26944__$1;
(statearr_26960_27005[(2)] = inst_26921);

(statearr_26960_27005[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (13))){
var inst_26878 = figwheel.client.heads_up.clear.call(null);
var state_26944__$1 = state_26944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26944__$1,(16),inst_26878);
} else {
if((state_val_26945 === (22))){
var inst_26899 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26900 = figwheel.client.heads_up.append_warning_message.call(null,inst_26899);
var state_26944__$1 = state_26944;
var statearr_26961_27006 = state_26944__$1;
(statearr_26961_27006[(2)] = inst_26900);

(statearr_26961_27006[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (36))){
var inst_26930 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
var statearr_26962_27007 = state_26944__$1;
(statearr_26962_27007[(2)] = inst_26930);

(statearr_26962_27007[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (29))){
var inst_26910 = (state_26944[(2)]);
var inst_26911 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26912 = figwheel.client.auto_jump_to_error.call(null,opts,inst_26911);
var state_26944__$1 = (function (){var statearr_26963 = state_26944;
(statearr_26963[(9)] = inst_26910);

return statearr_26963;
})();
var statearr_26964_27008 = state_26944__$1;
(statearr_26964_27008[(2)] = inst_26912);

(statearr_26964_27008[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (6))){
var inst_26859 = (state_26944[(10)]);
var state_26944__$1 = state_26944;
var statearr_26965_27009 = state_26944__$1;
(statearr_26965_27009[(2)] = inst_26859);

(statearr_26965_27009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (28))){
var inst_26906 = (state_26944[(2)]);
var inst_26907 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26908 = figwheel.client.heads_up.display_warning.call(null,inst_26907);
var state_26944__$1 = (function (){var statearr_26966 = state_26944;
(statearr_26966[(11)] = inst_26906);

return statearr_26966;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26944__$1,(29),inst_26908);
} else {
if((state_val_26945 === (25))){
var inst_26904 = figwheel.client.heads_up.clear.call(null);
var state_26944__$1 = state_26944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26944__$1,(28),inst_26904);
} else {
if((state_val_26945 === (34))){
var inst_26925 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26944__$1 = state_26944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26944__$1,(37),inst_26925);
} else {
if((state_val_26945 === (17))){
var inst_26884 = (state_26944[(2)]);
var inst_26885 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26886 = figwheel.client.auto_jump_to_error.call(null,opts,inst_26885);
var state_26944__$1 = (function (){var statearr_26967 = state_26944;
(statearr_26967[(12)] = inst_26884);

return statearr_26967;
})();
var statearr_26968_27010 = state_26944__$1;
(statearr_26968_27010[(2)] = inst_26886);

(statearr_26968_27010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (3))){
var inst_26876 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26944__$1 = state_26944;
if(cljs.core.truth_(inst_26876)){
var statearr_26969_27011 = state_26944__$1;
(statearr_26969_27011[(1)] = (13));

} else {
var statearr_26970_27012 = state_26944__$1;
(statearr_26970_27012[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (12))){
var inst_26872 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
var statearr_26971_27013 = state_26944__$1;
(statearr_26971_27013[(2)] = inst_26872);

(statearr_26971_27013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (2))){
var inst_26859 = (state_26944[(10)]);
var inst_26859__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26944__$1 = (function (){var statearr_26972 = state_26944;
(statearr_26972[(10)] = inst_26859__$1);

return statearr_26972;
})();
if(cljs.core.truth_(inst_26859__$1)){
var statearr_26973_27014 = state_26944__$1;
(statearr_26973_27014[(1)] = (5));

} else {
var statearr_26974_27015 = state_26944__$1;
(statearr_26974_27015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (23))){
var inst_26902 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26944__$1 = state_26944;
if(cljs.core.truth_(inst_26902)){
var statearr_26975_27016 = state_26944__$1;
(statearr_26975_27016[(1)] = (25));

} else {
var statearr_26976_27017 = state_26944__$1;
(statearr_26976_27017[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (35))){
var state_26944__$1 = state_26944;
var statearr_26977_27018 = state_26944__$1;
(statearr_26977_27018[(2)] = null);

(statearr_26977_27018[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (19))){
var inst_26897 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26944__$1 = state_26944;
if(cljs.core.truth_(inst_26897)){
var statearr_26978_27019 = state_26944__$1;
(statearr_26978_27019[(1)] = (22));

} else {
var statearr_26979_27020 = state_26944__$1;
(statearr_26979_27020[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (11))){
var inst_26868 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
var statearr_26980_27021 = state_26944__$1;
(statearr_26980_27021[(2)] = inst_26868);

(statearr_26980_27021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (9))){
var inst_26870 = figwheel.client.heads_up.clear.call(null);
var state_26944__$1 = state_26944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26944__$1,(12),inst_26870);
} else {
if((state_val_26945 === (5))){
var inst_26861 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26944__$1 = state_26944;
var statearr_26981_27022 = state_26944__$1;
(statearr_26981_27022[(2)] = inst_26861);

(statearr_26981_27022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (14))){
var inst_26888 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26944__$1 = state_26944;
if(cljs.core.truth_(inst_26888)){
var statearr_26982_27023 = state_26944__$1;
(statearr_26982_27023[(1)] = (18));

} else {
var statearr_26983_27024 = state_26944__$1;
(statearr_26983_27024[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (26))){
var inst_26914 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26944__$1 = state_26944;
if(cljs.core.truth_(inst_26914)){
var statearr_26984_27025 = state_26944__$1;
(statearr_26984_27025[(1)] = (30));

} else {
var statearr_26985_27026 = state_26944__$1;
(statearr_26985_27026[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (16))){
var inst_26880 = (state_26944[(2)]);
var inst_26881 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26882 = figwheel.client.heads_up.display_exception.call(null,inst_26881);
var state_26944__$1 = (function (){var statearr_26986 = state_26944;
(statearr_26986[(13)] = inst_26880);

return statearr_26986;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26944__$1,(17),inst_26882);
} else {
if((state_val_26945 === (30))){
var inst_26916 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26917 = figwheel.client.heads_up.display_warning.call(null,inst_26916);
var state_26944__$1 = state_26944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26944__$1,(33),inst_26917);
} else {
if((state_val_26945 === (10))){
var inst_26874 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
var statearr_26987_27027 = state_26944__$1;
(statearr_26987_27027[(2)] = inst_26874);

(statearr_26987_27027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (18))){
var inst_26890 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26891 = figwheel.client.heads_up.display_exception.call(null,inst_26890);
var state_26944__$1 = state_26944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26944__$1,(21),inst_26891);
} else {
if((state_val_26945 === (37))){
var inst_26927 = (state_26944[(2)]);
var state_26944__$1 = state_26944;
var statearr_26988_27028 = state_26944__$1;
(statearr_26988_27028[(2)] = inst_26927);

(statearr_26988_27028[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26945 === (8))){
var inst_26866 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26944__$1 = state_26944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26944__$1,(11),inst_26866);
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
});})(c__21689__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21600__auto__,c__21689__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21601__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21601__auto____0 = (function (){
var statearr_26989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26989[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21601__auto__);

(statearr_26989[(1)] = (1));

return statearr_26989;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21601__auto____1 = (function (state_26944){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_26944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e26990){if((e26990 instanceof Object)){
var ex__21604__auto__ = e26990;
var statearr_26991_27029 = state_26944;
(statearr_26991_27029[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27030 = state_26944;
state_26944 = G__27030;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21601__auto__ = function(state_26944){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21601__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21601__auto____1.call(this,state_26944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21601__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21601__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto__,msg_hist,msg_names,msg))
})();
var state__21691__auto__ = (function (){var statearr_26992 = f__21690__auto__.call(null);
(statearr_26992[(6)] = c__21689__auto__);

return statearr_26992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto__,msg_hist,msg_names,msg))
);

return c__21689__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21689__auto___27059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto___27059,ch){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto___27059,ch){
return (function (state_27045){
var state_val_27046 = (state_27045[(1)]);
if((state_val_27046 === (1))){
var state_27045__$1 = state_27045;
var statearr_27047_27060 = state_27045__$1;
(statearr_27047_27060[(2)] = null);

(statearr_27047_27060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (2))){
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27045__$1,(4),ch);
} else {
if((state_val_27046 === (3))){
var inst_27043 = (state_27045[(2)]);
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27045__$1,inst_27043);
} else {
if((state_val_27046 === (4))){
var inst_27033 = (state_27045[(7)]);
var inst_27033__$1 = (state_27045[(2)]);
var state_27045__$1 = (function (){var statearr_27048 = state_27045;
(statearr_27048[(7)] = inst_27033__$1);

return statearr_27048;
})();
if(cljs.core.truth_(inst_27033__$1)){
var statearr_27049_27061 = state_27045__$1;
(statearr_27049_27061[(1)] = (5));

} else {
var statearr_27050_27062 = state_27045__$1;
(statearr_27050_27062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (5))){
var inst_27033 = (state_27045[(7)]);
var inst_27035 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27033);
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27045__$1,(8),inst_27035);
} else {
if((state_val_27046 === (6))){
var state_27045__$1 = state_27045;
var statearr_27051_27063 = state_27045__$1;
(statearr_27051_27063[(2)] = null);

(statearr_27051_27063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (7))){
var inst_27041 = (state_27045[(2)]);
var state_27045__$1 = state_27045;
var statearr_27052_27064 = state_27045__$1;
(statearr_27052_27064[(2)] = inst_27041);

(statearr_27052_27064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (8))){
var inst_27037 = (state_27045[(2)]);
var state_27045__$1 = (function (){var statearr_27053 = state_27045;
(statearr_27053[(8)] = inst_27037);

return statearr_27053;
})();
var statearr_27054_27065 = state_27045__$1;
(statearr_27054_27065[(2)] = null);

(statearr_27054_27065[(1)] = (2));


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
});})(c__21689__auto___27059,ch))
;
return ((function (switch__21600__auto__,c__21689__auto___27059,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21601__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21601__auto____0 = (function (){
var statearr_27055 = [null,null,null,null,null,null,null,null,null];
(statearr_27055[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21601__auto__);

(statearr_27055[(1)] = (1));

return statearr_27055;
});
var figwheel$client$heads_up_plugin_$_state_machine__21601__auto____1 = (function (state_27045){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_27045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e27056){if((e27056 instanceof Object)){
var ex__21604__auto__ = e27056;
var statearr_27057_27066 = state_27045;
(statearr_27057_27066[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27067 = state_27045;
state_27045 = G__27067;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21601__auto__ = function(state_27045){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21601__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21601__auto____1.call(this,state_27045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21601__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21601__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto___27059,ch))
})();
var state__21691__auto__ = (function (){var statearr_27058 = f__21690__auto__.call(null);
(statearr_27058[(6)] = c__21689__auto___27059);

return statearr_27058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto___27059,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21689__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto__){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto__){
return (function (state_27073){
var state_val_27074 = (state_27073[(1)]);
if((state_val_27074 === (1))){
var inst_27068 = cljs.core.async.timeout.call(null,(3000));
var state_27073__$1 = state_27073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27073__$1,(2),inst_27068);
} else {
if((state_val_27074 === (2))){
var inst_27070 = (state_27073[(2)]);
var inst_27071 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27073__$1 = (function (){var statearr_27075 = state_27073;
(statearr_27075[(7)] = inst_27070);

return statearr_27075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27073__$1,inst_27071);
} else {
return null;
}
}
});})(c__21689__auto__))
;
return ((function (switch__21600__auto__,c__21689__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21601__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21601__auto____0 = (function (){
var statearr_27076 = [null,null,null,null,null,null,null,null];
(statearr_27076[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21601__auto__);

(statearr_27076[(1)] = (1));

return statearr_27076;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21601__auto____1 = (function (state_27073){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_27073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e27077){if((e27077 instanceof Object)){
var ex__21604__auto__ = e27077;
var statearr_27078_27080 = state_27073;
(statearr_27078_27080[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27081 = state_27073;
state_27073 = G__27081;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21601__auto__ = function(state_27073){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21601__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21601__auto____1.call(this,state_27073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21601__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21601__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto__))
})();
var state__21691__auto__ = (function (){var statearr_27079 = f__21690__auto__.call(null);
(statearr_27079[(6)] = c__21689__auto__);

return statearr_27079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto__))
);

return c__21689__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21689__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21689__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__21690__auto__ = (function (){var switch__21600__auto__ = ((function (c__21689__auto__,figwheel_version,temp__4657__auto__){
return (function (state_27088){
var state_val_27089 = (state_27088[(1)]);
if((state_val_27089 === (1))){
var inst_27082 = cljs.core.async.timeout.call(null,(2000));
var state_27088__$1 = state_27088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27088__$1,(2),inst_27082);
} else {
if((state_val_27089 === (2))){
var inst_27084 = (state_27088[(2)]);
var inst_27085 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_27086 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_27085);
var state_27088__$1 = (function (){var statearr_27090 = state_27088;
(statearr_27090[(7)] = inst_27084);

return statearr_27090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27088__$1,inst_27086);
} else {
return null;
}
}
});})(c__21689__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__21600__auto__,c__21689__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21601__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21601__auto____0 = (function (){
var statearr_27091 = [null,null,null,null,null,null,null,null];
(statearr_27091[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21601__auto__);

(statearr_27091[(1)] = (1));

return statearr_27091;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21601__auto____1 = (function (state_27088){
while(true){
var ret_value__21602__auto__ = (function (){try{while(true){
var result__21603__auto__ = switch__21600__auto__.call(null,state_27088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21603__auto__;
}
break;
}
}catch (e27092){if((e27092 instanceof Object)){
var ex__21604__auto__ = e27092;
var statearr_27093_27095 = state_27088;
(statearr_27093_27095[(5)] = ex__21604__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27096 = state_27088;
state_27088 = G__27096;
continue;
} else {
return ret_value__21602__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21601__auto__ = function(state_27088){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21601__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21601__auto____1.call(this,state_27088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21601__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21601__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21601__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21601__auto__;
})()
;})(switch__21600__auto__,c__21689__auto__,figwheel_version,temp__4657__auto__))
})();
var state__21691__auto__ = (function (){var statearr_27094 = f__21690__auto__.call(null);
(statearr_27094[(6)] = c__21689__auto__);

return statearr_27094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21691__auto__);
});})(c__21689__auto__,figwheel_version,temp__4657__auto__))
);

return c__21689__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__27097){
var map__27098 = p__27097;
var map__27098__$1 = ((((!((map__27098 == null)))?(((((map__27098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27098):map__27098);
var file = cljs.core.get.call(null,map__27098__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27098__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27098__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__27100 = "";
var G__27100__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27100),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__27100);
var G__27100__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27100__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__27100__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27100__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__27100__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27101){
var map__27102 = p__27101;
var map__27102__$1 = ((((!((map__27102 == null)))?(((((map__27102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27102):map__27102);
var ed = map__27102__$1;
var formatted_exception = cljs.core.get.call(null,map__27102__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27102__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27102__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27104_27108 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27105_27109 = null;
var count__27106_27110 = (0);
var i__27107_27111 = (0);
while(true){
if((i__27107_27111 < count__27106_27110)){
var msg_27112 = cljs.core._nth.call(null,chunk__27105_27109,i__27107_27111);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27112);


var G__27113 = seq__27104_27108;
var G__27114 = chunk__27105_27109;
var G__27115 = count__27106_27110;
var G__27116 = (i__27107_27111 + (1));
seq__27104_27108 = G__27113;
chunk__27105_27109 = G__27114;
count__27106_27110 = G__27115;
i__27107_27111 = G__27116;
continue;
} else {
var temp__4657__auto___27117 = cljs.core.seq.call(null,seq__27104_27108);
if(temp__4657__auto___27117){
var seq__27104_27118__$1 = temp__4657__auto___27117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27104_27118__$1)){
var c__4351__auto___27119 = cljs.core.chunk_first.call(null,seq__27104_27118__$1);
var G__27120 = cljs.core.chunk_rest.call(null,seq__27104_27118__$1);
var G__27121 = c__4351__auto___27119;
var G__27122 = cljs.core.count.call(null,c__4351__auto___27119);
var G__27123 = (0);
seq__27104_27108 = G__27120;
chunk__27105_27109 = G__27121;
count__27106_27110 = G__27122;
i__27107_27111 = G__27123;
continue;
} else {
var msg_27124 = cljs.core.first.call(null,seq__27104_27118__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27124);


var G__27125 = cljs.core.next.call(null,seq__27104_27118__$1);
var G__27126 = null;
var G__27127 = (0);
var G__27128 = (0);
seq__27104_27108 = G__27125;
chunk__27105_27109 = G__27126;
count__27106_27110 = G__27127;
i__27107_27111 = G__27128;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27129){
var map__27130 = p__27129;
var map__27130__$1 = ((((!((map__27130 == null)))?(((((map__27130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27130):map__27130);
var w = map__27130__$1;
var message = cljs.core.get.call(null,map__27130__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27132 = cljs.core.seq.call(null,plugins);
var chunk__27133 = null;
var count__27134 = (0);
var i__27135 = (0);
while(true){
if((i__27135 < count__27134)){
var vec__27136 = cljs.core._nth.call(null,chunk__27133,i__27135);
var k = cljs.core.nth.call(null,vec__27136,(0),null);
var plugin = cljs.core.nth.call(null,vec__27136,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27142 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27132,chunk__27133,count__27134,i__27135,pl_27142,vec__27136,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27142.call(null,msg_hist);
});})(seq__27132,chunk__27133,count__27134,i__27135,pl_27142,vec__27136,k,plugin))
);
} else {
}


var G__27143 = seq__27132;
var G__27144 = chunk__27133;
var G__27145 = count__27134;
var G__27146 = (i__27135 + (1));
seq__27132 = G__27143;
chunk__27133 = G__27144;
count__27134 = G__27145;
i__27135 = G__27146;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27132);
if(temp__4657__auto__){
var seq__27132__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27132__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__27132__$1);
var G__27147 = cljs.core.chunk_rest.call(null,seq__27132__$1);
var G__27148 = c__4351__auto__;
var G__27149 = cljs.core.count.call(null,c__4351__auto__);
var G__27150 = (0);
seq__27132 = G__27147;
chunk__27133 = G__27148;
count__27134 = G__27149;
i__27135 = G__27150;
continue;
} else {
var vec__27139 = cljs.core.first.call(null,seq__27132__$1);
var k = cljs.core.nth.call(null,vec__27139,(0),null);
var plugin = cljs.core.nth.call(null,vec__27139,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27151 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27132,chunk__27133,count__27134,i__27135,pl_27151,vec__27139,k,plugin,seq__27132__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27151.call(null,msg_hist);
});})(seq__27132,chunk__27133,count__27134,i__27135,pl_27151,vec__27139,k,plugin,seq__27132__$1,temp__4657__auto__))
);
} else {
}


var G__27152 = cljs.core.next.call(null,seq__27132__$1);
var G__27153 = null;
var G__27154 = (0);
var G__27155 = (0);
seq__27132 = G__27152;
chunk__27133 = G__27153;
count__27134 = G__27154;
i__27135 = G__27155;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__27157 = arguments.length;
switch (G__27157) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__27158_27163 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__27159_27164 = null;
var count__27160_27165 = (0);
var i__27161_27166 = (0);
while(true){
if((i__27161_27166 < count__27160_27165)){
var msg_27167 = cljs.core._nth.call(null,chunk__27159_27164,i__27161_27166);
figwheel.client.socket.handle_incoming_message.call(null,msg_27167);


var G__27168 = seq__27158_27163;
var G__27169 = chunk__27159_27164;
var G__27170 = count__27160_27165;
var G__27171 = (i__27161_27166 + (1));
seq__27158_27163 = G__27168;
chunk__27159_27164 = G__27169;
count__27160_27165 = G__27170;
i__27161_27166 = G__27171;
continue;
} else {
var temp__4657__auto___27172 = cljs.core.seq.call(null,seq__27158_27163);
if(temp__4657__auto___27172){
var seq__27158_27173__$1 = temp__4657__auto___27172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27158_27173__$1)){
var c__4351__auto___27174 = cljs.core.chunk_first.call(null,seq__27158_27173__$1);
var G__27175 = cljs.core.chunk_rest.call(null,seq__27158_27173__$1);
var G__27176 = c__4351__auto___27174;
var G__27177 = cljs.core.count.call(null,c__4351__auto___27174);
var G__27178 = (0);
seq__27158_27163 = G__27175;
chunk__27159_27164 = G__27176;
count__27160_27165 = G__27177;
i__27161_27166 = G__27178;
continue;
} else {
var msg_27179 = cljs.core.first.call(null,seq__27158_27173__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_27179);


var G__27180 = cljs.core.next.call(null,seq__27158_27173__$1);
var G__27181 = null;
var G__27182 = (0);
var G__27183 = (0);
seq__27158_27163 = G__27180;
chunk__27159_27164 = G__27181;
count__27160_27165 = G__27182;
i__27161_27166 = G__27183;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___27188 = arguments.length;
var i__4532__auto___27189 = (0);
while(true){
if((i__4532__auto___27189 < len__4531__auto___27188)){
args__4534__auto__.push((arguments[i__4532__auto___27189]));

var G__27190 = (i__4532__auto___27189 + (1));
i__4532__auto___27189 = G__27190;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27185){
var map__27186 = p__27185;
var map__27186__$1 = ((((!((map__27186 == null)))?(((((map__27186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27186):map__27186);
var opts = map__27186__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27184){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27184));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e27191){if((e27191 instanceof Error)){
var e = e27191;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e27191;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__27192){
var map__27193 = p__27192;
var map__27193__$1 = ((((!((map__27193 == null)))?(((((map__27193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27193):map__27193);
var msg_name = cljs.core.get.call(null,map__27193__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1535420499300
