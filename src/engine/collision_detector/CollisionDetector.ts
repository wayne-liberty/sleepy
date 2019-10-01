import { IEntity } from '../entity'

class CollisionDetector {
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
