type SearchIconProps = {
    color?: string;
    size?: number;
    onSearchClick?: () => void;
};

export const SearchIcon = ({
    color = '#57873E',
    size = 22,
    onSearchClick,
}: SearchIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 22 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        onClick={onSearchClick}
    >
        <g id='Group 10'>
            <path
                id='Vector'
                d='M9.88889 18.7778C14.7981 18.7778 18.7778 14.7981 18.7778 9.88889C18.7778 4.97969 14.7981 1 9.88889 1C4.97969 1 1 4.97969 1 9.88889C1 14.7981 4.97969 18.7778 9.88889 18.7778Z'
                stroke={color}
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                id='Vector_2'
                d='M21.0001 20.9999L16.1667 16.1666'
                stroke={color}
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </g>
    </svg>
);

export default SearchIcon;
