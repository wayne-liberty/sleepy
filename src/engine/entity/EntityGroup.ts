import { IEntityGroup, IEntity } from './'
import { IWorld } from '../world'
import { Entity } from './Entity'

class EntityGroup extends Entity implements IEntityGroup {
  private entities: IEntity[]
  private originalPosition: EntityPosition

  constructor(world: IWorld, position: EntityPosition) {
    super(world, {
      position,
      image: [],
      layer: {} as any
    })
    this.entities = []
    this.originalPosition = { ...position }
  }

  addEntity(entity: IEntity) {
    this.entities.push(entity)
  }

  getEntities() {
    return this.entities
  }

  getRenderObjects() {
    const offsetX = this.position.x - this.originalPosition.x
    const offsetY = this.position.y - this.originalPosition.y
    const res = this.entities.map((entity) => {
      const renderObjects = entity.getRenderObjects()
      renderObjects.forEach((renderObject) => {
        const { x, y } = renderObject.position
        renderObject.position = {
          x: x + offsetX,
          y: y + offsetY
        }
      })
      return renderObjects
    })

    return res.flat()
  }

  addEventListener(option: EventListenerOption) {
    return this.world.addEventListener(option)
  }

  removeEventListener(id: number) {
    return this.world.removeEventListener(id)
  }
}

export { EntityGroup }
