import { generateIdPost, generateIdUser } from "@/helpers/generateId";
import { TypeUser } from "@/helpers/Type/type-user";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;
import { log } from "util";

export async function getUsers() {
  const res = await fetch(`https://gorest.co.in/public/v2/users`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const resUser = (await res.json()) as TypeUser[];
  return resUser.map((user) => {
    const userFind = resUser.find((user) => user.id === user.id);
    const id = generateIdUser({ userId: user.id });
    return { ...user, userFind, id };
  });
}

export async function deleteUsers(params: string) {
  const headers = {
    Authorization:
      "Bearer d618fc5ad77d0fdbef1882190ca095538de654ba8c7e6efe4187d04fd581143b",
  };
  try {
    const res = await fetch(`https://gorest.co.in/public/v2/users/${params}`, {
      method: "DELETE",
      headers,
    });
    const response = await res.json();
    if (response.message === "Resource not found")
      return { pesan: "Users Not Found or Inactive Users" }
    else return { message: "Delete Successful" };
  } catch (error) {
    return { message: "Error, please wait a few minute" };
  }
}
