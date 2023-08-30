import { FC } from "react";
import { TypeBlogDetail } from "@/helpers/Type/type-blogDetail";
import { getPostWithUser } from "@/helpers/Api/Blog";
import { Metadata } from "next";
import BlogDetail from "@/components/Detail/BlogDetail";
import { getComments } from "@/helpers/Api/Comment";

type PostDetailProps = {
  params: { id: string };
};
export async function generateStaticParams() {
  const posts = await getPostWithUser();
  return posts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({
  params,
}: PostDetailProps): Promise<Metadata> {
  const posts = await getPostWithUser();
  const post = posts.find((post) => post.id === params.id);

  return {
    title: post?.id,
  };
}

const PostDetail: FC<PostDetailProps> = async ({ params }) => {
  const posts = await getPostWithUser();
  const post = posts.find((post) => post.id === params.id);
  console.log(post);
  const Comment = await getComments(params.id);
  console.log(Comment, "com");
  return (
    <div>
      <BlogDetail
        title={post?.title}
        desc={post?.body}
        author={post?.user?.name}
        comment={Comment} />
    </div>
  );
};

export default PostDetail;
