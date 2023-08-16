import { useState } from "react";

import DataTable from "../components/Tables/DataTable";
import Add from "../components/Tables/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../data";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];
const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center gap-5 mb-5">
        <h1 className="text-4xl font-bold">Products</h1>
        <button className="p-1 cursor-pointer bg-softtxt text-darktxt rounded-md font-medium" onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
   
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Products