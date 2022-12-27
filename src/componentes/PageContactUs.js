import React, { useState } from "react";
import HeaderGlass from "./HeaderGlass";
import Rodape from "./Rodape";
import './estilo.css';
import './form.css';



export default function PageContactUs() {
    const [qtd, setQtd] = useState(0);
    const [cor, setCor] = useState("#0000FF");
    var total = qtd * 1500;


    return (
        <body>
            <div id="interface">
                <header id="cabecalho">
                    <hgroup>
                        <h1>Google Glass</h1>
                        <h2>A revolução do Google está chegando</h2>
                    </hgroup>
                    <HeaderGlass
                        imgFixa='imagens/contato.png'
                    />
                </header>
                <section id="corpo-full">
                    <article id="noticia-principal">
                        <header id="cabecalho-artigo">
                            <hgroup>
                                <h3>Fale Conosco &nbsp; &gt; &nbsp; Contato</h3>
                                <h1>Formulário de Contato</h1>
                                <h2>por Gustavo Guanabara</h2>
                                <h3 class="data">Atualizado em 01/Maio/2013</h3>
                            </hgroup>
                        </header>

                        <form method="post" id="fContato" action="tassio:contato@cursoemvideo.com" >
                            <fieldset id="usuario">
                                <legend>Identificação do Usuário</legend>
                                <p><label for="cName"> Nome:</label><input type="text" name="tName" id="cName" size="20" maxLength="30" placeholder="Nome Completo" /></p>
                                <p><label for="cSenha">Senha:</label><input type="password" tName="tSenha" id="cSenha" size="8" maxLength="8" placeholder="Senha" /></p>
                                <p><label for="cEmail"> E-mail:</label><input type="email" tName="tEmail" id="cEmail" size="20" maxLength="40" placeholder="Email" /></p>
                                <fieldset id="sexo"><legend> Sexo:</legend>
                                    <input type="radio" name="tSexo" id="cMasc" /><label for="cMasc"> Masculino</label> <br />
                                    <input type="radio" name="tSexo" id="cFem" /><label for="cFem"> Feminino</label>
                                </fieldset>
                                <p> Data de Nascimento:<input type="date" name="tNasc" id="cNasc" /><label for="cFem"></label></p>
                            </fieldset>

                            <fieldset id="endereco">
                                <legend>Endereço do Usuário</legend>
                                <p><label for="cEnd">Logradouro:</label><input type="text" name="tEnd" id="cEnd" size="20" maxLength="30" placeholder="Rua,Ave.." /></p>
                                <p><label for="cNum"> Número:</label> <input type="number" name="nEnd" id="cNum" min="0" max="999" /></p>
                                <p><label for="cEstado">Estado:</label>
                                    <select name="tEstado" id="cEstado">
                                        <optgroup label="Região Sudeste">
                                            <option value="RJ">Rio de Janeiro</option>
                                            <option value="SP" selected >São Paulo</option>
                                            <option value="MG">Minas Gerais</option>
                                        </optgroup>
                                        <optgroup label="Região Nordeste">
                                            <option value="BA">Bahia</option>
                                            <option value="SE">Sergipe</option>
                                            <option value="AL">Alagos</option>
                                        </optgroup>

                                    </select></p>

                                <p><label for="cCity"> Cidade:</label>
                                    <input type="text" name="tCity" id="cCity" size="20" maxLength="40" placeholder="Nome Cidade" list="citys" /></p>
                                <datalist id="citys">
                                    <option value="Rio de Janeiro"></option>
                                    <option value="Bahia"></option>
                                    <option value="Sergipe"></option>
                                    <option value="Georgina"></option>
                                    <option value="Alagos"></option>
                                </datalist>
                            </fieldset>

                            <fieldset id="mensagem">
                                <legend> Mensagem do Usuário</legend>
                                <p><label for="cUrg">Grau de Urgência:&nbsp;&nbsp;</label>
                                    Min<input type="range" name="tUrg" id="cUrg" minLength="0" maxLength="10" step="2" />Max</p>

                                <p><label for="cMsg">Mensagem:</label></p>
                                <textarea name="tMsg" id="cMsg" cols="45" rows="10" placeholder="Deixe aqui sua Menssagem"></textarea>
                            </fieldset>

                            <fieldset id="pedido">
                                <legend>Quero um Google Glass</legend>
                                <p><input type="checkbox" name="tPed" id="cPed" defaultChecked />
                                    <label for="cPed">Gostaria de adquirir um Google Glass quando disponível</label></p>
                                <p><label for="cCor"> Cor:</label>
                                    <input type="color" name="tColor" id="cColor" value={cor} onChange={(e) => setCor(e.target.value)} />

                                </p>
                                <p><label for="cquant">Quantidade:</label>
                                    <input type="number" name="tQtd" id="cQtd" min="0" max="5" value={qtd} onChange={(e) => setQtd(e.target.value)} />
                                </p>
                                <p><label for="cPreco">Preço Total: R$</label>
                                    <input type="text" name="tTot" id="cTot" placeholder="Total a Pagar" value={total} readOnly /></p>

                                <button type="button" className="btn-primary" onClick={() => alert('Formulario enviado')}>Enviar</button>
                            </fieldset>

                        </form>
                    </article>
                </section>
                <Rodape />
            </div>
        </body>
    )
}