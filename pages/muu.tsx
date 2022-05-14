import Image from 'next/image'
import { decode } from 'blurhash'
import { createCanvas } from 'canvas'

function muu() {
  function blurDataURLi(blurhashi: string) {
    const pixels = decode(blurhashi, 60, 60)
    const canvas = createCanvas(60, 60)
    const ctx = canvas.getContext('2d')
    const imageData = ctx.createImageData(60, 60)
    imageData.data.set(pixels)
    ctx.putImageData(imageData, 0, 0)
    const blurDataUrl = canvas.toDataURL()
    return blurDataUrl
  }
  return (
    <>
      <Image
        src="https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMjgwMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MjM0MjU4MQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"
        //src={blurDataURLi('LQLdwB10ITo4-mNGs;s.M{aztRn,')}
        height={2160}
        width={3840}
        id="0"
        key={0}
        alt="Image"
        objectFit="fill"
        className="w-full	rounded"
        placeholder="blur"
        blurDataURL={blurDataURLi('LQLdwB10ITo4-mNGs;s.M{aztRn,')}
      />
      <Image
        //src="https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMjgwMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MjM0MjU4MQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"
        src={blurDataURLi('LQLdwB10ITo4-mNGs;s.M{aztRn,')}
        height={2160}
        width={3840}
        id="1"
        key={1}
        alt="Image"
        objectFit="fill"
        className="w-full	rounded"
        placeholder="blur"
        blurDataURL={blurDataURLi('LQLdwB10ITo4-mNGs;s.M{aztRn,')}
      />
    </>
  )
}

export default muu
