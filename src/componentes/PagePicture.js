import React from "react";
import HeaderGlass from "./HeaderGlass";
import Rodape from "./Rodape";
import './estilo.css';
import './fotos.css';


export default function PagePicture() {
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
                            imgFixa='imagens/fotos.png'
                        />
                    </header>

                    <section id="corpo-full">
                        <article id="noticia-principal">
                            <header id="cabecalho-artigo">
                                <hgroup>
                                    <h3>Glass &nbsp; &gt; &nbsp; Fotos</h3>
                                    <h1>Galeria de Imagens do Google Glass</h1>
                                    <h2>por Gustavo Guanabara</h2>
                                    <h3 className="data">Atualizado em 01/Maio/2013</h3>
                                </hgroup>
                            </header>

                            <p>Veja na nossa galeria de fotos várias belas imagens que mostram algumas das principais características do Google Glass,
                                como recursos e propriedades que estão impressionando o mundo inteiro. Basta passar o mouse sobre uma das fotos para ver uma
                                versão ampliada e com uma breve descrição.</p>

                            <ul id="album-fotos">
                                <li id="foto01"><span>Agenda e lembretes</span></li>
                                <li id="foto02"><span>Sergey Brin usando o Glass</span></li>
                                <li id="foto03"><span>Leve e compacto</span></li>
                                <li id="foto04"> <span>Sensação de uma tela de 50"</span></li>
                                <li id="foto05"><span> Vários tipos de lente</span></li>
                                <li id="foto06"> <span>Informações importantes</span></li>
                            </ul>
                        </article>
                    </section>
                    <Rodape />
                </div>
            </body>
        </>
    )
}