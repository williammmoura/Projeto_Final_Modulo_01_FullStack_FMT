import React from "react";

const CadastroMediacamentos = () => {
    return(
        <div id="cadMedicamentos">
            <h1>Cadastro de Mediacamentos</h1>
            <form>
                <div className="campo">
                    <label htmlFor="nomeMedicamento">Nome do Medicamento:</label>
                    <input type="text"
                    name="nomeMedicamento"
                    placeholder=""
                    id="nomeMedicamento"/>
                </div>
                <div className="campo">
                    <label htmlFor="nomeLab">Nome do Laboratório:</label>
                    <input type="text"
                    name="nomeLab"
                    placeholder=""
                    id="nomeLab"/>
                </div>
                <div className="campo">
                    <label htmlFor="dosagem">Dosagem do medicamento:</label>
                    <input type="number"
                    name="dosagem"
                    placeholder=""
                    id="dosagem"/>
                </div>
                <div className="campo">
                    <label htmlFor="descricao">Descrição do Medicamento:</label>
                    <input type="textarea"
                    name="descricao"
                    placeholder=""
                    id="descricao"/>
                </div>
                <div className="campo">
                    <label htmlFor="precoUni">Preço unitário do medicamento:</label>
                    <input type="numbr"
                    name="precoUni"
                    placeholder=""
                    id="precoUni"/>
                </div>
                <div className="campo">
                    <label htmlFor="tipo">Tipo de medicamento:</label>
                    <select name="tipo" id="tipo">
                        <option value="default">--Selecione--</option>
                        <option value="comum">Medicamento Comum</option>
                        <option value="controlado">Medicamento Controlado</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default CadastroMediacamentos