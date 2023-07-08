import { Box, Typography } from '@mui/material'
import React from 'react'

const AppBar = () => {
  return (
    <>
      <Box sx={{
        backgroundColor: "primary.light",
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Typography variant='caption' component="h1">App</Typography>
      </Box>
    </>
  )
}

export default AppBar