// Import do react-hook-form.
import {useForm} from 'react-hook-form';

function CadastroMedicamentos(){
    const{register, handleSubmit, formState:{errors}} = useForm();

    function createCadMedicamento(data){
        console.log(data);
    }

    return(
        <main id="cadMedicamentos">
            <h1>Cadastro de Mediacamentos</h1>
            <form className='formularioMedicamento' onSubmit={handleSubmit(createCadMedicamento)}>

                {/* CAMPO NOME MEDICAMENTO*/}
                <div className="campo">
                    <label htmlFor="nomeMedicamento">Nome do Medicamento:</label>
                    <input type="text"
                    id="nomeMedicamento"
                    {...register("nomeMedicamento", {required: true})}/>
                </div>

                {/* CAMPO NOME LABORATÓRIO*/}
                <div className="campo">
                    <label htmlFor="nomeLab">Nome do Laboratório:</label>
                    <input type="text"
                    id="nomeLab"
                    {...register("nomeLab", {required: true})}/>
                </div>

                {/* CAMPO DOSAGEM*/}
                <div className="campo">
                    <label htmlFor="dosagem">Dosagem do Medicamento:</label>
                    <input type="number"
                    id="dosagem"
                    {...register("dosagem", {required: true})}/>
                </div>

                {/* CAMPO DESCRIÇÃO*/}
                <div className="campo">
                    <label htmlFor="descricao">Descrição do Medicamento:</label>
                    <input type="textarea"
                    {...register("descricao", {required: false})}/>
                </div>

                {/* CAMPO PREÇO UNIDADE*/}
                <div className="campo">
                    <label htmlFor="precoUni">Preço unitário do medicamento:</label>
                    <input type="numbr"
                    id="precoUni"
                    {...register("precoUni", {required: true})}/>
                </div>

                {/* CAMPO TIPO (SELECT)*/}
                <div className="campo">
                    <label htmlFor="tipo">Tipo de Medicamento:</label>
                    <select name="tipo" id="tipo">
                        <option value="default">--Selecione--</option>
                        <option value="comum">Medicamento Comum</option>
                        <option value="controlado">Medicamento Controlado</option>
                    </select>
                </div>

                {/* BOTÃO */}
                <div className='botao'>
                    <button type='submit'>Enviar</button>
                </div>
            </form>
        </main>
    );
}

export default CadastroMedicamentos;