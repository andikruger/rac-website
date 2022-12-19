import React, { useEffect } from "react";

const Admin = () => {
  // redirect to randathleticclub.sanity.studio
  useEffect(() => {
    window.location.href = "https://randathleticclub.sanity.studio";
  }, []);

  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
};

export default Admin;
