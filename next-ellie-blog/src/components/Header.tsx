import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-20 bg-slate-500 text-white flex items-center justify-between p-10">
      <h1 className="text-2xl">sungchul blog</h1>
      <nav className="flex gap-10 text-l">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
