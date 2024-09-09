import { Button } from "@/components/ui/button"
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


export default function FullBlog({id,title,content,timestamp}) {
  return (
    <div className="max-w-4xl lg:mx-auto border rounded px-2 mx-3 bg-secondary text-primary">
      <article className="prose prose-gray dark:prose-invert p-4 ">
        <header className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem] ">
            {title}
          </h1>
          <p className="text-sm text-muted-foreground flex">
          <CalendarIcon className="mr-2 h-4 w-4" />
          Published on {formatDay(timestamp)}
        </p>
        </header>
        <div>
          <p className="text-justify pt-8">
            {content}
          </p>
          
        </div>
        <div className="flex items-center justify-end gap-2">
          <Button variant="outline" size="sm" className="border border-white">
            <TrashIcon className="mr-2 h-4 w-4" />
            {/* Delete */}
            <Modal id={id}/>
          </Button>
        </div>
        {/* <Modal /> */}
      </article>
    </div>
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


function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


{/* <Button variant="outline" size="sm">
<FilePenIcon className="mr-2 h-4 w-4" />
Edit
</Button> */}

function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
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