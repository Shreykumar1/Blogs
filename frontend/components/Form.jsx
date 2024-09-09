import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "@radix-ui/react-icons"

export default function Form() {
    return (
        <div className="max-w-4xl mx-auto">
            <header className="flex items-center justify-between mb-4">
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:underline"
                    prefetch={false}
                >
                    <ArrowLeftIcon className="h-4 w-4" />
                    Back
                </Link>
                <h1 className="text-2xl font-bold">Generative AI and the Future of Content Creation</h1>
            </header>
            <article className="prose prose-gray dark:prose-invert">
                <header className="space-y-2 not-prose">
                    <div className="grid gap-4">
                        <div>
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" type="text" placeholder="Enter title" className="w-full" />
                        </div>
                        <div>
                            <Label htmlFor="content">Content</Label>
                            <Textarea id="content" placeholder="Enter content" className="w-full min-h-[200px]" />
                        </div>
                    </div>
                </header>
            </article>
                <Button>CREATE BLOG</Button>
        </div>
    )
}