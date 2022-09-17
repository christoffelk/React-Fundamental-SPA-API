
import { login } from "../utils/api";
import useInput from "../utils/useInput";

function LoginInput() {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const onSubmitHandler = e => {
        e.preventDefault();
        login({email,password});
    }
    return (
        <form className="input-login" onSubmit={onSubmitHandler}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={onEmailChange} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={onPasswordChange} />
            <button>Login</button>
        </form>
    );
}


export default LoginInput;