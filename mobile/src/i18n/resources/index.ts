import { Language } from "@enums/Language";

import {
  NAMESPACE_AUTH,
  NAMESPACE_COMMON,
  NAMESPACE_FEEDBACK,
  NAMESPACE_FIELD,
  NAMESPACE_SETTINGS,
  NAMESPACE_VALIDATION,
} from "@consts/namespaces";

import authEN from "./en/auth.json";
import commonEN from "./en/common.json";
import feedbackEN from "./en/feedback.json";
import fieldEN from "./en/field.json";
import settingsEN from "./en/settings.json";
import validationEN from "./en/validation.json";

import authAR from "./ar/auth.json";
import commonAR from "./ar/common.json";
import feedbackAR from "./ar/feedback.json";
import fieldAR from "./ar/field.json";
import settingsAR from "./ar/settings.json";
import validationAR from "./ar/validation.json";

import authPL from "./pl/auth.json";
import commonPL from "./pl/common.json";
import feedbackPL from "./pl/feedback.json";
import fieldPL from "./pl/field.json";
import settingsPL from "./pl/settings.json";
import validationPL from "./pl/validation.json";

const resources = {
  [Language.ENGLISH]: {
    [NAMESPACE_AUTH]: authEN,
    [NAMESPACE_COMMON]: commonEN,
    [NAMESPACE_FEEDBACK]: feedbackEN,
    [NAMESPACE_FIELD]: fieldEN,
    [NAMESPACE_SETTINGS]: settingsEN,
    [NAMESPACE_VALIDATION]: validationEN,
  },
  [Language.ARABIC]: {
    [NAMESPACE_AUTH]: authAR,
    [NAMESPACE_COMMON]: commonAR,
    [NAMESPACE_FEEDBACK]: feedbackAR,
    [NAMESPACE_FIELD]: fieldAR,
    [NAMESPACE_SETTINGS]: settingsAR,
    [NAMESPACE_VALIDATION]: validationAR,
  },
  [Language.POLISH]: {
    [NAMESPACE_AUTH]: authPL,
    [NAMESPACE_COMMON]: commonPL,
    [NAMESPACE_FEEDBACK]: feedbackPL,
    [NAMESPACE_FIELD]: fieldPL,
    [NAMESPACE_SETTINGS]: settingsPL,
    [NAMESPACE_VALIDATION]: validationPL,
  },
};

export default resources;
