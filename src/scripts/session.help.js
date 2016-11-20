// Description:
//  Listens for commands to list the available commands for using session variables
//
// Commands:
//   hubot session help - display all session commands.
//
// Author:
//	syahrul.aiman@my.ibm.com
//
/*
  * Licensed Materials - Property of IBM
  * (C) Copyright IBM Corp. 2016. All Rights Reserved.
  * US Government Users Restricted Rights - Use, duplication or
  * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
  */
'use strict';

const path = require('path');
const TAG = path.basename(__filename);

const HELP = /session\s+help\s*/i;
module.exports = (robot) => {

	// RegEx match
	robot.respond(HELP, (res) => {
		robot.logger.debug(`${TAG}: session.help - RegEx match - res.message.text=${res.message.text}.`);
		robot.logger.info(`${TAG}: Listing session help...`);
		
		let help = `${robot.name} session set <KEY> <VALUE> - Sets the session variable, by assigning the VALUE to KEY\n`;
		help += `${robot.name} session get <KEY> - Gets / returns the session vairable assigned in KEY\n`;
		help += `${robot.name} session <remove|unset> <KEY> - Unsets / remove the session variable assigned to KEY\n`;
		
		res.reply(help);
	});
	
};