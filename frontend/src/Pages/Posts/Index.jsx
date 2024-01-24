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

    const handleDeletePost = async (postId) => {
        const shouldDelete = window.confirm(
            "Are you sure you want to delete this post?"
        );

        if (!shouldDelete) {
            return;
        }

        try {
            await axios.delete(`http://linkedin-blog.test/api/posts/${postId}`);

            setPosts((prevPosts) =>
                prevPosts.filter((post) => post.id !== postId)
            );
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

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
                            <Link to={`/posts/${post.id}`} state={post}>
                                <h2 className="py-3 mb-5 font-bold hover:underline">
                                    {post.title}
                                </h2>
                            </Link>

                            <p className="font-bold">{post.author}</p>

                            <p>{post.body}</p>

                            <div className="space-x-5 space-y-5">
                                <Link
                                    to={`posts/update/${post.id}`}
                                    state={post}
                                    className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
                                >
                                    Edit Post
                                </Link>

                                <button
                                    onClick={() => handleDeletePost(post.id)}
                                    className="px-4 py-2 text-white bg-gray-400 rounded-md hover:bg-gray-500"
                                >
                                    Delete Post
                                </button>
                            </div>
                        </div>
                    ))}
        </div>
    );
}
