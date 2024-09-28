// Simple Layout with SideBar for Address, Login/Sign Up
import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { useContext, useState } from "react";
import AuthTabs from "./pages/AuthTabs";
import AppContext from "./AppContext";

const Layout = () => {
  const { state, dispatch } = useContext(AppContext);

  const [addressOpen, setAddressOpen] = useState(false);
  const [signOpen, setSignOpen] = useState(false);

  const handleAddressOpen = () => {
    if (addressOpen) {
      setAddressOpen(false);
    } else {
      setAddressOpen(true);
    }
  };

  const handleSignForm = () => {
    if (signOpen) {
      setSignOpen(false);
    } else {
      setSignOpen(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch({ type: "user_logout" });
  };

  return (
    <>
      <header className={styles.header}>
        <button onClick={handleAddressOpen}>Change Address</button>
        <Link to="/cart">
          <button>Go To Cart</button>
        </Link>

        <button onClick={state.isAuthenticated ? handleLogout : handleSignForm}>
          {state.isAuthenticated ? "Logout" : "Sign In"}
        </button>
      </header>
      <aside
        className={styles.slide}
        style={{
          width: addressOpen ? "300px" : "0px",
        }}
      >
        {addressOpen && (
          <>
            <button onClick={handleAddressOpen}>Close</button>
          </>
        )}
      </aside>
      <aside
        className={`${styles.slide} ${styles.signForm}`}
        style={{
          width: signOpen ? "400px" : "0px",
        }}
      >
        {signOpen && (
          <>
            <button onClick={handleSignForm}>Close</button>
            <AuthTabs />
          </>
        )}
      </aside>
      {(addressOpen || signOpen) && <div className={styles.greyOverlay}></div>}
      <main>
        <Outlet />
      </main>
      {/* <aside></aside> */}
    </>
  );
};

export default Layout;
