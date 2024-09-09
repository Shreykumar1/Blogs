"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


import React, { useState } from 'react'
import { Button } from "./ui/button"

const Modal = ({id}) => {
    const [open,setOpen] = useState(false);
        const deleteData = async () => {
            console.log(id);
            
          try {
            const response = await fetch(`http://localhost:5000/posts/${id}`, {
              method: 'DELETE',
            });
            
            if (!response.ok) {
              throw new Error('Failed to delete');
            }
    
            const result = await response.json();
            console.log('Delete successful', result);
          } catch (error) {
            console.error('Error during deletion:', error);
          }
        };
        const handleDelete = async() => {
            await deleteData();
            setOpen(false);
            window.location.href = "/";
        }
    return (
        <>
            <Dialog open={open} onOpenChange={setOpen} >
                <DialogTrigger>Delete</DialogTrigger>
                <DialogContent className="text-white bg-black">
                    <DialogHeader >
                        <DialogTitle >Are you absolutely sure?</DialogTitle>
                        <DialogDescription >
                            This action cannot be undone. This will permanently delete the blog post.
                        </DialogDescription>
                    </DialogHeader>
                        <Button onClick={() => handleDelete()}><span class="sr-only">Close</span>Delete</Button>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default Modal