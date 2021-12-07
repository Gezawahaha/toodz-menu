import { Box } from '@material-ui/core'
import './cardl.scss'

const CardL = ({width}) => {
    return (
        <Box width={width} height={width}  className="layer1" sx={{border: '10px solid white', borderRadius: '85px 85px 150px 150px'}}>
            
            <Box className="layer2">

            </Box> 
        </Box>
    )
}

export default CardL
