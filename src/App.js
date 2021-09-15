import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import PrivateRoute from "./components/private-route";
import PublicRoute from "./components/public-route";
import Login from "./containers/auth/login";
import Devices from "./containers/Devices";
import * as authService from "./services/auth.service";

function App() {

  const isAuthenticated = authService.isAuthenticated();
  return (
    <Router>
      <Switch>
        <PublicRoute 
          exact 
          path={["/", "/login"]}
          isAuthenticated={isAuthenticated}
        >
          <Login />
        </PublicRoute>
        <PrivateRoute 
          isAuthenticated={isAuthenticated}
          path="/devices"
        >
          <Devices />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;

