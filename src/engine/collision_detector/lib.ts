import { IEntity } from '../entity'

function isWithin(
  point: { x: number; y: number },
  rect: { x: number; y: number; width: number; height: number }
) {
  return (
    point.x >= rect.x &&
    point.x <= rect.x + rect.width &&
    point.y >= rect.y &&
    point.y <= rect.y + rect.height
  )
}

function getCorners(e: IEntity) {
  const collision = e.getCollision()
  const position = e.getPosition()
  const x = position.x + collision.border.offsetX
  const y = position.y + collision.border.offsetY

  const leftTop = {
    x: x,
    y: y
  }
  const leftDown = {
    x: x,
    y: y + collision.border.height
  }
  const rightTop = {
    x: x + collision.border.width,
    y: y
  }
  const rightDown = {
    x: x + collision.border.width,
    y: y + collision.border.height
  }

  return [leftTop, leftDown, rightTop, rightDown]
}

function getRect(e: IEntity) {
  const collision = e.getCollision()
  const position = e.getPosition()
  return {
    x: position.x + collision.border.offsetX,
    y: position.y + collision.border.offsetY,
    width: collision.border.width,
    height: collision.border.height
  }
}

export function isColliding(e1: IEntity, e2: IEntity) {
  const lhsCorners = getCorners(e1)
  const rhsRect = getRect(e2)
  if (lhsCorners.find((point) => isWithin(point, rhsRect))) {
    return true
  }

  const rhsCorners = getCorners(e2)
  const lhsRect = getRect(e1)
  if (rhsCorners.find((point) => isWithin(point, lhsRect))) {
    return true
  }

  return false
}
