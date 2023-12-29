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
<img width="670" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/c5d8e7fd-7110-4c80-b788-c605f0510795">
<img width="670" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/1d25bec8-7131-496a-af5b-807a2eafc72d">
<img width="670" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/0ec7feda-9fa9-47df-a5ff-a382b911d652">
<img width="670" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/5ba2da67-4803-4afd-bd96-abbb518b6d2e">
<h3>Use of JWT in utility/Password.ts</h3>
<p>The signature verification process involves the use of a secret key that only the server knows.
The key is used to sign the JWT when it is created and to verify the signature when the JWT is presented to the server.
The signature is a cryptographic hash generated using this secret key and the content of the JWT (header and payload).</p>
<hr>
<img width="731" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/5fb39a49-a6d4-479f-9792-c3670c09dc98">
<hr>
<li>Token Generated</li>
<hr>
<li>Verifying signature</li>
<li>Made Auth.dto.ts</li>
<img width="499" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/2375f013-1870-4856-b857-5bad077487e1">

<p>In payload variable we are able to acess id , name , email , foodTypes </p>
<hr>
<img width="633" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/8b2c5187-280f-465c-a282-833a2af4fdc1">
<hr>
<li>Middleware CommonAuth</li>
<img width="952" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/cda0ffdf-2fdd-4d73-b307-f24b0188cc3c">
<h3>Checking if Signature is Validated or Not</h3>
<li>First Login using Email and Password</li>
<hr>
<img width="869" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/9c94903c-36da-428c-a399-f7f372ac88b3">
<hr>
<li>Copy the Token generated below </li>
<hr>
<img width="647" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/4869fcf4-9c07-48ff-84a5-220d386043d0">
<hr>
<li>Go to Folders three dot and click Edit</li>
<hr>
<img width="248" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/c95bff50-6681-48e4-bbdb-b5b831fc49a0">
<hr>
<li>Go to Authorization tab</li>
<hr>
<img width="345" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/7807106a-31f6-42c2-84e6-c43d0f6cbbb6">
<hr>
<li>Select Type as Bearer Token and paste the copied token below it</li>
<li>This will help to make that user validated and under this folder every request can access this token to verify</li>
<li>Now Click on Save button</li>
<hr>
<img width="631" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/3aae1a26-a8a6-4812-a04b-7a6904e13643">
<hr>
<li>In vandor profile set option of Authorization as bearer Token</li>
<li>Now go to Vandor Profile Request and clear the body as its a Get request and if the user is authenticated it will show us user details</li>
<li>If not validated We will see json message as:{"message":"User not authorized (Authenticate)"}</li>
<hr>
<img width="866" alt="image" src="https://github.com/aditimahabole/food_order_app/assets/78752342/e64f1bfa-182f-46a1-ab59-253d546c47b9">
<hr>











