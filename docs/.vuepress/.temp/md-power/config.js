import { defineClientConfig } from 'vuepress/client'
import Tabs from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import PDFViewer from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/PDFViewer.vue'
import Bilibili from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/Bilibili.vue'
import Youtube from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/Youtube.vue'
import CodePen from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/CodePen.vue'
import JSFiddle from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/JsFiddle.vue'
import Replit from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/Replit.vue'
import CodeSandbox from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/CodeSandbox.vue'
import Plot from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import CodeRepl from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/CodeRepl.vue'
import CanIUse from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/CanIUse.vue'
import FileTreeNode from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import ArtPlayer from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/ArtPlayer.vue'
import AudioReader from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/AudioReader.vue'
import VPDemoBasic from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/VPDemoBasic.vue'
import VPDemoNormal from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/VPDemoNormal.vue'
import Annotation from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/Annotation.vue'
import Abbreviation from '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/components/Abbreviation.vue'

import '/Users/admin_1/workspace/50Self_project/ttswap-doc/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('PDFViewer', PDFViewer)
    app.component('VideoBilibili', Bilibili)
    app.component('VideoYoutube', Youtube)
    app.component('CodePenViewer', CodePen)
    app.component('JSFiddleViewer', JSFiddle)
    app.component('ReplitViewer', Replit)
    app.component('CodeSandboxViewer', CodeSandbox)
    app.component('Plot', Plot)
    app.component('CodeRepl', CodeRepl)
    app.component('CanIUseViewer', CanIUse)
    app.component('FileTreeNode', FileTreeNode)
    app.component('ArtPlayer', ArtPlayer)
    app.component('AudioReader', AudioReader)
    app.component('VPDemoBasic', VPDemoBasic)
    app.component('VPDemoNormal', VPDemoNormal)
    app.component('Annotation', Annotation)
    app.component('Abbreviation', Abbreviation)
  },
  setup() {
    
  }
})
