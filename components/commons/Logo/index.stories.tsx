import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Logo from './index';

const meta: Meta<typeof Logo> = {
    title: 'Components/Logo',
    component: Logo,
    tags: ['autodocs'],
    argTypes: {
        dark: {
            control: {
                type: 'boolean',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Light: Story = {
    args: {
        dark: false,
    },
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

export const Dark: Story = {
    args: {
        dark: true,
    },
};
