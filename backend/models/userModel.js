const pool = require('../config/config');

const createNewUser = async (data) => {
  try {    
    const query = `INSERT INTO signup (name, username, email, password,phone_number) VALUES (?, ?, ?, ?,?)`;
    const [result] = await pool.promise().query(query, [data.name, data.username, data.email, data.password,data.phno]);
    return result;
  } catch (error) {
    console.log('Error occurred while inserting in signup table:', error);
    throw error;
  }
};
const signInUser = async (data) => {
  try {

    const query = `INSERT INTO login (signup_id,refresh_token) VALUES (?,?)`;
    const result = await pool.promise().query(query, [data.signup_id, data.refreshToken]);
    console.log('Data inserted in login table successfully!');
  } catch (error) {
    console.log('Error occurred while inserting in login table:', error);
    throw error;
  }
}
const getUserByEmail = async (data) => {
  try {
    const query = `SELECT * FROM signup WHERE email = ?`;
    const [result] = await pool.promise().query(query, [data]);
    if (result.length === 0) {
      return null;
    }
    return result[0];
  } catch (error) {
    console.log('Error in getUserByIdentity:', error);
    throw error;
  }
};
const getSignUpId = async (refreshToken) => {
  try {
    const querry = `SELECT signup_id from login where refresh_token =?`
    const result = await pool.promise().query(querry, [refreshToken])
    if (result.length === 0) return null
    else return result[0]
  } catch (error) {
    console.log('Error in getSignUpId:', error);
    throw error;
  }
}
const getLoginId = async (refreshToken) => {
  try {
    const querry = `SELECT login_id from login where refresh_token =?`
    const result = await pool.promise().query(querry, [refreshToken])
    if (result.length === 0) return null
    else return result[0]
  } catch (error) {
    console.log('Error in getSignUpId:', error);
    throw error;
  }
}
const getUserBySignupid = async (signupid) => {
  try {

    const query = `SELECT * FROM signup WHERE signup_id = ?`;
    const result = await pool.promise().query(query, [signupid[0].signup_id])
    if (result.length === 0) { return null }


    else {
      return result[0]
    }
  } catch (error) {
    console.log('Error in getSignUpId:', error);
    throw error;
  }
}
const getRefreshToken = async (data) => {
  try {
    
    const querry = `SELECT refresh_token from login where signup_id =? ORDER BY login_time DESC LIMIT 1`
    const result = await pool.promise().query(querry, [data])
    if (result.length === 0) {return null}
    else {
      
      return result[0]
  } }catch (error) {
    console.log('Error in getRefreshToken:', error);
    throw error;
  }
}
const getUserByUsername = async (data) => {
  try {
    const query = `SELECT * FROM signup WHERE username= ?`;
    const [result] = await pool.promise().query(query, [data]);
    if (result.length === 0) {
      return null;
    }
    return result[0];
  } catch (error) {
    console.log('Error in getUserByIdentity:', error);
    throw error;
  }
};
const getUserByRefreshToken = async (data) => {
  try {
    const query = `SELECT * FROM login WHERE refresh_token= ?`;
    const [result] = await pool.promise().query(query, [data]);
    if (result.length === 0) {
      return null;
    }
    return result[0];
  } catch (error) {
    console.log('Error in getUserByIdentity:', error);
    throw error;
  }
};
const removeRefreshToken = async (signup_id, refreshToken) => {
  try {
    // const query = `DELETE FROM login WHERE signup_id =? AND refresh_token=?`
    const query=`UPDATE login SET refresh_token = NULL WHERE signup_id=? AND refresh_token=?`
    const result = await pool.promise().query(query, [signup_id,refreshToken])
  } catch (error) {
    console.log('Error in removeRefreshToken:', error);
    throw error;
  }
}

const addInCustomer=async(data)=>{
  try {
    const query=`INSERT INTO customer (phone_number,signup_id) VALUES (?,?)`
    await pool.promise().query(query,[data])

  } catch (error) {
    console.log('Error in addCustomerInfo function',error);
    throw error;

  }
}
module.exports = {
  createNewUser,
  getUserByEmail,
  getUserByUsername,
  signInUser,
  getSignUpId,
  getUserBySignupid,
  getRefreshToken,
  getUserByRefreshToken,
  removeRefreshToken,
  addInCustomer,
  getLoginId
};
