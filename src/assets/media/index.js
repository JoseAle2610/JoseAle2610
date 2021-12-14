const size = {
  mobile: '576',
  tablet: '768',
  laptop: '992',
  laptopL: '1200',
  desktop: '1400'
}

const device = {
  mobile: `(min-width: ${size.mobile}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
};

export default device
