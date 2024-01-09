import { fetchPostById } from "@/lib/data";
import EditPost from "@/components/edit-post";
import { notFound } from "next/navigation";

async function EditPostPage({ params: { id } }) {
  const post = await fetchPostById(id);

  if (!post) {
    notFound();
  }

  return <EditPost id={id} post={post} />;
}

export default EditPostPage;
