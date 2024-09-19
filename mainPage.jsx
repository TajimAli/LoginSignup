import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignupLogin from './userLogin';
import CompanySignupLogin from './companyLogin';
import EmployeeSignupLogin from './EmployeeLogin';
import TablePage from './loginData';
import './styles.css';

function Appkkk() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">User Signup/Login</Link></li>
            <li><Link to="/company">Company Signup/Login</Link></li>
            <li><Link to="/employee">Employee Signup/Login</Link></li>
            <li><Link to="/table">View Data</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<SignupLogin />} />
          <Route path="/company" element={<CompanySignupLogin />} />
          <Route path="/employee" element={<EmployeeSignupLogin />} />
          <Route path="/table" element={<TablePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Appkkk;












// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import SignupLogin from './userLogin';
// import CompanySignupLogin from './companyLogin';
// import EmployeeSignupLogin from './EmployeeLogin';
// import TablePage from './loginData';

// function Appkkk() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li><Link to="/">User Signup/Login</Link></li>
//             <li><Link to="/company">Company Signup/Login</Link></li>
//             <li><Link to="/employee">Employee Signup/Login</Link></li>
//             <li><Link to="/table">Table Page</Link></li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<SignupLogin />} />
//           <Route path="/company" element={<CompanySignupLogin />} />
//           <Route path="/employee" element={<EmployeeSignupLogin />} />
//           <Route path="/table" element={<TablePage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default Appkkk;
