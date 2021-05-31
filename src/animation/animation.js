export const slideRightVariants = {
  //slide right
  from: {
    opacity: 0,
    x: -60,
  },
  to: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 180,
      mass: 4,
      damping: 30,
      duration: 2,
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
};

export const slideUpVariants = {
  //slide up
  from: {
    opacity: 0,
    y: 60,
  },
  to: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1.5,
      type: "spring",
      delayChildren: 1,
    },
  },
};

export const slideUpChildrenVariants = {
  //slide up for children
  from: {
    opacity: 0,
    y: 60,
  },
  to: {
    opacity: 1,
    y: 0,
  },
};

export const fadeVariants = {
  //fade
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const scaleOnHover = {
  scale: 1.1,
};

export const zoomInOut = {
  from: {
    scale: 0,
  },
  to: {
    scale: 1,
  },
};

export const slideLeftVariants = {
  from: {
    opacity: 0,
    x: 40,
  },
  to: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 4,
      damping: 20,
      duration: 2,
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

export const slideLeftChildrenVariants = {
  from: {
    opacity: 0,
    x: 40,
  },
  to: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      stiffness: 120,
    },
  },
};
