import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";


export default async function Home() {
  const hello = await api.post.hello({ text: "from NAME" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
                <div className=" w-4/5 content-between ">
                    <p>This area is for PRODUCTS functionality.</p>
                    <p>This area is for PRODUCTS functionality.</p>
                    <p>This area is for PRODUCTS functionality.</p>
                    <p>This area is for PRODUCTS functionality.</p>
                </div>
    </HydrateClient>
  );
}
