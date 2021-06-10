const Storage = artifacts.require("AdvancedStorage");

module.exports = function (deployer) {
  deployer.deploy(Storage);
};
