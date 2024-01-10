import FollowingModal from "@/components/following-modal";
import { fetchProfile } from "@/lib/data";

async function FollowingPage({ params: { username } }) {
  const profile = await fetchProfile(username);
  const following = profile?.following;

  return <FollowingModal following={following} username={username} />;
}

export default FollowingPage;
