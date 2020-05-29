import React, { useState, useEffect } from "react";
import Link from "next/link";
import Paginate from "react-js-pagination";

// import styles from "./dashboard.module.css";
// import "./dashboard.css";

import { count, readContact } from "../../services/contact";

const Dashboard = () => {
    const [activePage, setActivePage] = useState(1);
    const [items, setItems] = useState(0);
    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await count();
        setItems(result);
        const resultData = await readContact(activePage);
        console.log(resultData);
        Object.values(resultData).map(item => setData((prevArray) => [...prevArray, item]));
        // console.log(data);
    }, [activePage])

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
    }
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="w-full md:w-3/5 mx-auto p-8">
                    <p><strong>Contacts</strong></p>
                    <div className="shadow-md">
                        {
                            data && data.map(items => (
                                <div className="tab w-full overflow-hidden border-t">
                                    <input className="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs" />
                                    <label className="block p-5 leading-normal cursor-pointer" for="tab-multi-one">{items.name}</label>
                                    <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                        <p className="p-5">Date Of Birth: {items.dob} </p>
                                        <p className="p-5 my-5">Email: {items.email} </p>
                                        <p className="p-5 my-5">Mobile Number: {items.mobNo} </p>
                                    </div>
                                </div>
                            ))
                        }

                        {/* <div className="tab w-full overflow-hidden border-t">
                            <input className="absolute opacity-0" id="tab-multi-two" type="checkbox" name="tabs" />
                            <label className="block p-5 leading-normal cursor-pointer" for="tab-multi-two">Label Two</label>
                            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                            </div>
                        </div>
                        <div className="tab w-full overflow-hidden border-t">
                            <input className="absolute opacity-0" id="tab-multi-three" type="checkbox" name="tabs" />
                            <label className="block p-5 leading-normal cursor-pointer" for="tab-multi-three">Label Three</label>
                            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                            </div>
                        </div> */}
                    </div>
                </div>

            </div>
            <div classNameName="paginationWrapper">
                <Paginate
                    activePage={activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={400}
                    pageRangeDisplayed={5}
                    onChange={(e) => handlePageChange(e)}
                />
            </div>
        </div>
    )

}
export default Dashboard;