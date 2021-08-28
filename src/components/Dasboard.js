import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {

  GridToolbarContainer,
  GridToolbarExport,
} from '@material-ui/data-grid';
import { fetchUser } from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
const columns = [
  { field: 'id',
   headerName: 'ID',
    width: 120 },
  {
    field: 'fullname',
    headerName: 'Fullname',
    width: 200,
    editable: true,
  },
  {
    field: 'account',
    headerName: 'Account',
    width: 200,
    editable: true,
  },
  {
    field: 'language',
    headerName: 'Language',
    width: 200,
    editable: true,
  },
  {
    field: 'phone_number',
    headerName: 'Phone',
    width: 200,
    editable: true,
  },
];


export default function DataGridDemo() {
  const user = useSelector((state) => state.user.data);
console.log(user);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUser());
	});
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      components={{
        Toolbar: CustomToolbar,
      }}
        rows={user}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}