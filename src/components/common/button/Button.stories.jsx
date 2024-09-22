// Button.stories.jsx
import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    icon: '',
  },
  argTypes: {
    icon: {
      options: ['None', 'StarIcon'], 
      mapping: {
        None: null,
        StarIcon: <span role="img" aria-label="star">⭐</span>,
      },
      control: {
        type: 'radio',
        labels: {
          None: 'Without icon',
          StarIcon: 'Star icon',
        },
      },
    },
  },
};

export const Primary = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const WithIcon = {
  args: {
    label: 'Button with Icon',
    variant: 'primary',
    icon: 'StarIcon', 
  },
};
