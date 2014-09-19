/*
	Papa Parse
	v3.1.2
	https://github.com/mholt/PapaParse
*/
;(function(e){"use strict";function u(e,r){var i=t?r:g(r);var s=i.worker&&Papa.WORKERS_SUPPORTED&&n;if(s){var o=d();o.userStep=i.step;o.userChunk=i.chunk;o.userComplete=i.complete;o.userError=i.error;i.step=b(i.step);i.chunk=b(i.chunk);i.complete=b(i.complete);i.error=b(i.error);delete i.worker;o.postMessage({input:e,config:i,workerId:o.id})}else{if(typeof e==="string"){if(i.download){var u=new f(i);u.stream(e)}else{var a=new c(i);var h=a.parse(e);return h}}else if(e instanceof File){if(i.step||i.chunk){var u=new l(i);u.stream(e)}else{var a=new c(i);if(t){var p=new FileReaderSync;var v=p.readAsText(e,i.encoding);return a.parse(v)}else{p=new FileReader;p.onload=function(e){var t=new c(i);var n=t.parse(e.target.result)};p.onerror=function(){if(b(i.error))i.error(p.error,e)};p.readAsText(e,i.encoding)}}}}}function a(t,n){function a(){if(typeof n!=="object")return;if(typeof n.delimiter==="string"&&n.delimiter.length==1&&e.Papa.BAD_DELIMITERS.indexOf(n.delimiter)==-1){o=n.delimiter}if(typeof n.quotes==="boolean"||n.quotes instanceof Array)s=n.quotes;if(typeof n.newline==="string")u=n.newline}function f(e){if(typeof e!=="object")return[];var t=[];for(var n in e)t.push(n);return t}function l(e,t){var n="";if(typeof e==="string")e=JSON.parse(e);if(typeof t==="string")t=JSON.parse(t);var r=e instanceof Array&&e.length>0;var i=!(t[0]instanceof Array);if(r){for(var s=0;s<e.length;s++){if(s>0)n+=o;n+=c(e[s],s)}if(t.length>0)n+=u}for(var a=0;a<t.length;a++){var f=r?e.length:t[a].length;for(var l=0;l<f;l++){if(l>0)n+=o;var h=r&&i?e[l]:l;n+=c(t[a][h],l)}if(a<t.length-1)n+=u}return n}function c(t,n){if(typeof t==="undefined"||t===null)return"";t=t.toString().replace(/"/g,'""');var r=typeof s==="boolean"&&s||s instanceof Array&&s[n]||h(t,e.Papa.BAD_DELIMITERS)||t.indexOf(o)>-1||t.charAt(0)==" "||t.charAt(t.length-1)==" ";return r?'"'+t+'"':t}function h(e,t){for(var n=0;n<t.length;n++)if(e.indexOf(t[n])>-1)return true;return false}var r="";var i=[];var s=false;var o=",";var u="\r\n";a();if(typeof t==="string")t=JSON.parse(t);if(t instanceof Array){if(!t.length||t[0]instanceof Array)return l(null,t);else if(typeof t[0]==="object")return l(f(t[0]),t)}else if(typeof t==="object"){if(typeof t.data==="string")t.data=JSON.parse(t.data);if(t.data instanceof Array){if(!t.fields)t.fields=t.data[0]instanceof Array?t.fields:f(t.data[0]);if(!(t.data[0]instanceof Array)&&typeof t.data[0]!=="object")t.data=[t.data]}return l(t.fields||[],t.data||[])}throw"exception: Unable to serialize unrecognized input"}function f(n){n=n||{};if(!n.chunkSize)n.chunkSize=Papa.RemoteChunkSize;var r=0,i=0;var s="";var o="";var u,a;var f=new c(y(n));this.stream=function(l){function c(){u=new XMLHttpRequest;if(!t){u.onload=h;u.onerror=p}u.open("GET",l,!t);if(n.step){var e=r+n.chunkSize-1;if(i&&e>i)e=i;u.setRequestHeader("Range","bytes="+r+"-"+e)}u.send();if(t&&u.status==0)p();else r+=n.chunkSize}function h(){if(u.readyState!=4)return;if(u.status<200||u.status>=400){p();return}s+=o+u.responseText;o="";var i=!n.step||r>d(u);if(!i){var l=s.lastIndexOf("\n");if(l<0)l=s.lastIndexOf("\r");if(l>-1){o=s.substring(l+1);s=s.substring(0,l)}else{a();return}}var c=f.parse(s);s="";if(t){e.postMessage({results:c,workerId:Papa.WORKER_ID,finished:i})}else if(b(n.chunk)){n.chunk(c);c=undefined}if(!i&&!c.meta.paused)a()}function p(){if(b(n.error))n.error(u.statusText);else if(t&&n.error){e.postMessage({workerId:Papa.WORKER_ID,error:u.statusText,finished:false})}}function d(e){var t=e.getResponseHeader("Content-Range");return parseInt(t.substr(t.lastIndexOf("/")+1))}if(t){a=function(){c();h()}}else{a=function(){c()}}a()}}function l(n){n=n||{};if(!n.chunkSize)n.chunkSize=Papa.LocalChunkSize;var r=0;var i="";var s="";var o,u,a;var f=new c(y(n));var l=typeof FileReader==="function";this.stream=function(u){function c(){if(r<u.size)h()}function h(){var e=Math.min(r+n.chunkSize,u.size);var t=o.readAsText(a.call(u,r,e),n.encoding);if(!l)p({target:{result:t}})}function p(o){r+=n.chunkSize;i+=s+o.target.result;s="";var a=r>=u.size;if(!a){var l=i.lastIndexOf("\n");if(l<0)l=i.lastIndexOf("\r");if(l>-1){s=i.substring(l+1);i=i.substring(0,l)}else{c();return}}var h=f.parse(i);i="";if(t){e.postMessage({results:h,workerId:Papa.WORKER_ID,finished:a})}else if(b(n.chunk)){n.chunk(h,u);h=undefined}if(!a&&!h.meta.paused)c()}function d(){if(b(n.error))n.error(o.error,u);else if(t&&n.error){e.postMessage({workerId:Papa.WORKER_ID,error:o.error,file:u,finished:false})}}var a=u.slice||u.webkitSlice||u.mozSlice;if(l){o=new FileReader;o.onload=p;o.onerror=d}else o=new FileReaderSync;c()}}function c(e){function f(){if(a&&o){m("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+Papa.DefaultDelimiter+"'");o=false}if(l())c();return p()}function l(){return e.header&&u.length==0}function c(){if(!a)return;for(var e=0;l()&&e<a.data.length;e++)for(var t=0;t<a.data[e].length;t++)u.push(a.data[e][t]);a.data.splice(0,1)}function p(){if(!a||!e.header&&!e.dynamicTyping)return a;for(var t=0;t<a.data.length;t++){var n={};for(var r=0;r<a.data[t].length;r++){if(e.dynamicTyping){var i=a.data[t][r];if(i=="true")a.data[t][r]=true;else if(i=="false")a.data[t][r]=false;else a.data[t][r]=v(i)}if(e.header){if(r>=u.length){if(!n["__parsed_extra"])n["__parsed_extra"]=[];n["__parsed_extra"].push(a.data[t][r])}else n[u[r]]=a.data[t][r]}}if(e.header){a.data[t]=n;if(r>u.length)m("FieldMismatch","TooManyFields","Too many fields: expected "+u.length+" fields but parsed "+r,t);else if(r<u.length)m("FieldMismatch","TooFewFields","Too few fields: expected "+u.length+" fields but parsed "+r,t)}}if(e.header&&a.meta)a.meta.fields=u;return a}function d(t){var n=[",","	","|",";",Papa.RECORD_SEP,Papa.UNIT_SEP];var r,i,s;for(var o=0;o<n.length;o++){var u=n[o];var a=0,f=0;s=undefined;var l=(new h({delimiter:u,preview:10})).parse(t);for(var c=0;c<l.data.length;c++){var p=l.data[c].length;f+=p;if(typeof s==="undefined"){s=p;continue}else if(p>1){a+=Math.abs(p-s);s=p}}f/=l.data.length;if((typeof i==="undefined"||a<i)&&f>1.99){i=a;r=u}}e.delimiter=r;return{successful:!!r,bestDelimiter:r}}function v(e){var n=t.test(e);return n?parseFloat(e):e}function m(e,t,n,r){a.errors.push({type:e,code:t,message:n,row:r})}var t=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i;var n=this;var r;var i;var s=false;var o;var u=[];var a={data:[],errors:[],meta:{}};e=y(e);this.parse=function(t){o=false;if(!e.delimiter){var u=d(t);if(u.successful)e.delimiter=u.bestDelimiter;else{o=true;e.delimiter=Papa.DefaultDelimiter}a.meta.delimiter=e.delimiter}if(b(e.step)){var c=e.step;e.step=function(e){a=e;if(l())f();else c(f(),n)}}if(e.preview&&e.header)e.preview++;r=t;i=new h(e);a=i.parse(r);f();if(b(e.complete)&&!s)e.complete(a);return s?{meta:{paused:true}}:a};this.pause=function(){s=true;i.abort();r=r.substr(i.getCharIndex())};this.resume=function(){s=false;i=new h(e);i.parse(r);if(b(e.complete)&&!s)e.complete(a)};this.abort=function(){i.abort();if(b(e.complete))e.complete(a);r=""}}function h(e){function y(){while(f<n.length){if(g)break;if(u>0&&m>=u)break;if(a=='"')S();else if(l)x();else T();w()}return E()}function w(){f++;a=n[f]}function E(){if(g)j("Abort","ParseAbort","Parsing was aborted by the user's step function");if(l)j("Quotes","MissingQuotes","Unescaped or mismatched quotes");O();if(!b(s))return q()}function S(){if(H()&&!P())l=!l;else{k();if(l&&P())f++;else j("Quotes","UnexpectedQuotes","Unexpected quotes")}}function x(){if(_(f)||D(f))c++;k()}function T(){if(a==r)L();else if(_(f)){A();w()}else if(D(f))A();else if(N())C();else k()}function N(){if(!i)return false;var e=f==0||D(f-1)||_(f-2);return e&&n[f]===i}function C(){while(!_(f)&&!D(f)&&f<n.length){w()}}function k(){h[d][v]+=a}function L(){h[d].push("");v=h[d].length-1}function A(){O();c++;m++;h.push([]);d=h.length-1;L()}function O(){M();if(b(s)){if(h[d])s(q());I()}}function M(){if(h[d].length==1&&t.test(h[d][0])){if(e.keepEmptyRows)h[d].splice(0,1);else h.splice(d,1);d=h.length-1}}function _(e){return e<n.length-1&&(n[e]=="\r"&&n[e+1]=="\n"||n[e]=="\n"&&n[e+1]=="\r")}function D(e){return n[e]=="\r"||n[e]=="\n"}function P(){return!H()&&f<n.length-1&&n[f+1]=='"'}function H(){return!l&&B(f-1)||B(f+1)}function B(e){if(typeof e!="number")e=f;var t=n[e];return e<=-1||e>=n.length||t==r||t=="\r"||t=="\n"}function j(e,t,n){p.push({type:e,code:t,message:n,line:c,row:d,index:f})}function F(e){n=e;l=false;f=0,m=0,c=1;I();h=[[""]];a=n[f]}function I(){h=[];p=[];d=0;v=0}function q(){return{data:h,errors:p,meta:{lines:c,delimiter:r,aborted:g,truncated:u>0&&f<n.length}}}var t=/^\s*$/;var n;var r;var i;var s;var o;var u;var a;var f;var l;var c;var h;var p;var d;var v;var m;var g=false;e=e||{};r=e.delimiter;i=e.comments;s=e.step;u=e.preview;if(typeof r!=="string"||r.length!=1||Papa.BAD_DELIMITERS.indexOf(r)>-1)r=",";if(i===true)i="#";else if(typeof i!=="string"||i.length!=1||Papa.BAD_DELIMITERS.indexOf(i)>-1||i==r)i=false;this.parse=function(e){if(typeof e!=="string")throw"Input must be a string";F(e);return y()};this.abort=function(){g=true};this.getCharIndex=function(){return f}}function p(){var e="worker"+String(Math.random()).substr(2);document.write('<script id="'+e+'"></script>');return document.getElementById(e).previousSibling.src}function d(){if(!Papa.WORKERS_SUPPORTED)return false;var t=new e.Worker(n);t.onmessage=v;t.id=i++;r[t.id]=t;return t}function v(e){var t=e.data;var n=r[t.workerId];if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){if(b(n.userStep)){for(var i=0;i<t.results.data.length;i++){n.userStep({data:[t.results.data[i]],errors:t.results.errors,meta:t.results.meta})}delete t.results}else if(b(n.userChunk)){n.userChunk(t.results,t.file);delete t.results}}if(t.finished){if(b(r[t.workerId].userComplete))r[t.workerId].userComplete(t.results);r[t.workerId].terminate();delete r[t.workerId]}}function m(t){var n=t.data;if(typeof Papa.WORKER_ID==="undefined"&&n)Papa.WORKER_ID=n.workerId;if(typeof n.input==="string"){e.postMessage({workerId:Papa.WORKER_ID,results:Papa.parse(n.input,n.config),finished:true})}else if(n.input instanceof File){var r=Papa.parse(n.input,n.config);if(r)e.postMessage({workerId:Papa.WORKER_ID,results:r,finished:true})}}function g(e){if(typeof e!=="object")e={};var t=y(e);if(typeof t.delimiter!=="string"||t.delimiter.length!=1||Papa.BAD_DELIMITERS.indexOf(t.delimiter)>-1)t.delimiter=s.delimiter;if(typeof t.header!=="boolean")t.header=s.header;if(typeof t.dynamicTyping!=="boolean")t.dynamicTyping=s.dynamicTyping;if(typeof t.preview!=="number")t.preview=s.preview;if(typeof t.step!=="function")t.step=s.step;if(typeof t.complete!=="function")t.complete=s.complete;if(typeof t.error!=="function")t.error=s.error;if(typeof t.encoding!=="string")t.encoding=s.encoding;if(typeof t.worker!=="boolean")t.worker=s.worker;if(typeof t.download!=="boolean")t.download=s.download;if(typeof t.keepEmptyRows!=="boolean")t.keepEmptyRows=s.keepEmptyRows;return t}function y(e){if(typeof e!=="object")return e;var t=e instanceof Array?[]:{};for(var n in e)t[n]=y(e[n]);return t}function b(e){return typeof e==="function"}var t=!e.document,n;var r={},i=0;var s={delimiter:"",header:false,dynamicTyping:false,preview:0,step:undefined,encoding:"",worker:false,comments:false,complete:undefined,error:undefined,download:false,chunk:undefined,keepEmptyRows:false};e.Papa={};e.Papa.parse=u;e.Papa.unparse=a;e.Papa.RECORD_SEP=String.fromCharCode(30);e.Papa.UNIT_SEP=String.fromCharCode(31);e.Papa.BYTE_ORDER_MARK="?";e.Papa.BAD_DELIMITERS=["\r","\n",'"',e.Papa.BYTE_ORDER_MARK];e.Papa.WORKERS_SUPPORTED=!!e.Worker;e.Papa.LocalChunkSize=1024*1024*10;e.Papa.RemoteChunkSize=1024*1024*5;e.Papa.DefaultDelimiter=",";e.Papa.Parser=h;e.Papa.ParserHandle=c;e.Papa.NetworkStreamer=f;e.Papa.FileStreamer=l;if(e.jQuery){var o=e.jQuery;o.fn.parse=function(t){function i(){if(r.length==0)return;var e=r[0];if(b(t.before)){var n=t.before(e.file,e.inputElem);if(typeof n==="object"){if(n.action=="abort"){s("AbortError",e.file,e.inputElem,n.reason);return}else if(n.action=="skip"){u();return}else if(typeof n.config==="object")e.instanceConfig=o.extend(e.instanceConfig,n.config)}else if(n=="skip"){u();return}}var i=e.instanceConfig.complete;e.instanceConfig.complete=function(t){if(b(i))i(t,e.file,e.inputElem);u()};Papa.parse(e.file,e.instanceConfig)}function s(e,n,r,i){if(b(t.error))t.error({name:e},n,r,i)}function u(){r.splice(0,1);i()}var n=t.config||{};var r=[];this.each(function(t){var i=o(this).prop("tagName").toUpperCase()=="INPUT"&&o(this).attr("type").toLowerCase()=="file"&&e.FileReader;if(!i||!this.files||this.files.length==0)return true;for(var s=0;s<this.files.length;s++){r.push({file:this.files[s],inputElem:this,instanceConfig:o.extend({},n)})}});i();return this}}if(t)e.onmessage=m;else if(Papa.WORKERS_SUPPORTED)n=p()})(this);