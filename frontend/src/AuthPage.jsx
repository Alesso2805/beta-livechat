import axios from 'axios';
import React from 'react';

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault(); // Prevenir el comportamiento de envío predeterminado del formulario
        const { value } = e.target[0]; // Obtener el valor del campo de entrada del formulario

        axios.post(
            'http://localhost:3001/authenticate',
            { username: value }
        )
            .then(r => props.onAuth({ ...r.data, secret: value })) // Llamar a la función "onAuth" pasando los datos de respuesta y el valor secreto (username)
            .catch(e => console.log('error', e)); // Manejar el error de la solicitud

    };

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome 👋</div>

                <div className="form-subtitle">Set a username to get started</div>

                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;
