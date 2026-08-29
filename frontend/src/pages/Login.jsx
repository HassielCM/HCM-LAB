import '../styles/pages/login.css'

import AuthCard from '../components/AuthCard'
import LoginForm from '../components/LoginForm'
import FeatureItem from '../components/FeatureItem'

import {
    Database,
    Code,
    Sparkles,
    FolderGit2,
    Pyramid
} from 'lucide-react'


function Login() {
    return (
        <main className="login-page">

            <section className="login-info">

                <div className="login-intro">

                    <h2>Bienvenido a</h2>

                    <h1>HCM_LAB</h1>

                    <div className="login-accent"></div>

                    <p>
                        Espacio para explorar, crear y conectar ideas.
                    </p>

                </div>


                <div className="login-features">

                    <FeatureItem
                        icon={FolderGit2}
                        title="GitHub"
                        description="Repositorios y control de versiones"
                    />

                    <FeatureItem
                        icon={Pyramid}
                        title="Modelos 3D"
                        description="Personajes, escenarios y objetos"
                    />

                    <FeatureItem
                        icon={Database}
                        title="Base de datos"
                        description="Almacenamiento y gestión de datos"
                    />

                    <FeatureItem
                        icon={Code}
                        title="Código"
                        description="Desarrollo de aplicaciones y software"
                    />

                    <FeatureItem
                        icon={Sparkles}
                        title="IA"
                        description="Potencia tus proyectos con IA"
                    />

                </div>

            </section>


            <section className="login-auth">

                <AuthCard>
                    <LoginForm />
                </AuthCard>

            </section>

        </main>
    )
}


export default Login