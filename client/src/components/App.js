import { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Route path='/' exact component={Landing} />
        <Route path='/surveys' exact component={Dashboard} />
        <Route path='/surveys/new' exact component={SurveyNew} />
      </div>
    </BrowserRouter>
  );
};

export default connect(null, actions)(App);
