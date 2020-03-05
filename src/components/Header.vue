<template>
  <div class="header">
    <div v-if="isMain" class="headerSection">
      <div class="header-content">[2020.03.07] 김선휘</div>
    </div>
    <div v-else class="backPage">
      <a-icon type="left" @click="moveHomePage()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    isMain: Boolean
  },
  methods: {
    moveHomePage() {
      this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header {
  display: flex;
  align-items: center;
  height: 70px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}
.headerSection {
  display: flex;
  align-items: center;
}
.backPage {
  margin-left: 50px;
}
.header-content {
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  margin-left: 390px;
  color: #212529;
}
.logoImg {
  cursor: pointer;
  width: 70px;
  height: 70px;
  margin-left: 30px;
}
@media screen and (max-width: 480px) {
  .header {
    width: 100%;
    padding: 11px 15px;
    border-bottom: 1px solid #e1e4e7;
  }
  .backPage {
    margin-left: 0px;
  }
  .header-content {
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #212529;
    margin-left: 10px;
  }
  .logoImg {
    display: none;
  }
}
</style>
