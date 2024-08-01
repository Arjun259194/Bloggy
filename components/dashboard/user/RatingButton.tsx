import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { createRating } from "@/lib/actions";
import toast from "react-hot-toast";
import { toastPromise } from "@/util";
import { Blog, Rating } from "@prisma/client";

interface Props extends Blog {
  sessionUserId: string;
  ratings: Rating[];
}

const RatingButton: React.FC<Props> = (props) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    if (rate > 5 || rate < 1) return toast.error("Not valid rating");
    setRating(rate);
  };

  useEffect(() => {
    const existingRating = props.ratings.find(
      (r) => r.userId === props.sessionUserId,
    );
    if (!existingRating) return;
    setRating(() => existingRating.value);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Star className="w-6 h-6 mr-1" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rate this Blog</DialogTitle>
          <DialogDescription>
            Please select a rating between 1 and 5 stars.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-4 space-x-2">
          {[1, 2, 3, 4, 5].map((rate) => (
            <Star
              key={rate}
              className={`h-8 w-8 cursor-pointer ${rating >= rate ? "text-yellow-500" : "text-gray-300"}`}
              onClick={() => handleRating(rate)}
            />
          ))}
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              onClick={(e) => {
                e.preventDefault();
                const p = createRating({
                  userId: props.sessionUserId,
                  blogId: props.id,
                  value: rating,
                });
                toastPromise(p);
              }}
            >
              Submit
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RatingButton;
