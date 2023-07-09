import Img from "./Img";
import Ul from "./Ul";
import "./PlayerCard.css"

import { useState } from "react";

const PlayerCard = ({ img, name, statistics }) => {
    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <div
            className=" col col-md-6 col-lg-4 col-xl-3 p-2"
            style={{ height: "450px" }}
        >
            <div onClick={handleClick} className="card h-100 border-0 ">
                {visible ? <Img img={img} /> : <Ul statistics={statistics} />}
                <div className="card-body h-25 ">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
