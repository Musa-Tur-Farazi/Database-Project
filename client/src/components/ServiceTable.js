import React, {useState} from "react";
import "../CSSfolder/services.css"

import Box from "@mui/material/Box";
import {Input, TextField} from "@mui/material";

import AdminDrawer from "./AdminDrawer"
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import MaterialTable from "material-table";
import AddIcon from "@material-ui/icons/Add";
import {free_service, hotel_id, paid_service} from "./FirstPageAdmin";
import axios from "axios";

const ServiceTable=()=>
{

    const [TableData, setTableData] = useState(free_service);
    const [Tabledata2,setTableData2]=useState(paid_service);
     console.log("in service table");
     console.log(free_service);

    const columns = [
        {
            title: "Add/Delete Free Services",
            field: "Description",
            sorting: true,
            align: "center",
            filtering: true,
            cellStyle: {
                // background: "#009688",
                fontfamily: "corgette",
                height: 80,
                maxHeight: 80,
            },
            headerStyle: { color: "#fff" },
        },



    ];
    const coloumns2=[{
        title: "Add/Delete/Edit Paid Services",
        field: "Description",
        sorting: true,
        align: "center",
        filtering: true,
        cellStyle: {
            // background: "#009688",
            fontfamily: "corgette",
            height: 80,
            maxHeight: 80,
        },
        headerStyle: { color: "#fff" },
    },
        {
            title: "CostService",
            field: "Cost",
            align: "center",
            type: "numeric",
            grouping: false

        },
    ];
    const addFree=async(newData)=>{
        console.log("in add free");
        console.log(newData);
        try{

            var res=await axios.post('http://localhost:8080/adminfreeServiceAdd',{
                hotel_id:hotel_id,
                description:newData.Description

            })

        }
        catch(e){
            console.log(e);
        }

    }
    const Delete=async(newData)=>{
        console.log(newData);
        try{

            var res=await axios.post('http://localhost:8080/adminServiceDelete',{
                hotel_id:hotel_id,
               description:newData.Description

            })

        }
        catch(e){
            console.log(e);
        }

    }
    const addPaid=async(newData)=>{
        console.log(newData);
        try{

            var res=await axios.post('http://localhost:8080/adminpaidServiceAdd',{
                hotel_id:hotel_id,
                cost:newData.Cost,
                description:newData.Description

            })

        }
        catch(e){
            console.log(e);
        }

    }
    const updatePaid=async(newData,oldData)=>{
        console.log(newData);
        try{

            var res=await axios.post('http://localhost:8080/adminupdateServiceUpdate',{
                hotel_id:hotel_id,
                old:oldData.Description,
                description:newData.Description,
                cost:newData.Cost

            })

        }
        catch(e){
            console.log(e);
        }

    }

    return(
        <div>
            <AdminDrawer/>
            <MaterialTable
                title="Free Services Information"
                data={TableData}
                columns={columns}

                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setTableData([...TableData, newData]);

                                resolve();
                            }, 500);
                            addFree(newData);
                        }),
                    // onRowUpdate: (newData, oldData) =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //             const dataUpdate = [...TableData];
                    //             const index = oldData.tableData.id;
                    //             dataUpdate[index] = newData;
                    //             setTableData([...dataUpdate]);
                    //
                    //             resolve();
                    //         }, 500);
                    //         // axios
                    //         //     .patch(
                    //         //         `http://localhost:8080/api/people/id/${newData.ID}`,
                    //         //         newData
                    //         //     )
                    //         //     .then((res) => {
                    //         //         // window.location.reload(false);
                    //         //     });
                    //     }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                            let contactId = oldData.ID;
                            setTimeout(() => {
                                const dataDelete = [...TableData];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setTableData([...dataDelete]);
                                Delete(oldData);
                                resolve();
                            }, 1000);
                            // let url = `http://localhost:8080/api/people/${contactId}`;
                            // axios.delete(url).then((res) => {
                            //     //     console.log("res", res);
                            // });
                        }),
                }}
                onSelectionChange={(selectedRows) => console.log(selectedRows)}

                options={{
                    sorting: true,
                    search: true,
                    searchFieldAlignment: "right",
                    searchAutoFocus: true,
                    searchFieldVariant: "standard",
                    filtering: true,
                    paging: true,
                    pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
                    pageSize: 5,
                    paginationType: "stepped",
                    showFirstLastPageButtons: false,
                    paginationPosition: "both",
                    exportButton: true,
                    exportAllData: true,
                    exportFileName: "TableData",
                    addRowPosition: "first",
                    actionsColumnIndex: -1,
                    selection: true,
                    showSelectAllCheckbox: false,
                    showTextRowsSelected: false,
                    selectionProps: (rowData) => ({
                        // disabled: rowData.age == null,
                        // color:"primary"
                    }),
                    // grouping: true,
                    columnsButton: true,
                    rowStyle: (data, index) =>
                        index % 2 === 0 ? { background: "#f5f5f5" } : {backgroundColor: "#EEE"},
                    headerStyle: {
                        backgroundColor: '#01579b',
                        color: '#FFF'}
                }}
                icons={{ Add: () => <AddIcon /> }}
            />

            <MaterialTable
                title="Paid Services Information"
                data={Tabledata2}
                columns={coloumns2}

                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setTableData2([...Tabledata2, newData]);
                                addPaid(newData)
                                resolve();
                            }, 500);

                            // axios
                            //     .post(
                            //         "http://localhost:8080/api/people",
                            //
                            //         newData
                            //     )
                            //     .then((response) => {
                            //         // alertService.success("User added",);
                            //         console.log(response);
                            //     })
                            //     .catch((error) => {
                            //         console.log(error);
                            //     });
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataUpdate = [...Tabledata2];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                setTableData2([...dataUpdate]);
                                updatePaid(newData,oldData);
                                resolve();
                            }, 500);
                            //         // axios
                            //         //     .patch(
                            //         //         `http://localhost:8080/api/people/id/${newData.ID}`,
                            //         //         newData
                            //         //     )
                            //         //     .then((res) => {
                            //         //         // window.location.reload(false);
                            //         //     });
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                            let contactId = oldData.ID;
                            setTimeout(() => {
                                const dataDelete = [...Tabledata2];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setTableData2([...dataDelete]);
                                Delete(oldData);
                                resolve();
                            }, 1000);
                            // let url = `http://localhost:8080/api/people/${contactId}`;
                            // axios.delete(url).then((res) => {
                            //     //     console.log("res", res);
                            // });
                        }),
                }}
                onSelectionChange={(selectedRows) => console.log(selectedRows)}

                options={{
                    sorting: true,
                    search: true,
                    searchFieldAlignment: "right",
                    searchAutoFocus: true,
                    searchFieldVariant: "standard",
                    filtering: true,
                    paging: true,
                    pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
                    pageSize: 5,
                    paginationType: "stepped",
                    showFirstLastPageButtons: false,
                    paginationPosition: "both",
                    exportButton: true,
                    exportAllData: true,
                    exportFileName: "TableData",
                    addRowPosition: "first",
                    actionsColumnIndex: -1,
                    selection: true,
                    showSelectAllCheckbox: false,
                    showTextRowsSelected: false,
                    selectionProps: (rowData) => ({
                        // disabled: rowData.age == null,
                        // color:"primary"
                    }),

                    columnsButton: true,
                    rowStyle: (data, index) =>
                        index % 2 === 0 ? { background: "#f5f5f5" } : {backgroundColor: "#EEE"},
                    headerStyle: {
                        backgroundColor: '#01579b',
                        color: '#FFF'}
                }}
                icons={{ Add: () => <AddIcon /> }}
            />



        </div>
    )
}
export default ServiceTable