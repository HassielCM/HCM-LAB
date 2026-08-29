import '../styles/components/button.css';

function Button({ children, onClick, type = 'button', variant = 'primary', icon: Icon }) {

    return (
        <button
            className={`btn btn-${variant}`}
            onClick={onClick}
            type={type}
        >

            {Icon && <Icon className="icon-content" />}

            {children}

        </button>
    );
}


export default Button;