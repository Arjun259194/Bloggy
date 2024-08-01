"use client";
import { Blog, Like, Rating } from "@prisma/client";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import RatingButton from "./dashboard/user/RatingButton";
import { likeBlog } from "@/lib/actions";
import { toastPromise } from "@/util";

interface Props extends Blog {
  likes: Like[];
  ratings: Rating[];
  sessionUserId: string;
}

const BlogPostAction: React.FC<Props> = (props) => {
  const handleLike = () => {
    const p = likeBlog(props.sessionUserId, props.id);
    toastPromise(p);
  };

  return (
    <div className="flex items-center justify-evenly space-x-4">
      <Button className="space-x-2" onClick={handleLike} variant="ghost">
        <Heart
          className={`w-8 h-8 mr-1 ${props.likes.map((l) => l.userId).includes(props.sessionUserId) ? "text-pink-500" : ""}`}
        />
        <span className="text-lg">{props.likes.length}</span>
      </Button>
      <RatingButton {...props} />
    </div>
  );
};

export default BlogPostAction;
