import React from 'react'
import Button from '@mui/material/Button'

const ButtonComponent = () => {
  return (
    <>
      <Button variant="text">Contained</Button>
      <Button variant="contained" disabled>
                Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
                Link
      </Button>
    </>
  )
}

export default ButtonComponent