import { ICollisionDetector } from './ICollisionDetector'
import { IEntity } from '../entity'

class CollisionDetector implements ICollisionDetector {
  private entities: IEntity[]

  constructor() {
    this.entities = []
  }

  addEntity(e: IEntity) {
    this.entities.push(e)
  }

  removeEntity(e: IEntity) {
    this.entities = this.entities.filter((e) => e !== e)
  }

  detectCollision() {}
}

export { CollisionDetector }
