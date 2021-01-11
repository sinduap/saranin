import { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container'>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Landing} />
          <Route path='/surveys' exact component={Dashboard} />
          <Route path='/surveys/new' exact component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default connect(null, actions)(App);
