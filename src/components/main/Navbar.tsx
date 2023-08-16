const Navbar = () => {
  return (
    <div className="w-full p-5 flex items-center justify-between">
      <div className="flex items-center font-bold gap-[10px]">
        <img src="logo.svg" alt='logo'/>
        <span>Dashboard</span>
      </div>
      <div className="flex items-center gap-5">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="relative">
          <img src="/notifications.svg" alt="" />
          <span className='bg-red-600 text-white w-4 h-4 absolute rounded-full -top-[10px] -right-[10px] flex items-center justify-center text-xs'>1</span>
        </div>
    <div className="flex items-center gap-[10px]">
          <img
            src="https://scontent.ftun8-1.fna.fbcdn.net/v/t1.6435-9/81334204_1458841547626768_5339789838180679680_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=be3454&_nc_ohc=J36fmH2iVAEAX8ImzPv&_nc_ht=scontent.ftun8-1.fna&oh=00_AfB0VM8PKzk6Ne-6DJ3aJMoyKntG8wR-ogInBAdhR3uD1w&oe=650328EB"
            className='w-7 h-7 rounded-full object-cover'
          />
          <span>Majd</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar