define(["module","require","exports","./workerHelpers-ec8f60a4"],(function(e,n,t,r){let o,i=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});i.decode();let a=null;function s(){return null!==a&&a.buffer===o.__wbindgen_export_0.buffer||(a=new Uint8Array(o.__wbindgen_export_0.buffer)),a}const _=new Array(32).fill(void 0);_.push(void 0,null,!0,!1);let u=_.length;function l(e){u===_.length&&_.push(_.length+1);const n=u;return u=_[n],_[n]=e,n}let b=0;let c=null;function w(){return null!==c&&c.buffer===o.__wbindgen_export_0.buffer||(c=new Int32Array(o.__wbindgen_export_0.buffer)),c}function f(e){const n=function(e){return _[e]}(e);return function(e){e<36||(_[e]=u,u=e)}(e),n}class d{static __wrap(e){const n=Object.create(d.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();o.__wbg_wbg_rayon_poolbuilder_free(e)}numThreads(){return o.wbg_rayon_poolbuilder_numThreads(this.ptr)>>>0}receiver(){return o.wbg_rayon_poolbuilder_receiver(this.ptr)}build(){o.wbg_rayon_poolbuilder_build(this.ptr)}}t.default=async function n(t,a){void 0===t&&(t=new URL("/c/squoosh_oxipng_bg-89ef9006.wasm",e.uri));const _={wbg:{}};_.wbg.__wbindgen_throw=function(e,n){throw new Error((t=e,r=n,i.decode(s().slice(t,t+r))));var t,r},_.wbg.__wbindgen_module=function(){return l(n.__wbindgen_wasm_module)},_.wbg.__wbindgen_memory=function(){return l(o.__wbindgen_export_0)},_.wbg.__wbg_startWorkers_914655bb4d5bb5e1=function(e,n,t){return l(r.startWorkers(f(e),f(n),d.__wrap(t)))},("string"==typeof t||"function"==typeof Request&&t instanceof Request||"function"==typeof URL&&t instanceof URL)&&(t=fetch(t)),_.wbg.memory=a||new WebAssembly.Memory({initial:17,maximum:16384,shared:!0});const{instance:u,module:b}=await async function(e,n){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,n)}catch(n){if("application/wasm"==e.headers.get("Content-Type"))throw n;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n)}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}(await t,_);return o=u.exports,n.__wbindgen_wasm_module=b,o.__wbindgen_start(),o},t.initThreadPool=function(e){return f(o.initThreadPool(e))},t.optimise=function(e,n,t){try{const f=o.__wbindgen_add_to_stack_pointer(-16);var r=function(e,n){const t=n(1*e.length);return s().set(e,t/1),b=e.length,t}(e,o.__wbindgen_malloc),i=b;o.optimise(f,r,i,n,t);var a=w()[f/4+0],_=w()[f/4+1],u=(l=a,c=_,s().subarray(l/1,l/1+c)).slice();return o.__wbindgen_free(a,1*_),u}finally{o.__wbindgen_add_to_stack_pointer(16)}var l,c},t.wbg_rayon_PoolBuilder=d,t.wbg_rayon_start_worker=function(e){o.wbg_rayon_start_worker(e)}}));
