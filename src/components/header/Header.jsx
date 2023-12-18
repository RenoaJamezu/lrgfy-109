export const Header = ({ title }) => {


  return (
    <>
      <div className="fixed ml-[300px] w-screen bg-secondaryColor h-[100px] flex items-center px-10 border-b-2 border-primaryColor">
        <h1 className="text-primaryColor font-bold text-6xl">{title}</h1>
      </div>
    </>
  )
}