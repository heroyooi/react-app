import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>📝 게시글 상세 페이지</h2>
      <p>게시글 ID: {id}</p>
    </div>
  );
}

export default PostDetail;
