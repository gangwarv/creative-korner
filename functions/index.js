const functions = require("firebase-functions");
const admin = require("firebase-admin");
const app = require("./app");

// import { AuthUserCreate } from "./auth.oncreate";

let isAppInitialized = false;

exports.app = functions.https.onRequest(app);

exports.onAuthCreate = functions.auth.user().onCreate((user) => {
  if (!isAppInitialized) {
    admin.initializeApp();
    isAppInitialized = true;
  }
  const db = admin.firestore();
  /**
   * canPublish = can publish own blogs
   * isAdmin = can publish own and other people's blog
   */

  const userData = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    createdAt: new Date(),
    roles: { isPublisher: false, isAdmin: false },
  };
  if (
    user &&
    user.displayName &&
    (user.displayName.toLowerCase().indexOf("manvi") > -1 ||
      user.displayName.toLowerCase().indexOf("vishal") > -1)
  ) {
    userData.roles.isAdmin = true;
  }

  return db.collection("users").doc(user.uid).set(userData, { merge: true });
});

// blog create =>
exports.onBlogCreate = functions.firestore
  .document("BlogPost/{id}")
  .onCreate((snapshot, context) => {
    if (!isAppInitialized) {
      admin.initializeApp();
      isAppInitialized = true;
    }
    const db = admin.firestore();

    let data = {

    };

    return db.doc('metadata/blogs').set(data, {merge: true});
  });

  