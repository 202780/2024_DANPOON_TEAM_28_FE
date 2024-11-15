import { Meta, StoryObj } from '@storybook/react';
import { NotificationIcon } from '../../../components/Icons/NotificationIcon';

const meta: Meta = {
    title: 'Icons/NotificationIcon',
    component: NotificationIcon,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light',
        },
    },
    argTypes: {
        size: {
            control: { type: 'number', min: 10, max: 100, step: 1 },
            description: '아이콘 크기 설정',
        },
        onNotificationClick: {
            description: '아이콘을 클릭했을 때 실행되는 콜백 함수',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: 16,
        onNotificationClick: () => {
            alert('알림창으로 연결됩니다.');
        },
    },
};
