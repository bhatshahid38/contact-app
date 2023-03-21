const axios = require('axios');
const{freshWorkApiKey,freshWorkApiUrl:apiUrl} = require("../config/Constants")
const headers = {
  'Authorization': `Token token=${freshWorkApiKey}`,
  'Content-Type': 'application/json'
};
module.exports.createContact = async (data) => {
  
  try {
    // Make the POST request to create the contact
    const response = await axios({
      method:"post",
      url:apiUrl,
      headers,
      data: {
        contact:data
      }
    });
    console.log('Contact created successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating contact:', error.response.data);
    throw error.response.data;
  }
};

 module.exports.getContact = async (contactId) => {
  const getUrl = `${apiUrl}/${contactId}` 
  try {
    // Make the POST request to create the contact
    const response = await axios({
      method:"get",
      url:getUrl,
      headers: {
        'Authorization': `Token token=${freshWorkApiKey}`,
        'Content-Type': 'application/json'
      },
    });
    console.log('contact fetched successfully:', response.data);
    return response.data;

  } catch (error) {
    console.error('Error fetching contact:', error.response.data);
    throw error;
  }
};
module.exports.putContact = async (dataObj,contactId) => {
  const updateurl = `${apiUrl}/${contactId}` 

  // Set the request headers
  const headers = {
    'Authorization': `Token token=${freshWorkApiKey}`,
    'Content-Type': 'application/json'
  };

  try {
    // Make the POST request to create the contact
    const response = await axios(
     { method:"put",
      url :updateurl,
      headers,
      data:dataObj}
    );;
    return response.data;
  } catch (error) {
    console.error('Error creating contact:', error.response.data);
    throw error;
  }
};
module.exports.deleteContact = async (id)=>{
  let deleteUrl  = `${apiUrl}/${id}`
  try{ 
      const response = await axios(
      { method:"delete",
        url:deleteUrl,
        headers
      });
  return  response.data
}
  catch(err){
    console.error('Error creating contact:', err.response.data);

  }
   
}
