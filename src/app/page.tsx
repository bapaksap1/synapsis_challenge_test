import BlogDetail from "@/components/Detail/BlogDetail";"use  client"
import List from "@/components/List/List";
import {getPostWithUser} from "@/helpers/Api/Blog";

export default async function Home() {
     const list = await getPostWithUser()

    return (
        <div>
            <List listItem={list} type={"blog"}/>
        </div>

    );
}
