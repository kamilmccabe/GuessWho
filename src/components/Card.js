import { useState } from "react";

function Card({name, isSelect, updateSelect}) {

    const [isSelected, setIsSelected] = useState(false);
    const [isUserSelected, setIsUserSelected] = useState(false);

    const onClick = () => {
        if (!isSelect) {
            setIsSelected(!isSelected);
        }
        else {
            setIsUserSelected(true);
            updateSelect();

        }
    }

    return (
        <div className={`card ${isSelected ? "selected" : ""} ${isUserSelected ? "userSelected" : ""}`} onClick={onClick}>
            <div className="overlay"></div>
            <img src={`/images/${name}.png`} style={{height: "100%", width: "100%"}}/>
        </div>
    )
}

export default Card;