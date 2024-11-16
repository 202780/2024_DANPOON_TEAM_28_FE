import React from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import * as style from './SearchBar.style';
import SearchIcon from './Icons/SearchIcon';

type SearchBarProps = {
    page: 'infoBoard' | 'mapPage';
    onSearchClick?: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ page, onSearchClick }) => {
    const pageStyle =
        page === 'infoBoard' ? style.infoBoardStyle : style.mapPageStyle;

    return (
        <Box sx={pageStyle}>
            <InputBase
                placeholder={
                    page === 'infoBoard'
                        ? '검색어를 입력하세요'
                        : '장소, 버스, 지하철, 주소 검색'
                }
                inputProps={{
                    style: {
                        color: page === 'infoBoard' ? '#FFF' : '#A3C66F',
                        fontFamily: 'Pretendard',
                        fontStyle: 'normal',
                        fontSize: '1rem',
                        fontWeight: 500,
                        lineHeight: '20px',
                    },
                }}
                sx={{
                    flex: 1,
                    '& .MuiInputBase-input::placeholder': {
                        opacity: 1,
                    },
                }}
            />
            <SearchIcon
                color={page === 'infoBoard' ? 'white' : 'green'}
                onSearchClick={onSearchClick}
            />
        </Box>
    );
};

export default SearchBar;
