<template>
  <div class="main">
    <Header :isMain="true" />
    <div class="main-content">
      <div class="loginSection">
        <button class="loginBtn">로그인</button>
        <div class="removeAds">
          <input type="checkbox" @change="removeAds" /> 광고제거
        </div>
        <div class="listCount">
          <div>한페이지 리스트 개수</div>
          <a-radio-group @change="changeListCount" v-model="value">
            <a-radio :style="radioStyle" :value="10">10개</a-radio>
            <a-radio :style="radioStyle" :value="20">20개</a-radio>
            <a-radio :style="radioStyle" :value="30">30개</a-radio>
          </a-radio-group>
        </div>
      </div>
      <div class="main-content-top">
        <div class="contentsSection">
          <div class="alignFilter">
            <ul>
              <li
                v-bind:class="{ active: isAlignActive }"
                v-on:click="$EventBus.$emit('click-ascend')"
                @click="ascending"
              >오름차순</li>
              <li
                v-bind:class="{ active: !isAlignActive }"
                v-on:click="$EventBus.$emit('click-descend')"
                @click="descending"
              >내림차순</li>
            </ul>
          </div>
          <div class="MenuFilter">
            <MenuFilter />
          </div>
        </div>
        <div class="main-content-bottom">
          <Contents />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contents from "../components/Contents";
import MenuFilter from "../components/MenuFilter";
import Header from "../components/Header";

export default {
  name: "Main",
  components: { Contents, MenuFilter, Header },
  data() {
    return {
      isAlignActive: true,
      value: 10,
      radioStyle: {
        height: "30px",
        lineHeight: "30px"
      }
    };
  },
  methods: {
    ascending() {
      this.isAlignActive = !this.isAlignActive;
    },
    descending() {
      this.isAlignActive = !this.isAlignActive;
    },
    removeAds() {
      this.$EventBus.$emit("remove-ads");
    },
    changeListCount(e) {
      this.$EventBus.$emit("change-listcount", e.target.value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main-content {
  margin-top: 50px;
  padding: 0 390px;
  display: flex;
  width: 100%;
}
.loginSection {
  width: 235px;
}
.loginBtn {
  background: #00c854;
  border-radius: 5px;
  width: 235px;
  height: 60px;
  border: none;
  font-family: SpoqaHanSans;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
.removeAds {
  margin-top: 20px;
}
.listCount {
  margin-top: 20px;
}
.contentsSection {
  margin-left: 40px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.main-content-top {
  width: 100%;
}
.main-content-bottom {
  margin-left: 40px;
}
.alignFilter > ul {
  display: flex;
}
.alignFilter > ul > li {
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
  cursor: pointer;
}

.alignFilter > ul > li:nth-last-child(1) {
  margin-left: 10px;
}

.alignFilter > ul > li.active::before {
  content: "•";
  font-size: 20px;
  color: #00c854;
}

.alignFilter li::before {
  content: "•";
  font-size: 20px;
  color: #adb5bd;
}

@media screen and (max-width: 480px) {
  .main-content {
    margin-top: 13px;
    padding: 0px 20px;
  }
  .loginSection {
    display: none;
  }

  .contentsSection {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-left: 0px;
  }

  .main-content-bottom {
    margin-left: 0px;
  }

  .alignFilter > ul {
    display: flex;
  }
  .alignFilter > ul > li {
    font-family: SpoqaHanSans;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #495057;
    cursor: pointer;
  }

  .alignFilter > ul > li:nth-last-child(1) {
    margin-left: 10px;
  }

  .alignFilter > ul > li.active::before {
    content: "•";
    font-size: 20px;
    color: #00c854;
  }

  .alignFilter li::before {
    content: "•";
    font-size: 20px;
    color: #adb5bd;
  }
}
</style>
