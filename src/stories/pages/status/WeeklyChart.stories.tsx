import { Meta, StoryObj } from '@storybook/react';
import WeeklyChart from '@/pages/status/WeeklyChart';

const meta: Meta = {
    title: 'status/WeeklyChart',
    component: WeeklyChart,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered', // 컴포넌트를 화면 중앙에 렌더링
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        dataset: [
            { day: '일', value: 30 },
            { day: '월', value: 60 },
            { day: '화', value: 90 },
            { day: '수', value: 100 },
            { day: '목', value: 70 },
            { day: '금', value: 50 },
            { day: '토', value: 20 },
        ],
    },
};
