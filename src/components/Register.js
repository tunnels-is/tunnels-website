import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { API } from "../lib/api";
import STORE from "../store";

const useForm = (props) => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const handleSubmit = async () => {
        let errors = {}
        let hasErrors = false

        if (!inputs["email"]) {
            errors["email"] = "Email/Username missing"
            hasErrors = true
        }

        if (inputs["email"]) {
            if (inputs["email"].length > 320) {
                errors["email"] = "Maximum 320 characters"
                hasErrors = true
            }

            if (!tokenLogin) {
                if (!inputs["email"].includes(".") || !inputs["email"].includes("@")) {
                    errors["email"] = "Invalid email format"
                    hasErrors = true

                }
            }
        }

        if (!inputs["password"]) {
            errors["password"] = "Password missing"
            hasErrors = true
        }
        if (!inputs["password2"]) {
            errors["password2"] = "Password confirm missing"
            hasErrors = true
        }

        if (inputs["password"] !== inputs["password2"]) {
            errors["password2"] = "Passwords do not match"
            hasErrors = true
        }

        if (inputs["password"]) {
            if (inputs["password"].length < 10) {
                errors["password"] = "Minimum 10 characters"
                hasErrors = true
            }
            if (inputs["password"].length > 255) {
                errors["password"] = "Maximum 255 characters"
                hasErrors = true
            }
        }

        if (hasErrors) {
            setErrors({ ...errors })
            return
        }


        try {
            const response = await API.post("login", JSON.stringify(inputs));
            await response.data

            setErrors({})
            navigate("/");

        } catch (error) {
            console.dir(error)
        }



    }


    const handleInputChange = (event) => {
        event.persist();
        console.log("setting input: ", event.target.name, event.target.value)
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }


    return {
        inputs,
        handleInputChange,
        handleSubmit,
        errors,
        navigate,
    };
}


const Register = (props) => {

    const { inputs, handleInputChange, handleSubmit, errors, navigate } = useForm(props);

    const user = STORE.Cache.GetObject("user");
    if (user) {
        return (<Navigate replace to="/login" />)
    }

    const navigateToLogin = () => {
        navigate("/login")
    }

    return (
        <div className="register-page">

            {errors["email"] &&
                <div className="error email-error">
                    {errors["email"]}<br />
                </div>
            }
            {errors["password"] &&
                <div className="error password-error">
                    {errors["password"]}<br />
                </div>
            }
            {errors["password2"] &&
                <div className="error password2-error">
                    {errors["password2"]}<br />
                </div>
            }


            <input className="input email-input"
                autocomplete="off"
                placeholder={"Username"}
                type="text"
                value={inputs["email"]}
                name="email"
                onChange={handleInputChange} />

            <input className="input pass-input"
                placeholder={"Password"} type="password"
                value={inputs["password"]}
                name="password"
                onChange={handleInputChange} />


            <input className="input pass2-input"
                type="password"
                placeholder={"Confirm Password"}
                value={inputs["password2"]}
                name="password2"
                onChange={handleInputChange} />


            <button className={`login-button`}
                onClick={handleSubmit}
            >Confirm</button>

            <button className="register-button"
                onClick={navigateToLogin} >Login</button>

        </div >
    )
}

export default Register;