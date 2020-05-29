import React from "react";
import Head from "next/head";

import Contact from "../components/contact/contact";

const ContactPage = () => (
    <div >
        <Head><title>Phonebook</title></Head>
        <Contact />
    </div>
);
export default ContactPage;