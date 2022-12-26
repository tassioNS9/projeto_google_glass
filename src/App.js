import React,{useState} from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import PageContactUs from './componentes/PageContactUs';
import PageHome from './componentes/PageHome';
import PageEspecifics from './componentes/PageEspecifics';
import PagePicture from './componentes/PagePicture';
import PageMultimidia from './componentes/PageMultimidia';

function App() {
  return (
    <>
  
    <Switch>
            <Route exact path='/' component={PageHome}/>
            <Route path='/especifics' component={PageEspecifics}/>
            <Route path='/multimidia' component={PageMultimidia}/>
            <Route path='/fotos' component={PagePicture}/>
            <Route path='/faleconosco' component={PageContactUs}/>
    </Switch>
    </>
  )
}

export default App;
