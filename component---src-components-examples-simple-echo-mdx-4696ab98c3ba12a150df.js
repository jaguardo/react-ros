(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{DphZ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return u}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var o=n("/FXl"),a=n("TjRS"),r=n("ZFoC"),i=n("MYfA"),c=n("zydn");n("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/examples/SimpleEcho.mdx"}});var l={_frontmatter:p},b=a.a;function u(e){var t,n=e.components,u=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(b,s({},l,u,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"getting-started"},"Getting Started"),Object(o.b)("p",null,"Throughout these examples we will assume you've already gone through the process of installing ",Object(o.b)("a",s({parentName:"p"},{href:"http://wiki.ros.org/noetic/Installation/Ubuntu"}),"ROS")," or ",Object(o.b)("a",s({parentName:"p"},{href:"https://index.ros.org/doc/ros2/Installation/Foxy/"}),"ROS2")," and have a ",Object(o.b)("a",s({parentName:"p"},{href:"https://github.com/RobotWebTools/rosbridge_suite"}),"ROS websocket server")," running and available to connect with."),Object(o.b)("p",null,"The first step in connecting ROS with a website will always be establishing a connection. With ",Object(o.b)("inlineCode",{parentName:"p"},"react-ros"),", we make this easy by providing a very simple and easy-to-use context provider called ",Object(o.b)("inlineCode",{parentName:"p"},"useROS")," to get you started."),Object(o.b)("h2",{id:"connect-to-ros"},"Connect to ROS"),Object(o.b)("p",null,"Here is an example of how you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"useROS")," component and connect your website to your robot!  In this example we provide a ",Object(o.b)("inlineCode",{parentName:"p"},"ToggleConnect")," component that uses the ",Object(o.b)("inlineCode",{parentName:"p"},"useROS")," context provider to quickly and easily integrate ROS into any button or status indicator you could want to use."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"import React from 'react'\nimport { useROS } from 'react-ros'\n\nfunction ToggleConnect() {\n  const { isConnected, topics, url, toggleConnection } = useROS();\n\n  return (\n    <div>\n      <p><strong>ROS url:</strong> {url}</p>\n      <button onClick={ toggleConnection }>Toggle Connect</button>\n      <p><strong>Status of ROS:</strong> { isConnected ? \"connected\" : \"not connected\" }</p>\n      <p><strong>Topics detected:</strong></p>\n      { topics.map((topic, i) => <li key={i}>    {topic.path}</li> )}\n    </div>\n  );\n}\n\nexport default ToggleConnect;\n")),Object(o.b)("h3",{id:"toggleconnect-in-use"},"ToggleConnect in use"),Object(o.b)("p",null,"To use the simple ",Object(o.b)("inlineCode",{parentName:"p"},"ToggleConnect")," component we made above, wrap it in the provided ",Object(o.b)("inlineCode",{parentName:"p"},"ROS")," context provider component from ",Object(o.b)("inlineCode",{parentName:"p"},"react-ros")," and everything should just work. Go ahead and try it live below on your robot!"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," not shown in the code below is ",Object(o.b)("inlineCode",{parentName:"p"},"import { ROS } from 'react-ros'")," at the top of the file. This is needed in order to use the ",Object(o.b)("inlineCode",{parentName:"p"},"ROS")," context provider component."),Object(o.b)(r.c,{__position:0,__code:"<ROS>\n  <ToggleConnect />\n</ROS>",__scope:(t={props:u,DefaultLayout:a.a,Playground:r.c,ROS:i.a,ToggleConnect:c.a},t.DefaultLayout=a.a,t._frontmatter=p,t),mdxType:"Playground"},Object(o.b)(i.a,{mdxType:"ROS"},Object(o.b)(c.a,{mdxType:"ToggleConnect"}))),Object(o.b)("p",null,"Taking the toggle example even further - once connected, you should be able to subscribe to a topic and print out messages as they are received."))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/examples/SimpleEcho.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-examples-simple-echo-mdx-4696ab98c3ba12a150df.js.map