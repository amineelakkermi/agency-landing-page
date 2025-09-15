import styles from "../styles/style";

export default function MainTitle({ title, span, restTitle }) {
  return (
    <h1 className={`${styles.title} mb-6 text-primary`}>
      {title}
      {span && <span className="text-blue-500">{span}</span>}
      {restTitle}
    </h1>
  );
}
