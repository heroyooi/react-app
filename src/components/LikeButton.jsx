import { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const resetLikes = () => {
    setLikes(0);
    setLiked(false);
  };

  return (
    <div>
      <p>❤️ 좋아요 {likes}개</p>
      <button onClick={handleClick}>
        {liked ? '좋아요 취소' : '좋아요'}
      </button>
      <button onClick={resetLikes}>초기화</button>
    </div>
  );
}

export default LikeButton;