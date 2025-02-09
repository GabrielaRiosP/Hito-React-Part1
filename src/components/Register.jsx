import { useState } from "react"
import '../components/Register.css'

const registerInput = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            setMessage('¡Registro exitoso!');
        } else {
            setMessage('Las contraseñas no coinciden.')
        }

    }

    return (
        <div className="formulario">
        <div className="data">
            <h3>Register</h3>
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
        <div>
          <label>Confirmar Contraseña:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
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

export default registerInput