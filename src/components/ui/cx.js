/** Join class names, skipping falsy values. `cx('a', cond && 'b')` */
export default function cx(...parts) {
  return parts.filter(Boolean).join(' ')
}
