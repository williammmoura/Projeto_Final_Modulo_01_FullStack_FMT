import React from "react";
import {useMedicamentos} from "../../context/store/Medicamentos"
import { Card, Container } from "react-bootstrap";
import CxMed from '../../assets/Caixa_Med_Ilustra.png';
import { CardMedicamento } from "./CardMedicamento/CardMedicamento";

export const ListaMedicamentos = () => {

    const {medicamentos} = useMedicamentos()

    return(
        <Container>
            
            <h1 className='text-center mb-4'>Informações dos Medicamentos</h1>

            {medicamentos && medicamentos.length > 0 ? (
                <div style={{display:'flex', flexWrap:'wrap', gap: 20}}>
                    {medicamentos.map((medicamento) => (
                    <CardMedicamento 
                        key={medicamento.id}
                        medicamento={medicamento}
                    />
                ))}
                </div>         
            ) : (
                <p>Não há remedios cadastrados.</p>
            )}
            
        </Container>
    )
}