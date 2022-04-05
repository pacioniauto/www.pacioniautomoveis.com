<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    :width="width"
    :height="height"
  >
    <title>{{ title }}</title>
    <g :fill="_secondaryfill">
      <path
        d="M31.984,15.721a2.414,2.414,0,0,0-2.119-2.12l0,0L27.388,13.3A11.618,11.618,0,0,0,25.962,9.86l1.532-1.97A2.413,2.413,0,0,0,24.108,4.5l-1.97,1.532A11.618,11.618,0,0,0,18.7,4.61l-.309-2.472a2.412,2.412,0,0,0-4.793,0L13.29,4.61A11.64,11.64,0,0,0,9.853,6.036L7.888,4.5A2.413,2.413,0,0,0,4.5,7.89L6.034,9.86A11.592,11.592,0,0,0,4.608,13.3l-2.473.309a2.413,2.413,0,0,0,0,4.793l2.473.308a11.608,11.608,0,0,0,1.426,3.438L4.5,24.11A2.413,2.413,0,0,0,7.888,27.5l1.97-1.532A11.618,11.618,0,0,0,13.3,27.39l.309,2.472a2.412,2.412,0,0,0,4.792,0L18.7,27.39a11.618,11.618,0,0,0,3.437-1.426l1.97,1.532A2.413,2.413,0,0,0,27.5,24.11l-1.532-1.97A11.592,11.592,0,0,0,27.392,18.7l2.473-.309A2.412,2.412,0,0,0,31.984,15.721ZM16,21a5,5,0,1,1,5-5A5,5,0,0,1,16,21Z"
        :fill="fill"
      />
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
      default: "Motor",
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