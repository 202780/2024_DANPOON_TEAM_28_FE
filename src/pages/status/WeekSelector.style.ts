import { SxProps, Theme } from "@mui/material";

export const containerStyle: SxProps<Theme> = {
    width: "90%",
    p: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
};

export const navButtonStyle: React.CSSProperties = {
    background: "#F9F0F5",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "none",
};

export const navButtonsWrapperStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    top: "50%",
    transform: "translateY(-50%)",
};

export const typographyStyle: SxProps<Theme> = {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};
