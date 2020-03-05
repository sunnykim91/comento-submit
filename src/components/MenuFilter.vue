<template>
  <div class="filter">
    <button class="modalButton" @click="showModal">
      <div class="modalButtonContent">필터</div>
    </button>
    <a-modal v-model="visible" :footer="null">
      <div class="filterTitle">필터</div>
      <div class="filterCheckbox">
        <a-checkbox-group :options="plainOptions" v-model="checkedList" />
      </div>
      <div class="btnSection">
        <button class="filterSaveBtn" @click="filterSave">저장하기</button>
      </div>
    </a-modal>
  </div>
</template>

<script>
import DataService from "../service/DataService";

export default {
  data() {
    return {
      visible: false,
      category: [],
      plainOptions: [],
      checkedList: []
    };
  },
  methods: {
    filterSave() {
      this.visible = false;
      let select = [];
      this.category.map(item =>
        this.checkedList.map(cl => {
          item.name === cl ? select.push(item.id) : null;
        })
      );
      this.$EventBus.$emit("changeCategory", select);
    },
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.visible = false;
    },
    async getCategory() {
      let category = await DataService.getCategory();
      this.category = [...this.category, ...category];
      this.category.filter(cate => this.plainOptions.push(cate.name));
      this.category.filter(cate => this.checkedList.push(cate.name));
    }
  },
  created() {
    this.getCategory();
  }
};
</script>

<style>
.modalButton {
  width: 48px;
  height: 24px;
  border-radius: 3px;
  border: solid 1px #e1e4e7;
  background-color: #ffffff;
  cursor: pointer;
}
.modalButton1tent {
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: normal;
  color: #adb5bd;
}
.filterTitle {
  width: 80px;
  height: 33px;
  font-family: SpoqaHanSans;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  text-align: left;
  color: #212529;
}
.filterCheckbox {
  margin-top: 13px;
}

.filterCheckbox label {
  margin-left: 5px;
}
.categoryCheckbox {
  cursor: pointer;
}
.btnSection {
  text-align: right;
}
.filterSaveBtn {
  width: 99px;
  height: 40px;
  background: #00c854;
  border-radius: 3px;
  border: none;
  color: white;
  cursor: pointer;
}
.filterCheckbox label {
  display: block;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 5px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
}
@media screen and (max-width: 480px) {
  .btnSection {
    text-align: center;
  }
  .filterSaveBtn {
    width: 100%;
    margin-top: 20px;
    height: 40px;
    background: #00c854;
    border-radius: 3px;
    border: none;
    color: white;
    cursor: pointer;
  }
}
</style>
