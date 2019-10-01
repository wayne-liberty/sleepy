import { IEntity, RenderShape } from './'
import { IWorld } from '../world'
import { RenderObject } from './IEntity'

class Entity implements IEntity {
  private image: RenderShape[]
  protected position: EntityPosition
  private layer: Layer
  protected world: IWorld
  private collision: Collision

  constructor(world: IWorld, arg: RenderObject) {
    this.world = world
    this.image = arg.image
    this.position = arg.position
    this.layer = arg.layer
    this.collision = arg.collision
    if (this.collision) {
      this.registerCollision(this.collision)
    }
  }

  getPosition() {
    return this.position
  }

  setPosition(position: EntityPosition) {
    this.position = position
    return this
  }

  getWorld() {
    return this.world
  }

  getRenderObjects() {
    return [
      {
        image: this.image,
        position: this.position,
        layer: this.layer
      }
    ] as RenderObject[]
  }

  getCollision() {
    return this.collision
  }

  registerCollision(config: Collision) {
    //TODO implement
  }

  /**
   * it's a helper function to add listen on input dispatcher
   * @param option specify kind of event to listen to and action
   */
  addEventListener(option: EventListenerOption) {
    return this.world.addEventListener(option)
  }

  removeEventListener(id: number) {
    return this.world.removeEventListener(id)
  }
}

export { Entity }
