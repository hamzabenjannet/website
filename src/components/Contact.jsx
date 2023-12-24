import { ErrorMessage, Formik } from "formik";

import { EarthCanvas } from "./canvas";
import React from "react";
import RenderSectionHeder from "./RenderSectionHeder";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { useTranslation } from "react-i18next";
import useValidationSchema from "../hooks/useValidationSchema";

function onSubmit(
  { contactFormName = "", contactFormEmail = "", contactFormMessage = "" } = {},
  { setSubmitting = () => {}, resetForm = () => {} } = {}
) {
  try {
    setSubmitting(true);
    setTimeout(() => {
      const mailtoHrefString = `mailto:contact@hamzabenjannet.me?subject=${contactFormName} contacting from website.&body=${contactFormMessage}\n\n\n${contactFormName} | ${contactFormEmail}`;
      const mailtoHref = encodeURI(mailtoHrefString);
      window.location = mailtoHref;
      setSubmitting(false);
      resetForm();
    }, 200);
  } catch (error) {
    console.error(`error onSubmit`, error);
    setSubmitting(false);
  }
}

function Contact() {
  const { i18n } = useTranslation();

  const initialValues = {
    contactFormName: "",
    contactFormEmail: "",
    contactFormMessage: "",
  };

  const validationSchema = useValidationSchema({ validation: "contactForm" });
  const formikAttributes = {
    initialValues,
    validationSchema,
    onSubmit,
    validateOnBlur: false,
  };

  return (
    <div
      {...{
        className:
          "xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden relative z-0",
      }}
    >
      <motion.div
        {...{
          variants: slideIn("left", "tween", 0.2, 1),
          className: "flex-[0.75] bg-black-100 p-8 rounded-2xl",
        }}
      >
        <RenderSectionHeder
          {...{
            label: i18n.t("contact.label"),
            title: i18n.t("contact.title"),
          }}
        />

        <Formik {...formikAttributes}>
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
          }) => (
            <form {...{ className: "mt-12 flex flex-col gap-8" }}>
              <label {...{ className: "flex flex-col" }}>
                <span {...{ className: "text-white font-medium mb-4" }}>
                  {i18n.t(`contact.form.name.label`)}
                </span>
                <input
                  {...{
                    id: "contactFormName",
                    name: "contactFormName",
                    value: values.contactFormName,
                    placeholder: i18n.t(`contact.form.name.placeholder`),
                    title: i18n.t(`contact.form.name.title`),
                    onChange: handleChange,
                    onBlur: handleBlur,
                    required: true,
                    type: "text",
                    className:
                      "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",
                  }}
                />
                <ErrorMessage
                  {...{
                    id: "contactFormNameError",
                    name: "contactFormName",
                    component: "span",
                  }}
                />
              </label>
              <label {...{ className: "flex flex-col" }}>
                <span {...{ className: "text-white font-medium mb-4" }}>
                  {i18n.t(`contact.form.email.label`)}
                </span>
                <input
                  {...{
                    id: "contactFormEmail",
                    name: "contactFormEmail",
                    value: values.contactFormEmail,
                    placeholder: i18n.t(`contact.form.email.placeholder`),
                    title: i18n.t(`contact.form.email.title`),
                    onChange: handleChange,
                    onBlur: handleBlur,
                    required: true,
                    type: "email",
                    className:
                      "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",
                  }}
                />

                <ErrorMessage
                  {...{
                    id: "contactFormEmailError",
                    name: "contactFormEmail",
                    component: "span",
                  }}
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  {i18n.t(`contact.form.message.label`)}
                </span>
                <textarea
                  {...{
                    id: "contactFormMessage",
                    name: "contactFormMessage",
                    value: values.contactFormMessage,
                    placeholder: i18n.t(`contact.form.message.placeholder`),
                    title: i18n.t(`contact.form.message.title`),
                    onChange: handleChange,
                    onBlur: handleBlur,
                    required: true,
                    rows: 7,
                    columns: 3,
                    className:
                      "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",
                    style: {
                      resize: "none",
                    },
                  }}
                />

                <ErrorMessage
                  {...{
                    id: "contactFormMessageError",
                    name: "contactFormMessage",
                    component: "span",
                  }}
                />
              </label>

              <button
                {...{
                  disabled: !isValid,
                  "aria-disabled": isSubmitting,
                  type: "submit",
                  className: `bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary ${
                    !isValid ? `bg-btnDisabled` : ``
                  }`,
                  onClick: handleSubmit,
                }}
              >
                {isSubmitting
                  ? i18n.t(`contact.form.submit.sending`)
                  : i18n.t(`contact.form.submit.send`)}
              </button>
            </form>
          )}
        </Formik>
      </motion.div>

      <motion.div
        {...{
          variants: slideIn("right", "tween", 0.2, 1),
          className: `xl:flex-1 xl:h-auto`,
        }}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "Contact");
