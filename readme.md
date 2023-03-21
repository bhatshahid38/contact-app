```
CRUD Application using FreshSales API and Mongo DB

```
Technologies Used
NodeJS
ExpressJS
MongoDB
FreshSales CRM API

Installation and Usage
    cd contact-app
    npm install

Mongo Db runs at 127.0.0.1:27017
Update freshWorkApiKey in config/Constants.js

API Endpoints

1. Create Contact
Create a new contact in Freshsales CRM or MongoDB.
POST /createContact
Parameters:
- first_name (required): The first name of the contact.
- last_name (required): The last name of the contact.
- email (required): The email address of the contact.
- mobile_number (required): The mobile number of the contact.
- data_store (required): The data store to use. Possible values are "CRM" or "DATABASE".

Response:
- If the contact is created successfully, returns the contact data.
- If there is an error, returns an error message.

2. Get Contact
Retrieve a contact by its ID from Freshsales CRM or MongoDB.

POST /getContact

Parameters:
- contact_id (required): The ID of the contact.
- data_store (required): The data store to use. Possible values are "CRM" or "DATABASE".

Response:
- If the contact is found, returns the contact data.
- If the contact is not found, returns an error message.

3. Update Contact
Update the email and mobile number of a contact in Freshsales CRM or MongoDB.

POST /updateContact

Parameters:
- contact_id (required): The ID of the contact to update.
- new_email (required): The new email address of the contact.
- new_mobile_number (required): The new mobile number of the contact.
- data_store (required): The data store to use. Possible values are "CRM" or "DATABASE".

Response:
- If the contact is updated successfully, returns the updated contact data.
- If there is an error, returns an error message.

4. Delete Contact
Delete a contact by its ID from Freshsales CRM or MongoDB.
POST /deleteContact

Parameters:
- contact_id (required): The ID of the contact to delete.
- data_store (required): The data store to use. Possible values are "CRM" or "DATABASE".

Response:
- If the contact is deleted successfully, returns a success message.
- If there is an error, returns an error message.

Conclusion
That's it! You now have a fully functional CRUD application that allows you to create, retrieve, update, and delete contacts in Freshsales CRM or MongoDB. Feel free to modify the application as needed to fit your requirements.