import styles from "./avatar.module.scss";
export function Avatar(props) {
  const hasBorder = props.hasBorder !== false;

  return (
    <div className={styles.Avatar}>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={props.src}
      />
    </div>
  );
}
