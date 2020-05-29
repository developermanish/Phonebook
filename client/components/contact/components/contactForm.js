/*eslint-disable*/
import React, { useState, useReducer, useEffect } from "react";
import Link from "next/link";

import TextInput from "../../common/TextInput";
import Button from "../../common/Button";
import validation from "../../../common";

function contactReducer(state, action) {
    const { type, field, value, initState } = action;
    if (type === "ON_INIT") {
        return { ...initState };
    }

    if (type === "ON_CHANGE") {
        return {
            ...state,
            [field]: value
        }
    }
    return state;
}

const contactInitState = {
    name: "",
    dob: "",
    mobNo: "",
    email: ""
}

// const isObjectEmpty =(obj)=>(obj && typeof obj === "object" && !Object.keys(obj).length)

const contactForm = ({ dataAdd, handleModal, editContent = {}, onSubmit, onEditSubmit }) => {
    const [state, dispatch] = useReducer(contactReducer, contactInitState);
    const {
        name, dob, mobNo, email
    } = state;

    useEffect(() => {
        if (!validation.isObjectEmpty(editContent))
            dispatch({ type: "ON_INIT", initState: { ...editContent } });

    }, [editContent])

    const [error, setError] = useState({ field: "", message: "" });

    const isInputValid = (value) => {
        if (value.name === "") {
            setError({ field: "name", message: "Enter your name" });
        } else if (value.dob === "") {
            setError({ field: "dob", message: "Enter your date of birth" });
        } else if (value.mobNo === "") {
            setError({ field: "mobNo", message: "Enter your mobile number" });
        } else if (value.mobNo.length > 10) {
            setError({ field: "mobNo", message: "Invalid Mobile Number" });
        } else if (value.email === "") {
            setError({ field: "email", message: "Enter your email address" });
        } else {
            return true;
        }

        return false;
    };

    const onChange = (e) => {
        if (error.field === e.target.name) {
            setError({ field: "", message: "" });
        }
        dispatch({ type: "ON_CHANGE", field: e.target.name, value: e.target.value });
    }

    const handleSubmitForm = (state) => {
        if (isInputValid(state)) {

            if (!validation.isObjectEmpty(editContent)) {
                onEditSubmit(state);
            } else {
                onSubmit(state);
            }
            // dataAdd(state);
            handleModal();
        }

    }
    return (
        <form>
            <div className="mb-2 ">
                <TextInput
                    type="text"
                    id="name"
                    name="name"
                    label="Name"
                    value={name}
                    autoComplete="off"
                    onChange={(e) => onChange(e)}
                    error={error.field === "name" && error.message}
                />
            </div>
            <div className="mb-2">
                <TextInput
                    type="text"
                    id="dob"
                    name="dob"
                    label="dob"
                    value={dob}
                    autoComplete="off"
                    onChange={(e) => onChange(e)}
                    error={error.field === "dob" && error.message}
                />
            </div>
            <div className="mb-2">
                <TextInput
                    type="text"
                    id="mobNo"
                    name="mobNo"
                    label="mobile no"
                    value={mobNo}
                    autoComplete="off"
                    onChange={(e) => onChange(e)}
                    error={error.field === "mobNo" && error.message}
                />
            </div>
            <div className="mb-2 ">
                <TextInput
                    type="email"
                    id="email"
                    name="email"
                    label="email"
                    value={email}
                    autoComplete="off"
                    onChange={(e) => onChange(e)}
                    error={error.field === "email" && error.message}
                />
            </div>
            <div className="my-4">
                <Button kind="solid" onClick={() => { handleSubmitForm(state); }}>
                    Add Contact
                </Button>
            </div>
        </form>

    );
}
export default contactForm;