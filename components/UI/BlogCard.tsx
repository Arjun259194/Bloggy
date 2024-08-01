"use client";
import { Blog, Category, Like, Rating } from "@prisma/client";
import React from "react";
import { Heart, MessageSquare, Share2, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { likeBlog } from "@/lib/actions";
import { toastPromise } from "@/util";
import CommentButton from "../dashboard/user/CommentButton";
import RatingButton from "../dashboard/user/RatingButton";

interface Props extends Blog {
  category: Category | null;
  likes: Like[];
  ratings: Rating[];
  sessionUserId: string;
}

const BlogCard: React.FC<Props> = (props) => {
  const handleLike = () => {
    const p = likeBlog(props.sessionUserId, props.id);
    toastPromise(p);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, x: -200 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="px-6 py-4 space-y-3">
        <Link href={`/blog/${props.id}`}>
          <h2 className="font-bold hover:underline text-xl">{props.title}</h2>
        </Link>
        <Badge variant="outline">
          {props.category?.name ?? "Not category"}
        </Badge>
        <p className="text-gray-700 text-base">
          {props.content.length > 100
            ? props.content.substring(0, 100) + "..."
            : props.content}
        </p>
      </div>
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button onClick={handleLike} variant="ghost" size="icon">
            <Heart
              className={`w-6 h-6 mr-1 ${props.likes.map((l) => l.userId).includes(props.sessionUserId) ? "text-pink-500" : ""}`}
            />
            {props.likes.length}
          </Button>
          <RatingButton {...props} />
          <CommentButton blogId={props.id} userId={props.sessionUserId}>
            <Button variant="ghost" size="icon">
              <MessageSquare className="w-6 h-6 mr-1" />
            </Button>
          </CommentButton>
        </div>
      </div>
    </motion.div>
  );
};

// <Button onClick={handleRate} variant="ghost" size="icon">
//   <Star className="w-6 h-6 mr-1" />
// </Button>

export default BlogCard;
