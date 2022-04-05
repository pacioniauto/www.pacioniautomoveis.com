<template><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" :width="width" :height="height"><title>{{title}}</title><g :fill="_secondaryfill"><path d="M21,1a1,1,0,0,0-1,1V14a1,1,0,0,0,1,1A12.013,12.013,0,0,1,33,27a1,1,0,0,0,1,1H46a1,1,0,0,0,1-1A26.029,26.029,0,0,0,21,1Zm5.5,9A1.5,1.5,0,1,1,28,8.5,1.5,1.5,0,0,1,26.5,10Zm8,5A1.5,1.5,0,1,1,36,13.5,1.5,1.5,0,0,1,34.5,15ZM41,21.5A1.5,1.5,0,1,1,39.5,20,1.5,1.5,0,0,1,41,21.5Z"/> <circle cx="22" cy="26" r="5" :fill="fill"/> <path d="M22,41a14.992,14.992,0,0,1-4-29.442V5.393A21,21,0,1,0,42.607,30H36.442A15.014,15.014,0,0,1,22,41Z" :fill="fill"/></g></svg></template>

<script>
export default {
	props: {
		width: {
			type: [Number, String],
			default: "100%"
		},
		height: {
			type: [Number, String],
			default: "100%"
		},
		strokewidth: {
			type: [Number, String],
			default: 1
		},
		title: {
			type: String,
			default: "brakes"
		},
		fill: {
			type: String,
			default: "currentColor"
		},
		secondaryfill: {
			type: String
		}
	},
	computed: {
		_secondaryfill: function () {
			return this.secondaryfill || this.fill
		}
	}
}
</script>