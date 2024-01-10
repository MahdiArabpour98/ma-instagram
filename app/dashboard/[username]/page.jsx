import PostsGrid from "@/components/posts-grid";
import { fetchPostsByUsername } from "@/lib/data";

async function ProfilePage({ params: { username } }) {
  const posts = await fetchPostsByUsername(username);

  return <PostsGrid posts={posts} />;
}

export default ProfilePage;
