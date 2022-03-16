import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { expect } from 'chai'
import { BigNumber, ContractFactory } from 'ethers'
import { ethers } from 'hardhat'
import {
  ParentContract,
  EventEmitter,
} from '../typechain'

describe('Events', () => {
  let owner: SignerWithAddress
  
  // Factories
  let ParentFactory: ContractFactory
  let EventEmitterFactory: ContractFactory

  // Contracts
  let parent: ParentContract
  let emitter1: EventEmitter
  let emitter2: EventEmitter

  // Values
  let val1: BigNumber
  let val2: BigNumber
  
  beforeEach(async () => {
    ;[owner] = await ethers.getSigners()

    val1 = BigNumber.from(1000)
    val2 = BigNumber.from(2000)

    // Event emitters
    EventEmitterFactory = await ethers.getContractFactory('EventEmitter')
    emitter1 = <EventEmitter> await EventEmitterFactory.deploy()
    emitter2 = <EventEmitter> await EventEmitterFactory.deploy()
    
    // Parent
    ParentFactory = await ethers.getContractFactory('ParentContract')
    parent = <ParentContract> await ParentFactory.deploy(emitter1.address, emitter2.address)
    
    })

    it('Should emit one of the events - OK', async () => {  
      // Check event for emitter1
      await expect(parent.emitBothEvents(val1, val2))
      .to.emit(emitter1, 'EventHappened')
      .withArgs(val1, val2)  
    })

    it('Should emit the other event - OK', async () => {
      // Check event for emitter2
      await expect(parent.emitBothEvents(val1, val2))
      .to.emit(emitter2, 'EventHappened')
      .withArgs(val2, val1)   
    })

    it('Should emit both events - OK... but checking?', async () => {
      // Check both events - it is successful but not trustworthy
      await expect(parent.emitBothEvents(val1, val2))
      .to.emit(emitter1, 'EventHappened')
      .withArgs(val1, val2)
      .and.to.emit(emitter2, 'EventHappened')
      .withArgs(val2, val1)
      
    })

    it('Should fail but passes - NOT COOL, wrong event name!', async () => {
      // Seems to ignore the first to.emit.withArgs
      await expect(parent.emitBothEvents(val1, val2))
      .to.emit(emitter1, 'This is a very random string')
      .withArgs(val1, val2)
      .and.to.emit(emitter2, 'EventHappened')
      .withArgs(val2, val1)
      
    })

    it('Should fail but passes - NOT COOL, wrong value!', async () => {
      // Seems to ignore the first to.emit.withArgs
      await expect(parent.emitBothEvents(val1, val2))
      .to.emit(emitter1, 'EventHappened')
      .withArgs(val1, 0)
      .and.to.emit(emitter2, 'EventHappened')
      .withArgs(val2, val1)
    })
})



