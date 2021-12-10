import React, {useEffect, useState} from 'react';
import Card from "./Card";

const UserCards = ({count}) => {
    const [users, setUsers] = useState( null );

    useEffect(() => {
        async function getData () {
            try{
                const response = await fetch('https://reqres.in/api/users');
                const { data } = await response.json();
                setUsers(data);
            } catch (e) {
                console.log(e);
            }
        }
        getData();
    }, [])

    return (
        <div>
            {count}
            {users?.map((user, index) =>
                <Card
                    key = {user.id}
                    first_name = {user.first_name}
                    last_name = {user.last_name}
                    avatar = {user.avatar}
                    email={user.email}
                />
            )}
        </div>
    )
}

export default UserCards;