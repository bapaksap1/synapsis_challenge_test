import { generateIdUser } from "@/helpers/generateId";
import { TypeUser } from "@/helpers/Type/type-user";

export async function getUsers() {
  const res = await fetch(
    `https://gorest.co.in/public/v2/users?page=1&per_page=100`,
  );
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
      return { pesan: "Users Not Found or Inactive Users" };
    else return { message: "Delete Successful" };
  } catch (error) {
    return { message: "Error, please wait a few minute" };
  }
}

export async function addUsers(
  name: string,
  gender: string,
  email: string,
  status: string,
) {
  const headers = {
    Authorization:
      "Bearer d618fc5ad77d0fdbef1882190ca095538de654ba8c7e6efe4187d04fd581143b",
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({
    name: name,
    email: email,
    gender: gender,
    status: status,
  });
  try {
    const res = await fetch(`https://gorest.co.in/public/v2/users`, {
      method: "POST",
      headers,
      body,
    });
    if (res.status === 201) return { message: "Add Successful" };
    else return { message: "Error, try Again" };
  } catch (error) {
    return { message: "Error, try Again" };
  }
}

export async function editUsers(
  id: string,
  name: string,
  gender: string,
  email: string,
  status: string,
) {
  const headers = {
    Authorization:
      "Bearer d618fc5ad77d0fdbef1882190ca095538de654ba8c7e6efe4187d04fd581143b",
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({
    name: name,
    email: email,
    gender: gender,
    status: status,
  });
  try {
    const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
      method: "PUT",
      headers,
      body,
    });
    if (res.status === 201) return { message: "Edit Successful" };
    else return { message: "Error, try Again" };
  } catch (error) {
    return { message: "Error, try Again" };
  }
}
