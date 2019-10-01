type ListenerAction = ({ event }: { event: KeyboardEvent }) => void
type EventListenerOption = { key: Key; action: ListenerAction }
type Key = 'space'
type PixelProps = { x: number; y: number; attributes?: Attributes }
type EntityPosition = {
  x: number
  y: number
}

type Collision = {
  border: {
    offsetX: number
    offsetY: number
    width: number
    height: number
  }
  handler: Function
}

type Attributes = {
  color: string
}

type LayerType = 'background' | 'foreground' | 'ui'

type Layer = {
  type: LayerType
  index: number
}

type Color = string
