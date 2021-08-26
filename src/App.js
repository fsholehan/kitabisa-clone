import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ViewPage from "./pages/ViewPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/view" component={ViewPage} exact />
        <Route path="/search" component={SearchPage} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
