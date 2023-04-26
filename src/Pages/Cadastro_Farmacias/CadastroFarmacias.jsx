import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFarmacias } from '../../context/store/Farmacias';
import { Input } from '../../components/Input/Input';
import { SubmitButton } from '../../components/Button/Button';
import { Container, Form, Row, Col } from 'react-bootstrap';

// Validação dos campos do formulário
const createCadFarmaciasSchema = z.object({
    razaoSocial: z.string()
        .nonempty('Campo obrigatório'),
    cnpj: z.string()
        .nonempty('Campo obrigatório')
        .min(14),
    nomeFantasia: z.string()
        .nonempty('Campo obrigatório'),
    email: z.string()
        .nonempty('O e-mail é obrigatório')
        .email('Informe um e-mail válido'),
    telefone: z.string()
        .nonempty('Campo obrigatório'),
    celular: z.string()
        .nonempty('Campo obrigatório'),
    endereco: z.object({
        logradouro: z.string()
            .nonempty('Campo obrigatório'),
        cep: z.string()
            .nonempty('Campo obrigatório'),
        numero: z.string()
            .nonempty('Campo obrigatório'),
        bairro: z.string()
            .nonempty('Campo obrigatório'),
        localidade: z.string()
            .nonempty('Campo obrigatório'),
        uf: z.string()
            .nonempty('Campo obrigatório'),
        complemento: z.string()
    })    
});

const CadastroFarmacias = () => {

    const [carregandoCep, setCarregandoCep] = useState(false)
    
    // Usando Contexto
    const { createFarmacia } = useFarmacias()

    // Usando o useform
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        reset,
        setFocus,
        formState: { errors }
    } = useForm({ resolver: zodResolver(createCadFarmaciasSchema) });

    const verificaCEP = () => {
        setCarregandoCep(true);
        const endereco = getValues("endereco")
        fetch(`https://viacep.com.br/ws/${endereco.cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setCarregandoCep(false);
                setValue('endereco', {
                    logradouro: data.logradouro,
                    bairro: data.bairro,
                    localidade: data.localidade,
                    uf: data.uf,
                    cep: endereco.cep,
                    numero: endereco.numero,
                    complemento: data.complemento || endereco.complemento
                })
                setFocus("endereco.numero");
            })
    }

    // FUNÇÃO SALVAR FARMÁCIAS NO locasStorage
    const salvarFarmacias = (farmacia) => {
        createFarmacia(farmacia)
        reset()
    }

    return(
        <Container className="d-flex justify-content-center align-items-center vh-90">
            
            <Form className="formularioFarmacia" onSubmit={handleSubmit(salvarFarmacias)}>

                <h1 className='text-center mb-4'>Cadastro de Farmácias</h1>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Input
                            name="razaoSocial"
                            label="Razão social:"
                            error={errors.razaoSocial && errors.razaoSocial.message}
                            {...register("razaoSocial")}
                        />
                    </Form.Group>    
        
                    <Form.Group as={Col}>
                        <Input
                            name="cnpj"
                            label="CNPJ:"
                            placeholder="00.000.000/0000-00"
                            type="number"
                            error={errors.cnpj && errors.cnpj.message}                    
                            {...register("cnpj")}
                        />
                    </Form.Group>
                
                    <Form.Group as={Col}>
                        <Input
                            name="nomeFantasia"
                            label="Nome Fantasia:"
                            error={errors.nomeFantasia && errors.nomeFantasia.message}
                            {...register("nomeFantasia")}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
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

                    <Form.Group as={Col}> 
                        <Input
                            name="telefone"
                            label="Telefone:"
                            type="tel"
                            id="telefone"
                            placeholder="(XX)XXXX-XXXX"
                            {...register("telefone")}
                            error={errors.telefone && errors.telefone.message}
                        />
                        </Form.Group>
                        
                        <Form.Group as={Col}>                   
                            <Input
                                name="celular"
                                label="Celular:"
                                type="tel"
                                id="celular"
                                placeholder="(XX)XXXX-XXXX"
                                {...register("celular")}
                                error={errors.celular && errors.celular.message}
                            />
                        </Form.Group>
                </Row>
                    {/* ENDEREÇO */}
                    <Form id='endereco'>

                        <h3 className='text-center mt-3'>Endereço:</h3>

                        <Form.Group className= 'mt-4 mb-3 text-center'>    
                            <Input 
                                name="endereco.cep"
                                label="CEP:"
                                placeholder="00000-000"
                                type="number"
                                maxLength={8}
                                error={errors.endereco?.cep && errors.endereco?.cep?.message}
                                {...register("endereco.cep", {
                                    onChange: (event) => {
                                        const value = event.target.value
                                        if (value.length === 8) {
                                            verificaCEP()
                                        }
                                    },

                                })}
                            />
                            {carregandoCep && <p>Buscando endereço...</p>}
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Input
                                    name="endereco.logradouro"
                                    label="Logradouro:"
                                    type="text"
                                    {...register("endereco.logradouro")}
                                    error={errors.endereco?.logradouro && errors.logradouro?.message}
                                />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Input
                                    name="endereco.bairro"
                                    label="Bairro:"
                                    type="text"
                                    {...register("endereco.bairro")}
                                    error={errors.endereco?.bairro && errors.bairro?.message}
                                />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Input
                                    name="endereco.cidade"
                                    label="Cidade:"
                                    type="text"
                                    {...register("endereco.cidade")}
                                    error={errors.endereco?.cidade && errors.cidade?.message}
                                />
                            </Form.Group>
                        </Row>

                        <Row className='mb-4'>
                            <Form.Group as={Col}>
                                <Input
                                    name="endereco.uf"
                                    label="Estado:"
                                    type="text"
                                    {...register("endereco.uf")}
                                    error={errors.endereco?.uf && errors.uf?.message}
                                />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Input
                                    name="endereco.numero"
                                    label="Numero:"
                                    type="number"
                                    {...register("endereco.numero")}
                                    error={errors.endereco?.numero && errors.numero?.message}
                                />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Input
                                    name="endereco.complemento"
                                    label="Complemento:"
                                    type="text"
                                    {...register("endereco.complemento")}
                                    error={errors.endereco?.complemento && errors.complemento?.message}
                                />
                            </Form.Group>
                        </Row>
                    </Form>
                
                    <SubmitButton label="Enviar"/>

            </Form>
        </Container>
    );
}

export default CadastroFarmacias;