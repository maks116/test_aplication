import React, {useState} from 'react';

const RegForm = ({initialUsers, setUserLogins}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('123');

    const handleSubmit = (event) => {
        event.preventDefault();
        const users = JSON.parse(localStorage.getItem('users'));
        users.push({email: 'Alina', password: "password"})

        if (!email.includes('@')) {
            setError('email not valid');
            return;
        }
        if (password.length < 5) {
            setError('password not valid');
            return;
        }

        localStorage.setItem('users',  JSON.stringify(users));

        // initialUsers.forEach((user) => {
        //     if (user.login === email && user.password === password) {
        //         console.log('Done')
        //     }
        // });
    }

    const handleChangeEmail = (value) => {
        setEmail(value);
    }

    const handleChangePassword = (value) => {
        setPassword(value);
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <label>
                email:
                <input
                    type="text"
                    value={email}
                    onChange={(event) => handleChangeEmail(event.target.value)}
                />
            </label>
            <label>
                password:
                <input
                    type="text"
                    value={password}
                    onChange={(event) => handleChangePassword(event.target.value)}
                />
            </label>
            <input type="submit" value="Войти"/>
            <div>{error}</div>
        </form>
    )
}

export default RegForm