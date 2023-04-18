// Import do react-hook-form.
import {useForm} from 'react-hook-form';

function CadastroFarmacia(){
    const{register, handleSubmit, formState:{errors}} = useForm();

    function createFarmacia(data){
        console.log(data);
    }

    return(
        <main id="CadastroFarm">
            <h1 className="tituloFormFarmacia">Cadastro de Farmácias</h1>
            <form className="formularioFarmacia" onSubmit={handleSubmit(createFarmacia)}>
                
                {/* CAMPO RAZÃO SOCIAL*/}
                <div className="campo">
                    <label htmlFor="razaoSocial">Razão social:</label>
                    <input type="text"
                    id="razaoSocial"
                    {...register("razaoSocial", {required: true})}/>
                    <span>*</span>
                </div>

                {/* CAMPO CNPJ*/}
                <div className="campo">
                    <label htmlFor="cnpj">CNPJ:</label>
                    <input type="number"
                    id="cnpj"
                    placeholder="00.000.000/0000-00"
                    {...register("cnpj", {required: true})}/>
                    <span>*</span>
                </div>

                {/* CAMPO NOME FANTASIA*/}
                <div className="campo">
                    <label htmlFor="nomeFantasia">Nome fantasia:</label>
                    <input type="text"
                    id="nomeFantasia"
                    {...register("nomeFantasia", {required: true})}/>
                    <span>*</span>
                </div>

                {/* CAMPO E-MAIL*/}
                <div className="campo">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email"
                    id="email"
                    placeholder="exemplo@exemplo.com"
                    {...register("email", {required: true})}/>
                    <span>*</span>
                </div>

                {/* CAMPO TELEFONE*/}
                <div className="campo">
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel"
                    id="telefone"
                    placeholder="(XX)XXXX-XXXX"
                    {...register("telefone", {required: false})}/>
                    <span>*</span>
                </div>

                {/* CAMPO CELULAR*/}
                <div className="campo">
                    <label htmlFor="celular">Celular:</label>
                    <input type="tel"
                    id="celular"
                    placeholder="(XX)XXXX-XXXX"
                    {...register("celular", {required: false})}/>
                    <span>*</span>
                </div>

                {/* CAMPO LOGRADOURO*/}
                <div className="campo">
                    <h3>Endereço:</h3>
                    <label htmlFor="logradouro">Logradouro:</label>
                    <input type="text"
                    id="logradouro"
                    {...register("logradouro", {required: true})}/>
                    <span>*</span>
                </div>

                {/* CAMPO CEP*/}
                <div className="campo">
                    <label htmlFor="cep">CEP:</label>
                    <input type="number"
                    id="cep"
                    placeholder="00000-000"
                    {...register("cep", {required: true})}/>
                    <span>*</span>
                </div>

                {/* CAMPO NÚMERO*/}
                <div className="campo">
                    <label htmlFor="numero">Número:</label>
                    <input type="number"
                    id="numero"
                    {...register("numero", {required: true})}/>
                    <span>*</span>
                </div>

                {/* CAMPO COMPLEMENTO*/}
                <div className="campo">
                    <label htmlFor="complemento">Complemento:</label>
                    <input type="text"
                    id="complemento"
                    placeholder="Apto.:000 / bloco: x"
                    {...register("complemento", {required: false})}/>
                </div>

                {/* CAMPO BAIRRO*/}
                <div className="campo">
                    <label htmlFor="bairro">Bairro:</label>
                    <input type="text"
                    id="bairro"
                    {...register("bairro", {required: true})}/>
                    <span>*</span>
                </div>

                {/* CAMPO CIDADE*/}
                <div className="campo">
                    <label htmlFor="cidade">Cidade:</label>
                    <input type="text"
                    id="cidade"
                    {...register("cidade", {required: true})}/>
                    <span>*</span>
                </div>

                {/* CAMPO ESTADO*/}
                <div className="campo">
                    <label htmlFor="estado">Estado:</label>
                    <input type="text"
                    id="estado"
                    {...register("estado", {required: true})}/>
                    <span>*</span>
                </div>

                {/* BOTÃO */}
                <div className='botao'>
                    <button type='submit'>Enviar</button>
                </div>                
            </form>
        </main>
    );
}

export default CadastroFarmacia;