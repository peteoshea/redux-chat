import React from 'react';
import PropTypes from 'prop-types';

const AddMessage = (props) => {
  let input;
  const author = 'Me';

  return (
    <section id="new-message">
      <input
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            props.dispatch(input.value, author);
            input.value = '';
          }
        }}
        type="text"
        ref={(node) => {
          input = node;
        }}
      />
    </section>
  );
};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default AddMessage;
