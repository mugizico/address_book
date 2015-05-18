var Util = {}

var path = require('path')

Util.getHomeDirectory = function(){

	if(process.platform  === 'win32'){
		return process.env.USERPROFILE
	}
	else{
		return process.env.HOME
	}

}

   


Util.getDataPath = function(){
	path.join(this.getHomeDirectory(), '/users/mugizi/data.json')
}


module.exports = Util