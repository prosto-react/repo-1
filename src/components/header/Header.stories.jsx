import React from 'react';
import Header from './Header'; 

export default {
  title: 'Components/Header/Header',
  component: Header,
  tags: ['autodocs'],
};

const Template = (args) => (
  <Header {...args}>
    
  </Header>
);

export const Default = Template.bind({});
Default.args = {};
