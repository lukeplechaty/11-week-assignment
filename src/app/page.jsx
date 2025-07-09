import { PostList } from "../components/PostList";

export default async function Home({ searchParams }) {
  const sort = await searchParams.sort;
  return <PostList sort={sort} />;
}
