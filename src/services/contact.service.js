'use strict';

import { DbService } from './db-service.js';
import axios from 'axios';

const KEY = 'contacts'
export default {
    query,
    get,
    remove,
    save,
    getImg,
    getEmptyContact,
};

async function query() {
    var contacts = await DbService.query(KEY);
    if (!contacts || !contacts.length) {
        contacts = _createDefaultContacts();
        await DbService.insert(KEY, contacts);
    }
    return contacts;
}

async function get(id) {
    const contact = await DbService.get(KEY, id);
    if (!contact) {
        throw new Error('Unknown Contact');
    }
    return contact;
}

function remove(id) {
    return DbService.delete(KEY, id);
}

function save(contact) {
    if (contact._id) return DbService.put(KEY, contact);
    else return DbService.post(KEY, contact);
}

async function getImg(name) {
    try {
        const { data } = await axios.get(`https://robohash.org/${name}`)
        return data
    } catch (err) {
        console.log('cannot fetch img', err);
    }
}

function getEmptyContact() {
    return         {
        "name": "",
        "email": "",
    }
}


function _createDefaultContacts() {
    return [
        {
            "_id": "5a56640269f443a5d64b32ca",
            "name": "Ochoa Hyde",
            "email": "ochoahyde@renovize.com",
            "phone": "+972-54123111"
        },
        {
            "_id": "5a56640269f4v3e5d64b32ca",
            "name": "Raz Amsalem",
            "email": "stakey@renovize.com",
            "phone": "+972-54123222"
        },
        {
            "_id": "5a56640269f44345364b32ca",
            "name": "Uchiha Rin",
            "email": "rin@renovize.com",
            "phone": "+972-54123333"
        },
        {
            "_id": "5a56698769f443a5d64b32ca",
            "name": "Vitalik Butrein",
            "email": "vitalik@renovize.com",
            "phone": "+972-54123444"
        },
        {
            "_id": "5a56640269f443a5df5f32ca",
            "name": "Shimrit Cohen",
            "email": "shimrit@renovize.com",
            "phone": "+972-54123555"
        },
        {
            "_id": "5a56640269f4h6yh5d64b32ca",
            "name": "Ben Shlomo",
            "email": "ben@renovize.com",
            "phone": "+972-54123666"
        },
    ];
}
