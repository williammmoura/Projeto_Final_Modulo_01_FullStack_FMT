import React from 'react';
import { Col, Container, Form, Row, Figure } from 'react-bootstrap'
import {useForm} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../context/store/Auth';
import { Input } from '../../components/Input/Input';
import { SubmitButton } from '../../components/Button/Button';
import Logo from '../../assets/Logo_PCS.png';

// Validação
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
        <Container className="d-flex justify-content-center align-items-center vh-100" >            
            
            <Figure.Image
                width={500}
                height={180}
                alt="Logo"
                src={Logo}
            />
            
            <Form onSubmit={handleSubmit(createUser)}>

                
                <Col className='mt-5'> 
                    <Form.Group as={Row} className='mb-3'>
                        <Input
                            name="email"
                            label="E-mail:"
                            type="email"
                            id="email"
                            placeholder="exemplo@exemplo.com"
                            {...register("email")}
                            error={errors.email && errors.email.message}
                        />
                    </Form.Group>

                    <Form.Group as={Row} className='mb-3'>
                        <Input
                            name="senha"
                            label="Senha:"
                            type="password"
                            id="senha"
                            {...register("senha")}
                            error={errors.email && errors.email.message}
                        />
                    </Form.Group>
                </Col>

                <SubmitButton label='Entrar' />                
            
            </Form>
        </Container>
    )
}

export default PaginaLogin;