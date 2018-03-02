function clearNoNum(value) {
  //清除"数字"和"."以外的字符
  value = value.replace(/[^\d.]/g, "");

  //验证第一个字符是数字而不是
  value = value.replace(/^\./g, "");

  //只保留第一个. 清除多余的
  value = value.replace(/\.{2,}/g, ".");
  value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");

  //只能输入两个小数
  value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
}