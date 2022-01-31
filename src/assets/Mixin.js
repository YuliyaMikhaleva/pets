export const Mixin = {
    data(){
        return {
            width:null
        }
    },
    methods: {
        updateWidth() {
            this.width = document.body.clientWidth;
        },
    },
    created() {
        window.addEventListener('resize', this.updateWidth);
        this.updateWidth();
    },
    computed:{
        actualWidth(){
            return this.width
        },
    },
}