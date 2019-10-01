import { IEntity } from '../entity'
import { isColliding } from './lib'

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

  detectCollision() {
    console.log('detect collision')
    const total = this.entities.length
    for (let i = 0; i !== total; ++i) {
      for (let j = i + 1; j !== total; ++j) {
        if (isColliding(this.entities[i], this.entities[j])) {
          this.entities[i].getCollision().handler(this.entities[j])
          this.entities[j].getCollision().handler(this.entities[i])
        }
      }
    }
  }
}

export { CollisionDetector }
