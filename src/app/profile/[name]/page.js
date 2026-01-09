export default async function profile({ params }) {
  const { name } = await params;
  return <h1>Welcome {name}</h1>;
}
