import { GridColDef } from "@mui/x-data-grid";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    props.setOpen(false)
  };
  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-modal flex items-center justify-center">
      <div className="p-12 rounded-xl bg-main relative">
        <span className="absolute top-3 right-3 cursor-pointer" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1 className="mb-12 text-2xl font-bold text-softtxt">Add new {props.slug}</h1>
        <form className='flex flex-wrap max-w-lg justify-between' onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="w-2/5 flex flex-col gap-[10px] mb-5">
                <label className="text-sm font-semibold">{column.headerName}</label>
                <input className='p-3 bg-transparent text-white outline-none border border-softtxt rounded' type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button className="w-full p-3 cursor-pointer bg-softtxt text-darktxt rounded-md font-semibold">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;