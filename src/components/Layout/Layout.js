import { Outlet, Link } from "react-router-dom";
import { Tabs, Tab } from '@mui/material'; 

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>          
          <li>
            <Link to="/api">Api content</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;