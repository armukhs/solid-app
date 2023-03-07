import { useLocation, A } from "solid-start";

export default function Navbar() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "border-blue-800" : "border-transparent hover:border-blue-800";
  return (
    <nav class="bg-blue-500">
      <ul class="container flex items-center p-3 text-gray-200">
        <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
          <A href="/">Home</A>
        </li>
        <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
          <A href="/about">About</A>
        </li>
      </ul>
    </nav>
  );
}