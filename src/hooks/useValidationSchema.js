import * as Yup from "yup";

import { useTranslation } from "react-i18next";

function useValidationSchema({ validation = "contactForm" } = {}) {
  const { i18n } = useTranslation();

  const validationSchemas = {
    contactForm: Yup.object({
      contactFormName: Yup.string()
        .required(i18n.t("contact.form.field.validate.required"))

        .min(2, (d) =>
          i18n.t("contact.form.field.validate.min", { min: d.min })
        )

        .max(50, (d) =>
          i18n.t("contact.form.field.validate.max", { max: d.max })
        )
        .test(
          "is-all-alphabetic-chars",
          (d) =>
            `${i18n.t("contact.form.field.validate.alphabetic", {
              field_value:
                d.value.replace(/\s/g, "").length > 0
                  ? `${d.value.slice(0, 3)}...`
                  : ``,
            })}`,
          (value) =>
            // not all empty spaces
            value?.trim() && (value === null || /^[a-zA-Z\s]*$/.test(value))
        ),
      contactFormEmail: Yup.string()
        .email(`${i18n.t("contact.form.field.validate.email")}`)
        .required(`${i18n.t("contact.form.field.validate.required")}`)
        .min(6, `${i18n.t("contact.form.field.validate.min", { min: 6 })}`)
        .max(50, `${i18n.t("contact.form.field.validate.max", { max: 50 })}`)
        .matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          `${i18n.t("contact.form.field.validate.email")}`
        ),
      contactFormMessage: Yup.string()
        .required(`${i18n.t("contact.form.field.validate.required")}`)
        .min(10, `${i18n.t("contact.form.field.validate.min", { min: 10 })}`)
        .max(500, `${i18n.t("contact.form.field.validate.max", { max: 300 })}`)
        .test(
          "is-not-html",
          `${i18n.t("contact.form.field.validate.no_html_allowed")}`,
          (value) => value == null || !/<\/?[a-z][\s\S]*>/i.test(value)
        ),
    }),
  };

  return validationSchemas[validation];
}

export default useValidationSchema;
