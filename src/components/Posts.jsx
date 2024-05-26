 import axios from "axios";
 import React, { useEffect, useState } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost/blogs_backend/afficherPosts.php', {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
                if (Array.isArray(response.data)) {
                    setPosts(response.data);
                } else {
                    console.error('Les données de publication ne sont pas un tableau :', response.data);
                }
            } catch (error) {
                console.error('Erreur :', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="posts">
            {posts.map(post => (
                <div className="post" key={post.idPost}>
                    <img src={post.image} alt={post.title} className="post_img" />
                    <div className="sous_image">
                        <div className="part1">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile picture" className="profile_img" />
                            <span>
                                <h4> Username{post.usernameOfPost} </h4>
                                <p>Posted 2 hours ago</p>
                            </span>
                        </div>
                        <div className="part2">
                            <h1> {post.title} </h1>
                            <p> {post.description} </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Posts;
