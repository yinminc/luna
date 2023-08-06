"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[804],{2804:(e,t,o)=>{o.r(t),o.d(t,{default:()=>ne});var n=o(311);const l={class:"form-group mb-3"},a=(0,n.createElementVNode)("label",{for:"input-addon-edit-text"},"Button Text",-1),r={class:"form-group mb-3"},d=(0,n.createElementVNode)("label",{for:"input-addon-edit-align"},"Align",-1),i={class:"form-group mb-3"},c=(0,n.createElementVNode)("label",{for:"input-addon-edit-link"},"Link",-1),s={key:0,class:"form-group mb-3"},m=(0,n.createElementVNode)("label",{for:"input-addon-edit-link-target"},"Open in New Window",-1),p={class:"form-group mb-3"},V=(0,n.createElementVNode)("label",{for:"input-addon-edit-style"},"Style",-1),N=["list"],b=["id"],x=(0,n.createElementVNode)("option",{value:"btn-primary"},"btn-primary",-1),v=(0,n.createElementVNode)("option",{value:"btn-outline-primary"},"btn-outline-primary",-1),E=(0,n.createElementVNode)("option",{value:"btn-secondary"},"btn-secondary",-1),f=(0,n.createElementVNode)("option",{value:"btn-outline-secondary"},"btn-outline-secondary",-1),T=(0,n.createElementVNode)("option",{value:"btn-success"},"btn-success",-1),g=(0,n.createElementVNode)("option",{value:"btn-outline-success"},"btn-outline-success",-1),k=(0,n.createElementVNode)("option",{value:"btn-info"},"btn-info",-1),y=(0,n.createElementVNode)("option",{value:"btn-outline-info"},"btn-outline-info",-1),h=(0,n.createElementVNode)("option",{value:"btn-warning"},"btn-warning",-1),w=(0,n.createElementVNode)("option",{value:"btn-outline-warning"},"btn-outline-warning",-1),_=(0,n.createElementVNode)("option",{value:"btn-danger"},"btn-danger",-1),U=(0,n.createElementVNode)("option",{value:"btn-outline-danger"},"btn-outline-danger",-1),B=(0,n.createElementVNode)("option",{value:"btn-dark"},"btn-dark",-1),C=(0,n.createElementVNode)("option",{value:"btn-outline-dark"},"btn-outline-dark",-1),S=(0,n.createElementVNode)("option",{value:"btn-light"},"btn-light",-1),z=(0,n.createElementVNode)("option",{value:"btn-outline-light"},"btn-outline-light",-1),D=(0,n.createElementVNode)("option",{value:"btn-link"},"btn-link",-1),R=(0,n.createElementVNode)("small",{class:"form-text text-muted"},[(0,n.createTextVNode)("\r\n        Use "),(0,n.createElementVNode)("a",{href:"https://getbootstrap.com/docs/5.1/components/buttons/",target:"_blank"},"Bootstrap button style"),(0,n.createTextVNode)("\r\n        , if you need a custom style, just enter your button class names.\r\n      ")],-1),Z={class:"form-group mb-3"},M=(0,n.createElementVNode)("label",{for:"input-addon-edit-size"},"Size",-1),I=(0,n.createElementVNode)("option",{value:""},"Default",-1),L=(0,n.createElementVNode)("option",{value:"btn-sm"},"btn-sm (Small)",-1),j=(0,n.createElementVNode)("option",{value:"btn-lg"},"btn-lg (Large)",-1),A=(0,n.createElementVNode)("small",{class:"form-text text-muted"},[(0,n.createTextVNode)("\r\n        Use "),(0,n.createElementVNode)("a",{href:"https://getbootstrap.com/docs/4.5/components/buttons/",target:"_blank"},"Bootstrap button style"),(0,n.createTextVNode)("\r\n        , if you need a custom style, just enter your button class names.\r\n      ")],-1),F={class:"form-group mb-3"},W=(0,n.createElementVNode)("label",null,"\r\n        Border Radius\r\n      ",-1),$={class:"form-group mb-3"},O=(0,n.createElementVNode)("label",{for:"input-addon-edit-block"},"Full-Width",-1),P={class:"form-group mb-3"},Y=(0,n.createElementVNode)("label",{for:"input-addon-edit-icon"},"Icon Class Name",-1),q={class:"input-group mb-3"},G={class:"input-group-text"},H=(0,n.createElementVNode)("small",{class:"form-text text-muted"},[(0,n.createTextVNode)("\r\n        Enter icon class, example: "),(0,n.createElementVNode)("code",null,"fa fa-star"),(0,n.createTextVNode)(".\r\n        You can find icons from: "),(0,n.createElementVNode)("a",{target:"_blank",href:"https://fontawesome.com/v6.0/icons"},"FontAwsome")],-1),J={class:"form-group mb-3"},K=(0,n.createElementVNode)("label",{for:"input-addon-edit-icon_position"},"Icon Position",-1);var Q=o(4928),X=o(8575),ee=o(8045),te=o(2120);const oe={name:"addon-button",components:{SliderInput:X.Z,ButtonRadio:Q.Z,UnicornSwitcher:te.Z},props:{...ee.Z.props},setup(e,t){const o=(0,ee.Z)(e,t,{uid:u.uid(),options:{text:"",link:"",link_target:"",style:"btn-primary",border_radius:"",size:"",block:!1,icon:"",icon_position:"left"}});return{...(0,n.toRefs)(o)}}},ne=(0,o(3744).Z)(oe,[["render",function(e,t,o,u,Q,X){const ee=(0,n.resolveComponent)("ButtonRadio"),te=(0,n.resolveComponent)("UnicornSwitcher"),oe=(0,n.resolveComponent)("SliderInput");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("div",l,[a,(0,n.createTextVNode)(),(0,n.withDirectives)((0,n.createElementVNode)("input",{id:"input-addon-edit-text",type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.options.text=t),class:"form-control"},null,512),[[n.vModelText,e.options.text]])]),(0,n.createTextVNode)(),(0,n.createElementVNode)("div",r,[d,(0,n.createTextVNode)(),(0,n.createVNode)(ee,{color:"primary",variant:"outline",class:"w-100",modelValue:e.options.align,"onUpdate:modelValue":t[1]||(t[1]=t=>e.options.align=t),options:[{text:"Default",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},null,8,["modelValue"])]),(0,n.createTextVNode)(),(0,n.createElementVNode)("div",i,[c,(0,n.createTextVNode)(),(0,n.withDirectives)((0,n.createElementVNode)("input",{id:"input-addon-edit-link",type:"url","onUpdate:modelValue":t[2]||(t[2]=t=>e.options.link=t),class:"form-control"},null,512),[[n.vModelText,e.options.link]])]),(0,n.createTextVNode)(),""!==e.options.link?((0,n.openBlock)(),(0,n.createElementBlock)("div",s,[m,(0,n.createTextVNode)(),(0,n.createElementVNode)("div",null,[(0,n.createVNode)(te,{name:"addon-edit-link-target",modelValue:e.options.link_target,"onUpdate:modelValue":t[3]||(t[3]=t=>e.options.link_target=t),id:"input-addon-edit-link-target",shape:"circle",color:"success","true-value":"_blank","false-value":""},null,8,["modelValue"])])])):(0,n.createCommentVNode)("",!0),(0,n.createTextVNode)(),(0,n.createElementVNode)("div",p,[V,(0,n.createTextVNode)(),(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"search",id:"input-addon-edit-style","onUpdate:modelValue":t[4]||(t[4]=t=>e.options.style=t),class:"form-control",list:`input-edit-style__list-${e.uid}`},null,8,N),[[n.vModelText,e.options.style]]),(0,n.createTextVNode)(),(0,n.createElementVNode)("datalist",{id:`input-edit-style__list-${e.uid}`},[x,(0,n.createTextVNode)(),v,(0,n.createTextVNode)(),E,(0,n.createTextVNode)(),f,(0,n.createTextVNode)(),T,(0,n.createTextVNode)(),g,(0,n.createTextVNode)(),k,(0,n.createTextVNode)(),y,(0,n.createTextVNode)(),h,(0,n.createTextVNode)(),w,(0,n.createTextVNode)(),_,(0,n.createTextVNode)(),U,(0,n.createTextVNode)(),B,(0,n.createTextVNode)(),C,(0,n.createTextVNode)(),S,(0,n.createTextVNode)(),z,(0,n.createTextVNode)(),D],8,b),(0,n.createTextVNode)(),R]),(0,n.createTextVNode)(),(0,n.createElementVNode)("div",Z,[M,(0,n.createTextVNode)(),(0,n.withDirectives)((0,n.createElementVNode)("select",{id:"input-addon-edit-size","onUpdate:modelValue":t[5]||(t[5]=t=>e.options.size=t),class:"form-select custom-select"},[I,(0,n.createTextVNode)(),L,(0,n.createTextVNode)(),j],512),[[n.vModelSelect,e.options.size]]),(0,n.createTextVNode)(),A]),(0,n.createTextVNode)(),(0,n.createElementVNode)("div",F,[W,(0,n.createTextVNode)(),(0,n.createVNode)(oe,{modelValue:e.options.border_radius,"onUpdate:modelValue":t[6]||(t[6]=t=>e.options.border_radius=t),max:1200},null,8,["modelValue"])]),(0,n.createTextVNode)(),(0,n.createElementVNode)("div",$,[O,(0,n.createTextVNode)(),(0,n.createElementVNode)("div",null,[(0,n.createVNode)(te,{name:"addon-edit-block",modelValue:e.options.block,"onUpdate:modelValue":t[7]||(t[7]=t=>e.options.block=t),id:"input-addon-edit-block",shape:"circle",color:"success","true-value":!0,"false-value":!1},null,8,["modelValue"])])]),(0,n.createTextVNode)(),(0,n.createElementVNode)("div",P,[Y,(0,n.createTextVNode)(),(0,n.createElementVNode)("div",q,[(0,n.createElementVNode)("div",G,[(0,n.createElementVNode)("span",{class:(0,n.normalizeClass)(e.options.icon)},null,2)]),(0,n.createTextVNode)(),(0,n.withDirectives)((0,n.createElementVNode)("input",{id:"input-addon-edit-icon",type:"text","onUpdate:modelValue":t[8]||(t[8]=t=>e.options.icon=t),class:"form-control"},null,512),[[n.vModelText,e.options.icon]])]),(0,n.createTextVNode)(),H]),(0,n.createTextVNode)(),(0,n.createElementVNode)("div",J,[K,(0,n.createTextVNode)(),(0,n.createVNode)(ee,{color:"primary",variant:"outline",class:"w-100",modelValue:e.options.icon_position,"onUpdate:modelValue":t[9]||(t[9]=t=>e.options.icon_position=t),options:[{text:"Left",value:"left"},{text:"Right",value:"right"}]},null,8,["modelValue"])])])}]])}}]);
//# sourceMappingURL=../804.js.map