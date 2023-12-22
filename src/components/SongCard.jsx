import { Link } from "react-router-dom"

export const SongCard = () => {
  return (
    <>
      <div className="flex flex-col gap-10 px-10 bg-secondaryColor">
          <div className="flex items-center">
            <img
              src=""
              alt="Song photo"
              className="w-[150px] h-[150px] border-primaryColor border rounded-lg bg-primaryColor"
            />
            <h1 className="text-primaryColor text-[25px] px-10 font-bold">Song 1</h1>
          </div>
      </div>
    </>
  )
}