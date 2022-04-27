const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect) {
    if (isDirect !== undefined) {
      this.isDirect = isDirect;
    } else {
      this.isDirect = true;
    }
  }

  /* private */ spreadKey(message, key) {
    let syncedKey = "";

    let j = 0;
    for (let i = 0; i < Math.max(message.length, key.length); i++) {
      if (!message.charAt(i).match(/\s/)) {
        syncedKey += key[j % key.length];
        j++;
      } else {
        syncedKey += message[i];
      }
    }

    return syncedKey.toUpperCase();
  }

  /* private */ applyCipheringMode(str) {
    if (this.isDirect) {
      return str;
    } else {
      return str.split("").reverse().join("");
    }
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    const syncedKey = this.spreadKey(message, key);
    const CHARCODE_A = "A".charCodeAt(0);
    const ALPHA_COUNT = 26;

    const encryptedMessage = message
      .toUpperCase()
      .split("")
      .map((letter, i) => {
        if (!letter.match(/[A-Z]/)) {
          return letter;
        }

        const keyLetter = syncedKey.charAt(i);
        const m = letter.charCodeAt(0) - CHARCODE_A;
        const k = keyLetter.charCodeAt(0) - CHARCODE_A;

        return String.fromCharCode(CHARCODE_A + ((m + k) % ALPHA_COUNT));
      })
      .join("");

    return this.applyCipheringMode(encryptedMessage);
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    const syncedKey = this.spreadKey(encryptedMessage, key);
    const CHARCODE_A = "A".charCodeAt(0);
    const ALPHA_COUNT = 26;

    const message = encryptedMessage
      .toUpperCase()
      .split("")
      .map((encryptedLetter, i) => {
        if (!encryptedLetter.match(/[A-Z]/)) {
          return encryptedLetter;
        }

        const keyLetter = syncedKey[i];
        const e = encryptedLetter.charCodeAt(0) - CHARCODE_A;
        const k = keyLetter.charCodeAt(0) - CHARCODE_A;

        return String.fromCharCode(
          CHARCODE_A + ((e - k + ALPHA_COUNT) % ALPHA_COUNT)
        );
      })
      .join("");

    return this.applyCipheringMode(message);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
