const screen = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 426,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

const size = {
  mobileS: `${screen.mobileS}px`,
  mobileM: `${screen.mobileM}px`,
  mobileL: `${screen.mobileL}px`,
  tablet: `${screen.tablet}px`,
  laptop: `${screen.laptop}px`,
  laptopL: `${screen.laptopL}px`,
  desktop: `${screen.desktop}px`,
};

const device = {
  fromMobileS: `(min-width: ${screen.mobileS}px)`,
  fromMobileM: `(min-width: ${screen.mobileM}px)`,
  fromMobileL: `(min-width: ${screen.mobileL}px)`,
  fromTablet: `(min-width: ${screen.tablet}px)`,
  fromLaptop: `(min-width: ${screen.laptop}px)`,
  fromLaptopL: `(min-width: ${screen.laptopL}px)`,
  fromDesktop: `(min-width: ${screen.desktop}px)`,
  fromDesktopL: `(min-width: ${screen.desktop}px)`,

  untilMobileS: `(max-width: ${screen.mobileS - 1}px)`,
  untilMobileM: `(max-width: ${screen.mobileM - 1}px)`,
  untilMobileL: `(max-width: ${screen.mobileL - 1}px)`,
  untilTablet: `(max-width: ${screen.tablet - 1}px)`,
  untilLaptop: `(max-width: ${screen.laptop - 1}px)`,
  untilLaptopL: `(max-width: ${screen.laptopL - 1}px)`,
  untilDesktop: `(max-width: ${screen.desktop - 1}px)`,
  untilDesktopL: `(max-width: ${screen.desktop - 1}px)`,

  size,

  screen,
};


export default device;