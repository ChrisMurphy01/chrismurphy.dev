const scrollTop = function (props) {
  window.scrollTo(0, 0)
}

const yearsDeveloping = () => {
  const today = new Date

  return today.getFullYear() - 2012
}

export {
  scrollTop,
  yearsDeveloping
}
