import "./Tag.css";

// export default function Tag({ tag }) {
//   return <li className="tag">{tag}</li>;
// }

export default function Tag({ tag }) {
  return <li className={tag === "admin" ? "tag--highlight" : "tag"}>{tag}</li>;
}
