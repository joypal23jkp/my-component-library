import * as components from "@/components";
import { sfcInstaller } from "@/utils/sfc";

const universalInstaller = () => {
  return sfcInstaller(components);
};

export default universalInstaller();
