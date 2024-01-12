export default function root_projects({ children }) {
  return (
    <div className="flex w-full h-full justify-center max-w-[100vw] overflow-x-hidden flex-col bg-[var(--bg-default)] ">
      <div className="flex w-full max-w-[1300px] h-fit xl:max-h-fit xl:min-h-[900px] xl:h-fit px-[10px] pt-[80px]  items-center pb-[40px] mx-auto">
        {children}
      </div>
    </div>
  )
}
