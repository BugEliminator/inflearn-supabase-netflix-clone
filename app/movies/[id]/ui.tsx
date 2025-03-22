"use client";

import { toggleBookmark } from "actions/movieActions";
import { useState, useTransition } from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkSolidIcon } from "@heroicons/react/24/solid";

export default function UI({ movie }) {
  const [isPending, startTransition] = useTransition();

  const [bookmarked, setBookmarked] = useState(movie.bookmark);

  const handleClick = () => {
    setBookmarked((prev) => !prev);
    startTransition(async () => {
      try {
        console.log("북마크 토글 요청", movie.id, bookmarked); // 확인 로그
        await toggleBookmark(movie.id, bookmarked);
        console.log("✅ 토글 완료");
      } catch (error) {
        console.error("❌ 서버 반영 실패", error);
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center">
      <img src={movie.image_url} alt="영화 포스터" className="w-1/3" />
      <div className="md:w-2/3 w-full items-center md:items-start flex flex-col p-6 gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <button onClick={handleClick} disabled={isPending}>
            {bookmarked ? (
              <BookmarkSolidIcon className="w-6 h-6 text-yellow-500" />
            ) : (
              <BookmarkIcon className="w-6 h-6 text-gray-500" />
            )}
          </button>
        </div>
        <p className="text-lg font-medium">{movie.overview}</p>
        <div className="font-bold text-lg">
          <i className="fas fa-star mr-1" />
          Vote Average: {movie.vote_average}
        </div>
        <div className="font-bold text-lg">Popularity: {movie.popularity}</div>
        <div className="font-bold text-lg">
          Release Date: {movie.release_date}
        </div>
      </div>
    </div>
  );
}
