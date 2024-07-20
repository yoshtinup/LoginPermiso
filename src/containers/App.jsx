import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ConexWeb from '../pages/conexionWeb';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ConexWeb/>}/>  
            </Routes>
        </BrowserRouter>
     );
}

export default App;