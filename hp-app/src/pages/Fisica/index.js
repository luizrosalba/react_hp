import React from 'react'
import logo from '../../img/canal.jpg';

const Fisica = () => {
  return (
    <div className="App-body">
      <div className="container-corpo">

        {/* <div className="container-foto">
          <a href = "https://www.youtube.com/user/luizorosalba" 
          target= "_blank" rel="noopener noreferrer" >
          <img  src={logo}  alt='logo' className = "photo" /> 
          </a>
      </div> */}

        <div className="texto_secao"> Materiais de Física
        </div>
        <div className="links ">
          <a href="https://www.youtube.com/user/luizorosalba" target="_blank" rel="noopener noreferrer" > Conheça meu canal no YouTube criado para ajudar estudantes a resolver exercícios de física.   </a>
          <br></br>
          <div className="colunas-fisica">
            
            <div>
              <div className="title_page"> <center>  Física 1 </center> <hr></hr> </div>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD8FZ82h-Q1S6RzkknzHu6Xk" target="_blank" rel="noopener noreferrer" > Bases da Física   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD9qIUW8kas5BD2xYrjSRcYP" target="_blank" rel="noopener noreferrer" > Movimento Retilíneo Uniforme (MRU)  </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD-2FLRFk2ysr2id4JP-ndhY" target="_blank" rel="noopener noreferrer" > Movimento Retilíneo Uniformemente Acelerado  (MRUV)  </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD_iKyIm7rFB-6dfx3cwCmVn" target="_blank" rel="noopener noreferrer" > Vetores  </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD8GY_ZUIBvP5WT4utX6BBOL" target="_blank" rel="noopener noreferrer" > Movimento Circular Uniforme (MCU) </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD_RPiScsXqTeYMXEYJVWihy" target="_blank" rel="noopener noreferrer" > Movimento Circular uniformemente acelerado </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD9eY2SuacgOxSdxWG83nK-n" target="_blank" rel="noopener noreferrer" > Movimento com ação da gravidade </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD9rD6gHdV4i8dVE4UGnhW_A" target="_blank" rel="noopener noreferrer" > Força de atrito  </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD9AKrEJwQYJLFXQ1SuJk0GW" target="_blank" rel="noopener noreferrer" > Forças - Leis de Newton  </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD9sxHfS56rrxH7_Iu4Anvfa" target="_blank" rel="noopener noreferrer" > Conservação de energia  </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD81ZzKFy1I4yu4cJT_f8I6l" target="_blank" rel="noopener noreferrer" > Trabalho, Energia e Potência </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD9utLaI_O6yjZCezhZNKhWL" target="_blank" rel="noopener noreferrer" > Quantidade de movimento </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD-uEaTKCyfLW1Pjj4Y4rQwU" target="_blank" rel="noopener noreferrer" > Estática de sólidos  </a>
            </div>
            <div>
              <div className="title_page">   <center>  Física 2 </center> <hr></hr> </div>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD9xApdxjKpOc9msl8rpLPoI" target="_blank" rel="noopener noreferrer" >Hidrostática   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD9FcKGLZWInPm_LKkngISKu" target="_blank" rel="noopener noreferrer" >Hidrodinâmica   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD_FaFr-WDy6N2uB77hvLgMw" target="_blank" rel="noopener noreferrer" >Movimento Harmônico Simples (MHS)   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD_wSsQH9c5JxPP5M_DF1ziy" target="_blank" rel="noopener noreferrer" >Ondulatória  </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD_3u_S0VwLXZxctn9iDRlq1" target="_blank" rel="noopener noreferrer" > Acústica   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD-qdC7PUzYP2o23rqRdPZFd" target="_blank" rel="noopener noreferrer" >Termometria   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD-S1rbIac3lxuAKM4MfmtZ5" target="_blank" rel="noopener noreferrer" >Dilatometria   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD-7S4-K5HfDWnu9-NDT3-de" target="_blank" rel="noopener noreferrer" >Calor e propagação de Calor   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD-dBP18-OFF1LymERAH5oAX" target="_blank" rel="noopener noreferrer" >Calor Específico, Latente  e Equilíbrio Térmico   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD8GIxzE-hOqmdEVb9bJNIdM" target="_blank" rel="noopener noreferrer" >Gases Ideais   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD8doh4Y-B9IGKWUkwPdNGY8" target="_blank" rel="noopener noreferrer" >Termodinâmica   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD9NO15RPRPISdkUzIIKmgH8" target="_blank" rel="noopener noreferrer" >Reflexão   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD_4rG6lHNDfez4lykAjT8v7" target="_blank" rel="noopener noreferrer" >Óptica Geométrica    </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD9NO15RPRPISdkUzIIKmgH8" target="_blank" rel="noopener noreferrer" >Reflexão   </a>
            </div>
            <div>
              <div className="title_page">   <center>  Física 3 </center> <hr></hr> </div>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD_2cLv5iw4AeisO0xAmchG9" target="_blank" rel="noopener noreferrer" > Eletrização   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD9-rEiUsAzw9isuTv64jvB3" target="_blank" rel="noopener noreferrer" > Força Elétrica   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD8Lk02dLuaG89kdAqAIP7Bo" target="_blank" rel="noopener noreferrer" > Campo Elétrico   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD8rj0PdW9_YPIiXraP-w1dA" target="_blank" rel="noopener noreferrer" > Lei de Gauss   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD8aos9nnh2cEnMm16AIOT0Q" target="_blank" rel="noopener noreferrer" > Potencial Elétrico   </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD-UqD1zQhY9_C7hVoIL_rrS" target="_blank" rel="noopener noreferrer" > Capacitores  </a>
              <a href="https://www.youtube.com/playlist?list=PLa9GqOuhTSD9v18kmXz9fZQXPPho3YpZt" target="_blank" rel="noopener noreferrer" > Corrente Elétrica   </a>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}


{/* <div className="title_page">  Simulações em Física</div>
<div className="links">
  <a href = "https://www.vascak.cz/physicsanimations.php?l=pt" target= "_blank" rel="noopener noreferrer">  Vascak Html5    </a>  
  <a href = "http://physics.bu.edu/~duffy/HTML5/"              target= "_blank" rel="noopener noreferrer">  Duffy HTML5    </a>   
</div>                 */}


/*
const Container = styled.div`
  display: flex;
  flex-direction: column;

`

<img align="left" src="img/Capturar.PNG" alt= "Foto de Luiz Fernando Rosalba" class = "photo" height="10%" width="10%" > </img>


*/

export default Fisica
