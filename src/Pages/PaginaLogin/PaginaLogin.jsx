import React from 'react';
// Import do CSS
import './PaginaLogin.css';
// Import do react-hook-form.
import {useForm} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../store/Auth';

const createLoginFormSchema = z.object({
    email: z.string()
        .nonempty('O e-mail é obrigatório')
        .email('Informe um e-mail válido'),
    senha: z.string()
        .nonempty('A senha é obrigatória')
        .min(8, 'A senha precisa ter no mínimo 8 caracteres')
        .regex(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/, 'Sua senha deve conter números e letras')
});


const PaginaLogin = () => {

    const { handleLogin } = useAuth();

    // Usando o useForm
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(createLoginFormSchema) });

    const createUser = (data) =>{
        handleLogin(data);
    }

    return(
        <main id='PagLogin' onSubmit={handleSubmit(createUser)}>            
            <h1 className='TituloPagina'>Login</h1>
            <form className="formulario">

                {/* INPUT EMAIL */}
                <div className="campo">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email"
                    id='email'
                    {...register("email")}/>
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                
                {/* INPUT SENHA */}
                <div className='campo'>
                    <label htmlFor="senha">Senha</label>
                    <input type="password"
                    id='senha'
                    minLength={8}
                    {...register("senha")} />
                    {errors.senha && <span>{errors.senha.message}</span>}
                </div>

                {/* BOTÃO */}
                <div className='botao'>
                    <button type='submit'>Entrar</button>
                </div>
            </form>
        </main>
    )
}

export default PaginaLogin;