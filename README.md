# SamsungSmartTV

Warning: This app is a legacy program meant for older Samsung Smart TVs running Orsay (pre-2015), which has since been replaced by Tizen. It may be possible to use this app by side-loading, but it is considered unsupported (we are unable to help you with it).

You may also wish to try a web browser with Jellyfin, wherever possible.

This is a fork of the original jellyfin-samsungtv repo which is now archived. If you own an older samsung TV as I do you probably wanted a more updated app. Feel free to use and start issues and pull requests. However, I am not the original developer of this app so I maynot be able to provide the best help.

## Installation

Install the app using your own web server's IP and the appropriate instructions 
for your model year TV. Look [here](https://emby.media/community/index.php?/topic/9869-samsung-orsay-smarttv-2011-2015-community-app-install-instructions/&/topic/9869-samsung-smart-tv-app-install-instructions/?p=277346)
for general instructions.

These instructions explain how to prepare the files to be uploaded. It is also 
possible to load the files using a USB stick; these notes don't cover that 
process.

1. Edit the supplied `package.sh` script to set your own IP address and
   document root. The script assumes a modern Linux (Ubuntu) setup; you may 
   need to make other adjustments to suit your environment.
1. Run the script. It will:
   
   1. Create a ZIP file and an XML file that points to it.
   2. Copy the file to your web server's document root.
   3. Run the `netcat` command to listen for debug messages emitted when
      the application is loaded.
