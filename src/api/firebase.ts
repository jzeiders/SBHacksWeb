// const TEST_URL = "https://us-central1-sbhacks-6e5fa.cloudfunctions.net/eval";
const TEST_URL = "http://localhost:5000/sbhacks-6e5fa/us-central1/eval";

export const testFunction = (code: string) => {
  return fetch(TEST_URL, {
    method: "POST",
    body: code,
    headers: new Headers({
      "Content-Type": "text/plain"
    })
  }).then(res => {
    return res.text();
  });
};
