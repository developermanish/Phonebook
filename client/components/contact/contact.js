/*eslint-disable*/
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { IoIosAdd } from "react-icons/io";
import uuid from "uuid/v4";

import Modal from "../common/Modal";
import ContactForm from "./components/contactForm";
import Button from "../common/Button";
import { contact, contactUpdate } from "../../services/contact";


const Contact = ({ addFlagData, handleFlag, editData, editFlag, handleEditFlag }) => {
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    // const [editData, setEditData] = useState({});


    const onEditSubmit = async (obj) => {
        const result = await contactUpdate(obj);
        console.log(result);
        if (!result) {
            window.location.reload(false);
            Router.push('/')
        } else {
            alert(result);
        }
    }

    const onSubmit = async (obj) => {
        const result = await contact(obj);
        if (!result) {
            window.location.reload(false);
            Router.push('/');
        }
        else {
            alert(result);
        }
        console.log(result);

    }



    // const handleEditItem = (e) => {
    //     const name = e.target.getAttribute("name");
    //     eduData.map(data => ((data.name === name) && setEditData(data)));
    //     setEditModal(!editModal);
    //     handleRemoveItem(e);
    // }


    useEffect(() => {
        addFlagData && setModal(!modal);
    }, [addFlagData])

    useEffect(() => {
        editFlag && setEditModal(!editModal);
    }, [editFlag])




    return (
        <div className="h-screen flex items-center justify-center">
            <div className="p-5 rounded-sm w-full h-full">

                {modal && (
                    <Modal handleModal={() => { setModal(!modal) }}
                        handleFlag={handleFlag}>
                        <ContactForm
                            handleModal={() => { setModal(!modal) }}
                            handleFlag={handleFlag}
                            onSubmit={onSubmit}
                        />
                    </Modal>)}
                {editModal && (
                    <Modal handleModal={() => { setEditModal(!editModal) }}
                        handleFlag={handleEditFlag}
                    >
                        <ContactForm
                            editContent={editData}
                            onEditSubmit={onEditSubmit}
                            handleFlag={handleEditFlag}
                            handleModal={() => { setEditModal(!editModal) }}
                        />
                    </Modal>
                )}

            </div>
        </div>
    );
}
export default Contact;