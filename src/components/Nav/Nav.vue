<template>
  <nav>
    <router-link to="/home">
      <img src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png" />
    </router-link>
    <div class="hamburger" @click.prevent="activateMenu">
      <span class="material-icons">
        menu
      </span>
    </div>
    <ul>
      <li v-for="item in menuOptions" :key="item">

        <router-link :to="'/' + item.toLowerCase()">
          <span v-if="item === 'Home'" class="material-icons">
            home
          </span>
          {{item}}
        </router-link>
      </li>
    </ul>
    <div
        @click.prevent="closeMenu"
        class="overlay"
        :style="{ display: menuOpen ? 'block' : 'none'}">

    </div>
    <ul class="side-menu" :class="menuOpen ? 'active' : '' ">
      <li v-for="item in menuOptions" :key="item + 'side'">
        <router-link :to="'/' + item.toLowerCase()">
          {{item}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      menuOpen: false,
      menuOptions: [
          'Home',
          'Collections',
          'About',
          'Contact'
      ]
    }
  },
  methods: {
    activateMenu() {
      this.menuOpen = true;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  },
  watch: {
    $route() {
      this.menuOpen = false;
    }
  }
}
</script>

<style scoped>
nav {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
  align-items: center;
}
nav img {
  height: 3rem;
  background-color: white;
  margin-left: 0.125rem;
}
nav ul {
  display: flex;
  gap: 0.5rem;
  margin: 0;
  align-items: center;
  justify-content: space-between;
}

nav .hamburger {
  display: none;
  padding: 0.6rem 1rem;
  cursor: pointer;
  transition: all 1s;
  background-color: black;
  border-radius: 0.125rem;
  margin-right: 0.125rem;
}


nav ul li a {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  color: white;
  padding: 0.6rem 1rem;
  background-color: black;
  transition: background-color 0.25s;
  border-radius: 0.125rem;
}
nav ul li a span {
  color: white;
  padding-right: 0.125rem;
}
nav ul li a:hover {
  background-color: grey;
}

.side-menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  background-color: black;
  padding: 1rem 0.5rem;
  position: fixed;
  right: -150px;
  width: 150px;
  top: 3rem;
  z-index: 10;
  transition: right 0.2s;
}
.active {
  right: 0;
}
.side-menu li {
  width: 100%;
}
.side-menu li a {
  width: 100%;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background: rgba(20,20,55,0.3);
  filter: blur(0.4rem);
}
@media(max-width: 516px) {
  nav .hamburger {
    display: flex;
  }
  nav ul {
    display: none;
  }
  nav .hamburger:hover {
    background-color: grey;
    margin-right: 0.375rem;
  }
}

</style>