import { useContext, useState } from "react";
import { signInAPI } from "../../apis";
import AppContext from "../../AppContext";

const SignInForm = () => {
  const { dispatch } = useContext(AppContext);

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { msg, userDetails, token } = await signInAPI({ phoneNumber });
      alert(msg);
      localStorage.setItem("user", JSON.stringify(userDetails));
      localStorage.setItem("token", token);
      dispatch({ type: "user_logged_in", userDetails });
    } catch (e) {
      console.log(e);
      alert(e.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
