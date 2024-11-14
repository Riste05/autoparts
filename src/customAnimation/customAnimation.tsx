export const animateContainer = {
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const animateHeaderItem = {
  hidden: { opacity: 0, y: 70, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0)",
    transition: { duration: 0.8 },
  },
};

export const animateHeaderPagesImage = {
  hidden: { opacity: 0, x: 120, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0)",
    transition: { duration: 1 },
  },
};
