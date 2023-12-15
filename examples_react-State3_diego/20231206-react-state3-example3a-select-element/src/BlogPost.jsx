// Write a react function component called BlogPost that takes
// - a title and an author as props
// and returns an <article> with inside:
// - the title in an <h2>
// - the author in a <p>

export default function BlogPost({ title, author }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{author}</p>
    </article>
  );
}
