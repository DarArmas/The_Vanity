import { Box, Typography } from '@mui/material';
import React from 'react'

export const TabPanel = ({ children, value, index, ...other }) => {   
    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
            <Typography component={'span'} variant={'body2'}>{children}</Typography>
            </Box>
        )}
        </div>
    );
}
