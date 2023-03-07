import { createResource } from "solid-js";
import { A, useRouteData } from "solid-start";
import Counter from "~/components/Counter";
import { getConnection } from "~/utils";

export function routeData() {
  const [countries] = createResource(async () => {
    // const url = "https://dbs.arms.workers.dev/countries/ps/rand/10";
    // const urx = "https://hogwarts.deno.dev/students"
    // const response = await fetch(url, {
    //   mode: "cors",
    //   headers: {
    //     "content-type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // });
    const response = await fetch("https://dbs.arms.workers.dev/countries/ps/rand/10");
    // return (await response.json()) // as Student[];
    const json = await response.json()
    console.log(json)

    return json.data
    // const conn = getConnection()
    // const sql = `SELECT * FROM countrycode`
    // const rs = await conn.execute(sql)
    // return rs.rows
  })


  return { countries };
}

export default function Home() {
  const { countries } = useRouteData<typeof routeData>();
  // console.log(countries())
  return (
    <main class="text-center- mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      {/* <pre>{JSON.stringify(countries)}</pre> */}
      <p class="-mt-8 mb-4">ENV {process.env.MY_VAR}</p>
      <Counter />
      <p class="mt-8">
        Visit{" "}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{" "}
      </p>
    </main>
  );
}
