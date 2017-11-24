const link = (value, type = 'phone') => value
? {
  value,
  link: type === 'email'
  ? 'mailto:' + value
  // strip non number chars and prepend with "tel:"
  : 'tel:' + value.split('').filter(p => !isNaN(p) && p !== ' ').join('')
}
: null

export const PRIMARY_EMAIL = link('example@example.com', 'email')
export const PRIMARY_PHONE = link('1 (242) 555-5555')
export const SECONDARY_PHONE = link(null)
