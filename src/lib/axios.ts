import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://petstore-demo-endpoint.execute-api.com/petstore/pets',
})
