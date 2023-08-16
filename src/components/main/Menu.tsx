import { Link } from 'react-router-dom'
import { menu } from '../../data'

const Menu = () => {
  return (
    <div className="menu">
    {menu.map((item) => (
      <div className="flex flex-col gap-[10px] mb-5" key={item.id}>
        <span className="text-xs font-extralight text-softtxt uppercase">{item.title}</span>
        {item.listItems.map((listItem) => (
          <Link to={listItem.url} className="flex items-center gap-[10px] p-[10px] rounded-[5px] hover:bg-soft" key={listItem.id}>
            <img src={listItem.icon} alt="" />
            <span className="listItemTitle">{listItem.title}</span>
          </Link>
        ))}
      </div>
    ))}
  </div>
  )
}

export default Menu