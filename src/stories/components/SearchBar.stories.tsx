import { Meta, StoryObj } from '@storybook/react';
import SearchBar from '@/components/SearchBar';

const meta: Meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    page: {
      control: 'radio',
      options: ['infoBoard', 'mapPage'],
      description: '검색바가 사용되는 페이지',
    },
    onSearchClick: {
        action: 'clicked',
        description: '검색 아이콘 클릭 이벤트 핸들러',
      },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InfoBoard: Story = {
  args: {
    page: 'infoBoard',
    onSearchClick: () => {
        alert('정보 게시판에서 검색 아이콘 클릭!');
      },
  },
};

export const MapPage: Story = {
  args: {
    page: 'mapPage',
    onSearchClick: () => {
        alert('지도 페이지에서 검색 아이콘 클릭!');
      },
  },
};
