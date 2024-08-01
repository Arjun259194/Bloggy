import { Blog, Comment, Like, Rating } from "@prisma/client";
import { Heart } from "lucide-react";

interface Props extends Blog {
  likes: Like[];
  ratings: Rating[];
  sessionUserId: string
}

const BlogPostAction: React.FC<Props> = (props) => {
  return (
    <div className="flex justify-between">
      <div className={`${props.likes.map(l => l.userId).includes(props.sessionUserId) ? "text-pink-500" : "text-gray-500"}`}>
        <Heart />
        {props.likes.length}
      </div>
    </div>
  );
};

export default BlogPostAction;
