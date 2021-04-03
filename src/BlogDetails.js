import { useParams } from 'react-router';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div className="blog-content">
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
