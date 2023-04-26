import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap'
import {useForm} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMedicamentos } from '../../context/store/Medicamentos';
import { Input } from '../../components/Input/Input';
import { SubmitButton } from '../../components/Button/Button';

// Validação dos campos do formulário
const createCadMedicamentosSchema = z.object({
    nomeMedicamento: z.string()
        .nonempty('Campo obrigatório'),
    nomeLab: z.string()
        .nonempty('Campo obrigatório'),
    dosagem: z.string()
        .nonempty('Campo obrigatório'),
    descricao: z.string(),
    precoUni: z.string()
        .nonempty('Campo obrigatório'),
});

const CadastroMedicamentos = () => {
    
    // Usando Contexto
    const { createMedicamento } = useMedicamentos()

    // Usando o useForm
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ resolver: zodResolver(createCadMedicamentosSchema) });


    // FUNÇÃO SALVAR MEDICAMENTOS NO locasStorage
    const salvarMedicamentos = (medicamento) => {
        createMedicamento(medicamento)
        reset()
    }

    return(
        <Container className="d-flex justify-content-center align-items-center vh-90">

            <Form className='formularioMedicamento' onSubmit={handleSubmit(salvarMedicamentos)}>

                        <h1 className='text-center mb-4'>Cadastro de Mediacamentos</h1>

                <Row className='mb-3'>
                    <Form.Group as={Col}>
                        <Input
                            name="nomeMedicamento"
                            label="Nome Medicamento:"
                            id="nomeMedicamento"
                            error={errors.nomeMedicamento && errors.nomeMedicamento.message}
                            {...register("nomeMedicamento")}
                        />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Input
                            name="nomeLab"
                            label="Nome do Laboratório:"
                            id="nomeLab"
                            error={errors.nomeLab && errors.nomeLab.message}
                            {...register("nomeLab")}
                        />
                    </Form.Group>
                </Row>

                <Row className='mb-3'>
                    <Form.Group as={Col}>    
                        <Input
                            name="dosagem"
                            label="Dosagem do Medicamento:"
                            id="dosagem"
                            error={errors.dosagem && errors.dosagem.message}
                            {...register("dosagem")}
                        />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Input
                            name="precoUni"
                            label="Preço Unitário:"
                            id="precoUni"
                            error={errors.precoUni && errors.precoUni.message}
                            {...register("precoUni")}
                        />
                    </Form.Group>    
                </Row>

                <Row className='mb-4'>
                    <Form.Group as={Col}>
                        <Input style={{ height: '100px' }}
                            name="descricao"
                            label="Descrição:"
                            id="descricao"
                            cols="95"
                            rows="8"
                            error={errors.descricao && errors.descricao.message}
                            {...register("descricao")}
                        />
                    </Form.Group>
                </Row>

                <Row className='mb-4'>
                    <Form.Group as={Col}>
                        <div className="campo">
                            <label htmlFor="tipo">Tipo de Medicamento:</label>
                            <Form.Select name="tipo" id="tipo">
                                <option value="default">--Selecione--</option>
                                <option value="comum">Medicamento Comum</option>
                                <option value="controlado">Medicamento Controlado</option>
                            </Form.Select>
                        </div>
                    </Form.Group>
                </Row>

                <SubmitButton label="Enviar"/>

            </Form>
        </Container>    
    );
}

export default CadastroMedicamentos;