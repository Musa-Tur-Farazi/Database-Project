import React, {useEffect, useState} from 'react'
import AdminDrawer from "./AdminDrawer";
import MaterialTable from "material-table";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import {customer_id} from "../App";
import {reservationlist} from "./FirstPageAdmin";
const ReservationList=()=>
{

    const [TableData, setTableData] = useState(reservationlist);

    const columns = [
        {
            title: "Booking Id",
            field: "Booking_id",
            sorting: true,
            align: "center",
            filtering: true,
            editable:'never',
            cellStyle: {
                background: "#009688",
                fontfamily: "corgette",
                height: 80,
                maxHeight: 80,
            },
            headerStyle: { color: "#fff" },
        },
        {
            title: "Customer Id",
            field: "customer",
            align: "center",
            type: "numeric",
            sorting: "true",
            filtering: "true",
            grouping: false,
            editable:'never',

        },
        {
            title: "Arrival Date",
            field: "Arrival_date",
            sorting: true,
            type: "numeric",
            filtering: true,
            editable:'never',
            cellStyle: { background: "#009688" },
            headerStyle: { color: "#fff" },
        },
        {
            title: "Departure Date",
            field: "Departure_date",
            align: "center",
            type: "numeric",
            grouping: false,
            editable:'never',

        },
        {
            title: "Charged Amount",
            field: "Charged_Amount",
            align: "center",
            type: "numeric",
            sorting: "true",
            filtering: "true",
            grouping: false,
            editable:'never',

        }
    ];
    return(
        <div>
            <AdminDrawer/>
            <MaterialTable
                title="Customer's Information and Reservation"
                data={TableData}
                columns={columns}

                // editable={
                // }
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
                    grouping: true,
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
export default ReservationList