import React from 'react';
import HeaderGlass from './HeaderGlass';
import Rodape from './Rodape';
import './estilo.css';
import './specs.css';

function PageEspecifics() {
    // linha 45 <iframe src="google-glass.html"  name="janela" id="frame-spec"></iframe>
    return (
        <>
            <body>
                <div id="interface">
                    <header id="cabecalho">
                        <hgroup>
                            <h1>Google Glass</h1>
                            <h2>A revolução do Google está chegando</h2>
                        </hgroup>
                        <HeaderGlass
                            imgFixa='imagens/especificacoes.png'
                        />
                    </header>

                    <section id="corpo-full">
                        <article id="noticia-principal">
                            <header id="cabecalho-artigo">
                                <hgroup>
                                    <h3>Glass &nbsp; &gt; &nbsp; Especificações</h3>
                                    <h1>Raio-X no Google Glass</h1>
                                    <h2>por Gustavo Guanabara</h2>
                                    <h3 className="data">Atualizado em 01/Maio/2013</h3>
                                </hgroup>
                            </header>

                            <p>Clique em qualquer área destacada da imagem para ter mais informações sobre os recursos do Google Glass.
                                Qualquer ponto vermelho vai te levar a um lugar cheio de novas informações.</p>

                            <section id="conteudo">
                                <img src="imagens/glass-esquema-marcado.jpg" alt="glass-esquema-marcado" useMap="#meumapa" />
                                <map name="meumapa">
                                    <area shape="rect" coords="179,202,270,260" alt='tela' href="google-glass.html#tela" target="janela" />
                                    <area shape="circle" coords="158,243,12" alt='camera' href="google-glass.html#camera" target="janela" />
                                    <area shape="circle" coords="73,52,12" alt='gadgets' href="google-glass.html#gadgets" target="janela" />
                                    <area shape="poly" coords="28,143,83,216,84,249,27,169" alt='sensores' href="google-glass.html#sensores" target="janela" />
                                </map>


                            </section>
                        </article>
                    </section>
                    <Rodape />
                </div>
            </body>
        </>
    )
}

export default PageEspecifics;
