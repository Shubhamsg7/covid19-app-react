(this["webpackJsonpcovid19-app"]=this["webpackJsonpcovid19-app"]||[]).push([[0],{23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),r=a(15),d=a.n(r),n=(a(23),a(6)),j=a.n(n),i=a(16),l=a(4),o=a(17),h=a.n(o),b=a(3),O=function(){var e=Object(s.useState)(),t=Object(l.a)(e,2),a=t[0],r=t[1],d=Object(s.useState)(),n=Object(l.a)(d,2),o=n[0],O=n[1],x=Object(s.useState)(),u=Object(l.a)(x,2),p=u[0],v=u[1],m=Object(s.useState)(),f=Object(l.a)(m,2),y=f[0],N=f[1],S=Object(s.useState)(),T=Object(l.a)(S,2),w=T[0],g=T[1],G=Object(s.useState)(),C=Object(l.a)(G,2),D=C[0],R=C[1];return Object(s.useEffect)((function(){function e(){return(e=Object(i.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.covid19api.com/summary");case 2:t=e.sent,console.log(t),r(t.data.Global.TotalConfirmed),O(t.data.Global.TotalDeaths),v(t.data.Global.TotalRecovered),N(t.data.Global.NewConfirmed),g(t.data.Global.NewDeaths),R(t.data.Global.NewRecovered);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{className:"heading",children:"Covid19"}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"card card-confirmed",children:[Object(c.jsx)("h3",{children:"Total Confirmed"}),Object(c.jsx)("h1",{children:Object(c.jsx)(b.a,{value:a,displayType:"text",thousandSeparator:!0})})]}),Object(c.jsxs)("div",{className:"card card-deaths",children:[Object(c.jsx)("h3",{children:"Total Deaths"}),Object(c.jsx)("h1",{children:Object(c.jsx)(b.a,{value:o,displayType:"text",thousandSeparator:!0})})]}),Object(c.jsxs)("div",{className:"card card-recovered",children:[Object(c.jsx)("h3",{children:"Total Recovered"}),Object(c.jsx)("h1",{children:Object(c.jsx)(b.a,{value:p,displayType:"text",thousandSeparator:!0})})]}),Object(c.jsxs)("div",{className:"card card-confirmed",children:[Object(c.jsx)("h3",{children:"New Confirmed"}),Object(c.jsxs)("h1",{children:["          ",Object(c.jsx)(b.a,{value:y,displayType:"text",thousandSeparator:!0})]})]}),Object(c.jsxs)("div",{className:"card card-deaths",children:[Object(c.jsx)("h3",{children:"New Deaths"}),Object(c.jsx)("h1",{children:Object(c.jsx)(b.a,{value:w,displayType:"text",thousandSeparator:!0})})]}),Object(c.jsxs)("div",{className:"card card-recovered",children:[Object(c.jsx)("h3",{children:"New Recovered"}),Object(c.jsx)("h1",{children:Object(c.jsx)(b.a,{value:D,displayType:"text",thousandSeparator:!0})})]})]})]})},x=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(O,{})})})};d.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.520331af.chunk.js.map