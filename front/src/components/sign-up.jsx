import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [accType, setAccType] = useState('');
    const [documentNum, setDocumentNum] = useState('');
    const [password, setPassword] = useState('');
    const [responseMsg, setResponseMsg] = useState('');

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:3001/new-account', { //BFF
            user: username,
            type: accType,
            document: documentNum,
            password: password                   
          });

          setResponseMsg(response.data.msg);
        } catch (error) {
          console.error('Error al crear la cuenta:', error);
          setResponseMsg('Error al crear la cuenta');
        }
    };

    return (
        <div>
            <h2>Crear cuenta</h2>
            <form>
                <label>
                    Titular de la cuenta:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Tipo de cuenta:
                    <input
                        type="text"
                        value={accType}
                        onChange={(e) => setAccType(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Documento:
                    <input
                        type="email"
                        value={documentNum}
                        onChange={(e) => setDocumentNum(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Contraseña:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="button" onClick={handleSignUp}>
                    Crear cuenta
                </button>
            </form>
            {responseMsg && <p>{responseMsg}</p>}
        </div>
    );
};

export default SignUp;