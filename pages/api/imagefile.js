import cloudinary from "cloudinary"
import formidable from 'formidable';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
  });
  export const config = {
    api: {
      bodyParser: false,
    },
  };
  

  export default async function handler(req, res) {
  
    const data = await new Promise(function (resolve, reject) {
      const form = new formidable.IncomingForm({ keepExtensions: true });
      form.parse(req, function (err, fields, files) {
        if (err) return reject(err);
        resolve({ fields, files });
      });
      
    });
    
    const imgResult =  await cloudinary.uploader.upload(data.files.image.path);
      console.log("upload image url =>", imgResult);
      res.json({
          url: imgResult.secure_url,
           public_id: imgResult.public_id     
         })
        


  }

