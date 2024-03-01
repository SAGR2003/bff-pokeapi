import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [documentNum, setDocumentNum] = useState('');
    const [password, setPassword] = useState('');
    const [responseMsg, setResponseMsg] = useState('');

    const handleDocumentChange = (e) => {
        setDocumentNum(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:3001/get-account', { //BFF
            documentNum: documentNum,
            password: password 
          });

          setResponseMsg(response.data.msg);
        } catch (error) {
          console.error('Error al encontrar la cuenta:', error);
          setResponseMsg('Error al encontrar la cuenta');
        }
    };

    return (
        <div>
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="document">Numero de documento</label>
                    <input
                        type="document"
                        id="document"
                        value={documentNum}
                        onChange={handleDocumentChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
            {responseMsg && <p>{responseMsg}</p>}
        </div>
    );
};

export default Login;