import { World } from '../world'
import { IEntityGroup, IEntity, RenderObject } from '.'

export interface IEntityFactory {
  createEntity: (arg: RenderObject) => IEntity
  createEntityGroup: (p: EntityPosition) => IEntityGroup
  getWorld: () => World
}
