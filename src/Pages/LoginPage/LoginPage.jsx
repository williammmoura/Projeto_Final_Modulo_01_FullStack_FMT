import React, {useState} from "react";
// Importação do CSS
import "./LoginPage.css"

const LoginPage = () => {
    const alertas = {
        
    }

    // Usando o "hook" useState para mudança de estado do email.
    const[email, setEmail] = useState("");
    // Usando o "hook" useState para mudança de estado do email.
    const[senha, setSenha] = useState("");
    
    // Mapear o evento de "Entrar". Essa função será colocada no "form"
    const handleSubmit = (evento) =>{
        evento.preventDefault();
    }

    return(
        <div id="login">
            <h1 className="tituloLogin">Login</h1>

            {/* FORMULÁRIO DE LOGIN */}
            <form className="formulario" onSubmit={handleSubmit}>
                <div className="campo">
                    {/* Campo de E-mail */}
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" 
                    name="email"
                    placeholder="exemplo@exemplo.com" 
                    id="email" 
                    // "set" o valor no state
                    value={email}
                    // Definindo o valor no state
                    onChange={(evento) => setEmail(evento.target.value)}/>
                </div>

                <div className="campo">
                    {/* Campo de Senha */}
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" 
                    name="senha"
                    placeholder="********" 
                    id="senha"
                    // "set" o valor no state 
                    value={senha}
                    // Definindo o valor no state
                    onChange={(evento) => setSenha(evento.target.value)}/>
                </div>

                <div className="botao">
                    {/* Botão */}
                    <button type="submit">Entrar</button>
                </div>
            </form>

        </div>
    );
};

export default LoginPage;