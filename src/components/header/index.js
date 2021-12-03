import React, { useEffect } from "react";
import useGithub from "../../hooks/github-hooks";

const Header = () => {
  const { getUser } = useGithub();
  useEffect (()=>{
    return getUser("luizrosalba");
  }, [])
  return (
    <header>
    </header>
  );
};

export default Header;
