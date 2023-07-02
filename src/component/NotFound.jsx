import { Box, Button } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <>
      <Box 
      display='flex'
      alignItems='center'
      justifyContent='center'
      height='100vh'
      fontSize='40px'
      flexDirection='column'
      gap='30px'   
      >
        Not Found!
        <Button sx={{backgroundColor:'blue'}}><a href='/'style={{textDecoration:'none',color:'white'}}>Go to Home</a></Button>
      </Box>
    </>
  )
}

export default NotFound
