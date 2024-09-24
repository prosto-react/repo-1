import React, { useState,useEffect } from 'react';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

const Template = (args) => {
  const [visible, setVisible] = useState(args.visible);

  useEffect(() => {
    setVisible(args.visible);
  }, [args.visible]);

  const handleClose = () => {
    setVisible(false);
    if (args.onClose) args.onClose(); // вызов onClose, если передан
  };
  return (
    <div>
      <button onClick={() => setVisible(true)}>Open Modal</button>
      <Modal {...args} visible={visible} onClose={handleClose}>
        {args.children}
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  visible: false,
  children: 'Children',
};