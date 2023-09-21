import { Chrono } from "react-chrono";
import {Link} from "react-router-dom"

const customContent = [
  <Link style={{textDecoration:"none"}} to="/events">
  <div>
    <h3 style={{color:"white"}}>Learn Course Online</h3> 
  </div>
    </Link>,
  <div>
    <h3 style={{color:"white"}}>Faculty Profile</h3>
  </div>,
   <div>
   <h3 style={{color:"white"}}>Student Organization</h3>
 </div>,
  <div>
  <h3 style={{color:"white"}}>Department Achivements</h3>
</div>,
];

const VerticalAlternatingTimeline = () => {
  return (
    <div>
    <h1 style={{textAlign:'center',marginTop:"20px",marginBottom:"20px"}}>Time-Line</h1>

    <Chrono
      mode="VERTICAL_ALTERNATING"
      cardHeight={50} 
      mediaHeight={500}
      cardWidth={400}
      slideItemDuration={1000} slideShow
      theme={{
        cardBgColor:"#27005D",
        secondary: "white",
      }}
    >
      {customContent}
    </Chrono>
    </div>
  );
};

export default VerticalAlternatingTimeline;