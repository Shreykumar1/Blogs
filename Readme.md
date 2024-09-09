# Blog Post CRUD

This is a simple blog platform where users can create, view, edit, and delete blog posts. The project is built using Next.js for the frontend with ShadCN for the UI components, and Express.js for the backend. SQLite is used for the database.

## Features
- Create new blog posts
- View a list of all blog posts
- View the full content of a specific blog post
- Delete blog posts
- Edit existing blog posts
- Light and Dark Mode
- Confirmation modal before deleting a post
- Basic frontend form validation to ensure title and content are not empty
- Responsive UI using ShadCN components for a consistent look
- Responsive design

## Tech Stack

### Frontend
- **Framework**: Next.js
- **UI Library**: ShadCN
- **Styling**: Responsive design using ShadCN components

### Backend
- **Framework**: Express.js
- **Database**: SQLite
- **API**: REST API for blog post management

## Project Structure
- `frontend/`: Contains the Next.js frontend.
  - `app/`: Next.js pages for the blog.
    - `page.js`: Home page listing all blog posts.
    - `blog/`: Next.js pages for the blog.
        - `create`: Create Blog Post.
        - `page.js`: Page for creating a new blog post.
        - `[id]`: Single Blog Post.
        - `[id]`: Dynamic route for viewing and editing blog posts.
  - `components/`: Reusable UI components.
    - `BlogCard.js`: Component to display the title and excerpt of each blog post.
    - `FullBlog.js`: Component to display the full content each blog post.
    - `Navbar.js`: Simple navigation bar for the app.
    - `PostBlog.js`: Form for creating and editing a blog post.
    - `Modal.js`: Component for delete warning.
    - `Button.js`: Button for submitting forms and deleting posts.
  
- `backend/`: Contains the Express.js backend.
  - `server.js`: Main server file handling API routes.
  - `database.js`: SQLite database setup and connection.
  - `routes/postRouter.js`: API routes for managing posts (create, read, update, delete).
  - `controller/postController.js`: API functions for managing posts (create, read, update, delete).
  
## API Endpoints

### Backend (Express.js)
| Method | Endpoint      | Description                           |
|--------|---------------|---------------------------------------|
| `GET`  | `/posts`      | Retrieve all blog posts               |
| `GET`  | `/posts/:id`  | Retrieve a single blog post by `id`   |
| `POST` | `/posts`      | Create a new blog post                |
| `PUT`  | `/posts/:id`  | Edit an existing blog post by `id`    |
| `DELETE` | `/posts/:id`| Delete a blog post by `id`            |

## Database Schema

- **Table**: `posts`
- **Fields**:
  - `id`: `TEXT` (Primary key, manually generated UUID)
  - `title`: `TEXT` (Required)
  - `content`: `TEXT` (Required)
  - `timestamp`: `DATETIME` (Defaults to the current time)

## Setup

### Prerequisites
- Node.js installed
- SQLite installed

### Frontend Setup (Next.js)
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. The app should now be running on [http://localhost:3000](http://localhost:3000).

### Backend Setup (Express.js)
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the backend server:
   ```bash
   node server.js
   ```
4. The backend should now be running on [http://localhost:5000](http://localhost:5000).

### SQLite Setup
1. The SQLite database file (`blog.db`) will be created automatically when the server runs for the first time. No extra setup required.

## Usage

### Create a New Post
1. Navigate to the "Create Post" page from the home page.
2. Fill in the title and content, then click the "Submit" button.

### View a Post
1. Click on a post title from the home page to view its full content.

### Edit a Post
1. On the view post page, click the "Edit" button to update the post.

### Delete a Post
1. On the home page or view post page, click the "Delete" button.
2. A confirmation modal will appear to confirm the deletion.


## License
This project is open source and available under the [MIT License](LICENSE).

---

This README provides a complete overview of the project, including setup instructions, API details, and usage information.