import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage src={githubState.user.avatar} alt="Avatar of user" />
      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserGeneric>
            <h3>Username:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
             <u> {githubState.user.login} </u>
            </a>
          </S.WrapperUserGeneric>
          {/* <S.WrapperUserGeneric>
            <h3>Company:</h3>
            <span>{githubState.user.company}</span>
          </S.WrapperUserGeneric> */}
          <S.WrapperUserGeneric>
            <h3>Link para o Repositório:</h3>
            <a href={"https://github.com/luizrosalba?tab=repositories"} target="_blank" rel="noreferrer">
              <u>Repositório do Github</u>
            </a>
          </S.WrapperUserGeneric>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Seguidores</h4>
            <span> {githubState.user.followers}</span>
          </div>
          <div>
            <h4>{githubState.user.name} segue: </h4>
            {
              githubState.user.following<=1?
                <span> {githubState.user.following} perfil</span> 
              :
              <span> {githubState.user.following} perfis</span> 
            }
          
          </div>
          <div>
            <h4>Gists</h4>
            <span> {githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repositórios Públicos</h4>
            <span> {githubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
