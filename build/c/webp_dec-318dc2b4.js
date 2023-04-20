define(["module","require","exports"],(function(n,r,e){var t,o=(t=n.uri,function(r){var e,o;(r=void 0!==(r=r||{})?r:{}).ready=new Promise((function(n,r){e=n,o=r}));var a,i={};for(a in r)r.hasOwnProperty(a)&&(i[a]=r[a]);var u,c="";c=self.location.href,t&&(c=t),c=0!==c.indexOf("blob:")?c.substr(0,c.lastIndexOf("/")+1):"",u=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)},r.print||console.log.bind(console);var f,s,l=r.printErr||console.warn.bind(console);for(a in i)i.hasOwnProperty(a)&&(r[a]=i[a]);i=null,r.arguments&&r.arguments,r.thisProgram&&r.thisProgram,r.quit&&r.quit,r.wasmBinary&&(f=r.wasmBinary),r.noExitRuntime,"object"!=typeof WebAssembly&&D("no native wasm support detected");var p=!1,v=new TextDecoder("utf8");function d(n,r){if(!n)return"";for(var e=n+r,t=n;!(t>=e)&&g[t];)++t;return v.decode(g.subarray(n,t))}var h,y,g,m,w,b,T,A,_,P,E=new TextDecoder("utf-16le");function C(n,r){for(var e=n,t=e>>1,o=t+r/2;!(t>=o)&&w[t];)++t;return e=t<<1,E.decode(g.subarray(n,e))}function W(n,r,e){if(void 0===e&&(e=2147483647),e<2)return 0;for(var t=r,o=(e-=2)<2*n.length?e/2:n.length,a=0;a<o;++a){var i=n.charCodeAt(a);m[r>>1]=i,r+=2}return m[r>>1]=0,r-t}function k(n){return 2*n.length}function F(n,r){for(var e=0,t="";!(e>=r/4);){var o=b[n+4*e>>2];if(0==o)break;if(++e,o>=65536){var a=o-65536;t+=String.fromCharCode(55296|a>>10,56320|1023&a)}else t+=String.fromCharCode(o)}return t}function R(n,r,e){if(void 0===e&&(e=2147483647),e<4)return 0;for(var t=r,o=t+e-4,a=0;a<n.length;++a){var i=n.charCodeAt(a);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),b[r>>2]=i,(r+=4)+4>o)break}return b[r>>2]=0,r-t}function I(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);t>=55296&&t<=57343&&++e,r+=4}return r}function U(n){h=n,r.HEAP8=y=new Int8Array(n),r.HEAP16=m=new Int16Array(n),r.HEAP32=b=new Int32Array(n),r.HEAPU8=g=new Uint8Array(n),r.HEAPU16=w=new Uint16Array(n),r.HEAPU32=T=new Uint32Array(n),r.HEAPF32=A=new Float32Array(n),r.HEAPF64=_=new Float64Array(n)}r.INITIAL_MEMORY;var S,O=[],j=[],x=[],M=0,B=null;function D(n){r.onAbort&&r.onAbort(n),l(n+=""),p=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(n);throw o(e),e}function H(n){return n.startsWith("data:application/octet-stream;base64,")}if(r.preloadedImages={},r.preloadedAudios={},r.locateFile)H(V="webp_dec.wasm")||(S=V,V=r.locateFile?r.locateFile(S,c):c+S);else var V=new URL("/c/webp_dec-12bed04a.wasm",n.uri).toString();function q(n){try{if(n==V&&f)return new Uint8Array(f);if(u)return u(n);throw"both async and sync fetching of the wasm failed"}catch(n){D(n)}}function z(n){for(;n.length>0;){var e=n.shift();if("function"!=typeof e){var t=e.func;"number"==typeof t?void 0===e.arg?P.get(t)():P.get(t)(e.arg):t(void 0===e.arg?null:e.arg)}else e(r)}}function N(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var L=void 0;function G(n){for(var r="",e=n;g[e];)r+=L[g[e++]];return r}var J={},X={},Y={};function Z(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+n:n}function $(n,r){return n=Z(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function K(n,r){var e=$(r,(function(n){this.name=r,this.message=n;var e=new Error(n).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var Q=void 0;function nn(n){throw new Q(n)}var rn=void 0;function en(n){throw new rn(n)}function tn(n,r,e){if(e=e||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(n||nn('type "'+t+'" must have a positive integer typeid pointer'),X.hasOwnProperty(n)){if(e.ignoreDuplicateRegistrations)return;nn("Cannot register type '"+t+"' twice")}if(X[n]=r,delete Y[n],J.hasOwnProperty(n)){var o=J[n];delete J[n],o.forEach((function(n){n()}))}}var on=[],an=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function un(n){n>4&&0==--an[n].refcount&&(an[n]=void 0,on.push(n))}function cn(){for(var n=0,r=5;r<an.length;++r)void 0!==an[r]&&++n;return n}function fn(){for(var n=5;n<an.length;++n)if(void 0!==an[n])return an[n];return null}function sn(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=on.length?on.pop():an.length;return an[r]={refcount:1,value:n},r}}function ln(n){return this.fromWireType(T[n>>2])}function pn(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function vn(n,r){switch(r){case 2:return function(n){return this.fromWireType(A[n>>2])};case 3:return function(n){return this.fromWireType(_[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function dn(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function hn(n,r,e,t,o){var a=r.length;a<2&&nn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var i=null!==r[1]&&null!==e,u=!1,c=1;c<r.length;++c)if(null!==r[c]&&void 0===r[c].destructorFunction){u=!0;break}var f="void"!==r[0].name,s="",l="";for(c=0;c<a-2;++c)s+=(0!==c?", ":"")+"arg"+c,l+=(0!==c?", ":"")+"arg"+c+"Wired";var p="return function "+Z(n)+"("+s+") {\nif (arguments.length !== "+(a-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(a-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var v=u?"destructors":"null",d=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],h=[nn,t,o,dn,r[0],r[1]];for(i&&(p+="var thisWired = classParam.toWireType("+v+", this);\n"),c=0;c<a-2;++c)p+="var arg"+c+"Wired = argType"+c+".toWireType("+v+", arg"+c+"); // "+r[c+2].name+"\n",d.push("argType"+c),h.push(r[c+2]);if(i&&(l="thisWired"+(l.length>0?", ":"")+l),p+=(f?"var rv = ":"")+"invoker(fn"+(l.length>0?", ":"")+l+");\n",u)p+="runDestructors(destructors);\n";else for(c=i?1:2;c<r.length;++c){var y=1===c?"thisWired":"arg"+(c-2)+"Wired";null!==r[c].destructorFunction&&(p+=y+"_dtor("+y+"); // "+r[c].name+"\n",d.push(y+"_dtor"),h.push(r[c].destructorFunction))}return f&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",d.push(p),function(n,r){if(!(n instanceof Function))throw new TypeError("new_ called with constructor type "+typeof n+" which is not a function");var e=$(n.name||"unknownFunctionName",(function(){}));e.prototype=n.prototype;var t=new e,o=n.apply(t,r);return o instanceof Object?o:t}(Function,d).apply(null,h)}function yn(n,e,t){r.hasOwnProperty(n)?((void 0===t||void 0!==r[n].overloadTable&&void 0!==r[n].overloadTable[t])&&nn("Cannot register public name '"+n+"' twice"),function(n,r,e){if(void 0===n[r].overloadTable){var t=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||nn("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[t.argCount]=t}}(r,n,n),r.hasOwnProperty(t)&&nn("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),r[n].overloadTable[t]=e):(r[n]=e,void 0!==t&&(r[n].numArguments=t))}function gn(n,e,t){return n.includes("j")?function(n,e,t){var o=r["dynCall_"+n];return t&&t.length?o.apply(null,[e].concat(t)):o.call(null,e)}(n,e,t):P.get(e).apply(null,t)}function mn(n,r){var e,t,o,a=(n=G(n)).includes("j")?(e=n,t=r,o=[],function(){o.length=arguments.length;for(var n=0;n<arguments.length;n++)o[n]=arguments[n];return gn(e,t,o)}):P.get(r);return"function"!=typeof a&&nn("unknown function pointer with signature "+n+": "+r),a}var wn=void 0;function bn(n){var r=In(n),e=G(r);return Rn(r),e}function Tn(n,r,e){switch(r){case 0:return e?function(n){return y[n]}:function(n){return g[n]};case 1:return e?function(n){return m[n>>1]}:function(n){return w[n>>1]};case 2:return e?function(n){return b[n>>2]}:function(n){return T[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var An={};function _n(){return"object"==typeof globalThis?globalThis:Function("return this")()}function Pn(n,r){var e=X[n];return void 0===e&&nn(r+" has unknown type "+bn(n)),e}var En={};function Cn(n){try{return s.grow(n-h.byteLength+65535>>>16),U(s.buffer),1}catch(n){}}!function(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);L=n}(),Q=r.BindingError=K(Error,"BindingError"),rn=r.InternalError=K(Error,"InternalError"),r.count_emval_handles=cn,r.get_first_emval=fn,wn=r.UnboundTypeError=K(Error,"UnboundTypeError");var Wn={e:function(n,r){},p:function(n,r,e,t,o){},n:function(n,r,e,t,o){var a=N(e);tn(n,{name:r=G(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?t:o},argPackAdvance:8,readValueFromPointer:function(n){var t;if(1===e)t=y;else if(2===e)t=m;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+r);t=b}return this.fromWireType(t[n>>a])},destructorFunction:null})},r:function(n,r){tn(n,{name:r=G(r),fromWireType:function(n){var r=an[n].value;return un(n),r},toWireType:function(n,r){return sn(r)},argPackAdvance:8,readValueFromPointer:ln,destructorFunction:null})},m:function(n,r,e){var t=N(e);tn(n,{name:r=G(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+pn(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:vn(r,t),destructorFunction:null})},i:function(n,e,t,o,a,i){var u=function(n,r){for(var e=[],t=0;t<n;t++)e.push(b[(r>>2)+t]);return e}(e,t);n=G(n),a=mn(o,a),yn(n,(function(){!function(n,r){var e=[],t={};throw r.forEach((function n(r){t[r]||X[r]||(Y[r]?Y[r].forEach(n):(e.push(r),t[r]=!0))})),new wn(n+": "+e.map(bn).join([", "]))}("Cannot call "+n+" due to unbound types",u)}),e-1),function(n,r,e){function t(r){var t=e(r);t.length!==n.length&&en("Mismatched type converter count");for(var o=0;o<n.length;++o)tn(n[o],t[o])}n.forEach((function(n){Y[n]=r}));var o=new Array(r.length),a=[],i=0;r.forEach((function(n,r){X.hasOwnProperty(n)?o[r]=X[n]:(a.push(n),J.hasOwnProperty(n)||(J[n]=[]),J[n].push((function(){o[r]=X[n],++i===a.length&&t(o)})))})),0===a.length&&t(o)}([],u,(function(t){var o=[t[0],null].concat(t.slice(1));return function(n,e,t){r.hasOwnProperty(n)||en("Replacing nonexistant public symbol"),void 0!==r[n].overloadTable&&void 0!==t?r[n].overloadTable[t]=e:(r[n]=e,r[n].argCount=t)}(n,hn(n,o,null,a,i),e-1),[]}))},b:function(n,r,e,t,o){r=G(r),-1===o&&(o=4294967295);var a=N(e),i=function(n){return n};if(0===t){var u=32-8*e;i=function(n){return n<<u>>>u}}var c=r.includes("unsigned");tn(n,{name:r,fromWireType:i,toWireType:function(n,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+pn(e)+'" to '+this.name);if(e<t||e>o)throw new TypeError('Passing a number "'+pn(e)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+t+", "+o+"]!");return c?e>>>0:0|e},argPackAdvance:8,readValueFromPointer:Tn(r,a,0!==t),destructorFunction:null})},a:function(n,r,e){var t=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(n){var r=T,e=r[n>>=2],o=r[n+1];return new t(h,o,e)}tn(n,{name:e=G(e),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},h:function(n,r){var e="std::string"===(r=G(r));tn(n,{name:r,fromWireType:function(n){var r,t=T[n>>2];if(e)for(var o=n+4,a=0;a<=t;++a){var i=n+4+a;if(a==t||0==g[i]){var u=d(o,i-o);void 0===r?r=u:(r+=String.fromCharCode(0),r+=u),o=i+1}}else{var c=new Array(t);for(a=0;a<t;++a)c[a]=String.fromCharCode(g[n+4+a]);r=c.join("")}return Rn(n),r},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var t="string"==typeof r;t||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||nn("Cannot pass non-string to std::string");var o=(e&&t?function(){return function(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);t>=55296&&t<=57343&&(t=65536+((1023&t)<<10)|1023&n.charCodeAt(++e)),t<=127?++r:r+=t<=2047?2:t<=65535?3:4}return r}(r)}:function(){return r.length})(),a=Fn(4+o+1);if(T[a>>2]=o,e&&t)!function(n,r,e,t){if(!(t>0))return 0;for(var o=e+t-1,a=0;a<n.length;++a){var i=n.charCodeAt(a);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),i<=127){if(e>=o)break;r[e++]=i}else if(i<=2047){if(e+1>=o)break;r[e++]=192|i>>6,r[e++]=128|63&i}else if(i<=65535){if(e+2>=o)break;r[e++]=224|i>>12,r[e++]=128|i>>6&63,r[e++]=128|63&i}else{if(e+3>=o)break;r[e++]=240|i>>18,r[e++]=128|i>>12&63,r[e++]=128|i>>6&63,r[e++]=128|63&i}}r[e]=0}(r,g,a+4,o+1);else if(t)for(var i=0;i<o;++i){var u=r.charCodeAt(i);u>255&&(Rn(a),nn("String has UTF-16 code units that do not fit in 8 bits")),g[a+4+i]=u}else for(i=0;i<o;++i)g[a+4+i]=r[i];return null!==n&&n.push(Rn,a),a},argPackAdvance:8,readValueFromPointer:ln,destructorFunction:function(n){Rn(n)}})},f:function(n,r,e){var t,o,a,i,u;e=G(e),2===r?(t=C,o=W,i=k,a=function(){return w},u=1):4===r&&(t=F,o=R,i=I,a=function(){return T},u=2),tn(n,{name:e,fromWireType:function(n){for(var e,o=T[n>>2],i=a(),c=n+4,f=0;f<=o;++f){var s=n+4+f*r;if(f==o||0==i[s>>u]){var l=t(c,s-c);void 0===e?e=l:(e+=String.fromCharCode(0),e+=l),c=s+r}}return Rn(n),e},toWireType:function(n,t){"string"!=typeof t&&nn("Cannot pass non-string to C++ string type "+e);var a=i(t),c=Fn(4+a+r);return T[c>>2]=a>>u,o(t,c+4,a+r),null!==n&&n.push(Rn,c),c},argPackAdvance:8,readValueFromPointer:ln,destructorFunction:function(n){Rn(n)}})},o:function(n,r){tn(n,{isVoid:!0,name:r=G(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})},c:un,d:function(n){return 0===n?sn(_n()):(n=void 0===(e=An[r=n])?G(r):e,sn(_n()[n]));var r,e},j:function(n){n>4&&(an[n].refcount+=1)},k:function(n,e,t,o){n=function(n){return n||nn("Cannot use deleted val. handle = "+n),an[n].value}(n);var a=En[e];return a||(a=function(n){for(var e="",t=0;t<n;++t)e+=(0!==t?", ":"")+"arg"+t;var o="return function emval_allocator_"+n+"(constructor, argTypes, args) {\n";for(t=0;t<n;++t)o+="var argType"+t+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+t+'], "parameter '+t+'");\nvar arg'+t+" = argType"+t+".readValueFromPointer(args);\nargs += argType"+t+"['argPackAdvance'];\n";return o+="var obj = new constructor("+e+");\nreturn __emval_register(obj);\n}\n",new Function("requireRegisteredType","Module","__emval_register",o)(Pn,r,sn)}(e),En[e]=a),a(n,t,o)},l:function(){D()},q:function(n,r,e){g.copyWithin(n,r,r+e)},g:function(n){var r,e,t=g.length,o=2147483648;if((n>>>=0)>o)return!1;for(var a=1;a<=4;a*=2){var i=t*(1+.2/a);if(i=Math.min(i,n+100663296),Cn(Math.min(o,((r=Math.max(n,i))%(e=65536)>0&&(r+=e-r%e),r))))return!0}return!1}};!function(){var n={a:Wn};function e(n,e){var t,o=n.exports;r.asm=o,U((s=r.asm.s).buffer),P=r.asm.y,t=r.asm.t,j.unshift(t),function(n){if(M--,r.monitorRunDependencies&&r.monitorRunDependencies(M),0==M&&B){var e=B;B=null,e()}}()}function t(n){e(n.instance)}function a(r){return(f||"function"!=typeof fetch?Promise.resolve().then((function(){return q(V)})):fetch(V,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+V+"'";return n.arrayBuffer()})).catch((function(){return q(V)}))).then((function(r){return WebAssembly.instantiate(r,n)})).then(r,(function(n){l("failed to asynchronously prepare wasm: "+n),D(n)}))}if(M++,r.monitorRunDependencies&&r.monitorRunDependencies(M),r.instantiateWasm)try{return r.instantiateWasm(n,e)}catch(n){return l("Module.instantiateWasm callback failed with error: "+n),!1}(f||"function"!=typeof WebAssembly.instantiateStreaming||H(V)||"function"!=typeof fetch?a(t):fetch(V,{credentials:"same-origin"}).then((function(r){return WebAssembly.instantiateStreaming(r,n).then(t,(function(n){return l("wasm streaming compile failed: "+n),l("falling back to ArrayBuffer instantiation"),a(t)}))}))).catch(o)}(),r.___wasm_call_ctors=function(){return(r.___wasm_call_ctors=r.asm.t).apply(null,arguments)};var kn,Fn=r._malloc=function(){return(Fn=r._malloc=r.asm.u).apply(null,arguments)},Rn=r._free=function(){return(Rn=r._free=r.asm.v).apply(null,arguments)},In=r.___getTypeName=function(){return(In=r.___getTypeName=r.asm.w).apply(null,arguments)};function Un(n){function t(){kn||(kn=!0,r.calledRun=!0,p||(z(j),e(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),function(){if(r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;)n=r.postRun.shift(),x.unshift(n);var n;z(x)}()))}M>0||(function(){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)n=r.preRun.shift(),O.unshift(n);var n;z(O)}(),M>0||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),t()}),1)):t()))}if(r.___embind_register_native_and_builtin_types=function(){return(r.___embind_register_native_and_builtin_types=r.asm.x).apply(null,arguments)},B=function n(){kn||Un(),kn||(B=n)},r.run=Un,r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();return Un(),r.ready});e.default=o}));
