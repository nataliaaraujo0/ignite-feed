import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./comment.module.scss";
import { Avatar } from "../Avatar";

export function Comment({ content }) {
  function handleDeleteComment() {
    console.log("deletar");
  }
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/nataliaaraujo0.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alucard</strong>
              <time title="26 de Junho de 2022" dateTime="2022-06-26 12:13:04">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
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
