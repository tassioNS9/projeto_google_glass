import React from 'react';
import HeaderGlass from './HeaderGlass';
import HeaderSecundario from './HeaderSecundario';
import Rodape from './Rodape';
import './estilo.css';


export default function PageHome(){
    return(
        <>
       <body>
  <div id="interface">
  <header id="cabecalho">
  <hgroup>
  <h1>Google Glass</h1>
  <h2>A revolução do Google está chegando</h2>
  </hgroup>
  <HeaderGlass
  imgFixa='/imagens/glass-oculos-preto-peq.png'
  />
  </header>

  <section id="corpo">
  <article id="noticia-principal">
  <HeaderSecundario/>
 
  
<h2 style={{textAlign:"left"}}>O que é</h2>   
<p>         
O <span style ={{textDecoration: "overline"}}>Google Glass</span> é um acessório em forma de óculos que possibilita a interação dos usuários com diversos conteúdos em realidade
 aumentada. Também chamado de <a href="http://google.com" target="_blank">Project Glass</a>, o eletrônico é capaz de tirar fotos a partir de comandos de voz, enviar mensagens 
 instantâneas e realizar vídeo&shy;con&shy;ferên&shy;cias. Seu lançamento está previsto para 2014, e seu preço deve ser de US$ 1,5 mil. 
 Atualmente o Google Glass encontra-se em fase de testes e já possui um vídeo totalmente gravado com o dispositivo.
  Além disso, a companhia de buscas registrou novas patentes anti-furto e de desbloqueio de tela para o acessório.</p>

  <figure className="foto-legenda">
  <img src="imagens/glass-quadro-homem-mulher.jpg"/>
  <figcaption>         
      <h3>Google Glass</h3> 
      <p>Uma nova maneira de ver o mundo.</p>
  </figcaption>
</figure>

<h2>Data de lançamento</h2>
Não há uma data específica e oficial para o dispositivo ser lançado, ainda. Pode ser que ele esteja disponível em demonstrações a partir de 2013, mas seu lançamento para as lojas fica para, pelo menos, 2014.

<h2>Especificações Técnicas</h2>
<table id="tabelaspec">
<caption>Tabela Técnica do Google Glass <span>Mar/2013</span></caption>

<tr><td className="ce">Tela</td><td className="cd">Resolução equivalente a tela de 25"</td></tr>
<tr><td className="ce" rowspan="2">Camera</td> <td className="cd">5MP para fotos</td></tr> 
<tr><td className="cd"> 720p para vídeos</td></tr>            
<tr><td className="ce" rowspan="2">Conectividade</td><td className="cd"> Wi-Fi</td></tr>
<tr><td className="cd"> Bluetooth</td></tr>
<tr><td className="ce">Memória Interna</td><td className="cd"> 12GB</td></tr>
</table>

<h2>Como funciona</h2>
<p>De acordo com fontes próximas do Google, os óculos vão contar com uma pequena tela de LCD ou AMOLED na parte 
superior e em frente aos olhos do usuário. Com o uso de uma câmera e GPS, você pode se situar, assim como selecionar 
opções com o movimento da cabeça</p>

<h2>O que você pode fazer com o Google Glasses</h2>

<p>O vídeo de divulgação do Google mostra que você pode se 
transformar em uma espécie de “super-humano”, já que o aparelho pode indicar 
a quantos metros você está de seu destino, se o metrô está aberto ou fechado,
 mostrar o clima, agenda e até mesmo permitir que você marque encontros apenas 
 com comandos de voz.</p>

 <video id="filme" controls="controls" poster="imagens/video-mini01.jpg"> 
        <source src="media/one-day.mp4" type="video/mp4"/>
         <source src="media/one-day.mp4" type="video/webm"/>             
         Desculpe mas não foi possivel carregar o video        
    </video>
</article>
  </section>
  
  <aside id="lateral">
<h1>Outras Notícias</h1>
<h2>Vídeo mais recente</h2>

<video id="filme" controls="controls" poster="imagens/video-mini02.jpg"> 
        <source src="media/how-it-feels.mp4" type="video/mp4"/>
         <source src="media/how-it-feels.mp4" type="video/webm"/>             
         Desculpe mas não foi possivel carregar o video        
    </video>

<h2>Novidades no Glass</h2>
<p> O Google enfim revelou as especificações completas do Google Glass, e 
com ele uma surpresa ainda inédita no mercado: a gigante das buscas usará 
um sistema de áudio baseado na transdução por condução. Através das hastes dos 
óculos, o som será transmitido para o ouvido do usuário por meio de microvibrações 
em determinados ossos de sua cabeça, sem usar nenhum tipo de alto-falante.</p> 

<p> Além da surpresa do áudio, a tela montada a frente do olho do usuário também 
chamou atenção. Serão 640 x 360 pixels de resolução que, em proporção, equivaleria a 
um monitor de 25 polegadas de alta definição colocado a 2,5 metros de distância do espectador.</p>
</aside>
<Rodape/>
</div>
  </body>
        </>
    )
}