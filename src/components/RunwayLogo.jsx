/**
 * RUNWAY wordmark from public/runway-wordmark.png (override `src` for nav-only assets).
 */
export default function RunwayLogo({
  className = '',
  alt = 'Runway',
  src: srcProp,
  ...rest
}) {
  const src =
    srcProp ?? `${import.meta.env.BASE_URL}runway-wordmark.png`
  return (
    <img
      src={src}
      alt={alt}
      className={`block shrink-0 object-contain object-left ${className}`}
      {...rest}
    />
  )
}
