const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div>
        <h1><a href="/"> My Site</a></h1>
      </div>
      <div className="flex justify-between">
        <a href="/about" className="w-full sm:w-auto justify-center active:scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 focus-visible:dark:focus:outline-link-dark leading-snug bg-blue-100 text-white dark:bg-brand-dark dark:text-secondary hover:bg-opacity-80 text-lg py-3 rounded-full px-4 sm:px-6">About</a>
        <a href="/tell-us-more">Tell Us More</a>
      </div>
    </div>
  )
  
}

export default Navbar