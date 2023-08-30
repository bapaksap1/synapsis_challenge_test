import { FC } from "react";
import { TypeBlogDetail } from "@/helpers/Type/type-blogDetail";
import { Metadata } from "next";
import UserDetail from "@/components/Detail/UserDetail";
import { getUsers } from "@/helpers/Api/Users";

type PostDetailProps = {
  params: { id: string };
};
export async function generateStaticParams() {
  const users = await getUsers();
  return users.map((user) => ({ id: user.id }));
}

export async function generateMetadata({
  params,
}: PostDetailProps): Promise<Metadata> {
  const users = await getUsers();
  const user = users.find((user) => user.id === params.id);
  return {
    title: user?.id,
  };
}

const UserDetailPage: FC<TypeBlogDetail> = async ({
  params,
}: PostDetailProps) => {
  const users = await getUsers();
  const user = users.find((user) => user.id === params.id);
  return (
    <div>
      <UserDetail
        name={user?.name}
        email={user?.email}
        gender={user?.gender}
        status={user?.status}
      />
    </div>
  );
};

export default UserDetailPage;
