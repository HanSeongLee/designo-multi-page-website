import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Paragraph, { ParagraphType } from './index';

const meta: Meta<typeof Paragraph> = {
    title: 'Components/Paragraph',
    component: Paragraph,
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text' },
        className: { control: 'text' },
        type: {
            control: {
                type: 'select',
                options: Object.values(ParagraphType),
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Paragraph1: Story = {
    args: {
        type: ParagraphType.P1,
        children: 'Paragraph 1',
    },
};

export const Paragraph2: Story = {
    args: {
        type: ParagraphType.P2,
        children: 'Paragraph 2',
    },
};
