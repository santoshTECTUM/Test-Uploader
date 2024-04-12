// Get Post Put Delete patch services Declare.

import { getAccessToken } from "../utils/tokenContainer";
import URLs from './ApiEndPointUrl'

const getHeaders = () => {
    const accessToken = getAccessToken();
    let headers = {};

    if (accessToken) {
        headers = { Authorization: `Bearer ${accessToken}` };
    }

    const contentType = { "Content-Type": "application/json" };
    headers = { ...headers, ...contentType };
    return headers;
};



const Get = async (url) => {
    let res = {}
    await fetch(`${URLs.BASE_URL}${url}`)
        .then(async (result) => {
            res = await result.json();
        })
        .catch(err => {
            console.log("err", err);
        })
    return res
}

const Post = async (url, data = {}) => {

    console.log(`${URLs.BASE_URL}${url}`, "-----------", data);

    let res = {}
    await fetch(
        `${URLs.BASE_URL}${url}`,
        {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(data)
        }
    )
        .then(async (result) => {
            res = await result.json();
        })
        .catch(err => {
            console.log("err", err);
        })
    return res

}

const Put = async (url, data = {}) => {

    let res = {}
    await fetch(
        `${URLs.BASE_URL}${url}`,
        {
            method: "PUT",
            headers: getHeaders(),
            body: JSON.stringify(data)
        }
    )
        .then(async (result) => {
            res = await result.json();
        })
        .catch(err => {
            console.log("err", err);
        })
    return res
}

const Patch = async (url, data = {}) => {
    let res = {}
    await fetch(
        `${URLs.BASE_URL}${url}`,
        {
            method: "PATCH",
            headers: getHeaders(),
            body: JSON.stringify(data)
        }
    )
        .then(async (result) => {
            res = await result.json();
        })
        .catch(err => {
            console.log("err", err);
        })
    return res
}

const Delete = async (url, data = {}) => {
    let res = {}
    await fetch(
        `${URLs.BASE_URL}${url}`,
        {
            method: "DELETE",
            headers: getHeaders(),
            body: JSON.stringify(data)
        })

        .then(async (result) => {
            res = await result.json();
        })
        .catch(err => {
            console.log("err", err);
        })

    return res
}


export default {
    Get, Post, Delete, Put, Patch
}