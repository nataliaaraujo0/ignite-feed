import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./comment.module.scss";
export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/nataliaaraujo0.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alucard</strong>
              <time title="26 de Junho de 2022" dateTime="2022-06-26 12:13:04">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={2} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir
            <span>28</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
