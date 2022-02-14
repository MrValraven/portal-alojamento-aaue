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

import { useRouter } from "next/router";
import AnuncioPage from "../../components/AnuncioPage/AnuncioPage";

import listings from "../../static/mockAnuncios.json";

const PostDetails = ({ post }) => {
  const router = useRouter();

  const currentAnuncio = listings[router.query.id - 1];
  console.log(currentAnuncio);
  return (
    <div>
      <AnuncioPage anuncio={currentAnuncio} />
    </div>
  );
};

export default PostDetails;
