'use strict'

const core = require('@actions/core');
const github = require('@actions/github');

const { promises: fs } = require('fs');

const main = async () => 

{
	const path = core.getInput('projectPath');
	const content = await fs.readFile(path, 'utf8');

	const regExp = new RegExp('<AssemblyVersion>(.*?)<\/AssemblyVersion>');
	const matches = regExp.exec(content);

	core.setOutput('projectVersion', matches[1]);

}


main().catch(err => core.setFailed(err.message))
