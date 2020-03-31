<template>
  <div class="pos">
    <!--使用 element 的 layout 布局-->
    <el-row>
      <!--订单区域-->
      <el-col :span="7" class="pos-order" id="pos-order">
        <el-tabs stretch>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" height="250">
              <el-table-column prop="name" label="名称" align="center"></el-table-column>
              <el-table-column prop="count" label="数量" align="center"></el-table-column>
              <el-table-column prop="price" label="金额" align="center"></el-table-column>
              <el-table-column label="操作" align="center" fixed="right">
                <template>
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="operationButtons">
              <el-button type="warning" class="button">挂单</el-button>
              <el-button type="danger" class="button">删除</el-button>
              <el-button type="success" class="button">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">2</el-tab-pane>
          <el-tab-pane label="外卖">3</el-tab-pane>
        </el-tabs>
      </el-col>
      <!--商品区域-->
      <el-col :span="17" class="pos-goods">
        <!--常用商品-->
        <div class="common-goods">
          <div class="title">常用商品</div>
          <!--常用商品列表-->
          <div class="common-goods-list">
            <ul>
              <li v-for="(item, index) in commonGoods" :key="index">
                <span>{{item.name}}</span>
                <span class="price">{{item.price}}</span>
              </li>
            </ul>
          </div>
        </div>
        <!--商品分类展示-->
        <div class="goods-show">
          <el-tabs>
            <el-tab-pane label="汉堡">1</el-tab-pane>
            <el-tab-pane label="小食">2</el-tab-pane>
            <el-tab-pane label="饮料">3</el-tab-pane>
            <el-tab-pane label="套餐">4</el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Pos",
  components: {},
  data() {
    return {
      tableData: [
        { name: "cola", count: 2, price: 3 },
        { name: "cola", count: 2, price: 3 },
        { name: "cola", count: 2, price: 3 },
        { name: "cola", count: 2, price: 3 },
        { name: "cola", count: 2, price: 3 },
        { name: "cola", count: 2, price: 3 }
      ],
      commonGoods: [
        { id: 1, name: "geek", price: "￥15" },
        { id: 2, name: "geek", price: "￥15" },
        { id: 3, name: "geek", price: "￥15" },
        { id: 3, name: "geek", price: "￥15" },
        { id: 3, name: "geek", price: "￥15" },
        { id: 3, name: "geek", price: "￥15" },
        { id: 3, name: "geek", price: "￥15" },
        { id: 3, name: "geek", price: "￥15" },
        { id: 3, name: "geek", price: "￥15" },
        { id: 3, name: "geek", price: "￥15" },
        { id: 3, name: "geek", price: "￥15" }
      ]
    };
  },
  mounted() {
    // 因为使用了 element 样式，直接在 css 中设置订单区域的 height 为 100%，是起不到想要的效果的
    // 在组件挂载完成时，通过获取 body 的 clientHeight，给订单区域设置 height
    let orderHeight = document.body.clientHeight;
    document.getElementById("pos-order").style.height = orderHeight + "px";
  }
};
</script>

<style scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}

.operationButtons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.operationButtons .button {
  margin-right: 10px;
}

.pos-goods {
  background-color: #f9fafc;
}

.common-goods .title {
  height: 40px;
  border-bottom: 1px solid #d3dce6;
  padding: 10px;
  background-color: #fff;
}

.common-goods-list ul {
  display: flex;
  flex-wrap: wrap;
}

.common-goods-list ul li {
  list-style: none;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
}

.common-goods-list .price {
  color: #58b7ff;
}
</style>
