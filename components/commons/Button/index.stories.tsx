import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonIcon, ButtonVariant } from './index';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        as: {
            control: {
                type: 'select',
                options: ['button', 'a'],
            },
        },
        variant: {
            control: {
                type: 'select',
                options: Object.values(ButtonVariant),
            },
        },
        icon: {
            control: {
                type: 'select',
                options: Object.values(ButtonIcon),
            },
        },
        className: { control: 'text' },
        href: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: ButtonVariant.Primary,
        children: 'Primary',
    },
};

export const Secondary: Story = {
    args: {
        variant: ButtonVariant.Secondary,
        children: 'Secondary',
    },
};

export const Icon: Story = {
    args: {
        variant: ButtonVariant.Icon,
        icon: ButtonIcon.Hamburger,
    },
};


