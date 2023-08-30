import React, { FC } from "react";
import { TypeBlogDetail } from "@/helpers/Type/type-blogDetail";

const BlogDetail: FC<TypeBlogDetail> = (props) => {
    return (
        <div className="flex flex-col gap-4 py-6 md:px-10">
            <div className="font-bold text-xl md:text-3xl">{props.title}</div>
            <div className="text-gray-400 flex items-center gap-2">
                <div className="flex justify-center items-center">
                    <img
                        className="w-6 h-6 mr-1"
                        src={"ava.svg"}
                        alt="Author Avatar"
                    />
                </div>
                {props.author}
            </div>
            <div className="text-justif text-base md:text-xl text-justify">
                {props.desc}
            </div>
            <p className="font-bold text-xl">Comment</p>
            {props.comment.length > 0 ? (
                props.comment.map((e, index) => (
                    <div key={index} className="py-2">
                        <div className="font-bold text-base md:text-xl">{e.name}</div>
                        <div className="text-base md:text-xl">{e.body}</div>
                    </div>
                ))
            ) : (
                <div>No Comments found for this Post</div>
            )}
        </div>
    );
};

export default BlogDetail;
