const Comment = ({ comment }) => {
  const posted = comment.created_at.split(/[-T:.]/);
  return (
    <div id="comment">
      <p> {comment.body}</p>
      <p>
        {comment.author}, on {posted[2]}/{posted[1]}/{posted[0]} at {posted[3]}:
        {posted[4]}.
      </p>
      <p>votes: {comment.votes}</p>
    </div>
  );
};
export default Comment;
