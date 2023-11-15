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
