import React, { useState, useEffect } from "react";
import Link from "next/link";
import Paginate from "react-js-pagination";
import { IoIosAdd } from "react-icons/io";
// import styles from "./dashboard.module.css";
// import "./dashboard.css";
import Contact from "../contact/contact";

import Button from "../common/Button";

import { count, readContact, contactDelete, findContact } from "../../services/contact";

const Dashboard = () => {
    const [activePage, setActivePage] = useState(1);
    const [items, setItems] = useState(0);
    const [data, setData] = useState([]);
    const [addFlagData, setAddFlagData] = useState(false);
    const [editData, setEditData] = useState({});
    const [editFlag, setEditFlag] = useState(false);


    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
        setData([]);
    }
    useEffect(() => {
        async function fetchData() {

            const result = await count();
            setItems(result.count);
            const resultData = await readContact(activePage);
            Object.values(resultData).map(item => setData((prevArray) => [...prevArray, item]));
        }
        fetchData();
    }, [activePage])

    const handleRemoveItem = async (id) => {
        const result = await contactDelete(id);
        if (result.message === "Data Deleted") {
            window.location.reload(false);
        } else {
            alert(result.message);
        }
    }

    const handleEdit = async (id) => {
        const result = await findContact(id);
        setEditData(result);
        setEditFlag(true);
    }
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="w-full md:w-3/5 mx-auto p-8">
                    <p><strong>Contacts</strong></p>
                    <div className="shadow-md">
                        {
                            data && data.map(items => (
                                <div key={items._id} className="tab w-full overflow-hidden border-t">
                                    <input className="absolute opacity-0 " id={`${items._id}`} type="checkbox" name="tabs" />
                                    <label className="block p-5 leading-normal cursor-pointer" htmlFor={`${items._id}`}>{items.name}</label>
                                    <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                        <div className="p-5 flex justify-end">
                                            <div className="p-2">
                                                <Button onClick={() => handleRemoveItem(items._id)}>Remove</Button>
                                            </div>
                                            <div className="p-2">
                                                <Button onClick={() => handleEdit(items._id)}>Edit</Button>
                                            </div>
                                        </div>
                                        <p className="p-5">Date Of Birth: {items.dob} </p>
                                        <p className="p-5 my-5">Email: {items.email} </p>
                                        <p className="p-5 my-5">Mobile Number: {items.mobNo} </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="paginationWrapper">

                <Paginate
                    activePage={activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={items}
                    pageRangeDisplayed={5}
                    onChange={(e) => handlePageChange(e)}
                />
            </div>

            <div>
                <IoIosAdd size={40} onClick={() => { setAddFlagData(true) }} />
            </div>
            {
                addFlagData && <Contact addFlagData={addFlagData} handleFlag={() => setAddFlagData(!addFlagData)} />
            }
            {
                editFlag && <Contact editData={editData} editFlag={editFlag} handleEditFlag={() => setEditFlag(!editFlag)} />
            }
        </div>
    )

}
export default Dashboard;