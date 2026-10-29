import cx from '../ui/cx'
import { Picture } from '../ui/Media'
import PhoneFrame from './PhoneFrame'

// Left and right phones turn toward the centre one (ref S4 Sana, layout only). Static: no motion to reduce.
const sides = [
  {
    className: 'left-[5%] top-1/2 w-[29%] -translate-y-[46%]',
    style: { transform: 'perspective(1400px) rotateY(18deg) rotateZ(-2deg)', transformOrigin: 'right center' },
  },
  {
    className: 'left-1/2 top-1/2 z-10 w-[33%] -translate-x-1/2 -translate-y-1/2',
    style: undefined,
  },
  {
    className: 'right-[5%] top-1/2 w-[29%] -translate-y-[46%]',
    style: { transform: 'perspective(1400px) rotateY(-18deg) rotateZ(2deg)', transformOrigin: 'left center' },
  },
]

/**
 * Three phones, the centre one forward. Percentage sizes scale the whole fan with its box, so the same markup works
 * from 320 px up. Round 2 keeps it small: the box sets the size (pass an aspect class), not the viewport.
 *
 * phones: three { image, alt } entries, left to right. sizes: the centre phone's rendered width.
 */
export default function PhoneFan({ phones, sizes = '(min-width: 1024px) 10rem, 33vw', className }) {
  return (
    <div className={cx('relative', className)}>
      {phones.slice(0, 3).map((phone, i) => (
        <PhoneFrame key={phone.image.src} className={cx('absolute', sides[i].className)} style={sides[i].style}>
          <Picture
            image={phone.image}
            alt={phone.alt}
            sizes={sizes}
            className="block h-full"
            imgClassName="h-full w-full object-cover object-top"
          />
        </PhoneFrame>
      ))}
    </div>
  )
}
