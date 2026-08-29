import { Routes, Route, useNavigate } from 'react-router-dom'

import AuthCard from '../components/AuthCard.jsx'
import Button from '../components/Button.jsx'


function ComponentGallery() {

    const navigate = useNavigate()

    return (
        <Routes>

            <Route
                path=""
                element={
                    <>
                        <h1>Galería de componentes</h1>

                        <button onClick={() => navigate('/components/authcard')}>
                            Ver AuthCard
                        </button>

                        <button onClick={() => navigate('/components/button')}>
                            Ver Button
                        </button>
                    </>
                }
            />

            <Route
                path="authcard"
                element={
                    <AuthCard>
                        <p>Contenido de prueba para AuthCard</p>
                    </AuthCard>
                }
            />

            <Route
                path="button"
                element={
                    <Button>
                        Click me
                    </Button>
                }
            />

            <Route
                path="*"
                element={
                    <h1>Componente no encontrado</h1>
                }
            />

        </Routes>
    )
}


export default ComponentGallery