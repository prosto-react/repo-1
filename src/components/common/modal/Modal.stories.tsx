import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal, { ModalProps } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Modal>;

const Template: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(args.visible);

    const handleClose = () => {
      setVisible(false);
    };

    return (
      <div>
        <button onClick={() => setVisible(true)}>Open Modal</button>
        <Modal {...args} visible={visible} onClose={handleClose}>
          <h2>About me</h2>
          <p>Bessie Cooper</p>
          <p>UX Research Project Management CX Strategy</p>
          <p>Full Name: Bessie Cooper</p>
          <p>Mobile: (123) 123 1234</p>
          <p>Email: BessieCooper@example.com</p>
          <p>Location: USA</p>
        </Modal>
      </div>
    );
  },
};

export const Default: Story = {
  ...Template,
};
Default.args = {
  visible: false,
};
