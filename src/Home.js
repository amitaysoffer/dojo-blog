import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = ({ showHome }) => {
  const { data: blogs } = useFetch('http://localhost:8000/blogs');

  // const deleteBlog = id => {
  //   const filteredBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(filteredBlogs);
  // };

  return (
    <div className="home">
      {blogs.length > 0 ? (
        <BlogList
          blogs={blogs}
          title={'All Blogs'}
          showHome={showHome}
          // deleteBlog={deleteBlog}
        />
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Home;
