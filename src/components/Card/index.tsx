import { FC } from "react";
import { TypeCard } from "@/helpers/Type/type-card";
import Link from "next/link";
import Pagination from "@/components/Pagination";




const Card: FC<TypeCard> = (props) => {
  return (
    <div className="flex-col flex">
      <p className="text-black text-xl  font-bold hover:text-blue-500">
        <Link href={`post/${props.id}`}>{props.title}</Link>
      </p>
      <p className="text-justify text-[15px]">{props.desc}</p>
      <div className="flex flex-row mt-1 justify-start ">
        <div className="flex flex-col">
          <img className="w-6 h-6 " src={"ava.svg"} />
        </div>
        <p className="ml-2 text-[15px] text-gray-400 font-semibold">
          {" "}
          {props.author}
        </p>
      </div>

    </div>
  );
};

export default Card;
