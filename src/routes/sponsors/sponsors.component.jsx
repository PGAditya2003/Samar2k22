import {useEffect} from "react";
import "./style1.css";
import dainikBhaskar from "../../Assets/Images/Sponsors/dainikbhaskar.jpg";
import ibc from "../../Assets/Images/Sponsors/ibc.jpg";
import sparkcar from '../../Assets/Images/Sponsors/sparkcars.jpeg'
import carshringar from '../../Assets/Images/Sponsors/carShringar.jpeg'
import upgradraipur from '../../Assets/Images/Sponsors/upgradRaipur.jpeg'
function Sponsors() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class="spo-wrapper">
      <div class="spo-sidebar">
        <h3 id="sponsor-wrap" className="spo-heading1 mt-10" ><span id="sponsor-text">SPONSORS</span></h3>
        <p  className="spo-text " >
          SAMAR success is unmatched and this
          is due to renowned partners we have who have always provided
          unequivocal support . The mutual work between samar and it's partners
          have always lived up to the expectations of the audience and attracted
          a new audience.
        </p>
      </div>
      <div className="line block">
        <hr className="li block"/>
      </div>
      <div class="spo-main  ">
        <div className="sponsor-first flex">
            <img src={dainikBhaskar} alt="dainikbhaskar " className="spo-img" />
            <h1 className="spo-heading" >PRINT MEDIA PARTNER</h1>
        </div>

        <div className="sponsor-first  ">
            <img src={ibc} alt="ibc24" className="spo-img" />
          <h1 className="spo-heading">TELEVISION PARTNER</h1>
        </div>

        <div className="sponsor-first flex">
            <img src={sparkcar} alt="dainikbhaskar" className="spo-img" />
          <h1 className="spo-heading">TRAVEL PARTNER</h1>
        </div>

        <div className="sponsor-first flex">
            <img src={carshringar} alt="ibc24" className="spo-img" />
          <h1 className="spo-heading">DECORATION PARTNER</h1>
        </div>
        
        <div className="sponsor-first">
            <img src={upgradraipur} alt="dainikbhaskar" className="spo-img" />
          <h1 className="spo-heading">UPSKILLING PARTNER</h1>
        </div>

      </div>
    </div>
  );
}

export default Sponsors;
