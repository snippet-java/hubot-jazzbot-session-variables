// Description:
//  Listens for commands to set the session variable for user
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

const SET = /session\s+set\s+(\S*)\s+(.*)/i;
module.exports = (robot) => {

	// RegEx match
	robot.respond(SET, (res) => {
		robot.logger.debug(`${TAG}: session.set - RegEx match - res.message.text=${res.message.text}.`);
		var key		= res.match[1];
		var value	= res.match[2];
		var userId	= res.message.user.id;
		var pref	= robot.brain.get(userId) || {};
		pref[key]	= value;
		robot.brain.set(userId, pref);
		if (key.match(/password/i)) {
			value = value.replace(/./g, "*");
		}
		res.reply(key + ' SET TO \"' + value + '" for ' + res.message.user.id);
	});
	
};