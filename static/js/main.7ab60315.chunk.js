(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{21:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n.n(a),i=n(3),s=n.n(i),o=n(4),l=n(5),b=n(6),d=n(11),j=n(10),u=n(0),h=function(e){var t=e.message;return Object(u.jsx)("p",{children:t})},O=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Good:",Object(u.jsx)("span",{children:t})]}),Object(u.jsxs)("li",{children:["Neutral:",Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("li",{children:["Bad:",Object(u.jsx)("span",{children:c})]}),Object(u.jsxs)("li",{children:["Total:",Object(u.jsx)("span",{children:a})]}),Object(u.jsxs)("li",{children:["Positive feedback:",Object(u.jsxs)("span",{children:[r,"%"]})]})]})},v=n(7),x=n(9).a.button(c||(c=Object(v.a)(["\n  margin-right: 10px;\n"]))),k=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(u.jsx)(x,{type:"button",onClick:function(){return n(e)},children:e},e)}))},p=function(e){var t=e.title,n=e.children;return Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{children:t}),n]})},f=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(b.a)(n,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.state.good,t=Math.round(100*e/this.countTotalFeedback());return t||"0"}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p,{title:"Please leave feedback",children:Object(u.jsx)(k,{options:Object.keys(this.state),onLeaveFeedback:this.leaveFeedback})}),this.countTotalFeedback()?Object(u.jsx)(p,{title:"Statistics",children:Object(u.jsx)(O,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(u.jsx)(h,{message:"No feedback given"})]})}}]),n}(r.a.Component);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.7ab60315.chunk.js.map