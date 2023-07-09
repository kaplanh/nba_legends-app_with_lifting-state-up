import { data } from "../../helper/data";
import PlayerCard from "../playercard/PlayerCard.jsx";
const CardContainer = ({ search }) => {
    return (
        <div className="container">
            <div className=" row ">
                {data
                    .filter((player) =>
                        player.name
                            .toLocaleLowerCase()
                            .includes(search.trim().toLocaleLowerCase())
                    )
                    .map((player, i) => (
                        <PlayerCard key={i} {...player} />
                    ))}
            </div>
        </div>
    );
};

export default CardContainer;
