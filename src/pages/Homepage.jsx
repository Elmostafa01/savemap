import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
        Wander the world's wonders, while <span>Savemap</span> of your journeys
        </h1>
        <h2>
        Track and remember your global travels on a world map. Showcase your adventures to friends and cherish your memorable experiences.
        </h2>

        <Link to="/app" className="cta">
          start now
        </Link>
      </section>
    </main>
  );
}
