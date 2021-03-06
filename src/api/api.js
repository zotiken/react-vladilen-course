import axios from "axios";

var instance = axios.create({
  baseURL: "",
});
const API_KEY = "AIzaSyC8hwvrPQ-5Nv0QvSJz0jEnJ8UDf3rdfkQ"

export const api = {
  auth: {
    logIn: async (email, password) => {
      try {
        const response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
          { email: email, password: password, returnSecureToken: true }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    logOut: {},
    signUp: async (email, password) => {
      try {
        const response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
          { email: email, password: password, returnSecureToken: true }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  quizes: {
    get: async () => {
      try {
        const response = await axios.get(
          `https://react-quiz-vladilen.firebaseio.com/quizes.json`
        );
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }

    },
    quiz: {
      get: async (id) => {
        try {
          const response = await axios.get(
            `https://react-quiz-vladilen.firebaseio.com/quizes/${id}/quiz.json`
          );
          console.log(response.data);
          return response.data;
        } catch (error) {
          console.error(error);
        }},
      post: async (quiz) => {
        try {
          const response = await axios.post(
            `https://react-quiz-vladilen.firebaseio.com/quizes.json`,
            { quiz }
          );
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    }
  },
}
}

