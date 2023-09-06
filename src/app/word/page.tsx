import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import SideVav from '../widgets/layout/sidenav'
import WordLayout from '../components/layout/WordLayout'

const drawerWidth = 240

const WordPage = () => {

  return (
    <WordLayout>
      
      {/* <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      > */}
        {/* <SideVav/> */}
        <Typography paragraph>
          단어외우기
        </Typography>
      {/* </Box> */}
      </WordLayout>
  )
}

export default WordPage