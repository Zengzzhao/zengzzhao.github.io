import dataV from '@newpanjing/datav-vue3';
import { defineAppSetup } from 'valaxy'


export default defineAppSetup(({ app }) => {
    app.use(dataV)
})