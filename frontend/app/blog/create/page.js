import Form from '@/components/Form'
import PostBlog from '@/components/PostBlog'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-slate-400 dark:bg-black pt-20 font-[family-name:var(--font-geist-sans)] grid  w-full">
        <PostBlog />
    </div>
  )
}

export default page