import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import UserOne from "./imgs/6-69524_download-full-hd-wallpapers-for-pc-collection-road.jpg"
import UserTwo from "./imgs/pauline-heidmets-GTL39WM6QqA-unsplash.jpg"
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function UserList() {
    const rows = [
        {
            id: 1,
            userName: 'Jon Snow',
            Avatar: UserOne,
            email: "Jon@gmail.com",
            status: "Active",
            transaction: "$120"
        },
        {
            id: 2,
            userName: 'Peter Parker',
            Avatar: UserTwo,
            email: "Peter@gmail.com",
            status: "Offline",
            transaction: "$120.98"
        },
        {
            id: 3,
            userName: 'Jessica',
            Avatar: UserOne,
            email: "Jassica@gmail.com",
            status: "Active",
            transaction: "$120"
        },
        {
            id: 4,
            userName: 'Katherine',
            Avatar: UserTwo,
            email: "Kathe@gmail.com",
            status: "Partial Active",
            transaction: "$109.00"
        },
        {
            id: 5,
            userName: 'John Carter',
            Avatar: UserOne,
            email: "Carter@gmail.com",
            status: "Active",
            transaction: "$120"
        },
        {
            id: 6,
            userName: 'Naila',
            Avatar: UserTwo,
            email: "Naila@gmail.com",
            status: "Offline",
            transaction: "$198.5"
        },
        {
            id: 7,
            userName: 'Teena',
            Avatar: UserOne,
            email: "Teena@gmail.com",
            status: "Active",
            transaction: "$120"
        },
        {
            id: 8,
            userName: 'Malaika',
            Avatar: UserTwo,
            email: "malaika@gmail.com",
            status: "Partial Active",
            transaction: "$120"
        },
    ];
    const [data, setData] = useState(rows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user', headerName: 'User', width: 190, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img src={params.row.Avatar} alt="" className="userListImg" />
                        {params.row.userName}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 190 },
        {
            field: 'status',
            headerName: 'Status',
            width: 130,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() => { handleDelete(params.row.id) }} />
                    </>
                )
            }
        },
    ];



    return (

        <div className='userList'>
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
