<template>
  <div class="content">
    <div class="line">
      <div id="bar"></div>
      <div id="line"></div>
    </div>
    <div class="line">
      <div id="pie"></div>
      <div id="radar"></div>
    </div>
    <div class="line">
      <div id="funnel"></div>
      <div id="gauge"></div>
    </div>
  </div>

</template>

<script>
  import {optionLine, optionBar, optionPie, optionRadar, optionFunnel, optionGauge} from "@/config/echart";

  export default {
    name: "",
    data() {
      return {}
    },
    mounted() {
      this.getsss();
    },
    methods: {
      getsss() {
        const echarts = require('echarts');
        // 基于准备好的dom，初始化echarts实例
        const bar = echarts.init(document.getElementById('bar'));
        const line = echarts.init(document.getElementById('line'));
        const pie = echarts.init(document.getElementById('pie'));
        const radar = echarts.init(document.getElementById('radar'));
        const funnel = echarts.init(document.getElementById('funnel'));
        const gauge = echarts.init(document.getElementById('gauge'));
        // 绘制图表
        bar.setOption(optionBar);
        line.setOption(optionLine);
        pie.setOption(optionPie);
        radar.setOption(optionRadar);
        funnel.setOption(optionFunnel);
        gauge.setOption(optionGauge, true);

      }
    }
  }
</script>

<style scoped>

  .content {
    margin: 50px;
  }

  .line {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .line div {
    width: 50%;
    height: 300px;
    border: 1px dashed #0CB8B9;
    padding: 20px;
  }
</style>
