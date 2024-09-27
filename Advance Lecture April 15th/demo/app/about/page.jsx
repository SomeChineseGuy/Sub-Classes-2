const AboutPage = () => {
  return (
   <div>
      <h1 className="leading-xl font-display text-primary dark:text-primary-dark font-semibold text-5xl lg:text-6xl -mt-4 mb-7 w-full max-w-3xl lg:max-w-xl">Welcome to my about page!</h1>
      <div>
        <div className="bg-purple-300 flex  items-center justify-center h-[100px] w-[100px]">
          <h1>Box 1</h1>
        </div>
        <div className="bg-red-300 flex  items-center justify-center h-[100px] w-[100px]">
          <h1>Box 2</h1>
        </div>
        <div className="bg-green-300 flex  items-center justify-center h-[100px] w-[100px]">
          <h1>Box 3</h1>
        </div>
        <div className="bg-pink-300 flex  items-center justify-center h-[100px] w-[100px]">
          <h1>Box 4</h1>
        </div>
      </div>
   </div> 
  )
}

export default AboutPage;