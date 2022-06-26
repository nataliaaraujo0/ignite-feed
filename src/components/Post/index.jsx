import styles from "./post.module.scss";
import avatar from "../../assets/avatar.png";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={avatar} />
          <div className={styles.authorInfo}>
            <strong>Alucard</strong>
            <span>WEB Developer</span>
          </div>
        </div>
        <time title="26 de Junho de 2022" dateTime="2022-06-26 12:13:04">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}
        </p>
        <p>
          <a href="">👉 jane.design/doctorcare </a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}