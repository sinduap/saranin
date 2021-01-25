import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      Dahboard
      <div className='fixed-action-btn'>
        <Link
          to='/surveys/new'
          className='btn-floating light-blue darken-4 btn-large'
        >
          <i className='material-icons'>add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
