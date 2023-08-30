import { generateIdPost, generateIdUser } from "@/helpers/generateId";
import { TypeUser } from "@/helpers/Type/type-user";


export async function getUsers() {
  const res = await fetch(`https://gorest.co.in/public/v2/users`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const resUser = (await res.json()) as TypeUser[];
  return resUser.map((user) => {
    const userFind = resUser.find((user) => user.id === user.id);
    const id = generateIdUser({ userId: user.id });
    return { ...user,userFind, id };
  });
}
