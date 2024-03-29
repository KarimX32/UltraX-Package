const axios = require('axios').default;

module.exports = async () => {
	const packageData = await axios('https://registry.npmjs.com/ultrax');
	if (require('../package.json').version !== packageData.data['dist-tags'].latest) {
		console.log('\n\n');
		console.log('\x1b[32m' + '---------------------------------------------------');
		console.log('\x1b[32m' + '| @ ultrax                                 - [] X |');
		console.log('\x1b[32m' + '---------------------------------------------------');
		console.log('\x1b[33m' + '|            The module is\x1b[31m out of date!\x1b[33m           |');
		console.log('\x1b[35m' + '|             New version is available!           |');
		console.log('\x1b[34m' + `|                  ${require('../package.json').version} --> ${packageData.data['dist-tags'].latest}                |`);
		console.log('\x1b[36m' + '|             Run "npm i ultrax@latest"           |');
		console.log('\x1b[36m' + '|                    to update!                   |');
		console.log('\x1b[37m' + '|          View the full changelog here:          |');
		console.log('\x1b[31m' + '|       https://www.npmjs.com/package/ultrax      |');
		console.log('\x1b[32m' + '---------------------------------------------------\x1b[37m');
		console.log('\n\n');
	}
};