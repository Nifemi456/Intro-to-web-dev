import './App.css';
import Layout from '../Layout/Layout';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';


function App() {
  return (
    <Grid container> 
      <Layout />
      <Outlet />
    </Grid>
  );
}

export default App;
