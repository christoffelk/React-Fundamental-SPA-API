import { register } from "../utils/api";
import useInput from "../utils/useInput";

function RegisterInput()
{
    const [name,onNameChange] =useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const onSubmitHandler = e => {
        e.preventDefault();
        register({name,email,password});
    }
    return(
        <form onSubmit={onSubmitHandler} className="input-register">
            <input type="text" placeholder="Nama" value={name} onChange={onNameChange} id="name"/>
            <input type="email" placeholder="Email" value={email} onChange={onEmailChange} id="email"/>
            <input type="password" placeholder="Password" autoComplete="current-password" id="password" value={password} onChange={onPasswordChange}/>
            <button>Register</button>
        </form>
    )
}


export default RegisterInput;