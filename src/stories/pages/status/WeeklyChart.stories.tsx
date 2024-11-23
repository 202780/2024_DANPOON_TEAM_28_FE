import type { Meta, StoryObj } from '@storybook/react';
import WeeklyChart from '@/pages/status/WeeklyChart';

const meta: Meta<typeof WeeklyChart> = {
  title: 'Components/WeeklyChart',
  component: WeeklyChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
    backgrounds: {
        default: 'dark',
    },
},
  args: {
    dataset: [
      { day: '일', value: 40 },
      { day: '월', value: 60 },
      { day: '화', value: 20 },
      { day: '수', value: 100 },
      { day: '목', value: 50 },
      { day: '금', value: 30 },
      { day: '토', value: 70 },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof WeeklyChart>;

export const Default: Story = {};
