import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const columns: GridColDef[] = [
  { field: 'nombre', headerName: 'Nombre', width: 250 },
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'actions',
    headerName: 'Acciones',
    width: 200,
    renderCell: (params) => (
      <div>
        {params.value.map((action) => (
          <Tooltip title={action.name} key={action.name}>
            <IconButton onClick={action.onClick} >
              {action.icon}
            </IconButton>
          </Tooltip>
        ))}
      </div>
    ),
  },
];

export default function DataTableClases({ rows}) {
  return (
    
    <div style={{ height: 400, width: '100%' }}>
      
        <Link to="/admin/agregarClase">
          <button style={{margin: '5px'}}>
            NUEVA CLASE
          </button>
        </Link>
      
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
