import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Typography } from "@mui/material";
import * as style from "./WeekSelector.style";

interface IWeekSelectorProps {
    onChange: (selectedWeek: string) => void;
}

const weeks = [
    "11월 1주차",
    "11월 2주차",
    "11월 3주차",
    "11월 4주차",
    "12월 1주차",
    "12월 2주차",
    "12월 3주차",
    "12월 4주차",
];

const WeekSelector: React.FC<IWeekSelectorProps> = ({ onChange }) => {
    const handleSelect = (index: number) => {
        onChange(weeks[index]);
    };

    return (
        <Box sx={style.containerStyle}>
            <Carousel
                autoPlay={false}
                indicators={false}
                navButtonsAlwaysVisible
                animation="slide"
                onChange={(_, index) => handleSelect(index || 0)}
                navButtonsProps={{
                    style: style.navButtonStyle,
                }}
                navButtonsWrapperProps={{
                    style: style.navButtonsWrapperStyle,
                }}
                NextIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <circle cx="14" cy="14" r="14" fill="#F9F0F5" />
                        <path d="M11 6L19 14L11 22" stroke="#D27B90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                }
                PrevIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <circle cx="14" cy="14" r="14" fill="#F9F0F5" />
                        <path d="M17 22L9 14L17 6" stroke="#D27B90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                }
            >
                {weeks.map((week, index) => (
                    <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40px" }}>
                        <Typography variant="h6" sx={style.typographyStyle}>
                            {week}
                        </Typography>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export default WeekSelector;
