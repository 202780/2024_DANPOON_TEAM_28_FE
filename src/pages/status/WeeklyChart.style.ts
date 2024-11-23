import { SxProps, Theme } from '@mui/material';

export const boxStyle: SxProps<Theme> = {
    mb: 4,
    p: 2,
    border: (theme) => `1px solid ${theme.palette.divider}`,
    borderRadius: 2,
};

// 왜 컴포넌트 내에서 불러오니까 오류가...?
export const referenceLineStyle = {
    zIndex: 10,
};

export const referenceLineLabelStyle = {
    position: 'left',
    value: '평균',
    fill: '#D27B90',
    fontSize: 15,
    fontWeight: '700',
};
