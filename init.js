'use strict';

var fs = require('fs');
var path = require('path');
var execSync = require('child_process').execSync;

// Bundle chalk inline, as we can't load npm modules
var chalk = (function(){var _ref; (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){_ref=require("chalk")},{chalk:2}],2:[function(require,module,exports){"use strict";var escapeStringRegexp=require("escape-string-regexp");var ansiStyles=require("ansi-styles");var stripAnsi=require("strip-ansi");var hasAnsi=require("has-ansi");var supportsColor=require("supports-color");var defineProps=Object.defineProperties;function Chalk(options){this.enabled=!options||options.enabled===undefined?supportsColor:options.enabled}if(process.platform==="win32"){ansiStyles.blue.open="[94m"}function build(_styles){var builder=function builder(){return applyStyle.apply(builder,arguments)};builder._styles=_styles;builder.enabled=this.enabled;builder.__proto__=proto;return builder}var styles=function(){var ret={};Object.keys(ansiStyles).forEach(function(key){ansiStyles[key].closeRe=new RegExp(escapeStringRegexp(ansiStyles[key].close),"g");ret[key]={get:function(){return build.call(this,this._styles.concat(key))}}});return ret}();var proto=defineProps(function chalk(){},styles);function applyStyle(){var args=arguments;var argsLen=args.length;var str=argsLen!==0&&String(arguments[0]);if(argsLen>1){for(var a=1;a<argsLen;a++){str+=" "+args[a]}}if(!this.enabled||!str){return str}var nestedStyles=this._styles;var i=nestedStyles.length;while(i--){var code=ansiStyles[nestedStyles[i]];str=code.open+str.replace(code.closeRe,code.open)+code.close}return str}function init(){var ret={};Object.keys(styles).forEach(function(name){ret[name]={get:function(){return build.call(this,[name])}}});return ret}defineProps(Chalk.prototype,init());module.exports=new Chalk;module.exports.styles=ansiStyles;module.exports.hasColor=hasAnsi;module.exports.stripColor=stripAnsi;module.exports.supportsColor=supportsColor},{"ansi-styles":3,"escape-string-regexp":4,"has-ansi":5,"strip-ansi":7,"supports-color":9}],3:[function(require,module,exports){"use strict";var styles=module.exports={modifiers:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},colors:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39]},bgColors:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49]}};styles.colors.grey=styles.colors.gray;Object.keys(styles).forEach(function(groupName){var group=styles[groupName];Object.keys(group).forEach(function(styleName){var style=group[styleName];styles[styleName]=group[styleName]={open:"["+style[0]+"m",close:"["+style[1]+"m"}});Object.defineProperty(styles,groupName,{value:group,enumerable:false})})},{}],4:[function(require,module,exports){"use strict";var matchOperatorsRe=/[|\\{}()[\]^$+*?.]/g;module.exports=function(str){if(typeof str!=="string"){throw new TypeError("Expected a string")}return str.replace(matchOperatorsRe,"\\$&")}},{}],5:[function(require,module,exports){"use strict";var ansiRegex=require("ansi-regex");var re=new RegExp(ansiRegex().source);module.exports=re.test.bind(re)},{"ansi-regex":6}],6:[function(require,module,exports){"use strict";module.exports=function(){return/(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/g}},{}],7:[function(require,module,exports){"use strict";var ansiRegex=require("ansi-regex")();module.exports=function(str){return typeof str==="string"?str.replace(ansiRegex,""):str}},{"ansi-regex":8}],8:[function(require,module,exports){arguments[4][6][0].apply(exports,arguments)},{dup:6}],9:[function(require,module,exports){"use strict";var argv=process.argv;module.exports=function(){if("FORCE_COLOR"in process.env){return true}if(argv.indexOf("--no-color")!==-1||argv.indexOf("--no-colors")!==-1||argv.indexOf("--color=false")!==-1){return false}if(argv.indexOf("--color")!==-1||argv.indexOf("--colors")!==-1||argv.indexOf("--color=true")!==-1||argv.indexOf("--color=always")!==-1){return true}if(process.stdout&&!process.stdout.isTTY){return false}if(process.platform==="win32"){return true}if("COLORTERM"in process.env){return true}if(process.env.TERM==="dumb"){return false}if(/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)){return true}return false}()},{}]},{},[1]); return _ref;}).call(this);


function runCommand(command) {
  console.log(chalk.cyan('\nrunning command: ') + chalk.gray('$') + ' ' + command);
  execSync(command, {stdio: 'inherit'});
}

function logSuccess(message) {
  console.log(chalk.green('\n\n ✓'), message);
}

function printBanner() {
  console.log(chalk.gray(
  '\n\n────────────────────────────────────────────────────────────' +
  '\n            __  ____  __  ___   __   _  _  __ ' +
  '\n           /  \\(  _ \\(  )/ __) / _\\ ( \\/ )(  )' +
  '\n          (  O ))   / )(( (_ \\/    \\/ \\/ \\ )( ' +
  '\n           \\__/(__\\_)(__)\\___/\\_/\\_/\\_)(_/(__)' +
  '\n\n────────────────────────────────────────────────────────────'
  ));
}


// Start with a banner
printBanner();


// Verify we are running in an empty folder
var cwd = process.cwd();
if (fs.readdirSync(cwd).length) {
  console.error(chalk.red('The current working directory is not empty!'));
  console.error('Please create a new directory, cd into it, then try running this script again.');
  process.exit(1);
}


// Check that basic things are available on this system
console.log('\n\n' + chalk.magenta('Checking your system has gulp, bower and ruby installed...'));
try {
  runCommand('gulp --version');
  runCommand('bower --version');
}
catch (e) {
  console.error('\n' + chalk.red('Command failed.'));
  console.log(
    '\nPlease install ' + chalk.cyan('gulp') + ' and ' + chalk.cyan('bower') + ' globally, then try again:' +
    chalk.gray('\n\n  $') + ' npm install --global gulp bower'
  );
  process.exit(1);
}
try {
  runCommand('ruby --version');
}
catch (e) {
  console.error('\n' + chalk.red('Command failed.'));
  console.log('\nPlease ensure ruby is installed (and on your PATH), then try again.');
  process.exit(1);
}
logSuccess('System looks OK.');



// Download the latest snapshot of the boilerplate
console.log(chalk.magenta('\n\nSetting up boilerplate...'));
runCommand(
  'curl -L https://github.com/callumlocke/origami-product-boilerplate/archive/master.tar.gz | ' +
  'tar xz --strip-components=1'
);
runCommand('rm -rf docs README.md travis.yml');
logSuccess('Boilerplate set up.');


// Install dependencies
console.log(chalk.magenta('\n\nInstalling dependencies...'));
runCommand('npm install');
runCommand('bower install');
runCommand('bundle install');
logSuccess('All dependencies installed.');


// Print out final instructions
printBanner();
console.log(
  '\n\n' + chalk.green('NEXT STEPS...\n') +
  '\n  1. Type ' + chalk.cyan('gulp serve') + ' to run a development server.' +
  '\n\n  2. Edit files within the ' + chalk.underline('client') + ' directory, and you should find your\n     browser refreshes automatically a few seconds after each save.' +
  '\n\nFor documentation and recipes, see ' + chalk.magenta('http://git.io/ve5A6')
  // + '\n\nLater, you can type ' + chalk.cyan('gulp build') + ' to make a production build (' + chalk.underline('dist') + ').'
);
