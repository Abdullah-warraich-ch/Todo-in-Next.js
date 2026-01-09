import Link from "next/link";
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">about</Link>
          <Link href="/contact">contact</Link>
          <Link href="/counter">counter</Link>
          <Link href="/profile/John">profile</Link>
          <Link href="/posts">Posts</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
