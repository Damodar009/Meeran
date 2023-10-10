
import makeStyles from "@material-ui/core/styles/makeStyles";
import { AppBar, Toolbar, useTheme } from "@mui/material";
const useStyles = makeStyles((theme) => (
    {
        appBar: {
            justifyContent: "center",
            height: 53,
            backgroundColor: "red"
        },
        toolbar: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        logo: {
            marginLeft: '50 px',
            marginRight: '130px',
            color: '#000000',
        },
        searchContainer: {
            flexGrow: 1,
            marginRight: theme.spacing(2),
        },
        search: {
            flexGrow: 1,
            marginRight: theme.spacing(2),
            width: 800,
        },
        searchIcon: {
            cursor: 'pointer',
        },
        iconButton: {
            color: '#000000'
        }
    }));



const MyMenu = () => {
    const re = useTheme()
    return (
        <AppBar elevation={ 0} position="static">
            <Toolbar>
            </Toolbar>
        </AppBar>
    );
};

export default MyMenu;
