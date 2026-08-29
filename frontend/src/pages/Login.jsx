import '../styles/pages/login.css'
import AuthCard from '../components/AuthCard'

function Login() {
    return (
        <main className="login-page">

            <section className="login-info">
                <h1>Bienvenido a HCM_LAB</h1>
                <p>Espacio de trabajo para el equipo de HCM_LAB</p>
            </section>

            <section className="login-auth">
                <AuthCard />
            </section>

        </main>
    )
}

export default Login