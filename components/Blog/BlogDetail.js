const BlogDetail = (props) => {
  return (
    <>
      <h1>{props.imgInfo}</h1>
      <p>{props.work}</p>
      <iframe
        width="1200"
        height="675"
        src={props.embed}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>{props.description}</p>
    </>
  );
};

export default BlogDetail;
