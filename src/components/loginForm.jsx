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
    return (
        <button className="formButton">ENVIAR A COCINA</button>
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