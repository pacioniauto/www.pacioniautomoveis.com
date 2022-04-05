<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <title>{{ title }}</title>
    <g :fill="_secondaryfill">
      <path d="M19,3V1a1,1,0,0,0-2,0V3Z" />
      <path d="M7,3V1A1,1,0,0,0,5,1V3Z" />
      <path
        d="M21,23H3a3,3,0,0,1-3-3V7A3,3,0,0,1,3,4H21a3,3,0,0,1,3,3V20A3,3,0,0,1,21,23ZM22,9H2V20a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1Z"
        :fill="fill"
      />
      <rect x="4" y="11" width="4" height="3" />
      <rect x="10" y="11" width="4" height="3" />
      <rect x="4" y="16" width="4" height="3" />
      <rect x="10" y="16" width="4" height="3" />
      <rect x="16" y="11" width="4" height="3" />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: "100%",
    },
    height: {
      type: [Number, String],
      default: "100%",
    },
    strokewidth: {
      type: [Number, String],
      default: 1,
    },
    title: {
      type: String,
      default: "calendário",
    },
    fill: {
      type: String,
      default: "currentColor",
    },
    secondaryfill: {
      type: String,
    },
  },
  computed: {
    _secondaryfill: function () {
      return this.secondaryfill || this.fill;
    },
  },
};
</script>