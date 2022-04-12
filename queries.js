const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    //  Should find all businesses
    const businesses = await Business.findAll()
    //  return the result of your query
    return businesses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    // Should find all businesses and their associated address
    const busAddress = await Business.findAll({include: [Address]})
    //  return the result of your query
    return busAddress
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    // Should find all businesses with and associated employees
    const busEmployees = await Business.findAll({include: [Employee]})
    //  return the result of your query
    return busEmployees
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    //  Find all businesses and include the address and empoyees
    const busAddEmp = await Business.findAll({include: [Address, Employee]})
    // The address should come before the employee
    //  return the result of your query
    return busAddEmp
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllBusinesses,
  getBusinessAddress,
  getBusinessEmployees,
  getBusinessAddressAndEmployee
}
