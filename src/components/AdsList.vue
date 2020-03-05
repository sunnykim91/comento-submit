<template>
  <div v-if="adsToggle">
    <div v-if="showAdsList">
      <div class="adsSection">
        <div class="ads-header">sponsored</div>
        <div class="ads-body">
          <div class="adsImageSection">
            <img :src="img" />
          </div>
          <div class="adsContentSection">
            <div class="adsTitle">{{ title }}</div>
            <div class="adsContents">{{ contents }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../service/DataService";

export default {
  data() {
    return {
      ads: [],
      adLimit: 1,
      showAdsList: false,
      img: "",
      title: "",
      contents: "",
      adsToggle: true
    };
  },
  props: {
    postIndex: Number
  },
  methods: {
    async getAds() {
      let paramsData = {
        page: this.postIndex / 4,
        limit: this.adLimit
      };
      this.ads = await DataService.getAds(paramsData);
      this.title = this.ads[0].title;
      this.contents = this.ads[0].contents;
      this.img = `https://cdn.comento.kr/assignment/${this.ads[0].img}`;
    }
  },
  created() {
    if (this.adsToggle) {
      this.$EventBus.$on("remove-ads", () => {
        this.adsToggle = !this.adsToggle;
      });
      if (this.postIndex % 4 === 0 && this.postIndex !== 0) {
        this.showAdsList = true;
        this.getAds();
      } else {
        this.showAdsList = false;
      }
    }
  }
};
</script>

<style>
.adsSection {
  padding: 20px 30px;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  border: solid 1px #e1e4e7;
  background-color: #ffffff;
  margin-bottom: 30px;
}
.ads-header {
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: normal;
  text-align: left;
  color: #adb5bd;
}
.ads-body {
  margin-top: 16.5px;
  display: flex;
}
.adsImageSection {
  width: 310px;
  margin-right: 29.5px;
}
img {
  max-width: 100%;
  height: auto;
}

.adsTitle {
  width: 463px;
  height: 55px;
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #282c30;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.adsContents {
  width: 465px;
  height: 99px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
  margin-top: 11px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
@media screen and (max-width: 480px) {
  .adsSection {
    padding: 20px 15px;
    border-radius: 0px;
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    border: solid 1px #e1e4e7;
    background-color: #ffffff;
    margin-bottom: 30px;
  }
  .ads-header {
    font-family: SpoqaHanSans;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: left;
    color: #adb5bd;
  }
  .ads-body {
    margin-top: 16.5px;
    display: block;
  }
  .adsImageSection {
    width: 100%;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }

  .adsTitle {
    display: block;
    width: 100%;

    font-family: SpoqaHanSans;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #282c30;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .adsContents {
    display: block;
    width: 100%;
    height: auto;
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #495057;
    margin-top: 11px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
</style>
