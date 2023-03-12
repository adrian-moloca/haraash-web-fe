/* eslint-disable arrow-body-style */
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AdminHome from './pages/Admin dashboard/AdminHome';
import theme from './assets/theme';
import themeDark from './assets/theme-dark';
import ComingSoon from './pages/coming soon/ComingSoon';

const App = () => {
  const [mode, setMode] = React.useState('dark');

  const themeMUI = useTheme();
  console.log(themeMUI);

  return (
    <ThemeProvider theme={mode === 'dark' ? themeDark : theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="*">
            <ComingSoon setMode={setMode} mode={mode} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
