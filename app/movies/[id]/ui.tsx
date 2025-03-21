"use client";

export default function UI({ id }) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <img
        src="https://image.tmdb.org/t/p/w500/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg"
        alt="영화 포스터"
        className="w-1/3"
      />
      <div className="md:w-2/3 w-full items-center md:items-start flex flex-col p-6 gap-4">
        <h1 className="text-3xl font-bold">Road House</h1>
        <p className="text-lg font-medium">
          Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys
          roadhouse, only to discover that this paradise is not all it seems.
          movie HD QUALITY
        </p>
        <div className="font-bold text-lg">
          <i className="fas fa-star mr-1" />
          Vote Average: 7.07
        </div>
        <div className="font-bold text-lg">Popularity: 971</div>
        <div className="font-bold text-lg">Release Date: 2024-03-08</div>
      </div>
    </div>
  );
}
