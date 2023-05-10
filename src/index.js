const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('node:fs');
const path = require('path');
const env = require('process');

const context = github.context;

const workdir = process.env['GITHUB_WORKSPACE'];
// This requires that it's run AFTER checkout!
try {
    const extendedTag = core.getInput('extendedTag');
    // Debugging information requires the ACTIONS_RUNNER_DEBUG secret to be set to true
    core.debug(`Extended tag detected: ${extendedTag}`);

//   console.log(`Hello ${nameToGreet}!`);
//   const time = (new Date()).toTimeString();
//   core.setOutput("time", time);
//   // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
  let packageJsonBuffer = fs.readFileSync(path.join(workdir, `package.json`));
  core.debug(packageJsonBuffer.toString('utf-8'));

} catch (error) {
  core.setFailed(error.message);
}

// WORKDIR=`pwd`

// cat $WORKDIR/.npmrc

// # Get the current version, discarding any quotes and any additional tags
// CURRENT_VERSION=`jq '.version' $WORKDIR/package.json | awk -F"\"" '{print $2}' | awk -F"-" '{print $1}'`

// IN_ARRAY=1
// VERSION_ITERATOR=0
// VERSIONS=`npm --registry=https://npm.pkg.github.com/ view @foamfactory/aegir versions --json`

// while [ $IN_ARRAY -eq 1 ]
// do
//   NEW_VERSION="$CURRENT_VERSION-$EXTENDED_TAG$VERSION_ITERATOR"

//   # Verify that it's semver-certified
//   VALID_VERSION=`npx semver $NEW_VERSION`

//   if [ -z $VALID_VERSION ]
//   then
//     echo "Version not valid"
//     exit 1
//   fi

//   # Verify that there isn't already a release with this name
//   IN_ARRAY=`node contrib/check-in-array.js "{\"versions\":$VERSIONS}" $NEW_VERSION`
//   VERSION_ITERATOR=$((VERSION_ITERATOR+1))
// done

// if [ $IN_ARRAY -eq 2 ]
// then
//   echo "There were no versions in the version array"
//   exit 1
// fi

// cp $WORKDIR/package.json $WORKDIR/package.json.old
// jq --arg v "$NEW_VERSION" '.version=$v' $WORKDIR/package.json > $WORKDIR/package.json.new
// rm $WORKDIR/package.json
// mv $WORKDIR/package.json.new $WORKDIR/package.json
// cat $WORKDIR/package.json
