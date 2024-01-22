import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <h1 className="my-5 text-xl font-semibold text-center">
                Welcome to My Blog
            </h1>

            {posts &&
                posts.map((post) => (
                    <div
                        key={post.id}
                        className="p-5 my-5 border rounded-md shadow-sm text-left"
                    >
                        <h2 className="mb-5 font-bold">{post.title}</h2>

                        <p>{post.body}</p>
                    </div>
                ))}
        </div>
    );
}
