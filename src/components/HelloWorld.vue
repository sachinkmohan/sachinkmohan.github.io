<template>
  <div class="hello">
    <h1>Welcome to Sachin's Website</h1>
    <img src="../../images/cover.jpg" alt="Flowers in Chania" width="581" height="387">



  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

* {
  box-sizing: border-box;
}

/* Container for skill bars*/
.container {
  width: 100%;
  background-color: #ddd;
}

.skills {
  text-align: right;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
}

.ros {
  width: 10%;
  background-color: green;
}
.vue {
  width: 10%;
  background-color: blue;
}
</style>
