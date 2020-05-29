/*eslint-disable*/
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { IoIosAdd } from "react-icons/io";
import uuid from "uuid/v4";

import Modal from "../common/Modal";
import ContactForm from "./components/contactForm";
import Button from "../common/Button";
import { contact, contactGet, contactUpdate, contactDelete } from "../../services/contact";


const Contact = () => {
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [editData, setEditData] = useState({});


    const onEditSubmit = async (obj) => {
        const result = await contactUpdate(obj);
        console.log(result);
    }

    const onSubmit = async (obj) => {
        const result = await contact(obj);
        if (!result) {
            Router.push('/');
        }
        else {
            alert(result);
        }
        console.log(result);

    }

    const handleRemoveItem = async (e) => {
        const name = e.target.getAttribute("name");
        const result = await contactDelete(name);
        // setContactData(eduData.filter(data=>data.name!==name));
    }

    const handleEditItem = (e) => {
        const name = e.target.getAttribute("name");
        eduData.map(data => ((data.name === name) && setEditData(data)));
        setEditModal(!editModal);
        handleRemoveItem(e);
    }



    return (
        <div className="h-screen flex items-center justify-center">
            <div className="border border-gray-600 border-solid p-5 rounded-sm w-full h-full">
                <div className="text-center">
                    <h2 className="mt-2 mb-10 text-3xl text-gray-800">
                        Phonebook
                    </h2>
                </div>
                <IoIosAdd size={40} onClick={() => { setModal(!modal) }} />
                {modal && (
                    <Modal handleModal={() => { setModal(!modal) }}>
                        <ContactForm
                            handleModal={() => { setModal(!modal) }}
                            onSubmit={onSubmit}
                        />
                    </Modal>)}
                {editModal && (
                    <Modal handleModal={() => { setEditModal(!editModal) }}>
                        <ContactForm
                            editContent={editData}
                            onEditSubmit={onEditSubmit}
                            handleModal={() => { setEditModal(!editModal) }}
                        />
                    </Modal>
                )}

            </div>
        </div>
    );
}
export default Contact;