import React from 'react';
import Avatar from 'components/BasicComponents/Avatar';

export default function Profile({
  image, name, title, isNew,
}) {
  return (
    <div className="profile">
      <Avatar
        image={image}
        isNew={isNew}
      />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
