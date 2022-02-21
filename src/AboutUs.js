import { useState } from "react";
import { dataTwo } from "./data";

function AboutUs() {
    const [farm, setFarm] = useState(0);
    const {images} = dataTwo[farm];

    const nextFarm = () => {
        setFarm((farm => {
            farm++;
            if (farm > dataTwo.length -1) {
                farm =0;
            }
            return farm;
        }))
    }
    const previosFarm = () => {
        setFarm((farm => {
            farm--;
            if (farm < 0) {
                return dataTwo.length-1;
            }
            return farm;
        }))
    }



    return(
        <div><div>
            <h2>ABOUT COMPANY</h2>
            <p className="pAbout">ORGANIC FOOD offers you unique food products of the highest quality with maximum benefits for your health. </p>
            <p className="pAbout">When choosing products, we are guided by the following principles: </p>
            <ul>
                <li>compliance with a healthy lifestyle; </li>
                <li>impeccable reputation of the manufacturer and brand; </li>
                <li>maximum benefit for the body; </li>
                <li>naturalness; </li>
                <li>environmental friendliness; </li>
                <li>excellent taste; </li>
                <li>quality confirmed by international certificates. </li>
            </ul>
        </div>
        <div className="contTwo cont">
            <div><button className="btnAbout"  onClick={previosFarm}>previos</button></div>
            <div><img src={images} width="700px" height="500px" alt="foto"/></div>
            <div><button className="btnAbout" onClick={nextFarm}>next</button></div>  
        </div>
        </div>
    )
}
export default AboutUs;
