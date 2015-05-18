var Contact = require('./contact.js')
var Command = {}


Command.getOperation = function(){

return process.argv[2]

}


Command.getOperationData = function() {

return process.argv[3]

}


Command.add = function(done){


var str = this.getOperationData()

var c = Contact.createContact(str)

Contact.saveContact(c, function(err) { done(err) })


}


Command.find = function(done){

	var name = this.getOperationData()
	
	var contacts = Contact.findContacts(name, function(err, contacts)
	{
		console.log(contacts)
		done(err, contacts)

	})



}

module.exports = Command