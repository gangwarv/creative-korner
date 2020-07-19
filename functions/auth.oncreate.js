// import * as functions from "firebase-functions";
// import * as admin from "firebase-admin";
const functions = require('firebase-functions');
const admin = require('firebase-admin');

export const AuthUserCreate = functions.auth.user().onCreate((user) => {
  const db = admin.firestore();
  /**
   * canPublish = can publish own blogs
   * isAdmin = can publish own and other people's blog
   */
  const userData = { ...user, roles: { isPublisher: false, isAdmin: false } };
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
