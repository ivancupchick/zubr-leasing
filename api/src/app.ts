import { GetVehicle, VehicleWpToNormalFields, WPPostMetaType, WPPostType } from "./types/wp_dbs";

import express from "express";
import mysql from "mysql2";

const app = express();
app.listen(() => {
  console.log()
})

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/api/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Methods', "*");
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  const cars: GetVehicle[] = [];

  const connection = mysql.createConnection({
    host: "localhost",
    user: "zubrleas_root",
    database: "zubrleas_wp",
    password: "6587erdf@",
  }).promise();

  connection.query("SELECT * FROM wp_posts WHERE post_type = 'vehicle'")
    .then((d) => {
      console.log(d);

      // res.send(d[0]);
      const result: WPPostType[] = d[0] as any;
      cars.push(...result.map(r => ({ id: r.ID, post_title: r.post_title, post_name: r.post_name })));

      return connection.query(`SELECT * FROM \`wp_posts\` WHERE post_type = 'attachment' AND post_parent IN (${cars.map(c => c.id).join(', ')})`)
    }).then((d) => {
      const attachments: WPPostType[] = d[0] as any;
      cars.forEach(car => {
        car.attachments = attachments.filter(att => att.post_parent === car.id).map(att => att.guid);
      })
      return connection.query(`SELECT * FROM \`wp_postmeta\` WHERE post_id IN (${cars.map(c => c.id).join(', ')})`)
    }).then((d) => {
      cars.forEach(car => {
        const carFields: WPPostMetaType[] = (d[0] as any[]).filter(dd => dd.post_id == car.id);
        car.year = carFields.find(cf => cf.meta_key == VehicleWpToNormalFields.year)?.meta_value || '';
        car.bodyType = carFields.find(cf => cf.meta_key == VehicleWpToNormalFields.bodyType)?.meta_value || '';
        car.engineCapacity = carFields.find(cf => cf.meta_key == VehicleWpToNormalFields.engineCapacity)?.meta_value || '';
        car.mileage = carFields.find(cf => cf.meta_key == VehicleWpToNormalFields.mileage)?.meta_value || '';
        car.petrol = carFields.find(cf => cf.meta_key == VehicleWpToNormalFields.petrol)?.meta_value || '';
        car.price = carFields.find(cf => cf.meta_key == VehicleWpToNormalFields.price)?.meta_value || '';
        car.transmission = carFields.find(cf => cf.meta_key == VehicleWpToNormalFields.transmission)?.meta_value || '';
        car.wheelDrive = carFields.find(cf => cf.meta_key == VehicleWpToNormalFields.wheelDrive)?.meta_value || '';
        car.vehicle_overview = carFields.find(cf => cf.meta_key == VehicleWpToNormalFields.vehicle_overview)?.meta_value || '';
        car.video = carFields.find(cf => cf.meta_key == VehicleWpToNormalFields.video)?.meta_value || '';
      })
      res.send(cars);
      connection.end();
    });


  // res.send('Hello World');
})







/*
SELECT * FROM `wp_posts` WHERE post_type = 'vehicle'
Получить фото
SELECT * FROM `wp_posts` WHERE post_type = 'attachment' AND post_parent = 'id' ( get 'guid' )
Получить информацию
SELECT * FROM `wp_postmeta` WHERE post_id = 'id' ( meta_key - Программное названия поля meta_value - значение поля )
*/

/*
получить пару и модель
wp_term_relationships` (`object_id`, `term_taxonomy_id`, `term_order`) тут связи


INSERT INTO `wp_term_taxonomy` (`term_taxonomy_id`, `term_id`, `taxonomy`, `description`, `parent`, `count`)  тут значения марки и модели (taxonomy = 'model OR 'make')


INSERT INTO `wp_postmeta` (`meta_id`, `post_id`, `meta_key`, `meta_value`) VALUES
(21855, 10276, 'make', '178'),
*/
