import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeName } from "../../store/modules/user/actions";

const UserCard = () => {
    const [newName, setNewName] = useState("");
    const dispatch = useDispatch();
    const {name} = useSelector((state) => state.user);
    console.log(newName)

    const handleClick = () => {
        dispatch(changeName(newName));
    }

    return (
        <>
            <div>
                <h3>User Name: {name}</h3>
            </div>
            <div>
                <input type="text" onChange={(e) => setNewName(e.target.value)}/>
                <button onClick={handleClick}>Change</button>
            </div>
        </>
    )
}

export default UserCard;