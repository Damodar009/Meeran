import createTheme from '@material-ui/core/styles/createTheme';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider } from '@mui/material';
import Badge from './components/atom/badge';
import MyButton from './components/atom/button';
import InputField from './components/atom/input-field';
import PasswordField from './components/atom/password_feild';
import MyMenu from './components/organism/appbar';
import { themeOptions } from './theme';

function App() {
  const theme = createTheme(themeOptions)
  return (
    <ThemeProvider theme={theme}>
      <div>
        <MyMenu></MyMenu>

        <MyButton variant="contained" elevation={true} prefixIcon={<SearchIcon />} onClick={() => { }} size="large" >
          Button
        </MyButton >
        <Badge />
        {/* <Table /> */}
        <InputField label='Label'onChange={() => { }  } hint="Enter your name" />
        <PasswordField/>
      </div>
    </ThemeProvider>
  );
}
export default App;
