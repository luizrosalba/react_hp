import React from "react";
import * as S from "./styled";
const baseRepository = "https://github.com/";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>Link do Repositório:</S.WrapperFullName>
      {console.log(linkToRepo)}
      <S.WrapperLink href={baseRepository+linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;
