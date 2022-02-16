<template>
  <div class="container position-relative drone-container">
    <div id="banner">
      <div id="drone-box" ref="drone">
        <img src="https://i.postimg.cc/XJHDYkJZ/drone.png" class="drone-pic">
        <img src="https://i.postimg.cc/PJCVpvpS/drone-left.png" class="left-pic">
        <img src="https://i.postimg.cc/j2Bgzqyt/drone-right.png" class="right-pic">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DronePage',
  mounted() {
    document.addEventListener('keydown',  this.droneHandler, true);
  },
  methods: {
    droneHandler(e) {
      const keyCodes = {
        top: 38,
        right: 39,
        bottom: 40,
        left: 37
      }

      const droneDIV = this.$refs.drone
      const topPxValue = Number(droneDIV.style.top.replace('px',''))
      const leftPxValue = Number(droneDIV.style.left.replace('px',''))


      if (e.keyCode === keyCodes.bottom) {
        droneDIV.style.top = topPxValue + 5 + 'px'
      }
      if (e.keyCode === keyCodes.top) {
        droneDIV.style.top = topPxValue - 5 + 'px'
      }

      if (e.keyCode === keyCodes.right) {
        droneDIV.style.left = leftPxValue + 5 + 'px'
      }
      if (e.keyCode === keyCodes.left) {
        droneDIV.style.left = leftPxValue - 5 + 'px'
      }
    }
  },
  destroyed() {
    document.removeEventListener('keydown', this.droneHandler, true)
  }
}
</script>

<style lang="scss" scoped>
.drone-container {
  height: 70vh;
}

// drone solution

#banner{
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://i.postimg.cc/2jtKpGMM/pic.jpg);
  background-position: center;
  background-size: cover;

}
#drone-box{
  margin: 0;
  //transition: 2s;
  width: 200px;
  position: relative;
  //transition: 2s;

}
.drone-pic{
  width: 100%;
}
.left-pic{
  width: 80px;
  top:0;
  left: -11px;
  position: absolute;
  animation: rotation .2s linear infinite;
}
.right-pic{
  width: 80px;
  top:0;
  right: -11px;
  position: absolute;
  animation: rotation .2s linear infinite;
}
@keyframes rotation{
  100%{
    transform:rotateY(360deg);
  }
}
</style>
