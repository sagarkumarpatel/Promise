import "./Promise.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import TurnRightIcon from '@mui/icons-material/TurnRight';
import { faLifeRing } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";



function Promise(){
    return(
        
        <div className="main">
            <div className="t1">
                <h2 className="title">Our Promise</h2>
                <p className="para">As part of our high quality service, we'd like to offer something extra too.</p>
            </div>

            <div className="child">
                <div className="element__item"  style={{ borderColor: "rgb(68, 178, 179)" }}>
                    <div className="item" >
                        <FontAwesomeIcon 
                       icon={faLaptopCode}  size="2x"  style={{ color: "rgb(68, 178, 179)" }} 
                                     />
                        <div className="item__title">Top Code Quality</div>
                    </div>
                    <div className="element__content">Our commitment goes beyond mere code - it encompasses providing solutions. You receive W3C fully compliant markup, without any compromise on quality.</div>
                </div>

                <div className="element__item"  style={{ borderColor: "rgb(239, 175, 75)" }}>
                  <div className="item">
                        <FontAwesomeIcon icon={faMobileAlt} size="2x" style={{ color: "rgb(239, 175, 75)" }}/>
                        <div className="item__title">Responsive</div>
                    </div>
                    <div className="element__content">We understand the value of a positive attitude, timely responsiveness, and adaptability. We're dedicated to attentively listening and leveraging our utmost capabilities to serve you.</div>
                </div>


                <div className="element__item"  style={{ borderColor: "rgb(0, 189, 235)" }}>
                    <div className="item">
                        <FontAwesomeIcon icon={faPeopleGroup}size="3x"style={{ color: "rgb(0, 189, 235)" }}/>
                        <div className="item__title">Rockstar Team</div>
                    </div>
                    <div className="element__content">Our expertise is our unique selling proposition. You'll have access to an all-star team of experienced professionals fully dedicated to serving you, armed with coding skills that are truly exceptional.</div>
                </div>


                <div className="element__item"  style={{ borderColor: "rgb(134, 74, 249)" }}>
                    <div className="item">
                        <div
  style={{
    backgroundColor: "rgb(134, 74, 249)",  // purple background
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",  // rounded diamond effect
    transform: "rotate(45deg)" // diamond shape
  }}
>
  <TurnRightIcon
    style={{
      color: "white",
      transform: "rotate(-45deg)" // re-straighten icon
    }}
  />
</div>

                        <div className="item__title">Fast Turn-arounds</div>
                    </div>
                    <div className="element__content">The importance of speed is on par with quality for us. We are swift, nimble, and capable of providing high-quality code within a timeframe that suits your preferences.</div>
                </div>


                <div className="element__item"  style={{ borderColor: "rgb(252, 41, 71)" }}>
                    <div className="item">
                        <FontAwesomeIcon
        icon={faLifeRing}
        style={{ color: "rgb(252, 41, 71)", fontSize: "40px" }}
      />
                        <div className="item__title">Life-time support</div>
                    </div>
                    <div className="element__content">Our commitment to code quality is exemplified by our enduring support. If any bugs happen to emerge in the future, feel free to reach out to us for assistance.</div>
                </div>


                <div className="element__item"  style={{ borderColor: "rgb(50, 199, 102)" }}>
                    <div className="item">
                        <FontAwesomeIcon
        icon={faShield}
        style={{ color: "rgb(50, 199, 102)", fontSize: "40px" }}
      />
                        <div className="item__title">Secured Agreement</div>
                    </div>
                    <div className="element__content">Our The creative work you receive is entirely your own, and we unequivocally respect that. We assure you of our commitment and readiness to formalize this with a Non-Disclosure Agreement (NDA).</div>
                </div>
            </div>
        </div>
    );
}
export default Promise;