import basicKeyToByte from './default';
import v10BasicKeyToByte from './v10';
import v11BasicKeyToByte from './v11';
export function getBasicKeyDict(version: number) {
  switch (version) {
    case 12: {
      return v11BasicKeyToByte;
    }
    case 11: {
      return v11BasicKeyToByte;
    }
    case 10: {
      return v10BasicKeyToByte;
    }
    default: {
      return basicKeyToByte;
    }
  }
}
