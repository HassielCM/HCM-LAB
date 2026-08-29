import '../styles/pages/register.css'

import AuthCard from '../components/AuthCard'
import RegisterForm from '../components/RegisterForm'


function Register() {
    return (
        <main className="register-page">

            <section className="register-info">

                <h1>Únete a HCM_LAB</h1>

                <p>
                    Crea una cuenta para acceder a tu espacio personal
                </p>

            </section>

            <section className="register-auth">

                <AuthCard>
                    <RegisterForm />
                </AuthCard>

            </section>

        </main>
    )
}


export default Register