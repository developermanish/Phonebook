import fetch from "./fetch";

export const contact = async (obj) => {
    const result = await fetch("POST", "/contact", {
        body: { ...obj }
    });
    console.log(result);

    if (result.status !== 201) {
        return { message: result.message };
    }
}
export const count = async () => {
    const result = await fetch("GET", "/contactCount");
    if (result.status !== 200) {
        return { message: result.message };
    } else {
        return { count: result.count };
    }
}

export const readContact = async (pageNum) => {
    const result = await fetch("POST", "/readContact", {
        body: {
            pageNum: pageNum
        }
    });
    if (result.status !== 200) {
        return { message: result.message };
    } else {
        return result.data;
    }
}

export const contactGet = async () => {
    const result = await fetch("GET", "/contact");
    console.log(result);
}

export const contactUpdate = async (obj) => {
    const result = await fetch("PUT", "/contact", {
        body: { ...obj }
    });
    if (result.status !== 201) {
        return { message: result.message };
    }
}

export const contactDelete = async (id) => {
    const result = await fetch("DELETE", "/contact", {
        body: {
            id: id
        }
    });
    if (result.status !== 200) {
        return { message: result.message };
    } else {
        return { message: result.message };
    }
}

export const findContact = async (id) => {
    const result = await fetch("POST", "/findContact", {
        body: {
            id: id
        }
    });
    if (result.status !== 200) {
        return { message: result.message };
    } else {
        return result.Data;
    }
}

export const searchByName = async (keyword) => {
    const result = await fetch("POST", "/searchName", {
        body: { keyword }
    });
    if (result.status !== 200) {
        return { message: result.message };
    } else {
        return result.data;
    }
}

export const searchByEmail = async (keyword) => {
    const result = await fetch("POST", "/searchEmail", {
        body: { keyword }
    });
    if (result.status !== 200) {
        return { message: result.message };
    } else {
        return result.data;
    }
}

export const searchByMobNo = async (keyword) => {
    const result = await fetch("POST", "/searchMobNo", {
        body: { keyword }
    });
    if (result.status !== 200) {
        return { message: result.message };
    } else {
        return result.data;
    }
}