import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import BoardsPage from './components/boardsPage';
import NewBoardPage from './components/newBoardPage';
import BoardPage from './components/boardPage';

const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={BoardsPage} />

      <Switch>
        <Route exact path='/boards/new' component={NewBoardPage} />
        <Route path={`/boards/:boardId`} component={BoardPage} />
      </Switch>
    </div>
  </Router>
)
export default App;
