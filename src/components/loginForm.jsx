import { useNavigate } from "react-router-dom"

function CreateUserInput () {
    return (
        <input placeholder="ingresa tu usuario" className="inputs"></input> 
    )
}

function CreatePassInput () {
    return (
        <input placeholder="ingresa tu contraseña" className="inputs"></input> 
    )
}

function CreateFormButton () {
    const navigate = useNavigate()
    return (
        <button className="formButton" onClick={()=>navigate("/waiter")}>INICIAR SESIÓN</button>
    )
}


function CreateLoginForm () {
    return (
        <form className="loginForm">
            <CreateUserInput/>
            <CreatePassInput/>
            <CreateFormButton/>
        </form>
    )
}

export default CreateLoginForm