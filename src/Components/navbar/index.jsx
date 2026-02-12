import { AppBar, Button, Typography, Toolbar, TextField} from "@mui/material";
import { Menu } from "@mui/icons-material";
import "./style.scss";

const displayOnlyOnMedium = { direction : {
                   sx:"column",
                    md:"row"
                }}

function NavBar({setDrawerOpen}) {
    return <AppBar position="static">
        <Toolbar className="toolbar" sx={displayOnlyOnMedium}>
            <Button  className="menuButton" onClick={() => setDrawerOpen(true)}>
                <Menu />
                <Typography variant="body1" color={"white"} 
                sx={{
                display: {
                    xs:"none",
                    md:"block"
                }
            }}>Menu</Typography>
            </Button>
            <TextField placeholder="Cerca..."  size="small" className="search" sx={{
                width: {
                    xs: "320px",
                    sm: "480px",
                    md: "640px"
                },
            }} />
            <Typography variant="h6" sx={{
                display: {
                    xs:"none",
                    md:"block"
                }
            }} >Musa eCommerce </Typography>
        </Toolbar>
        </AppBar>
}

export default NavBar;