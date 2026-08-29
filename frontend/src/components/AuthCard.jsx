import '../styles/components/auth-card.css'

function AuthCard({ children }) {
    return (
        <div className="auth-card">
            {children}
        </div>
    )
}


export default AuthCard