import{R as g}from"./index-DQ2WTIsS.js";import{B as S}from"./Button-CnsJWq7v.js";const v={title:"Components/Button",component:S,args:{icon:""},argTypes:{icon:{options:["None","StarIcon"],mapping:{None:null,StarIcon:g.createElement("span",{role:"img","aria-label":"star"},"⭐")},control:{type:"radio",labels:{None:"Without icon",StarIcon:"Star icon"}}}}},r={args:{label:"Primary Button",variant:"primary"}},a={args:{label:"Secondary Button",variant:"secondary"}},e={args:{label:"Disabled Button",variant:"primary",disabled:!0}},o={args:{label:"Button with Icon",variant:"primary",icon:"StarIcon"}};var n,t,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button',
    variant: 'primary'
  }
}`,...(s=(t=r.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var c,i,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    variant: 'secondary'
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,y,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Button with Icon',
    variant: 'primary',
    icon: 'StarIcon'
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const h=["Primary","Secondary","Disabled","WithIcon"];export{e as Disabled,r as Primary,a as Secondary,o as WithIcon,h as __namedExportsOrder,v as default};
