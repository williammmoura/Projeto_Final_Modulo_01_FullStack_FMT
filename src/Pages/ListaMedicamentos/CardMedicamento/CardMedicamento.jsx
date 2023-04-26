import React, {useState} from "react";
import { Button, Card } from "react-bootstrap";
import CxMed from '../../../assets/Caixa_Med_Ilustra.png';
import { Modal } from "../../../components/Modal/Modal";

export const CardMedicamento = ({medicamento}) => {
    const [openModal, setOpenModal] = useState(false)
    return(
        <>
            <Card className="card" style={{ width: '280px' }}>
                <Card.Header>
                    <h2>{medicamento.nomeMedicamento}</h2>
                    <h4>Laboratório: {medicamento.nomeLab}</h4>
                </Card.Header>
                <Card.Img src={CxMed} style={{width: '100px', display:'block', marginLeft: 'auto', marginRight: 'auto'}} alt="Caixa de remédio ilustrativa"/>
                <Card.Body>
                    <Card.Text>
                        {medicamento.descricao}
                    </Card.Text>
                    <Card.Text>
                        {medicamento.dosagem}mg
                    </Card.Text>
                    <Card.Text>
                        R${medicamento.precoUni}
                    </Card.Text>
                    <Card.Text>
                        {medicamento.tipo}
                    </Card.Text>
                    <Button onClick={() => setOpenModal(true)}>
                        Abrir
                    </Button>
                </Card.Body>            
            </Card>

            <Modal
                open={openModal} 
                onClose={() => setOpenModal(false)}
                title={medicamento.nomeMedicamento}
            >
                <p>
                    {medicamento.descricao}
                </p>
            </Modal>
        </>                     
    )
}