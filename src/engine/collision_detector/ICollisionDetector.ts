import { IEntity } from '../entity'

export interface ICollisionDetector {
  addEntity: (e: IEntity) => void
  removeEntity: (e: IEntity) => void
  detectCollision: () => void
}
