import Image from "next/image";
import Link from "next/link";

export default function Avatar() {
  return (
    <div className="flex flex-col items-center gap-2 pt-16">
      <Image
        className="rounded-full"
        src="/images/profile.png"
        alt="profile"
        width="200"
        height="200"
      ></Image>
      <h2 className="font-bold text-lg">SEONGCHEOL YUN</h2>
      <div className="flex flex-col gap-1 items-center">
        <p className="font-semibold">front-end engineer</p>
        <p>프론트엔드 개발자 윤성철</p>
        <Link
          href="/contact"
          className="bg-yellow-400 mt-3 pt-2 pb-2 pl-4 pr-4 rounded-full"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
