import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog">
      <h1>Blog</h1>
      <article>
        <h2>Health Tips for a Better Life</h2>
        <p>In this blog post, we share valuable tips on how to maintain a healthy lifestyle and prevent common illnesses...</p>
      </article>
      <article>
        <h2>Understanding Heart Disease</h2>
        <p>Learn about the causes, symptoms, and treatment options for heart disease from our experts...</p>
      </article>
      {/* Add more blog posts as needed */}
    </section>
  );
};

export default Blog;
