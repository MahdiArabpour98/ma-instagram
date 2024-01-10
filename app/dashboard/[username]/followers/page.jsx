import FollowersModal from "@/components/followers-modal";
import { fetchProfile } from "@/lib/data";

async function FollowersPage({ params: { username } }) {
  const profile = await fetchProfile(username);
  const followers = profile?.followedBy;

  return <FollowersModal followers={followers} username={username} />;
}

export default FollowersPage;
