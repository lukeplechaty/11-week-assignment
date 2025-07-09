import { PostList } from "@/components/PostList";

export default async function PageNumberRoute({ searchParams, params }) {
  const sort = await searchParams.sort;
  return (
    <div>
      <PostList currentPage={parseInt(params.pageNumber, 10)} sort={sort} />
    </div>
  );
}
