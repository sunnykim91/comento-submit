<template>
  <div class="DetailPage">
    <Header :isMain="false" />
    <div class="detailContentSection">
      <div>
        <div class="detailInfo">
          <div class="detailTitle">{{ detailInfo.title }}</div>
          <div class="detailContents">{{ detailInfo.contents }}</div>
          <div class="detailCreatedAt">{{ detailInfo.created_at }}</div>
        </div>
      </div>
      <div class="detailReply">
        <div>
          <div class="replyHeader">
            답변
            <span class="replyCount">{{ reply.length }}</span>
          </div>
          <div v-if="hasReply">
            <div v-for="rp in reply" v-bind:key="rp.id" class="reply">
              <div>
                <div class="replyUserName">이름 : {{ rp.user.name }}</div>
                <div class="replyEmail">제목없음</div>
                <div class="replyContents">{{ rp.contents }}</div>
                <div class="replyCreatedAt">{{ rp.user.created_at }} | 이메일 : {{ rp.user.email }}</div>
              </div>
            </div>
          </div>
          <div v-else>리뷰가 없습니다.</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataService from "../service/DataService";
import Header from "../components/Header";

export default {
  name: "DetailPage",
  components: {
    Header
  },
  data: function() {
    return {
      listId: 0,
      emailAddress: "",
      detailInfo: [],
      reply: []
    };
  },
  methods: {
    async getContents() {
      let result = await DataService.getDetailContent(this.listId);
      this.detailInfo = result.info;
      this.reply = result.info.reply;
    }
  },
  computed: {
    param: function() {
      return this.$route.params;
    },
    hasReply: function() {
      return this.reply.length > 0;
    }
  },
  created() {
    this.listId = this.$route.params.id;
    this.getContents();
  }
};
</script>
<style>
.detailContentSection {
  padding: 0 390px;
  margin-top: 50px;
}
.detailInfo {
  border-radius: 5px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  border: solid 1px #00c854;
  background-color: #ffffff;
  padding: 20px 30px;
}
.detailTitle {
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #282c30;
}
.detailContents {
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
  margin-top: 6px;
}
.detailCreatedAt {
  height: 19px;
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: normal;
  text-align: left;
  color: #adb5bd;
  margin-top: 15px;
}

.detailReply {
  margin-top: 30px;
}

.replyHeader {
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
}

.replyCount {
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #00c854;
}
.reply {
  margin-top: 10px;
  margin-bottom: 30px;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  border: solid 1px #e1e4e7;
  background-color: #ffffff;
  padding: 20px 30px;
}
.replyUserName {
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #7e848a;
  padding-bottom: 10px;
  border-bottom: 1px solid #e1e4e7;
}
.replyEmail {
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #282c30;
  margin-top: 16px;
}
.replyContents {
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
  margin-top: 6px;
}
.replyCreatedAt {
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: normal;
  text-align: left;
  color: #adb5bd;
  margin-top: 15px;
}

@media screen and (max-width: 480px) {
  .detailContentSection {
    padding: 0 15px;
    margin-top: 20px;
  }
  .detailInfo {
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    border-top: solid 1px #00c854;
    border-bottom: solid 1px #00c854;
    border-left: none;
    border-right: none;
    border-radius: 0px;
    background-color: #ffffff;
    padding: 20px 0px;
  }
  .detailTitle {
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
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .detailContents {
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #495057;
    margin-top: 6px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .detailCreatedAt {
    height: 19px;
    font-family: SpoqaHanSans;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: left;
    color: #adb5bd;
    margin-top: 15px;
  }

  .detailReply {
    margin-top: 30px;
  }

  .replyHeader {
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #495057;
  }

  .replyCount {
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #00c854;
  }
  .reply {
    margin-top: 10px;
    margin-bottom: 30px;
    border-radius: 0px;
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    border: solid 1px #e1e4e7;
    border-left: none;
    border-right: none;
    background-color: #ffffff;
    padding: 20px 0px;
  }
  .replyUserName {
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #7e848a;
    padding-bottom: 10px;
    border-bottom: 1px solid #e1e4e7;
  }
  .replyEmail {
    font-family: SpoqaHanSans;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #282c30;
    margin-top: 16px;
  }
  .replyContents {
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #495057;
    margin-top: 6px;
  }
  .replyCreatedAt {
    font-family: SpoqaHanSans;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: left;
    color: #adb5bd;
    margin-top: 15px;
  }
}
</style>
