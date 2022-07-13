import Link from "next/link";

export default function BackButton() {
  return (
    <Link href='/'>
      <button className='text-5xl h-12 w-12 bg-amber-200 text-amber-400 font-bold rounded-full shadow hover:text-amber-500 hover:bg-amber-300 duration-100'>
        &#171;
      </button>
    </Link>
  );
}