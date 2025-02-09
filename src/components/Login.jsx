import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            setMessage('Todos los campos son obligatorios');
        } else if (password.length < 6) {
            setMessage('La contreseña debe tener al menos 6 caracteres');
        } else {
            setMessage('¡Inicio de sesión exitoso!')
        }
    }


    return (
        <div className="formulario">
        <div className="data">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
           <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        
        <button type="submit">Enviar</button>
        </form>
        {message && <p>{message}</p>}
        </div>
        </div>
    );
}

export default Login 