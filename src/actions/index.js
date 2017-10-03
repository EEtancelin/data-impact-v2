  const headers = { authorization : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OWM1NDYzOTFiNTU5OTA1MDgzYjQ5NTAiLCJpYXQiOjE1MDYxMDA5NDF9.KRpAhVvp9m9dbIbO47OwnvC6iSEraXutdlB_RTgk5Lo'}

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OWM1NDYzOTFiNTU5OTA1MDgzYjQ5NTAiLCJpYXQiOjE1MDYxMDA5NDF9.KRpAhVvp9m9dbIbO47OwnvC6iSEraXutdlB_RTgk5Lo"
  const URL = `http://62.210.250.109:3050/api/init.json?authorization=${TOKEN}`;

const header = () => {
  return (
    new Headers({
      authorization : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OWM1NDYzOTFiNTU5OTA1MDgzYjQ5NTAiLCJpYXQiOjE1MDYxMDA5NDF9.KRpAhVvp9m9dbIbO47OwnvC6iSEraXutdlB_RTgk5Lo',
      mode: 'no-cors'
    })
  );
};

export function fetchProducts() {
  const promise = fetch(URL).then(r => r.json())
  .catch(err => console.log(err))

  return {
    type: 'FETCH_PRODUCTS',
    payload: promise // Will be resolved by redux-promise
  };
}
