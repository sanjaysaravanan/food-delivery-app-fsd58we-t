import { useState } from "react";
import SignupForm from "./SignUp/SignUp";
import SignInForm from "./SignIn/SignIn";

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState("signIn");

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Authentication</h2>

      {/* Tabs */}
      <ul className="nav nav-tabs justify-content-center mb-4" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "signIn" ? "active" : ""}`}
            onClick={() => setActiveTab("signIn")}
          >
            Sign In
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "signUp" ? "active" : ""}`}
            onClick={() => setActiveTab("signUp")}
          >
            Sign Up
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "signIn" && (
          <div className="tab-pane fade show active">
            <SignInForm />
          </div>
        )}
        {activeTab === "signUp" && (
          <div className="tab-pane fade show active">
            <SignupForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthTabs;
