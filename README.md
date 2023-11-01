<div align="center">
  <img
    src="ts.png"
    alt="ts-readme Logo"
    width="150px"
    padding="20px"
  />
  <br />
  <br />
  <h1>eascalpi</h1>
  <p>Easy use call api with functional</p>
</div>

---

## Installation

```sh
npm i @ddcode_/eascalpi
# with yarn
yarn add @ddcode_/eascalpi
```

## Usage

Simply run `ts-readme` and it will pick up all the typescript files in your `src` folder and generate docs.

```javascript
import pkg from '@ddcode_/eascalpi';
const { callApi } = pkg;

//with async
const data = await callApi('POST','URL',{
  params: string, //dont passing this if you cannot use the params
  body: object, //dont passing this if you cannot use the body
  cType: file,  //dont passing this if you cannot use the contentType
  wToken: string, //dont passing this if you cannot use the withToken
  csrfToken: string, //dont passing this if you cannot use the csrfToken
})

console.log(data)
```