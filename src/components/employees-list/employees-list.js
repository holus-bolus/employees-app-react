// import EmployeesListItem from "../employees-list-item/employees-list-item";
//
// import './employees-list.css';
//
// const EmployeesList = ({data}) => {
//     const elements = data.map(item => {
//         return (
//             <EmployeesListItem name={item.name} salary={item.salary}/>
//
//         )
//     })
//
//     return (
//         <ul className="app-list list-group">
//             {elements}
//         </ul>
//     )
// }
//
// export default EmployeesList;

import React from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({data}) => {
    const elements = data.map((item) => {
        return <EmployeesListItem key={item.id} name={item.name} salary={item.salary} />;
        // return <EmployeesListItem key={id}  {...itemProps}/>;
    });

    return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
