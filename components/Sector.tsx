import React from "react";

const Sector = ({ children }: { children: React.ReactNode }) => {
  return <section className="my-4 sm:my-2">{children}</section>;
};

export default Sector;
