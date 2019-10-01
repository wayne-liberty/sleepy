import { Entity, Rectangle } from '../../entity'
import { CollisionDetector } from '../'
import { isColliding } from '../lib'

const world = {
  collisionDetector: { addEntity: () => {} }
}
function createRect(x: number, y: number, width = 10, height = 10) {
  return new Entity(world as any, {
    position: {
      x: x,
      y: y
    },
    layer: {
      type: 'foreground',
      index: 0
    },
    image: [
      new Rectangle({
        width,
        height
      })
    ],
    collision: {
      border: {
        offsetX: 0,
        offsetY: 0,
        width: width,
        height: height
      },
      handler: () => {}
    }
  })
}
describe('CollisionDetector', () => {
  describe('detectCollision()', () => {
    const squareA = createRect(0, 0)
    const collisionDetector = new CollisionDetector()
    collisionDetector.addEntity(squareA)
  })
})

describe('isColliding()', () => {
  describe('away', () => {
    it('is not colliding', () => {
      const squareA = createRect(0, 0, 10, 10)
      const squareB = createRect(11, 11, 10, 10)
      expect(isColliding(squareA, squareB)).toBeFalsy()
      expect(isColliding(squareB, squareA)).toBeFalsy()
    })
  })

  describe('neighbor', () => {
    it('is collide', () => {
      const squareA = createRect(0, 0, 10, 10)
      const squareB = createRect(10, 2, 5, 5)
      expect(isColliding(squareA, squareB)).toBeTruthy()
      expect(isColliding(squareB, squareA)).toBeTruthy()
    })
  })

  describe('intersection', () => {
    it('is colliding', () => {
      const squareA = createRect(0, 0, 10, 10)
      const squareB = createRect(9, 2, 5, 5)
      expect(isColliding(squareA, squareB)).toBeTruthy()
      expect(isColliding(squareB, squareA)).toBeTruthy()
    })
  })

  describe('contain', () => {
    it('is colliding', () => {
      const squareA = createRect(0, 0, 8, 8)
      const squareB = createRect(0, 0, 12, 12)
      const squareC = createRect(1, 1, 2, 2)

      expect(isColliding(squareA, squareB)).toBeTruthy()
      expect(isColliding(squareB, squareA)).toBeTruthy()

      expect(isColliding(squareA, squareC)).toBeTruthy()
      expect(isColliding(squareC, squareA)).toBeTruthy()
    })
  })

  describe('overlap', () => {
    it('is colliding', () => {
      const squareA = createRect(0, 0, 8, 8)
      const squareB = createRect(0, 0, 8, 8)
      expect(isColliding(squareA, squareB)).toBeTruthy()
      expect(isColliding(squareB, squareA)).toBeTruthy()
    })
  })
})
