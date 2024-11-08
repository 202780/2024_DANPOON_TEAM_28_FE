import { Meta, StoryObj } from '@storybook/react';
import App from '@/App';

const meta: Meta = {
    title: 'app/App',
    component: App,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // Add your default args here
    },
};
