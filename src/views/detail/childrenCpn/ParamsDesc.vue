<template>
  <div class="params-info">
    <div class="info">
      <table>
        <caption>{{ paramsInfo.infoKey }}</caption>
        <tbody>
          <tr v-for="item in paramsInfo.info">
            <td>{{ item.key }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="rule">
      <table v-for="itemx in paramsInfo.rule">
        <caption>{{ paramsInfo.ruleKey }}</caption>
        <tbody>
          <tr v-for="itemy in itemx">
            <td v-for="itemz in itemy">{{ itemz }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParamsDesc',
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.params-info {
  padding: 3px;
  border-top: 6px solid #eee;
}

table {
  width: 100%;
  line-height: 26px;
  font-size: 14px;
  border-collapse: collapse;
}

table tr {
  border-bottom: 1px solid #eee;
}

table tr td:nth-child(1) {
  width: 26%;
}

.info table tr td:nth-child(2) {
  color: var(--color-high-text)
}

.rule {
  margin-top: 12px;
}
</style>