
const { stat } = require('fs')
const data =  require('../../client/src/data/users.json')
const { CustomError, statusCodes  } = require('./errors')
const {connect} = require('./supabase')

const TABLE_NAME = 'products'

const BaseQuery = () => connect().from(TABLE_NAME)
.select('*', { count: "estimated" })
const isAdmin = true

async function getAll(limit = 30, offset = 0, sort = 'id', order = 'desc'){
    const list = await BaseQuery()
        .order(sort, { ascending: order === 'asc' })
        .range(offset, offset + limit - 1)
    if(list.error){
        throw new CustomError('Item not found', statusCodes[404])
    }
    if(!isAdmin) {
        throw new CustomErrorError('Unauthorized', statusCodes[401])
    }
        if(list.error){
            throw list.error
        }
    return {
        items: list.data,
        total: list.count
    }
}
async function search(query, limit = 30, offset = 0, sort = 'id', order = 'desc'){
    const { data: items, error, count } = await BaseQuery()
    .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
    .order(sort, { ascending: order === 'asc' })
    .range(offset, offset + limit -1)
    if (error) {
        throw error
    }
    return {
        items,
        total: count
    }
}
async function get(id){
    const {data,items,error}= await connect().from(TABLE_NAME).select('*').eq('id', id)
    if (!item) {
        throw new Error('Item not found', statusCodes[404])
    }
    if(error){
        throw new CustomError('Item not found', statusCodes[404])
    }
    return item
}

async function create(item){
    if(!isAdmin){
        throw CustomError("Sorry, you are not authorized to create a new item", statusCodes.UNAUTHORIZED)
    }
    const newItem = {
        id: data.items.length + 1,
        ...item
    }
    data.items.push(newItem)
    return newItem
}

async function update(id, item){
    const index = data.items.findIndex((item) => item.id == id)
    if (index === -1) {
        return null
    }
    const updatedItem = {
        ...data.items[index],
        ...item
    }
    data.items[index] = updatedItem
    return updatedItem

}

async function remove(id){
    const index = data.items.findIndex((item) => item.id == id)
    if (index === -1) {
        return null
    }
    const deletedItem = data.items[index]
    data.items.splice(index, 1)
    return deletedItem
}

async function seed(){
    const {data, error} = await connect().from(TABLE_NAME).insert(data.items)
    if (error) {
        throw new CustomError('Item not found', statusCodes[404])
    }
    return data
}
function MapToDB(item){
    return {
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        password: item.password,
        phone: item.phone,
        address: item.address,
        city: item.city,
        state: item.state,
        country: item.country,
        zip: item.zip,
        birthdate: item,
        gender: item,
        university: item.university,
        role: item.role,
    }
}
module.exports = {
    getAll,
    get,
    create,
    update,
    seed
}