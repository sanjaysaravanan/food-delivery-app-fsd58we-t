import RestrauntCard from "../../components/RestrauntCard/RestrauntCard";
import styles from "./Home.module.css";

const restraunts = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

const Home = () => {
  return (
    <div className={styles.root}>
      {restraunts.map((v, index) => (
        /* ToDo: Change to proper unique value for key */
        <RestrauntCard key={index} />
      ))}
    </div>
  );
};

export default Home;
