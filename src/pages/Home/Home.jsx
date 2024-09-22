import { useContext, useEffect, useState } from "react";
import RestrauntCard from "../../components/RestrauntCard/RestrauntCard";
import styles from "./Home.module.css";
import AppContext from "../../AppContext";
import { getAllRestrauntsAPI } from "../../apis";

const Home = () => {
  const { state } = useContext(AppContext);

  const [restraunts, setRestraunts] = useState([]);

  useEffect(() => {
    const loadRestraunts = async () => {
      const data = await getAllRestrauntsAPI();
      setRestraunts(data);
    };
    if (state.isAuthenticated) {
      loadRestraunts();
    } else {
      setRestraunts([]);
    }
  }, [state.isAuthenticated]);

  return (
    <>
      <h2>List Of Restraunts</h2>
      <div className={styles.root}>
        {restraunts.map((v, index) => (
          /* ToDo: Change to proper unique value for key */
          <RestrauntCard key={index} restaurant={v} />
        ))}
        {restraunts.length === 0 && <h3>Login To See the Restraunts</h3>}
      </div>
    </>
  );
};

export default Home;
