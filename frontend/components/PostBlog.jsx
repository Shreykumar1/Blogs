"use client"
import { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card} from "@/components/ui/card"
import { ArrowLeftIcon } from "@radix-ui/react-icons"// Assuming these are available in ShadCN
import Link from 'next/link';

const PostBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      const result = await response.json();
      setSuccess('Post submitted successfully!');
      setTitle('');
      setContent('');
    } catch (error) {
      setError('Error submitting post: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto  sm:w-3/5 border rounded px-2 pt-5 w-11/12  dark:bg-black h-max pb-10"> 
      {/* <CardHeader>
        <h2>Create a New Post</h2>
      </CardHeader> */}
        <Link href="/" className='pb-2'><Button size="sm"><ArrowLeftIcon />Back</Button></Link>
      <div className='flex justify-center pb-6'>
        <h1 className="text-xl mx-auto font-bold ">CREATE BLOG</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
          <Label htmlFor="text">Title</Label>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
          </div>
          <div>
          <Label htmlFor="text">Content</Label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write content of the blog"
              rows={5}
              required
            />
          </div>
          <div className='flex justify-end'>
            <Button type="submit" disabled={isSubmitting} className="mr-4">
              {isSubmitting ? 'Submitting...' : 'Submit Blog'}
            </Button>
          </div>
          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-500">{success}</div>}
        </form>
      </div>
    </Card>
  );
};

export default PostBlog;
