import React from "react";
import Rodape from "./Rodape";
import HeaderGlass from "./HeaderGlass";
import './estilo.css';
import './media.css';


export default function PageMultimidia(){
    return(
    <body>
  <div id="interface">
  <header id="cabecalho">
  <hgroup>
  <h1>Google Glass</h1>
  <h2>A revolução do Google está chegando</h2>
  </hgroup>
  <HeaderGlass
    imgFixa = '/imagens/multimidia.png'
  />
  </header>
  <section id="corpo-full">
        <article id="noticia-principal">
     <header id="cabecalho-artigo">
        <hgroup>
        <h3>Glass &nbsp; &gt; &nbsp;  Multimídia</h3>               
        <h1>Sons e Vídeos</h1>          
        <h2>por Gustavo Guanabara</h2>
        <h3 class="data">Atualizado em 01/Maio/2013</h3>
        </hgroup>    
    </header>


<div id="tv-radio">
    <audio id="musica" controls="controls">
        <source src="media/2009-lovers-carvings-bibio.mp3" type="audio/mpeg"/>
        <source src="media/2009-lovers-carvings-bibio.m4a" type="audio/x-aac"/>              
        <source src="media/2009-lovers-carvings-bibio.ogg" type="audio/ogg"/>
        Desculpe mas não foi possivel carregar o audio
    </audio>

    <video id="filme2" controls="controls" poster="imagens/video-mini03.jpg">  
        <source src="media/getting-started.mp4" type="video/mp4"/>
         <source src="media/getting-started.mp4" type="video/webm"/>              
         Desculpe mas não foi possivel carregar o video       
    </video>

</div>
</article>
</section>

<Rodape/>
        </div>
    </body>
 )

}