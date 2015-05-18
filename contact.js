
var Contact = {}


Contact.createContact = function(str){

var contact  = {

	name : this.parseName(str),
	number : this.parseNumber(str)
}

return contact
	
}

Contact.parseName = function(str) {

   var strings = str.split(",")

   return strings[0]
}

Contact.parseNumber = function(str){

	var strings = str.split(",")

	return strings[1]
}


Contact.loadContacts  = function(done){
	var jsonfile = require('jsonfile')
	
	jsonfile.readFile('data.json', function(err, data){
		done(err, data)
	})
}

Contact.saveContacts = function(contacts, done){

	var jsonfile = require('jsonfile')

	jsonfile.writeFile( 'data.json', contacts , function(err){
		done(err)
	})
}


Contact.saveContact = function(contact, done){
	var _this  = this

	this.loadContacts(function (err, contacts){
		
		if(err) { return done(err)}
			contacts.push(contact)

	_this.saveContacts(contacts, done)

	})
}

Contact.findContacts = function(name, done){

	this.loadContacts(function(err, contacts){
		if(err) { return done(err)}

			var names = contacts.filter(function(contact) { return contact.name == name })

           done(err, names)
	})



}

module.exports = Contact




