import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

import Header from "~/app/_components/header"
import Leftsider from "~/app/_components/leftsider";
import Footerbar from "~/app/_components/footer";
export default async function Home() {
  const hello = await api.post.hello({ text: "from NAME" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
        <main className="mx-auto ">

            <Header/>
            <div className="static flex flow-row ">
                <Leftsider/>
                <div className=" w-4/5 content-between ">
                    <p>this area is for content sections.</p>
                </div>
            </div>
            <Footerbar/>
        </main>

    </HydrateClient>
  );
}
