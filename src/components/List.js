import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import {
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";
import { fetchUser } from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
const columns = [
  { field: "id", 
  headerName: "ID",
   width: 120 },
  {
    field: "fullname",
    headerName: "Username",
    width: 150,
    editable: true,
  },
  {
    field: "account",
    headerName: "Account",
    width: 200,
    editable: true,
  },
  {
    field: "ob_day",
    headerName: "OB Day",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    type: "number",
    width: 150,
    editable: true,
  },
];

export default function DataGridDemo() {
  const user = useSelector((state) => state.user.data);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  const rows = 
    user.map((d) => ({
      id: d.id,
      fullname: d.fullname,
      account: d.account,
      phone_number: d.phone_number,
      technology: d.technology.name,
      job_range: d.job_range.name,
      language: d.language,
      ob_day: d.ob_day,
      status: d.status.name,
    }));
  
console.log(rows)
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        components={{
          Toolbar: CustomToolbar,
        }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
