(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(69),c=n.n(i),l=(n(77),n(13)),r=n(14),s=n(17),m=n(15),u=n(16),h=(n(78),n(11)),d=n(40);d.initializeApp({apiKey:"AIzaSyD_3l_vHaaKrmXoho9-49WICfH-OoZ77po",authDomain:"react-firebase-a93b8.firebaseapp.com",databaseURL:"https://react-firebase-a93b8.firebaseio.com",projectId:"react-firebase-a93b8",storageBucket:"",messagingSenderId:"535238636855"}),d.firestore().settings({timestampsInSnapshots:!0});var p=d,b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).onCollectionUpdate=function(e){var t=[];e.forEach(function(e){var n=e.data(),a=n.title,o=n.description,i=n.author;t.push({key:e.id,doc:e,title:a,description:o,author:i})}),n.setState({posts:t})},n.ref=p.firestore().collection("posts"),n.unsubcribe=null,n.state={posts:[]},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.unsubcribe=this.ref.onSnapshot(this.onCollectionUpdate)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"app-container"},o.a.createElement("div",{className:"panel panel-default"},o.a.createElement("div",{className:"panel-heading"},o.a.createElement("h3",{className:"panel-title"},"POST LIST")),o.a.createElement("div",null,o.a.createElement("h4",null,o.a.createElement(h.b,{to:"/create"},"Add Post")),o.a.createElement("table",{className:"table table-stripe"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Title"),o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Author"))),o.a.createElement("tbody",null,this.state.posts.map(function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,o.a.createElement(h.b,{to:"/show/".concat(e.key)},e.title)),o.a.createElement("td",null,e.description),o.a.createElement("td",null,e.author))})))))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=n(23),E=(n(140),n(4)),v=(n(141),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={key:"",title:"",description:"",author:""},n.onChange=n.onChange.bind(Object(E.a)(n)),n.onSubmit=n.onSubmit.bind(Object(E.a)(n)),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.firestore().collection("posts").doc(this.props.match.params.id).get().then(function(t){if(t.exists){var n=t.data();e.setState({key:t.id,title:n.title,description:n.description,author:n.author})}else console.log("No such document!")})}},{key:"onChange",value:function(e){var t=this.state;t[e.target.name]=e.target.value,this.setState({board:t})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state,a=n.title,o=n.description,i=n.author;p.firestore().collection("posts").doc(this.state.key).set({title:a,description:o,author:i}).then(function(e){t.setState({key:"",title:"",description:"",author:""}),t.props.history.push("/show/"+t.props.match.params.id)}).catch(function(e){console.error("Error adding document: ",e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"edit-container"},o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h3",null,"Edit Post")),o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"edit-input",name:"title",value:this.state.title,onChange:this.onChange,placeholder:"Title"}),o.a.createElement("input",{type:"text",name:"description",className:"edit-input",value:this.state.description,onChange:this.onChange,placeholder:"Description"}),o.a.createElement("input",{type:"text",name:"author",className:"edit-input",value:this.state.author,onChange:this.onChange,placeholder:"Author"}),o.a.createElement("br",null),o.a.createElement("button",{type:"submit",className:"edit-button"},"Submit"))))))}}]),t}(o.a.Component)),g=(n(142),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).ref=p.firestore().collection("posts"),e.state={title:"",description:"",author:""},e.onChange=e.onChange.bind(Object(E.a)(e)),e.onSubmit=e.onSubmit.bind(Object(E.a)(e)),e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"onChange",value:function(e){var t=this.state;t[e.target.name]=e.target.value,this.setState(t)}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state,a=n.title,o=n.description,i=n.author;this.ref.add({title:a,description:o,author:i}).then(function(e){t.setState({title:"",description:"",author:""})}).catch(function(e){console.log("Error ",e)})}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.description,a=e.author;return o.a.createElement("div",{className:"create-container"},o.a.createElement("div",null,o.a.createElement("h3",null,"ADD POST")),o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",name:"title",value:t,className:"create-input",onChange:this.onChange,placeholder:"Title"}),o.a.createElement("input",{type:"text",name:"description",value:n,className:"create-input",onChange:this.onChange,placeholder:"Description"}),o.a.createElement("input",{type:"text",name:"author",value:a,className:"create-input",onChange:this.onChange,placeholder:"Author"}),o.a.createElement("br",null),o.a.createElement("button",{type:"submit",className:"create-button"},"Submit"))))}}]),t}(o.a.Component)),y=(n(143),function(e){return o.a.createElement("div",{className:"comment"},e.comment)}),C=(n(144),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).ref=p.firestore().collection("comments"),n.state={post:{},key:"",comment:"",comments:[]},n.loadComments=n.loadComments.bind(Object(E.a)(n)),n.deleteComment=n.deleteComment.bind(Object(E.a)(n)),n.onChange=n.onChange.bind(Object(E.a)(n)),n.onSubmit=n.onSubmit.bind(Object(E.a)(n)),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"onChange",value:function(e){var t=this.state;t[e.target.name]=e.target.value,this.setState(t)}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state.comment;this.ref.add({comment:n}).then(function(e){t.setState({comment:""})}).catch(function(e){console.log("Error ",e)}),this.loadComments()}},{key:"loadComments",value:function(){var e=this,t=p.firestore().collection("comments"),n=[];t.get().then(function(t){t.docs.forEach(function(e){n.push(e.data())}),e.setState({comments:n})})}},{key:"componentDidMount",value:function(){var e=this;p.firestore().collection("posts").doc(this.props.match.params.id).get().then(function(t){t.exists?e.setState({post:t.data(),key:t.id,isLoading:!1}):console.log("Error, where is the doc dude?")}),this.loadComments()}},{key:"delete",value:function(e){var t=this;p.firestore().collection("posts").doc(e).delete().then(function(){console.log("Document deleted"),t.props.history.push("/")}).catch(function(e){console.error("Error: ",e)})}},{key:"deleteComment",value:function(e){p.firestore().collection("comments").doc(e).delete(),this.loadComments()}},{key:"render",value:function(){var e=this.state,t=e.comments,n=e.comment;return o.a.createElement("div",null,o.a.createElement("div",{className:"show-container"},o.a.createElement("div",null,o.a.createElement("h3",null,this.state.post.title)),o.a.createElement("div",null,o.a.createElement("dl",null,o.a.createElement("h4",null,"Description"),o.a.createElement("dd",null,this.state.post.description),o.a.createElement("h4",null,"Author"),o.a.createElement("dd",null,this.state.post.author)),o.a.createElement(h.b,{to:"/edit/".concat(this.state.key),className:"edit-button"},"Edit Post"),o.a.createElement("button",{onClick:this.delete.bind(this,this.state.key),className:"delete-button"},"Delete"))),o.a.createElement("div",{className:"comment-container"},o.a.createElement("h4",null,"Add a comment..."),o.a.createElement("input",{name:"comment",className:"comment-input",onChange:this.onChange,value:n,type:"text"}),o.a.createElement("button",{onClick:this.onSubmit,className:"comment-button"},"Add Comment")),o.a.createElement("div",null,o.a.createElement("div",null,t.map(function(e,t){return o.a.createElement(y,{key:t,comment:e.comment})}))))}}]),t}(o.a.Component)),k=(n(145),function(){return o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("i",{className:"fab fa-react fa-2x",style:{float:"left",padding:"10px",marginLeft:"5px",marginTop:"5px"}}," "),o.a.createElement("span",{style:{float:"left",padding:"10px",marginTop:"10px"}},"React-Firebase Admin"),o.a.createElement("li",null,o.a.createElement(h.b,{to:"/"},"Home"))))});c.a.render(o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(f.a,{path:"/",component:b}),o.a.createElement(f.a,{path:"/edit/:id",component:v}),o.a.createElement(f.a,{path:"/create",component:g}),o.a.createElement(f.a,{path:"/show/:id",component:C}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,n){e.exports=n(146)},77:function(e,t,n){},78:function(e,t,n){}},[[72,1,2]]]);
//# sourceMappingURL=main.6c36175a.chunk.js.map