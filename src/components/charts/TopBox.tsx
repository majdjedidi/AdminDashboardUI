import { topDealUsers } from "../../data"
const TopBox = () => {
  return (
    <div>
    <h1 className=" mb-5 text-4xl font-bold">Top Deals</h1>
    <div>
      {topDealUsers.map(user=>(
        <div className="flex items-center justify-between mb-7" key={user.id}>
          <div className="flex gap-5">
            <img src={user.img} alt="user image" className=" w-10 h-10 rounded-full object-cover"/>
            <div className="flex-col flex gap-1">
              <span className="text-sm font-medium">{user.username}</span>
              <span className="text-xs">{user.email}</span>
            </div>
          </div>
          <span className="font-medium">${user.amount}</span>
        </div>
      ))}
    </div>
  </div>
  )
}

export default TopBox