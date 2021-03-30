import styles from "../styles/home.module.css";

export default function GenreButton({ genre, handleRemoveGenre }) {
  return <button onClick={() => handleRemoveGenre(genre)}>{genre}</button>;
}
