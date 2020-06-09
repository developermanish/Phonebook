import React from "react";
import Link from "next/link";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({ children, handleModal, handleFlag }) => {
    const abc = () => {
        handleModal();
        handleFlag();
    }
    return (
        <div className="block fixed z-10 top-0 left-0 w-full h-full bg-gray-900" onClick={abc} >
            <div className="relative">
                <div className="bg-gray-500 absolute max-w-xs p-0 mt-64 border-solid border-gray-500 " style={{ left: "40%" }} onClick={(e) => e.stopPropagation()}>
                    <div className="relative px-4 py-1">
                        <span className="absolute right-0 top-0" onClick={abc}><IoIosCloseCircleOutline size={30} /></span>
                    </div>
                    <div className="px-4 py-1  ">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;