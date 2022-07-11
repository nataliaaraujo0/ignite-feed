import styles from "./avatar.module.scss";
export function Avatar(props) {
  return (
    <div className={styles.Avatar}>
      <img
        className={props.hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={props.src}
      />
    </div>
  );
}
