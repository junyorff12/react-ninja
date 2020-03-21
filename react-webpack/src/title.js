import React from 'react';

const Title = ({ name, lastname }) => (
  <h1>{`${name} ${lastname}`}</h1>
);

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'não tem'
};

/* const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Desconhecido',
      sobrenome: 'Sem sobrenome'
    };
  },
  render () {
    const fullName = `${this.props.name} ${this.props.sobrenome}`;
    return <h1> Olá {fullName}!</h1>;
  }
});
 */
export default Title;
