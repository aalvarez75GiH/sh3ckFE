import React from "react";
// import successImage from "../../images/ok_success_icon.svg";
import successImage from "../../images/done_icon.png";
import foundImage from "../../images/done_icon.png";
import { FaTimes } from "react-icons/fa";
import { regularCopy } from "./notificationData";
import { Link as LinkS } from "react-scroll";
import { OffsetHandler } from "../../utils/settingOffsets";
import {
  responseDataInterested,
  responseDataRegister,
  responseDataLogin,
  responseDataNewPIN,
} from "../../components/notifications/notificationData";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

const NotificationUI = () => {
  let responseData;
  const dispatch = useDispatch();
  const {
    settingResponse,
    activatingForm,
    gettingLoginResponseData,
    openingContactSection,
  } = bindActionCreators(actionCreators, dispatch);

  const language = useSelector((state) => state.sideBarState.language);
  const active = useSelector((state) => state.contactSectionState.active);
  const loginResponse = useSelector((state) => state.homeState.loginResponse);
  const response = useSelector((state) => state.contactSectionState.response);
  console.log(response);
  console.log(loginResponse);
  const url = response ? response.config.url : loginResponse.config.url;
  // const url_regUsers = "https://intense-atoll-00786.herokuapp.com/api/users"
  const url_interestedUsers =
    "https://intense-atoll-00786.herokuapp.com/api/interestedUsers";

  if (response && active === "interested") {
    responseData = responseDataInterested;
  }
  if (response && active === "forgotPIN") {
    responseData = responseDataNewPIN;
  }
  if (response && active === "check") {
    responseData = responseDataRegister;
  }
  if (response && active === "login_form") {
    responseData = responseDataLogin;
  }

  const capitalizeFirstLetter = (string) => {
    const str2 = string.charAt(0).toUpperCase() + string.slice(1);
    console.log(str2.split(" ")[0]);
    return str2.split(" ")[0];
  };

  const closingNotification = () => {
    settingResponse(null);
    gettingLoginResponseData(null); //action
    activatingForm(null); //action
    openingContactSection(false); //action
  };
  // console.log(username)
  const nameSplittedAndCapitalized = capitalizeFirstLetter(
    loginResponse ? loginResponse.data.name : response.data.name
  );
  // console.log('splitting response: ', responseSplitted[0])
  if (response) {
    if (response.status === 400) {
      return (
        // <div className="notificationContainer">
        <div
          className={
            response ? "notificationContainer_open" : "notificationContainer"
          }
        >
          <LinkS
            onClick={closingNotification}
            to="nextStepSection"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={OffsetHandler("checkAProduct")}
            duration={500}
            className="closeIconContainer"
          >
            <FaTimes />
          </LinkS>
          <div className="notificationWrapper">
            <img src={foundImage} alt="successImage" />
            <div className="notificationName">
              <span className="notificationSpan">
                <b>
                  {language === "ES" ? regularCopy.hola : regularCopy.hello}{" "}
                  {""}
                  {nameSplittedAndCapitalized}
                </b>
              </span>
            </div>
            <div className="notificationResponse">
              {language === "ES"
                ? responseData.errorMessage
                : responseData.errorMessage_EN}
            </div>

            <LinkS
              className="notificationBtn"
              onClick={closingNotification}
              to="nextStepSection"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={OffsetHandler("checkAProduct")}
              duration={500}
            >
              {language === "Es"
                ? regularCopy.continueBtnCopy
                : regularCopy.continueBtnCopy_EN}
            </LinkS>
          </div>
        </div>
      );
    }
    if (response.status === 409) {
      return (
        <div
          className={
            response ? "notificationContainer_open" : "notificationContainer"
          }
        >
          <LinkS
            onClick={closingNotification}
            to="nextStepSection"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={OffsetHandler("checkAProduct")}
            duration={500}
            className="closeIconContainer"
          >
            <FaTimes />
          </LinkS>
          <div className="notificationWrapper">
            <img src={foundImage} alt="successImage" />
            <div className="notificationName">
              <span className="notificationSpan">
                <b>
                  {language === "ES" ? regularCopy.hola : regularCopy.hello}{" "}
                  {""}
                  {nameSplittedAndCapitalized}
                </b>
              </span>
            </div>
            <div className="notificationResponse">
              {language === "ES"
                ? responseData.errorMessage
                : responseData.errorMessage_EN}
            </div>
            <LinkS
              to="nextStepSection"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={OffsetHandler("checkAProduct")}
              duration={500}
              className="notificationBtn"
              onClick={closingNotification}
            >
              {language === "Es"
                ? regularCopy.continueBtnCopy
                : regularCopy.continueBtnCopy_EN}
            </LinkS>
          </div>
        </div>
      );
    }
    if (response.status === 201) {
      return (
        <div
          className={
            response ? "notificationContainer_open" : "notificationContainer"
          }
        >
          <LinkS
            to="nextStepSection"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={
              url === url_interestedUsers
                ? -5000
                : OffsetHandler("checkAProduct")
            }
            duration={url === url_interestedUsers ? 1000 : 500}
            onClick={closingNotification}
            className="closeIconContainer"
          >
            <FaTimes />
          </LinkS>
          <div className="notificationWrapper">
            <img src={successImage} alt="successImage" />
            <div className="notificationName">
              <span className="notificationSpan">
                <b>
                  {language === "ES" ? regularCopy.hola : regularCopy.hello}{" "}
                  {""}
                  {nameSplittedAndCapitalized}
                </b>
              </span>
            </div>
            <div className="notificationResponse">
              {language === "ES"
                ? responseData.successMessage
                : responseData.successMessage_EN}
            </div>
            <LinkS
              to="nextStepSection"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={
                url === url_interestedUsers
                  ? -5000
                  : OffsetHandler("checkAProduct")
              }
              duration={url === url_interestedUsers ? 1000 : 500}
              className="notificationBtn"
              onClick={closingNotification}
            >
              {language === "Es"
                ? regularCopy.continueBtnCopy
                : regularCopy.continueBtnCopy_EN}
            </LinkS>
          </div>
        </div>
      );
    }
    if (response.status === 200) {
      return (
        <div
          className={
            response ? "notificationContainer_open" : "notificationContainer"
          }
        >
          <LinkS
            to="nextStepSection"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={OffsetHandler("checkAProduct")}
            duration={500}
            onClick={closingNotification}
            className="closeIconContainer"
          >
            <FaTimes />
          </LinkS>
          <div className="notificationWrapper">
            <img src={successImage} alt="successImage" />
            <div className="notificationName">
              <span className="notificationSpan">
                <b>
                  {language === "ES" ? regularCopy.hola : regularCopy.hello}{" "}
                  {""}
                  {nameSplittedAndCapitalized}
                </b>
              </span>
            </div>
            <div className="notificationResponse">
              {language === "ES"
                ? responseData.successMessage
                : responseData.successMessage_EN}
            </div>
            <LinkS
              to="nextStepSection"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={OffsetHandler("checkAProduct")}
              duration={500}
              className="notificationBtn"
              onClick={closingNotification}
            >
              {language === "Es"
                ? regularCopy.continueBtnCopy
                : regularCopy.continueBtnCopy_EN}
            </LinkS>
          </div>
        </div>
      );
    }
    if (response.status === 500) {
      return (
        <div>
          <b>
            {language === "Es"
              ? regularCopy.error500Copy
              : regularCopy.continueBtnCopy_EN}
          </b>
        </div>
      );
    }
  }
  return null;
};

export default NotificationUI;
