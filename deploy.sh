#!/bin/sh
cd out
for f in ./*
do
  curl --ftp-create-dirs -T $f -u $FTP_USER:$FTP_PASS ftp://anniekostolany.com/public_html/$f
done
