import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
            <div className='bg-dark p-3 rounded w-25'>
                <form>
                    <div className='mb-3 text-light'>
                        <p className='text-center'><strong>LOGIN</strong></p>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='Insira seu email' 
                        className='form-control rounded-0'></input>
                    </div>

                    <div className='mb-3 text-light'>
                        <label htmlFor='password'>Senha</label>
                        <input type='password' placeholder='Insira sua senha' 
                        className='form-control rounded-0'></input>
                    </div>

                    <button className='btn w-100 bg-danger text-light rounded-0'>
                        Entrar
                    </button>

                    <p></p>

                    <Link to='/signup' className='btn btn-default w-100 bg-transparent text-light border-0'>
                        Ainda não tem uma conta? Crie aqui
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login;