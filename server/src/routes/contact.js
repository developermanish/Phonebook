const express = require("express");
const router = express.Router();
const resStatus = require("../constants/responseStatus");

const contact = require("../controllers/contactController");


// contact Section Start

router.post("/contact", async (req, res) => {
    const contactObject = { ...req.body };
    try {
        const contactData = await contact.addContact(contactObject);
        console.log(contactData);
        if (!contactData) {
            return res
                .status(resStatus.INTERNAL_SERVER_ERROR)
                .send({ message: "Unable to add the details" });
        }
        return res
            .status(resStatus.SUCCESS_CREATED)
            .send(contactData);
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).send({ message: error.message });
        }
        return res.status(resStatus.INTERNAL_SERVER_ERROR).send(error.message);

    }
});

router.get("/contactCount", async (req, res) => {
    try {
        const result = await contact.getContactCount();
        console.log(result);
        if (!result) {
            return res
                .status(resStatus.INTERNAL_SERVER_ERROR)
                .send({ message: "Unable to count the contacts" });
        }

        return res
            .status(resStatus.SUCCESS_OK)
            .send({ count: result });

    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).send({ message: error.message });
        }
        return res.status(resStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }
})

router.post("/readContact", async (req, res) => {
    pageNum = { ...req.body };
    console.log(pageNum);
    console.log(req.body);
    try {
        const result = await contact.getPaginatedContact(pageNum);
        console.log(result);
        if (!result) {
            return res
                .status(resStatus.INTERNAL_SERVER_ERROR)
                .send({ message: "Unable to fetch the details" });
        }

        return res
            .status(resStatus.SUCCESS_OK)
            .send({ data: result });

    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).send({ message: error.message });
        }
        return res.status(resStatus.INTERNAL_SERVER_ERROR).send(error.message);

    }
});

router.put("/contact", async (req, res) => {
    const id = req.body._id;
    // const userid = req.body.userid;
    const updateObject = {
        ...req.body
    }
    try {
        const updateContact = await contact.updateContact(id, updateObject);
        if (!updateContact) {
            return res
                .status(resStatus.INTERNAL_SERVER_ERROR)
                .send({ message: `Error updating the contact` });
        }

        return res
            .status(resStatus.SUCCESS_CREATED)
            .send(updateContact);

    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).send({ message: error.message });
        }
        return res.status(resStatus.INTERNAL_SERVER_ERROR).send(error.message);

    }
});

router.delete("/contact", async (req, res) => {
    const id = req.body.id;
    console.log(id)
    try {
        const deleteContact = await contact.deleteContact(id);
        return res.status(resStatus.SUCCESS_OK).send({ message: "Data Deleted" });
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).send({ message: error.message });
        }
        return res.status(resStatus.INTERNAL_SERVER_ERROR).send(error.message);

    }
});

router.post("/findContact", async (req, res) => {
    const id = req.body.id;
    try {
        const result = await contact.findContact(id);
        return res.status(resStatus.SUCCESS_OK).send({ Data: result });
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).send({ message: error.message });
        }
        return res.status(resStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }
})

router.post("/searchName", async (req, res) => {
    const keyword = { ...req.body };
    try {
        const searchContact = await contact.searchContactByName(keyword);

        if (!searchContact) {

            return res
                .status(resStatus.INTERNAL_SERVER_ERROR)
                .send({ message: `Error finding the contact having keyword: ${keyword}` });
        }
        return res
            .status(resStatus.SUCCESS_OK)
            .send({ data: searchContact });
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).send({ message: error.message });
        }
        return res.status(resStatus.INTERNAL_SERVER_ERROR).send(error.message);

    }
})

router.post("/searchEmail", async (req, res) => {
    const keyword = { ...req.body };
    try {
        const searchContact = await contact.searchContactByEmail(keyword);

        if (!searchContact) {

            return res
                .status(resStatus.INTERNAL_SERVER_ERROR)
                .send({ message: `Error finding the contact having keyword: ${keyword}` });
        }
        return res
            .status(resStatus.SUCCESS_OK)
            .send({ data: searchContact });
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).send({ message: error.message });
        }
        return res.status(resStatus.INTERNAL_SERVER_ERROR).send(error.message);

    }
})

router.post("/searchMobNo", async (req, res) => {
    const keyword = { ...req.body };
    try {
        const searchContact = await contact.searchContactByMobNo(keyword);

        if (!searchContact) {

            return res
                .status(resStatus.INTERNAL_SERVER_ERROR)
                .send({ message: `Error finding the contact having keyword: ${keyword}` });
        }
        return res
            .status(resStatus.SUCCESS_OK)
            .send({ data: searchContact });
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).send({ message: error.message });
        }
        return res.status(resStatus.INTERNAL_SERVER_ERROR).send(error.message);

    }
})

module.exports = router;