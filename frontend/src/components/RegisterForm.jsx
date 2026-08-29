import '../styles/components/register-form.css'

import Button from './Button'
import FormField from './FormField'

import {
    UserRound,
    Mail,
    LockKeyhole,
    UserPlus,
    LogIn
} from 'lucide-react'


function RegisterForm() {
    return (
        <div className="register-form">

            <h2>Crear cuenta</h2>

            <FormField
                label="Nombre de usuario"
                type="text"
                id="register-usuario"
                icon={UserRound}
            />

            <FormField
                label="Correo electrónico"
                type="email"
                id="register-email"
                icon={Mail}
            />

            <FormField
                label="Contraseña"
                type="password"
                id="register-password"
                icon={LockKeyhole}
            />

            <FormField
                label="Confirmar contraseña"
                type="password"
                id="register-password-confirm"
                icon={LockKeyhole}
            />

            <Button variant="primary" icon={UserPlus}>
                Crear cuenta
            </Button>

            <div className="register-separator">
                <span>¿Ya tienes una cuenta?</span>
            </div>

            <Button variant="secondary" icon={LogIn}>
                Iniciar sesión
            </Button>

            <p className="register-acceptance">
                Al crear una cuenta, aceptas los
            </p>

            <div className="register-terms">

                <Button variant="tycs">
                    Términos y condiciones
                </Button>

                <span> y </span>

                <Button variant="tycs">
                    Política de privacidad
                </Button>

            </div>

        </div>
    )
}


export default RegisterForm