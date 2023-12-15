import React from 'react';

const MyProjectDetail = ({ title, ...rest }) => {
  return (
    <div>
      <Headers title={title} usedTyped="myProject" />
    </div>
  );
};

export default MyProjectDetail;
