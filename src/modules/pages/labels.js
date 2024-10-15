const footer = Object.freeze({
  back: "بازگشت",
  home: "خانه",
});

const home = Object.freeze({
  master: "کارفرما",
  search: "جست و جو",
  invoice: "فاکتور",
  product: "محصول",
  shortcut: "میانبر",
});

const master = Object.freeze(
  Object.assign(
    {
      add: "افزودن",
      edit: "ویرایش",
      details: "اطلاعات",
    },
    footer
  )
);

const labels = { home, master };
module.exports = labels;
