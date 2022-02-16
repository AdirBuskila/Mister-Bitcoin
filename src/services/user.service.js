import { utilService } from "./util.service"

export const userService = {
    getUser,
    setUser,
    getMove,
    getEmptyUser,
}

function getEmptyUser() {
    return {
        name: '',
        coins: 20,
        moves: [],
    }
}

let user = {
    name: 'Stoshi Hyuga',
    coins: 5,
    moves: [
        {_id: 'VKxOND', to: 'Satoshi', amount: '15', date: '15/02/2022 at 16:20'},
        {_id: 'VKxOND', to: 'Raz Amshlekk', amount: '4', date: '15/02/2022 at 16:20'},
        {_id: 'VKxOND', to: 'Shimrit Amzaleg', amount: '2', date: '15/02/2022 at 16:20'},
        {_id: 'VKxOND', to: 'Paperniko', amount: '0.1', date: '15/02/2022 at 16:20'},
    ],
}
function getUser() {
    return user
}

function getMove(contact, coins) {
    const move = {
        _id: utilService.makeId(),
        to: contact.name,
        amount: coins,
        date: utilService.fixTimestamp(Date.now())
    }
    return move
}

function setUser(newUser) {
    user = newUser
    return user
}