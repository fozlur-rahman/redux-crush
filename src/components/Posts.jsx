import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/counters/posts/postsSlice";

const Posts = () => {
    const { posts, isLoading, isError, error } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    let content;

    if (isLoading) {
        content = <h1>loading.......</h1>;
    }
    if (!isLoading && isError) {
        content = <h1>{error}</h1>;
    }
    if (!isLoading && !isError && posts.length === 0) {
        content = <h1>no posts found</h1>;
    }
    if (!isLoading && !isError && posts.length > 0) {
        content = (
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post.title}</li>
                ))}
            </ul>
        );
    }

    return <div className="max-w-md mx-auto flex flex-col space-y-2">{content}</div>;
};

export default Posts;
