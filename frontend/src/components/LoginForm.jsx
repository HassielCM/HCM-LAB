import '../styles/components/login-form.css'

import Button from './Button'
import FormField from './FormField'

import { UserRound, LockKeyhole, ArrowRight, UserPlus } from 'lucide-react'

import { useNavigate } from 'react-router-dom'

function LoginForm() {

    const navigate = useNavigate()

    return (
        <div className="login-form">

            <h2>Iniciar sesión</h2>

            <FormField label="Correo electrónico o usuario" type="text" id="usuario" icon={UserRound} />

            <FormField label="Contraseña" type="password" id="password" icon={LockKeyhole} />

            <Button variant="ghost">¿Olvidé mi contraseña?</Button>

            <Button variant="primary" icon={UserRound}>Iniciar sesión</Button>

            <div className="auth-separator">
                <span>o continúa con</span>
            </div>

            <Button variant="secondary" icon={UserPlus} onClick={() => navigate('/register')}>Crear cuenta</Button>

            <Button variant="tertiary" icon={ArrowRight}>Continuar sin sesión</Button>

            <p className="auth-acceptance">Al continuar, aceptas los</p>

            <div className="auth-terms">

                <Button variant="tycs">Términos y condiciones</Button>
                <span> y </span>
                <Button variant="tycs">Política de privacidad</Button>

            </div>

        </div>
    )
}


export default LoginForm