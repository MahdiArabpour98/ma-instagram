import PostsGrid from "@/components/posts-grid";
import { fetchSavedPostsByUsername } from "@/lib/data";

async function SavedPosts({ params: { username } }) {
  const savedPosts = await fetchSavedPostsByUsername(username);
  const posts = savedPosts?.map((savedPost) => savedPost.post);

  return <PostsGrid posts={posts} />;
}

export default SavedPosts;
