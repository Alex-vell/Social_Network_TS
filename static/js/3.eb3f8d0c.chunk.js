(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{255:function(e,n,t){e.exports={pagination:"Pagination_pagination__38d0z",pageNumber:"Pagination_pageNumber__3yilo",selectPageActive:"Pagination_selectPageActive__x64BV"}},256:function(e,n,t){e.exports={userPhoto:"Users_userPhoto__1rpAC",selectPageActive:"Users_selectPageActive__1msBc",selectPage:"Users_selectPage__2Jnyx"}},258:function(e,n,t){"use strict";t.r(n),t.d(n,"UsersContainer",(function(){return z}));var s=t(5),o=t(6),r=t(11),i=t(12),c=t(17),a=t(111),l=t(0),u=t.n(l),g=t(14),p=t(255),j=t.n(p),d=t(1),h=function(e){for(var n=e.currentPage,t=e.totalItemsCount,s=e.pageSize,o=e.onPageChangedCallback,r=e.portionSize,i=void 0===r?25:r,c=[],a=Math.ceil(t/s),u=1;u<=a;u++)c.push(u);var p=Math.ceil(a/i),h=Object(l.useState)(1),b=Object(g.a)(h,2),f=b[0],P=b[1],O=(f-1)*i+1,v=f*i;return Object(d.jsxs)("div",{className:j.a.pagination,children:[f>1&&Object(d.jsxs)("button",{onClick:function(){P(f-1)},children:[" ","<"," "]}),c.filter((function(e){return e>=O&&e<=v})).map((function(e){return Object(d.jsx)("div",{className:n===e?"".concat(j.a.pageNumber," ").concat(j.a.selectPageActive):j.a.pageNumber,onClick:function(n){return o(e)},children:e},e)})),p>f&&Object(d.jsxs)("button",{onClick:function(){P(f+1)},children:[" ",">"," "]})]})},b=t(256),f=t.n(b),P=t(78),O=t(23),v=function(e){var n=e.user,t=e.followingInProgress,s=e.unFollow,o=e.follow;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:Object(d.jsxs)(O.b,{to:"./profile/"+n.id,children:[" ",Object(d.jsx)("img",{src:null!==n.photos.small?n.photos.small:P.a,className:f.a.userPhoto,alt:"User"})]})}),Object(d.jsx)("div",{children:n.followed?Object(d.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){s(n.id)},children:"Unfollow"}):Object(d.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){o(n.id)},children:"Follow"})})]}),Object(d.jsxs)("span",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:n.name}),Object(d.jsx)("div",{children:n.status})]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:"user.location.country"}),Object(d.jsx)("div",{children:"user.location.city"})]})]})]})},x=function(e){var n=e.totalUsersCount,t=e.pageSize,s=e.currentPage,o=e.onPageChangedCallback,r=e.users,i=e.followingInProgress,c=e.unFollow,a=e.follow;return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{currentPage:s,totalItemsCount:n,pageSize:t,onPageChangedCallback:o}),Object(d.jsx)("div",{children:r.users.map((function(e){return Object(d.jsx)(v,{follow:a,unFollow:c,user:e,followingInProgress:i},e.id)}))})]})},C=t(40),w=t(33),m=function(e){return e.usersPage},_=function(e){return e.usersPage.pageSize},U=function(e){return e.usersPage.totalUsersCount},k=function(e){return e.usersPage.currentPage},F=function(e){return e.usersPage.isFetching},y=function(e){return e.usersPage.followingInProgress},z=function(e){Object(r.a)(t,e);var n=Object(i.a)(t);function t(){var e;Object(s.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).onPageChanged=function(n){var t=e.props.pageSize;e.props.getUsers(n,t),e.props.setCurrentPage(n)},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,t=e.pageSize;this.props.getUsers(n,t)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[this.props.isFetching?Object(d.jsx)(C.a,{}):null,Object(d.jsx)(x,{follow:this.props.follow,unFollow:this.props.unFollow,users:this.props.users,currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChangedCallback:this.onPageChanged,followingInProgress:this.props.followingInProgress})]})}}]),t}(u.a.Component);n.default=Object(w.c)(Object(c.b)((function(e){return{users:m(e),pageSize:_(e),totalUsersCount:U(e),currentPage:k(e),isFetching:F(e),followingInProgress:y(e)}}),{follow:a.a,unFollow:a.e,setCurrentPage:a.c,toggleFollowingInProgress:a.d,getUsers:a.b}))(z)}}]);
//# sourceMappingURL=3.eb3f8d0c.chunk.js.map