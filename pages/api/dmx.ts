// @ts-nocheck
import * as _DMX from 'dmx-ts'
import type { NextApiRequest, NextApiResponse } from 'next'
const { DMX, Animation, EnttecUSBDMXProDriver } = _DMX

let dmx = new DMX()

// Windows
// const DRIVER = new EnttecUSBDMXProDriver('COM3', { dmxSpeed: 40 })

// MAC
const DRIVER = new EnttecUSBDMXProDriver('/dev/cu.usbserial-A5065QFW', { dmxSpeed: 40 })
let universe = await dmx.addUniverse('demo', DRIVER)

// universe.update({
// 	22: 77
// })

// new Animation()
// .add({
// 	22: 77
// }).run(universe)

// new Animation()
// .add({
// 	22: 77,
// 	24: 1
// }, 2000)
// .add({
// 	24: 255
// }, 2000)
// .runLoop(universe)

// new Animation()
// .add({
// 	4: 127
// }, 2000)
// .add({
// 	4: 180
// }, 2000)
// .runLoop(universe)

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const json = JSON.parse(req.body)

	console.log("JSON => ", json)
	universe.update(json)

	res.status(200).json(true)
}