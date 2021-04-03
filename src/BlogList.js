import { Link } from 'react-router-dom';
const BlogList = props => {
  return (
    <>
      <h1>{props.title}</h1>
      <div className="blog-list">
        {props.blogs.map(blog => (
          <div className="blog" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h1>{blog.title}</h1>
              <h3>Written by {blog.author}</h3>
            </Link>
            <button
              className="delete"
              onClick={() => props.deleteBlog(blog.id)}>
              Delete Blog
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
