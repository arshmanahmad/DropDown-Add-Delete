import React, { useContext, useState } from 'react'
import "./TableShow.css";
import Context from '../../context/Context';
const TableShow = () => {
    const { roles, setRoles } = useContext(Context);
    return (
        <>
            <table>
                <thead>
                    <th><h2>Role</h2></th>

                </thead>
                <tbody>
                    {roles.map((item) => {
                        return (
                            <tr>
                                <td>{item.option} <button>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default TableShow