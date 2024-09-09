"use client"
import BlogCard from "@/components/BlogCard";
import { WholeWord } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
        setBlogs(result.posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures fetch runs only once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="grid items-center justify-items-center min-h-screen  bg-slate-400 dark:bg-black p-1 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-5/6 lg:w-3/5 md:pt-0 pt-20">
        {blogs.map((blog)=>{
          return <BlogCard key={blog.id} {...blog}/>
        })}
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Shreykumar1/Blogs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WholeWord />
           Github Repo →
        </a>
      </footer>
    </div>
  );
}
