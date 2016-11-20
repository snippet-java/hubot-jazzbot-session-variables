// Description:
//  Listens for commands to get / read the session variables for user
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

const GET = /session\s+get\s+(\S*)/i;
module.exports = (robot) => {

	// RegEx match
	robot.respond(GET, (res) => {
		robot.logger.debug(`${TAG}: session.get - RegEx match - res.message.text=${res.message.text}.`);
		var key = res.match[1];		
		var userId = res.message.user.id;
		
		if (key.match(/password/i)) {
			res.reply(key + " contains password. You are not able to get it");
			return;			
		}

		var pref	= robot.brain.get(userId) || {};
		var value	= pref[key];
		
		res.reply(key + ' IS \"' + value + '" for ' + res.message.user.id);
	});
	
};