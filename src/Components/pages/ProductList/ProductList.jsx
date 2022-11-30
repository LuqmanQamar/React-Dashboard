import "./productList.css"
import productOne from "./imgs/tshirt-2428521_1280.jpg"
import productTwo from "./imgs/earphone-6849119_1280.jpg"
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DataGrid } from '@material-ui/data-grid';

export default function ProductList() {

    const rows = [
        {
            id: 1,
            Product: 'Shirts',
            Avatar: productOne,
            stock: 123,
            status: "Active",
            price: "$120"
        },
        {
            id: 2,
            Product: 'Airpods',
            Avatar: productTwo,
            stock: 6754,
            status: "Active",
            price: "$190"
        },
        {
            id: 3,
            Product: 'T-Shirts',
            Avatar: productOne,
            stock: 6754,
            status: "Active",
            price: "$19"
        },
        {
            id: 4,
            Product: 'Airpods',
            Avatar: productTwo,
            stock: 6754,
            status: "Active",
            price: "$190"
        },
        {
            id: 5,
            Product: 'Airpods',
            Avatar: productTwo,
            stock: 6754,
            status: "Active",
            price: "$190"
        },
        {
            id: 6,
            Product: 'T-Shirts',
            Avatar: productOne,
            stock: 6754,
            status: "Active",
            price: "$19"
        },
        {
            id: 7,
            Product: 'Airpods',
            Avatar: productTwo,
            stock: 6754,
            status: "Active",
            price: "$190"
        },
        {
            id: 8,
            Product: 'T-Shirts',
            Avatar: productOne,
            stock: 6754,
            status: "Active",
            price: "$19"
        },
    ];
    const [data, setData] = useState(rows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'product', headerName: 'Products', width: 190, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img src={params.row.Avatar} alt="" className="userListImg" />
                        {params.row.Product}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 190 },
        {
            field: 'status',
            headerName: 'Status',
            width: 130,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"product" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() => { handleDelete(params.row.id) }} />
                    </>
                )
            }
        },
    ];




    return (
        <div className='productList'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
