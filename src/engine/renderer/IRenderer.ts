import { World } from '../world'

interface IRenderer {
  world: World

  render(): void
}

export { IRenderer }
