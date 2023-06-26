import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Heading, { HeadingAs, HeadingType } from './index';

const meta: Meta<typeof Heading> = {
    title: 'Components/Heading',
    component: Heading,
    tags: ['autodocs'],
    argTypes: {
        as: {
            control: {
                type: 'select',
                options: Object.values(HeadingAs),
            },
        },
        type: {
            control: {
                type: 'select',
                options: Object.values(HeadingType),
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
    args: {
        as: HeadingAs.H1,
        type: HeadingType.H1,
        children: 'Heading 1',
    },
};

export const Heading2: Story = {
    args: {
        as: HeadingAs.H2,
        type: HeadingType.H2,
        children: 'Heading 2',
    },
};

export const Heading3: Story = {
    args: {
        as: HeadingAs.H3,
        type: HeadingType.H3,
        children: 'Heading 3',
    },
};
