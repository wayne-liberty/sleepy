import { World } from '../world'
import { IEntity } from '../entity'

export type ListenerAction = ({ event }: { event: KeyboardEvent }) => void
export type Listener = {
  entity: IEntity
  key: Key
  action: ListenerAction
}
type DispatcherListener = Listener & {
  id: number
}

class InputDispatcher {
  private world: World
  private listeners: DispatcherListener[]
  private static instance: InputDispatcher | undefined
  static listenerId = 0

  static getInstance() {
    return InputDispatcher.instance
  }

  static initialize(world: World) {
    InputDispatcher.instance = new InputDispatcher(world)
    return InputDispatcher.instance
  }

  private constructor(world: World) {
    this.world = world
    this.listeners = []
    this.listener = this.listener.bind(this)
    this.hookUpEventListener(world.getInputSource())
  }

  private hookUpEventListener(container: HTMLElement) {
    window.addEventListener('keypress', this.listener)
  }

  private listener(event: KeyboardEvent) {
    this.listeners.forEach((listener) => {
      if (listener.key.toLowerCase() === event.code.toLowerCase()) {
        this.dispatch(event, listener)
      }
    })
  }

  private dispatch(event: KeyboardEvent, listener: Listener) {
    listener.action({ event })
  }

  addListener(listener: { key: Key; entity: IEntity; action: ListenerAction }) {
    InputDispatcher.listenerId += 1
    ;(<DispatcherListener>listener).id = InputDispatcher.listenerId
    this.listeners.push(listener as DispatcherListener)
    return InputDispatcher.listenerId
  }

  removeListener(id: number) {
    this.listeners = this.listeners.filter((listener) => listener.id !== id)
  }
}

export { InputDispatcher }
