// Overwrite any ant design theme specifications here:
// Link to newest theme: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
// backup link to current version of ant design: https://github.com/ant-design/ant-design/blob/954c7ecd8ed384a3c67ec8dfb0e0deaa14bbf83b/components/style/themes/default.less

const blackColor = "#34314c";
const whiteColor = "#ffffff";
const grayColor = "#737186";
const borderColor = "#e6e5ef";
const selectedTableRow = "#F7F7F7";
const transparent = "transparent";

module.exports = {
  "@font-family": "Inter",
  "@font-size-base": "16px",

  "@body-background": transparent,
  "@layout-body-background": transparent,
  "@border-radius-base": "4px", // major border radius

  "@input-placeholder-color": grayColor,

  "@table-header-bg": transparent,
  "@table-row-hover-bg": whiteColor,
  "@table-selected-row-bg": selectedTableRow,

  "@border-color-base": borderColor,
  "@border-color-split": borderColor,

  "@text-color": blackColor,
};
