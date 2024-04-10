const admin = require('firebase-admin');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuzyyAfk50wAYkKTz9PdYmIOIj_9cQDL8",
  authDomain: "gestao-de-funcionarios-e56ed.firebaseapp.com",
  projectId: "gestao-de-funcionarios-e56ed",
  storageBucket: "gestao-de-funcionarios-e56ed.appspot.com",
  messagingSenderId: "245514740424",
  appId: "1:245514740424:web:3c8d5ce2ccf2e08a4ffbfd"
};

const serviceAccount = require("../../../../../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  ...firebaseConfig // Spread operator para adicionar configurações adicionais
});

// Obtenha uma referência ao Firestore
export const db = admin.firestore();

// Exporte o Firestore
module.exports = { db };

export const makeFirestoreConnection = () => {
  // Retorne uma instância do Firestore
  return admin.firestore();
};