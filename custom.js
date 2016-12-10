/*Back Key Interception*/
document.addEventListener("intel.xdk.device.ready",function() {
            /*this function intercepts the backbutton click. When user clicks the back button it fires the intel.xdk.device.hardware.back event.*/
            intel.xdk.device.addVirtualPage(); 
        },false);

        
        document.addEventListener("intel.xdk.device.hardware.back", function() {
            /*continue to grab the back button*/
            intel.xdk.device.addVirtualPage();
        }, false);
 
