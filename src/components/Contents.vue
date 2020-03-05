<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div v-if="loading" class="loadingImg">
      <a-spin size="large" />
    </div>
    <div v-else>
      <div class="contents">
        <div>
          <div
            v-for="(content, index) in contents"
            v-bind:key="index"
            @click="moveDetailPage('/detail', content.id)"
          >
            <AdsList :postIndex="index" />
            <div class="contentList">
              <div class="content-header">
                <div class="content-header-name">
                  {{
                  content.category_id === 1
                  ? "apple"
                  : content.category_id === 2
                  ? "banana"
                  : "coconut"
                  }}
                </div>
                <div class="content-header-id">카테고리 ID : {{ content.category_id }}</div>
              </div>
              <div class="content-body">
                <div class="informationSection">
                  <div class="userId">{{ content.user_id }}</div>
                  <span>|</span>
                  <div class="createdAt">{{ content.created_at }}</div>
                </div>
                <div class="body-title">{{ content.title }}</div>
                <div class="body-contents">{{ content.contents }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../service/DataService";
import AdsList from "../components/AdsList";

export default {
  components: {
    AdsList
  },
  data() {
    return {
      loading: true,
      order: "asc",
      contents: [],
      filterContents: [],
      categoryList: [],
      listId: 1,
      pageNum: 1,
      busy: false,
      limit: 10,
      categoryIdArr: [1, 2, 3]
    };
  },
  methods: {
    async getContents() {
      this.loading = true;
      this.busy = true;
      let paramsData = {
        page: this.pageNum,
        category: this.categoryIdArr,
        ord: this.order,
        limit: this.limit
      };
      let result = await DataService.getContents(paramsData);
      this.contents = [...this.contents, ...result];
      setTimeout(() => {
        this.loading = false;
        this.busy = false;
      }, 500);
    },
    async loadMore() {
      this.busy = true;
      let paramsData = {
        page: this.pageNum,
        category: this.categoryIdArr,
        ord: this.order,
        limit: this.limit
      };
      let result = await DataService.getContents(paramsData);
      if (result.length !== 0) {
        this.contents = [...this.contents, ...result];
        this.pageNum++;
        setTimeout(() => {
          this.busy = false;
        }, 500);
      }
    },
    moveDetailPage(targetName, contentId) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push(targetName + "/" + contentId);
      }, 500);
    }
  },
  created() {
    setTimeout(() => (this.loading = false), 500);
    this.$EventBus.$on("click-ascend", () => {
      this.order = "asc";
      this.contents = [];
      this.pageNum = 1;
      this.getContents();
    });
    this.$EventBus.$on("click-descend", () => {
      this.order = "desc";
      this.contents = [];
      this.pageNum = 1;
      this.getContents();
    });
    this.$EventBus.$on("changeCategory", select => {
      this.categoryIdArr = select;
      this.contents = [];
      this.pageNum = 1;
      this.getContents();
    });
    this.$EventBus.$on("change-listcount", value => {
      this.contents = [];
      this.pageNum = 1;
      this.limit = value;
      this.getContents();
    });
  }
};
</script>

<style>
.loadingImg {
  position: absolute;
  top: 50%;
  left: 55%;
}
.content-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e1e4e7;
  padding-bottom: 11px;
}
.contentList {
  width: 100%;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  border: solid 1px #e1e4e7;
  background-color: #ffffff;
  padding: 20px 30px;
  margin-bottom: 30px;
  cursor: pointer;
}

.informationSection {
  display: flex;
  margin-top: 15px;
}
.userId {
  color: #00c854;
  margin-right: 10px;
}
.createdAt {
  margin-left: 10px;
}

.body-title {
  margin-top: 17px;
  font-size: 18px;
  font-family: SpoqaHanSans;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  color: #282c30;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.body-contents {
  margin-top: 6px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@media screen and (max-width: 480px) {
  .loadingImg {
    position: absolute;
    top: 50%;
    left: 45%;
  }
  .content-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e1e4e7;
    padding-bottom: 11px;
  }
  .contentList {
    width: 100%;
    border-radius: 0px;
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    border: solid 1px #e1e4e7;
    background-color: #ffffff;
    padding: 20px 15px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .informationSection {
    display: flex;
    margin-top: 15px;
  }
  .informationSection span {
    display: none;
  }
  .userId {
    color: #00c854;
    margin-right: 10px;
  }
  .createdAt {
    display: none;
    margin-left: 10px;
  }

  .body-title {
    margin-top: 17px;
    font-size: 18px;
    font-family: SpoqaHanSans;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    color: #282c30;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .body-contents {
    margin-top: 6px;
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #495057;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
