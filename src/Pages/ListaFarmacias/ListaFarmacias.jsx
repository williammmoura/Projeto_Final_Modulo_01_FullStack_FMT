import React from "react";
import {Table} from 'react-bootstrap'
import { useFarmacias } from "../../context/store/Farmacias";

const ListaFarmacias = () => {
    
    const {farmacias} = useFarmacias()

    return(
        <main>
            <h1 className='text-center mb-4'>Lista de Farmácias</h1>
            <Table responsive striped bordered hover>
                <thead className="table-primary">
                    <tr>
                        <th>Razão Social</th>
                        <th>CNPJ</th>
                        <th>Nome Fantasia</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Celular</th>
                        <th>Logradouro</th>
                        <th>CEP</th>
                        <th>Número</th>
                        <th>Complemento</th>
                    </tr>
                </thead>
                <tbody>
                    {farmacias && farmacias.length > 0 ? (
                        farmacias.map((farmacia) => (
                            <tr key={farmacia.id}>
                                <td>{farmacia.razaoSocial}</td>
                                <td>{farmacia.cnpj}</td>
                                <td>{farmacia.nomeFantasia}</td>
                                <td>{farmacia.email}</td>
                                <td>{farmacia.telefone}</td>
                                <td>{farmacia.celular}</td>
                                <td>{farmacia.endereco.logradouro}</td>
                                <td>{farmacia.endereco.cep}</td>
                                <td>{farmacia.endereco.numero}</td>
                                <td>{farmacia.endereco.complemento}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="10">Não há farmácias cadastradas.</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </main>
    )
}

export default ListaFarmacias;
