import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Create() {
    const navigateTo = useNavigate();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://linkedin-blog.test/api/posts", {
                title,
                author,
                body,
            });
            setTitle("");
            setAuthor("");
            setBody("");
            navigateTo("/");
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-8 text-left">
                <h1 className="mx-auto text-xl">Create a new post</h1>
                <label>
                    Title
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-200 sm:text-sm sm:leading-6"
                    />
                </label>

                <label>
                    Author
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-200 sm:text-sm sm:leading-6"
                    />
                </label>

                <label>
                    Main content
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-200 sm:text-sm sm:leading-6"
                    />
                </label>
            </div>

            <div className="flex">
                <Link
                    to="/"
                    className="inline-block px-4 py-2 mt-4 text-black border rounded-md hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="px-4 py-2 mt-4 ml-4 text-white bg-purple-500 rounded-md hover:bg-purple-600"
                >
                    Create Post
                </button>
            </div>
        </form>
    );
}
