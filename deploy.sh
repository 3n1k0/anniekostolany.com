#!/bin/bash

if [[ $1 == "production" ]]; then
	echo "Uploading files to production..."
	FTP_USER=$FTP_PROD_USER
	FTP_PASS=$FTP_PROD_PASS
else
	echo "Uploading files to staging..."
	FTP_USER=$FTP_STAGE_USER
	FTP_PASS=$FTP_STAGE_PASS
fi

for f in ./out/*
do
  echo "Uploading $f"
  curl -T $f -u $FTP_USER:$FTP_PASS ftp://anniekostolany.com/public_html/$(basename "$f")
done
