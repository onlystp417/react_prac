const CommentCard = (props) => {
  console.log(props);
  return (
    <section className="comment-card">
      <div className="comment-detail">{props.children}</div>
      <div className="button-group">
        <button className="confirm">確認</button>
        <button className="decline">取消</button>
      </div>

    </section>
  )
}

export default CommentCard;