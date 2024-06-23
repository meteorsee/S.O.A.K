let permission=Notification.permission;
    
if(permission==="granted"){
  showNotification();
}else if(permission==="default"){
  requestAndShowPermission();
}else{
}
function requestAndShowPermission(){
  Notification.requestPermission(function(permission){
    if(permission==="granted"){
      showNotification();
    }
  });
}
function showNotification() {

let notification = new Notification();

notification.onclick = () => {
      notification.close();
      window.parent.focus();
}
}