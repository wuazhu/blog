<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'Valine',
  mounted(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: 'L7Y8kAo11Tl1keVsl4eCcsK2-gzGzoHsz',// your appId
      appKey: 'h51NPbj8oUmMujNU0tc10d5S', // your appKey
      notify:false, 
      verify:false, 
      avatar:'mm', 
      placeholder: 'just go go' 
    });
  },
}
</script>