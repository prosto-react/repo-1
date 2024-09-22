import React from 'react';
import Layout from './Layout'; 

export default {
  title: 'Components/Layout',
  component: Layout,
  tags: ['autodocs'],
};

const Template = (args) => (
  <Layout {...args}>
    <p>This is a sample child content inside the layout.</p>
  </Layout>
);

export const Default = Template.bind({});
Default.args = {};
