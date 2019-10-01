import { World, EntityFactory, Rectangle, Pixel } from '../engine'

export function start(canvas: HTMLCanvasElement) {
  const world = new World(canvas, canvas)
  const entityFactory = new EntityFactory(world)
  const e = entityFactory.createEntity({
    position: { x: 100, y: 10 },
    collision: {
      border: {
        width: 20,
        height: 40,
        offsetX: 0,
        offsetY: 0
      },
      handler: (e: any) => {
        console.error('collide with ', e)
      }
    },
    layer: {
      type: 'foreground',
      index: 1
    },
    image: [
      new Rectangle({
        x: 0,
        y: 0,
        width: 20,
        height: 40,
        attributes: { color: 'green' }
      })
    ]
  })

  const e2 = entityFactory.createEntity({
    position: { x: 10, y: 10 },
    layer: {
      type: 'foreground',
      index: 1
    },
    collision: {
      border: {
        width: 20,
        height: 10,
        offsetX: 0,
        offsetY: 0
      },
      handler: (e: any) => {
        console.error('collide with ', e)
      }
    },
    image: [new Rectangle({ x: 0, y: 0, width: 20, height: 10 })]
  })

  e2.addEventListener({
    key: 'space',
    action: ({ event }) => {
      console.log('move')
      const position = e2.getPosition()
      e2.setPosition({ x: position.x + 10, y: position.y })
    }
  })
  world.start()
}
