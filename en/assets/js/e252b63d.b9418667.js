"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(n),d=l,k=s["".concat(o,".").concat(d)]||s[d]||m[d]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:l,i[1]=u;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const r={},i="\u6700\u4f73\u5b9e\u8df5",u={unversionedId:"manual/bestpractices",id:"version-classic/manual/bestpractices",title:"\u6700\u4f73\u5b9e\u8df5",description:"\u547d\u540d\u7ea6\u5b9a",source:"@site/versioned_docs/version-classic/manual/bestpractices.md",sourceDirName:"manual",slug:"/manual/bestpractices",permalink:"/en/docs/classic/manual/bestpractices",draft:!1,tags:[],version:"classic",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u672c\u5730\u5316",permalink:"/en/docs/classic/manual/l10n"},next:{title:"FAQ",permalink:"/en/docs/classic/help/faq"}},o={},c=[{value:"\u547d\u540d\u7ea6\u5b9a",id:"\u547d\u540d\u7ea6\u5b9a",level:2},{value:"\u8c03\u6574\u751f\u6210\u7684\u4ee3\u7801\u7684\u547d\u540d\u7ea6\u5b9a",id:"\u8c03\u6574\u751f\u6210\u7684\u4ee3\u7801\u7684\u547d\u540d\u7ea6\u5b9a",level:2},{value:"\u7075\u6d3b\u9009\u62e9xml\u4e0eexcel\u5b9a\u4e49",id:"\u7075\u6d3b\u9009\u62e9xml\u4e0eexcel\u5b9a\u4e49",level:2},{value:"Luban.Server\u8fd8\u662fLuban.ClientServer",id:"lubanserver\u8fd8\u662flubanclientserver",level:2},{value:"\u6a21\u5757\u5316",id:"\u6a21\u5757\u5316",level:2},{value:"\u5bfc\u51fa\u683c\u5f0f",id:"\u5bfc\u51fa\u683c\u5f0f",level:2},{value:"\u4f18\u96c5\u5730\u5728excel\u4e2d\u914d\u7f6e\u590d\u6742\u7ed3\u6784\u7684\u6570\u636e",id:"\u4f18\u96c5\u5730\u5728excel\u4e2d\u914d\u7f6e\u590d\u6742\u7ed3\u6784\u7684\u6570\u636e",level:2},{value:"\u4f7f\u7528OOP\u7c7b\u578b\u7ee7\u627f\u6765\u5b9a\u4e49\u6e38\u620f\u4e2d\u590d\u6742\u7684GamePlay\u6570\u636e",id:"\u4f7f\u7528oop\u7c7b\u578b\u7ee7\u627f\u6765\u5b9a\u4e49\u6e38\u620f\u4e2d\u590d\u6742\u7684gameplay\u6570\u636e",level:2},{value:"\u4f7f\u7528githooks\uff0c\u5728\u7b56\u5212\u63d0\u4ea4\u7b56\u5212\u914d\u7f6e\u524d\u68c0\u67e5\u6570\u636e\u5408\u6cd5\u6027",id:"\u4f7f\u7528githooks\u5728\u7b56\u5212\u63d0\u4ea4\u7b56\u5212\u914d\u7f6e\u524d\u68c0\u67e5\u6570\u636e\u5408\u6cd5\u6027",level:2},{value:"\u63a8\u8350\u4f7f\u7528 watch \u673a\u5236\uff0c\u81ea\u52a8\u76d1\u6d4b\u53d8\u66f4\u540e \u91cd\u65b0\u751f\u6210",id:"\u63a8\u8350\u4f7f\u7528-watch-\u673a\u5236\u81ea\u52a8\u76d1\u6d4b\u53d8\u66f4\u540e-\u91cd\u65b0\u751f\u6210",level:2},{value:"\u7b56\u5212\u68c0\u67e5\u914d\u7f6e\u811a\u672c\u63a8\u8350\u52a0\u4e0a --generateonly \u53c2\u6570",id:"\u7b56\u5212\u68c0\u67e5\u914d\u7f6e\u811a\u672c\u63a8\u8350\u52a0\u4e0a---generateonly-\u53c2\u6570",level:2},{value:"refgroup",id:"refgroup",level:2},{value:"\u7f16\u8f91\u5668\u751f\u6210\u7684\u6570\u636e\u4f7f\u7528json\u6570\u636e\u683c\u5f0f",id:"\u7f16\u8f91\u5668\u751f\u6210\u7684\u6570\u636e\u4f7f\u7528json\u6570\u636e\u683c\u5f0f",level:2},{value:"\u4f7f\u7528tag\u6765\u6807\u8bc6\u6d4b\u8bd5\u548c\u5f00\u53d1\u671f\u6570\u636e",id:"\u4f7f\u7528tag\u6765\u6807\u8bc6\u6d4b\u8bd5\u548c\u5f00\u53d1\u671f\u6570\u636e",level:2},{value:"\u4f7f\u7528tag unchecked \u6765\u6807\u8bc6\u4e0d\u6821\u9a8c\u8bb0\u5f55",id:"\u4f7f\u7528tag-unchecked-\u6765\u6807\u8bc6\u4e0d\u6821\u9a8c\u8bb0\u5f55",level:2},{value:"datetime",id:"datetime",level:2},{value:"\u672c\u5730\u5316",id:"\u672c\u5730\u5316",level:2}],p={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,l.kt)("h2",{id:"\u547d\u540d\u7ea6\u5b9a"},"\u547d\u540d\u7ea6\u5b9a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"table.name \u63a8\u8350 TbXxxYyy \u7c7b\u98ce\u683c\uff0c\u4fbf\u4e8e\u533a\u522b\u8868\u4e0e\u666e\u901abean\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"bean.var.name \u63a8\u8350 xx_yy_zz\u98ce\u683c\uff0c\u751f\u6210\u65f6\u81ea\u52a8\u4f1a\u6839\u636e\u76ee\u6807\u8bed\u8a00\uff0c\u751f\u6210\u5408\u9002\u7684\u53d8\u91cf\u540d\uff0c\u5982c#\u4e0b\u4e3aXxYyZz\uff1bjava\u4e0b\u4e3axxYyZz\u3002")),(0,l.kt)("h2",{id:"\u8c03\u6574\u751f\u6210\u7684\u4ee3\u7801\u7684\u547d\u540d\u7ea6\u5b9a"},"\u8c03\u6574\u751f\u6210\u7684\u4ee3\u7801\u7684\u547d\u540d\u7ea6\u5b9a"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u662f\u6309\u7167\u6bcf\u4e2a\u8bed\u8a00\u7684\u63a8\u8350\u98ce\u683c\u751f\u6210\u540d\u79f0\uff0c\u4f8b\u5982 xxxx_yyyy\u5728c#\u4e0b\u662fXxxxYyyy\u3002\u6709\u65f6\u5019\u4f60\u60f3\u8c03\u6574\u8fd9\u4e2a\u547d\u540d\u98ce\u683c\uff0c\n\u6bd4\u5982\u8bf4\uff0c\u4f7f\u7528\u539f\u59cb\u5f62\u5f0f\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570 --naming_convention:bean_member none \u6765\u8fbe\u5230\u8fd9\u4e00\u70b9\u3002"),(0,l.kt)("p",null,"\u66f4\u591a\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"../manual/commandtools"},"\u547d\u4ee4\u884c")," \u4e2d\u7684\u6587\u6863"),(0,l.kt)("h2",{id:"\u7075\u6d3b\u9009\u62e9xml\u4e0eexcel\u5b9a\u4e49"},"\u7075\u6d3b\u9009\u62e9xml\u4e0eexcel\u5b9a\u4e49"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5ba1\u7f8e\u8981\u6c42\u9ad8\u7684\uff0c\u4e60\u60ef\u50cfprotobuf\u90a3\u6837\u624b\u5199\u8868\u5b9a\u4e49\u7684\uff0c\u53ef\u4ee5\u5b8c\u5168\u5728xml\u91cc\u5b8c\u6210\u8868\u5b9a\u4e49"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u7528\u4e3b\u4e49\uff0c\u65b9\u4fbf\u7b56\u5212\u4f7f\u7528\u6216\u7f16\u8f91\uff0c\u53ef\u4ee5\u5b8c\u5168\u5728excel\u4e2d\u5b8c\u6210\u8868\u5b9a\u4e49"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u9002\u5f53\u6df7\u7528\u4ee5\u4e0a\u4e24\u8005")),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528xml\u5b9a\u4e49\uff0c\u5efa\u8bae\u6bcf\u4e2a\u6a21\u5757\u5bf9\u5e94\u4e00\u4e2axml\u6587\u4ef6\uff0c\u5e76\u4e14\u6709\u72ec\u7acb\u7684\u6a21\u5757\u540d\uff0c\u4fbf\u4e8e\u7ba1\u7406\u548c\u67e5\u627e\u3002"),(0,l.kt)("h2",{id:"lubanserver\u8fd8\u662flubanclientserver"},"Luban.Server\u8fd8\u662fLuban.ClientServer"),(0,l.kt)("p",null,"Luban.Server\u9700\u8981\u90e8\u5c5e\uff0c\u5bf9\u4e8e\u65b0\u624b\u53ef\u80fd\u6709\u4e9b\u9ebb\u70e6\uff0c\u4f46\u4f18\u70b9\u5728\u4e8e\u80fd\u5229\u7528\u7f13\u5b58\u6781\u5927\u7f29\u77ed\u751f\u6210\u65f6\u95f4\uff0c\u53e6\u5916\uff0c\u66f4\u65b0Luban\u65f6\u4e5f\u4e0d\u9700\u8981\u5927\u5bb6\u66f4\u65b0\u5de5\u5177\u4e86\uff0c\u6709\u6761\u4ef6\u7684\u9879\u76ee\u63a8\u8350\u90e8\u5c5eLuban.Server\uff08\u4f7f\u7528docker\u90e8\u5c5e\u5176\u5b9e\u5c31\u4e00\u884c\u547d\u4ee4\uff0c\u975e\u5e38\u7b80\u5355\uff0c\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"../manual/commandtools"},"\u547d\u4ee4\u884c"),"\u3002"),(0,l.kt)("p",null,"\u4e2d\u5c0f\u9879\u76ee\uff0c\u7701\u4e8b\u8d77\u89c1\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u7528Luban.ClientServer\u3002"),(0,l.kt)("h2",{id:"\u6a21\u5757\u5316"},"\u6a21\u5757\u5316"),(0,l.kt)("p",null,"\u5f3a\u70c8\u5efa\u8bae\u6309\u6a21\u5757\u7ba1\u7406\u914d\u7f6e\uff0c\u6bcf\u4e2a\u6a21\u5757\u4e00\u4e2a\u76ee\u5f55\uff0c\u5c06\u8be5\u6a21\u5757\u7684\u6240\u6709\u914d\u7f6e\u653e\u5230\u8be5\u76ee\u5f55\u4e0b\u3002"),(0,l.kt)("p",null,"\u5b9a\u4e49\u8868\u4e0e\u7ed3\u6784\u65f6\uff0c\u4e5f\u63a8\u8350\u52a0\u4e0a\u5408\u9002\u7684\u6a21\u5757\u540d\uff0c\u5982 item.TbItem, item.ItemInfo\uff0c\u800c\u4e0d\u662f\u7a7amodule\u3002"),(0,l.kt)("h2",{id:"\u5bfc\u51fa\u683c\u5f0f"},"\u5bfc\u51fa\u683c\u5f0f"),(0,l.kt)("p",null,"\u5f00\u53d1\u671f\u63a8\u8350\u4f7f\u7528\u76f8\u5e94\u8bed\u8a00\u7684json\u7248\u672c\uff0c\u8fd9\u6837\u4e0d\u4f1a\u56e0\u4e3a\u914d\u7f6e\u683c\u5f0f\u53d8\u52a8\u800c\u7ecf\u5e38\u91cd\u65b0\u53d1\u5e03\u670d\u52a1\u5668\u6216\u8005\u5ba2\u6237\u7aef"),(0,l.kt)("h2",{id:"\u4f18\u96c5\u5730\u5728excel\u4e2d\u914d\u7f6e\u590d\u6742\u7ed3\u6784\u7684\u6570\u636e"},"\u4f18\u96c5\u5730\u5728excel\u4e2d\u914d\u7f6e\u590d\u6742\u7ed3\u6784\u7684\u6570\u636e"),(0,l.kt)("p",null,"\u914d\u5408 \u591a\u884c\u8bb0\u5f55 + \u591a\u7ea7\u5b57\u6bb5\u5217\u540d + sep\u673a\u5236(\u5b57\u6bb5sep\uff0c\u53catype\u7684sep\u673a\u5236)\uff0c\u7075\u6d3b\u9009\u62e9 \u5217\u9650\u5b9a\u6a21\u5f0f\u548c\u6d41\u5f0f\u6a21\u5f0f\uff0c\n\u7b80\u6d01\u5730\u914d\u7f6e\u51fa\u590d\u6742\u6570\u636e\u3002 \u6709\u56f0\u96be\u53ef\u4ee5\u5728\u7fa4\u91cc\u54a8\u8be2\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528oop\u7c7b\u578b\u7ee7\u627f\u6765\u5b9a\u4e49\u6e38\u620f\u4e2d\u590d\u6742\u7684gameplay\u6570\u636e"},"\u4f7f\u7528OOP\u7c7b\u578b\u7ee7\u627f\u6765\u5b9a\u4e49\u6e38\u620f\u4e2d\u590d\u6742\u7684GamePlay\u6570\u636e"),(0,l.kt)("p",null,"\u7075\u6d3b\u4f7f\u7528OOP\u7c7b\u578b\u7ee7\u627f\u6765\u5b9a\u4e49\u6280\u80fd\u3001BUFF\u3001AI\u3001\u526f\u672c\u7b49\u7b49\u590d\u6742\u7684GamePlay\u6570\u636e\u3002\u89c6\u60c5\u51b5\u9009\u62e9excel\u6216json\u6570\u636e\u6765\u586b\u5199\n\u8fd9\u4e9b\u590d\u6742\u6570\u636e\u3002",(0,l.kt)("strong",{parentName:"p"},"\u5343\u4e07\u4e0d\u8981"),"\u518d\u7528\u4f20\u7edf\u7684 type + param1,param2,param3\u8fd9\u79cd\u65b9\u5f0f\u6765\u7ec4\u5408\u8868\u8fbe\u590d\u6742\u6570\u636e\u7ed3\u6784\uff0c\u5bf9\u7b56\u5212\u548c\u7a0b\u5e8f\u4e0d\u53cb\u597d\uff0c\u800c\u4e14\u96be\u4ee5\u68c0\u67e5\u9519\u8bef\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528githooks\u5728\u7b56\u5212\u63d0\u4ea4\u7b56\u5212\u914d\u7f6e\u524d\u68c0\u67e5\u6570\u636e\u5408\u6cd5\u6027"},"\u4f7f\u7528githooks\uff0c\u5728\u7b56\u5212\u63d0\u4ea4\u7b56\u5212\u914d\u7f6e\u524d\u68c0\u67e5\u6570\u636e\u5408\u6cd5\u6027"),(0,l.kt)("p",null,"\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/githooks-demo"},"githooks-demo")),(0,l.kt)("h2",{id:"\u63a8\u8350\u4f7f\u7528-watch-\u673a\u5236\u81ea\u52a8\u76d1\u6d4b\u53d8\u66f4\u540e-\u91cd\u65b0\u751f\u6210"},"\u63a8\u8350\u4f7f\u7528 watch \u673a\u5236\uff0c\u81ea\u52a8\u76d1\u6d4b\u53d8\u66f4\u540e \u91cd\u65b0\u751f\u6210"),(0,l.kt)("p",null,"Luban.Client\u548cLuban.ClientServer\u63d0\u4f9b\u4e86watch\u751f\u6210\u673a\u5236\u3002\u4f7f\u7528\u53c2\u6570 -w dir1,dir2,..  \uff0c\u5f53\u76f8\u5e94\u76ee\u5f55\u53d8\u66f4\u65f6\u81ea\u52a8\u91cd\u65b0\u751f\u6210\u3002\u4f8b\u5982\u4e00\u4e2a\u793a\u4f8b\u811a\u672c\u5982\u4e0b\uff0c\u5f53\u5b9a\u4e49\u6216\u8005\u914d\u7f6e\u76ee\u5f55\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u81ea\u52a8\u89e6\u53d1\u91cd\u65b0\u751f\u6210\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"%GEN_CLIENT% -h %LUBAN_SERVER_IP% -j cfg -w %CONF_ROOT%\\Datas,%CONF_ROOT%\\Defines --^\n -d %DEFINE_FILE%^\n --input_data_dir %CONF_ROOT%\\Datas ^\n --output_code_dir TsScripts/src/Gen/Cfg ^\n --output_data_dir Assets\\StreamingAssets\\ConfigData ^\n --gen_types code_typescript_json,data_json ^\n -s client \n")),(0,l.kt)("h2",{id:"\u7b56\u5212\u68c0\u67e5\u914d\u7f6e\u811a\u672c\u63a8\u8350\u52a0\u4e0a---generateonly-\u53c2\u6570"},"\u7b56\u5212\u68c0\u67e5\u914d\u7f6e\u811a\u672c\u63a8\u8350\u52a0\u4e0a --generateonly \u53c2\u6570"),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u4e2a\u53c2\u6570\u662fLuban.Client\u7684\u53c2\u6570\uff0c\u5fc5\u987b\u52a0\u5230 -- \u4e4b\u524d\u3002 \u52a0\u4e0a\u6b64\u53c2\u6570\u540eLuban.Server\u4ecd\u7136\u4f1a\u751f\u6210\u6570\u636e\uff0c\u4f46Luban.Client\u4e0d\u4e0b\u8f7d\u751f\u6210\u7ed3\u679c\u3002\u53ef\u4ee5\u8fdb\u4e00\u6b65\u7f29\u77ed\u65f6\u95f4\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b\u811a\u672c\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"%LUBAN_CLIENT% -j cfg --generateonly -- ^\n --input_data_dir %DATA_DIR^ ^\n -- ...\n -- ...\n")),(0,l.kt)("h2",{id:"refgroup"},"refgroup"),(0,l.kt)("p",null,"\u5982\u679c\u5f88\u591a\u5b57\u6bb5\u90fdref\u4e86\u76f8\u540c\u4e00\u6279\u8868\uff0c\u53ef\u4ee5\u4f7f\u7528refgroup\u65b9\u4fbf\u5f15\u7528\u3002"),(0,l.kt)("h2",{id:"\u7f16\u8f91\u5668\u751f\u6210\u7684\u6570\u636e\u4f7f\u7528json\u6570\u636e\u683c\u5f0f"},"\u7f16\u8f91\u5668\u751f\u6210\u7684\u6570\u636e\u4f7f\u7528json\u6570\u636e\u683c\u5f0f"),(0,l.kt)("p",null,"\u7f16\u8f91\u5668\u751f\u6210\u7684\u590d\u6742\u914d\u7f6e\u6570\u636e\u5efa\u8bae\u4ee5json\u6570\u636e\u4fdd\u5b58\uff0c\u6bcf\u4e2a\u8bb0\u5f55\u70b9\u4e00\u4e2a\u6587\u4ef6\uff0c\u653e\u5230\u76ee\u5f55\u4e0b\u3002\u5c06table.input\u8bbe\u7f6e\u4e3a\u8be5\u76ee\u5f55\u3002 luban\u652f\u6301\u751f\u6210\u8bb0\u5f55\u4ecejson\u52a0\u8f7d\u548c\u4fdd\u5b58\u7684\u4ee3\u7801\uff0c\u4e0d\u8981\u81ea\u5df1\u624b\u5199\u8fd9\u4e2a\u5e8f\u5217\u5316\uff01"),(0,l.kt)("h2",{id:"\u4f7f\u7528tag\u6765\u6807\u8bc6\u6d4b\u8bd5\u548c\u5f00\u53d1\u671f\u6570\u636e"},"\u4f7f\u7528tag\u6765\u6807\u8bc6\u6d4b\u8bd5\u548c\u5f00\u53d1\u671f\u6570\u636e"),(0,l.kt)("p",null,"\u4f7f\u7528tag\u6765\u6807\u8bb0\u90a3\u4e9b\u6d4b\u8bd5\u548c\u5f00\u53d1\u671f\u6570\u636e\uff0c\u6b63\u5f0f\u53d1\u5e03\u65f6\u4f7f\u7528 --output:exclude_tags tag1,tag2,... \u6765\u8fc7\u6ee4\u8fd9\u4e9b\u6570\u636e\uff0c\n\u4e0d\u8981\u81ea\u5df1\u53bb\u6539\u5b83\uff01"),(0,l.kt)("h2",{id:"\u4f7f\u7528tag-unchecked-\u6765\u6807\u8bc6\u4e0d\u6821\u9a8c\u8bb0\u5f55"},"\u4f7f\u7528tag unchecked \u6765\u6807\u8bc6\u4e0d\u6821\u9a8c\u8bb0\u5f55"),(0,l.kt)("p",null,"\u6709\u4e9b\u6570\u636e\u6279\u91cf\u4e34\u65f6\u5236\u4f5c\uff0c\u5f88\u591a\u5f15\u7528\u503c\u90fd\u4e0d\u5408\u6cd5\uff0c\u4f46\u6682\u65f6\u672a\u88ab\u7a0b\u5e8f\u4f7f\u7528\uff0c\u751f\u6210\u65f6\u56e0\u4e3aref\u5931\u8d25\u800c\u6253\u5370\u5927\u91cf\u8b66\u544a\u3002\u53ef\u4ee5\u4e3a\u8fd9\u4e9b\u8bb0\u5f55\u52a0\u4e0a unchecked \u6807\u7b7e\uff0cluban\u5c31\u4e0d\u4f1a\u68c0\u67e5\u8fd9\u4e9b\u6570\u636e\u4e86\u3002"),(0,l.kt)("h2",{id:"datetime"},"datetime"),(0,l.kt)("p",null,"\u4f7f\u7528datetime\u6765\u6807\u8bc6\u65f6\u95f4\uff0c\u6ce8\u610f\u914d\u5408\u65f6\u533a\u53c2\u6570\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"\u672c\u5730\u5316"},"\u672c\u5730\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528text\u6765\u6807\u8bc6\u4f60\u8981\u672c\u5730\u5316\u7684\u6587\u672c\u7c7b\u578b\uff0c\u4e0d\u8981\u50cf\u4e4b\u524d\u90a3\u6837\u5b9a\u4e49\u4e00\u4e2a\u672c\u5730\u5316key\u5b57\u6bb5\uff01"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5bfc\u51fa\u65f6\u4fbf\u5b8c\u6210\u672c\u571f\u5316\uff0c\u5219\u8bf7\u4f7f\u7528\u9759\u6001\u672c\u571f\u5316\u673a\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd0\u884c\u65f6\u9700\u8981\u5207\u6362\u8bed\u8a00\uff0c\u8bf7\u4f7f\u7528\u52a8\u6001\u672c\u571f\u5316\u673a\u5236\u3002")))}m.isMDXComponent=!0}}]);