import React from "react";

function Layout({ children }) {
  return (
    <div>
      <h1>Register/Login</h1>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
