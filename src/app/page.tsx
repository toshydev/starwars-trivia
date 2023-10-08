import ItemList from "./components/ItemList";
import SearchForm from "./components/SearchForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Star Wars Trivia</h1>
        <SearchForm />
        <ItemList />
      </div>
    </main>
  );
}
