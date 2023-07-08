import { Box } from '@mui/material'
import React from 'react'

const BoardBar = () => {
    return (
        <>
            <Box sx={{
                width: "100%",
                height: (theme) => theme.trelloCustom.boardBarHeight
            }}>
                Box 2
            </Box>
        </>
    )
}

export default BoardBar