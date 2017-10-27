#!/bin/sh

for f in ./out/*
do
  curl -T $f -u $FTP_USER:$FTP_PASS ftp://anniekostolany.com/public_html/$(basename "$f")
done
