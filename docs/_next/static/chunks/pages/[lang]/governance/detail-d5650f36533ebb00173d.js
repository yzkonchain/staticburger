(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{826:function(e,i,t){"use strict";t.r(i),t.d(i,{__N_SSG:function(){return V},default:function(){return S}});var a=t(266),l=t(809),s=t.n(l),n=t(1163),d=t(3031),r=t(7294),o=t(7484),c=t.n(o),u=t(4431),v=t.n(u),p=t(9212),_=t.n(p),h=t(8238),m=t(1186),x=t.n(m),f=t(5930),j=t(316),g=t(3915),N=t(1883),D=t(2538),b={src:"/_next/static/image/resources/images/proposal-bg.9b917fbb27c780e62985aa7754887b89.svg",height:228,width:220},k={src:"/_next/static/image/resources/images/right.e34b8caefb23bf5cbb04b3dd91528f8b.svg",height:12,width:16},W={src:"/_next/static/image/resources/images/error-red.cba3c2e5efdfb141cc09c946799e2e46.svg",height:12,width:12},w=t(6216),L=t(5675),I=t(5893);c().extend(_());var V=!0,S=function(){var e=d.ZP.t,i=function(i){return e(i,{ns:"governance"})},t=(0,n.useRouter)(),l=(0,N.C)((function(e){return e.burger.address})),o=(0,N.C)((function(e){return e.burger.walletName})),u=(0,r.useState)("-"),p=u[0],_=u[1],m=(0,r.useState)(),V=m[0],S=m[1],B=(0,r.useState)({status:"hide",hint:""}),y=B[0],F=B[1];(0,r.useEffect)((function(){A()}),[]),(0,r.useEffect)((function(){t.query.id&&l&&C()}),[t,i,l]);var A=function(){(0,D.f2)().then((function(e){var i,t,a,l=null!==(i=null===e||void 0===e||null===(t=e.stack)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.value)&&void 0!==i?i:null;_(l?(0,g.u)((0,g.Q)(l,10)):"-")}))},C=function(){(0,D._1)(t.query.id).then(function(){var e=(0,a.Z)(s().mark((function e(i){var a,n,d,r,o,u,p,_,m,x,f,j,g,N,b,k,W,w,L,I,V,B,y,F,A,C,E,R,T;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i||"HALT"!==i.state){e.next=17;break}return(A={expand:!1,id:t.query.id,for:new(v())(0),against:new(v())(0)}).title=(null===i||void 0===i||null===(a=i.stack)||void 0===a||null===(n=a[0])||void 0===n||null===(d=n.value)||void 0===d?void 0:d[1])&&h.u.base642utf8(i.stack[0].value[1].value),A.desc=(null===i||void 0===i||null===(r=i.stack)||void 0===r||null===(o=r[0])||void 0===o||null===(u=o.value)||void 0===u?void 0:u[2])&&h.u.base642utf8(i.stack[0].value[2].value),A.startDate=(null===i||void 0===i||null===(p=i.stack)||void 0===p||null===(_=p[0])||void 0===_||null===(m=_.value)||void 0===m?void 0:m[7])&&c()(parseInt(i.stack[0].value[7].value)).format("YYYY-MM-DD hh:mm"),A.endDate=(null===i||void 0===i||null===(x=i.stack)||void 0===x||null===(f=x[0])||void 0===f||null===(j=f.value)||void 0===j?void 0:j[8])&&c()(parseInt(i.stack[0].value[8].value)).format("YYYY-MM-DD hh:mm"),A.scripthash=(null===i||void 0===i||null===(g=i.stack)||void 0===g||null===(N=g[0])||void 0===N||null===(b=N.value)||void 0===b?void 0:b[3])&&"0x".concat(h.u.reverseHex(h.u.base642hex(i.stack[0].value[3].value))),A.method=(null===i||void 0===i||null===(k=i.stack)||void 0===k||null===(W=k[0])||void 0===W||null===(w=W.value)||void 0===w?void 0:w[4])&&h.u.base642utf8(i.stack[0].value[4].value),A.args=null===i||void 0===i||null===(L=i.stack)||void 0===L||null===(I=L[0])||void 0===I||null===(V=I.value)||void 0===V||null===(B=V[5])||void 0===B?void 0:B.value,A.for=new(v())("23456"),A.against=new(v())("12345"),e.next=13,(0,D.j0)(l,"".concat(A.id));case 13:C=e.sent,A.voteStatus=null===C||void 0===C||null===(y=C.stack)||void 0===y||null===(F=y[0])||void 0===F?void 0:F.value,c()().isSameOrAfter(c()(A.endDate))?null!==i&&void 0!==i&&null!==(E=i.stack)&&void 0!==E&&null!==(R=E[0])&&void 0!==R&&null!==(T=R.value)&&void 0!==T&&T[9]&&0===i.stack[0].value[9].value?A.status="Failed":A.status="Executed":A.status="Active",S(A);case 17:case"end":return e.stop()}}),e)})));return function(i){return e.apply(this,arguments)}}())},E=function(){var e=(0,a.Z)(s().mark((function e(a,n){var d,r,c,u,v;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,null===(d=j.f[o])||void 0===d?void 0:d.getNetwork();case 4:if("N3MainNet"===(c=e.sent)||"MainNet"===c||void 0!==t.query.dev){e.next=8;break}return F({status:"error",hint:i("networkErr")}),e.abrupt("return");case 8:return F({status:"pending",hint:i("pending")}),u=!1,(n&&"1"===a.voteStatus||!n&&"-1"===a.voteStatus)&&(u=!0),e.next=13,null===(r=j.f[o])||void 0===r?void 0:r.vote(l,"".concat(a.id),n,u);case 13:"success"===(v=e.sent).status?(C(),F({status:"success",hint:i("success"),jumpUrl:"http://explorer.onegate.space/transactionInfo/".concat(v.txid)})):"error"===v.status?F({status:"error",hint:i("failed")}):F({status:"hide",hint:""});case 15:case"end":return e.stop()}}),e)})));return function(i,t){return e.apply(this,arguments)}}();return(0,I.jsxs)("div",{className:x().wrapper,children:[(0,I.jsxs)("div",{className:x().proposalWrapper,children:[(0,I.jsx)(L.default,{className:x().proposalBgIcon,src:b,alt:"proposalBg"}),(0,I.jsx)("div",{className:x().title,children:i("proposal")}),(0,I.jsxs)("div",{className:x().breadCrumbs,children:[(0,I.jsx)("a",{className:x().jumpText,onClick:function(){return t.back()},children:i("allProposals")}),(0,I.jsx)("span",{children:" / "}),(0,I.jsx)("span",{className:x().deepen,children:i("proposalDetails")})]}),(0,I.jsx)("div",{className:x().proposalTitle,children:null===V||void 0===V?void 0:V.title}),(0,I.jsxs)("div",{className:x().bottomWrapper,children:[(0,I.jsxs)("div",{className:x().leftWrapper,children:[(0,I.jsxs)("div",{className:x().leftItemWrapper,children:[(0,I.jsxs)("div",{className:x().itemLine,children:[(0,I.jsx)("div",{children:i("status")}),(0,I.jsx)("div",{className:"Active"===(null===V||void 0===V?void 0:V.status)?x().active:"Failed"===(null===V||void 0===V?void 0:V.status)?x().failed:x().executed,children:null===V||void 0===V?void 0:V.status})]}),(0,I.jsxs)("div",{className:x().itemLine,children:[(0,I.jsx)("div",{children:i("proposal")}),(0,I.jsxs)("div",{children:["BIP #",null===V||void 0===V?void 0:V.id]})]}),(0,I.jsxs)("div",{className:x().itemLine,children:[(0,I.jsx)("div",{children:i("desc")}),(0,I.jsx)("div",{children:null===V||void 0===V?void 0:V.desc})]})]}),(0,I.jsxs)("div",{className:x().leftItemWrapper,children:[(0,I.jsx)("div",{className:x().itemLine2,children:"Execution Object"}),(0,I.jsxs)("div",{className:x().itemLine,children:[(0,I.jsx)("div",{children:"ScriptHash"}),(0,I.jsx)("div",{className:x().exeValue,children:null===V||void 0===V?void 0:V.scripthash})]}),(0,I.jsxs)("div",{className:x().itemLine,children:[(0,I.jsx)("div",{children:"Method"}),(0,I.jsx)("div",{className:x().exeValue,children:null===V||void 0===V?void 0:V.method})]}),(0,I.jsxs)("div",{className:x().itemLine,children:[(0,I.jsx)("div",{children:"Args"}),null!==V&&void 0!==V&&V.args?(0,I.jsx)("div",{className:x().exeValue2,children:null!==V&&void 0!==V&&V.args?JSON.stringify(V.args):""}):null]})]})]}),(0,I.jsxs)("div",{className:x().rightWrapper,children:[(0,I.jsxs)("div",{className:x().rightItemWrapper,children:[(0,I.jsxs)("div",{className:x().itemLineRight,children:[(0,I.jsx)("div",{children:i("totalVotes")}),(0,I.jsx)("div",{children:p})]}),(0,I.jsxs)("div",{className:x().itemLineRight,children:[(0,I.jsx)("div",{children:i("voteStatus")}),(0,I.jsx)("div",{className:"1"===(null===V||void 0===V?void 0:V.voteStatus)?x().for:"-1"===(null===V||void 0===V?void 0:V.voteStatus)?x().against:x().unvoted,children:"1"===(null===V||void 0===V?void 0:V.voteStatus)?i("for"):"-1"===(null===V||void 0===V?void 0:V.voteStatus)?i("against"):i("unvoted")})]}),(0,I.jsxs)("div",{className:x().proposalItemWrapper,children:[(0,I.jsxs)("div",{className:x().vsWrapper,children:[(0,I.jsxs)("div",{className:x().flex,children:[(0,I.jsx)("div",{children:i("for")}),(0,I.jsx)("div",{children:(0,g.u)(null===V||void 0===V?void 0:V.for.toString())})]}),(0,I.jsx)("div",{className:x().proposalItemVoteVsGray,children:(0,I.jsx)("div",{className:x().proposalItemVoteForYellow,style:{width:"".concat(null===V||void 0===V?void 0:V.for.dividedBy(null===V||void 0===V?void 0:V.for.plus(null===V||void 0===V?void 0:V.against)).times(100).toString(),"%")}})})]}),(0,I.jsxs)("button",{className:"".concat(x().forBtn," ").concat("Active"!==(null===V||void 0===V?void 0:V.status)?x().disabled:""),disabled:"Active"!==(null===V||void 0===V?void 0:V.status),onClick:function(){return E(V,!0)},children:["1"===(null===V||void 0===V?void 0:V.voteStatus)&&(0,I.jsx)(L.default,{className:x().marginRight5,src:w.Z,alt:"rightBlack"}),(0,I.jsx)("span",{children:i("for")})]})]}),(0,I.jsxs)("div",{className:x().proposalItemWrapper,children:[(0,I.jsxs)("div",{className:x().vsWrapper,children:[(0,I.jsxs)("div",{className:x().flex,children:[(0,I.jsx)("div",{children:i("against")}),(0,I.jsx)("div",{children:(0,g.u)(null===V||void 0===V?void 0:V.against.toString())})]}),(0,I.jsx)("div",{className:x().proposalItemVoteVsGray,children:(0,I.jsx)("div",{className:x().proposalItemVoteForPurple,style:{width:"".concat(null===V||void 0===V?void 0:V.against.dividedBy(null===V||void 0===V?void 0:V.for.plus(null===V||void 0===V?void 0:V.against)).times(100).toString(),"%")}})})]}),(0,I.jsxs)("button",{className:"".concat(x().againstBtn," ").concat("Active"!==(null===V||void 0===V?void 0:V.status)?x().disabled:""),disabled:"Active"!==(null===V||void 0===V?void 0:V.status),onClick:function(){return E(V,!1)},children:["-1"===(null===V||void 0===V?void 0:V.voteStatus)&&(0,I.jsx)(L.default,{className:x().marginRight5,src:w.Z,alt:"rightBlack"}),(0,I.jsx)("span",{children:i("against")})]})]})]}),(0,I.jsxs)("div",{className:x().rightBottomItemWrapper,children:[(0,I.jsx)("div",{className:x().historyTitle,children:"History"}),(null===V||void 0===V?void 0:V.status)&&(0,I.jsxs)("div",{children:[(0,I.jsxs)("div",{className:x().flexRow,children:[(0,I.jsxs)("div",{children:[(0,I.jsx)("div",{className:"".concat(x().circle," ").concat("Active"===(null===V||void 0===V?void 0:V.status)?x().during:x().passed),children:"Active"===(null===V||void 0===V?void 0:V.status)?"1":(0,I.jsx)(L.default,{src:k,alt:"right"})}),(0,I.jsx)("div",{className:"".concat(x().connectLine," ").concat("Active"!==(null===V||void 0===V?void 0:V.status)?x().passedLine:"")})]}),(0,I.jsxs)("div",{className:x().timeLineTextWrapper,children:[(0,I.jsx)("div",{className:"Active"===(null===V||void 0===V?void 0:V.status)?x().black:x().for,children:i("active")}),(0,I.jsx)("div",{className:"Active"===(null===V||void 0===V?void 0:V.status)?x().black:x().for,children:null===V||void 0===V?void 0:V.startDate})]})]}),(0,I.jsxs)("div",{className:x().flexRow,children:[(0,I.jsxs)("div",{children:[(0,I.jsx)("div",{className:"".concat(x().circle," ").concat("Executed"===(null===V||void 0===V?void 0:V.status)?x().passed:""," ").concat("Failed"===(null===V||void 0===V?void 0:V.status)?x().failedCircle:""),children:"Active"===(null===V||void 0===V?void 0:V.status)?"2":"Failed"===(null===V||void 0===V?void 0:V.status)?(0,I.jsx)(L.default,{src:W,alt:"error"}):(0,I.jsx)(L.default,{src:k,alt:"right"})}),(0,I.jsx)("div",{className:"".concat(x().connectLineShort," ").concat("Executed"===(null===V||void 0===V?void 0:V.status)?x().passedLine:""," ").concat("Failed"===(null===V||void 0===V?void 0:V.status)?x().failedLine:"")})]}),(0,I.jsxs)("div",{className:x().timeLineTextWrapper,children:[(0,I.jsx)("div",{className:"Active"===(null===V||void 0===V?void 0:V.status)?x().black:"Executed"===(null===V||void 0===V?void 0:V.status)?x().for:x().failed,children:"Failed"===(null===V||void 0===V?void 0:V.status)?"Failed":"Executed"}),(0,I.jsx)("div",{className:"Active"===(null===V||void 0===V?void 0:V.status)?x().black:"Executed"===(null===V||void 0===V?void 0:V.status)?x().for:x().failed,children:null===V||void 0===V?void 0:V.endDate})]})]})]})]})]})]})]}),"hide"!==y.status&&(0,I.jsx)(f.Z,{title:i("vote"),status:y.status,hint:y.hint,jumpUrl:y.jumpUrl,onCancel:function(){return F({status:"hide",hint:""})}})]})}},558:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/governance/detail",function(){return t(826)}])},1186:function(e){e.exports={wrapper:"Detail_wrapper__2VFaO",proposalWrapper:"Detail_proposalWrapper__2FDER",proposalBgIcon:"Detail_proposalBgIcon__1mUXP",title:"Detail_title__2axVX",breadCrumbs:"Detail_breadCrumbs__1VF69",jumpText:"Detail_jumpText__PCdTF",deepen:"Detail_deepen__19A5x",proposalTitle:"Detail_proposalTitle__1-Yb_",bottomWrapper:"Detail_bottomWrapper__2Pncy",leftWrapper:"Detail_leftWrapper__2uP7p",itemLine:"Detail_itemLine__Sv5Mc",itemLine2:"Detail_itemLine2__1KXvU",exeValue:"Detail_exeValue__3RFwG",exeValue2:"Detail_exeValue2__2F_ZJ",rightWrapper:"Detail_rightWrapper__2cBz3",leftItemWrapper:"Detail_leftItemWrapper__89z2d",rightItemWrapper:"Detail_rightItemWrapper__1Iedd",itemLineRight:"Detail_itemLineRight__1yoEy",proposalItemWrapper:"Detail_proposalItemWrapper__mTaWZ",flex:"Detail_flex__2tfLz",proposalItemVoteVsGray:"Detail_proposalItemVoteVsGray__As7wU",proposalItemVoteForYellow:"Detail_proposalItemVoteForYellow__1WhzV",proposalItemVoteForPurple:"Detail_proposalItemVoteForPurple__2l8wU",vsWrapper:"Detail_vsWrapper__t5ucz",forBtn:"Detail_forBtn__UWV6g",againstBtn:"Detail_againstBtn__2VMZs",rightBottomItemWrapper:"Detail_rightBottomItemWrapper__1VKGZ",connectLine:"Detail_connectLine__1B1uY",connectLineShort:"Detail_connectLineShort__3RKaO",passedLine:"Detail_passedLine__3guOZ",failedLine:"Detail_failedLine__3e89b",circle:"Detail_circle__rOhD5",black:"Detail_black__3BkMX",during:"Detail_during__3_Cbd",passed:"Detail_passed__iF-rz",failedCircle:"Detail_failedCircle__12us5",flexRow:"Detail_flexRow__3MnSo",timeLineTextWrapper:"Detail_timeLineTextWrapper__2BHY3",active:"Detail_active__16dU-",failed:"Detail_failed__1XrCB",executed:"Detail_executed__3NJWQ",for:"Detail_for__3Mf6t",against:"Detail_against__1tYvw",unvoted:"Detail_unvoted__3-4-J",disabled:"Detail_disabled__1n22l",marginRight5:"Detail_marginRight5__1Q8Wx"}}},function(e){e.O(0,[741,227,538,905,774,888,179],(function(){return i=558,e(e.s=i);var i}));var i=e.O();_N_E=i}]);