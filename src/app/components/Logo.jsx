import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/app">
        <img src="/logos/logo.png" className="h-24 w-24" />
      </Link>
    </div>
  );
}
