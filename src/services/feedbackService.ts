import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1PJSbcNu4sF_VNYiF6Ta3Q7aURkc9b4k",
  authDomain: "simt-ai-feedback.firebaseapp.com",
  projectId: "simt-ai-feedback",
  storageBucket: "simt-ai-feedback.firebasestorage.app",
  messagingSenderId: "494377046794",
  appId: "1:494377046794:web:c159efdf02cecf6631e0f3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface FeedbackData {
  rating: number;
  comment: string;
  userName: string;
  topMatch: string;
}

export async function submitFeedback(data: FeedbackData) {
  await addDoc(collection(db, "feedback"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}