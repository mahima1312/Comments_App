import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props
  const {id, name, comment, date, isLiked, initialClassName} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    toggleIsLiked(id)
  }
  const onDeleteComment = () => {
    deleteComment(id)
  }
  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p>{initial}</p>
        </div>
        <div className="username-time-container">
          <p className="username">{name}</p>
          <p className="time">{postedTime}</p>
        </div>
        <p className="comment">{comment}</p>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img className="like-image" src={likeImageUrl} alt="like" />
          <button
            onClick={onClickLike}
            type="button"
            className={likeTextClassName}
          >
            Like
          </button>
        </div>
        <button
          onClick={onDeleteComment}
          type="button"
          data-testid="delete"
          className="button"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
