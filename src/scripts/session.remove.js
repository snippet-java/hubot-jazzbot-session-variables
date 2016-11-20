// Description:
//	Listens for commands to remove / unset session variables for user
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

const REMOVE = /session\s+(unset|remove)\s+(\S*)/i;
module.exports = (robot) => {

	// RegEx match
	robot.respond(REMOVE, (res) => {
		robot.logger.debug(`${TAG}: session.remove - RegEx match - res.message.text=${res.message.text}.`);
		var key = res.match[2];
		var userId = res.message.user.id;
		
		var pref	= robot.brain.get(userId) || {};
		delete(pref[key])
		robot.brain.set(userId, pref);

		res.reply(key + ' IS REMOVED for ' + res.message.user.id);
	});
	
};