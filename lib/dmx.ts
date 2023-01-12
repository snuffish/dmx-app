// import * as _DMX from 'dmx-ts'
// const { DMX, Animation, EnttecUSBDMXProDriver } = _DMX

// // @ts-ignore
// let dmx: DMX

// export async function initDMX() {
//     if (dmx) return dmx
//     dmx = new DMX()

//     const DRIVER = new EnttecUSBDMXProDriver('COM3', { dmxSpeed: 40 })
//     const universe = await dmx.addUniverse('demo', DRIVER)

//     return dmx
// }