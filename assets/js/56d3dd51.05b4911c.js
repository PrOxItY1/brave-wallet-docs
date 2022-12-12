"use strict";(self.webpackChunkbrave_wallet_docs=self.webpackChunkbrave_wallet_docs||[]).push([[638],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,v=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(v,o(o({ref:t},s),{},{components:n})):r.createElement(v,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4581:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:3},d="Events",l={unversionedId:"ethereum/provider-api/events",id:"ethereum/provider-api/events",title:"Events",description:"connect",source:"@site/docs/ethereum/provider-api/events.md",sourceDirName:"ethereum/provider-api",slug:"/ethereum/provider-api/events",permalink:"/ethereum/provider-api/events",editUrl:"https://github.com/brave/brave-wallet-docs/edit/main/docs/ethereum/provider-api/events.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Methods",permalink:"/ethereum/provider-api/methods"},next:{title:"Properties",permalink:"/ethereum/provider-api/properties"}},s={},p=[{value:"<code>connect</code>",id:"connect",level:2},{value:"<code>disconnect</code>",id:"disconnect",level:2},{value:"<code>chainChanged</code>",id:"chainchanged",level:2},{value:"<code>accountsChanged</code>",id:"accountschanged",level:2},{value:"<code>message</code>",id:"message",level:2},{value:"<code>close</code> (deprecated)",id:"close-deprecated",level:2},{value:"<code>networkChanged</code> (deprecated)",id:"networkchanged-deprecated",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"events"},"Events"),(0,i.kt)("h2",{id:"connect"},(0,i.kt)("inlineCode",{parentName:"h2"},"connect")),(0,i.kt)("p",null,"The Provider emits connect when it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"first connects to a chain after being initialized."),(0,i.kt)("li",{parentName:"ul"},"first connects to a chain, after the disconnect event was emitted.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface ProviderConnectInfo {\n  readonly chainId: string;\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"Provider.on('connect', listener: (connectInfo: ProviderConnectInfo) => void): Provider;\n")),(0,i.kt)("h2",{id:"disconnect"},(0,i.kt)("inlineCode",{parentName:"h2"},"disconnect")),(0,i.kt)("p",null,"The Provider emits disconnect when it becomes disconnected from all chains."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"Provider.on('disconnect', listener: (error: ProviderRpcError) => void): Provider;\n")),(0,i.kt)("h2",{id:"chainchanged"},(0,i.kt)("inlineCode",{parentName:"h2"},"chainChanged")),(0,i.kt)("p",null,"The Provider emits chainChanged when connecting to a new chain."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"Provider.on('chainChanged', listener: (chainId: string) => void): Provider;\n")),(0,i.kt)("h2",{id:"accountschanged"},(0,i.kt)("inlineCode",{parentName:"h2"},"accountsChanged")),(0,i.kt)("p",null,"The Provider emits accountsChanged if the accounts returned from the Provider (eth_accounts) change."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"Provider.on('accountsChanged', listener: (accounts: string[]) => void): Provider;\n")),(0,i.kt)("h2",{id:"message"},(0,i.kt)("inlineCode",{parentName:"h2"},"message")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," event is fired for ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_subscribe")," subscription results."),(0,i.kt)("p",null,"Other types of events are possible in the future, so be sure to check the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," property."),(0,i.kt)("p",null,"The event will be emitted with an object argument of the following form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface ProviderMessage {\n  readonly type: string;\n  readonly data: unknown;\n}\n")),(0,i.kt)("h2",{id:"close-deprecated"},(0,i.kt)("inlineCode",{parentName:"h2"},"close")," (deprecated)"),(0,i.kt)("p",null,"Not yet implemented, but Brave may implement it.\nThis event ",(0,i.kt)("inlineCode",{parentName:"p"},"close")," is superseded by ",(0,i.kt)("inlineCode",{parentName:"p"},"disconnect"),"."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Deprecated API")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This API is deprecated and not available in Brave Wallet."))),(0,i.kt)("h2",{id:"networkchanged-deprecated"},(0,i.kt)("inlineCode",{parentName:"h2"},"networkChanged")," (deprecated)"),(0,i.kt)("p",null,"Not yet implemented, but Brave may implement it for webcompat reasons."),(0,i.kt)("p",null,"The event ",(0,i.kt)("inlineCode",{parentName:"p"},"networkChanged")," is superseded by ",(0,i.kt)("inlineCode",{parentName:"p"},"chainChanged"),"."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Deprecated API")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This API is deprecated and not available in Brave Wallet."))))}m.isMDXComponent=!0}}]);