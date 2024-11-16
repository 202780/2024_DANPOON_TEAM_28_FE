import { Meta, StoryObj } from '@storybook/react';
import SearchIcon from '@/components/Icons/SearchIcon';

const meta: Meta = {
    title: 'Icons/SearchIcon',
    component: SearchIcon,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light',
        },
    },
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: ['green', 'white'],
            },
            description: '아이콘 색상 설정: green은 #58883f, white는 #ffffff',
        },
        onSearchClick: {
            description: '아이콘을 클릭했을 때 실행되는 콜백 함수',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Green: Story = {
    args: {
        color: 'green',
        onSearchClick: () => {
            alert('검색 아이콘 클릭!');
        },
    },
};

export const White: Story = {
    args: {
        color: 'white',
        onSearchClick: () => {
            alert('검색 아이콘 클릭!');
        },
    },
};
