import React from 'react';
import Usp from './Usp';

const UspList = ({ uspData }) => {
  const renderUsps = (data) => {
    return data.map( (usp) => {
      const icon = usp.icon ? usp.icon.url : null;
      return <Usp title={usp.title} iconSrc={icon} description={usp.description} key={usp.title} />
    });
  }

  return (
    <div className='usp'>
      {renderUsps(uspData)}
    </div>
  );
};

export default UspList;
