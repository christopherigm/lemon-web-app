#! /bin/bash

file_name="";
show_help_message="To display help, use: ./uninstall.sh -h"
show_config_list="To display Nginx or Supervisor config, use: ./uninstall.sh -l"

if [ "$1" == "-h" ]
then
	cat ./uninstall.txt
    exit 0;
fi

if [ "$1" == "-l" ]
then
	echo "Nginx configuration? (y/n)";
    read option;
    if [ "$option" == "y" ]
    then
        echo "======================================";
        ls /etc/nginx/sites-available;
        echo "======================================";
    fi
	echo "Supervisor configuration? (y/n)";
    read option;
    if [ "$option" == "y" ]
    then
        echo "======================================";
        ls /etc/supervisor/conf.d;
        echo "======================================";
    fi
    exit 0;
fi

while getopts d:p:e: flag
do
    case "${flag}" in
        d) dns=${OPTARG};;
        e) envt=${OPTARG};;
    esac
done

if [ ! -n "$dns" ]
then
	echo "Error: DNS variable not provided: -d my-web-app.com";
    echo $show_help_message;
    echo $show_config_list;
    exit 1;
fi
if [ ! -n "$envt" ]
then
	echo "Error: environtment variable not provided: -e qa";
    echo $show_help_message;
    echo $show_config_list;
    exit 1;
fi

file_name="$dns.conf";

echo "Uninstall Nginx configuration? (y/n)"
read uninstall

if [ "$uninstall" == "y" ]
then
    sudo rm /etc/nginx/sites-available/$file_name;
    sudo rm /etc/nginx/sites-enabled/$file_name;
    sudo nginx -t;
    sudo service nginx restart;
fi

echo "Done"
exit 0;
