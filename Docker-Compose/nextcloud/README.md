Nextcloud with MariaDB
https://www.youtube.com/watch?v=Wj0SsbRbCNo
NextCloud .htaccess Fix:
https://dbt3ch.com/books/nextcloud/page/increase-file-size-uploads-with-htaccess


#### DECEPRECIATED, should look at the latest dockerhub or truenas scale kubernetes installations


FIX UPLOAD BIG FILES


/var/www/nextcloud/.user.ini

```bash
php_value upload_max_filesize 10G
php_value post_max_size 10G
php_value max_input_time 3600
php_value max_execution_time 3600

```

and NGINX ADVANCED

```bash
proxy_set_header Host $host;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_max_temp_file_size 0;
client_max_body_size 0;
proxy_http_version 1.1;
proxy_request_buffering off; 
```

and PRESTO, it works!