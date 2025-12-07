import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="center-container">
      {children}
    </div>
  );
};

export default AuthLayout;