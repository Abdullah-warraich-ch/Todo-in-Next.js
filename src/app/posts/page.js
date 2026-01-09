import { notFound } from "next/navigation";
export default async function posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { validate: 30 },
  });
  if (!res.ok) {
    notFound();
  }
  const posts = await res.json();

  const Firt10Posts = posts.slice(0, 10);

  return (
    <div>
      <h1>Posts Page</h1>
      <ul>
        {Firt10Posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
