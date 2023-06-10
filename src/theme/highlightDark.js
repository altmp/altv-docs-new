var theme = {
  plain: {
    color: "#d1d5da",
    backgroundColor: "#1e1e1e",
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "#959da5",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#959da5",
        fontStyle: "italic",
      },
    },
    {
      types: ["builtin", "changed", "keyword"],
      style: {
        color: "#c678dd",
      },
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "#d19a66",
      },
    },
    {
      types: ["constant"],
      style: {
        color: "#d19a66",
      },
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "#e5c07b",
      },
    },
    {
      types: ["deleted", "string", "attr-value"],
      style: {
        color: "#98c379",
      },
    },
    {
      types: ["selector"],
      style: {
        color: "#a6e22e",
      },
    },
    {
      // Fix tag color
      types: ["tag"],
      style: {
        color: "#d73a49",
      },
    },
    {
      // Fix tag color for HTML
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "#c678dd",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#d1d5da",
      },
    },
    {
      // Fix punctuation color for HTML
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#d1d5da",
      },
    },
    {
      types: ["function"],
      style: {
        color: "#c678dd",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "#e5c07b",
      },
    },
    {
      types: ["char"],
      style: {
        color: "#d19a66",
      },
    },
  ],
};

module.exports = theme;