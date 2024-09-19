import React from 'react';

function TablePage() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const companyData = JSON.parse(localStorage.getItem('companyData'));
  const employeeData = JSON.parse(localStorage.getItem('employeeData'));

  return (
    <div className="table-container">
      <h2>Stored Signup Data</h2>

      <h3>User Data</h3>
      {userData ? (
        <table>
          <thead>
            <tr>
              <th>Email/Phone</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userData.emailOrPhone}</td>
              <td>{userData.password}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No user data found.</p>
      )}

      <h3>Company Data</h3>
      {companyData ? (
        <table>
          <thead>
            <tr>
              <th>Email/Phone</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{companyData.emailOrPhone}</td>
              <td>{companyData.password}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No company data found.</p>
      )}

      <h3>Employee Data</h3>
      {employeeData ? (
        <table>
          <thead>
            <tr>
              <th>Email/Phone</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{employeeData.emailOrPhone}</td>
              <td>{employeeData.password}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No employee data found.</p>
      )}
    </div>
  );
}

export default TablePage;












// import React from 'react';

// function TablePage() {
//   const userData = JSON.parse(localStorage.getItem('userData'));
//   const companyData = JSON.parse(localStorage.getItem('companyData'));
//   const employeeData = JSON.parse(localStorage.getItem('employeeData'));

//   return (
//     <div>
//       <h2>Signup Data Table</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>User Type</th>
//             <th>Email</th>
//             <th>Password</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userData && (
//             <tr>
//               <td>User</td>
//               <td>{userData.email}</td>
//               <td>{userData.password}</td>
//             </tr>
//           )}
//           {companyData && (
//             <tr>
//               <td>Company</td>
//               <td>{companyData.companyEmail}</td>
//               <td>{companyData.companyPassword}</td>
//             </tr>
//           )}
//           {employeeData && (
//             <tr>
//               <td>Employee</td>
//               <td>{employeeData.employeeEmail}</td>
//               <td>{employeeData.employeePassword}</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default TablePage;
