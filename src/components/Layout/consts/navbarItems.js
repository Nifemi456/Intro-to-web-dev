import HomeIcon from '@mui/icons-material/Home';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import TableChartIcon from '@mui/icons-material/TableChart';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <HomeIcon/> ,
        label: "Home",
        route: "",
    },
    {
        id: 1,
        icon: <DynamicFormIcon /> ,
        label: "Form",
        route: "form",
    },
    {
        id: 2,
        icon: <TableChartIcon/>,
        label: "Api Table",
        route: "api",
    },
]