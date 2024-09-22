import React from 'react';
import Logo from './Logo'; 

export default {
  title: 'Components/Header/Logo',
  component: Logo,
  tags: ['autodocs'],
};

const Template = (args) => (
  <Logo {...args}>
    
  </Logo>
);

export const Default = Template.bind({});
Default.args = {};
