/* export const getStaticPaths = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      ...post,
      params: { id: post.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const response = await fetch(URL + id);
  const data = await response.json();

  return {
    props: { post: data },
  };
}; */

const PostDetails = ({ post }) => {
  return <div></div>;
};

export default PostDetails;
