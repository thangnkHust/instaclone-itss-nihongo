import React, { useState } from 'react';
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { userRows } from "../../../components/Admin/Chart/dummyData";
import { Link } from "react-router-dom";



function UserList ()  {
    const [data, setData] = useState(userRows);

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "post",
            headerName: "Posts",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"admin/user/" + params.row.id}>
                            <button className="userListEdit">Show</button>
                        </Link>
                    </>
                );
            },
        },
    ];
    return (
        <div className="userList">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    )
}

export default UserList


