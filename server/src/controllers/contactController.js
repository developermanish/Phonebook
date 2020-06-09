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

const updateContact = async (id, obj) => {
    let filters = {
        _id: id,
    }
    const oldData = await contactHelper.findById(filters);
    if (!oldData) {
        const err = {
            message: `No contact data is found`,
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

const deleteContact = async (id) => {
    let filters = {
        _id: id
    };
    const data = await contactHelper.findById(filters);
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

const findContact = async (id) => {
    const filters = {
        _id: id
    };
    return contactHelper.findById(filters);
}

const searchContactByName = async (keyword) => {
    let filters = {};
    filters.query = {
        name: { $regex: new RegExp('^' + keyword.keyword, 'i') }
    };
    return await contactHelper.find(filters);

}

const searchContactByEmail = async (keyword) => {
    let filters = {};
    filters.query = {
        email: { $regex: new RegExp('^' + keyword.keyword, 'i') }
    };
    return await contactHelper.find(filters);

}

const searchContactByMobNo = async (keyword) => {
    let filters = {};
    filters.query = {
        mobNo: { $regex: new RegExp('^' + keyword.keyword, 'i') }
    };
    return await contactHelper.find(filters);

}


module.exports = {

    addContact,
    getContactData,
    updateContact,
    deleteContact,
    findContact,
    getContactCount,
    getPaginatedContact,
    searchContactByName,
    searchContactByEmail,
    searchContactByMobNo
}