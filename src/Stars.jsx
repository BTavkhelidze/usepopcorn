import React, { useState } from 'react';

const flex = {
  display: 'flex',
  gap: '10px',
};

const Stars = ({ maxRatings = 5 }) => {
  const [rating, setRating] = useState(0);
  const [activeRating, setActiveRating] = useState(0);
  const changeRating = (i) => {
    setRating(i);
  };

  return (
    <div style={flex}>
      {Array.from({ length: maxRatings }, (_, i) => (
        <>
          <Star
            key={i}
            onRating={() => changeRating(i + 1)}
            full={activeRating ? activeRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setActiveRating(i + 1)}
            onHoverOut={() => setActiveRating(0)}
          />
        </>
      ))}
      <span style={{ fontSize: '16px', color: 'black' }}>
        {activeRating || ''}
      </span>
    </div>
  );
};

export default Stars;

const size = {
  width: '24px',
  height: '24px',
  cursor: 'pointer',
};

const Star = ({ onRating, full, onHoverIn, onHoverOut }) => {
  return (
    <span
      style={size}
      onClick={onRating}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='bleck'
          stroke='yellow'
        >
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='bleck'
          viewBox='0 0 24 24'
          stroke='bleck'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='{2}'
            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
          />
        </svg>
      )}
    </span>
  );
};

// FULL STAR

/*
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="#000"
  stroke="#000"
>
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg>


EMPTY STAR



*/
