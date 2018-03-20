// Example file src/helpers/bold.js
module.exports = function(options) {
    var mso ='<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.EXAMPLE.com/" style="height:45px;v-text-anchor:middle;width:150px;" arcsize="5%" strokecolor="#668cb3" fillcolor="#668cb3"><w:anchorlock/><center style="color:#ffffff;font-family:Amplitude, Arial, sans-serif;font-size:14px;font-weight:bold; text-transform: uppercase">'+options.fn(this)+'</center> </v:roundrect>';
    return mso;
}