import '../styles/components/form-field.css'
import Button from './Button'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'


function FormField({ label, type, id, icon: Icon }) {

    const [contraseniaVisible, setContraseniaVisible] = useState(false)

    const inputType = type === 'password' && contraseniaVisible ? 'text' : type
    
    function alternarContrasenia() {
        setContraseniaVisible(anterior => !anterior)
    }

    return (
        <div className="form-field">

            {Icon && (<Icon className="form-field-icon" />)}

            <input
                type={inputType}
                id={id} 
                placeholder=" "
            />

            <label htmlFor={id}>
                {label}
            </label>

            <div className="form-field-end-action">
                {type === 'password' && (
                    <Button variant="icon" onClick={alternarContrasenia}>
                        {contraseniaVisible ? <EyeOff /> : <Eye />}
                    </Button>
                )}
            </div>

        </div>
    )
}

export default FormField