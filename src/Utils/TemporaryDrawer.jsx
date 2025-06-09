import { Box, Button, Drawer } from '@mui/material';
import React, { useState } from 'react'

const TemporaryDrawer = () => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen)=>{
        setOpen(newOpen);
    }

    const DrawerList = (
        <Box sx={{width: "250px", border: "1px solid red"}} role="presentation" onClick={toggleDrawer(false)}>

        </Box>
    )

  return (
    <>
        <Button onClick={toggleDrawer(true)}>Open drawer</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    </>
  )
}

export default TemporaryDrawer