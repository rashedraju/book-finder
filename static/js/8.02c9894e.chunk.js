(this["webpackJsonpbook-finder"]=this["webpackJsonpbook-finder"]||[]).push([[8],{139:function(e,n,t){"use strict";t.r(n);var r,i,o,a,c,s,l,d,u,m=t(41),h=t.n(m),b=t(50),j=t(24),f=t(138),O=t(102),p=t.n(O),g=t(0),v=t(7),x=t(23),w=t(96),k=t(1),y=function(e){var n=e.src,t=e.alt,r=Object(g.useState)(),i=Object(j.a)(r,2),o=i[0],a=i[1];return Object(g.useEffect)((function(){var e=function(){a(n)};if(n){var t=new Image;return t.addEventListener("load",e),t.src=n,function(){t.removeEventListener("load",e)}}return function(){}}),[n]),o===n?Object(k.jsx)("img",{src:n,alt:t}):null},S=t(4),M=t(5),C=Object(M.c)(r||(r=Object(S.a)(["\n    padding: 0.5rem 1rem;\n    font-size: 1rem;\n"]))),A=M.d.button(i||(i=Object(S.a)(["\n    ",";\n    background-color: ",";\n    color: ",";\n    ",";\n"])),C,(function(e){return e.theme.colors.primary.main}),(function(e){return e.theme.colors.text}),(function(e){return e.center&&"display: block; margin: 0 auto"})),B=M.d.button(o||(o=Object(S.a)(["\n    ",";\n    background-color: ",";\n    color: ",";\n    border: 1px solid ",";\n    ",";\n"])),C,(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.primary.main}),(function(e){return e.theme.colors.primary.main}),(function(e){return e.center&&"display: block; margin: 0 auto"})),E=function(e){var n=e.variant,t=e.style,r=void 0===t?{}:t,i=e.center,o=void 0!==i&&i,a=e.onClick,c=e.children;return"outline"===n?Object(k.jsxs)(B,{onClick:a,style:r,center:o?1:0,children:[" ",c," "]}):Object(k.jsxs)(A,{onClick:a,center:o?1:0,style:r,children:[" ",c," "]})},F=M.d.article(a||(a=Object(S.a)(["\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    padding: 1rem;\n    background-color: ",";\n    color: ",";\n    @media (max-width: ",") {\n        flex-direction: column;\n        margin-top: 1rem;\n    }\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.breakpoint.tablet})),T=M.d.figure(c||(c=Object(S.a)(["\n    width: 40%;\n    text-align: center;\n    img {\n        border: 2px solid ",";\n        padding: 1rem;\n        height: 15rem;\n        transform-origin: 0 0 0;\n        transition: transform 0.2s ease;\n        &:hover {\n            transform: rotateY(-20deg);\n        }\n    }\n    @media (max-width: ",") {\n        width: 100%;\n        span {\n            margin: 0 auto;\n        }\n    }\n"])),(function(e){return e.theme.colors.primary.main}),(function(e){return e.theme.breakpoint.tablet})),L=M.d.div(s||(s=Object(S.a)(["\n    width: 60%;\n    @media (max-width: ",") {\n        width: 100%;\n    }\n"])),(function(e){return e.theme.breakpoint.tablet})),z=M.d.h1(l||(l=Object(S.a)(["\n    margin-bottom: 1rem;\n"]))),I=M.d.p(d||(d=Object(S.a)(["\n    small {\n        color: ",";\n    }\n"])),(function(e){return e.theme.colors.primary.main})),J=M.d.p(u||(u=Object(S.a)(["\n    margin: 1rem 0;\n"]))),q=function(e){var n=e.book,t=e.onMyShelfAction;return Object(k.jsx)(F,{children:n?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(T,{children:Object(k.jsx)(y,{src:n.image,alt:n.title})}),Object(k.jsxs)(L,{children:[Object(k.jsx)(z,{children:n.title}),Object(k.jsxs)(I,{children:[Object(k.jsx)("span",{children:"by"})," ",Object(k.jsx)("small",{children:n.authors})]}),Object(k.jsx)(J,{children:n.description}),Object(k.jsx)(E,{onClick:t,center:!0,children:n.addedToMyShelf?"Remove from my shelf":"Add to my shelf"})]})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(T,{children:Object(k.jsx)(w.a,{variant:"rectangular",animation:"wave",width:"40%",height:200,style:{margin:"0 auto"}})}),Object(k.jsxs)(L,{children:[Object(k.jsx)(w.a,{variant:"text",animation:"wave",width:"100%",height:20,style:{marginBottom:"0.5rem"}}),Object(k.jsx)(w.a,{variant:"text",animation:"wave",width:"90%",height:10,style:{marginBottom:"1rem"}}),new Array(5).fill(0).map((function(e,n){return Object(k.jsx)(w.a,{variant:"text",animation:"wave",width:"100%",height:10},"skeleton-".concat(n))}))]})]})})},D=t(51),H=t(98);n.default=function(){var e=Object(v.h)(),n=Object(g.useState)(),t=Object(j.a)(n,2),r=t[0],i=t[1],o=Object(g.useState)({isOpen:!1,message:""}),a=Object(j.a)(o,2),c=a[0],s=a[1],l=Object(D.b)(),d=l.addToMyShelf,u=l.removeFromMyShelf,m=l.isAddedToMyShelf,O=Object(g.useCallback)(function(){var e=Object(b.a)(h.a.mark((function e(n){var t,r,o,a,c,s,l,d;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat(H.a).concat(n));case 3:s=e.sent,l=s.data.volumeInfo,d={id:null!==(t=s.data.id)&&void 0!==t?t:"",addedToMyShelf:m(s.data.id),title:null!==(r=l.title)&&void 0!==r?r:"",authors:null===(o=l.authors)||void 0===o?void 0:o.join(", "),image:null!==(a=l.imageLinks.thumbnail)&&void 0!==a?a:"",description:null!==(c=l.description)&&void 0!==c?c:""},i(d),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),[m]),w=function(e){s({isOpen:!0,message:e})};return Object(g.useEffect)((function(){O(e.id)}),[e.id,O]),Object(k.jsxs)(x.c,{children:[Object(k.jsx)(f.a,{open:c.isOpen,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:3e3,onClose:function(){s({isOpen:!1,message:""})},message:c.message}),Object(k.jsx)(q,{book:r,onMyShelfAction:function(){var e;m(r.id)?(e=r.id,u(e),w("Successfully removed")):function(e){var n="";n=d(e)?"Book is added to shelf":"Failed to add Book on shelf",w(n)}(r)}})]})}},98:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}));var r="https://www.googleapis.com/books/v1/volumes?q=",i="https://www.googleapis.com/books/v1/volumes/"}}]);
//# sourceMappingURL=8.02c9894e.chunk.js.map