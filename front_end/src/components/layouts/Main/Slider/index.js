import React from 'react';
import { Box, Button } from '@mui/material';

function Slider() {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    minHeight: 1000,
                    backgroundImage: 'url(https://levents.asia/wp-content/uploads/2023/01/website-1920x988-1.png)',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
            </Box>
        </>
    );
}

export default Slider;
