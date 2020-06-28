/*
 * discover-cli.js
 *
 * This script just processes the command line inputs and passes them into
 * the discover module.
 */
let argv = require('yargs');

argv
  .scriptName('discover-cli')
  .usage('$0 <cmd> [args]')
  .command('reload',
    'reload local database',
    (yargs) => {
    },
    (argv) => {
      // was it successful? any info skiped? print that here.
      console.log('info from reload goes here');
    })
  .command('egg-move-path <pokemon> <egg-move>',
    'show shortest path to gain the egg move on the pokemon',
    (yargs) => {
      yargs.positional('pokemon', {
        type: 'string',
        desc: 'pokemon to learn the move'
      })
    },
    (argv) => {
      // parse the output of egg move path and print it (should return js object)
      console.log('output of egg-move-path parsed and printed here');
    })
  .help()
  .version()
  .argv
