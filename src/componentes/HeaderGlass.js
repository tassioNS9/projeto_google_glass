import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './estilo.css';


export default function HeaderGlass(props){
 
    const[mudar,setMudar]= useState(props.imgFixa);
    return(
        <>    
        <img id="icone" alt="icone"  src={mudar}/>
        
        <nav id="menu">  
        <h1>Menu Principal</h1>
    <ul type="disc" onMouseOut={()=>setMudar(props.imgFixa)}>
        <li onMouseOver={()=>setMudar("imagens/home.png")} > <Link to= '/'>Home</Link></li>
        <li onMouseOver={()=>setMudar('imagens/especificacoes.png')} > <Link to ='/especifics' > Especificações</Link></li>
        <li onMouseOver={()=>setMudar('imagens/fotos.png')} >  <Link to='/fotos' >Fotos</Link></li>
        <li onMouseOver={()=>setMudar('imagens/multimidia.png')} > <Link to ='/multimidia' > Multimídia</Link></li>      
        <li onMouseOver={()=>setMudar('imagens/contato.png')} ><Link to= '/faleconosco'>Fale conosco</Link></li>
    </ul>
   
    </nav>
  
    </>
    )
}