webpackJsonp([0x67ef26645b2a,60335399758886],{217:function(e,t){e.exports={layoutContext:{}}},530:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),c=n(181),l=r(c),u=n(217),f=r(u);t.default=function(e){return i.default.createElement(l.default,o({},e,f.default))},e.exports=t.default},260:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=r(f),p=n(261),d=r(p),m="____GITHUB_CORNER_SUPER_SECRET___",h=(0,d.default)(),b=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),u(t,[{key:"componentDidMount",value:function(){if(!document.getElementById(m)){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.id=m,t.styleSheet?t.styleSheet.cssText=h:t.appendChild(document.createTextNode(h)),e.appendChild(t)}}},{key:"render",value:function(){var e=this.props,t=e.href,n=e.size,r=e.direction,a=e.octoColor,i=e.bannerColor,c=e.ariaLabel,u=e.className,f=e.svgStyle,p=o(e,["href","size","direction","octoColor","bannerColor","ariaLabel","className","svgStyle"]),d={position:"absolute",top:0,fill:a},m={},h="",b="",y="";"left"===r?(h="M250 0L135 115h-15l-12 27L0 250V0z",b="M122 109c15-9 9-19 9-19-3-7-2-11-2-11 1-7-3-2-3-2-4 5-2 11-2 11 3 10-5 15-9 16",y="M135 115s-4 2-5 0l-14-14c-3-2-6-3-8-3 8-11 15-24-2-41-5-5-10-7-16-7-1-2-3-7-12-11 0 0-5 3-7 16-4 2-8 5-12 9s-7 8-9 12c-14 4-17 9-17 9 4 8 9 11 11 11 0 6 2 11 7 16 16 16 30 10 41 2 0 3 1 7 5 11l12 11c1 2-1 6-1 6z",d.left=0,m.WebkitTransformOrigin="120px 144px",m.transformOrigin="120px 144px"):(h="M0 0l115 115h15l12 27 108 108V0z",b="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16",y="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z",d.right=0,m.WebkitTransformOrigin="130px 106px",m.transformOrigin="130px 106px");var v="string"==typeof u?" "+u:"";return s.default.createElement("a",l({},p,{href:t,className:"github-corner"+v,"aria-label":c}),s.default.createElement("svg",{width:n,height:n,viewBox:"0 0 250 250",style:l({},d,f)},s.default.createElement("path",{className:"octo-banner",d:h,fill:i}),s.default.createElement("path",{className:"octo-arm",d:b,style:m}),s.default.createElement("path",{className:"octo-body",d:y})))}}]),t}(f.Component);b.defaultProps={href:"/",size:80,direction:"right",octoColor:"#fff",bannerColor:"#151513",ariaLabel:"Open GitHub project"},t.default=b},261:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return"\n.github-corner:hover .octo-arm {\n  animation: octocat-wave 560ms ease-in-out;\n}\n\n@keyframes octocat-wave {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n\n  20%, 60% {\n    transform: rotate(-25deg);\n  }\n\n  40%, 80% {\n    transform: rotate(10deg);\n  }\n}\n\n@media (max-width: 500px) {\n    .github-corner:hover .octo-arm {\n        animation: none;\n    }\n\n    .github-corner .octo-arm {\n        animation: octocat-wave 560ms ease-in-out;\n    }\n}\n"}},181:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(1),l=r(c),u=n(45),f=(r(u),n(74)),s=n(260),p=r(s);n(213);var d=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));r.handleItemClick=function(e,t){var n=t.name;r.setState({activeItem:n}),(0,u.navigateTo)(n)};var i=n.location;return r.state={activeItem:(0,u.withPrefix)(i.pathname)},r}return i(t,e),t.prototype.render=function(){var e=this.props.children,t=this.state.activeItem;return l.default.createElement("div",null,l.default.createElement(p.default,{href:"https://github.com/moscow-freecodecamp/website"}),l.default.createElement(f.Container,{text:!0},l.default.createElement(f.Menu,{pointing:!0,secondary:!0},l.default.createElement(f.Menu.Item,{name:"/",active:"/"===t,onClick:this.handleItemClick},"Главная"),l.default.createElement(f.Menu.Item,{name:"/about",active:"/about"===t,onClick:this.handleItemClick},"О нас"),l.default.createElement(f.Menu.Item,{name:"/meetup",active:"/meetup"===t,onClick:this.handleItemClick},"Митапы")),e(),l.default.createElement(f.Segment,{basic:!0,textAlign:"center"},"Made with ♥ using ",l.default.createElement("a",{href:"https://semantic-ui.com/"},"Semantic-UI")," ","&"," ",l.default.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby"))))},t}(l.default.Component);t.default=d,e.exports=t.default},213:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-c6d6a5a4859c3208c523.js.map