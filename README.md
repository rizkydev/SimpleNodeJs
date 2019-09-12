# Simple NodeJs With MySql
This Repository For Self Remainder About Create Simple API With NodeJs And MySql Database In Windows Localhost 

<h3>1) First Step</h3>
 <ul>
  <li>You must install <a href="https://nodejs.org">NodeJs</a>.</li>
  <li>You must install <a href="https://git-scm.com/downloads">Git</a>.</li>
  <li>For editor, I used <a href="https://code.visualstudio.com/">Visual Code</a>.</li>
  <li>For database MySql, I used <a href="https://www.apachefriends.org/download.html">XAMPP</a>.</li>
  <li>For testing, I used <a href="https://www.getpostman.com/">Postman</a>.</li>
</ul> 
<h3>2) Setting</h3>
 <ul>
  <li>Pull this Git to your folder in localdisk. </li>
  <li>Import sql script (in folder db) to your database with name "test". </li>
  <li>Open Terminal / CMD. Make sure you set Terminal / CMD in your Git folder. </li>
  <li>Run your Terminal / CMD to install <a href="https://www.npmjs.com/">NPM</a> to your folder with this command : <pre>nmp install</pre> </li>
</ul>
<h3>3) Running Your API</h3>
 <ul>
  <li>For this example. I used <a href="https://pm2.keymetrics.io/">PM2</a> as manager for <a href="https://pm2.keymetrics.io/docs/usage/cluster-mode/">Cluster Mode</a> and you can edit in <b><i>ecosystem.config.js</i></b>.</li>
  <li>For IP Host and Port. You can edit in <b><i>src\app.js</i></b>. </li>
  <li>For Database. You can edit in <b><i>src\db.js</i></b>. </li>
  <li>For Query Process. You can edit in <b><i>src\processData.js</i></b>. </li>
  <li>Run your Terminal / CMD to start API with this command : <pre>pm2 start ecosystem.config.js</pre> </li>
</ul>
<h3>4) Something Wrong ?</h3>
 <ul>
  <li>You can look some issue in their log with this command : <pre>pm2 log</pre> and use Ctrl + C to stop.</li>
  <li>If you have some issue with looping error. you must try hard to stop with this command : <pre>pm2 stop ecosystem.config.js</pre></li>
  <li>If you have some issue with your package. Maybe didnt recognize PM2. Then try reinstall with "-g" like this  <pre>npm install pm2 -g</pre></li>
  <li>If you have some issue with your local IP Host and Port. Maybe try with this  <pre>net stop was /y</pre> and if didnt work. just <b>Change Port Number</b>.</li>
  <li>If you have some issue with connection to your database. Please check to <b>Initialization in db.js</b> with right name, address and password.</li>
  <li>After you change some line but didnt work. Maybe you must reload that file <pre>pm2 reload ecosystem.config.js</pre> or for make sure, you can stop and delete <pre>pm2 delete ecosystem.config.js</pre> then you restart <pre>pm2 restart ecosystem.config.js</pre></li>
  <li>If you confused with many log, you can clean it with stop and flush <pre>pm2 flush</pre> but you must restart the process.</li>
</ul>
<h3>5) Test API's With Postman</h3>
 <ul>
  <li>After you start process and run log. You can open <b>Postman</b>.</li>
  <li>You can create <b>collection</b> and make new <b>request</b>.</li>
  <li>First thing, you can use <b>GET Procedure</b> and use this address <b>http://0.0.0.0:8082/processData/</b> then you press <b>Send</b>.</li>
  <li>For next test, you must set <b>Key</b> in <b>Body</b> option with <b>x-www-form-urlencoded</b> with <b>Your Random Value</b>.</li>
</ul>
<h3>6) Test List</h3>
 <ul>
  <li><b>POST</b> Procedure in <b>http://0.0.0.0:8082/processData/readData</b> address without key.</li>
  <li><b>POST</b> Procedure in <b>http://0.0.0.0:8082/processData/searchData</b> address with <b>inputUser</b> key.</li>
  <li><b>POST</b> Procedure in <b>http://0.0.0.0:8082/processData/insertData</b> address with <b>inputUser</b> and <b>inputPassword</b> key.</li>
  <li><b>POST</b> Procedure in <b>http://0.0.0.0:8082/processData/insertData</b> address with <b>inputUser</b> and <b>inputPassword</b> key.</li>
  <li><b>POST</b> Procedure in <b>http://0.0.0.0:8082/processData/updateData</b> address with <b>inputID</b>, <b>inputUser</b> and <b>inputPassword</b> key.</li>
  <li><b>POST</b> Procedure in <b>http://0.0.0.0:8082/processData/deleteData</b> address with <b>inputID</b> key.</li>
</ul>
<h3>7) And The End</h3>
<p>It's your turn to modification with what you needs, maybe some security for <a href="https://www.npmjs.com/package/bcrypt">Hashing Password</a> or <a href="https://www.npmjs.com/package/jsonwebtoken">Secret Token</a></p>