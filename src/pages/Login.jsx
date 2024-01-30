import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/Login.css'
import LogoImg from '../assets/images/Logo_grande.png'

function Login() {

    document.body.classList.add('bodyLogin')

    // USUARIO REGULAR
    const emailReg = 'regular@gmail.com';
    const passwordReg = 'Regular123';
    
    const regular = {
        email: emailReg,
        codigo: 0
    }

    // USUARIO ADMIN
    const emailAdmin = 'admin@gmail.com';
    const passwordAdmin = 'Admin123';

    const admin = {
        email: emailAdmin,
        codigo: 1
    }

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigate = useNavigate();

    

    const login = () => {

        if (email == '' || password == '') {
            alert('Introduzca los datos solicitados');
        
        } else if (email == emailReg && password == passwordReg) {
            document.body.classList.remove('bodyLogin')
            sessionStorage.setItem('Sesion', JSON.stringify(regular));
            navigate('/home')
            
        } else if (email == emailAdmin && password == passwordAdmin) {
            document.body.classList.remove('bodyLogin')
            sessionStorage.setItem('Sesion', JSON.stringify(admin));
            navigate('/home')
        
        } else {
            alert('Email y/o contraseña incorrectas, intente nuevamente');
        }

        limpiarDatos();
    }

    function limpiarDatos() {
        setEmail('');
        setPassword('');
    }


    return (
        <main className="container mt-5 p-4 mainLogin">
            <div>
                <img src={LogoImg} alt="Centro Pokémon" className='mb-5 imgLogin'/>
                <form className='' id="login">
                    <div className="mb-5">
                        <label htmlFor="email" className="form-label labelLogin">E-mail</label>
                        <input
                            type="email"
                            className="form-control"
                            // id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="form-label labelLogin">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            // id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" onClick={login} className="btn btn-danger">Iniciar Sesion</button>
                </form>
            </div>
        </main>
    )
}

export default Login