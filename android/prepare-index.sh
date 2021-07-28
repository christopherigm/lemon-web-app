#! /bin/bash

sed -i 's/\/static/static/g' app/www/index.html
sed -i 's/\/assets/assets/g' app/www/index.html

sed -i 's/{{description}}/description/g' app/www/index.html
sed -i 's/{{title}}/title/g' app/www/index.html
sed -i 's/{{{escapeJS data}}}//g' app/www/index.html

cat app/www/index.html

echo 'Index ready!'
