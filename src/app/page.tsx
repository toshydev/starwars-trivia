import ItemList from "./components/ItemList";
import SearchForm from "./components/SearchForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchForm />
      <div className={styles.content}>
        <ItemList />
      </div>
    </main>
  );
}
