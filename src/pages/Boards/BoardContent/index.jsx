import { Box } from '@mui/material'
import React from 'react'

const BoardContent = () => {
    return (
        <>
            <Box sx={{
                width: "100%",
                height: (theme) => `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`
            }}>
                Box 3
            </Box>
        </>
    )
}

export default BoardContent