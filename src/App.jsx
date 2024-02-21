import styles from "./App.module.css";
import { BossTimer } from "./components/BossTimers/BossTimer";
import { Contact } from "./components/Contact/Contact";
import { EventHelper } from "./components/EventHelper/EventHelper";
import { Experience } from "./components/Experience/Experience";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <BossTimer />
      <EventHelper />

      <Contact />
    </div>
  );
}

export default App;
