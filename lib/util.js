/**
 * Swift-Cardinal Object Notation
 * https://github.com/BlueStone-Tech-Enterprises/scon/
 *
 * Copyright (c) BlueStone Technological Enterprises Inc., 2016-2017
 * Licensed under the GNU GPLv3 license.
 */

"use strict";

const sconUtil = {};

sconUtil.mergeRecursive = function(obj1, obj2){
	for(const p in obj2){
		if(obj2[p] == null || obj2[p].constructor !== Object){
			obj1[p] = obj2[p];
		}else{
			obj1[p] = sconUtil.mergeRecursive({}, obj2[p]);
		}
	}
	return obj1;
};

sconUtil.loadSubmodule = function(sconObject, moduleName){
	const submodule = require("../" + moduleName);
	sconUtil.mergeRecursive(sconObject, submodule);
};

module.exports = sconUtil;
