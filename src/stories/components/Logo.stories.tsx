import { Meta, StoryObj } from '@storybook/react';
import Logo from '@/components/Logo';

const meta: Meta = {
    title: 'Components/Logo',
    component: Logo,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light',
        },
    },
    argTypes: {
        size: {
            control: 'radio',
            options: ['small', 'large'],
            description: '로고 크기',
        },
        showName: {
            control: 'boolean',
            description: '아이템 이름 표시 여부',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallWithName: Story = {
    args: {
        size: 'small',
        showName: true,
    },
};

export const LargeWithName: Story = {
    args: {
        size: 'large',
        showName: true,
    },
};

export const LogoOnly: Story = {
    args: {
        size: 'large',
        showName: false,
    },
};
