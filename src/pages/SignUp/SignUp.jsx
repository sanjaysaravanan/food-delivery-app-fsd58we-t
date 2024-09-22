import { useState } from "react";
import { signUpAPI } from "../../apis";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    fullName: "",
    pincode: "",
    addressLine1: "",
    area: "",
    addressType: "Home",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { msg } = await signUpAPI(formData);
      alert(msg);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Signup Form</h2>
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
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pincode" className="form-label">
            Pincode
          </label>
          <input
            type="text"
            className="form-control"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Enter your pincode"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="addressLine1" className="form-label">
            Address Line 1
          </label>
          <input
            type="text"
            className="form-control"
            id="addressLine1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            placeholder="Enter address line 1"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="area" className="form-label">
            Area
          </label>
          <input
            type="text"
            className="form-control"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Enter area"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="addressType" className="form-label">
            Address Type
          </label>
          <select
            className="form-select"
            id="addressType"
            name="addressType"
            value={formData.addressType}
            onChange={handleChange}
          >
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
