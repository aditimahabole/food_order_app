# food_order_app

<hr>
<p> git clone empty repo -> cd foldername -> npm init -> (package.json is made ) </p>
<p> tsc --init (to have tsconfig file) </p>
<p> created index.ts in Main folder</p>
<p> dont forget to add scripts to package.json file for index.ts</p>
<hr>
<h4> Created Directories</h4>
<ul>
<li>utility</li>
<li>services </li>
<li>routes</li>
<li>models</li>
<li>middlewares</li>
<li>images</li>
<li>images</li>
<li>dto</li>
<li>controllers</li>
<li>config</li>
</ul>
<hr>
<h4> We created two routes AdminRoute and VandorRoute in routes Folder </h4>
<p> Then we moved to contollers Folder to control AdminRoute and inside AdminControll.ts we created three functions that are
  <br>
  <strong> 
  CreateVandor : for posting data</strong><br>
  <strong> GetVandor : for getting all vandors </strong><br>
 <strong>  GetVandorbyID : getting vandor by ID </strong>
  <br>
</p>
<hr>
<h4>Then in AdminRoute.ts we created routes</h4>
<ul>
<li>router.post('/vandor',CreateVandor)</li>
<li>router.post('/vandors',GetVandor )</li>
<li>router.post('/vandor/:id',GetVandorbyID)</li>
</ul>
<hr>
<p>Now we moved to dto folder (Data Transfer Object)</p>
<p> We created Vandor Interface (you can say class)</p>

<hr>
<p>For fetching data from url we will use body-parser in main file </p>
<hr>
<p>Then we completed CreateVandor function in AdminControl.ts file</p>
<img width="641" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/ec7ec256-fc6a-4ad6-858e-2de119152195">
<hr>
<h3>Creating Model</h3>
<li>Installed mongoose dependencies npm i mongoose @types/mongoose</li>
<p>Inside Vandor Scema foods field is an array of object ids , basciaaly its forein key from Food Table</p>
<p>It's an array of objects, where each object is expected to be of type mongoose.Schema.ObjectId and is referring to the "food" model (specified by ref: "food")</p>
<hr>
<img width="374" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/6c997b45-f9c4-4fa2-ae72-cfb5963b2dc1">
<hr>
<p>Creating a vandor in AdminController.ts , checking if it already exists and using salt excrypting the password </p>
<p>A Password utility is made inside utility folder where generating salt and hashing is done.</p>
<p>Install below first : </p>
<li>npm i bcrypt</li>
<li>npm i --save-dev @types/bcrypt</li>
<h3>Removing password and salt and createdAt and such things while sending as JSON</h3>
<img width="843" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/39e05706-1dd1-4eb8-87dd-8e6fcf913e0d"><br>
<h6>JSON MESSAGE</h6>
<img width="342" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/7b07d145-c514-42c3-af97-ea1a6b35bb38">
<br>
<h6>MONGO DB </h6>
<img width="566" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/3b7bf82b-986e-4846-84b4-f02dc580e562">

<hr>
<p>As you can see now we are not able to see the password in JSON format which is good for security purpose , but in database they all are stored , so hacker will not be able to acess password or salt from json response as we have removed it .</p>
<p>20 dec 23</p>
<li>sucessfully created model and applied only one user entry , hased password using bcrypt and salt , and removed password and salt field from JSON message </li>
<hr>
<h1?>PART 2</h1>
<p>Storing helper classes in utility folder if data is not available or incorrect</p>
<p>Completed getVandors , getvandorById</p>
<h3>Working on Vandor route</h3>
<p>made VandorLogin<p>
