<template>
  <div class="pos">
    <!--使用 element 的 layout 布局-->
    <el-row>
      <!--订单区域-->
      <el-col :span="7" class="pos-order" id="pos-order">
        <el-tabs stretch>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" height="250">
              <el-table-column prop="goodsName" label="名称" align="center"></el-table-column>
              <el-table-column label="数量" align="center">
                <template slot-scope="scope">
                  <button class="jiajian-button amount" @click="reduceGoodsAmount(scope.$index)">
                    <i class="iconfont icon-jian"></i>
                  </button>
                  <span class="amount">{{scope.row.count}}</span>
                  <button class="jiajian-button amount" @click="addToOrderList(scope.row)">
                    <i class="iconfont icon-jia"></i>
                  </button>
                </template>
              </el-table-column>
              <el-table-column label="金额" align="center">
                <template slot-scope="scope">
                  <span>{{scope.row.count * scope.row.price}}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center" fixed="right">
                <template slot-scope="scope">
                  <i class="iconfont icon-shanchu" @click="deleteSingleGoods(scope.$index)"></i>
                </template>
              </el-table-column>
            </el-table>
            <div class="total">
              <span>数量：{{totalCount}}</span>
              <span>金额：{{totalPrice}}</span>
            </div>
            <div class="operation-buttons">
              <el-button type="warning" class="button">挂单</el-button>
              <el-button type="danger" class="button" @click="deleteAllGoods()">删除</el-button>
              <el-button type="success" class="button">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">2</el-tab-pane>
          <el-tab-pane label="外卖">3</el-tab-pane>
        </el-tabs>
      </el-col>
      <!--商品区域-->
      <el-col :span="17" class="pos-goods">
        <!--常用商品区域-->
        <div class="common-goods">
          <div class="title">常用商品</div>
          <!--常用商品列表-->
          <div class="common-goods-list">
            <ul>
              <li
                v-for="(item, index) in commonGoods.oftenGoods"
                :key="index"
                @click="addToOrderList(item)"
              >
                <span>{{item.goodsName}}</span>
                <span class="price">￥{{item.price}}</span>
              </li>
            </ul>
          </div>
        </div>
        <!--商品分类展示区域-->
        <div class="category-goods">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <ul class="category-goods-list">
                <li
                  v-for="(item, index) in categoryGoods.data[0]"
                  :key="index"
                  @click="addToOrderList(item)"
                >
                  <div class="img">
                    <img :src="item.goodsImg" width="100%" />
                  </div>
                  <div>
                    <div class="name">{{item.goodsName}}</div>
                    <div class="price">￥{{item.price}}元</div>
                  </div>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class="category-goods-list">
                <li
                  v-for="(item, index) in categoryGoods.data[1]"
                  :key="index"
                  @click="addToOrderList(item)"
                >
                  <div class="img">
                    <img :src="item.goodsImg" width="100%" />
                  </div>
                  <div>
                    <div class="name">{{item.goodsName}}</div>
                    <div class="price">￥{{item.price}}元</div>
                  </div>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class="category-goods-list">
                <li
                  v-for="(item, index) in categoryGoods.data[2]"
                  :key="index"
                  @click="addToOrderList(item)"
                >
                  <div class="img">
                    <img :src="item.goodsImg" width="100%" />
                  </div>
                  <div>
                    <div class="name">{{item.goodsName}}</div>
                    <div class="price">￥{{item.price}}元</div>
                  </div>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class="category-goods-list">
                <li
                  v-for="(item, index) in categoryGoods.data[3]"
                  :key="index"
                  @click="addToOrderList(item)"
                >
                  <div class="img">
                    <img :src="item.goodsImg" width="100%" />
                  </div>
                  <div>
                    <div class="name">{{item.goodsName}}</div>
                    <div class="price">￥{{item.price}}元</div>
                  </div>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getCommonGoods, getCategoryGoods } from "../api/goods";

export default {
  name: "Pos",
  components: {},
  data() {
    return {
      tableData: [],
      commonGoods: {},
      categoryGoods: {}
    };
  },
  methods: {
    addToOrderList(goods) {
      for (let i = 0; i < this.tableData.length; i++) {
        if (goods.goodsId === this.tableData[i].goodsId) {
          this.tableData[i].count++;
          return;
        }
      }
      let newGoods = {
        goodsId: goods.goodsId,
        goodsName: goods.goodsName,
        price: goods.price,
        count: 1
      };
      this.tableData.push(newGoods);
    },
    deleteSingleGoods(index) {
      this.tableData.splice(index, 1);
    },
    deleteAllGoods() {
      this.tableData = [];
    },
    reduceGoodsAmount(index) {
      if (this.tableData[index].count > 1) {
        this.tableData[index].count--;
      } else {
        this.deleteSingleGoods(index);
      }
    }
  },
  computed: {
    totalCount() {
      return this.tableData.reduce((result, goods) => {
        return result + goods.count;
      }, 0);
    },
    totalPrice() {
      return this.tableData.reduce((result, goods) => {
        return result + goods.count * goods.price;
      }, 0);
    }
  },
  created() {
    getCommonGoods().then(response => {
      this.commonGoods = response.data;
    });
    getCategoryGoods().then(response => {
      this.categoryGoods = response.data;
    });
  },
  mounted() {
    // 因为使用了 element 样式，直接在 css 中设置订单区域的 height 为 100%，是起不到想要的效果的
    // 在组件挂载完成时，通过获取 body 的 clientHeight，给订单区域设置 height
    let fullHeight = document.body.clientHeight;
    setTimeout(() => {
      document.getElementById("pos-order").style.height = fullHeight + "px";
    }, 0);
  }
};
</script>

<style scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}

.pos-order .jiajian-button {
  border: none;
  background-color: #409eff;
  color: #fff;
  text-align: center;
  width: 18px;
  height: 18px;
  border-radius: 9px;
}

.pos-order .amount {
  margin-right: 2px;
}

.iconfont {
  font-size: 12px;
}

.icon-shanchu {
  color: red;
  cursor: pointer;
}

.operation-buttons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.operation-buttons .button {
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
  cursor: pointer;
}

.common-goods-list .price {
  color: #58b7ff;
}

.category-goods {
  padding-left: 10px;
}

.category-goods-list {
  display: flex;
  flex-wrap: wrap;
}

.category-goods-list li {
  list-style: none;
  width: 23%;
  height: auto;
  border: 1px solid #e5e9f2;
  background-color: #fff;
  padding: 2px;
  margin: 2px;
  display: flex;
  cursor: pointer;
}

.category-goods-list .img {
  width: 40%;
}

.category-goods-list .name {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}

.category-goods-list .price {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
