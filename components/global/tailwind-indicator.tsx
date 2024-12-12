export function TailwindIndicator() {
  if (process.env.NODE_ENV !== "development") return null

  return (
    <div
      role="status"
      className="fixed bottom-[50px] left-[15px] z-50 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black p-3 font-mono font-bold text-xs text-white"
    >
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  )
}
