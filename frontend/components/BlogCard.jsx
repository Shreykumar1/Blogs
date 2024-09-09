import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Modal from "./Modal";

function formatDay(timestamp) {
  const date = new Date(timestamp);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
}


export default function BlogCard({id,title,content,timestamp}) {
  return (
    <Card className="w-full pt-4 mb-4">
      <CardContent className="space-y-4">
        <div>
          <Link href={`/blog/${id}`}><h2 className="text-2xl font-bold hover:underline pointer">{title }</h2></Link>
          <p className="text-sm text-muted-foreground line-clamp-3">{content}
          </p>
        </div>
        <p className="text-sm text-muted-foreground flex">
          <CalendarIcon className="mr-2 h-4 w-4" />
          Published on {formatDay(timestamp)}
        </p>
        <div className="flex items-center justify-end gap-2">
          <Button variant="outline" size="sm">
            <TrashIcon className="mr-2 h-4 w-4" />
            <Modal id={id} />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}