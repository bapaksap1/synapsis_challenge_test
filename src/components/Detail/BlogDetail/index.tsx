import { FC } from "react";
import { TypeBlogDetail } from "@/helpers/Type/type-blogDetail";

const BlogDetail: FC<TypeBlogDetail> = (props) => {
  return (
    <div className="flex flex-col  gap-4 py-6">
      <div className="font-bold text-3xl">{props.title}</div>
      <div className="text-gray-400 flex flex-row gap-2">
        <div className="flex justify-center flex-col">
          <img className="w-6 h-6 mr-1" src={"ava.svg"} />
        </div>
        {props.author}
      </div>
      <div className="text-justif text-xl text-justify">{props.desc}</div>
      <p className="font-bold text-2xl">Comment</p>
      {props.comment.length > 0 ? (
        props.comment.map((e) => (
          <div>
            <div className="font-bold">{e.name}</div>
            <div>{e.body}</div>
          </div>
        ))
      ) : (
        <div>No Comment found in this Post</div>
      )}
    </div>
  );
};

export default BlogDetail;
