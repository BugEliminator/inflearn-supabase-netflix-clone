"use client";

import Link from "next/link";

export default function MovieCard() {
  return (
    <div className="col-span-1 relative">
      {/* 영화 포스터 부분 */}
      <img
        src="https://image.tmdb.org/t/p/w500/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg"
        alt="영화 포스터"
        className="w-full"
      />
      {/* ,Road House,"Ex-UFC fighter Dalton takes a job as a bouncer at a Florida
      Keys roadhouse, only to discover that this paradise is not all it seems.
      movie HD QUALITY, open this link leakedcinema.com",7.07,971,2024-03-08 */}

      {/* 포스터 호버하면 보이는 부분*/}
      <Link href={`/movies/1`}>
        <div className="absolute flex items-center justify-center top-0 bottom-0 right-0 left-0 z-10 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300">
          <p className="text-xl font-bold text-white">Road House</p>
        </div>
      </Link>
    </div>
  );
}
