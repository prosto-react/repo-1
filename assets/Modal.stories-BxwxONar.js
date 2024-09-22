import{R as l,r as i}from"./index-DQ2WTIsS.js";const u="_modalOverlay_taghq_1",C="_modalContent_taghq_14",b="_modalClose_taghq_23",n={modalOverlay:u,modalContent:C,modalClose:b},a=({visible:e,onClose:t,children:o})=>e?l.createElement("div",{className:n.modalOverlay},l.createElement("div",{className:n.modalContent},l.createElement("button",{className:n.modalClose,onClick:t},"×"),o)):null;a.__docgenInfo={description:"",methods:[],displayName:"Modal"};const p={title:"Components/Modal",component:a,tags:["autodocs"]},v=e=>{const[t,o]=i.useState(e.visible);i.useEffect(()=>{o(e.visible)},[e.visible]);const m=()=>{o(!1),e.onClose&&e.onClose()};return l.createElement("div",null,l.createElement("button",{onClick:()=>o(!0)},"Open Modal"),l.createElement(a,{...e,visible:t,onClose:m},e.children))},s=v.bind({});s.args={visible:!1,children:"Children"};var r,d,c;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(args.visible);
  useEffect(() => {
    setVisible(args.visible);
  }, [args.visible]);
  const handleClose = () => {
    setVisible(false);
    if (args.onClose) args.onClose(); // вызов onClose, если передан
  };
  return <div>
      <button onClick={() => setVisible(true)}>Open Modal</button>
      <Modal {...args} visible={visible} onClose={handleClose}>
        {args.children}
      </Modal>
    </div>;
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const _=["Default"];export{s as Default,_ as __namedExportsOrder,p as default};
