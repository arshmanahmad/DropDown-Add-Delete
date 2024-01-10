import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context/Context'
import './DropDown.css';

const DropDown = () => {
    const { options, setOption, roles, setRoles } = useContext(Context);
    // const setInitialValue = () => {
    //     const roleValue = "Q/A";
    //     return roleValue;
    // }
    const [roleValue, setRoleValue] = useState('');
    const [oneValue, setOneValue] = useState('');
    const handleChange = (event) => {
        setRoleValue(event.target.value)
    }
    useEffect(() => {
        // This block will be executed when roleValue changes
        // You can perform side effects here if needed
        console.log('Role value changed:', roleValue);
        setOneValue(roleValue)
    }, [roleValue]); // Dependency array ensures useEffect is called when roleValue changes

    const handleAddOption = () => {
        setRoles(oneValue)
    }
    return (
        <>
            <div>
                <select onChange={handleChange} value={roleValue}>
                    {options.map((option, index) => {
                        return (
                            <option value={option.option} key={index}>{option.option}</option>
                        )
                    })}
                </select>
                <button onClick={handleAddOption} className='action-btn' >Add</button>
            </div>
        </>
    )
}

export default DropDown