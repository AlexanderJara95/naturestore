import ItemListContainer from "./ItemListContainer";
import { Grid } from "@mui/material";

function ListContainer(){
    return(
        <Grid container>
            <Grid item md={3}>
                <ItemListContainer title={"Jabón de sábila"} pesoNeto={"Caja de 5 unidades"} price={"3"} image={"jabon1.jpg"} stock={"5"} initial={1}></ItemListContainer>
            </Grid>
            <Grid item md={3}>
                <ItemListContainer title={"Shampoo de Miel"} pesoNeto={"300ml"} price={"9"} image={"shampoo1.jpg"} stock={"10"} initial={2}></ItemListContainer>
            </Grid>
            <Grid item md={3}>
                <ItemListContainer title={"Jabón de Avena"} pesoNeto={"Caja de 5 unidades"} price={"3"} image={"jabon2.jpg"} stock={3} initial={1}></ItemListContainer>
            </Grid>
            <Grid item md={3}>
                <ItemListContainer title={"Sampoo de Avena"} pesoNeto={"300ml"} price={"11"} image={"shampoo2.jpg"} stock={"0"} initial={0}></ItemListContainer>
            </Grid>
        </Grid>
    );
}
export default ListContainer;