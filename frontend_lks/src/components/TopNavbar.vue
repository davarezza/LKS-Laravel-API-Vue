<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/home" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link active">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user" class="nav-link active">User</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mx-5">
        <li class="nav-item">
          <a class="nav-link" v-if="isLogin">{{ name }}</a>
          <router-link v-else to="/login" class="nav-link active">Login</router-link>
        </li>
        <li class="nav-item" v-if="isLogin">
          <a @click="logout" class="nav-link active" style="cursor: pointer">Logout</a>
        </li>
      </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import useSocieties from '../composable/societies'

const { isLogin, name, logout } = useSocieties()
</script>