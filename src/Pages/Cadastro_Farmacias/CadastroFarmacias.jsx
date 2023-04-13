import React from "react";

const CadastroFarmacia = () => {
    return(
        <div id="CadastroFarm">
            <h1 className="tituloFormFarmacia">Cadastro de Farmácias</h1>
            <form className="formularioFarmacia">
                <div className="campo">
                    <label htmlFor="razaoSocial">Razão social:</label>
                    <input type="text"
                    name="razaoSocial"
                    placeholder="Razão Social"
                    id="razaoSocial"/>
                </div>
                <div className="campo">
                    <label htmlFor="cnpj">CNPJ:</label>
                    <input type="number"
                    name="cnpj"
                    placeholder="00.000.000/0000-00"
                    id="cnpj"/>
                </div>
                <div className="campo">
                    <label htmlFor="nomeFantasia">Nome fantasia:</label>
                    <input type="text"
                    name="nomeFantasia"
                    placeholder=""
                    id="nomeFantasia"/>
                </div>
                <div className="campo">
                    <label htmlFor="email">E-mail:</label>
                    <input type="text"
                    name="email"
                    placeholder="exemplo@exemplo.com"
                    id="email"/>
                </div>
                <div className="campo">
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="number"
                    name="telefone"
                    placeholder="(XX)XXXX-XXXX"
                    id="telefone"/>
                </div>
                <div className="campo">
                    <label htmlFor="celular">Celular:</label>
                    <input type="number"
                    name="celular"
                    placeholder="(XX)XXXX-XXXX"
                    id="celular"/>
                </div>
                <div className="campo">
                    <h3>Endereço</h3>
                    <label htmlFor="logradouro">Logradouro:</label>
                    <input type="text"
                    name="logradouro"
                    placeholder=""
                    id="logradouro"/>
                </div>
                <div className="campo">
                    <label htmlFor="cep">CEP:</label>
                    <input type="number"
                    name="cep"
                    placeholder="00000-000"
                    id="cep"/>
                </div>
                <div className="campo">
                    <label htmlFor="numero">Número:</label>
                    <input type="number"
                    name="numero"
                    placeholder=""
                    id="numero"/>
                </div>
                <div className="campo">
                    <label htmlFor="complemento">Complemento:</label>
                    <input type="text"
                    name="complemento"
                    placeholder=""
                    id="complemento"/>
                </div>
                <div className="campo">
                    <label htmlFor="numero">Bairro:</label>
                    <input type="text"
                    name="bairro"
                    placeholder=""
                    id="bairro"/>
                </div>
                <div className="campo">
                    <label htmlFor="numero">Cidade:</label>
                    <input type="text"
                    name="cidade"
                    placeholder=""
                    id="cidade"/>
                </div>
                <div className="campo">
                    <label htmlFor="estado">Estado:</label>
                    <input type="text"
                    name="estado"
                    placeholder=""
                    id="estado"/>
                </div>                
            </form>

        </div>
    );
}

export default CadastroFarmacia;