import axios from "axios";
import { useState } from "react";

export default function LoginForm(props) {
  //it holds whatever the user types
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // console.log("what are these?", email, setEmail);

  //function to submit the form
  const handleSubmit = (event) => {
    //it prevents the form from refreshing the page
    event.preventDefault();
    // call login function
    login();
  };

  // function to post the login email and password to the backend trough axios
  const login = async () => {
    // clg to see if email and passw contain right data
    console.log(email, password);
    // declare var for the response
    const response = await axios.post("http://localhost:4000/auth/login", {
      email: email,
      password: password,
    });
    console.log("login response", response);
  };

  return (
    <div>
      <form>
        <p>Login here:</p>
        <p>
          <label>
            Email:
            <input
              //input value is the email address
              value={email}
              // on change / inserting and submitting the email we declare a function that takes a parameter event that returns
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </p>

        <p>
          <label>
            Password:
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </p>
        <p>
          <button onClick={handleSubmit}>
            Send email and password to be validated
          </button>
        </p>
      </form>
    </div>
  );
}
