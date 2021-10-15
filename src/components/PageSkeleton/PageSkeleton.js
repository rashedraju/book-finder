import React from "react";
import { Skeleton, Grid } from "@mui/material";
import { theme } from "../../assets/styles/Theme.styled";

const PageSkeleton = () => {
    return (
        <Grid container justifyContent="center">
            <Skeleton variant="text" width="30%" style={{ margin: "1rem 0" }} />
            <Skeleton
                variant="reactangular"
                width="100%"
                height={300}
                animation="wave"
                sx={{ bgcolor: theme.colors.secondary.main }}
                style={{ margin: "1rem 0" }}
            />
        </Grid>
    );
};

export default PageSkeleton;
