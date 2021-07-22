#! /bin/bash

file_name="";
show_help_message="To display help, use: ./install.sh -h";

if [ "$1" == "-h" ]
then
	cat ./install.txt
    exit 0;
fi

while getopts d:f:e: flag
do
    case "${flag}" in
        d) dns=${OPTARG};;
        f) folder=${OPTARG};;
        e) envt=${OPTARG};;
    esac
done

# ============ Functions ============
# $1 type -> nginx / supervisor
PopulateFile () {
    file_name="$dns.conf";
    cp "$1.conf" $file_name;
    chmod 775 $file_name;
    sed -i "s/DNS/$dns/g" $file_name;
    sed -i "s/ENVT/$envt/g" $file_name;
    sed -i "s/FOLDER/$folder/g" $file_name;
}

if [ ! -n "$dns" ]
then
	echo "Error: DNS variable not provided: -d example.com";
    echo $show_help_message;
    exit 1;
fi
if [ ! -n "$folder" ]
then
	echo "Error: folder variable not provided: -f web-app";
    echo $show_help_message;
    exit 1;
fi
if [ ! -n "$envt" ]
then
	echo "Error: environtment variable not provided: -e staging";
    echo $show_help_message;
    exit 1;
fi

echo "Create Nginx configuration? (y/n)";
read create;

if [ "$create" == "y" ]
then
	PopulateFile "nginx";
    echo "======================================";
    echo "$file_name:";
    cat $file_name;
    echo "======================================";
    echo "Deploy Nginx configuration? (y/n)";
    read deploy;
    if [ "$deploy" == "y" ]
    then
        sudo cp ./$file_name /etc/nginx/sites-available/;
        sudo ln -s /etc/nginx/sites-available/$file_name /etc/nginx/sites-enabled/;
        sudo nginx -t;
        sudo service nginx restart;
    fi
    echo "Delete Nginx configuration? (y/n)"
    read delete_file;
    if [ "$delete_file" == "y" ]
    then
        rm "$file_name";
    fi
fi

echo "Done";
exit 0;
