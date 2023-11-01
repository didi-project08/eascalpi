<div align="center">
  <!-- <img
    src="ts.png"
    alt="ts-readme Logo"
    width="150px"
    padding="20px"
  />
  <br />
  <br /> -->
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

## Method

| Name       | Type     | Description                     | default |
| ---------- | -------- | ------------------------------- | ------- |
| params     | string   | '?name=1&age=2'                 | null    |
| body       | object   | {name:'test',age:23}            | null    |
| cType      | string   | insert 'file' type for uploaded | null    |
| wToken     | string   | for authorization Bearer token  | null    |
| csrfToken  | string   | for validation csrf-token       | null    |


## Usage

Simply use `eascalpi` and this can be reused in your javascript project.

```javascript
import { callApi } from '@ddcode_/eascalpi';

//with async
const data = await callApi('POST','URL',{
  params: string,     //do not include this property if you do not use it
  body: object,       //do not include this property if you do not use it
  cType: string,      //do not include this property if you do not use it
  wToken: string,     //do not include this property if you do not use it
  csrfToken: string,  //do not include this property if you do not use it
});

console.log(data);
```