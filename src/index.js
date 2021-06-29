import { createApp } from 'vue'
import EXIF from 'exif-js'
import style from './index.scss'

const App = {
    data() {
        return {
            info :""
        }
    },
    methods: {
        fileChange(e) {
            const that = this
            this.info = ""
            this.$refs.imgbox.innerHTML = ""
            const file = e.target.files[0]
            const img = document.createElement('img')
            img.id = 'img'
            img.src = URL.createObjectURL(file)
            this.$refs.imgbox.appendChild(img)

            img.onload = function() {
                EXIF.getData(document.getElementById('img'), function () {
                    const res = JSON.stringify(EXIF.getAllTags(this),null , 4)
                    that.info = res
                });
            }
        },
        
    }


}

createApp(App).mount('#app')