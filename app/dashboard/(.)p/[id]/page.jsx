import PostView from "@/components/post-view";
import { fetchPostById } from "@/lib/data";
import { notFound } from "next/navigation";

async function PostModal({ params: { id } }) {
  const post = await fetchPostById(id);

  if (!post) {
    notFound();
  }

  return <PostView id={id} post={post} />;
}

export default PostModal;
