import React, { useState } from 'react'

const LikeButton = () => {

    const [likes, setLikes] = useState(0);
    const handleLike = () => {
        setLikes(likes + 1)
    }

  return (
    <div>LikeButton
        <button onClick={handleLike}>Like</button>
        <p>{likes} likes</p>
    </div>
  )
}

export default LikeButton