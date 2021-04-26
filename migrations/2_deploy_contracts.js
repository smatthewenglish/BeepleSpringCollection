const BeepleSpringCollection = artifacts.require("BeepleSpringCollection");

module.exports = function(deployer) {
  deployer.deploy(BeepleSpringCollection);
};