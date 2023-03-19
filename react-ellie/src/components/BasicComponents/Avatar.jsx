import React from 'react';

export default function Avatar({ image }) {
  return (
    <div className="avatar">
      <img
        className="photo"
        src={image}
        alt="avatar"
      />
      <span className="new">New</span>
    </div>
  );
}
