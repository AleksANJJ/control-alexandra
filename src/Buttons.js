function Buttons ({filterProduct}) {
    return(
        <div className="cont">
            <button className="btnProdFil" onClick={() => filterProduct("fruit")}>Fruits</button>
            <button className="btnProdFil" onClick={() => filterProduct("vegetable")}>Vegetables</button>
        </div>
    )
}

export default Buttons;
