import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";

const files = await imagemin(["./data/rawImages/*.{jpg,png}"], {
  destination: "./data/webpImages/",
  plugins: [
    imageminJpegtran(),
    imageminPngquant({
      quality: [0.6, 0.8],
    }),
    imageminWebp({ quality: 75 }),
  ],
});

console.log(files);
//=> [{data: <Uint8Array 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
