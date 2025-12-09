import FetchApi from "./FetchApi/Fetch.jsx";
import Promise from "./Promise/Promise.jsx";
import Trusted from "./Trusted/Trusted.jsx";
import { Routes, Route, Outlet } from "react-router-dom";
import Four0Four from "./404-component/Four0Four.jsx";
import UseState from "./UseCase1/UseState1.jsx";
import UsestateformComponent from "./UseState2/UseState2.jsx";
import RegisterApp from "./Promise/LMS/Lms.jsx";
import UseEffectPracticeTwo from "./UseEffect/Useeffect.jsx";
import FetchApi2 from "./UseEffect/UseEffect2.jsx";

function App() {
   return (
      // <Routes>
      //    <Route path="/" element={<Promise />} />
      //    <Route path="/leetcode" element={<Outlet />}>
      //       <Route index element={<Trusted />} />
      //       <Route path="happy" element={<Promise />} />
      //       {/* <Route path="hi" element={<Trusted />} /> */}
      //    </Route>
      //    <Route path="*" element={<Four0Four/>}/>
      // </Routes>


   <Routes>
      {/* <Route path="/" element={<UseState/>} /> */}
      {/* <Route path="/" element={<UseState/>} /> */}
       {/* <Route path="/UsestateformComponent" element={<UsestateformComponent />} /> */}
       {/* <Route path="/RegisterApp" element={<RegisterApp/>}/> */}
       {/* <Route path="/FetchApi" element={<FetchApi/>}/> */}
       <Route path="/Useeffect" element={<UseEffectPracticeTwo/>}/>
       <Route path="/FetchApi2" element={<FetchApi2/>}/>


   </Routes>
   );
}

export default App;
