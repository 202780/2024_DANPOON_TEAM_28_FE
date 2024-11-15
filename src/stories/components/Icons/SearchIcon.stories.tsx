import { Meta, StoryObj } from '@storybook/react';
import { SearchIcon } from '../../../components/Icons/SearchIcon';

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
      control: 'color',
      description: '아이콘 색상 설정',
    },
    size: {
      control: { type: 'number', min: 10, max: 100, step: 1 },
      description: '아이콘 크기 설정',
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
    color: '#57873E',
    size: 20,
    onSearchClick: () => {
        alert('검색 아이콘 클릭!');
    },
  },
};

export const White: Story = {
  args: {
    color: 'white',
    size: 20,
    onSearchClick: () => {
        alert('검색 아이콘 클릭!');
    },
  },
};
