// Banner.jsx
import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

const Banner = ({ text }) => {
  return (
    <div style={{ backgroundColor: 'black',height: '40vh', textAlign: 'center', padding: '20px', alignContent:'center'}}>
      <h1 style={{ color: 'white' }}>{text}</h1>
    </div>
  );
};

Banner.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Banner;
