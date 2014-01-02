'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var CrudGenerator = module.exports = function CrudGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(CrudGenerator, yeoman.generators.Base);

CrudGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'input',
    name: 'appName',
    message: 'Name your app.'
  },
  {
    type: 'list',
    name: 'appLanguage',
    message: 'Pick your Server-Side Language.',
    choices: [
      'node.js',
      'python'
    ],
    default: 'node.js'
  },
  {
    type: 'input',
    name: 'appPort',
    validate: function( value ) {
      // checks if the port is a number
      if( !isNaN(parseFloat(n)) && isFinite(n) ) {
        return true;
      } else {
        return "Port must be a number";
      }
    }
  }];

  this.prompt(prompts, function (props) {
    this.appLanguage = props.appLanguage;
    this.appName = props.appName;
    this.appPort = props.appPort;

    cb();
  }.bind(this));
};

CrudGenerator.prototype.app = function app() {
  var s = this.appLanguage + '/';

  switch(this.appLanguage) {
    case 'node.js':
      this.mkdir('app');
      this.mkdir('app/config');
      this.mkdir('app/models');
      this.mkdir('app/views');
      this.mkdir('app/public');

      this.copy(s + 'server.js', 'app/server.js');
      this.copy(s + 'routes.js', 'app/routes.js');
      this.copy(s + '/config/auth.js', 'app/config/auth.js');
      this.template(s + '/config/database.js', 'app/config/database.js');
      this.copy(s + '/config/passport.js', 'app/config/passport.js');
      this.copy(s + '/models/user.js', 'app/models/user.js');
      this.copy(s + '/views/index.ejs', 'app/views/index.ejs');
      this.template(s + '/views/head.ejs', 'app/views/head.ejs');
      this.copy(s + '/views/login.ejs', 'app/views/login.ejs');
      this.copy(s + '/views/profile.ejs', 'app/views/profile.ejs');
      this.copy(s + '/views/signup.ejs', 'app/views/signup.ejs');

      this.template(s + '_bower.json', 'bower.json');
      this.template(s + '_package.json', 'package.json');
      this.copy(s + 'bowerrc', '.bowerrc');
      this.copy(s + 'editorconfig', '.editorconfig');  
      this.copy(s + 'gitignore', '.gitignore');
      this.copy(s + 'Gruntfile.js', 'Gruntfile.js');
      this.copy(s + 'jshintrc', '.jshintrc');
      this.template(s + 'README.md', 'README.md');
      break;

    case 'python':
      console.log('Python is not yet implemented.')

    default:
      console.log('uh-oh, no such generator Language.');
  }
};