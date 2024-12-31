import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { InputMassRegister, REGISTER_MUTATION } from "./quieries/registerQuery";
import { COUNTRY_MUTATION, CountryResponse } from "./quieries/countryAddress";
import { GENDER_MUTATION, GenderResponse } from "./quieries/gender";
import "./css/register.css";

const RegisterMutationComp: React.FC = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [country, setCountry] = useState('');
    const [headFam, setHeadFam] = useState(false);


    const [errorMessage, setErrorMessage] = useState(''); // To hold error messages

    //form ma dekhaune wala UI ma dekhaune wala
    const [displayBirthday, setDisplayBirthday] = useState('')

    const [massRegister, { data, loading, error }] = useMutation<{}, InputMassRegister>(REGISTER_MUTATION);

    //to get country and gender data
    const { data: countrydata } = useQuery<CountryResponse>(COUNTRY_MUTATION);
    const { data: genderdata } = useQuery<GenderResponse>(GENDER_MUTATION);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!firstname || !lastname || !birthday || !gender || !country) {
            setErrorMessage("Please fill in all the fields");
            return;  // Prevent form submission if validation fails
        }

        if (!/^[A-Za-z]+$/.test(firstname) || !/^[A-Za-z]+$/.test(lastname)) {    //regex for validation
            setErrorMessage("Name should only contain alphabetic characters.");
            return;
        }
        if (firstname.length <= 3 || lastname.length <= 3) {
            setErrorMessage('Name must be at least 3 characters long.');
            return; // Prevent form submission if firstname is too short
        }

        try {
            const response = await massRegister({
                variables: {
                    input: {
                        data: [{
                            first_name: firstname,
                            last_name: lastname,
                            birthday,
                            country,
                            gender,
                            head_of_family: headFam
                        }],
                    },

                }
            })
            if (response.data) {
                console.log('Login successful:', response.data);
                // localStorage.setItem('access_token', response.data.register.tokens.access_token);
                alert('Register successful');
            }

        } catch (err) {
            alert("Register failed");
        }

    }
    // console.log(birthday)

    const toggleSwitch = () => {
        setHeadFam(!headFam);
    };

    const handleDate = (selectedDate: string) => {
        const sanitizeDate = selectedDate.replace(/-/g, "");
        console.log(sanitizeDate)
        setBirthday(sanitizeDate);
        setDisplayBirthday(selectedDate);
    }

    return (
        <div className="register-container">
            <h3 className="register-title">Register</h3>
            <form onSubmit={handleSubmit} className="register-form" >

                <input type="text" className="register-input" placeholder="Enter Firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                <input type="text" className="register-input" placeholder="Enter Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />

                <input type="date" className="register-input" value={displayBirthday} onChange={(e) => handleDate(e.target.value)} />


                <select value={gender} onChange={(e) => setGender(e.target.value)} className="register-input">
                    <option value="" disabled selected>Select your gender</option>
                    {genderdata?.getGenders.map((gen) => (
                        <option key={gen.id} value={gen.gender.toLowerCase()}>{gen.gender}</option>
                    ))}
                </select>

                <select value={country} onChange={(e) => setCountry(e.target.value)} className="register-input">
                    <option value="" disabled selected >Select country</option>
                    {countrydata?.getCountries.map((coun) => (
                        <option value={coun.code}>{coun.name}</option>
                    ))}
                </select>

                {/* On/Off Switch for Head of Family */}
                <div className="toggle-container">
                    <label htmlFor="headOfFamilySwitch" className="toggle-label" >Head of the Family</label>
                    <div
                        id="headOfFamilySwitch"
                        onClick={toggleSwitch}
                        className={`toggle-switch ${headFam ? "active" : ""}`}
                    >
                        <div className="toggle-circle"></div>
                    </div>
                </div>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <button type="submit" className="register-button">Register</button>
            </form>

            {loading && <p>Loading :{loading}</p>}
            {error && <p>Error: {error.message} </p>}
            {data && <p>Registered</p>}
        </div >
    )
}
export default RegisterMutationComp;