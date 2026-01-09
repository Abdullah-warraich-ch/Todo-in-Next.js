import Link from "next/link";
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1>Posts Section</h1>
        <nav>
          <Link href="/">Posts</Link>
          <Link href="/posts">Posts.Posts</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
