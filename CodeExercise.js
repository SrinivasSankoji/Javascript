var person ={
    "firstName":"Bhaumik",
    "middleName":"Chary",
    "lastName":"Sankoji",
    "address":{
        "houseNo":"2-4-118/59/1",
        "street":"Venkateswara Colony",
        "city":"uppal",
        "state":"TS"
    },
    "isFromState": function(state)
    {
        return this.address.state === 'TG';
    }
};

console.log(person.isFromState("TS"));