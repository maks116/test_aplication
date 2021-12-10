import React, {useContext} from 'react';
import MyContext from "../Context/MyContext";

const Card = ({ first_name, last_name, email, avatar }) => {
    // const { first_name, last_name, email, avatar } = props;
    const { count } = useContext(MyContext)
    return (
        <div>
            <div>{count}</div>
            <label>{first_name}</label>
            <label>{last_name}</label>
            <label>{email}</label>
            <img src={avatar} alt="Logo" />
        </div>
    )
}

export default Card;