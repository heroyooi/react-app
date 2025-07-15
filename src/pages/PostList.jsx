import { Link } from 'react-router-dom';

const posts = [
  { id: '1', title: 'React 시작하기' },
  { id: '2', title: 'useState 완전 정복' },
  { id: '3', title: 'React Router 기초' },
];

function PostList() {
  return (
    <div>
      <h2>📰 게시글 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
