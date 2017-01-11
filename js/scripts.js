$(document).ready(function() {

  $("button").click(function(){
    var addOrRemove = true;
    // console.log("'."+this.className+"'");
      $(".text_div").removeClass("show-elem hidden-elem");
      $(".text_div").addClass("hidden-elem");
      $("div."+this.className).removeClass("hidden-elem");
      $("div."+this.className).addClass("show-elem");

    // $("div."+this.className).toggleClass("show-elem", $("div."+this.className).hasClass("show-elem"));
    // console.log(typeof(addOrRemove));
  })

  // $(".js").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".js").removeClass("hidden-elem");
  //   $(".js").addClass("show-elem");
  // })
  //
  // $(".op").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".op").removeClass("hidden-elem");
  //   $(".op").addClass("show-elem");
  // })
  //
  // $(".var").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".var").removeClass("hidden-elem");
  //   $(".var").addClass("show-elem");
  // })
  //
  // $(".var-name").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".var-name").removeClass("hidden-elem");
  //   $(".var-name").addClass("show-elem");
  // })
  //
  // $(".func").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".func").removeClass("hidden-elem");
  //   $(".func").addClass("show-elem");
  // })
  //
  // $(".meth").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".meth").removeClass("hidden-elem");
  //   $(".meth").addClass("show-elem");
  // })
  //
  // $(".arg").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".arg").removeClass("hidden-elem");
  //   $(".arg").addClass("show-elem");
  // })
  //
  // $(".par").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".par").removeClass("hidden-elem");
  //   $(".par").addClass("show-elem");
  // })
  //
  // $(".retr").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".retr").removeClass("hidden-elem");
  //   $(".retr").addClass("show-elem");
  // })
  //
  // $(".chain").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".chain").removeClass("hidden-elem");
  //   $(".chain").addClass("show-elem");
  // })
  //
  // $(".string").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".string").removeClass("hidden-elem");
  //   $(".string").addClass("show-elem");
  // })
  //
  // $(".boo").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".boo").removeClass("hidden-elem");
  //   $(".boo").addClass("show-elem");
  // })
  //
  // $(".und").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".und").removeClass("hidden-elem");
  //   $(".und").addClass("show-elem");
  // })
  //
  // $(".nan").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".nan").removeClass("hidden-elem");
  //   $(".nan").addClass("show-elem");
  // })
  //
  // $(".esc").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".esc").removeClass("hidden-elem");
  //   $(".esc").addClass("show-elem");
  // })
  //
  // $(".alt").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".alt").removeClass("hidden-elem");
  //   $(".alt").addClass("show-elem");
  // })
  //
  // $(".com").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".com").removeClass("hidden-elem");
  //   $(".com").addClass("show-elem");
  // })
  //
  // $(".jq").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".jq").removeClass("hidden-elem");
  //   $(".jq").addClass("show-elem");
  // })
  //
  // $(".attr").click(function(){
  //   $(".text_div").removeClass("show-elem hidden-elem");
  //   $(".text_div").addClass("hidden-elem");
  //   $(".attr").removeClass("hidden-elem");
  //   $(".attr").addClass("show-elem");
  // })
})
