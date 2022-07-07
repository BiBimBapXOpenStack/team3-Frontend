echo "==========================================="
echo "0. stop nginx"
echo "==========================================="
sudo systemctl stop nginx

echo "==========================================="
echo "1. install dependency"
echo "==========================================="
sudo apt-get update
sudo apt-get install nginx git npm

echo "==========================================="
echo "2. install n"
echo "==========================================="
sudo npm install n -g
sudo n lts

echo "==========================================="
echo "3. git"
echo "==========================================="
cd ~
git config --global user.name "hayoon0524"
git config --global user.email "posile0524@naver.com"
[ -d Frontend ] || git clone https://github.com/BiBimBapXOpenStack/team3-Frontend.git
cd ~/team3-Frontend
git fetch --all
git pull origin develop

echo "==========================================="
echo "4. nginx configuration"
echo "==========================================="
[ -f /etc/nginx/sites-available/default ] && sudo rm /etc/nginx/sites-available/default
[ -f /etc/nginx/sites-enabled/default ] && sudo rm /etc/nginx/sites-enabled/default
[ -f /etc/nginx/sites-available/team3-Frontend.conf ] && sudo rm /etc/nginx/sites-available/team3-Frontend.conf
[ -f /etc/nginx/sites-enabled/team3-Frontend.conf ] && sudo rm /etc/nginx/sites-enabled/team3-Frontend.conf
cd ~/team3-Frontend/bin;
sudo cp team3-Frontend.conf ~/../../etc/nginx/sites-available/team3-Frontend.conf
sudo cat ~/../../etc/nginx/sites-available/team3-Frontend.conf
cd ~
sudo ln -s /etc/nginx/sites-available/team3-Frontend.conf /etc/nginx/sites-enabled/team3-Frontend.conf
sudo cat ~/../../etc/nginx/sites-enabled/team3-Frontend.conf

echo "==========================================="
echo "5. react build"
echo "==========================================="
cd ~/team3-Frontend
[ -d build ] && rm -rf build
echo "*** log with : npm cache ***"
[ -d node_modules ] && rm -rf node_modules
[ -f package-lock.json ] && rm -rf package-lock.json
echo "*** log with : npm install ***"
npm install
echo "*** log with : npm build ***"
npm run build
echo "*** team1-imageboard-front/build/ ***"
cd build/
ls

echo "==========================================="
echo "6. nginx start"
echo "==========================================="
sudo systemctl stop nginx
sudo systemctl start nginx