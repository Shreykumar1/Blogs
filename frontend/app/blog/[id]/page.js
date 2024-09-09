"use client";
import FullBlog from "@/components/FullBlog";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [blogPost, setBlogPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/posts/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setBlogPost(result);
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

    <div className="min-h-screen bg-slate-400 dark:bg-black pt-20 font-[family-name:var(--font-geist-sans)]">
      <FullBlog {...blogPost} />
    </div>
  );
};

export default page;
