import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
            <div className='bg-dark p-3 rounded w-25'>
                <form>
                    <div className='mb-3 text-light'>
                        <p className='text-center'><strong>REGISTRAR</strong></p>
                        <label htmlFor='password'>Nome</label>
                        <input type='password' placeholder='Insira seu nome' 
                        className='form-control rounded-0'></input>
                    </div>

                    <div className='mb-3 text-light'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='Insira seu email' 
                        className='form-control rounded-0'></input>
                    </div>

                    <div className='mb-3 text-light'>
                        <label htmlFor='password'>Senha</label>
                        <input type='password' placeholder='Insira sua senha' 
                        className='form-control rounded-0'></input>
                    </div>

                    <p></p>

                    <Link to='/signup' className='btn btn-default w-100 bg-danger text-light rounded-0 text-decoration-none'>
                        Criar uma conta
                    </Link>

                    <p></p>

                    <Link to='/' className='btn btn-default w-100 bg-transparent text-light border-0'>
                        Já tem uma conta? Entre aqui
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;