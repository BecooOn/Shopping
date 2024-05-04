import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{"textAlign":"center"}}>
      <img src="./404.png" alt="404" />
      <div>
        <Button sx={{border:"1px solid",mr:"10px"}} onClick={() => navigate("/")}>
          Home
        </Button>
        <Button sx={{border:"1px solid"}} onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </Box>
  )
}

export default NotFound
