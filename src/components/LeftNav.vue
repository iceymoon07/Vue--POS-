<template>
  <div class="left-nav">
    <ul>
      <li>
        <i class="iconfont icon-goumai"></i>
        <div>收银</div>
      </li>
      <li>
        <i class="iconfont icon-dianpu"></i>
        <div>店铺</div>
      </li>
      <li>
        <i class="iconfont icon-shipin"></i>
        <div>商品</div>
      </li>
      <li>
        <i class="iconfont icon-huiyuanqia"></i>
        <div>会员</div>
      </li>
      <li>
        <i class="iconfont icon-paixing"></i>
        <div>统计</div>
      </li>
      <li>
        <i class="iconfont icon-gongnengjianyi"></i>
        <div>设置</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.left-nav {
  color: white;
  background-color: #220052;
  height: 100%;
  width: 8%;
  font-size: 14px;
}

.left-nav ul {
}

.left-nav li {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid white;
  padding: 10px;
  cursor: pointer;
}

.iconfont {
  font-size: 32px;
}
</style>