import ItemList from "./components/ItemList";
import SearchForm from "./components/SearchForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h2>All things Star Wars...</h2>
      </div>
      <div className={styles.controls}>
        <SearchForm />
      </div>
      <div className={styles.content}>
        <ItemList />
      </div>
    </main>
  );
}
