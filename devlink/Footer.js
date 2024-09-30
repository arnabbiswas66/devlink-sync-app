"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Section
          className={_utils.cx(_styles, "footer-subscribe")}
          grid={{
            type: "section",
          }}
          tag="section"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-2")}
            tag="div"
          >
            <_Builtin.FormWrapper
              className={_utils.cx(_styles, "footer-form-two")}
            >
              <_Builtin.FormForm
                className={_utils.cx(_styles, "footer-form-container-two")}
                name="wf-form-Footer-Form-Two"
                data-name="Footer Form Two"
                method="get"
                id="wf-form-Footer-Form-Two"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-form-title")}
                  tag="div"
                >
                  {"Subscribe Newsletters"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-form-block-two")}
                  tag="div"
                >
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "footer-form-input")}
                    autoFocus={false}
                    maxLength={256}
                    name="Footer-Email-Two-2"
                    data-name="Footer Email Two 2"
                    placeholder="Enter your email"
                    type="email"
                    disabled={false}
                    required={true}
                    aria-label="Enter your email"
                    id="Footer-Email-Two-2"
                  />
                  <_Builtin.FormButton
                    className={_utils.cx(
                      _styles,
                      "button-primary",
                      "footer-form-button"
                    )}
                    type="submit"
                    value="Subscribe Now"
                    data-wait="Please wait..."
                  />
                </_Builtin.Block>
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage>
                <_Builtin.Block tag="div">
                  {"Thank you! Your submission has been received!"}
                </_Builtin.Block>
              </_Builtin.FormSuccessMessage>
              <_Builtin.FormErrorMessage>
                <_Builtin.Block tag="div">
                  {"Oops! Something went wrong while submitting the form."}
                </_Builtin.Block>
              </_Builtin.FormErrorMessage>
            </_Builtin.FormWrapper>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-wrapper-three")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-block-three")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-three")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"About us"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-three")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Features"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-three")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"User Example"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-three")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Pricing"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-three")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Resources"}
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-social-block-three")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-social-link-three")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a705912aaeb_facebook%20big%20filled.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-social-link-three")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ab37a12aaf0_twitter%20big.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-social-link-three")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a61f512aaed_instagram%20big.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-social-link-three")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a717f12aaea_youtube%20small.svg"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-divider-two")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-bottom")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-copyright")}
                tag="div"
              >
                {"© 2022 Company name. All rights reserved"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-legal-block")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-legal-link")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Terms Of Use"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-legal-link")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Privacy Policy"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Section>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
