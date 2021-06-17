import { GetVehicle, VehicleWpToNormalFields, WPPostMetaType, WPPostType } from "./types/wp_dbs";

import express from "express";
import mysql from "mysql2";

// tslint:disable-next-line: no-var-requires
const mysqlssh = require('mysql-ssh');
const fs = require('fs');

import nodemailer from 'nodemailer';

const app = express();
app.listen(() => {
  console.log('listening...');
})

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/api/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Methods', "*");
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  const cars: GetVehicle[] = [];

  mysqlssh.connect({
    host: '93.125.99.123',
    user: 'izyby',
    privateKey: fs.readFileSync('dist/id_rsa'),
    passphrase: '6587erdf@'
  },{
    host: 'localhost',
    user: 'izyby_zubr_leas',
    password: '6587erdf@',
    database: 'izyby_wp'
  })
  .then((client: any) => {
    console.log(1);
    client.query("SELECT * FROM wp_posts WHERE post_type = 'vehicle'" )
      .then((d: any) => {
        console.log(2);

        // res.send(d[0]);
        const result: WPPostType[] = (d[0] as any[]).filter(c => !!c.post_name);
        cars.push(...result.map(r => ({ id: r.ID, post_title: r.post_title, post_name: r.post_name })));

        return client.query(`SELECT * FROM \`wp_postmeta\` WHERE post_id IN (${cars.map(c => c.id).join(', ')})`)
      }).then((d: any) => {
        console.log(3);
        cars.forEach(car => {
          const carFields: WPPostMetaType[] = (d[0] as any[]).filter(dd => dd.post_id == car.id);
          car.thumbnail_id = carFields.find(cf => cf.meta_key == VehicleWpToNormalFields.thumbnail_id)?.meta_value || '';
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

        return client.query(`SELECT * FROM \`wp_posts\` WHERE post_type = 'attachment' AND post_parent IN (${cars.map(c => c.id).join(', ')})`)
      }).then((d: any) => {
        console.log(4);
        const attachments: WPPostType[] = d[0] as any;
        cars.forEach(car => {
          car.attachments = [ (attachments.find(att => att.ID == Number(car.thumbnail_id || 0))?.guid || '') ];
          car.attachments.push(...attachments.filter(att => att.post_parent === car.id && att.ID != Number(car.thumbnail_id || 0)).map(att => att.guid));
        })
        res.send(cars);
        // client.end();
        mysqlssh.close()
      });
  })
  .catch((err: any) => {
    console.log(err)
    mysqlssh.close()
  })

  // res.send('Hello World');
})


const transport = {
  host: 'smtp.mail.ru', // Don’t forget to replace with the SMTP host of your provider
  port: 465,
  secure: true,
  auth: {
    user: 'info@zubr-leasing.by',
    pass: '6587erdf@'
  }
}

const transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.post('/api/email', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Methods', "*");
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  var name = req.body.name
  var phone = req.body.phone
  var content = `name: ${name} \n phone: ${phone} `

  var mail = {
    from: 'info@zubr-leasing.by',
    to: 'info@zubr-leasing.by',  // Change to email address that you want to receive messages on
    subject: 'Заявка на звонок zubr-leasing.by ',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
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
