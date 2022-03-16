import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'

import { HardhatUserConfig } from 'hardhat/types'

export default <HardhatUserConfig>{
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      gas: 999999999999,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
    },
    localhost: {
      gas: 999999999999,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
    }
  },
  solidity: {
    version: '0.8.9',
    debug: {
      // How to treat revert (and require) reason strings. Settings are
      // "default", "strip", "debug" and "verboseDebug".
      // "default" does not inject compiler-generated revert strings and keeps user-supplied ones.
      // "strip" removes all revert strings (if possible, i.e. if literals are used) keeping side-effects
      // "debug" injects strings for compiler-generated internal reverts, implemented for ABI encoders V1 and V2 for now.
      // "verboseDebug" even appends further information to user-supplied revert strings (not yet implemented)
      revertStrings: 'default',
      // revertStrings: 'debug',
    },
  },
  mocha: {
    timeout: 200000,
  },
}
