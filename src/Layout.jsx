// Simple Layout with SideBar for Address, Login/Sign Up
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { useState } from "react";

const Layout = () => {
  const [addressOpen, setAddressOpen] = useState(false);

  const handleAddressOpen = () => {
    if (addressOpen) {
      setAddressOpen(false);
    } else {
      setAddressOpen(true);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <button onClick={handleAddressOpen}>Change Address</button>
        <button>Sign In</button>
      </header>
      {addressOpen && (
        <>
          <aside className={styles.addressOverlay}>
            <button onClick={handleAddressOpen}>Close</button>
          </aside>
          <div className={styles.greyOverlay}></div>
        </>
      )}
      <main>
        <Outlet />
      </main>
      {/* <aside></aside> */}
    </>
  );
};

export default Layout;
