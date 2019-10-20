(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(e,t,n){e.exports=n(238)},238:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(34),i=n.n(c),o=n(12),s=n(11),u=n(108),l=n(30),m=n(21),p=n(2),d=n(1),h=n(8),f=n(6),b=n(9),v=n(22),y=n.n(v),O=n(26),E=n(38),g=n(18),j=Object(g.a)(),S=n(109),w=n.n(S).a.create({baseURL:"http://localhost:3001"});function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){return function(){var t=Object(E.a)(y.a.mark((function t(n){var r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/streams/".concat(e));case 2:r=t.sent,n({type:"FETCH_STREAM",payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).onAuthChange=function(e){e?n.props.signIn(n.auth.currentUser.get().getId()):n.props.signOut()},n.onSignInClick=function(){n.auth.signIn()},n.onSignOutClick=function(){n.auth.signOut()},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"168950547329-al7f1q440uo13h348faubo4q0b12cgu7.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?a.a.createElement("button",{className:"ui red google button",onClick:this.onSignOutClick},a.a.createElement("i",{className:"google icon"}),"Sign Out"):a.a.createElement("button",{className:"ui blue google button",onClick:this.onSignInClick},a.a.createElement("i",{className:"google icon"}),"Sign In with Google")}},{key:"render",value:function(){return a.a.createElement("div",null,this.renderAuthButton())}}]),t}(r.Component),A=Object(o.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(C),D=function(){return a.a.createElement("div",{className:"ui secondary pointing menu"},a.a.createElement(m.a,{to:"/",className:"item"},"Streamy"),a.a.createElement("div",{className:"right menu"},a.a.createElement(m.a,{to:"/",className:"item"},"All Streams"),a.a.createElement(A,null)))},P=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){if(e.userId===this.props.currentUserId)return a.a.createElement("div",{className:"right floated content"},a.a.createElement(m.a,{to:"/streams/edit/".concat(e.id),className:"ui button primary"},"Edit"),a.a.createElement(m.a,{to:"/streams/delete/".concat(e.id),className:"ui button negative"},"Delete"))}},{key:"renderCreate",value:function(){if(this.props.isSignedIn)return a.a.createElement("div",{style:{textAlign:"right"}},a.a.createElement(m.a,{to:"/streams/new",className:"ui button primary"},"Create Stream"))}},{key:"renderList",value:function(){var e=this;return this.props.streams.map((function(t){return a.a.createElement("div",{className:"item",key:t.id},e.renderAdmin(t),a.a.createElement("i",{className:"large middle aligned icon camera"}),a.a.createElement("div",{className:"content"},a.a.createElement(m.a,{to:"/streams/".concat(t.id)},t.title),a.a.createElement("div",{className:"description"},t.description)))}))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Streams"),a.a.createElement("div",{className:"ui celled list"},this.renderList()),this.renderCreate())}}]),t}(r.Component),T=Object(o.b)((function(e){return{streams:Object.values(e.streams),currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}}),{fetchStreams:function(){return function(){var e=Object(E.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/streams");case 2:n=e.sent,t({type:"FETCH_STREAMS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(P),_=n(240),R=n(239),x=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).renderInput=function(e){var t=e.input,r=e.label,c=e.meta;return a.a.createElement("div",{className:"field"},a.a.createElement("label",null,r),a.a.createElement("input",Object.assign({},t,{autoComplete:"off"})),n.renderError(c))},n.onSubmit=function(e){n.props.onSubmit(e)},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return a.a.createElement("div",{className:"ui error message"},a.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return a.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit)},a.a.createElement(_.a,{component:this.renderInput,label:"Enter Title",name:"title"}),a.a.createElement(_.a,{component:this.renderInput,label:"Enter Description",name:"description"}),a.a.createElement("button",{className:"ui button primary"},"Submit"))}}]),t}(r.Component),M=Object(R.a)({form:"streamForm",validate:function(e){var t={};return e.title||(t.title="You must enter a title"),e.description||(t.description="You must enter a description"),t}})(x),U=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).onSubmit=function(e){n.props.createStream(e)},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h3",null,"Create a Stream"),a.a.createElement(M,{onSubmit:this.onSubmit}))}}]),t}(r.Component),L=Object(o.b)(null,{createStream:function(e){return function(){var t=Object(E.a)(y.a.mark((function t(n,r){var a,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,w.post("/streams",I({},e,{userId:a}));case 3:c=t.sent,n({type:"CREATE_STREAM",payload:c.data}),j.push("/");case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})(U),F=n(45),G=n.n(F),q=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).onSubmit=function(e){n.props.editStream(n.props.match.params.id,e)},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return console.log(this.props),this.props.stream?a.a.createElement("div",null,a.a.createElement("h3",null,"Edit a Stream"),a.a.createElement(M,{initialValues:G.a.pick(this.props.stream,"title","description"),onSubmit:this.onSubmit})):a.a.createElement("div",null,"Loading...")}}]),t}(a.a.Component),H=Object(o.b)((function(e,t){return console.log(t),{stream:e.streams[t.match.params.id]}}),{fetchStream:N,editStream:function(e,t){return function(){var n=Object(E.a)(y.a.mark((function n(r){var a;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.patch("/streams/".concat(e),t);case 2:a=n.sent,r({type:"EDIT_STREAM",payload:a.data}),j.push("/");case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(q),B=function(e){return i.a.createPortal(a.a.createElement("div",{onClick:e.onDismiss,className:"ui dimmer modals visible active"},a.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},a.a.createElement("div",{className:"header"},e.title),a.a.createElement("div",{className:"content"},e.content),a.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},J=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).renderActions=function(){var e=n.props.match.params.id;return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:function(){n.props.deleteStream(e)},className:"ui button negative"},"Delete"),a.a.createElement(m.a,{to:"/",className:"ui button"},"Cancel"))},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"renderContent",value:function(){return this.props.stream?"Are you sure you want to delete this stream with title: ".concat(this.props.stream.title," ?"):"Are you sure you want to delete this stream?"}},{key:"render",value:function(){return a.a.createElement("div",null,"StreamDelete",a.a.createElement(B,{title:"Delete Strem",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return j.push("/")}}))}}]),t}(r.Component),V=Object(o.b)((function(e,t){return{stream:e.streams[t.match.params.id]}}),{fetchStream:N,deleteStream:function(e){return function(){var t=Object(E.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.delete("/streams/".concat(e));case 2:n({type:"DELETE_STREAM",payload:e}),j.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(J),X=n(111),Y=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).videoRef=a.a.createRef(),n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id),this.buildPlayer()}},{key:"componentDidUpdate",value:function(){this.buildPlayer()}},{key:"componentWillUnmount",value:function(){this.player.destroy()}},{key:"buildPlayer",value:function(){if(!this.player&&this.props.stream){var e=this.props.match.params.id;this.player=X.a.createPlayer({type:"flv",url:"http://localhost:8000/live/".concat(e,".flv")}),this.player.attachMediaElement(this.videoRef.current),this.player.load()}}},{key:"render",value:function(){if(!this.props.stream)return a.a.createElement("div",null,"Loading...");var e=this.props.stream,t=e.title,n=e.description;return a.a.createElement("div",null,a.a.createElement("video",{ref:this.videoRef,style:{width:"100%"},controls:!0}),a.a.createElement("h1",null,t),a.a.createElement("h5",null,n))}}]),t}(r.Component),K=Object(o.b)((function(e,t){return{stream:e.streams[t.match.params.id]}}),{fetchStream:N})(Y),W=function(){return a.a.createElement("div",{className:"ui container"},a.a.createElement(l.b,{history:j},a.a.createElement("div",null,a.a.createElement(D,null),a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/",component:T}),a.a.createElement(l.a,{exact:!0,path:"/streams/new",component:L}),a.a.createElement(l.a,{exact:!0,path:"/streams/edit/:id",component:H}),a.a.createElement(l.a,{exact:!0,path:"/streams/delete/:id",component:V}),a.a.createElement(l.a,{exact:!0,path:"/streams/:id",component:K})))))},z=n(241);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $={isSignedIn:null,userId:null};function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Z({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Z({},e,{isSignedIn:!1,userId:null});default:return e}},form:z.a,streams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STREAMS":return te({},e,{},G.a.mapKeys(t.payload,"id"));case"FETCH_STREAM":case"CREATE_STREAM":case"EDIT_STREAM":return te({},e,Object(O.a)({},t.payload.id,t.payload));case"DELETE_STREAM":return G.a.omit(e,t.payload);default:return e}}}),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,ae=Object(s.e)(ne,re(Object(s.a)(u.a)));i.a.render(a.a.createElement(o.a,{store:ae},a.a.createElement(W,null)),document.querySelector("#root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.7f2f6952.chunk.js.map