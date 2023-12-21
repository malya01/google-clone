const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown" , function(Event){
    if(Event.code=== "Enter"){
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.co.in/search?q=" + input + "&sca_esv=592813646&ei=zzuEZf7VDJjm2roPhJGYmAc&ved=0ahUKEwi--fnMz6CDAxUYs1YBHYQIBnMQ4dUDCBA&uact=5&oq=" + input + "&gs_lp=Egxnd3Mtd2l6LXNlcnAiCGJlbGlldmVyMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMg0QABiABBiKBRhDGLADMg0QABiABBiKBRhDGLADMg0QABiABBiKBRhDGLADMg0QABiABBiKBRhDGLADMg4QABjkAhjWBBiwA9gBATIOEAAY5AIY1gQYsAPYAQEyDhAAGOQCGNYEGLAD2AEBMhMQLhiABBiKBRhDGMgDGLAD2AECMhMQLhiABBiKBRhDGMgDGLAD2AECMhMQLhiABBiKBRhDGMgDGLAD2AECMhMQLhiABBiKBRhDGMgDGLAD2AECSJ4GUMgEWMgEcAF4AZABAJgBAKABAKoBALgBA8gBAPgBAeIDBBgAIEGIBgGQBhO6BgYIARABGAm6BgYIAhABGAg&sclient=gws-wiz-serp"
}
