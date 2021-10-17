(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{42:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),c=a.n(s),o=(a(42),a(3)),i=a(4),u=a(6),l=a(5),h=a(17),p=a(19),m=a(18),d=a.n(m),j=a(35),b=a(36),g=a.n(b),f=function(){function e(){Object(o.a)(this,e),this.api_key="23050146-8315646a187241c7ace27efa4",this._searchQuery="",this._page=1}return Object(i.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"page",get:function(){return this._page},set:function(e){return this._page+=e}},{key:"resetPage",value:function(){return this._page=1}},{key:"search",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(this.searchQuery,"&page=").concat(this._page,"&per_page=15&key=").concat(this.api_key,"\n"),e.prev=1,e.next=4,g.a.get(t);case 4:return a=e.sent,n=a.data,e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),y=a(1),O=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.item,a=t.webformatURL,n=t.largeImageURL,r=t.tags;return Object(y.jsx)("li",{className:"ImageGalleryItem",children:Object(y.jsx)("img",{src:a,alt:r,onClick:function(){return e.props.handleImageClick(n)},className:"ImageGalleryItem-image"})})}}]),a}(n.PureComponent),v=document.querySelector("#modal-root"),k=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleOverlayclick=function(t){t.target===t.currentTarget&&e.props.onModalClose()},e.handleEscKey=function(t){"Escape"===t.code&&e.props.onModalClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscKey)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscKey)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(s.createPortal)(Object(y.jsx)("div",{className:"Overlay",onClick:this.handleOverlayclick,children:Object(y.jsx)("div",{className:"Modal",children:Object(y.jsx)("img",{src:e,alt:""})})}),v)}}]),a}(n.Component),x=a(37),S=function(){return Object(y.jsx)(x.a,{viewBox:"0 0 640 390",children:Object(y.jsx)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"640",height:"390"})})},C=a(38),w=new f,I=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searchResults:[],serchHits:null,status:"init",largeURL:"",errorMessage:""},e.handleImageClick=function(t){e.setState({largeURL:t,status:"modal"})},e.onModalClose=function(){e.setState({status:"success"})},e.handleClick=function(t){w.page=1,w.search().then((function(t){e.setState((function(e){return{searchResults:[].concat(Object(p.a)(e.searchResults),Object(p.a)(t.hits)),status:"success"}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){e.setState({status:"error",errorMessage:t})}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e!==this.props&&(this.setState({status:"pending"}),w.resetPage(),w.searchQuery=this.props.searchQuery,w.search().then((function(e){e.hits.length>0?a.setState({searchResults:e.hits,serchHits:e.total,status:"success"}):a.setState({status:"error",errorMessage:"Nothing found!"})})))}},{key:"render",value:function(){var e=this,t=this.state,a=t.status,n=t.searchResults,r=t.serchHits,s=t.largeURL,c=t.errorMessage;return"init"===a?Object(y.jsx)("h1",{className:"title",children:"Hello! Search something"}):"pending"===a?Object(y.jsx)("ul",{className:"ImageGallery",children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((function(e){return Object(y.jsx)(S,{},e)}))}):"success"===a?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("ul",{className:"ImageGallery",children:n.map((function(t){return Object(y.jsx)(O,{item:t,handleImageClick:e.handleImageClick},t.id)}))}),r>15&&Object(y.jsx)("button",{className:"Button",type:"button",id:"more",onClick:this.handleClick,children:"load more"})]}):"modal"===a?Object(y.jsx)(k,{largeImageURL:s,onModalClose:this.onModalClose}):"error"===a?Object(y.jsx)(C.Notification,{type:"Error",title:"Error",text:c}):void 0}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searchInput:" "},e.handlerChange=function(t){e.setState({searchInput:t.target.value})},e.onSubmit=function(t){t.preventDefault(),""!==e.state.searchInput.trim()?(e.props.onSubmit(e.state.searchInput),e.setState({searchInput:""})):alert("Input something!")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(y.jsx)("header",{className:"Searchbar",children:Object(y.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmit,children:[Object(y.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(y.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(y.jsx)("input",{className:"SearchForm-input",value:this.state.searchInput,type:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handlerChange})]})})}}]),a}(n.Component),M=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searchQue:" "},e.onFormSubmit=function(t){e.setState({searchQue:t})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(N,{onSubmit:this.onFormSubmit}),Object(y.jsx)(I,{searchQuery:this.state.searchQue})]})}}]),a}(h.Component),R=M;a(96);c.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(R,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.222aa248.chunk.js.map