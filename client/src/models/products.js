
const data = require('../data/products.json')

function getAll(){
    return data.items
}
function get(id){
    return data.items.find(item => item.id === id)

}
function create(item){
    const newItem = {
        id: data.items.length + 1,
        ...item
    }
    data.items.push(newItem)
    return newItem
}
function update(id, item){

}
function remove(){
    const index = data.items.findIndex(item => item.id === id)
    if(index === -1){
        return null
    }
    const deletedItem = data.items.splice(index, 1)
    return deletedItem[0]
}
module.exports = {
    getAll,
    get,
    create,
    update,
    remove
}