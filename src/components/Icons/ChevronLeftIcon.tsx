import { createSvgIcon } from '@mui/material';

const ChevronLeftIcon = createSvgIcon(
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 18' fill='none'>
        <path
            d='M9 17L1 9L9 1'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>,
    'ChevronLeftIcon'
);

export default ChevronLeftIcon;
