import { useMutation } from "@apollo/client";
import { useState } from "react";
import { LOGIN_MUTATION } from "./quieries/loginQuery";
import { LoginResponse } from "./quieries/loginQuery";
import 'font-awesome/css/font-awesome.min.css';
import "./css/login.css";

const LoginMutation: React.FC = () => {
    const [username, setUsername] = useState('');    //son-kiv-gr1.pnseb
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState(''); // To hold error messages
    const [showPassword, setShowPassword] = useState(false);

    //useMutation hook for login mutation
    const [login, { data, loading, error }] = useMutation<LoginResponse>(LOGIN_MUTATION);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate if username or password is empty
        if (!username.trim() || !password.trim()) {
            setErrorMessage('Both fields are required.');
            return; // Stop the form submission
        }
        

        // Clear any previous error messages
        setErrorMessage('');


        try {

            console.log({ username, password })
            // Call the login mutation with the input variables
            const response = await login({
                variables: {
                    input: { username, password },
                },
            });

            console.log(response)

            //Handle successful login response
            if (response.data) {
                console.log('Login successful:', response.data);
                localStorage.setItem('access_token', response.data.login.access_token);
                alert('Login successful');
            }
        } catch (err) {
            console.error('Login failed:', err);
            alert('Login failed');
        }

    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    //handle form submission
    return (
        <div className="login-container">
            <h3 className="login-title">Login</h3>
            <form onSubmit={handleSubmit} className="login-form" >
                <input type="text" value={username} className="login-input" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />

                <div className="password-container">
                    <input
                        type={showPassword ? "text" : "password"} // Toggle the type
                        value={password}
                        className="pw-input"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" className="password-toggle-button" onClick={togglePasswordVisibility}>
                        <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                    </button>
                </div>


                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <button type="submit" className="login-button">Login</button>
            </form>

            {loading && <p>Loading: {loading}</p>}
            {error && <p>Error: {error.message}</p>}
            {data && <p>Logged in as {data.login.user.sup_name}</p>}
        </div>

    )
}
export default LoginMutation;