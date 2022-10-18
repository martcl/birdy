export const unitStyles:{[key: string]: any} = {
    flokken: {
      background: "#f2cc07",
      color: "#000",
    },
    troppen: {
      background: "#63ac3b",
      color: "#fff",
    },
    roverlaget: {
      background: "#751052",
      color: "#fff",
    },
  }
  
  export const unitColor = ({ unit }: {unit: string}) => `
  background: ${(unitStyles[unit] || {}).background};
  color: ${(unitStyles[unit] || {}).color};
  `
  