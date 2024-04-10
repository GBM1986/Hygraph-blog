import { useParams } from "react-router-dom";
import { useGetQuery } from "../hooks/useGetQuery";

import { getBlogById } from "../queries/getBlogbyID";

export const Details = () => {
  const { id } = useParams();

  console.log("ID", id);
  const { data, isLoading, error } = useGetQuery(getBlogById, "detailBlog", {
    blogID: id,
  });

  if (isLoading) {
    return <span>Loading....</span>;
  }

  if (error) {
    return <span>{error.message}</span>;
  }

  console.log("Data", data);

  return (
    <>
      <h1>Details</h1>

      <div>
        <h1>{data.blog.headline}</h1>
        <p>{data.blog.markdownContent}</p>
        <p>{data.blog.date}</p>
        <p>{data.blog.markdown}</p>
        <p>{data.blog.richText.html}</p>
      </div>
    </>
  );
};