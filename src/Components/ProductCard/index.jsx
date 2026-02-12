import { ShoppingBasket } from "@mui/icons-material";
import { Card, CardHeader, CardContent, CardActions, Button, Typography } from "@mui/material"

function ProductCard({title, description}) {
     return <Card>
                        <CardHeader title={title} />
                        <CardContent> 
                            <Typography>{description}</Typography> 
                            </CardContent>
                        <CardActions><Button> <ShoppingBasket color="primary" sx={{m:"6px"}}/> Aggiungi</Button></CardActions>
                    </Card>
}

export default ProductCard;