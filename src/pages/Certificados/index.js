import React from 'react'

import cert1 from '../../img/Nodejs.PNG';
import cert2 from '../../img/HtmlDEv.PNG';
import cert3 from '../../img/reactweb.PNG';
import cert4 from '../../img/ReactNative.PNG';
import cert5 from '../../img/freedatajs.PNG';
import cert6 from '../../img/freeresponsive.PNG';
import cert7 from '../../img/avanadeglobal.PNG';
import cert8 from '../../img/avanade2.PNG';
import cert9 from '../../img/async.PNG';
import cert10 from '../../img/git.PNG';
import cert11 from '../../img/enzyme.PNG';
import cert12 from '../../img/webpack.PNG';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useWindowDimensions from "./window"


const Certificados = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const { height, width } = useWindowDimensions();
  const getW = () => {
    return (parseInt(width));
  }
  const getH = () => {
    return (parseInt(height));
  }
  let mult=1.0;
  let W = getW();
  if (1024<=W) mult = 0.25; 
  if (464<W && W<1024) mult = 0.42; 
  W = mult * W;
  let H = mult * getH();
  
 // console.log( "reposnive ", W,mult);
//   <div className="container-foto">
//   <a href="https://github.com/luizrosalba?tab=repositories" target="_blank" rel="noopener noreferrer" >
//     <img src={codepen} heigth="140px" width="140px" alt='logo' className="photo-git" />
//   </a>
// </div>


  return (

    <div className="App-body">
      <div className="container-corpo reduce-container-height ">
        <div className="texto_secao">
          Certificados
        </div>
      
        <div  className="links">
        </div>
        <div className="title_page"> <center>Meus Certificados</center>  </div>
        <br></br>
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={responsive !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >

          <div><img src={cert1} heigth={H} width={W} alt='logo' /> </div>
          <div><img src={cert2} heigth={H} width={W} alt='logo' /> </div>
          <div><img src={cert3} heigth={H} width={W} alt='logo' /> </div>
          <div><img src={cert4} heigth={H} width={W} alt='logo' /> </div>
          <div><img src={cert5} heigth={H} width={W} alt='logo' /> </div>
          <div><img src={cert6} heigth={H} width={W} alt='logo' /> </div>
          <div><img src={cert7} heigth={H} width={W} alt='logo' /> </div>
          <div><img src={cert8} heigth={H} width={W} alt='logo' /> </div>
          <div><img src={cert9} heigth={H} width={W} alt='logo' /> </div>
          <div><img src={cert10} heigth={H} width={W} alt='logo' /> </div>
          <div><img src={cert11} heigth={H} width={W} alt='logo' /> </div>
          <div><img src={cert12} heigth={H} width={W} alt='logo' /> </div>
        </Carousel>
        <br>
        </br>
        <div className="title_page"> <center>Tempo Total : {1064+15+5+3+17} h </center>  </div>


      </div>




    </div>

  )
}

/*
const Container = styled.div`
  display: flex;
  flex-direction: column;

`
*/

export default Certificados
