import React from 'react';

const Emoji = ({ src, label }) => (
  <span role="img" aria-label={label}>
    {src}
  </span>
)

export default Emoji;
