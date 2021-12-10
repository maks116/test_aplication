import React, {useEffect, useState} from 'react';

import './App.css';
import UserCards from "./UserCards/UserCards";
import RegForm from "./RegForm/RegForm";

const App = () => {
    const [count, setCount] = useState(0);
    const [userLogins, setUserLogins] = useState([{ login: 'Admin', password: 'Admin'}]);

    useEffect(() => {
        localStorage.setItem('users',  JSON.stringify([{email: 'Maksim', password: "password"}]));
    }, [])
    return(
        <div>
            <button style={{ margin: "20px"}} onClick={() => setCount(count + 1) }>+</button>
            {count}
            <button style={{ margin: "20px"}} onClick={() => setCount(count - 1) }>-</button>
            <RegForm initialUsers={userLogins} setUsers={setUserLogins} />
            <UserCards count={count} />
        </div>
    )
}

export default App;