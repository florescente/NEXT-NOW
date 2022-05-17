import { decode } from 'blurhash'
import { createCanvas } from 'canvas'

export function blurDataURLi(blurhashi: string, prorp: number) {
  const height = Math.round((210 * Math.round(prorp * 100)) / 100)
  const width = Math.round(210)
  const pixels = decode(blurhashi, width, height)
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')
  const imageData = ctx.createImageData(width, height)
  imageData.data.set(pixels)
  ctx.putImageData(imageData, 0, 0)
  const blurDataUrl = canvas.toDataURL('image/jpeg', 0.5)
  return blurDataUrl
}
