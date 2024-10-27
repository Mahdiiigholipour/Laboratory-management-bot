const { Keyboard } = require("grammy");
const autoBind = require("auto-bind");

class KeyboardStructure {
  constructor() {
    autoBind(this);
  }
  // OTHER ++
  #L_footer = Object.freeze({
    back: "بازگشت",
    home: "خانه",
  });

  // HOME
  L_home = Object.freeze({
    master: "کارفرما",
    search: "جست و جو",
    invoice: "فاکتور",
    product: "محصول",
    shortcut: "میانبر",
  });

  // MASTER ----
  L_home_master = Object.freeze(
    Object.assign(
      {
        add: "افزودن",
        edit: "ویرایش",
        details: "اطلاعات",
      },
      this.#L_footer
    )
  );

  // SEARCH ----
  L_home_search = Object.freeze(
    Object.assign(
      {
        master: "کارفرما",
        patient: "بیمار",
        product: "محصول",
        date: "تاریخ",
      },
      this.#L_footer
    )
  );

  // PRODUCT ----
  L_home_product = Object.freeze(
    Object.assign(
      {
        orthobase: "اورتوبیس",
        retainer: "نگهدارنده",
        spaceSaver: "فضانگهدارنده",
        nightGuardAndBleaching: "نایت گارد و بلیچینگ",
        treatmentDevices: "پلاک های درمانی",
        Other: "دیگر",
      },
      this.#L_footer
    )
  );
  L_home_product_retainer = Object.freeze(
    Object.assign(
      {
        essix: "اسیکس",
        hawley: "هاولی",
      },
      this.#L_footer
    )
  );
  L_home_product_spaceSaver = Object.freeze(
    Object.assign(
      {
        bandAndLoop: "بند و لوپ",
        nance: "نانس",
        lingualArch: "لینگوال آرچ",
        TPA: "تی پی ای",
      },
      this.#L_footer
    )
  );
  L_home_product_nightGuardAndBleaching = Object.freeze(
    Object.assign(
      {
        nightGuard: "نایت گارد",
        bleaching: "بلیچچینگ",
      },
      this.#L_footer
    )
  );
  L_home_product_treatmentDevices = Object.freeze(
    Object.assign(
      {
        functional: "فانکشنال",
        expantion: "اکسپنشن",
        hyrax: "هایرکس",
        other: "دیگر",
      },
      this.#L_footer
    )
  );
  L_home_product_other = {};

  // SHORTCUT
  L_shortcut = Object.freeze({
    orthobase: "اورتوبیس",
    essix: "اسسیکس",
    master: "کارفرما",
    patient: "بیمار",
    home: "خانه",
  });

  // Buttons

  // HOME
  B_home() {
    return new Keyboard()
      .text(this.L_home.master)
      .text(this.L_home.search)
      .row()
      .text(this.L_home.invoice)
      .text(this.L_home.product)
      .row()
      .text(this.L_home.shortcut)
      .resized();
  }

  // MASTER ----
  B_home_master() {
    return new Keyboard()
      .text(this.L_home_master.add)
      .text(this.L_home_master.edit)
      .text(this.L_home_master.details)
      .row()
      .append(this.#B_footer())
      .resized();
  }

  // SEARCH ----
  B_home_search() {
    return new Keyboard()
      .text(this.L_home_search.master)
      .text(this.L_home_search.patient)
      .row()
      .text(this.L_home_search.date)
      .text(this.L_home_search.product)
      .row()
      .append(this.#B_footer())
      .resized();
  }

  // PRODUCT ----
  B_home_product() {
    return new Keyboard()
      .text(this.L_home_product.orthobase)
      .text(this.L_home_product.retainer)
      .row()
      .text(this.L_home_product.spaceSaver)
      .text(this.L_home_product.treatmentDevices)
      .row()
      .text(this.L_home_product.nightGuardAndBleaching)
      .text(this.L_home_product.Other)
      .row()
      .append(this.#B_footer())
      .resized();
  }
  B_home_product_retainer() {
    return new Keyboard()
      .text(this.L_home_product_retainer.essix)
      .text(this.L_home_product_retainer.hawley)
      .row()
      .append(this.#B_footer())
      .resized();
  }
  B_home_product_spaceSaver() {
    return new Keyboard()
      .text(this.L_home_product_spaceSaver.bandAndLoop)
      .text(this.L_home_product_spaceSaver.nance)
      .text(this.L_home_product_spaceSaver.lingualArch)
      .text(this.L_home_product_spaceSaver.TPA)
      .row()
      .append(this.#B_footer())
      .resized();
  }
  B_home_product_nightGuardAndBleaching() {
    return new Keyboard()
      .text(this.L_home_product_nightGuardAndBleaching.bleaching)
      .text(this.L_home_product_nightGuardAndBleaching.nightGuard)
      .row()
      .append(this.#B_footer())
      .resized();
  }
  B_home_product_treatmentDevices() {
    return new Keyboard()
      .text(this.L_home_product_treatmentDevices.expantion)
      .text(this.L_home_product_treatmentDevices.functional)
      .text(this.L_home_product_treatmentDevices.hyrax)
      .text(this.L_home_product_treatmentDevices.other)
      .row()
      .append(this.#B_footer())
      .resized();
  }
  B_home_product_other() {
    return new Keyboard().text("به زودی");
  }
  // SHORTCUT
  B_shortcut() {
    return new Keyboard()
      .text(this.L_shortcut.orthobase)
      .text(this.L_shortcut.essix)
      .row()
      .text(this.L_shortcut.master)
      .text(this.L_shortcut.patient)
      .row()
      .text(this.L_shortcut.home)
      .resized();
  }

  #B_footer() {
    return new Keyboard().text(this.#L_footer.back).text(this.#L_footer.home);
  }
}
module.exports = new KeyboardStructure();
