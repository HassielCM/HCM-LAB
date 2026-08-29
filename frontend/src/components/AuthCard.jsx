import '../styles/components/auth-card.css'
import Button from './Button'
import FormField from './FormField'
import { UserRound, LockKeyhole, ArrowRight, UserPlus } from 'lucide-react'

function AuthCard() {
    return (
        <div className="auth-card">
            <h2>Iniciar sesión</h2>
                <FormField label="Correo electrónico ó usuario" type="text" id="text" icon={UserRound}/>
                <FormField label="Contraseña" type="password" id="password" icon={LockKeyhole}/>

                <Button variant="ghost">Olvidé mi contraseña</Button>
                
                <div className="auth-separator">
                    <span>o continúa con</span>
                </div>
                
                <Button variant="primary" icon={UserRound}>Iniciar sesión</Button>
                <Button variant="secondary" icon={UserPlus}>Crear cuenta</Button>
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

export default AuthCard