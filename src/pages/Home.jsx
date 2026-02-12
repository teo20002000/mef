import { Drawer, Grid, List,  ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import NavBar from "../Components/navbar";
import { ShoppingBasket } from "@mui/icons-material";
import { useState } from "react";
import Products from "../Components/products";

function Home() {

    const [open, setOpen] = useState(false)

    return <Grid container spacing={2} fixed>
        <Grid item size={{xs: 12}}>
            <NavBar setDrawerOpen={setOpen} />
        </Grid>
          <Grid item size={{xs:12, md:10}}>
            <Typography>
                <Products />
            </Typography>
        </Grid>
        <Drawer open={open} onClose={() => setOpen(false)}>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon> 
                            <ShoppingBasket sx={{m: "4px"}} /> 
                            <ListItemText primary="Carrello" />
                        </ListItemIcon>
                    </ListItemButton>
                    
                </ListItem>
            </List>
        </Drawer>
    </Grid>
    
}

export default Home