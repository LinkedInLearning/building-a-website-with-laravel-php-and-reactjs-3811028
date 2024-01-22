import { useState, useEffect } from "react";
import axios from "axios";

export function Index() {
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
