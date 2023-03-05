import {rootChakra} from "./rootChakra";
import {sacralChakra} from "./sacralChakra";
import {solarPlexusChakra} from "./solarPlexusChakra";
import { heartChakra } from "./heartChakra";
import { throatChakra } from "./throatChakra";
import { thirdEyeChakra } from "./thirdEyeChakra";
import { crownChakra } from "./crownChakra";
import { allChakra } from "./allChakra";

const chakrasData = () => {
  return {
    root: rootChakra,
    sacral: sacralChakra,
    solarPlexus: solarPlexusChakra,
    heart: heartChakra,
    throat: throatChakra,
    thirdEye: thirdEyeChakra,
    crown: crownChakra,
    all: allChakra
  }
}

export default chakrasData;