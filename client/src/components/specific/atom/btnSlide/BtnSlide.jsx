import { Box, ButtonBase } from '@material-ui/core'
import React from 'react'
import './btnSlide.scss'


const BtnSlide = ({title}) => {
    return (
        
            <Box><ButtonBase className="btn-decidemenu">{title}</ButtonBase></Box>
        
    )
}

export default BtnSlide

