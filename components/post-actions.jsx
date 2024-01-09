import { cn } from "@/lib/utils";
import ActionIcon from "@/components/action-icon";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import LikeButton from "./like";
import ShareButton from "./share-button";
import BookmarkButton from "./bookmark-button";

function PostActions({ post, userId, className }) {
  console.log("post,", post);
  console.log(",userId", userId);
  return (
    <div className={cn("relative flex items-start w-full gap-x-2", className)}>
      <LikeButton post={post} userId={userId} />
      <Link href={`/dashboard/p/${post.id}`}>
        <ActionIcon>
          <MessageCircle className={"h-6 w-6"} />
        </ActionIcon>
      </Link>
      <ShareButton postId={post.id} />
      <BookmarkButton post={post} userId={userId} />
    </div>
  );
}

export default PostActions;
