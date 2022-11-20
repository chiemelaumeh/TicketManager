import Comment from "./Comment";

const ListComments = ({comments}) => {

    return (
        <>
        {comments.map(data => (
            <Comment key={data.comment_id} data={data} />
         ))}
         </>
    )
}

export default ListComments;