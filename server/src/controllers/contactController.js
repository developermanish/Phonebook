const contactHelper = require("../helpers/contact");
const resStatus = require("../constants/responseStatus");

const getContactCount = () => {
    const filters = {};
    return contactHelper.count(filters);

}

const addContact = (obj) => {

    return contactHelper.insert(obj);
}

const getContactData = () => {
    const filters = {};
    return contactHelper.find(filters);
}

const getPaginatedContact = (pageNum) => {
    const filters = {};
    filters.pageNum = pageNum;
    filters.sort = {
        name: 1
    }
    return contactHelper.getContactObject(filters)
}

const updateContact = async (name, obj) => {
    let filters = {
        name: name,
    }
    const oldData = await contactHelper.find(filters);
    if (!oldData) {
        const err = {
            message: `No contact data is found for ${name}.`,
            statusCode: resStatus.NOT_FOUND
        }
        throw customError(err);
    }
    filters = {
        oldData: oldData,
        newData: obj
    }
    return contactHelper.update(filters);
}

const deleteContact = async (name, userid) => {
    let filters = {
        name: name,
        userid: userid
    };
    const data = await contactHelper.find(filters);
    if (!data) {
        const err = {
            message: `No contact data is found for ${name}.`,
            statusCode: resStatus.NOT_FOUND
        };
        throw customError(err);

    }
    filters = {
        data: data
    };
    return contactHelper.deleteData(filters);
}


module.exports = {

    addContact,
    getContactData,
    updateContact,
    deleteContact,
    getContactCount,
    getPaginatedContact
}