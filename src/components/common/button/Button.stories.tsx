import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    icon: '', // Default value for the icon prop
  },
  argTypes: {
    icon: {
      options: ['None', 'StarIcon'], // Options for the icon prop
      mapping: {
        None: null,
        StarIcon: <span role="img" aria-label="star">⭐</span>,
      },
      control: {
        type: 'radio',
        labels: {
          None: 'No Icon',
          StarIcon: 'Star Icon',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Button with Icon',
    variant: 'primary',
    icon: 'StarIcon', // Use the string key from the mapping
  },
};
