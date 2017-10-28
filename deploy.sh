#!/bin/bash

if [[ $1 == "production" ]]; then
	FTP_USER=$FTP_PROD_USER
	FTP_PASS=$FTP_PROD_PASS
else
	FTP_USER=$FTP_STAGE_USER
	FTP_PASS=$FTP_STAGE_PASS
fi

for f in ./out/*
do
  curl -T $f -u $FTP_USER:$FTP_PASS ftp://anniekostolany.com/public_html/$(basename "$f")
done
