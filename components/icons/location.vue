<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 48 48"
    class="locationIcon"
  >
    <title>{{ title }}</title>
    <g>
      <path
        d="M45.988,21a1,1,0,0,1-.632-.226L23.988,3.292,2.621,20.774a1,1,0,0,1-1.266-1.548l22-18a1,1,0,0,1,1.266,0l22,18A1,1,0,0,1,45.988,21Z"
      ></path>
      <path
        d="M26.988,33.634c0-6.656,5.593-10.634,11-10.634a11.543,11.543,0,0,1,4,.726l0-3.126-18-14.724L5.988,20.6V43a2,2,0,0,0,2,2h24.9C30.193,41.923,26.988,37.458,26.988,33.634Z"
      ></path>
      <path
        d="M37.988,25c-4.424,0-9,3.229-9,8.634,0,5.015,7.459,12.278,8.31,13.09a1,1,0,0,0,1.381,0c.85-.812,8.309-8.075,8.309-13.09C46.988,28.229,42.412,25,37.988,25Zm0,12a3,3,0,1,1,3-3A3,3,0,0,1,37.988,37Z"
      ></path>
    </g>
  </svg>
</template>

<style lang="scss">

svg.locationIcon {
  fill: $primary;
}

</style>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "property location",
    },
  },
};
</script>