"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[653],{8653:function(e,n,s){s.r(n),s.d(n,{UsersContainer:function(){return B},default:function(){return K}});var r=s(5671),o=s(3144),t=s(136),a=s(7277),i=s(364),l=s(6342),u=s(2791),c=s(885),g="Pagination_pagination__y9ZYd",p="Pagination_pageNumber__AJ5t4",f="Pagination_selectPageActive__rPfS3",d="Pagination_arrow__J09Gv",h=s(9472),_=s(184),P=function(e){for(var n=e.currentPage,s=e.totalItemsCount,r=e.pageSize,o=e.onPageChangedCallback,t=e.portionSize,a=void 0===t?10:t,i=[],l=Math.ceil(s/r),P=1;P<=l;P++)i.push(P);var m=Math.ceil(l/a),C=(0,u.useState)(1),w=(0,c.Z)(C,2),j=w[0],v=w[1],x=(j-1)*a+1,U=j*a;return(0,_.jsxs)("div",{className:g,children:[j>1&&(0,_.jsx)("div",{onClick:function(){v(j-1)},children:(0,_.jsx)("img",{src:h.j.arrowLeft,alt:"previous",className:d})}),i.filter((function(e){return e>=x&&e<=U})).map((function(e){return(0,_.jsx)("span",{className:n===e?"".concat(p," ").concat(f):p,onClick:function(n){return o(e)},children:e},e)})),m>j&&(0,_.jsx)("div",{onClick:function(){v(j+1)},children:(0,_.jsx)("img",{src:h.j.arrowRight,alt:"previous",className:d})})]})},m="Users_usersContainer__AkofA",C="Users_user__kob7q",w="Users_content__CHcHC",j="Users_userPhoto__cvubS",v="Users_infoBlock__KKm+V",x="Users_userName__MUjct",U="Users_status__j9ezx",k="Users_button__HFaF-",N="Users_follow__XVTw3",b="Users_unfollow__O4dBY",F=s(5740),S=s(1523),z=function(e){var n=e.user,s=e.followingInProgress,r=e.unFollow,o=e.follow;return(0,_.jsxs)("div",{className:C,children:[(0,_.jsxs)("div",{className:w,children:[(0,_.jsx)("div",{children:(0,_.jsx)(S.OL,{to:"./profile/"+n.id,children:(0,_.jsx)("img",{src:null!==n.photos.small?n.photos.small:F,className:j,alt:"User"})})}),(0,_.jsxs)("div",{className:v,children:[(0,_.jsx)("span",{className:x,children:n.name}),(0,_.jsx)("span",{className:U,children:n.status})]})]}),(0,_.jsx)("div",{children:n.followed?(0,_.jsx)("button",{className:"".concat(k," ").concat(b),disabled:s.some((function(e){return e===n.id})),onClick:function(){r(n.id)},children:"Unfollow"}):(0,_.jsx)("button",{className:"".concat(k," ").concat(N),disabled:s.some((function(e){return e===n.id})),onClick:function(){o(n.id)},children:"Follow"})})]})},I=function(e){var n=e.totalUsersCount,s=e.pageSize,r=e.currentPage,o=e.onPageChangedCallback,t=e.users,a=e.followingInProgress,i=e.unFollow,l=e.follow;return(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)(P,{currentPage:r,totalItemsCount:n,pageSize:s,onPageChangedCallback:o}),(0,_.jsx)("div",{children:t.users.map((function(e){return(0,_.jsx)(z,{follow:l,unFollow:i,user:e,followingInProgress:a},e.id)}))}),(0,_.jsx)(P,{currentPage:r,totalItemsCount:n,pageSize:s,onPageChangedCallback:o})]})},y=s(7781),Z=function(e){return e.usersPage},A=function(e){return e.usersPage.pageSize},M=function(e){return e.usersPage.totalUsersCount},D=function(e){return e.usersPage.currentPage},H=function(e){return e.usersPage.isFetching},J=function(e){return e.usersPage.followingInProgress},q=s(4863),B=function(e){(0,t.Z)(s,e);var n=(0,a.Z)(s);function s(){var e;(0,r.Z)(this,s);for(var o=arguments.length,t=new Array(o),a=0;a<o;a++)t[a]=arguments[a];return(e=n.call.apply(n,[this].concat(t))).onPageChanged=function(n){var s=e.props.pageSize;e.props.getUsers(n,s),e.props.setCurrentPage(n)},e}return(0,o.Z)(s,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,s=e.pageSize;this.props.getUsers(n,s)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return(0,_.jsxs)(_.Fragment,{children:[this.props.isFetching?(0,_.jsx)(q.p,{}):null,(0,_.jsx)(I,{follow:this.props.follow,unFollow:this.props.unFollow,users:this.props.users,currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChangedCallback:this.onPageChanged,followingInProgress:this.props.followingInProgress})]})}}]),s}(u.Component),K=(0,y.qC)((0,i.$j)((function(e){return{users:Z(e),pageSize:A(e),totalUsersCount:M(e),currentPage:D(e),isFetching:H(e),followingInProgress:J(e)}}),{follow:l.ZN,unFollow:l.IJ,setCurrentPage:l.D4,toggleFollowingInProgress:l.n_,getUsers:l.D7}))(B)}}]);
//# sourceMappingURL=653.602b8eac.chunk.js.map