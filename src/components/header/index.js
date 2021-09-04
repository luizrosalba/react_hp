import React, { useState, useEffect } from "react";
import * as S from "./styled";
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
