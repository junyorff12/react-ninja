import React from 'react';
import Title from './title';

const App = React.createClass({

  render: function () {
    return (
      <div className='container'>
        <Title name='Junyor Silva' lastname='FF12' />
      </div>
    );
  }
});

export default App;
