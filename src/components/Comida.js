import React from 'react';

const Comida = (props) => {
  const { linkcom } = props;
  return (
    <div>
      <div>
        {linkcom.name} ({linkcom.ability})
      </div>
    </div>
  );
};

export default Comida;