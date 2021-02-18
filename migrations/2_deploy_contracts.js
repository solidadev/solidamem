const SolidamemToken = artifacts.require("SolidamemToken");

module.exports = function(deployer) {
  deployer.deploy(SolidamemToken);
};
