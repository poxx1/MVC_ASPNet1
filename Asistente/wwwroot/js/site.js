// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//Scripts Cortos

//Asistente Virtual
 window.watsonAssistantChatOptions = {
      integrationID: "678aca7c-82b1-4dc7-971f-4267a4258b25", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "1a78ba2d-3a56-46f7-b9e7-0dea7184dfde", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });