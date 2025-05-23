import * as React from "react";
import {Typography} from "@mui/material";
import {home} from "../../styles/styles.ts";

export const MainTitle: React.FunctionComponent = () => {
    return (
        <>
            <Typography sx={{...home.grid.title}}>
                Agustin Garcia
            </Typography>
            <Typography sx={{
                ...home.grid.subtitle,

            }}>
                Software Developer
            </Typography>
        </>
    )
}