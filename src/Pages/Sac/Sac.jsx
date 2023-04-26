import React from 'react';
import  { Accordion } from 'react-bootstrap';

export const Sac = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Como cadastrar novos medicamento e farmácias?</Accordion.Header>
                    <Accordion.Body>
                        Para cadastrar novos medicamentos e farmácias, você precisa ir na barra de menu e escolholher a opção "Cadastro Farmácias" ou "Cadastro Medicamentos". Ná opção escolhida terá um formulário, onde você deve preencher todos os campos obrigatórios e clicar no botão "Enviar". 
                    </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>Onde consigo visualisar as farmácias ou medicamentos cadastrados?</Accordion.Header>
                    <Accordion.Body>
                        Para você visualizar as farmácias ou medicamentos cadastrado, basta navegar pela barra horizontal do menu e ir na opção "Lista de farmácias" para ver as farmácias cadastradas, ou ir em "Informações dos Medicamentos" para ver os medicamentos cadastrados. 
                    </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>O que é razão social da empresa?</Accordion.Header>
                    <Accordion.Body>
                        A razão social é o nome sob o qual uma empresa se identifica para se diferenciar das demais.
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}