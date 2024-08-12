export default function Header() {
  return (
    <div className="flex h-[27.938rem] items-center text-white ">
      <div className="grid grid-cols-3 text-white">
        <div className="">
          <h1 className="font- text-bold-md">About</h1>
        </div>
        <div className="col-span-2 flex flex-col gap-10 pr-2">
          <div className="h-1 w-14 bg-light-coral"></div>
          <p className="text-semi-bold-sm">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
      </div>
    </div>
  );
}
