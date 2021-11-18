import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ResetCSS from './utils/ResetCSS'
import Home from './pages/Home'

const App = () => {
    return (
        <BrowserRouter>
            <ResetCSS />
            <Switch>
                <Route from='/' exact>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App