import * as React from "react";
import { templateForColor } from "../ColorBase";
import {Color} from "../PageLayout"

const template = templateForColor(Color.GRAY)
export const getPath = () => `${template.getPath}-foo`;
export const getHeadConfig = template.getHeadConfig;
export default template.default;