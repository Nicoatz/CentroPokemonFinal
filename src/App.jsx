import Header from './components/HeaderAdmin'
import Footer from './components/Footer'

import Home from './pages/Home'
import Registro from './pages/Registro'
import ListaPokemon from './pages/ListaPokemon'
import Pokedex from './pages/Pokedex'
import Login from './pages/Login'


import { Routes, Route } from 'react-router-dom'

function App() {

    let sesion = sessionStorage.getItem('Sesion')
    console.log(sesion)

    return (
        <>
            {/* <Header /> */}

            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/registro' element={<Registro />} />
                <Route path='/lista' element={<ListaPokemon />} />
                <Route path='/pokedex' element={<Pokedex />} />
            </Routes>

            {/* <Footer /> */}
        </>
    )
}


export default App
