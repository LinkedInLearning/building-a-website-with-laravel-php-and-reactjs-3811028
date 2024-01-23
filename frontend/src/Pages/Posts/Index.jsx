import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Index() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("http://linkedin-blog.test/api/posts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <div className="flex">
                <Link
                    to="/posts/create"
                    className="px-4 py-2 mt-4 text-white bg-purple-500 rounded-md hover:bg-purple-600"
                >
                    Create new post
                </Link>
            </div>

            {posts &&
                posts
                    .slice()
                    .reverse()
                    .map((post) => (
                        <div
                            key={post.id}
                            className="p-5 my-5 text-left border rounded-md shadow-sm"
                        >
                            <h2 className="mb-5 font-bold">{post.title}</h2>
                            <p className="font-bold">{post.author}</p>

                            <p>{post.body}</p>
                        </div>
                    ))}
        </div>
    );
}
