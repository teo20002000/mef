import { Grid } from "@mui/material"
import ProductCard from "../ProductCard";

const products =[ {
    title: "Prodotto 1",
    description: "Descrizione prod 1 "
    },
    {
     title: "Prodotto 2",
    description: "Descrizione prod 2 "
    },
    {
     title: "Prodotto 3",
    description: "Descrizione prod 3 "
    },
    {
     title: "Prodotto 4",
    description: "Descrizione prod 4 "
    }
]



function Products() {
    return <Grid container spacing={2}>
            {products.map(product => 
                <Grid item size={{xs: 4, md:3}} key={product}>
                    <ProductCard title={product.title} description={product.description} />
                </Grid> 
            )}             
            </Grid>
}

export default Products;