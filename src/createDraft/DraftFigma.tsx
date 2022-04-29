import * as React from 'react'
import {Box} from '@mui/material'
import MiniDrawer from "./Drawer";

const DraftFigma = ()=> {

    const width = '1440px';

    return (
        <>
            <Box sx={{
                width:width,
                height:'1599px',
                background:'#F5F5F5',
                margin:'0 auto',
                display:'flex',
                flexDirection:'column',
            }}>
                <MiniDrawer width={width} />
            </Box>
        </>
    )
}

export default DraftFigma