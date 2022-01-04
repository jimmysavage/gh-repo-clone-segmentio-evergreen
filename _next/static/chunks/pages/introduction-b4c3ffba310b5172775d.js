_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"/YsI":function(e,t,i){"use strict";var n=i("nKUr"),o=i("q1tI"),a=i("Ar1z"),g=i("fnxK"),r=i("eqHG"),s=i("tH8R"),l=i("PkHI"),h="undefined"!==typeof document?o.useLayoutEffect:o.useEffect,c=i("Bran");function p(e){return e===Object(e)&&0!==Object.keys(e).length}var d=function(e,t){var i=!e.ownerDocument.documentElement.contains(e);if(p(t)&&"function"===typeof t.behavior)return t.behavior(i?[]:Object(c.a)(e,t));if(!i){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:p(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var i="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,o=e.top,a=e.left;n.scroll&&i?n.scroll({top:o,left:a,behavior:t}):(n.scrollTop=o,n.scrollLeft=a)}))}(Object(c.a)(e,n),n.behavior)}},m=i("YFqc"),u=i.n(m);t.a=function(e){var t=e.title,i=e.items,o=e.selectedItem,c=e.routePrefix;return h((function(){var e=document.querySelector('[aria-selected="true"]');e&&d(e,{scrollMode:"if-needed"})}),[o]),Object(n.jsxs)(a.a,{display:"flex",position:"sticky",top:64,flexDirection:"column",overflowY:"auto",maxHeight:"calc(100vh - 64px)",paddingY:Object(g.a)(5),paddingX:Object(g.a)(3),children:[Object(n.jsx)(r.a,{size:200,textTransform:"uppercase",marginBottom:Object(g.a)(2),marginLeft:Object(g.a)(2),children:t}),Object(n.jsx)(s.a,{children:i.map((function(e){return Object(n.jsx)(u.a,{href:"/".concat(c,"/").concat(e.id),passHref:!0,children:Object(n.jsx)(l.a,{is:"a",alignItems:"flex-start",direction:"vertical",isSelected:!!o&&e.id===o.id,children:e.name})},e.id)}))})]})}},"/p2D":function(e,t,i){"use strict";i.r(t);var n=i("nKUr"),o=(i("q1tI"),i("Ar1z")),a=i("fnxK"),g=i("ViT+"),r=i("dhfL"),s=i("/YsI"),l=i("4xSs");t.default=function(){return Object(n.jsx)(g.a,{title:"Introduction",children:Object(n.jsxs)(o.a,{width:"100%",display:"grid",gridTemplateColumns:"236px 1fr",children:[Object(n.jsx)(s.a,{title:"Introduction",items:l.a.introduction.items,routePrefix:"introduction"}),Object(n.jsxs)(o.a,{width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",padding:Object(a.a)(5),maxWidth:Object(a.a)(143),children:[Object(n.jsx)(r.a,{title:"Introduction",description:l.a.introduction.description}),Object(n.jsx)(o.a,{width:"100%",display:"grid",gridColumnGap:"24px",gridRowGap:"32px"})]})]})})}},"4xSs":function(e,t,i){"use strict";var n=function(e){return"https://github.com/segmentio/evergreen/tree/master/src/".concat(e)},o={introduction:{title:"Introduction",description:"Evergreen is a pragmatic UI kit for building evolving products on the web.It is built and maintained open-source by Segment.",items:[{id:"getting-started",name:"Getting started",description:"About Evergreen, and getting set up with the package locally."},{id:"v6-migration-guide",name:"Migrating from v5 to v6",description:"Guide about migrating from previous version of Evergreen into the current one."},{id:"theming",name:"Theming",description:"A primer into the (new!) theming architecture behind Evergreen."},{id:"what-is-new",name:"What is new",description:"Evergreen is a living system, which means we are constently making updates to it. You can learn more about those changes and upcoming ones here."}]},foundations:{title:"Foundations",description:"Styles and primitive components. Start here.",items:[{id:"typography",github:n("typography"),name:"Typography",tags:["heading","paragraph","text","link","list","ordered list","unordered list","strong","small"],image:"/Typography.png",imageHighlight:"/Typography-highlight.png"},{id:"colors",github:n("theme/src/default-theme"),name:"Colors",tags:["color"],image:"/Colors.png",imageHighlight:"/Colors-highlight.png"},{id:"icons",github:n("icon"),name:"Icons",tags:["icon"],image:"/Icons.png",imageHighlight:"/Icons-highlight.png",related:["button"]},{id:"layers",github:n("layers"),name:"Layout Primitives",tags:["pane","card","box","layout"],image:"/Layout.png",imageHighlight:"/Layout-highlight.png"}]},components:{title:"Components",description:"Components are the reusable building blocks of our design system. Each component meets a specific interaction or UI need, and has been specifically created to work together to create patterns and intuitive user experiences.",items:[{id:"buttons",github:n("buttons"),name:"Button",description:"A Button triggers an action or an event.",image:"/Button.png",imageHighlight:"/Button-highlight.png",tags:["icon button","button","action"]},{id:"badges",github:n("badges"),name:"Badge & Pill",description:"The Badge and Pill components are labels with a background color.",image:"/Badge & Pill.png",imageHighlight:"/Badge & Pill-highlight.png",tags:["badge","pills","tag"],related:["tag-input"]},{id:"alert",github:n("alert"),image:"/Alert.png",imageHighlight:"/Alert-highlight.png",name:"Alert",description:"The Alert component is used to show feedback to the user about an action or state.",tags:["banners","notification","messages","inline alert"]},{id:"avatar",github:n("avatar"),name:"Avatar",description:"The Avatar component is used to represent users. And should only be used for users.",image:"/Avatar.png",imageHighlight:"/Avatar-highlight.png",tags:["avatar","image","user"]},{id:"tabs",github:n("tabs"),name:"Tab",description:"Use Tabs to organize your content in logical groupings.",image:"/Tab.png",imageHighlight:"/Tab-highlight.png",tags:["tab","tab list","tab navigation","navigation"]},{id:"text-input",github:n("text-input"),image:"/Text Input.png",imageHighlight:"/Text Input-highlight.png",name:"Text Input",description:"The Text Input component allows user to type in text."},{id:"search-input",github:n("search-input"),name:"Search Input",image:"/Search Input.png",imageHighlight:"/Search Input-highlight.png",description:"The Search Input component allows user to search via typing in text."},{id:"tag-input",github:n("tag-input"),image:"/Tag Input.png",imageHighlight:"/Tag Input-highlight.png",name:"Tag Input",description:"The Tag Input component allow user to type in multiple values as tags.",tags:["badge","pills","tag"],related:["badge-and-pill"]},{id:"textarea",github:n("textarea"),image:"/Textarea.png",imageHighlight:"/Textarea-highlight.png",name:"Textarea",description:"The Text Area component allow user to type in longer content."},{id:"autocomplete",github:n("autocomplete"),image:"/Autocomplete.png",imageHighlight:"/Autocomplete-highlight.png",name:"Autocomplete",description:"The Autocomplete component allow user to type and select from a list of options."},{id:"file-picker",github:n("file-picker"),image:"/Filepicker.png",imageHighlight:"/Filepicker-highlight.png",name:"Filepicker",description:"The Filepicker component is used to select one or multiple files from the file system."},{id:"select",name:"Select",description:"The Select component allow user to click and select from a list of options.",image:"/Select.png",imageHighlight:"/Select-highlight.png",github:n("select")},{id:"combobox",github:n("combobox"),name:"Combobox",description:"The Combobox component is used for selecting an option from a predefined list of options.",image:"/Combobox.png",imageHighlight:"/Combobox-highlight.png",tags:["dropdown","menu"]},{id:"select-menu",github:n("select-menu"),name:"Select Menu",description:"The Select Menu component allows selection of multiple items from a dropdown list.",image:"/Select Menu.png",imageHighlight:"/Select Menu-highlight.png",tags:["dropdown","menu"]},{id:"popover",github:n("popover"),image:"/Popover.png",imageHighlight:"/Popover-highlight.png",name:"Popover",description:"The Popover component shows floating content in relation to a target.",tags:["dropdown"]},{id:"menu",github:n("menu"),image:"/Menu.png",imageHighlight:"/Menu-highlight.png",name:"Menu",description:"The Menu component shows a list of actions that user can take.",tags:["dropdown"]},{id:"checkbox",github:n("checkbox"),image:"/Checkbox.png",imageHighlight:"/Checkbox-highlight.png",name:"Checkbox",description:"The Checkbox component allows user to select multiple items from a list."},{id:"radio",image:"/Radio.png",imageHighlight:"/Radio-highlight.png",github:n("radio"),name:"Radio",description:"The Radio component allows user to select a single item from a list."},{id:"pagination",image:"/Pagination.png",imageHighlight:"/Pagination-highlight.png",github:n("pagination"),name:"Pagination",description:"The Pagination component is used to split up content into several pages and navigate between pages."},{id:"pulsar",image:"/Pulsar.png",imageHighlight:"/Pulsar-highlight.png",github:n("pulsar"),name:"Pulsar",description:"The Pulsar component is a user education UI used to indicate to a user where they should take a particular action."},{id:"segmented-control",github:n("segmented-control"),image:"/Segmented Control.png",imageHighlight:"/Segmented Control-highlight.png",name:"Segmented Control",tags:["button group"],description:"The Segmented Control is a component that lets users toggle between up-to-4 options in a row. "},{id:"switch",image:"/Switch.png",imageHighlight:"/Switch-highlight.png",github:n("switch"),name:"Switch",description:"The Switch component is used to switch between two options and the result of the change is immediate."},{id:"toaster",github:n("toaster"),image:"/Toaster.png",imageHighlight:"/Toaster-highlight.png",name:"Toaster",description:"The Toaster component is used to show an ephemeral message as an overlay.",tags:["notifications","messages"]},{id:"status-indicator",github:n("status-indicator"),image:"/Status Indicator.png",imageHighlight:"/Status Indicator-highlight.png",name:"Status Indicator",description:"The Status indicator is used to indicate the status of an item.",tags:["status","indicator","inline"]},{id:"spinner",github:n("spinner"),image:"/Spinner.png",imageHighlight:"/Spinner-highlight.png",name:"Spinner",description:"The Spinner component is used to indicate a loading state.",tags:["loading","indicator"]},{id:"dialog",github:n("dialog"),image:"/Dialog.png",imageHighlight:"/Dialog-highlight.png",name:"Dialog",description:"The Dialog component is used to show content on top of an overlay that requires user interaction.",tags:["modal"]},{id:"side-sheet",github:n("side-sheet"),image:"/Side Sheet.png",imageHighlight:"/Side Sheet-highlight.png",name:"Side Sheet",description:"The Sidesheet component is used to show more details about an object.",tags:["drawer","sheet"]},{id:"tooltip",image:"/Tooltip.png",imageHighlight:"/Tooltip-highlight.png",github:n("tooltip"),name:"Tooltip",description:"The Tooltip component is used to show more content of a target."},{id:"corner-dialog",image:"/Corner Dialog.png",imageHighlight:"/Corner Dialog-highlight.png",github:n("corner-dialog"),name:"Corner Dialog",description:"The CornerDialog component is used for announcements such as new features and feedback requests.",tags:["notification","message"]},{id:"table",github:n("table"),name:"Table",description:"The Table component is used to show all information from a data set.",image:"/Table.png",imageHighlight:"/Table-highlight.png",tags:["list","row","cell","TH","TR","THEAD","TBODY","table body"]},{id:"portal",github:n("portal"),image:"/Portal.png",imageHighlight:"/Portal-highlight.png",name:"Portal"},{id:"positioner",image:"/Positioner.png",imageHighlight:"/Positioner-highlight.png",github:n("positioner"),name:"Positioner"},{id:"form-field",image:"/Form Field.png",imageHighlight:"/Form Field-highlight.png",github:n("form-field"),name:"Form Field",tags:["validation message","label"]},{id:"overlay",image:"/Overlay.png",imageHighlight:"/Overlay-highlight.png",github:n("overlay"),name:"Overlay"}]},patterns:{title:"Patterns",description:"Patterns are reusable combinations of components that solve common user problems. These best practice solutions help users achieve their goals and help ensure consistency across experiences.",items:[{id:"empty-states",name:"Empty States",description:"Empty states occur when there is no available data to display.",image:"/Empty State.png",imageHighlight:"/Empty State-highlight.png"},{id:"table-layout",name:"Table Layout",description:"Coming soon!",image:"/Table Layout.png",inProgress:!0,imageHighlight:"/Table Layout-highlight.png"},{id:"error-messages",name:"Error Messages",description:"Coming soon!",image:"/Error Messages.png",inProgress:!0,imageHighlight:"/Error Messages-highlight.png"}]}};t.a=o},Bran:function(e,t,i){"use strict";function n(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function o(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function a(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var i=getComputedStyle(e,null);return o(i.overflowY,t)||o(i.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function g(e,t,i,n,o,a,g,r){return a<e&&g>t||a>e&&g<t?0:a<=e&&r<=i||g>=t&&r>=i?a-e-n:g>t&&r<i||a<e&&r>i?g-t+o:0}t.a=function(e,t){var i=window,o=t.scrollMode,r=t.block,s=t.inline,l=t.boundary,h=t.skipOverflowHiddenElements,c="function"==typeof l?l:function(e){return e!==l};if(!n(e))throw new TypeError("Invalid target");for(var p=document.scrollingElement||document.documentElement,d=[],m=e;n(m)&&c(m);){if((m=m.parentElement)===p){d.push(m);break}null!=m&&m===document.body&&a(m)&&!a(document.documentElement)||null!=m&&a(m,h)&&d.push(m)}for(var u=i.visualViewport?i.visualViewport.width:innerWidth,b=i.visualViewport?i.visualViewport.height:innerHeight,f=window.scrollX||pageXOffset,w=window.scrollY||pageYOffset,v=e.getBoundingClientRect(),T=v.height,y=v.width,x=v.top,H=v.right,S=v.bottom,I=v.left,j="start"===r||"nearest"===r?x:"end"===r?S:x+T/2,k="center"===s?I+y/2:"end"===s?H:I,P=[],C=0;C<d.length;C++){var E=d[C],O=E.getBoundingClientRect(),A=O.height,M=O.width,D=O.top,B=O.right,W=O.bottom,F=O.left;if("if-needed"===o&&x>=0&&I>=0&&S<=b&&H<=u&&x>=D&&S<=W&&I>=F&&H<=B)return P;var L=getComputedStyle(E),_=parseInt(L.borderLeftWidth,10),R=parseInt(L.borderTopWidth,10),Y=parseInt(L.borderRightWidth,10),q=parseInt(L.borderBottomWidth,10),V=0,U=0,X="offsetWidth"in E?E.offsetWidth-E.clientWidth-_-Y:0,G="offsetHeight"in E?E.offsetHeight-E.clientHeight-R-q:0;if(p===E)V="start"===r?j:"end"===r?j-b:"nearest"===r?g(w,w+b,b,R,q,w+j,w+j+T,T):j-b/2,U="start"===s?k:"center"===s?k-u/2:"end"===s?k-u:g(f,f+u,u,_,Y,f+k,f+k+y,y),V=Math.max(0,V+w),U=Math.max(0,U+f);else{V="start"===r?j-D-R:"end"===r?j-W+q+G:"nearest"===r?g(D,W,A,R,q+G,j,j+T,T):j-(D+A/2)+G/2,U="start"===s?k-F-_:"center"===s?k-(F+M/2)+X/2:"end"===s?k-B+Y+X:g(F,B,M,_,Y+X,k,k+y,y);var N=E.scrollLeft,z=E.scrollTop;j+=z-(V=Math.max(0,Math.min(z+V,E.scrollHeight-A+G))),k+=N-(U=Math.max(0,Math.min(N+U,E.scrollWidth-M+X)))}P.push({el:E,top:V,left:U})}return P}},nTSh:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/introduction",function(){return i("/p2D")}])}},[["nTSh",0,2,1,3,4]]]);