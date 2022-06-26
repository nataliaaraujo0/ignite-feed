import { Header } from "./components/Header";
import "../styles/global.scss";
import styles from "./app.module.scss";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Naruto"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dolorum nesciunt dolore repellendus, modi, voluptatum qui officia dignissimos nulla aliquam molestias ipsa eveniet id esse tenetur ad nostrum libero consequatur!"
          />
        </main>
      </div>
    </>
  );
}

export default App;
