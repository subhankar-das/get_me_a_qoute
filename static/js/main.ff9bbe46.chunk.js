(this.webpackJsonpqoute=this.webpackJsonpqoute||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(2),u=a.n(o),c=(a(12),a(3)),r=a(4),i=a(6),l=a(5),h=(a(13),function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).fetchQoute=function(){fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(e){n.setState({qoutes:e})}))},n.getNewQoute=function(){n.setState({fadeIn:!1}),setTimeout((function(){var e=n.state.qoutes.length,t=Math.floor(Math.random()*e);n.setState({qouteIndex:t,fadeIn:!0})}),200)},n.state={qoutes:[],qouteIndex:Math.floor(100*Math.random()),fadeIn:!0},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.fetchQoute()}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"card-wrapper"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"bg-image"}),this.state.qoutes.length>0?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"qoute-wrapper"},s.a.createElement("p",{className:this.state.fadeIn?"fade-in":"fade-out"},this.state.qoutes.length>0?this.state.qoutes[this.state.qouteIndex].text:"NA"),s.a.createElement("p",{className:this.state.fadeIn?"fade-in":"fade-out"},this.state.qoutes.length>0?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,"\u2010"),this.state.qoutes[this.state.qouteIndex].author?this.state.qoutes[this.state.qouteIndex].author:"Anonymous"):"NA"))):s.a.createElement("div",{className:"loader"})),s.a.createElement("button",{onClick:this.getNewQoute},"NEXT")))}}]),a}(s.a.Component));u.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(h,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.ff9bbe46.chunk.js.map