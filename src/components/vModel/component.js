
import Vue from 'vue'


export const  baseModel = {
    props: {
        value: String
    },

    methods: {
        handleClick () {
            this.$emit('input', 'test')
        }
    },
    

    render (h) {
        return (
            <div onClick={() => this.handleClick() }>{this.value}</div>
        )
    }
}


export const checkModel = {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
}

// Vue.component('base-model', {
//     // model: {
//     //     value,
//     //     input
//     // },
//     props: {
//         value: String
//     },

//     render (h) {
//         return (
//             <div>{this.value}</div>
//         )
//     }
// })





