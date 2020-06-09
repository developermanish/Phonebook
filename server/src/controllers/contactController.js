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

const deleteContact = async (id) => {
    let filters = {
        _id: id
    };
    const data = await contactHelper.findForDelete(filters);
    console.log(data);
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

const searchContactByName = async (keyword) => {
    // console.log(keyword)
    let filters = {};
    filters.query = {
        name: { $regex: new RegExp('^' + keyword.keyword, 'i') }
    };
    return await contactHelper.find(filters);

}

const searchContactByEmail = async (keyword) => {
    // console.log(keyword)
    let filters = {};
    filters.query = {
        email: { $regex: new RegExp('^' + keyword.keyword, 'i') }
    };
    return await contactHelper.find(filters);

}

const searchContactByMobNo = async (keyword) => {
    // console.log(keyword)
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
    getContactCount,
    getPaginatedContact,
    searchContactByName,
    searchContactByEmail,
    searchContactByMobNo
}