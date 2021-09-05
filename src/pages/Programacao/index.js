import React from 'react'
import Layout from "../../components/layout";
import NoSearch from "../../components/no-search";
import NotFound from "../../components/not-found";
import Profile from "../../components/profile";
import Repositories from "../../components/repositories";
import useGithub from "../../hooks/github-hooks";
import loading from '../../img/Spinner-1s-200px.svg'

const Loading = () => {
  return (
    <>
      <img src={loading} alt="loading..." />
    </>
  )
}

const Github = () => {
  const { 
    githubState 
  } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <Loading />
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        githubState.notFound?
          <NotFound />
        :
          <NoSearch />
      )}
    </Layout>
  );
};

const Programacao  = () => {
  return (
    <div className="App-body">
      <div className="container-corpo">
        <div className="texto_secao">
          PORTFÓLIO      
        </div>
          <Github/>            
      </div>
    </div>

  )
}

export default Programacao 
