function Products({prodProps}) {
    return(
        <div className="prod">
            {prodProps.map((element => {
                const {id, image, nameProduct, description, price} = element;
                return (
                    <div className="prodCard" key={id}>
                        <img className="imgProd" src={image} width="300px" height="300px" alt="foto" />
                        <div className="divProd">
                            <div>
                                <h3>{nameProduct}</h3>
                                <h4>$ {price}</h4>
                            </div>
                            <div>
                        <button className="btnAdd">Add</button></div>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}
 
export default Products;

