const Contact = require("../models/contact");

const contactPerPage = 5;


const count = (filters) => {
    const query = filters.query ? filters.query : {};
    return Contact.countDocuments(query);
}

const insert = (obj) => {

    const newData = new Contact(obj);
    return newData.save();
}

const find = (filters) => {

    const query = filters.query ? filters.query : {};
    console.log(query);
    console.log(filters);
    return Contact.find(query);
}

const findForDelete = (filters) => {
    const _id = filters._id ? filters._id : {};
    console.log(_id);
    return Contact.findById(_id);
}
const update = (filters) => {
    const oldData = filters.oldData ? filters.oldData : {};
    const newData = filters.newData ? filters.newData : {};
    return oldData.update({
        ...newData
    });
}

const deleteData = (filters) => {
    const data = filters.data ? filters.data : {};
    return data.delete();
}
const getContactObject = (filters) => {
    const query = filters.query ? filters.query : {};
    const sortBy = filters.sort ? filters.sort : { _id: -1 };
    const pageNum = filters.pageNum ? filters.pageNum : 1;
    console.log(pageNum);

    return (
        Contact
            .find(query)
            .sort(sortBy)
            .skip(contactPerPage * pageNum.pageNum - contactPerPage)
            .limit(contactPerPage)

    )
}
module.exports = {
    count,
    insert,
    find,
    update,
    deleteData,
    getContactObject,
    findForDelete

}