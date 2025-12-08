import "./Trusted.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
function Trusted(){
    return(
  <div className="body">
<h1 className="heading">Trusted By</h1>
<div className="trusted">

<div className="main" style={{height: '350px'}}>
    <div className="child">
        <div className="smallbox" >
            <div className="image">
                 <FontAwesomeIcon
        icon={faBuildingColumns}
        style={{ color: "rgb(0, 197, 190)", fontSize: "50px" }}
      />
            </div>
        </div>

        <div className="number">100+</div>
        <div className="value">COLLEGES</div>
    </div>
    <div className="shadow1"></div>
</div>


<div className="main" style={{height: '350px'}}>
    <div className="child">
        <div className="smallbox" style={{backgroundColor:'rgb(0, 189, 235)', marginTop:'250px'}}>
            <div className="image">
                  <FontAwesomeIcon
        icon={faChalkboardUser}
        style={{ color: "rgb(0, 189, 235)", fontSize: "40px" }}
      />
            </div>
        </div>

        <div className="number">150</div>
        <div className="value">PROFESSIONAL TRAINERS</div>
    </div>
    <div className="shadow2"></div>
</div>



<div className="main" style={{height: '350px'}}>
    <div className="child">
        <div className="smallbox" style={{backgroundColor:'rgb(243, 176, 79)'}}>
            <div className="image">
                 <FontAwesomeIcon
        icon={faBookOpen}
        style={{ color: "rgb(243, 176, 79)", fontSize: "50px" }}
      />
            </div>
        </div>

        <div className="number" style={{marginTop: '50px'}}>150+</div>
        <div className="value">PROFESSIONAL TRAINING</div>
        <span className="extra">AGH LMS</span>
    </div>
    <div className="shadow3"></div>
</div>



<div className="main" style={{height: '350px'}}>
    <div className="child">
        <div className="smallbox" style={{backgroundColor:'rgb(250, 63, 70)',marginTop:'280px'}}>
            <div className="image" style={{ display: "flex", gap: "15px" }}>

      <FontAwesomeIcon
        icon={faUserGraduate}
        style={{ color: "rgb(250, 63, 70)", fontSize: "50px" }}
      />
    </div>
        </div>

        <div className="number" style={{marginTop: '50px'}}>1000+</div>
        <div className="value">STUDY MATERIALS</div>
        <span className="extra1">B2B:Placement Training</span>
    </div>
    <div className="shadow4"></div>
</div>

</div>
    </div>
    );
}
export default Trusted;