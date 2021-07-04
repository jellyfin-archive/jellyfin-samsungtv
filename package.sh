#!/bin/bash
#
# Create .zip file anme .xml file needed for upload.
#
set -o errexit
set -o pipefail
set -o nounset
typeset -r infomsg=%%$(basename $0)-info:
typeset -r errmsg=%%$(basename $0)-err:

CONFIG=config.xml
NAME=$(grep '<widgetname' $CONFIG | sed 's/>/</g' | cut -d\< -f3)
VERSION=$(grep '<ver' $CONFIG | sed 's/>/</g' | cut -d\< -f3)
DESCRIPTION=$(grep '<description' $CONFIG | sed 's/>/</g' | cut -d\< -f3)
ZIP=${NAME}_${VERSION}_Europe_$(date +"%Y%m%d").zip
WIDGETLIST=widgetlist.xml
#
# TODO: modifythese values to suit your web server.
#
WEBSERVER_ADDR=192.168.1.108
WEBSERVER_ROOT=/var/www/html/
#
# Create files.
#
echo $infomsg Creating $ZIP $WIDGETLIST
zip -q -r $ZIP app config.xml icon images index.html Main.css widget.info
SIZE=$(stat --format="%s" $ZIP)
cat > $WIDGETLIST <<EOF
<rsp stat="ok">
<list>
    <widget id="$NAME">
        <title>$NAME</title>
        <compression type="zip" size="$SIZE"/>
        <description>$DESCRIPTION</description>
        <download>http://$WEBSERVER_ADDR/$ZIP</download>
    </widget>
</list>
</rsp>
EOF
#
# Copy files to server, and wait for debug messages.
#
echo $infomsg Deploy files to webserver
sudo cp $ZIP $WIDGETLIST $WEBSERVER_ROOT
#
# Copy files to server, and wait for debug messages.
#
echo $infomsg Display debug messages when app is loaded
nc -l 45634

