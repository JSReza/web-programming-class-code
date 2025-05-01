<script setup lang="ts">
import { type DataListEnvelope } from '../../../server/models/dataenvelopes';
var bestClass = 'Web Programming'
import { addToCart } from '@/models/cart';
 import { getAll, type Product } from '@/models/products';
 import { ref } from 'vue';
const products = ref({} as DataListEnvelope<Product>)
 
 getAll()
     .then((response) => {
         products.value = response
     })
 
 function doAddToCart(product: Product) {
     addToCart(product)
 }
</script>

<template>
  <main>
    <h1 class="title">Anonymous Feedback Form</h1>
    <h2 class="subtitle">Enter your feedback here...</h2>
    <form action="#" class="form" method="get">
      <textarea
                class="textarea"
                placeholder="Tell me about your favorite class">
      </textarea>
      <button class="button is-success" type="submit">Submit</button>
    </form>
  </main>
</template>