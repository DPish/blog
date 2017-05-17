let startup = () => {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  _generateAccounts();
};

var _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

var _setBrowserPolicies = () => {
  BrowserPolicy.content.allowImageOrigin("*");
};

var _generateAccounts = () => Modules.server.generateAccounts();

Modules.server.startup = startup;
