import './App.css';
import { ThemeProvider, Box } from '@mui/system';
import Header from './components/Header';
import Layout from './components/Layout';
import { appTheme } from './config/theme';
import { Route, Routes } from 'react-router-dom';
import ListCategory from './features/categories/ListCategory';
import EditCategory from './features/categories/EditCategory';
import CreateCategory from './features/categories/CreateCategory';
function App() {
  return (
    <ThemeProvider theme={appTheme}>
 <Box
      component="main"
      sx={
        {
          height: "100vh",
          backgroundColor: (theme) => theme.palette.grey[900],
        }
      }

    >
      <Header/>
      <Layout>
        <Routes>
          <Route path='/' element={<ListCategory />} />
          <Route path='/categories' element={<ListCategory />} />
          <Route path='/categories/create' element={<CreateCategory />} />
          <Route path='/categories/edit/:id' element={<EditCategory/>} />
          <Route path='*' element={
            <h1>Error</h1>
          } />
        </Routes>
      </Layout>
    </Box>
      
    </ThemeProvider>
    );
}

export default App;
