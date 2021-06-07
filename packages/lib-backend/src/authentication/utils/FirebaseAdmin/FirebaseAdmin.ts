import { TokenClaims } from '@lib/common/authentication/models';
import admin from 'firebase-admin';
import { toString } from 'lodash';

class FirebaseAdmin {
  constructor() {
    if (admin.apps.length === 0) {
      //TODO: to secrets
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: 'development-dc20e',
          privateKey:
            '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDAKwfc5up3ZcRj\n0dknRjs85lzRORGnsw7WIkWcY9eXi6WwsYfdo9K4ilcHMiafh8SeVnWi4upR9wSM\nJkdtAPp3vsMbE1lEfiRokAQCDLpOyzZiMxOlFa8r/6A+nMABfwdUBYwiTvWr23gc\nCyTdBLRzIFpKG4ubuq4mytlko6vxrz2c0TrwuFP3OCEXs/yMyMAouAqwVkYRkquc\nVp0BOQu06eFtQC2pofy5yWogBpsEodrqkRQxXqxSrGuUQaV6MBawIb2rAC/FN5Wn\nBHhXC9QKf0BP+8Tz+PDL0I+/Oq/TGBdAJLJxWXFRHMROQTL5B8R6p4ueCVbdMx/R\n5qDrT38fAgMBAAECggEADTZU+pB0oDpPfkhAMWdhpqzB+e9kcg7C30cijExmPZJw\nFTQ6vqrgtigD/S5eCHIWh+2ZQrzUo0dw0rMsQWejt0lW2cA2G+bxjHzf9N7rwLbp\nEAEqAYItqPOqdu0vdSR6Nc7FCHQJIRFCv07aChYkn/u79kQ39sBaVx5AQ+w0fYMF\nYfV2UF3oKWQA9L+4Nv/epkWE5fsUsxfLCiYKSjArQ+c09bZSodORN7aXtTgmIQSp\noJA6HQ9Z6BQ/sQsisMD+8zjBT2M5oT6XJHQ/6VfsVuGmsL9d2dOCW0fOZjPwpSLf\nnEGdy+805VN5o1GWpQO8UzdCjVo/QReydGRDG1anoQKBgQD0sjuvJoMfQAxg5BPU\nmk9glC93TDqZBtany3hqQtONj5HMMq5AESUKMwiGMKsE81dzGT/jtPNn/hh0EZPC\nHcy+1ZdNYMC3PM81lecRlBSkCYdreXRodA2ogrsF2kT9Rc0k0oE388g8qub9N6LE\nOsAlNOljcCxhJYjYE2D9qAs7vwKBgQDJC5omSg/QkxiBTh0mWArGki1vkFs5VdCo\nzudAk5EA/bNYk1OT1PBKGehqOfxliGnztdPHUsPDTxBYudyNtUZj7Pz1JehOINhk\nKpRbDXKBD4TP71vtQ1/N0pgZaxuRNXq4NXhpAAkdzWWIQIGyrRPW2d1N7n4NDfab\nkxM5mWwUoQKBgQC2ekgKCPVVk6TniI7FSEITqs5u77jvL2tafGETFTzAX6WBmvXZ\nLy/pGD+uGpMewP2hBt5fSC0QiyvfOtBuvVxXn98SRCnTPBTmSCCmOkDeR4DmhA9s\nacdZuAwShEBYg/pFEHpuqGzV2Tki8p9+KLXryTaXAisGU0BmqqT05KFj7wKBgBHf\nSCrTNqiyCuGj0g+QkBSq9gMO8C0epdf73K7u71sJMqJTJoDj0yCjQPgAg6F7CQAz\nT8pOXzzDkI5yp1qpnMJRVQNuBUK8xL/S0TFu9pjmikX531AuRxwC9qZ70Q2NlYU+\nq5+Z8zWFBtuf8Gez3ymgYH4HD4mVjjCyWGksbGFBAoGAee44A2e1D6FgvbY4P3P6\nwEidg0ZJqYtV0qSR6FudpF3Tgw3heXCYJUpc+Pl2SS9aUI/Lg5WImd7lUrasCAW4\n+JRBrjkg0xiY3fZpNFN/MOG9L0lmmx1XZwZYevCopqVUaHeV0PLM07TbfYC+g2xN\nP+bFhV9rgv7GeTIja+eSnJI=\n-----END PRIVATE KEY-----\n',
          clientEmail: 'firebase-adminsdk-uhtrs@development-dc20e.iam.gserviceaccount.com',
        }),
      });
    }
  }

  public createToken(id: string, claims: TokenClaims) {
    return admin.auth().createCustomToken(toString(id), claims);
  }

  public verifyToken(token: string) {
    return admin
      .auth()
      .verifyIdToken(token)
      .then((decoded) => ({
        id: decoded.uid,
        claims: decoded.additionalClaims,
      }));
  }
}

export const firebaseAdmin = new FirebaseAdmin();
