import { A } from "solid-start";

export default function About() {
  const klik = async () => {
    // alert('KLIK')
    const url = "https://dbs.arms.workers.dev/countries/ps/6399a389bd028ff9f2f7e583"
    const api = '/api/post'
    const init = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name: 'Loda', ts: new Date().getTime( )})
    }
    const rs = await fetch(api, init)
    console.log(rs)
    const json = await rs.json()
    const el = document.getElementById('place') // ?.innerText = JSON.stringify(json)
    if (el) el.innerText = JSON.stringify(json)

  }
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-left text-3xl text-sky-700 font-thin uppercase mb-2">
        About Page
      </h1>
      <button class="bg-gray-200 active:bg-gray-300 px-6 py-2"
      onClick={klik}
      >ACTION</button>
      <div id="place"></div>

    </main>
  );
}
