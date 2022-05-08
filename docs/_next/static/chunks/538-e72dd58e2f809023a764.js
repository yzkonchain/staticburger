"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{8626:function(t,n){n.Z={GAS:"0xd2a4cff31913016155e38e474a2c06d08be276cf",NEO:"0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5",BNEO:"0x48c40d4666f93408be1bef038b6722404d9a4c2a",LEDGER:"0xda65b600f7124ce6c79950c1772a36403104f2be",COMMITTEEINFO:"0xb776afb6ad0c11565e70f8ee1dd898da43e51be1",NOBUGDEV:"0x2e9baf719ce765b8433f3ba2356df7637bee1b2c",NOBUG:"0x54806765d451e2b0425072730d527d05fbfa9817",NOBUGADDRESSDEV:"NPwCNv5jHecya3LJH7V8VcQpy3e9bd7sPa",NOBUGADDRESS:"NN4jzS1nSRGNdmraNBH4K8KtdD7YG8rxRG",BURGERGOV:"0x7e0e57b31cbae62d38a3e8bb1fa076039f3604e2",SCRIPTAGENT:"AAARwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSAAERwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSAAIRwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSAAMRwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSAAQRwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSAAURwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSAAYRwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSAAcRwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSAAgRwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSAAkRwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSAAoRwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSAAsRwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSAAwRwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSAA0RwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSAA4RwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSAA8RwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSABARwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSABERwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSABIRwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSABMRwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtSABQRwB8MBWFnZW50DBQqTJpNQCJniwPvG74INPlmRg3ESEFifVtS","0xd2a4cff31913016155e38e474a2c06d08be276cf":-8,"0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5":0,"0x48c40d4666f93408be1bef038b6722404d9a4c2a":-8,"0x2e9baf719ce765b8433f3ba2356df7637bee1b2c":-10,"0x54806765d451e2b0425072730d527d05fbfa9817":-10,BASE58CHARS:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",TOADDRESS:"NPmdLGJN47EddqYcxixdGMhtkr7Z5w4Aos",TESTNET:"https://testneofura.ngd.network:444",MAINNET:"https://neofura.ngd.network",MAINNET2:"https://n3seed1.ngd.network:10332",FSID_BASE_URL:"https://filesend.ngd.network/gate/get/CeeroywT8ppGE4HGjhpzocJkdb2yu3wD5qCGFTjkw1Cc"}},2538:function(t,n,e){e.d(n,{E6:function(){return w},lq:function(){return E},ht:function(){return v},QS:function(){return S},hN:function(){return B},ei:function(){return g},BS:function(){return T},RD:function(){return A},Vk:function(){return R},sb:function(){return N},Sy:function(){return x},xF:function(){return Z},iY:function(){return G},Fw:function(){return P},f2:function(){return y},xS:function(){return F},QA:function(){return J},Xs:function(){return Q},tG:function(){return k},_1:function(){return W},j0:function(){return I}});var r=e(318),o=e(266),u=e(809),c=e.n(u),a=e(4431),s=e.n(a),i=e(8238),f=e(8626),l=e(6209),p=function(){return window.location.search.indexOf("dev")>=0?f.Z.TESTNET:f.Z.MAINNET},h=function(){return window.location.search.indexOf("dev")>=0?f.Z.TESTNET:f.Z.MAINNET2},d=function(t,n,e,r){var u=r?[t,n,e,[{account:r,scopes:"CalledByEntry",allowedcontracts:[],allowedgroups:[]}]]:[t,n,e],a={method:"POST",body:JSON.stringify({params:u,method:"invokefunction",jsonrpc:"2.0",id:1})},s=function(){var t=(0,o.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(p(),a);case 2:if((n=t.sent).ok){t.next=5;break}throw new Error(n.statusText);case 5:return t.abrupt("return",n.json());case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,l.Z)(s,{retries:2}).then((function(t){return t.result})).catch((function(t){return console.log(t),fetch(h(),a).then((function(t){return t.json()})).then((function(t){return t.result})).catch((function(t){return console.log(t)}))}))},w=function(){return d(f.Z.BNEO,"totalSupply",[])},E=function(t){var n="0x".concat(i.wallet.getScriptHashFromAddress(t));return d(f.Z.BNEO,"reward",[{type:"Hash160",value:n}])},B=function(){return d(f.Z.BNEO,"rPS",[])},N=function(t,n){return d(t,"balanceOf",[{type:"Hash160",value:n}])},b=function(t,n,e){var r="0x".concat(i.wallet.getScriptHashFromAddress(n)),o=[{type:"Hash160",value:r},{type:"Hash160",value:"0x".concat(i.wallet.getScriptHashFromAddress(f.Z.TOADDRESS))},{type:"Integer",value:new(s())(e).shiftedBy(8)},{type:"Any",value:null}];return d(t,"transfer",o,r)},S=function(t){return b(f.Z.BNEO,t,"0")},v=function(){return fetch("https://onegate.space/api/quote?convert=usd",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([f.Z.NEO,f.Z.GAS])}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(){console.log("Failed to get the unit price of the asset")}))};function g(){return m.apply(this,arguments)}function m(){return(m=(0,o.Z)(c().mark((function t(){var n,e,u,a,s,i,f,p,h,d,w;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return","");case 5:return e="https://neoburger.blob.core.windows.net/data/".concat(n-8192,".json"),u="https://neoburger.blob.core.windows.net/data/".concat(n-8192-131072,".json"),a=function(){var t=(0,o.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([fetch(e,{method:"GET"}),fetch(u,{method:"GET"})]);case 2:if((n=t.sent)[0].ok){t.next=5;break}throw new Error(n[0].statusText);case 5:if(n[1].ok){t.next=7;break}throw new Error(n[1].statusText);case 7:return t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.next=10,(0,l.Z)(a,{retries:2}).catch(function(){var t=(0,o.Z)(c().mark((function t(e){var r,o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),r="https://raw.githubusercontent.com/neoburger/statistics/data/data/".concat(n-8192,".json"),o="https://raw.githubusercontent.com/neoburger/statistics/data/data/".concat(n-8192-131072,".json"),t.next=5,Promise.all([fetch(r,{method:"GET"}),fetch(o,{method:"GET"})]).catch((function(t){return console.log(t),null}));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}());case 10:if(s=t.sent){t.next=13;break}return t.abrupt("return","");case 13:return t.next=15,Promise.all(s.map((function(t){return t.json()}))).catch((function(t){return console.log(t),[null,null]}));case 15:if(i=t.sent,f=(0,r.Z)(i,2),p=f[0],h=f[1],p&&h){t.next=21;break}return t.abrupt("return","");case 21:return d=p.rps-h.rps,w=p.timestamp-h.timestamp,t.abrupt("return",1e3*d/w);case 24:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var T=function(){var t={method:"POST",body:JSON.stringify({params:[],method:"getblockcount",jsonrpc:"2.0",id:1})},n=function(){var n=(0,o.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(p(),t);case 2:if((e=n.sent).ok){n.next=5;break}throw new Error(e.statusText);case 5:return n.abrupt("return",e.json());case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,l.Z)(n,{retries:2}).then((function(t){return t.result})).catch((function(n){return console.log(n),fetch(h(),t).then((function(t){return t.json()})).then((function(t){return t.result})).catch((function(t){return console.log(t),null}))}))},A=function(t){var n=function(){var n=(0,o.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://neoburger.blob.core.windows.net/data/".concat(t,".json"),{method:"GET"});case 2:if((e=n.sent).ok){n.next=5;break}throw new Error(e.statusText);case 5:return n.abrupt("return",e.json());case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,l.Z)(n,{retries:2}).catch((function(n){return console.log(n),fetch("https://raw.githubusercontent.com/neoburger/statistics/data/data/".concat(t,".json"),{method:"GET"}).then((function(t){return t.json()})).catch((function(t){return console.log(t),null}))}))},x=function(t,n){return d(t,"getAccountState",[{type:"Hash160",value:n}])},R=function(){return function(t,n){var e=n?[t,[{account:n,scopes:"CalledByEntry",allowedcontracts:[],allowedgroups:[]}]]:[t],r={method:"POST",body:JSON.stringify({params:e,method:"invokescript",jsonrpc:"2.0",id:1})},u=function(){var t=(0,o.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(p(),r);case 2:if((n=t.sent).ok){t.next=5;break}throw new Error(n.statusText);case 5:return t.abrupt("return",n.json());case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,l.Z)(u,{retries:2}).then((function(t){return t.result})).catch((function(t){return console.log(t),fetch(h(),r).then((function(t){return t.json()})).then((function(t){return t.result})).catch((function(t){return console.log(t)}))}))}(f.Z.SCRIPTAGENT)},Z=function(){return d(f.Z.COMMITTEEINFO,"getAllInfo",[])},G=function(t){var n={method:"POST",body:JSON.stringify({params:{ContractHash:t},method:"GetAssetInfoByContractHash",jsonrpc:"2.0",id:1})},e=function(){var t=(0,o.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(p(),n);case 2:if((e=t.sent).ok){t.next=5;break}throw new Error(e.statusText);case 5:return t.abrupt("return",e.json());case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,l.Z)(e,{retries:2}).then((function(t){return t.result})).catch((function(t){return console.log(t),fetch(h(),n).then((function(t){return t.json()})).then((function(t){return t.result})).catch((function(t){return console.log(t),null}))}))},P=function(){return d(f.Z.NEO,"getCandidates",[])},y=function(){return d(f.Z.NOBUG,"totalSupply",[])},F=function(){var t={method:"GET",headers:{Network:window.location.search.indexOf("dev")>=0?"testnet":"mainnet"}};return fetch("https://api.neotube.io/v1/asset/".concat(f.Z.NOBUG),t).then((function(t){return t.json()})).catch((function(t){return console.log(t),null}))},J=function(t,n,e,r){return d(f.Z.NOBUG,"claim",[{type:"Hash160",value:t},{type:"Integer",value:n},{type:"Integer",value:e},{type:"Array",value:r.map((function(t){return{type:"Hash256",value:t}}))}])},Q=function(t){var n={method:"POST",body:JSON.stringify({params:[t],method:"getnep17balances",jsonrpc:"2.0",id:1})},e=function(){var t=(0,o.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(p(),n);case 2:if((e=t.sent).ok){t.next=5;break}throw new Error(e.statusText);case 5:return t.abrupt("return",e.json());case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,l.Z)(e,{retries:2}).then((function(t){return t.result})).catch((function(t){return console.log(t),fetch(h(),n).then((function(t){return t.json()})).then((function(t){return t.result})).catch((function(t){return console.log(t),null}))}))},k=function(){return d(f.Z.BURGERGOV,"getLatestProposalID",[])},W=function(t){return d(f.Z.BURGERGOV,"proposalAttributes",[{type:"Integer",value:t}])},I=function(t,n){var e="0x".concat(i.wallet.getScriptHashFromAddress(t));return d(f.Z.BURGERGOV,"getVote",[{type:"Hash160",value:e},{type:"Integer",value:n}])}}}]);