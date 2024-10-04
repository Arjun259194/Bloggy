import CardSection from "@/components/ui/CardSection";
import CardsCarousel from "@/components/ui/catCards";
import { FlipWords } from "@/components/ui/flipWord";
import { HeroParallax } from "@/components/ui/hero-parallex";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { heroCat } from "@/lib/data";

const blogReviews = [
  {
    quote:
      "This blog has completely transformed my mornings! The daily tips and insights are both inspiring and practical. I feel more motivated and organized each day.",
    name: "Emma Johnson", title: "Productivity Enthusiast", },
  {
    quote:
      "I never knew I needed this blog until I stumbled upon it. The articles are thought-provoking and well-researched. It's a treasure trove of knowledge.",
    name: "David Brown",
    title: "Avid Reader",
  },
  {
    quote:
      "The design of the blog is stunning and the content is even better. Each post is engaging and provides actionable advice. Highly recommend to anyone looking to improve their life.",
    name: "Sophia Martinez",
    title: "Lifestyle Blogger",
  },
  {
    quote:
      "What a fantastic resource! The writing is top-notch and the topics are incredibly relevant. I've learned so much and look forward to every new post.",
    name: "James Wilson",
    title: "Knowledge Seeker",
  },
  {
    quote:
      "This blog has become my go-to source for reliable information and fresh perspectives. The authors clearly put a lot of effort into their work and it shows.",
    name: "Olivia Davis",
    title: "Information Junkie",
  },
  {
    quote:
      "Insightful, engaging, and beautifully presented. This blog has something for everyone and never fails to impress. A must-read for anyone who loves learning.",
    name: "Liam Miller",
    title: "Curious Mind",
  },
  {
    quote:
      "I love how this blog covers a wide range of topics with such depth and clarity. The articles are always well-written and leave me feeling more informed and inspired.",
    name: "Isabella Rodriguez",
    title: "Lifelong Learner",
  },
  {
    quote:
      "The best blog I've come across in a long time! The content is both informative and entertaining, making it a joy to read. Keep up the great work!",
    name: "Michael Anderson",
    title: "Content Connoisseur",
  },
  {
    quote:
      "An excellent blog with a perfect mix of creativity and practicality. I appreciate the unique perspectives and the quality of the writing. Definitely worth bookmarking.",
    name: "Mia Thompson",
    title: "Creative Thinker",
  },
  {
    quote:
      "I'm always excited to see a new post on this blog. The insights are valuable and the writing style is captivating. Highly recommended for anyone looking to expand their horizons.",
    name: "Benjamin Garcia",
    title: "Explorer of Ideas",
  },
];

export default function Home() {
  return (
    <main className=" space-y-10">
      <HeroParallax cats={heroCat} />
      <div className="w-full container mx-auto text-gray-800 text-center py-20 text-4xl md:text-6xl font-semibold ">
        <p className="capitalize">The best place to discover</p>
        <FlipWords
          className="font-bold text-gray-900"
          words={[
            "Amazing",
            "Insightful",
            "Inspiring",
            "Innovative",
            "Trending",
            "Unique",
          ]}
        />
        <p className="capitalize">content</p>
      </div>
      <CardsCarousel />
      <div className="flex w-full py-10 justify-center">
        <InfiniteMovingCards speed="slow" items={blogReviews} />
      </div>
      <CardSection />
    </main>
  );
}
