import { Box, Button, IconButton, Typography } from '@mui/material'
import { useAppSelector } from '../../app/hooks'
import { selectCategories } from './CategorySlice'
import { Link } from 'react-router-dom'
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from "@mui/icons-material/Delete"


export const ListCategory = () => {
  
  const categories = useAppSelector(selectCategories)
  //use categories to create rows
  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
    isActive: category.is_active,
    createdAt: new Date(category.created_at).toLocaleDateString('pt-BR'),
  }));
    
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1, renderCell:renderNameCell},
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'isActive', headerName: 'Active', flex: 1, type: 'boolean',renderCell: renderIsActiveCell},
  { field: 'createdAt', headerName: 'Created At', flex: 1 },
  { field: 'description', headerName: 'Description', flex: 1 },
  { field: 'actions', headerName: 'Actions', flex: 1, renderCell: renderDelAction},
];
function renderNameCell(rowData: GridRenderCellParams){
return (
  <Link style={{textDecoration: "none"}}
   to={`/categories/edit/${rowData.id}`}>
    <Typography color={'primary'}>{rowData.value}</Typography>
  </Link>
)
}
  

  function renderDelAction(params: GridRenderCellParams){
    return (
    <IconButton 
    onClick={() => console.log('cliquei')} aria-label='delete'
    color='secondary'>
      <DeleteIcon/>
    </IconButton>
  
)}

  function renderIsActiveCell(rowData: GridRenderCellParams){
    return (
    <Typography color={rowData.value ? "primary" : "secondary"}>
    <span>{rowData.value ? "Active": "Inactive"}</span>
    </Typography>
  
)}
  return (
    
    <Box maxWidth='lg' sx={{mt:4,mb:4}}>
      <Box display="flex" justifyContent="flex-end">
      <Button variant="contained" color="secondary" component={Link} to="/category/create" style={{marginBottom: "1rem"}}>
        New Category
      </Button>
      </Box>
        Category Page
        <DataGrid 
        rows={rows} columns={columns} 
        slots={{ toolbar: GridToolbar }}
           disableColumnSelector
           disableDensitySelector
           disableColumnFilter
           checkboxSelection={true}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        />
    </Box>
  )
}

export default ListCategory;